
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Livro
 * 
 */
export type Livro = $Result.DefaultSelection<Prisma.$LivroPayload>
/**
 * Model Emprestismo
 * 
 */
export type Emprestismo = $Result.DefaultSelection<Prisma.$EmprestismoPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Autor
 * 
 */
export type Autor = $Result.DefaultSelection<Prisma.$AutorPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livro`: Exposes CRUD operations for the **Livro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livros
    * const livros = await prisma.livro.findMany()
    * ```
    */
  get livro(): Prisma.LivroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emprestismo`: Exposes CRUD operations for the **Emprestismo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Emprestismos
    * const emprestismos = await prisma.emprestismo.findMany()
    * ```
    */
  get emprestismo(): Prisma.EmprestismoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.autor`: Exposes CRUD operations for the **Autor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autors
    * const autors = await prisma.autor.findMany()
    * ```
    */
  get autor(): Prisma.AutorDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Livro: 'Livro',
    Emprestismo: 'Emprestismo',
    Cliente: 'Cliente',
    Autor: 'Autor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "livro" | "emprestismo" | "cliente" | "autor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Livro: {
        payload: Prisma.$LivroPayload<ExtArgs>
        fields: Prisma.LivroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LivroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LivroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findFirst: {
            args: Prisma.LivroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LivroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          findMany: {
            args: Prisma.LivroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          create: {
            args: Prisma.LivroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          createMany: {
            args: Prisma.LivroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LivroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          delete: {
            args: Prisma.LivroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          update: {
            args: Prisma.LivroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          deleteMany: {
            args: Prisma.LivroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LivroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LivroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>[]
          }
          upsert: {
            args: Prisma.LivroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LivroPayload>
          }
          aggregate: {
            args: Prisma.LivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivro>
          }
          groupBy: {
            args: Prisma.LivroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.LivroCountArgs<ExtArgs>
            result: $Utils.Optional<LivroCountAggregateOutputType> | number
          }
        }
      }
      Emprestismo: {
        payload: Prisma.$EmprestismoPayload<ExtArgs>
        fields: Prisma.EmprestismoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmprestismoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestismoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmprestismoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestismoPayload>
          }
          findFirst: {
            args: Prisma.EmprestismoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestismoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmprestismoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestismoPayload>
          }
          findMany: {
            args: Prisma.EmprestismoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestismoPayload>[]
          }
          create: {
            args: Prisma.EmprestismoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestismoPayload>
          }
          createMany: {
            args: Prisma.EmprestismoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmprestismoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestismoPayload>[]
          }
          delete: {
            args: Prisma.EmprestismoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestismoPayload>
          }
          update: {
            args: Prisma.EmprestismoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestismoPayload>
          }
          deleteMany: {
            args: Prisma.EmprestismoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmprestismoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmprestismoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestismoPayload>[]
          }
          upsert: {
            args: Prisma.EmprestismoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmprestismoPayload>
          }
          aggregate: {
            args: Prisma.EmprestismoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmprestismo>
          }
          groupBy: {
            args: Prisma.EmprestismoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmprestismoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmprestismoCountArgs<ExtArgs>
            result: $Utils.Optional<EmprestismoCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Autor: {
        payload: Prisma.$AutorPayload<ExtArgs>
        fields: Prisma.AutorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findFirst: {
            args: Prisma.AutorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          findMany: {
            args: Prisma.AutorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          create: {
            args: Prisma.AutorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          createMany: {
            args: Prisma.AutorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          delete: {
            args: Prisma.AutorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          update: {
            args: Prisma.AutorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          deleteMany: {
            args: Prisma.AutorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>[]
          }
          upsert: {
            args: Prisma.AutorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutorPayload>
          }
          aggregate: {
            args: Prisma.AutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutor>
          }
          groupBy: {
            args: Prisma.AutorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutorCountArgs<ExtArgs>
            result: $Utils.Optional<AutorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    livro?: LivroOmit
    emprestismo?: EmprestismoOmit
    cliente?: ClienteOmit
    autor?: AutorOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type LivroCountOutputType
   */

  export type LivroCountOutputType = {
    autores: number
    emprestimos: number
  }

  export type LivroCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autores?: boolean | LivroCountOutputTypeCountAutoresArgs
    emprestimos?: boolean | LivroCountOutputTypeCountEmprestimosArgs
  }

  // Custom InputTypes
  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LivroCountOutputType
     */
    select?: LivroCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountAutoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutorWhereInput
  }

  /**
   * LivroCountOutputType without action
   */
  export type LivroCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestismoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    emprestimos: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | ClienteCountOutputTypeCountEmprestimosArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountEmprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestismoWhereInput
  }


  /**
   * Count Type AutorCountOutputType
   */

  export type AutorCountOutputType = {
    livros: number
  }

  export type AutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | AutorCountOutputTypeCountLivrosArgs
  }

  // Custom InputTypes
  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutorCountOutputType
     */
    select?: AutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeCountLivrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    email: string | null
    nome: string | null
    senha: string | null
    tipo: string | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    nome: string | null
    senha: string | null
    tipo: string | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    nome: number
    senha: number
    tipo: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    tipo?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    tipo?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    nome?: true
    senha?: true
    tipo?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    email: string
    nome: string | null
    senha: string
    tipo: string
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    nome?: boolean
    senha?: boolean
    tipo?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "nome" | "senha" | "tipo", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      nome: string | null
      senha: string
      tipo: string
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly tipo: FieldRef<"Usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Livro
   */

  export type AggregateLivro = {
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  export type LivroAvgAggregateOutputType = {
    id: number | null
    paginas: number | null
    ano: number | null
  }

  export type LivroSumAggregateOutputType = {
    id: number | null
    paginas: number | null
    ano: number | null
  }

  export type LivroMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    disponivel: boolean | null
    paginas: number | null
    ano: number | null
    genero: string | null
    editora: string | null
  }

  export type LivroMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    disponivel: boolean | null
    paginas: number | null
    ano: number | null
    genero: string | null
    editora: string | null
  }

  export type LivroCountAggregateOutputType = {
    id: number
    titulo: number
    disponivel: number
    paginas: number
    ano: number
    genero: number
    editora: number
    _all: number
  }


  export type LivroAvgAggregateInputType = {
    id?: true
    paginas?: true
    ano?: true
  }

  export type LivroSumAggregateInputType = {
    id?: true
    paginas?: true
    ano?: true
  }

  export type LivroMinAggregateInputType = {
    id?: true
    titulo?: true
    disponivel?: true
    paginas?: true
    ano?: true
    genero?: true
    editora?: true
  }

  export type LivroMaxAggregateInputType = {
    id?: true
    titulo?: true
    disponivel?: true
    paginas?: true
    ano?: true
    genero?: true
    editora?: true
  }

  export type LivroCountAggregateInputType = {
    id?: true
    titulo?: true
    disponivel?: true
    paginas?: true
    ano?: true
    genero?: true
    editora?: true
    _all?: true
  }

  export type LivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livro to aggregate.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Livros
    **/
    _count?: true | LivroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivroMaxAggregateInputType
  }

  export type GetLivroAggregateType<T extends LivroAggregateArgs> = {
        [P in keyof T & keyof AggregateLivro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivro[P]>
      : GetScalarType<T[P], AggregateLivro[P]>
  }




  export type LivroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithAggregationInput | LivroOrderByWithAggregationInput[]
    by: LivroScalarFieldEnum[] | LivroScalarFieldEnum
    having?: LivroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivroCountAggregateInputType | true
    _avg?: LivroAvgAggregateInputType
    _sum?: LivroSumAggregateInputType
    _min?: LivroMinAggregateInputType
    _max?: LivroMaxAggregateInputType
  }

  export type LivroGroupByOutputType = {
    id: number
    titulo: string | null
    disponivel: boolean
    paginas: number
    ano: number
    genero: string
    editora: string
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  type GetLivroGroupByPayload<T extends LivroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivroGroupByOutputType[P]>
            : GetScalarType<T[P], LivroGroupByOutputType[P]>
        }
      >
    >


  export type LivroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    disponivel?: boolean
    paginas?: boolean
    ano?: boolean
    genero?: boolean
    editora?: boolean
    autores?: boolean | Livro$autoresArgs<ExtArgs>
    emprestimos?: boolean | Livro$emprestimosArgs<ExtArgs>
    _count?: boolean | LivroCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    disponivel?: boolean
    paginas?: boolean
    ano?: boolean
    genero?: boolean
    editora?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    disponivel?: boolean
    paginas?: boolean
    ano?: boolean
    genero?: boolean
    editora?: boolean
  }, ExtArgs["result"]["livro"]>

  export type LivroSelectScalar = {
    id?: boolean
    titulo?: boolean
    disponivel?: boolean
    paginas?: boolean
    ano?: boolean
    genero?: boolean
    editora?: boolean
  }

  export type LivroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "disponivel" | "paginas" | "ano" | "genero" | "editora", ExtArgs["result"]["livro"]>
  export type LivroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autores?: boolean | Livro$autoresArgs<ExtArgs>
    emprestimos?: boolean | Livro$emprestimosArgs<ExtArgs>
    _count?: boolean | LivroCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LivroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LivroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LivroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Livro"
    objects: {
      autores: Prisma.$AutorPayload<ExtArgs>[]
      emprestimos: Prisma.$EmprestismoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string | null
      disponivel: boolean
      paginas: number
      ano: number
      genero: string
      editora: string
    }, ExtArgs["result"]["livro"]>
    composites: {}
  }

  type LivroGetPayload<S extends boolean | null | undefined | LivroDefaultArgs> = $Result.GetResult<Prisma.$LivroPayload, S>

  type LivroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LivroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivroCountAggregateInputType | true
    }

  export interface LivroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Livro'], meta: { name: 'Livro' } }
    /**
     * Find zero or one Livro that matches the filter.
     * @param {LivroFindUniqueArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LivroFindUniqueArgs>(args: SelectSubset<T, LivroFindUniqueArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LivroFindUniqueOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LivroFindUniqueOrThrowArgs>(args: SelectSubset<T, LivroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LivroFindFirstArgs>(args?: SelectSubset<T, LivroFindFirstArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindFirstOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LivroFindFirstOrThrowArgs>(args?: SelectSubset<T, LivroFindFirstOrThrowArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livros
     * const livros = await prisma.livro.findMany()
     * 
     * // Get first 10 Livros
     * const livros = await prisma.livro.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const livroWithIdOnly = await prisma.livro.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LivroFindManyArgs>(args?: SelectSubset<T, LivroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livro.
     * @param {LivroCreateArgs} args - Arguments to create a Livro.
     * @example
     * // Create one Livro
     * const Livro = await prisma.livro.create({
     *   data: {
     *     // ... data to create a Livro
     *   }
     * })
     * 
     */
    create<T extends LivroCreateArgs>(args: SelectSubset<T, LivroCreateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livros.
     * @param {LivroCreateManyArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LivroCreateManyArgs>(args?: SelectSubset<T, LivroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livros and returns the data saved in the database.
     * @param {LivroCreateManyAndReturnArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livros and only return the `id`
     * const livroWithIdOnly = await prisma.livro.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LivroCreateManyAndReturnArgs>(args?: SelectSubset<T, LivroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livro.
     * @param {LivroDeleteArgs} args - Arguments to delete one Livro.
     * @example
     * // Delete one Livro
     * const Livro = await prisma.livro.delete({
     *   where: {
     *     // ... filter to delete one Livro
     *   }
     * })
     * 
     */
    delete<T extends LivroDeleteArgs>(args: SelectSubset<T, LivroDeleteArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livro.
     * @param {LivroUpdateArgs} args - Arguments to update one Livro.
     * @example
     * // Update one Livro
     * const livro = await prisma.livro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LivroUpdateArgs>(args: SelectSubset<T, LivroUpdateArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livros.
     * @param {LivroDeleteManyArgs} args - Arguments to filter Livros to delete.
     * @example
     * // Delete a few Livros
     * const { count } = await prisma.livro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LivroDeleteManyArgs>(args?: SelectSubset<T, LivroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LivroUpdateManyArgs>(args: SelectSubset<T, LivroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros and returns the data updated in the database.
     * @param {LivroUpdateManyAndReturnArgs} args - Arguments to update many Livros.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livros and only return the `id`
     * const livroWithIdOnly = await prisma.livro.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LivroUpdateManyAndReturnArgs>(args: SelectSubset<T, LivroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livro.
     * @param {LivroUpsertArgs} args - Arguments to update or create a Livro.
     * @example
     * // Update or create a Livro
     * const livro = await prisma.livro.upsert({
     *   create: {
     *     // ... data to create a Livro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livro we want to update
     *   }
     * })
     */
    upsert<T extends LivroUpsertArgs>(args: SelectSubset<T, LivroUpsertArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroCountArgs} args - Arguments to filter Livros to count.
     * @example
     * // Count the number of Livros
     * const count = await prisma.livro.count({
     *   where: {
     *     // ... the filter for the Livros we want to count
     *   }
     * })
    **/
    count<T extends LivroCountArgs>(
      args?: Subset<T, LivroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LivroAggregateArgs>(args: Subset<T, LivroAggregateArgs>): Prisma.PrismaPromise<GetLivroAggregateType<T>>

    /**
     * Group by Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LivroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LivroGroupByArgs['orderBy'] }
        : { orderBy?: LivroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LivroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Livro model
   */
  readonly fields: LivroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Livro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LivroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autores<T extends Livro$autoresArgs<ExtArgs> = {}>(args?: Subset<T, Livro$autoresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    emprestimos<T extends Livro$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, Livro$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Livro model
   */
  interface LivroFieldRefs {
    readonly id: FieldRef<"Livro", 'Int'>
    readonly titulo: FieldRef<"Livro", 'String'>
    readonly disponivel: FieldRef<"Livro", 'Boolean'>
    readonly paginas: FieldRef<"Livro", 'Int'>
    readonly ano: FieldRef<"Livro", 'Int'>
    readonly genero: FieldRef<"Livro", 'String'>
    readonly editora: FieldRef<"Livro", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Livro findUnique
   */
  export type LivroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findUniqueOrThrow
   */
  export type LivroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro findFirst
   */
  export type LivroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findFirstOrThrow
   */
  export type LivroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livro to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro findMany
   */
  export type LivroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter, which Livros to fetch.
     */
    where?: LivroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Livros to fetch.
     */
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Livros.
     */
    cursor?: LivroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Livros.
     */
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Livro create
   */
  export type LivroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to create a Livro.
     */
    data: XOR<LivroCreateInput, LivroUncheckedCreateInput>
  }

  /**
   * Livro createMany
   */
  export type LivroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livro createManyAndReturn
   */
  export type LivroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to create many Livros.
     */
    data: LivroCreateManyInput | LivroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Livro update
   */
  export type LivroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The data needed to update a Livro.
     */
    data: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
    /**
     * Choose, which Livro to update.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro updateMany
   */
  export type LivroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro updateManyAndReturn
   */
  export type LivroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * The data used to update Livros.
     */
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyInput>
    /**
     * Filter which Livros to update
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to update.
     */
    limit?: number
  }

  /**
   * Livro upsert
   */
  export type LivroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * The filter to search for the Livro to update in case it exists.
     */
    where: LivroWhereUniqueInput
    /**
     * In case the Livro found by the `where` argument doesn't exist, create a new Livro with this data.
     */
    create: XOR<LivroCreateInput, LivroUncheckedCreateInput>
    /**
     * In case the Livro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LivroUpdateInput, LivroUncheckedUpdateInput>
  }

  /**
   * Livro delete
   */
  export type LivroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    /**
     * Filter which Livro to delete.
     */
    where: LivroWhereUniqueInput
  }

  /**
   * Livro deleteMany
   */
  export type LivroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Livros to delete
     */
    where?: LivroWhereInput
    /**
     * Limit how many Livros to delete.
     */
    limit?: number
  }

  /**
   * Livro.autores
   */
  export type Livro$autoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    where?: AutorWhereInput
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    cursor?: AutorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Livro.emprestimos
   */
  export type Livro$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoInclude<ExtArgs> | null
    where?: EmprestismoWhereInput
    orderBy?: EmprestismoOrderByWithRelationInput | EmprestismoOrderByWithRelationInput[]
    cursor?: EmprestismoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestismoScalarFieldEnum | EmprestismoScalarFieldEnum[]
  }

  /**
   * Livro without action
   */
  export type LivroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
  }


  /**
   * Model Emprestismo
   */

  export type AggregateEmprestismo = {
    _count: EmprestismoCountAggregateOutputType | null
    _avg: EmprestismoAvgAggregateOutputType | null
    _sum: EmprestismoSumAggregateOutputType | null
    _min: EmprestismoMinAggregateOutputType | null
    _max: EmprestismoMaxAggregateOutputType | null
  }

  export type EmprestismoAvgAggregateOutputType = {
    id: number | null
    livroId: number | null
    clienteId: number | null
  }

  export type EmprestismoSumAggregateOutputType = {
    id: number | null
    livroId: number | null
    clienteId: number | null
  }

  export type EmprestismoMinAggregateOutputType = {
    id: number | null
    livroId: number | null
    clienteId: number | null
    dataEmprestimo: Date | null
    dataDevolucao: Date | null
    atraso: boolean | null
    statusEmprestismo: boolean | null
  }

  export type EmprestismoMaxAggregateOutputType = {
    id: number | null
    livroId: number | null
    clienteId: number | null
    dataEmprestimo: Date | null
    dataDevolucao: Date | null
    atraso: boolean | null
    statusEmprestismo: boolean | null
  }

  export type EmprestismoCountAggregateOutputType = {
    id: number
    livroId: number
    clienteId: number
    dataEmprestimo: number
    dataDevolucao: number
    atraso: number
    statusEmprestismo: number
    _all: number
  }


  export type EmprestismoAvgAggregateInputType = {
    id?: true
    livroId?: true
    clienteId?: true
  }

  export type EmprestismoSumAggregateInputType = {
    id?: true
    livroId?: true
    clienteId?: true
  }

  export type EmprestismoMinAggregateInputType = {
    id?: true
    livroId?: true
    clienteId?: true
    dataEmprestimo?: true
    dataDevolucao?: true
    atraso?: true
    statusEmprestismo?: true
  }

  export type EmprestismoMaxAggregateInputType = {
    id?: true
    livroId?: true
    clienteId?: true
    dataEmprestimo?: true
    dataDevolucao?: true
    atraso?: true
    statusEmprestismo?: true
  }

  export type EmprestismoCountAggregateInputType = {
    id?: true
    livroId?: true
    clienteId?: true
    dataEmprestimo?: true
    dataDevolucao?: true
    atraso?: true
    statusEmprestismo?: true
    _all?: true
  }

  export type EmprestismoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprestismo to aggregate.
     */
    where?: EmprestismoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestismos to fetch.
     */
    orderBy?: EmprestismoOrderByWithRelationInput | EmprestismoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmprestismoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestismos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestismos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Emprestismos
    **/
    _count?: true | EmprestismoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmprestismoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmprestismoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmprestismoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmprestismoMaxAggregateInputType
  }

  export type GetEmprestismoAggregateType<T extends EmprestismoAggregateArgs> = {
        [P in keyof T & keyof AggregateEmprestismo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmprestismo[P]>
      : GetScalarType<T[P], AggregateEmprestismo[P]>
  }




  export type EmprestismoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmprestismoWhereInput
    orderBy?: EmprestismoOrderByWithAggregationInput | EmprestismoOrderByWithAggregationInput[]
    by: EmprestismoScalarFieldEnum[] | EmprestismoScalarFieldEnum
    having?: EmprestismoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmprestismoCountAggregateInputType | true
    _avg?: EmprestismoAvgAggregateInputType
    _sum?: EmprestismoSumAggregateInputType
    _min?: EmprestismoMinAggregateInputType
    _max?: EmprestismoMaxAggregateInputType
  }

  export type EmprestismoGroupByOutputType = {
    id: number
    livroId: number
    clienteId: number
    dataEmprestimo: Date
    dataDevolucao: Date
    atraso: boolean
    statusEmprestismo: boolean
    _count: EmprestismoCountAggregateOutputType | null
    _avg: EmprestismoAvgAggregateOutputType | null
    _sum: EmprestismoSumAggregateOutputType | null
    _min: EmprestismoMinAggregateOutputType | null
    _max: EmprestismoMaxAggregateOutputType | null
  }

  type GetEmprestismoGroupByPayload<T extends EmprestismoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmprestismoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmprestismoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmprestismoGroupByOutputType[P]>
            : GetScalarType<T[P], EmprestismoGroupByOutputType[P]>
        }
      >
    >


  export type EmprestismoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    livroId?: boolean
    clienteId?: boolean
    dataEmprestimo?: boolean
    dataDevolucao?: boolean
    atraso?: boolean
    statusEmprestismo?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestismo"]>

  export type EmprestismoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    livroId?: boolean
    clienteId?: boolean
    dataEmprestimo?: boolean
    dataDevolucao?: boolean
    atraso?: boolean
    statusEmprestismo?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestismo"]>

  export type EmprestismoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    livroId?: boolean
    clienteId?: boolean
    dataEmprestimo?: boolean
    dataDevolucao?: boolean
    atraso?: boolean
    statusEmprestismo?: boolean
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emprestismo"]>

  export type EmprestismoSelectScalar = {
    id?: boolean
    livroId?: boolean
    clienteId?: boolean
    dataEmprestimo?: boolean
    dataDevolucao?: boolean
    atraso?: boolean
    statusEmprestismo?: boolean
  }

  export type EmprestismoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "livroId" | "clienteId" | "dataEmprestimo" | "dataDevolucao" | "atraso" | "statusEmprestismo", ExtArgs["result"]["emprestismo"]>
  export type EmprestismoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type EmprestismoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }
  export type EmprestismoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | LivroDefaultArgs<ExtArgs>
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
  }

  export type $EmprestismoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Emprestismo"
    objects: {
      livro: Prisma.$LivroPayload<ExtArgs>
      cliente: Prisma.$ClientePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      livroId: number
      clienteId: number
      dataEmprestimo: Date
      dataDevolucao: Date
      atraso: boolean
      statusEmprestismo: boolean
    }, ExtArgs["result"]["emprestismo"]>
    composites: {}
  }

  type EmprestismoGetPayload<S extends boolean | null | undefined | EmprestismoDefaultArgs> = $Result.GetResult<Prisma.$EmprestismoPayload, S>

  type EmprestismoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmprestismoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmprestismoCountAggregateInputType | true
    }

  export interface EmprestismoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Emprestismo'], meta: { name: 'Emprestismo' } }
    /**
     * Find zero or one Emprestismo that matches the filter.
     * @param {EmprestismoFindUniqueArgs} args - Arguments to find a Emprestismo
     * @example
     * // Get one Emprestismo
     * const emprestismo = await prisma.emprestismo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmprestismoFindUniqueArgs>(args: SelectSubset<T, EmprestismoFindUniqueArgs<ExtArgs>>): Prisma__EmprestismoClient<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Emprestismo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmprestismoFindUniqueOrThrowArgs} args - Arguments to find a Emprestismo
     * @example
     * // Get one Emprestismo
     * const emprestismo = await prisma.emprestismo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmprestismoFindUniqueOrThrowArgs>(args: SelectSubset<T, EmprestismoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmprestismoClient<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestismo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestismoFindFirstArgs} args - Arguments to find a Emprestismo
     * @example
     * // Get one Emprestismo
     * const emprestismo = await prisma.emprestismo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmprestismoFindFirstArgs>(args?: SelectSubset<T, EmprestismoFindFirstArgs<ExtArgs>>): Prisma__EmprestismoClient<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Emprestismo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestismoFindFirstOrThrowArgs} args - Arguments to find a Emprestismo
     * @example
     * // Get one Emprestismo
     * const emprestismo = await prisma.emprestismo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmprestismoFindFirstOrThrowArgs>(args?: SelectSubset<T, EmprestismoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmprestismoClient<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Emprestismos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestismoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Emprestismos
     * const emprestismos = await prisma.emprestismo.findMany()
     * 
     * // Get first 10 Emprestismos
     * const emprestismos = await prisma.emprestismo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emprestismoWithIdOnly = await prisma.emprestismo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmprestismoFindManyArgs>(args?: SelectSubset<T, EmprestismoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Emprestismo.
     * @param {EmprestismoCreateArgs} args - Arguments to create a Emprestismo.
     * @example
     * // Create one Emprestismo
     * const Emprestismo = await prisma.emprestismo.create({
     *   data: {
     *     // ... data to create a Emprestismo
     *   }
     * })
     * 
     */
    create<T extends EmprestismoCreateArgs>(args: SelectSubset<T, EmprestismoCreateArgs<ExtArgs>>): Prisma__EmprestismoClient<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Emprestismos.
     * @param {EmprestismoCreateManyArgs} args - Arguments to create many Emprestismos.
     * @example
     * // Create many Emprestismos
     * const emprestismo = await prisma.emprestismo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmprestismoCreateManyArgs>(args?: SelectSubset<T, EmprestismoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Emprestismos and returns the data saved in the database.
     * @param {EmprestismoCreateManyAndReturnArgs} args - Arguments to create many Emprestismos.
     * @example
     * // Create many Emprestismos
     * const emprestismo = await prisma.emprestismo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Emprestismos and only return the `id`
     * const emprestismoWithIdOnly = await prisma.emprestismo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmprestismoCreateManyAndReturnArgs>(args?: SelectSubset<T, EmprestismoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Emprestismo.
     * @param {EmprestismoDeleteArgs} args - Arguments to delete one Emprestismo.
     * @example
     * // Delete one Emprestismo
     * const Emprestismo = await prisma.emprestismo.delete({
     *   where: {
     *     // ... filter to delete one Emprestismo
     *   }
     * })
     * 
     */
    delete<T extends EmprestismoDeleteArgs>(args: SelectSubset<T, EmprestismoDeleteArgs<ExtArgs>>): Prisma__EmprestismoClient<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Emprestismo.
     * @param {EmprestismoUpdateArgs} args - Arguments to update one Emprestismo.
     * @example
     * // Update one Emprestismo
     * const emprestismo = await prisma.emprestismo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmprestismoUpdateArgs>(args: SelectSubset<T, EmprestismoUpdateArgs<ExtArgs>>): Prisma__EmprestismoClient<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Emprestismos.
     * @param {EmprestismoDeleteManyArgs} args - Arguments to filter Emprestismos to delete.
     * @example
     * // Delete a few Emprestismos
     * const { count } = await prisma.emprestismo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmprestismoDeleteManyArgs>(args?: SelectSubset<T, EmprestismoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestismos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestismoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Emprestismos
     * const emprestismo = await prisma.emprestismo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmprestismoUpdateManyArgs>(args: SelectSubset<T, EmprestismoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Emprestismos and returns the data updated in the database.
     * @param {EmprestismoUpdateManyAndReturnArgs} args - Arguments to update many Emprestismos.
     * @example
     * // Update many Emprestismos
     * const emprestismo = await prisma.emprestismo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Emprestismos and only return the `id`
     * const emprestismoWithIdOnly = await prisma.emprestismo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmprestismoUpdateManyAndReturnArgs>(args: SelectSubset<T, EmprestismoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Emprestismo.
     * @param {EmprestismoUpsertArgs} args - Arguments to update or create a Emprestismo.
     * @example
     * // Update or create a Emprestismo
     * const emprestismo = await prisma.emprestismo.upsert({
     *   create: {
     *     // ... data to create a Emprestismo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Emprestismo we want to update
     *   }
     * })
     */
    upsert<T extends EmprestismoUpsertArgs>(args: SelectSubset<T, EmprestismoUpsertArgs<ExtArgs>>): Prisma__EmprestismoClient<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Emprestismos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestismoCountArgs} args - Arguments to filter Emprestismos to count.
     * @example
     * // Count the number of Emprestismos
     * const count = await prisma.emprestismo.count({
     *   where: {
     *     // ... the filter for the Emprestismos we want to count
     *   }
     * })
    **/
    count<T extends EmprestismoCountArgs>(
      args?: Subset<T, EmprestismoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmprestismoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Emprestismo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestismoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmprestismoAggregateArgs>(args: Subset<T, EmprestismoAggregateArgs>): Prisma.PrismaPromise<GetEmprestismoAggregateType<T>>

    /**
     * Group by Emprestismo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmprestismoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmprestismoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmprestismoGroupByArgs['orderBy'] }
        : { orderBy?: EmprestismoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmprestismoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmprestismoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Emprestismo model
   */
  readonly fields: EmprestismoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Emprestismo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmprestismoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends LivroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LivroDefaultArgs<ExtArgs>>): Prisma__LivroClient<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Emprestismo model
   */
  interface EmprestismoFieldRefs {
    readonly id: FieldRef<"Emprestismo", 'Int'>
    readonly livroId: FieldRef<"Emprestismo", 'Int'>
    readonly clienteId: FieldRef<"Emprestismo", 'Int'>
    readonly dataEmprestimo: FieldRef<"Emprestismo", 'DateTime'>
    readonly dataDevolucao: FieldRef<"Emprestismo", 'DateTime'>
    readonly atraso: FieldRef<"Emprestismo", 'Boolean'>
    readonly statusEmprestismo: FieldRef<"Emprestismo", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Emprestismo findUnique
   */
  export type EmprestismoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestismo to fetch.
     */
    where: EmprestismoWhereUniqueInput
  }

  /**
   * Emprestismo findUniqueOrThrow
   */
  export type EmprestismoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestismo to fetch.
     */
    where: EmprestismoWhereUniqueInput
  }

  /**
   * Emprestismo findFirst
   */
  export type EmprestismoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestismo to fetch.
     */
    where?: EmprestismoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestismos to fetch.
     */
    orderBy?: EmprestismoOrderByWithRelationInput | EmprestismoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprestismos.
     */
    cursor?: EmprestismoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestismos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestismos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestismos.
     */
    distinct?: EmprestismoScalarFieldEnum | EmprestismoScalarFieldEnum[]
  }

  /**
   * Emprestismo findFirstOrThrow
   */
  export type EmprestismoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestismo to fetch.
     */
    where?: EmprestismoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestismos to fetch.
     */
    orderBy?: EmprestismoOrderByWithRelationInput | EmprestismoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Emprestismos.
     */
    cursor?: EmprestismoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestismos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestismos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Emprestismos.
     */
    distinct?: EmprestismoScalarFieldEnum | EmprestismoScalarFieldEnum[]
  }

  /**
   * Emprestismo findMany
   */
  export type EmprestismoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoInclude<ExtArgs> | null
    /**
     * Filter, which Emprestismos to fetch.
     */
    where?: EmprestismoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Emprestismos to fetch.
     */
    orderBy?: EmprestismoOrderByWithRelationInput | EmprestismoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Emprestismos.
     */
    cursor?: EmprestismoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Emprestismos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Emprestismos.
     */
    skip?: number
    distinct?: EmprestismoScalarFieldEnum | EmprestismoScalarFieldEnum[]
  }

  /**
   * Emprestismo create
   */
  export type EmprestismoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoInclude<ExtArgs> | null
    /**
     * The data needed to create a Emprestismo.
     */
    data: XOR<EmprestismoCreateInput, EmprestismoUncheckedCreateInput>
  }

  /**
   * Emprestismo createMany
   */
  export type EmprestismoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Emprestismos.
     */
    data: EmprestismoCreateManyInput | EmprestismoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Emprestismo createManyAndReturn
   */
  export type EmprestismoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * The data used to create many Emprestismos.
     */
    data: EmprestismoCreateManyInput | EmprestismoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprestismo update
   */
  export type EmprestismoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoInclude<ExtArgs> | null
    /**
     * The data needed to update a Emprestismo.
     */
    data: XOR<EmprestismoUpdateInput, EmprestismoUncheckedUpdateInput>
    /**
     * Choose, which Emprestismo to update.
     */
    where: EmprestismoWhereUniqueInput
  }

  /**
   * Emprestismo updateMany
   */
  export type EmprestismoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Emprestismos.
     */
    data: XOR<EmprestismoUpdateManyMutationInput, EmprestismoUncheckedUpdateManyInput>
    /**
     * Filter which Emprestismos to update
     */
    where?: EmprestismoWhereInput
    /**
     * Limit how many Emprestismos to update.
     */
    limit?: number
  }

  /**
   * Emprestismo updateManyAndReturn
   */
  export type EmprestismoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * The data used to update Emprestismos.
     */
    data: XOR<EmprestismoUpdateManyMutationInput, EmprestismoUncheckedUpdateManyInput>
    /**
     * Filter which Emprestismos to update
     */
    where?: EmprestismoWhereInput
    /**
     * Limit how many Emprestismos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Emprestismo upsert
   */
  export type EmprestismoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoInclude<ExtArgs> | null
    /**
     * The filter to search for the Emprestismo to update in case it exists.
     */
    where: EmprestismoWhereUniqueInput
    /**
     * In case the Emprestismo found by the `where` argument doesn't exist, create a new Emprestismo with this data.
     */
    create: XOR<EmprestismoCreateInput, EmprestismoUncheckedCreateInput>
    /**
     * In case the Emprestismo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmprestismoUpdateInput, EmprestismoUncheckedUpdateInput>
  }

  /**
   * Emprestismo delete
   */
  export type EmprestismoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoInclude<ExtArgs> | null
    /**
     * Filter which Emprestismo to delete.
     */
    where: EmprestismoWhereUniqueInput
  }

  /**
   * Emprestismo deleteMany
   */
  export type EmprestismoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Emprestismos to delete
     */
    where?: EmprestismoWhereInput
    /**
     * Limit how many Emprestismos to delete.
     */
    limit?: number
  }

  /**
   * Emprestismo without action
   */
  export type EmprestismoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    id: number | null
  }

  export type ClienteSumAggregateOutputType = {
    id: number | null
  }

  export type ClienteMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    cpf: string | null
    endereco: string | null
    numero: string | null
    cidade: string | null
    status: string | null
  }

  export type ClienteMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    cpf: string | null
    endereco: string | null
    numero: string | null
    cidade: string | null
    status: string | null
  }

  export type ClienteCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    cpf: number
    endereco: number
    numero: number
    cidade: number
    status: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    id?: true
  }

  export type ClienteSumAggregateInputType = {
    id?: true
  }

  export type ClienteMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    cpf?: true
    endereco?: true
    numero?: true
    cidade?: true
    status?: true
  }

  export type ClienteMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    cpf?: true
    endereco?: true
    numero?: true
    cidade?: true
    status?: true
  }

  export type ClienteCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    cpf?: true
    endereco?: true
    numero?: true
    cidade?: true
    status?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    id: number
    nome: string
    email: string
    telefone: string
    cpf: string
    endereco: string
    numero: string
    cidade: string
    status: string
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cpf?: boolean
    endereco?: boolean
    numero?: boolean
    cidade?: boolean
    status?: boolean
    emprestimos?: boolean | Cliente$emprestimosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cpf?: boolean
    endereco?: boolean
    numero?: boolean
    cidade?: boolean
    status?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cpf?: boolean
    endereco?: boolean
    numero?: boolean
    cidade?: boolean
    status?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    cpf?: boolean
    endereco?: boolean
    numero?: boolean
    cidade?: boolean
    status?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "cpf" | "endereco" | "numero" | "cidade" | "status", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    emprestimos?: boolean | Cliente$emprestimosArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      emprestimos: Prisma.$EmprestismoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      telefone: string
      cpf: string
      endereco: string
      numero: string
      cidade: string
      status: string
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clienteWithIdOnly = await prisma.cliente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `id`
     * const clienteWithIdOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    emprestimos<T extends Cliente$emprestimosArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$emprestimosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmprestismoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly id: FieldRef<"Cliente", 'Int'>
    readonly nome: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly telefone: FieldRef<"Cliente", 'String'>
    readonly cpf: FieldRef<"Cliente", 'String'>
    readonly endereco: FieldRef<"Cliente", 'String'>
    readonly numero: FieldRef<"Cliente", 'String'>
    readonly cidade: FieldRef<"Cliente", 'String'>
    readonly status: FieldRef<"Cliente", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.emprestimos
   */
  export type Cliente$emprestimosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Emprestismo
     */
    select?: EmprestismoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Emprestismo
     */
    omit?: EmprestismoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmprestismoInclude<ExtArgs> | null
    where?: EmprestismoWhereInput
    orderBy?: EmprestismoOrderByWithRelationInput | EmprestismoOrderByWithRelationInput[]
    cursor?: EmprestismoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmprestismoScalarFieldEnum | EmprestismoScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Autor
   */

  export type AggregateAutor = {
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  export type AutorAvgAggregateOutputType = {
    id: number | null
  }

  export type AutorSumAggregateOutputType = {
    id: number | null
  }

  export type AutorMinAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type AutorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
  }

  export type AutorCountAggregateOutputType = {
    id: number
    nome: number
    _all: number
  }


  export type AutorAvgAggregateInputType = {
    id?: true
  }

  export type AutorSumAggregateInputType = {
    id?: true
  }

  export type AutorMinAggregateInputType = {
    id?: true
    nome?: true
  }

  export type AutorMaxAggregateInputType = {
    id?: true
    nome?: true
  }

  export type AutorCountAggregateInputType = {
    id?: true
    nome?: true
    _all?: true
  }

  export type AutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autor to aggregate.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Autors
    **/
    _count?: true | AutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutorMaxAggregateInputType
  }

  export type GetAutorAggregateType<T extends AutorAggregateArgs> = {
        [P in keyof T & keyof AggregateAutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutor[P]>
      : GetScalarType<T[P], AggregateAutor[P]>
  }




  export type AutorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutorWhereInput
    orderBy?: AutorOrderByWithAggregationInput | AutorOrderByWithAggregationInput[]
    by: AutorScalarFieldEnum[] | AutorScalarFieldEnum
    having?: AutorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutorCountAggregateInputType | true
    _avg?: AutorAvgAggregateInputType
    _sum?: AutorSumAggregateInputType
    _min?: AutorMinAggregateInputType
    _max?: AutorMaxAggregateInputType
  }

  export type AutorGroupByOutputType = {
    id: number
    nome: string
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  type GetAutorGroupByPayload<T extends AutorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutorGroupByOutputType[P]>
            : GetScalarType<T[P], AutorGroupByOutputType[P]>
        }
      >
    >


  export type AutorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    livros?: boolean | Autor$livrosArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
  }, ExtArgs["result"]["autor"]>

  export type AutorSelectScalar = {
    id?: boolean
    nome?: boolean
  }

  export type AutorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome", ExtArgs["result"]["autor"]>
  export type AutorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livros?: boolean | Autor$livrosArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AutorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AutorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Autor"
    objects: {
      livros: Prisma.$LivroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
    }, ExtArgs["result"]["autor"]>
    composites: {}
  }

  type AutorGetPayload<S extends boolean | null | undefined | AutorDefaultArgs> = $Result.GetResult<Prisma.$AutorPayload, S>

  type AutorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutorCountAggregateInputType | true
    }

  export interface AutorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Autor'], meta: { name: 'Autor' } }
    /**
     * Find zero or one Autor that matches the filter.
     * @param {AutorFindUniqueArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutorFindUniqueArgs>(args: SelectSubset<T, AutorFindUniqueArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Autor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutorFindUniqueOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutorFindUniqueOrThrowArgs>(args: SelectSubset<T, AutorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutorFindFirstArgs>(args?: SelectSubset<T, AutorFindFirstArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindFirstOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutorFindFirstOrThrowArgs>(args?: SelectSubset<T, AutorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autors
     * const autors = await prisma.autor.findMany()
     * 
     * // Get first 10 Autors
     * const autors = await prisma.autor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autorWithIdOnly = await prisma.autor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutorFindManyArgs>(args?: SelectSubset<T, AutorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Autor.
     * @param {AutorCreateArgs} args - Arguments to create a Autor.
     * @example
     * // Create one Autor
     * const Autor = await prisma.autor.create({
     *   data: {
     *     // ... data to create a Autor
     *   }
     * })
     * 
     */
    create<T extends AutorCreateArgs>(args: SelectSubset<T, AutorCreateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autors.
     * @param {AutorCreateManyArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutorCreateManyArgs>(args?: SelectSubset<T, AutorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Autors and returns the data saved in the database.
     * @param {AutorCreateManyAndReturnArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Autors and only return the `id`
     * const autorWithIdOnly = await prisma.autor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutorCreateManyAndReturnArgs>(args?: SelectSubset<T, AutorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Autor.
     * @param {AutorDeleteArgs} args - Arguments to delete one Autor.
     * @example
     * // Delete one Autor
     * const Autor = await prisma.autor.delete({
     *   where: {
     *     // ... filter to delete one Autor
     *   }
     * })
     * 
     */
    delete<T extends AutorDeleteArgs>(args: SelectSubset<T, AutorDeleteArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Autor.
     * @param {AutorUpdateArgs} args - Arguments to update one Autor.
     * @example
     * // Update one Autor
     * const autor = await prisma.autor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutorUpdateArgs>(args: SelectSubset<T, AutorUpdateArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autors.
     * @param {AutorDeleteManyArgs} args - Arguments to filter Autors to delete.
     * @example
     * // Delete a few Autors
     * const { count } = await prisma.autor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutorDeleteManyArgs>(args?: SelectSubset<T, AutorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutorUpdateManyArgs>(args: SelectSubset<T, AutorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors and returns the data updated in the database.
     * @param {AutorUpdateManyAndReturnArgs} args - Arguments to update many Autors.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Autors and only return the `id`
     * const autorWithIdOnly = await prisma.autor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutorUpdateManyAndReturnArgs>(args: SelectSubset<T, AutorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Autor.
     * @param {AutorUpsertArgs} args - Arguments to update or create a Autor.
     * @example
     * // Update or create a Autor
     * const autor = await prisma.autor.upsert({
     *   create: {
     *     // ... data to create a Autor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Autor we want to update
     *   }
     * })
     */
    upsert<T extends AutorUpsertArgs>(args: SelectSubset<T, AutorUpsertArgs<ExtArgs>>): Prisma__AutorClient<$Result.GetResult<Prisma.$AutorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorCountArgs} args - Arguments to filter Autors to count.
     * @example
     * // Count the number of Autors
     * const count = await prisma.autor.count({
     *   where: {
     *     // ... the filter for the Autors we want to count
     *   }
     * })
    **/
    count<T extends AutorCountArgs>(
      args?: Subset<T, AutorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutorAggregateArgs>(args: Subset<T, AutorAggregateArgs>): Prisma.PrismaPromise<GetAutorAggregateType<T>>

    /**
     * Group by Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutorGroupByArgs['orderBy'] }
        : { orderBy?: AutorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Autor model
   */
  readonly fields: AutorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Autor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livros<T extends Autor$livrosArgs<ExtArgs> = {}>(args?: Subset<T, Autor$livrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LivroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Autor model
   */
  interface AutorFieldRefs {
    readonly id: FieldRef<"Autor", 'Int'>
    readonly nome: FieldRef<"Autor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Autor findUnique
   */
  export type AutorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findUniqueOrThrow
   */
  export type AutorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor findFirst
   */
  export type AutorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findFirstOrThrow
   */
  export type AutorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autor to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor findMany
   */
  export type AutorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter, which Autors to fetch.
     */
    where?: AutorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Autors to fetch.
     */
    orderBy?: AutorOrderByWithRelationInput | AutorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Autors.
     */
    cursor?: AutorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Autors.
     */
    skip?: number
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * Autor create
   */
  export type AutorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The data needed to create a Autor.
     */
    data: XOR<AutorCreateInput, AutorUncheckedCreateInput>
  }

  /**
   * Autor createMany
   */
  export type AutorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autor createManyAndReturn
   */
  export type AutorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data used to create many Autors.
     */
    data: AutorCreateManyInput | AutorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Autor update
   */
  export type AutorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The data needed to update a Autor.
     */
    data: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
    /**
     * Choose, which Autor to update.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor updateMany
   */
  export type AutorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autor updateManyAndReturn
   */
  export type AutorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * The data used to update Autors.
     */
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyInput>
    /**
     * Filter which Autors to update
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to update.
     */
    limit?: number
  }

  /**
   * Autor upsert
   */
  export type AutorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * The filter to search for the Autor to update in case it exists.
     */
    where: AutorWhereUniqueInput
    /**
     * In case the Autor found by the `where` argument doesn't exist, create a new Autor with this data.
     */
    create: XOR<AutorCreateInput, AutorUncheckedCreateInput>
    /**
     * In case the Autor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutorUpdateInput, AutorUncheckedUpdateInput>
  }

  /**
   * Autor delete
   */
  export type AutorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
    /**
     * Filter which Autor to delete.
     */
    where: AutorWhereUniqueInput
  }

  /**
   * Autor deleteMany
   */
  export type AutorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Autors to delete
     */
    where?: AutorWhereInput
    /**
     * Limit how many Autors to delete.
     */
    limit?: number
  }

  /**
   * Autor.livros
   */
  export type Autor$livrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Livro
     */
    select?: LivroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Livro
     */
    omit?: LivroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LivroInclude<ExtArgs> | null
    where?: LivroWhereInput
    orderBy?: LivroOrderByWithRelationInput | LivroOrderByWithRelationInput[]
    cursor?: LivroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * Autor without action
   */
  export type AutorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Autor
     */
    select?: AutorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Autor
     */
    omit?: AutorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutorInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    nome: 'nome',
    senha: 'senha',
    tipo: 'tipo'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const LivroScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    disponivel: 'disponivel',
    paginas: 'paginas',
    ano: 'ano',
    genero: 'genero',
    editora: 'editora'
  };

  export type LivroScalarFieldEnum = (typeof LivroScalarFieldEnum)[keyof typeof LivroScalarFieldEnum]


  export const EmprestismoScalarFieldEnum: {
    id: 'id',
    livroId: 'livroId',
    clienteId: 'clienteId',
    dataEmprestimo: 'dataEmprestimo',
    dataDevolucao: 'dataDevolucao',
    atraso: 'atraso',
    statusEmprestismo: 'statusEmprestismo'
  };

  export type EmprestismoScalarFieldEnum = (typeof EmprestismoScalarFieldEnum)[keyof typeof EmprestismoScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    cpf: 'cpf',
    endereco: 'endereco',
    numero: 'numero',
    cidade: 'cidade',
    status: 'status'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const AutorScalarFieldEnum: {
    id: 'id',
    nome: 'nome'
  };

  export type AutorScalarFieldEnum = (typeof AutorScalarFieldEnum)[keyof typeof AutorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    nome?: StringNullableFilter<"Usuario"> | string | null
    senha?: StringFilter<"Usuario"> | string
    tipo?: StringFilter<"Usuario"> | string
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrderInput | SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringNullableFilter<"Usuario"> | string | null
    senha?: StringFilter<"Usuario"> | string
    tipo?: StringFilter<"Usuario"> | string
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrderInput | SortOrder
    senha?: SortOrder
    tipo?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    nome?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    tipo?: StringWithAggregatesFilter<"Usuario"> | string
  }

  export type LivroWhereInput = {
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    id?: IntFilter<"Livro"> | number
    titulo?: StringNullableFilter<"Livro"> | string | null
    disponivel?: BoolFilter<"Livro"> | boolean
    paginas?: IntFilter<"Livro"> | number
    ano?: IntFilter<"Livro"> | number
    genero?: StringFilter<"Livro"> | string
    editora?: StringFilter<"Livro"> | string
    autores?: AutorListRelationFilter
    emprestimos?: EmprestismoListRelationFilter
  }

  export type LivroOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    disponivel?: SortOrder
    paginas?: SortOrder
    ano?: SortOrder
    genero?: SortOrder
    editora?: SortOrder
    autores?: AutorOrderByRelationAggregateInput
    emprestimos?: EmprestismoOrderByRelationAggregateInput
  }

  export type LivroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LivroWhereInput | LivroWhereInput[]
    OR?: LivroWhereInput[]
    NOT?: LivroWhereInput | LivroWhereInput[]
    titulo?: StringNullableFilter<"Livro"> | string | null
    disponivel?: BoolFilter<"Livro"> | boolean
    paginas?: IntFilter<"Livro"> | number
    ano?: IntFilter<"Livro"> | number
    genero?: StringFilter<"Livro"> | string
    editora?: StringFilter<"Livro"> | string
    autores?: AutorListRelationFilter
    emprestimos?: EmprestismoListRelationFilter
  }, "id">

  export type LivroOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrderInput | SortOrder
    disponivel?: SortOrder
    paginas?: SortOrder
    ano?: SortOrder
    genero?: SortOrder
    editora?: SortOrder
    _count?: LivroCountOrderByAggregateInput
    _avg?: LivroAvgOrderByAggregateInput
    _max?: LivroMaxOrderByAggregateInput
    _min?: LivroMinOrderByAggregateInput
    _sum?: LivroSumOrderByAggregateInput
  }

  export type LivroScalarWhereWithAggregatesInput = {
    AND?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    OR?: LivroScalarWhereWithAggregatesInput[]
    NOT?: LivroScalarWhereWithAggregatesInput | LivroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Livro"> | number
    titulo?: StringNullableWithAggregatesFilter<"Livro"> | string | null
    disponivel?: BoolWithAggregatesFilter<"Livro"> | boolean
    paginas?: IntWithAggregatesFilter<"Livro"> | number
    ano?: IntWithAggregatesFilter<"Livro"> | number
    genero?: StringWithAggregatesFilter<"Livro"> | string
    editora?: StringWithAggregatesFilter<"Livro"> | string
  }

  export type EmprestismoWhereInput = {
    AND?: EmprestismoWhereInput | EmprestismoWhereInput[]
    OR?: EmprestismoWhereInput[]
    NOT?: EmprestismoWhereInput | EmprestismoWhereInput[]
    id?: IntFilter<"Emprestismo"> | number
    livroId?: IntFilter<"Emprestismo"> | number
    clienteId?: IntFilter<"Emprestismo"> | number
    dataEmprestimo?: DateTimeFilter<"Emprestismo"> | Date | string
    dataDevolucao?: DateTimeFilter<"Emprestismo"> | Date | string
    atraso?: BoolFilter<"Emprestismo"> | boolean
    statusEmprestismo?: BoolFilter<"Emprestismo"> | boolean
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }

  export type EmprestismoOrderByWithRelationInput = {
    id?: SortOrder
    livroId?: SortOrder
    clienteId?: SortOrder
    dataEmprestimo?: SortOrder
    dataDevolucao?: SortOrder
    atraso?: SortOrder
    statusEmprestismo?: SortOrder
    livro?: LivroOrderByWithRelationInput
    cliente?: ClienteOrderByWithRelationInput
  }

  export type EmprestismoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmprestismoWhereInput | EmprestismoWhereInput[]
    OR?: EmprestismoWhereInput[]
    NOT?: EmprestismoWhereInput | EmprestismoWhereInput[]
    livroId?: IntFilter<"Emprestismo"> | number
    clienteId?: IntFilter<"Emprestismo"> | number
    dataEmprestimo?: DateTimeFilter<"Emprestismo"> | Date | string
    dataDevolucao?: DateTimeFilter<"Emprestismo"> | Date | string
    atraso?: BoolFilter<"Emprestismo"> | boolean
    statusEmprestismo?: BoolFilter<"Emprestismo"> | boolean
    livro?: XOR<LivroScalarRelationFilter, LivroWhereInput>
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
  }, "id">

  export type EmprestismoOrderByWithAggregationInput = {
    id?: SortOrder
    livroId?: SortOrder
    clienteId?: SortOrder
    dataEmprestimo?: SortOrder
    dataDevolucao?: SortOrder
    atraso?: SortOrder
    statusEmprestismo?: SortOrder
    _count?: EmprestismoCountOrderByAggregateInput
    _avg?: EmprestismoAvgOrderByAggregateInput
    _max?: EmprestismoMaxOrderByAggregateInput
    _min?: EmprestismoMinOrderByAggregateInput
    _sum?: EmprestismoSumOrderByAggregateInput
  }

  export type EmprestismoScalarWhereWithAggregatesInput = {
    AND?: EmprestismoScalarWhereWithAggregatesInput | EmprestismoScalarWhereWithAggregatesInput[]
    OR?: EmprestismoScalarWhereWithAggregatesInput[]
    NOT?: EmprestismoScalarWhereWithAggregatesInput | EmprestismoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Emprestismo"> | number
    livroId?: IntWithAggregatesFilter<"Emprestismo"> | number
    clienteId?: IntWithAggregatesFilter<"Emprestismo"> | number
    dataEmprestimo?: DateTimeWithAggregatesFilter<"Emprestismo"> | Date | string
    dataDevolucao?: DateTimeWithAggregatesFilter<"Emprestismo"> | Date | string
    atraso?: BoolWithAggregatesFilter<"Emprestismo"> | boolean
    statusEmprestismo?: BoolWithAggregatesFilter<"Emprestismo"> | boolean
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    id?: IntFilter<"Cliente"> | number
    nome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    cpf?: StringFilter<"Cliente"> | string
    endereco?: StringFilter<"Cliente"> | string
    numero?: StringFilter<"Cliente"> | string
    cidade?: StringFilter<"Cliente"> | string
    status?: StringFilter<"Cliente"> | string
    emprestimos?: EmprestismoListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    cidade?: SortOrder
    status?: SortOrder
    emprestimos?: EmprestismoOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nome?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    telefone?: StringFilter<"Cliente"> | string
    cpf?: StringFilter<"Cliente"> | string
    endereco?: StringFilter<"Cliente"> | string
    numero?: StringFilter<"Cliente"> | string
    cidade?: StringFilter<"Cliente"> | string
    status?: StringFilter<"Cliente"> | string
    emprestimos?: EmprestismoListRelationFilter
  }, "id">

  export type ClienteOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    cidade?: SortOrder
    status?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cliente"> | number
    nome?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    telefone?: StringWithAggregatesFilter<"Cliente"> | string
    cpf?: StringWithAggregatesFilter<"Cliente"> | string
    endereco?: StringWithAggregatesFilter<"Cliente"> | string
    numero?: StringWithAggregatesFilter<"Cliente"> | string
    cidade?: StringWithAggregatesFilter<"Cliente"> | string
    status?: StringWithAggregatesFilter<"Cliente"> | string
  }

  export type AutorWhereInput = {
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    id?: IntFilter<"Autor"> | number
    nome?: StringFilter<"Autor"> | string
    livros?: LivroListRelationFilter
  }

  export type AutorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    livros?: LivroOrderByRelationAggregateInput
  }

  export type AutorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AutorWhereInput | AutorWhereInput[]
    OR?: AutorWhereInput[]
    NOT?: AutorWhereInput | AutorWhereInput[]
    nome?: StringFilter<"Autor"> | string
    livros?: LivroListRelationFilter
  }, "id">

  export type AutorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    _count?: AutorCountOrderByAggregateInput
    _avg?: AutorAvgOrderByAggregateInput
    _max?: AutorMaxOrderByAggregateInput
    _min?: AutorMinOrderByAggregateInput
    _sum?: AutorSumOrderByAggregateInput
  }

  export type AutorScalarWhereWithAggregatesInput = {
    AND?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    OR?: AutorScalarWhereWithAggregatesInput[]
    NOT?: AutorScalarWhereWithAggregatesInput | AutorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Autor"> | number
    nome?: StringWithAggregatesFilter<"Autor"> | string
  }

  export type UsuarioCreateInput = {
    email: string
    nome?: string | null
    senha: string
    tipo: string
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    email: string
    nome?: string | null
    senha: string
    tipo: string
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateManyInput = {
    id?: number
    email: string
    nome?: string | null
    senha: string
    tipo: string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    senha?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type LivroCreateInput = {
    titulo?: string | null
    disponivel: boolean
    paginas: number
    ano: number
    genero: string
    editora: string
    autores?: AutorCreateNestedManyWithoutLivrosInput
    emprestimos?: EmprestismoCreateNestedManyWithoutLivroInput
  }

  export type LivroUncheckedCreateInput = {
    id?: number
    titulo?: string | null
    disponivel: boolean
    paginas: number
    ano: number
    genero: string
    editora: string
    autores?: AutorUncheckedCreateNestedManyWithoutLivrosInput
    emprestimos?: EmprestismoUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivroUpdateInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    paginas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    autores?: AutorUpdateManyWithoutLivrosNestedInput
    emprestimos?: EmprestismoUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    paginas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    autores?: AutorUncheckedUpdateManyWithoutLivrosNestedInput
    emprestimos?: EmprestismoUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type LivroCreateManyInput = {
    id?: number
    titulo?: string | null
    disponivel: boolean
    paginas: number
    ano: number
    genero: string
    editora: string
  }

  export type LivroUpdateManyMutationInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    paginas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
  }

  export type LivroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    paginas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
  }

  export type EmprestismoCreateInput = {
    dataEmprestimo: Date | string
    dataDevolucao: Date | string
    atraso: boolean
    statusEmprestismo: boolean
    livro: LivroCreateNestedOneWithoutEmprestimosInput
    cliente: ClienteCreateNestedOneWithoutEmprestimosInput
  }

  export type EmprestismoUncheckedCreateInput = {
    id?: number
    livroId: number
    clienteId: number
    dataEmprestimo: Date | string
    dataDevolucao: Date | string
    atraso: boolean
    statusEmprestismo: boolean
  }

  export type EmprestismoUpdateInput = {
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    atraso?: BoolFieldUpdateOperationsInput | boolean
    statusEmprestismo?: BoolFieldUpdateOperationsInput | boolean
    livro?: LivroUpdateOneRequiredWithoutEmprestimosNestedInput
    cliente?: ClienteUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type EmprestismoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    livroId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    atraso?: BoolFieldUpdateOperationsInput | boolean
    statusEmprestismo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmprestismoCreateManyInput = {
    id?: number
    livroId: number
    clienteId: number
    dataEmprestimo: Date | string
    dataDevolucao: Date | string
    atraso: boolean
    statusEmprestismo: boolean
  }

  export type EmprestismoUpdateManyMutationInput = {
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    atraso?: BoolFieldUpdateOperationsInput | boolean
    statusEmprestismo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmprestismoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    livroId?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    atraso?: BoolFieldUpdateOperationsInput | boolean
    statusEmprestismo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ClienteCreateInput = {
    nome: string
    email: string
    telefone: string
    cpf: string
    endereco: string
    numero: string
    cidade: string
    status: string
    emprestimos?: EmprestismoCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    cpf: string
    endereco: string
    numero: string
    cidade: string
    status: string
    emprestimos?: EmprestismoUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emprestimos?: EmprestismoUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    emprestimos?: EmprestismoUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    cpf: string
    endereco: string
    numero: string
    cidade: string
    status: string
  }

  export type ClienteUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AutorCreateInput = {
    nome: string
    livros?: LivroCreateNestedManyWithoutAutoresInput
  }

  export type AutorUncheckedCreateInput = {
    id?: number
    nome: string
    livros?: LivroUncheckedCreateNestedManyWithoutAutoresInput
  }

  export type AutorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    livros?: LivroUpdateManyWithoutAutoresNestedInput
  }

  export type AutorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    livros?: LivroUncheckedUpdateManyWithoutAutoresNestedInput
  }

  export type AutorCreateManyInput = {
    id?: number
    nome: string
  }

  export type AutorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type AutorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    nome?: SortOrder
    senha?: SortOrder
    tipo?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AutorListRelationFilter = {
    every?: AutorWhereInput
    some?: AutorWhereInput
    none?: AutorWhereInput
  }

  export type EmprestismoListRelationFilter = {
    every?: EmprestismoWhereInput
    some?: EmprestismoWhereInput
    none?: EmprestismoWhereInput
  }

  export type AutorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmprestismoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LivroCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    disponivel?: SortOrder
    paginas?: SortOrder
    ano?: SortOrder
    genero?: SortOrder
    editora?: SortOrder
  }

  export type LivroAvgOrderByAggregateInput = {
    id?: SortOrder
    paginas?: SortOrder
    ano?: SortOrder
  }

  export type LivroMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    disponivel?: SortOrder
    paginas?: SortOrder
    ano?: SortOrder
    genero?: SortOrder
    editora?: SortOrder
  }

  export type LivroMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    disponivel?: SortOrder
    paginas?: SortOrder
    ano?: SortOrder
    genero?: SortOrder
    editora?: SortOrder
  }

  export type LivroSumOrderByAggregateInput = {
    id?: SortOrder
    paginas?: SortOrder
    ano?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LivroScalarRelationFilter = {
    is?: LivroWhereInput
    isNot?: LivroWhereInput
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type EmprestismoCountOrderByAggregateInput = {
    id?: SortOrder
    livroId?: SortOrder
    clienteId?: SortOrder
    dataEmprestimo?: SortOrder
    dataDevolucao?: SortOrder
    atraso?: SortOrder
    statusEmprestismo?: SortOrder
  }

  export type EmprestismoAvgOrderByAggregateInput = {
    id?: SortOrder
    livroId?: SortOrder
    clienteId?: SortOrder
  }

  export type EmprestismoMaxOrderByAggregateInput = {
    id?: SortOrder
    livroId?: SortOrder
    clienteId?: SortOrder
    dataEmprestimo?: SortOrder
    dataDevolucao?: SortOrder
    atraso?: SortOrder
    statusEmprestismo?: SortOrder
  }

  export type EmprestismoMinOrderByAggregateInput = {
    id?: SortOrder
    livroId?: SortOrder
    clienteId?: SortOrder
    dataEmprestimo?: SortOrder
    dataDevolucao?: SortOrder
    atraso?: SortOrder
    statusEmprestismo?: SortOrder
  }

  export type EmprestismoSumOrderByAggregateInput = {
    id?: SortOrder
    livroId?: SortOrder
    clienteId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClienteCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    cidade?: SortOrder
    status?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    cidade?: SortOrder
    status?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    cpf?: SortOrder
    endereco?: SortOrder
    numero?: SortOrder
    cidade?: SortOrder
    status?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LivroListRelationFilter = {
    every?: LivroWhereInput
    some?: LivroWhereInput
    none?: LivroWhereInput
  }

  export type LivroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type AutorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AutorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type AutorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
  }

  export type AutorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AutorCreateNestedManyWithoutLivrosInput = {
    create?: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput> | AutorCreateWithoutLivrosInput[] | AutorUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: AutorCreateOrConnectWithoutLivrosInput | AutorCreateOrConnectWithoutLivrosInput[]
    connect?: AutorWhereUniqueInput | AutorWhereUniqueInput[]
  }

  export type EmprestismoCreateNestedManyWithoutLivroInput = {
    create?: XOR<EmprestismoCreateWithoutLivroInput, EmprestismoUncheckedCreateWithoutLivroInput> | EmprestismoCreateWithoutLivroInput[] | EmprestismoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: EmprestismoCreateOrConnectWithoutLivroInput | EmprestismoCreateOrConnectWithoutLivroInput[]
    createMany?: EmprestismoCreateManyLivroInputEnvelope
    connect?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
  }

  export type AutorUncheckedCreateNestedManyWithoutLivrosInput = {
    create?: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput> | AutorCreateWithoutLivrosInput[] | AutorUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: AutorCreateOrConnectWithoutLivrosInput | AutorCreateOrConnectWithoutLivrosInput[]
    connect?: AutorWhereUniqueInput | AutorWhereUniqueInput[]
  }

  export type EmprestismoUncheckedCreateNestedManyWithoutLivroInput = {
    create?: XOR<EmprestismoCreateWithoutLivroInput, EmprestismoUncheckedCreateWithoutLivroInput> | EmprestismoCreateWithoutLivroInput[] | EmprestismoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: EmprestismoCreateOrConnectWithoutLivroInput | EmprestismoCreateOrConnectWithoutLivroInput[]
    createMany?: EmprestismoCreateManyLivroInputEnvelope
    connect?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AutorUpdateManyWithoutLivrosNestedInput = {
    create?: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput> | AutorCreateWithoutLivrosInput[] | AutorUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: AutorCreateOrConnectWithoutLivrosInput | AutorCreateOrConnectWithoutLivrosInput[]
    upsert?: AutorUpsertWithWhereUniqueWithoutLivrosInput | AutorUpsertWithWhereUniqueWithoutLivrosInput[]
    set?: AutorWhereUniqueInput | AutorWhereUniqueInput[]
    disconnect?: AutorWhereUniqueInput | AutorWhereUniqueInput[]
    delete?: AutorWhereUniqueInput | AutorWhereUniqueInput[]
    connect?: AutorWhereUniqueInput | AutorWhereUniqueInput[]
    update?: AutorUpdateWithWhereUniqueWithoutLivrosInput | AutorUpdateWithWhereUniqueWithoutLivrosInput[]
    updateMany?: AutorUpdateManyWithWhereWithoutLivrosInput | AutorUpdateManyWithWhereWithoutLivrosInput[]
    deleteMany?: AutorScalarWhereInput | AutorScalarWhereInput[]
  }

  export type EmprestismoUpdateManyWithoutLivroNestedInput = {
    create?: XOR<EmprestismoCreateWithoutLivroInput, EmprestismoUncheckedCreateWithoutLivroInput> | EmprestismoCreateWithoutLivroInput[] | EmprestismoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: EmprestismoCreateOrConnectWithoutLivroInput | EmprestismoCreateOrConnectWithoutLivroInput[]
    upsert?: EmprestismoUpsertWithWhereUniqueWithoutLivroInput | EmprestismoUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: EmprestismoCreateManyLivroInputEnvelope
    set?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    disconnect?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    delete?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    connect?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    update?: EmprestismoUpdateWithWhereUniqueWithoutLivroInput | EmprestismoUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: EmprestismoUpdateManyWithWhereWithoutLivroInput | EmprestismoUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: EmprestismoScalarWhereInput | EmprestismoScalarWhereInput[]
  }

  export type AutorUncheckedUpdateManyWithoutLivrosNestedInput = {
    create?: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput> | AutorCreateWithoutLivrosInput[] | AutorUncheckedCreateWithoutLivrosInput[]
    connectOrCreate?: AutorCreateOrConnectWithoutLivrosInput | AutorCreateOrConnectWithoutLivrosInput[]
    upsert?: AutorUpsertWithWhereUniqueWithoutLivrosInput | AutorUpsertWithWhereUniqueWithoutLivrosInput[]
    set?: AutorWhereUniqueInput | AutorWhereUniqueInput[]
    disconnect?: AutorWhereUniqueInput | AutorWhereUniqueInput[]
    delete?: AutorWhereUniqueInput | AutorWhereUniqueInput[]
    connect?: AutorWhereUniqueInput | AutorWhereUniqueInput[]
    update?: AutorUpdateWithWhereUniqueWithoutLivrosInput | AutorUpdateWithWhereUniqueWithoutLivrosInput[]
    updateMany?: AutorUpdateManyWithWhereWithoutLivrosInput | AutorUpdateManyWithWhereWithoutLivrosInput[]
    deleteMany?: AutorScalarWhereInput | AutorScalarWhereInput[]
  }

  export type EmprestismoUncheckedUpdateManyWithoutLivroNestedInput = {
    create?: XOR<EmprestismoCreateWithoutLivroInput, EmprestismoUncheckedCreateWithoutLivroInput> | EmprestismoCreateWithoutLivroInput[] | EmprestismoUncheckedCreateWithoutLivroInput[]
    connectOrCreate?: EmprestismoCreateOrConnectWithoutLivroInput | EmprestismoCreateOrConnectWithoutLivroInput[]
    upsert?: EmprestismoUpsertWithWhereUniqueWithoutLivroInput | EmprestismoUpsertWithWhereUniqueWithoutLivroInput[]
    createMany?: EmprestismoCreateManyLivroInputEnvelope
    set?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    disconnect?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    delete?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    connect?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    update?: EmprestismoUpdateWithWhereUniqueWithoutLivroInput | EmprestismoUpdateWithWhereUniqueWithoutLivroInput[]
    updateMany?: EmprestismoUpdateManyWithWhereWithoutLivroInput | EmprestismoUpdateManyWithWhereWithoutLivroInput[]
    deleteMany?: EmprestismoScalarWhereInput | EmprestismoScalarWhereInput[]
  }

  export type LivroCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<LivroCreateWithoutEmprestimosInput, LivroUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: LivroCreateOrConnectWithoutEmprestimosInput
    connect?: LivroWhereUniqueInput
  }

  export type ClienteCreateNestedOneWithoutEmprestimosInput = {
    create?: XOR<ClienteCreateWithoutEmprestimosInput, ClienteUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEmprestimosInput
    connect?: ClienteWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LivroUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<LivroCreateWithoutEmprestimosInput, LivroUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: LivroCreateOrConnectWithoutEmprestimosInput
    upsert?: LivroUpsertWithoutEmprestimosInput
    connect?: LivroWhereUniqueInput
    update?: XOR<XOR<LivroUpdateToOneWithWhereWithoutEmprestimosInput, LivroUpdateWithoutEmprestimosInput>, LivroUncheckedUpdateWithoutEmprestimosInput>
  }

  export type ClienteUpdateOneRequiredWithoutEmprestimosNestedInput = {
    create?: XOR<ClienteCreateWithoutEmprestimosInput, ClienteUncheckedCreateWithoutEmprestimosInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutEmprestimosInput
    upsert?: ClienteUpsertWithoutEmprestimosInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutEmprestimosInput, ClienteUpdateWithoutEmprestimosInput>, ClienteUncheckedUpdateWithoutEmprestimosInput>
  }

  export type EmprestismoCreateNestedManyWithoutClienteInput = {
    create?: XOR<EmprestismoCreateWithoutClienteInput, EmprestismoUncheckedCreateWithoutClienteInput> | EmprestismoCreateWithoutClienteInput[] | EmprestismoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmprestismoCreateOrConnectWithoutClienteInput | EmprestismoCreateOrConnectWithoutClienteInput[]
    createMany?: EmprestismoCreateManyClienteInputEnvelope
    connect?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
  }

  export type EmprestismoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<EmprestismoCreateWithoutClienteInput, EmprestismoUncheckedCreateWithoutClienteInput> | EmprestismoCreateWithoutClienteInput[] | EmprestismoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmprestismoCreateOrConnectWithoutClienteInput | EmprestismoCreateOrConnectWithoutClienteInput[]
    createMany?: EmprestismoCreateManyClienteInputEnvelope
    connect?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
  }

  export type EmprestismoUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EmprestismoCreateWithoutClienteInput, EmprestismoUncheckedCreateWithoutClienteInput> | EmprestismoCreateWithoutClienteInput[] | EmprestismoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmprestismoCreateOrConnectWithoutClienteInput | EmprestismoCreateOrConnectWithoutClienteInput[]
    upsert?: EmprestismoUpsertWithWhereUniqueWithoutClienteInput | EmprestismoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EmprestismoCreateManyClienteInputEnvelope
    set?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    disconnect?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    delete?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    connect?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    update?: EmprestismoUpdateWithWhereUniqueWithoutClienteInput | EmprestismoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EmprestismoUpdateManyWithWhereWithoutClienteInput | EmprestismoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EmprestismoScalarWhereInput | EmprestismoScalarWhereInput[]
  }

  export type EmprestismoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<EmprestismoCreateWithoutClienteInput, EmprestismoUncheckedCreateWithoutClienteInput> | EmprestismoCreateWithoutClienteInput[] | EmprestismoUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: EmprestismoCreateOrConnectWithoutClienteInput | EmprestismoCreateOrConnectWithoutClienteInput[]
    upsert?: EmprestismoUpsertWithWhereUniqueWithoutClienteInput | EmprestismoUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: EmprestismoCreateManyClienteInputEnvelope
    set?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    disconnect?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    delete?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    connect?: EmprestismoWhereUniqueInput | EmprestismoWhereUniqueInput[]
    update?: EmprestismoUpdateWithWhereUniqueWithoutClienteInput | EmprestismoUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: EmprestismoUpdateManyWithWhereWithoutClienteInput | EmprestismoUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: EmprestismoScalarWhereInput | EmprestismoScalarWhereInput[]
  }

  export type LivroCreateNestedManyWithoutAutoresInput = {
    create?: XOR<LivroCreateWithoutAutoresInput, LivroUncheckedCreateWithoutAutoresInput> | LivroCreateWithoutAutoresInput[] | LivroUncheckedCreateWithoutAutoresInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutAutoresInput | LivroCreateOrConnectWithoutAutoresInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
  }

  export type LivroUncheckedCreateNestedManyWithoutAutoresInput = {
    create?: XOR<LivroCreateWithoutAutoresInput, LivroUncheckedCreateWithoutAutoresInput> | LivroCreateWithoutAutoresInput[] | LivroUncheckedCreateWithoutAutoresInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutAutoresInput | LivroCreateOrConnectWithoutAutoresInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
  }

  export type LivroUpdateManyWithoutAutoresNestedInput = {
    create?: XOR<LivroCreateWithoutAutoresInput, LivroUncheckedCreateWithoutAutoresInput> | LivroCreateWithoutAutoresInput[] | LivroUncheckedCreateWithoutAutoresInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutAutoresInput | LivroCreateOrConnectWithoutAutoresInput[]
    upsert?: LivroUpsertWithWhereUniqueWithoutAutoresInput | LivroUpsertWithWhereUniqueWithoutAutoresInput[]
    set?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    disconnect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    delete?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    update?: LivroUpdateWithWhereUniqueWithoutAutoresInput | LivroUpdateWithWhereUniqueWithoutAutoresInput[]
    updateMany?: LivroUpdateManyWithWhereWithoutAutoresInput | LivroUpdateManyWithWhereWithoutAutoresInput[]
    deleteMany?: LivroScalarWhereInput | LivroScalarWhereInput[]
  }

  export type LivroUncheckedUpdateManyWithoutAutoresNestedInput = {
    create?: XOR<LivroCreateWithoutAutoresInput, LivroUncheckedCreateWithoutAutoresInput> | LivroCreateWithoutAutoresInput[] | LivroUncheckedCreateWithoutAutoresInput[]
    connectOrCreate?: LivroCreateOrConnectWithoutAutoresInput | LivroCreateOrConnectWithoutAutoresInput[]
    upsert?: LivroUpsertWithWhereUniqueWithoutAutoresInput | LivroUpsertWithWhereUniqueWithoutAutoresInput[]
    set?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    disconnect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    delete?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    connect?: LivroWhereUniqueInput | LivroWhereUniqueInput[]
    update?: LivroUpdateWithWhereUniqueWithoutAutoresInput | LivroUpdateWithWhereUniqueWithoutAutoresInput[]
    updateMany?: LivroUpdateManyWithWhereWithoutAutoresInput | LivroUpdateManyWithWhereWithoutAutoresInput[]
    deleteMany?: LivroScalarWhereInput | LivroScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AutorCreateWithoutLivrosInput = {
    nome: string
  }

  export type AutorUncheckedCreateWithoutLivrosInput = {
    id?: number
    nome: string
  }

  export type AutorCreateOrConnectWithoutLivrosInput = {
    where: AutorWhereUniqueInput
    create: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
  }

  export type EmprestismoCreateWithoutLivroInput = {
    dataEmprestimo: Date | string
    dataDevolucao: Date | string
    atraso: boolean
    statusEmprestismo: boolean
    cliente: ClienteCreateNestedOneWithoutEmprestimosInput
  }

  export type EmprestismoUncheckedCreateWithoutLivroInput = {
    id?: number
    clienteId: number
    dataEmprestimo: Date | string
    dataDevolucao: Date | string
    atraso: boolean
    statusEmprestismo: boolean
  }

  export type EmprestismoCreateOrConnectWithoutLivroInput = {
    where: EmprestismoWhereUniqueInput
    create: XOR<EmprestismoCreateWithoutLivroInput, EmprestismoUncheckedCreateWithoutLivroInput>
  }

  export type EmprestismoCreateManyLivroInputEnvelope = {
    data: EmprestismoCreateManyLivroInput | EmprestismoCreateManyLivroInput[]
    skipDuplicates?: boolean
  }

  export type AutorUpsertWithWhereUniqueWithoutLivrosInput = {
    where: AutorWhereUniqueInput
    update: XOR<AutorUpdateWithoutLivrosInput, AutorUncheckedUpdateWithoutLivrosInput>
    create: XOR<AutorCreateWithoutLivrosInput, AutorUncheckedCreateWithoutLivrosInput>
  }

  export type AutorUpdateWithWhereUniqueWithoutLivrosInput = {
    where: AutorWhereUniqueInput
    data: XOR<AutorUpdateWithoutLivrosInput, AutorUncheckedUpdateWithoutLivrosInput>
  }

  export type AutorUpdateManyWithWhereWithoutLivrosInput = {
    where: AutorScalarWhereInput
    data: XOR<AutorUpdateManyMutationInput, AutorUncheckedUpdateManyWithoutLivrosInput>
  }

  export type AutorScalarWhereInput = {
    AND?: AutorScalarWhereInput | AutorScalarWhereInput[]
    OR?: AutorScalarWhereInput[]
    NOT?: AutorScalarWhereInput | AutorScalarWhereInput[]
    id?: IntFilter<"Autor"> | number
    nome?: StringFilter<"Autor"> | string
  }

  export type EmprestismoUpsertWithWhereUniqueWithoutLivroInput = {
    where: EmprestismoWhereUniqueInput
    update: XOR<EmprestismoUpdateWithoutLivroInput, EmprestismoUncheckedUpdateWithoutLivroInput>
    create: XOR<EmprestismoCreateWithoutLivroInput, EmprestismoUncheckedCreateWithoutLivroInput>
  }

  export type EmprestismoUpdateWithWhereUniqueWithoutLivroInput = {
    where: EmprestismoWhereUniqueInput
    data: XOR<EmprestismoUpdateWithoutLivroInput, EmprestismoUncheckedUpdateWithoutLivroInput>
  }

  export type EmprestismoUpdateManyWithWhereWithoutLivroInput = {
    where: EmprestismoScalarWhereInput
    data: XOR<EmprestismoUpdateManyMutationInput, EmprestismoUncheckedUpdateManyWithoutLivroInput>
  }

  export type EmprestismoScalarWhereInput = {
    AND?: EmprestismoScalarWhereInput | EmprestismoScalarWhereInput[]
    OR?: EmprestismoScalarWhereInput[]
    NOT?: EmprestismoScalarWhereInput | EmprestismoScalarWhereInput[]
    id?: IntFilter<"Emprestismo"> | number
    livroId?: IntFilter<"Emprestismo"> | number
    clienteId?: IntFilter<"Emprestismo"> | number
    dataEmprestimo?: DateTimeFilter<"Emprestismo"> | Date | string
    dataDevolucao?: DateTimeFilter<"Emprestismo"> | Date | string
    atraso?: BoolFilter<"Emprestismo"> | boolean
    statusEmprestismo?: BoolFilter<"Emprestismo"> | boolean
  }

  export type LivroCreateWithoutEmprestimosInput = {
    titulo?: string | null
    disponivel: boolean
    paginas: number
    ano: number
    genero: string
    editora: string
    autores?: AutorCreateNestedManyWithoutLivrosInput
  }

  export type LivroUncheckedCreateWithoutEmprestimosInput = {
    id?: number
    titulo?: string | null
    disponivel: boolean
    paginas: number
    ano: number
    genero: string
    editora: string
    autores?: AutorUncheckedCreateNestedManyWithoutLivrosInput
  }

  export type LivroCreateOrConnectWithoutEmprestimosInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutEmprestimosInput, LivroUncheckedCreateWithoutEmprestimosInput>
  }

  export type ClienteCreateWithoutEmprestimosInput = {
    nome: string
    email: string
    telefone: string
    cpf: string
    endereco: string
    numero: string
    cidade: string
    status: string
  }

  export type ClienteUncheckedCreateWithoutEmprestimosInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    cpf: string
    endereco: string
    numero: string
    cidade: string
    status: string
  }

  export type ClienteCreateOrConnectWithoutEmprestimosInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutEmprestimosInput, ClienteUncheckedCreateWithoutEmprestimosInput>
  }

  export type LivroUpsertWithoutEmprestimosInput = {
    update: XOR<LivroUpdateWithoutEmprestimosInput, LivroUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<LivroCreateWithoutEmprestimosInput, LivroUncheckedCreateWithoutEmprestimosInput>
    where?: LivroWhereInput
  }

  export type LivroUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: LivroWhereInput
    data: XOR<LivroUpdateWithoutEmprestimosInput, LivroUncheckedUpdateWithoutEmprestimosInput>
  }

  export type LivroUpdateWithoutEmprestimosInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    paginas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    autores?: AutorUpdateManyWithoutLivrosNestedInput
  }

  export type LivroUncheckedUpdateWithoutEmprestimosInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    paginas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    autores?: AutorUncheckedUpdateManyWithoutLivrosNestedInput
  }

  export type ClienteUpsertWithoutEmprestimosInput = {
    update: XOR<ClienteUpdateWithoutEmprestimosInput, ClienteUncheckedUpdateWithoutEmprestimosInput>
    create: XOR<ClienteCreateWithoutEmprestimosInput, ClienteUncheckedCreateWithoutEmprestimosInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutEmprestimosInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutEmprestimosInput, ClienteUncheckedUpdateWithoutEmprestimosInput>
  }

  export type ClienteUpdateWithoutEmprestimosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ClienteUncheckedUpdateWithoutEmprestimosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EmprestismoCreateWithoutClienteInput = {
    dataEmprestimo: Date | string
    dataDevolucao: Date | string
    atraso: boolean
    statusEmprestismo: boolean
    livro: LivroCreateNestedOneWithoutEmprestimosInput
  }

  export type EmprestismoUncheckedCreateWithoutClienteInput = {
    id?: number
    livroId: number
    dataEmprestimo: Date | string
    dataDevolucao: Date | string
    atraso: boolean
    statusEmprestismo: boolean
  }

  export type EmprestismoCreateOrConnectWithoutClienteInput = {
    where: EmprestismoWhereUniqueInput
    create: XOR<EmprestismoCreateWithoutClienteInput, EmprestismoUncheckedCreateWithoutClienteInput>
  }

  export type EmprestismoCreateManyClienteInputEnvelope = {
    data: EmprestismoCreateManyClienteInput | EmprestismoCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type EmprestismoUpsertWithWhereUniqueWithoutClienteInput = {
    where: EmprestismoWhereUniqueInput
    update: XOR<EmprestismoUpdateWithoutClienteInput, EmprestismoUncheckedUpdateWithoutClienteInput>
    create: XOR<EmprestismoCreateWithoutClienteInput, EmprestismoUncheckedCreateWithoutClienteInput>
  }

  export type EmprestismoUpdateWithWhereUniqueWithoutClienteInput = {
    where: EmprestismoWhereUniqueInput
    data: XOR<EmprestismoUpdateWithoutClienteInput, EmprestismoUncheckedUpdateWithoutClienteInput>
  }

  export type EmprestismoUpdateManyWithWhereWithoutClienteInput = {
    where: EmprestismoScalarWhereInput
    data: XOR<EmprestismoUpdateManyMutationInput, EmprestismoUncheckedUpdateManyWithoutClienteInput>
  }

  export type LivroCreateWithoutAutoresInput = {
    titulo?: string | null
    disponivel: boolean
    paginas: number
    ano: number
    genero: string
    editora: string
    emprestimos?: EmprestismoCreateNestedManyWithoutLivroInput
  }

  export type LivroUncheckedCreateWithoutAutoresInput = {
    id?: number
    titulo?: string | null
    disponivel: boolean
    paginas: number
    ano: number
    genero: string
    editora: string
    emprestimos?: EmprestismoUncheckedCreateNestedManyWithoutLivroInput
  }

  export type LivroCreateOrConnectWithoutAutoresInput = {
    where: LivroWhereUniqueInput
    create: XOR<LivroCreateWithoutAutoresInput, LivroUncheckedCreateWithoutAutoresInput>
  }

  export type LivroUpsertWithWhereUniqueWithoutAutoresInput = {
    where: LivroWhereUniqueInput
    update: XOR<LivroUpdateWithoutAutoresInput, LivroUncheckedUpdateWithoutAutoresInput>
    create: XOR<LivroCreateWithoutAutoresInput, LivroUncheckedCreateWithoutAutoresInput>
  }

  export type LivroUpdateWithWhereUniqueWithoutAutoresInput = {
    where: LivroWhereUniqueInput
    data: XOR<LivroUpdateWithoutAutoresInput, LivroUncheckedUpdateWithoutAutoresInput>
  }

  export type LivroUpdateManyWithWhereWithoutAutoresInput = {
    where: LivroScalarWhereInput
    data: XOR<LivroUpdateManyMutationInput, LivroUncheckedUpdateManyWithoutAutoresInput>
  }

  export type LivroScalarWhereInput = {
    AND?: LivroScalarWhereInput | LivroScalarWhereInput[]
    OR?: LivroScalarWhereInput[]
    NOT?: LivroScalarWhereInput | LivroScalarWhereInput[]
    id?: IntFilter<"Livro"> | number
    titulo?: StringNullableFilter<"Livro"> | string | null
    disponivel?: BoolFilter<"Livro"> | boolean
    paginas?: IntFilter<"Livro"> | number
    ano?: IntFilter<"Livro"> | number
    genero?: StringFilter<"Livro"> | string
    editora?: StringFilter<"Livro"> | string
  }

  export type EmprestismoCreateManyLivroInput = {
    id?: number
    clienteId: number
    dataEmprestimo: Date | string
    dataDevolucao: Date | string
    atraso: boolean
    statusEmprestismo: boolean
  }

  export type AutorUpdateWithoutLivrosInput = {
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type AutorUncheckedUpdateWithoutLivrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type AutorUncheckedUpdateManyWithoutLivrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
  }

  export type EmprestismoUpdateWithoutLivroInput = {
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    atraso?: BoolFieldUpdateOperationsInput | boolean
    statusEmprestismo?: BoolFieldUpdateOperationsInput | boolean
    cliente?: ClienteUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type EmprestismoUncheckedUpdateWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    atraso?: BoolFieldUpdateOperationsInput | boolean
    statusEmprestismo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmprestismoUncheckedUpdateManyWithoutLivroInput = {
    id?: IntFieldUpdateOperationsInput | number
    clienteId?: IntFieldUpdateOperationsInput | number
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    atraso?: BoolFieldUpdateOperationsInput | boolean
    statusEmprestismo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmprestismoCreateManyClienteInput = {
    id?: number
    livroId: number
    dataEmprestimo: Date | string
    dataDevolucao: Date | string
    atraso: boolean
    statusEmprestismo: boolean
  }

  export type EmprestismoUpdateWithoutClienteInput = {
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    atraso?: BoolFieldUpdateOperationsInput | boolean
    statusEmprestismo?: BoolFieldUpdateOperationsInput | boolean
    livro?: LivroUpdateOneRequiredWithoutEmprestimosNestedInput
  }

  export type EmprestismoUncheckedUpdateWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    livroId?: IntFieldUpdateOperationsInput | number
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    atraso?: BoolFieldUpdateOperationsInput | boolean
    statusEmprestismo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmprestismoUncheckedUpdateManyWithoutClienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    livroId?: IntFieldUpdateOperationsInput | number
    dataEmprestimo?: DateTimeFieldUpdateOperationsInput | Date | string
    dataDevolucao?: DateTimeFieldUpdateOperationsInput | Date | string
    atraso?: BoolFieldUpdateOperationsInput | boolean
    statusEmprestismo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LivroUpdateWithoutAutoresInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    paginas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    emprestimos?: EmprestismoUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateWithoutAutoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    paginas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
    emprestimos?: EmprestismoUncheckedUpdateManyWithoutLivroNestedInput
  }

  export type LivroUncheckedUpdateManyWithoutAutoresInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    paginas?: IntFieldUpdateOperationsInput | number
    ano?: IntFieldUpdateOperationsInput | number
    genero?: StringFieldUpdateOperationsInput | string
    editora?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}