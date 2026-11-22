/**
 * Os livros não têm imagem de capa, então geramos uma capa ilustrativa:
 * a cor é escolhida a partir do título, de forma estável (o mesmo livro
 * sempre tem a mesma capa), usando uma paleta derivada da marca.
 */
const PALETA = [
  ['#0f3554', '#16486f'], // marinho
  ['#b45309', '#f5a50b'], // âmbar
  ['#065f46', '#10b981'], // verde
  ['#7c2d12', '#ea580c'], // terracota
  ['#4c1d95', '#7c3aed'], // roxo
  ['#155e75', '#06b6d4'], // ciano
  ['#831843', '#db2777'], // vinho
  ['#334155', '#64748b'], // grafite
];

function hash(texto: string): number {
  let h = 0;
  for (let i = 0; i < texto.length; i++) {
    h = (h * 31 + texto.charCodeAt(i)) >>> 0;
  }
  return h;
}

export function capaLivro(livro: any): string {
  const chave = (livro?.titulo || livro?.genero || '').toString().toLowerCase();
  const [de, ate] = PALETA[hash(chave) % PALETA.length];
  return `linear-gradient(145deg, ${de} 0%, ${ate} 100%)`;
}

export function nomesAutores(livro: any): string {
  return livro?.autores?.map((a: any) => a.nome).join(', ') || 'Autor desconhecido';
}
