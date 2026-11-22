# Roteiro de validação da atividade de hardening.
# Executa cada teste, mostra no terminal e salva o log em evidencias/.
#
# Uso (na raiz do repositório, com os contêineres no ar):
#   powershell -ExecutionPolicy Bypass -File scripts\validar-hardening.ps1

$ErrorActionPreference = 'Continue'
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root
$out = Join-Path $root 'evidencias'
New-Item -ItemType Directory -Force $out | Out-Null

function Run-Step {
    param([string]$Titulo, [string]$Arquivo, [scriptblock]$Bloco)
    Write-Host ""
    Write-Host "=== $Titulo ===" -ForegroundColor Cyan
    $saida = & $Bloco 2>&1 | Out-String
    $texto = "# $Titulo`n# $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')`n`n$saida"
    Write-Host $saida
    $texto | Out-File -Encoding utf8 (Join-Path $out $Arquivo)
}

# ---------------------------------------------------------------- Etapa 3
Run-Step 'Hadolint: docker run --rm -i hadolint/hadolint < api/Dockerfile' '01-hadolint.log' {
    Get-Content -Raw api\Dockerfile | docker run --rm -i hadolint/hadolint
    if ($LASTEXITCODE -eq 0) { 'RESULTADO: aprovado, nenhum aviso ou erro (exit code 0)' }
    else { "RESULTADO: reprovado (exit code $LASTEXITCODE)" }
}

# ---------------------------------------------------------------- Testes
Run-Step 'docker exec backend_api whoami' '02-whoami.log' {
    docker exec backend_api whoami
    docker exec backend_api id
}

Run-Step 'docker exec backend_api touch /teste.txt' '03-read-only.log' {
    docker exec backend_api touch /teste.txt
    "exit code: $LASTEXITCODE"
}

Run-Step 'Configuração de segurança aplicada ao contêiner' '04-inspect.log' {
    docker inspect backend_api --format 'User={{.Config.User}}  ReadonlyRootfs={{.HostConfig.ReadonlyRootfs}}  CapDrop={{.HostConfig.CapDrop}}  SecurityOpt={{.HostConfig.SecurityOpt}}  Tmpfs={{.HostConfig.Tmpfs}}'
    docker inspect backend_api --format '{{range .Mounts}}{{.Type}} {{.Name}} -> {{.Destination}} (RW={{.RW}}){{println}}{{end}}'
}

# ---------------------------------------------------------------- SQLite
$contar = "const{PrismaClient}=require('@prisma/client');const p=new PrismaClient();Promise.all([p.autor.count(),p.livro.count(),p.cliente.count()]).then(([a,l,c])=>{console.log('autores='+a+' livros='+l+' clientes='+c);return p.`$disconnect()})"

Run-Step 'Gravação no volume do SQLite (/app/data/app.db)' '05-sqlite.log' {
    'Antes:'
    docker exec backend_api ls -la /app/data
    docker exec backend_api node -e $contar

    # Simula o que o frontend faz: requisição passando pelo Nginx (/api)
    $nome = "Autor teste $(Get-Date -Format 'HHmmss')"
    $body = @{ nome = $nome } | ConvertTo-Json
    ''
    "POST http://localhost:8080/api/autor  { nome: '$nome' }"
    Invoke-RestMethod -Method Post -Uri 'http://localhost:8080/api/autor' -ContentType 'application/json' -Body $body | ConvertTo-Json -Compress

    ''
    'Depois:'
    docker exec backend_api ls -la /app/data
    docker exec backend_api node -e $contar
}

Write-Host ""
Write-Host "Logs salvos em $out" -ForegroundColor Green
