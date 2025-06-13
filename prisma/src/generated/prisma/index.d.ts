
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ShippingMetadata
 * 
 */
export type ShippingMetadata = $Result.DefaultSelection<Prisma.$ShippingMetadataPayload>
/**
 * Model PackingScan
 * 
 */
export type PackingScan = $Result.DefaultSelection<Prisma.$PackingScanPayload>
/**
 * Model DispatchScan
 * 
 */
export type DispatchScan = $Result.DefaultSelection<Prisma.$DispatchScanPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shippingMetadata`: Exposes CRUD operations for the **ShippingMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShippingMetadata
    * const shippingMetadata = await prisma.shippingMetadata.findMany()
    * ```
    */
  get shippingMetadata(): Prisma.ShippingMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packingScan`: Exposes CRUD operations for the **PackingScan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackingScans
    * const packingScans = await prisma.packingScan.findMany()
    * ```
    */
  get packingScan(): Prisma.PackingScanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispatchScan`: Exposes CRUD operations for the **DispatchScan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DispatchScans
    * const dispatchScans = await prisma.dispatchScan.findMany()
    * ```
    */
  get dispatchScan(): Prisma.DispatchScanDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    ShippingMetadata: 'ShippingMetadata',
    PackingScan: 'PackingScan',
    DispatchScan: 'DispatchScan'
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
      modelProps: "user" | "shippingMetadata" | "packingScan" | "dispatchScan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ShippingMetadata: {
        payload: Prisma.$ShippingMetadataPayload<ExtArgs>
        fields: Prisma.ShippingMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShippingMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShippingMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingMetadataPayload>
          }
          findFirst: {
            args: Prisma.ShippingMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShippingMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingMetadataPayload>
          }
          findMany: {
            args: Prisma.ShippingMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingMetadataPayload>[]
          }
          create: {
            args: Prisma.ShippingMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingMetadataPayload>
          }
          createMany: {
            args: Prisma.ShippingMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ShippingMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingMetadataPayload>
          }
          update: {
            args: Prisma.ShippingMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingMetadataPayload>
          }
          deleteMany: {
            args: Prisma.ShippingMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShippingMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShippingMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShippingMetadataPayload>
          }
          aggregate: {
            args: Prisma.ShippingMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShippingMetadata>
          }
          groupBy: {
            args: Prisma.ShippingMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShippingMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShippingMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<ShippingMetadataCountAggregateOutputType> | number
          }
        }
      }
      PackingScan: {
        payload: Prisma.$PackingScanPayload<ExtArgs>
        fields: Prisma.PackingScanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackingScanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackingScanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackingScanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackingScanPayload>
          }
          findFirst: {
            args: Prisma.PackingScanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackingScanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackingScanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackingScanPayload>
          }
          findMany: {
            args: Prisma.PackingScanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackingScanPayload>[]
          }
          create: {
            args: Prisma.PackingScanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackingScanPayload>
          }
          createMany: {
            args: Prisma.PackingScanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PackingScanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackingScanPayload>
          }
          update: {
            args: Prisma.PackingScanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackingScanPayload>
          }
          deleteMany: {
            args: Prisma.PackingScanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackingScanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PackingScanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackingScanPayload>
          }
          aggregate: {
            args: Prisma.PackingScanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackingScan>
          }
          groupBy: {
            args: Prisma.PackingScanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackingScanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackingScanCountArgs<ExtArgs>
            result: $Utils.Optional<PackingScanCountAggregateOutputType> | number
          }
        }
      }
      DispatchScan: {
        payload: Prisma.$DispatchScanPayload<ExtArgs>
        fields: Prisma.DispatchScanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DispatchScanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchScanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DispatchScanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchScanPayload>
          }
          findFirst: {
            args: Prisma.DispatchScanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchScanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DispatchScanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchScanPayload>
          }
          findMany: {
            args: Prisma.DispatchScanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchScanPayload>[]
          }
          create: {
            args: Prisma.DispatchScanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchScanPayload>
          }
          createMany: {
            args: Prisma.DispatchScanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DispatchScanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchScanPayload>
          }
          update: {
            args: Prisma.DispatchScanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchScanPayload>
          }
          deleteMany: {
            args: Prisma.DispatchScanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DispatchScanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DispatchScanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DispatchScanPayload>
          }
          aggregate: {
            args: Prisma.DispatchScanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispatchScan>
          }
          groupBy: {
            args: Prisma.DispatchScanGroupByArgs<ExtArgs>
            result: $Utils.Optional<DispatchScanGroupByOutputType>[]
          }
          count: {
            args: Prisma.DispatchScanCountArgs<ExtArgs>
            result: $Utils.Optional<DispatchScanCountAggregateOutputType> | number
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
    user?: UserOmit
    shippingMetadata?: ShippingMetadataOmit
    packingScan?: PackingScanOmit
    dispatchScan?: DispatchScanOmit
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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    employeeCode: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    employeeCode: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    employeeCode: number
    passwordHash: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    employeeCode?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    employeeCode?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    employeeCode?: true
    passwordHash?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    employeeCode: string
    passwordHash: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeCode?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    employeeCode?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeCode" | "passwordHash" | "createdAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      employeeCode: string
      passwordHash: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly employeeCode: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model ShippingMetadata
   */

  export type AggregateShippingMetadata = {
    _count: ShippingMetadataCountAggregateOutputType | null
    _avg: ShippingMetadataAvgAggregateOutputType | null
    _sum: ShippingMetadataSumAggregateOutputType | null
    _min: ShippingMetadataMinAggregateOutputType | null
    _max: ShippingMetadataMaxAggregateOutputType | null
  }

  export type ShippingMetadataAvgAggregateOutputType = {
    id: number | null
  }

  export type ShippingMetadataSumAggregateOutputType = {
    id: number | null
  }

  export type ShippingMetadataMinAggregateOutputType = {
    id: number | null
    shippingID: string | null
    city: string | null
  }

  export type ShippingMetadataMaxAggregateOutputType = {
    id: number | null
    shippingID: string | null
    city: string | null
  }

  export type ShippingMetadataCountAggregateOutputType = {
    id: number
    shippingID: number
    city: number
    _all: number
  }


  export type ShippingMetadataAvgAggregateInputType = {
    id?: true
  }

  export type ShippingMetadataSumAggregateInputType = {
    id?: true
  }

  export type ShippingMetadataMinAggregateInputType = {
    id?: true
    shippingID?: true
    city?: true
  }

  export type ShippingMetadataMaxAggregateInputType = {
    id?: true
    shippingID?: true
    city?: true
  }

  export type ShippingMetadataCountAggregateInputType = {
    id?: true
    shippingID?: true
    city?: true
    _all?: true
  }

  export type ShippingMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingMetadata to aggregate.
     */
    where?: ShippingMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingMetadata to fetch.
     */
    orderBy?: ShippingMetadataOrderByWithRelationInput | ShippingMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShippingMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShippingMetadata
    **/
    _count?: true | ShippingMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShippingMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShippingMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShippingMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShippingMetadataMaxAggregateInputType
  }

  export type GetShippingMetadataAggregateType<T extends ShippingMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateShippingMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShippingMetadata[P]>
      : GetScalarType<T[P], AggregateShippingMetadata[P]>
  }




  export type ShippingMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShippingMetadataWhereInput
    orderBy?: ShippingMetadataOrderByWithAggregationInput | ShippingMetadataOrderByWithAggregationInput[]
    by: ShippingMetadataScalarFieldEnum[] | ShippingMetadataScalarFieldEnum
    having?: ShippingMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShippingMetadataCountAggregateInputType | true
    _avg?: ShippingMetadataAvgAggregateInputType
    _sum?: ShippingMetadataSumAggregateInputType
    _min?: ShippingMetadataMinAggregateInputType
    _max?: ShippingMetadataMaxAggregateInputType
  }

  export type ShippingMetadataGroupByOutputType = {
    id: number
    shippingID: string
    city: string
    _count: ShippingMetadataCountAggregateOutputType | null
    _avg: ShippingMetadataAvgAggregateOutputType | null
    _sum: ShippingMetadataSumAggregateOutputType | null
    _min: ShippingMetadataMinAggregateOutputType | null
    _max: ShippingMetadataMaxAggregateOutputType | null
  }

  type GetShippingMetadataGroupByPayload<T extends ShippingMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShippingMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShippingMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShippingMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], ShippingMetadataGroupByOutputType[P]>
        }
      >
    >


  export type ShippingMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shippingID?: boolean
    city?: boolean
  }, ExtArgs["result"]["shippingMetadata"]>



  export type ShippingMetadataSelectScalar = {
    id?: boolean
    shippingID?: boolean
    city?: boolean
  }

  export type ShippingMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shippingID" | "city", ExtArgs["result"]["shippingMetadata"]>

  export type $ShippingMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShippingMetadata"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      shippingID: string
      city: string
    }, ExtArgs["result"]["shippingMetadata"]>
    composites: {}
  }

  type ShippingMetadataGetPayload<S extends boolean | null | undefined | ShippingMetadataDefaultArgs> = $Result.GetResult<Prisma.$ShippingMetadataPayload, S>

  type ShippingMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShippingMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShippingMetadataCountAggregateInputType | true
    }

  export interface ShippingMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShippingMetadata'], meta: { name: 'ShippingMetadata' } }
    /**
     * Find zero or one ShippingMetadata that matches the filter.
     * @param {ShippingMetadataFindUniqueArgs} args - Arguments to find a ShippingMetadata
     * @example
     * // Get one ShippingMetadata
     * const shippingMetadata = await prisma.shippingMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShippingMetadataFindUniqueArgs>(args: SelectSubset<T, ShippingMetadataFindUniqueArgs<ExtArgs>>): Prisma__ShippingMetadataClient<$Result.GetResult<Prisma.$ShippingMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ShippingMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShippingMetadataFindUniqueOrThrowArgs} args - Arguments to find a ShippingMetadata
     * @example
     * // Get one ShippingMetadata
     * const shippingMetadata = await prisma.shippingMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShippingMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, ShippingMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShippingMetadataClient<$Result.GetResult<Prisma.$ShippingMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShippingMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMetadataFindFirstArgs} args - Arguments to find a ShippingMetadata
     * @example
     * // Get one ShippingMetadata
     * const shippingMetadata = await prisma.shippingMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShippingMetadataFindFirstArgs>(args?: SelectSubset<T, ShippingMetadataFindFirstArgs<ExtArgs>>): Prisma__ShippingMetadataClient<$Result.GetResult<Prisma.$ShippingMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ShippingMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMetadataFindFirstOrThrowArgs} args - Arguments to find a ShippingMetadata
     * @example
     * // Get one ShippingMetadata
     * const shippingMetadata = await prisma.shippingMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShippingMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, ShippingMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShippingMetadataClient<$Result.GetResult<Prisma.$ShippingMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ShippingMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShippingMetadata
     * const shippingMetadata = await prisma.shippingMetadata.findMany()
     * 
     * // Get first 10 ShippingMetadata
     * const shippingMetadata = await prisma.shippingMetadata.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shippingMetadataWithIdOnly = await prisma.shippingMetadata.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShippingMetadataFindManyArgs>(args?: SelectSubset<T, ShippingMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShippingMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ShippingMetadata.
     * @param {ShippingMetadataCreateArgs} args - Arguments to create a ShippingMetadata.
     * @example
     * // Create one ShippingMetadata
     * const ShippingMetadata = await prisma.shippingMetadata.create({
     *   data: {
     *     // ... data to create a ShippingMetadata
     *   }
     * })
     * 
     */
    create<T extends ShippingMetadataCreateArgs>(args: SelectSubset<T, ShippingMetadataCreateArgs<ExtArgs>>): Prisma__ShippingMetadataClient<$Result.GetResult<Prisma.$ShippingMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ShippingMetadata.
     * @param {ShippingMetadataCreateManyArgs} args - Arguments to create many ShippingMetadata.
     * @example
     * // Create many ShippingMetadata
     * const shippingMetadata = await prisma.shippingMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShippingMetadataCreateManyArgs>(args?: SelectSubset<T, ShippingMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ShippingMetadata.
     * @param {ShippingMetadataDeleteArgs} args - Arguments to delete one ShippingMetadata.
     * @example
     * // Delete one ShippingMetadata
     * const ShippingMetadata = await prisma.shippingMetadata.delete({
     *   where: {
     *     // ... filter to delete one ShippingMetadata
     *   }
     * })
     * 
     */
    delete<T extends ShippingMetadataDeleteArgs>(args: SelectSubset<T, ShippingMetadataDeleteArgs<ExtArgs>>): Prisma__ShippingMetadataClient<$Result.GetResult<Prisma.$ShippingMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ShippingMetadata.
     * @param {ShippingMetadataUpdateArgs} args - Arguments to update one ShippingMetadata.
     * @example
     * // Update one ShippingMetadata
     * const shippingMetadata = await prisma.shippingMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShippingMetadataUpdateArgs>(args: SelectSubset<T, ShippingMetadataUpdateArgs<ExtArgs>>): Prisma__ShippingMetadataClient<$Result.GetResult<Prisma.$ShippingMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ShippingMetadata.
     * @param {ShippingMetadataDeleteManyArgs} args - Arguments to filter ShippingMetadata to delete.
     * @example
     * // Delete a few ShippingMetadata
     * const { count } = await prisma.shippingMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShippingMetadataDeleteManyArgs>(args?: SelectSubset<T, ShippingMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShippingMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShippingMetadata
     * const shippingMetadata = await prisma.shippingMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShippingMetadataUpdateManyArgs>(args: SelectSubset<T, ShippingMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShippingMetadata.
     * @param {ShippingMetadataUpsertArgs} args - Arguments to update or create a ShippingMetadata.
     * @example
     * // Update or create a ShippingMetadata
     * const shippingMetadata = await prisma.shippingMetadata.upsert({
     *   create: {
     *     // ... data to create a ShippingMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShippingMetadata we want to update
     *   }
     * })
     */
    upsert<T extends ShippingMetadataUpsertArgs>(args: SelectSubset<T, ShippingMetadataUpsertArgs<ExtArgs>>): Prisma__ShippingMetadataClient<$Result.GetResult<Prisma.$ShippingMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ShippingMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMetadataCountArgs} args - Arguments to filter ShippingMetadata to count.
     * @example
     * // Count the number of ShippingMetadata
     * const count = await prisma.shippingMetadata.count({
     *   where: {
     *     // ... the filter for the ShippingMetadata we want to count
     *   }
     * })
    **/
    count<T extends ShippingMetadataCountArgs>(
      args?: Subset<T, ShippingMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShippingMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShippingMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShippingMetadataAggregateArgs>(args: Subset<T, ShippingMetadataAggregateArgs>): Prisma.PrismaPromise<GetShippingMetadataAggregateType<T>>

    /**
     * Group by ShippingMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShippingMetadataGroupByArgs} args - Group by arguments.
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
      T extends ShippingMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShippingMetadataGroupByArgs['orderBy'] }
        : { orderBy?: ShippingMetadataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShippingMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShippingMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShippingMetadata model
   */
  readonly fields: ShippingMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShippingMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShippingMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ShippingMetadata model
   */
  interface ShippingMetadataFieldRefs {
    readonly id: FieldRef<"ShippingMetadata", 'Int'>
    readonly shippingID: FieldRef<"ShippingMetadata", 'String'>
    readonly city: FieldRef<"ShippingMetadata", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ShippingMetadata findUnique
   */
  export type ShippingMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingMetadata
     */
    select?: ShippingMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingMetadata
     */
    omit?: ShippingMetadataOmit<ExtArgs> | null
    /**
     * Filter, which ShippingMetadata to fetch.
     */
    where: ShippingMetadataWhereUniqueInput
  }

  /**
   * ShippingMetadata findUniqueOrThrow
   */
  export type ShippingMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingMetadata
     */
    select?: ShippingMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingMetadata
     */
    omit?: ShippingMetadataOmit<ExtArgs> | null
    /**
     * Filter, which ShippingMetadata to fetch.
     */
    where: ShippingMetadataWhereUniqueInput
  }

  /**
   * ShippingMetadata findFirst
   */
  export type ShippingMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingMetadata
     */
    select?: ShippingMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingMetadata
     */
    omit?: ShippingMetadataOmit<ExtArgs> | null
    /**
     * Filter, which ShippingMetadata to fetch.
     */
    where?: ShippingMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingMetadata to fetch.
     */
    orderBy?: ShippingMetadataOrderByWithRelationInput | ShippingMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingMetadata.
     */
    cursor?: ShippingMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingMetadata.
     */
    distinct?: ShippingMetadataScalarFieldEnum | ShippingMetadataScalarFieldEnum[]
  }

  /**
   * ShippingMetadata findFirstOrThrow
   */
  export type ShippingMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingMetadata
     */
    select?: ShippingMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingMetadata
     */
    omit?: ShippingMetadataOmit<ExtArgs> | null
    /**
     * Filter, which ShippingMetadata to fetch.
     */
    where?: ShippingMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingMetadata to fetch.
     */
    orderBy?: ShippingMetadataOrderByWithRelationInput | ShippingMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShippingMetadata.
     */
    cursor?: ShippingMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShippingMetadata.
     */
    distinct?: ShippingMetadataScalarFieldEnum | ShippingMetadataScalarFieldEnum[]
  }

  /**
   * ShippingMetadata findMany
   */
  export type ShippingMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingMetadata
     */
    select?: ShippingMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingMetadata
     */
    omit?: ShippingMetadataOmit<ExtArgs> | null
    /**
     * Filter, which ShippingMetadata to fetch.
     */
    where?: ShippingMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShippingMetadata to fetch.
     */
    orderBy?: ShippingMetadataOrderByWithRelationInput | ShippingMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShippingMetadata.
     */
    cursor?: ShippingMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShippingMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShippingMetadata.
     */
    skip?: number
    distinct?: ShippingMetadataScalarFieldEnum | ShippingMetadataScalarFieldEnum[]
  }

  /**
   * ShippingMetadata create
   */
  export type ShippingMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingMetadata
     */
    select?: ShippingMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingMetadata
     */
    omit?: ShippingMetadataOmit<ExtArgs> | null
    /**
     * The data needed to create a ShippingMetadata.
     */
    data: XOR<ShippingMetadataCreateInput, ShippingMetadataUncheckedCreateInput>
  }

  /**
   * ShippingMetadata createMany
   */
  export type ShippingMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ShippingMetadata.
     */
    data: ShippingMetadataCreateManyInput | ShippingMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ShippingMetadata update
   */
  export type ShippingMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingMetadata
     */
    select?: ShippingMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingMetadata
     */
    omit?: ShippingMetadataOmit<ExtArgs> | null
    /**
     * The data needed to update a ShippingMetadata.
     */
    data: XOR<ShippingMetadataUpdateInput, ShippingMetadataUncheckedUpdateInput>
    /**
     * Choose, which ShippingMetadata to update.
     */
    where: ShippingMetadataWhereUniqueInput
  }

  /**
   * ShippingMetadata updateMany
   */
  export type ShippingMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShippingMetadata.
     */
    data: XOR<ShippingMetadataUpdateManyMutationInput, ShippingMetadataUncheckedUpdateManyInput>
    /**
     * Filter which ShippingMetadata to update
     */
    where?: ShippingMetadataWhereInput
    /**
     * Limit how many ShippingMetadata to update.
     */
    limit?: number
  }

  /**
   * ShippingMetadata upsert
   */
  export type ShippingMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingMetadata
     */
    select?: ShippingMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingMetadata
     */
    omit?: ShippingMetadataOmit<ExtArgs> | null
    /**
     * The filter to search for the ShippingMetadata to update in case it exists.
     */
    where: ShippingMetadataWhereUniqueInput
    /**
     * In case the ShippingMetadata found by the `where` argument doesn't exist, create a new ShippingMetadata with this data.
     */
    create: XOR<ShippingMetadataCreateInput, ShippingMetadataUncheckedCreateInput>
    /**
     * In case the ShippingMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShippingMetadataUpdateInput, ShippingMetadataUncheckedUpdateInput>
  }

  /**
   * ShippingMetadata delete
   */
  export type ShippingMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingMetadata
     */
    select?: ShippingMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingMetadata
     */
    omit?: ShippingMetadataOmit<ExtArgs> | null
    /**
     * Filter which ShippingMetadata to delete.
     */
    where: ShippingMetadataWhereUniqueInput
  }

  /**
   * ShippingMetadata deleteMany
   */
  export type ShippingMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShippingMetadata to delete
     */
    where?: ShippingMetadataWhereInput
    /**
     * Limit how many ShippingMetadata to delete.
     */
    limit?: number
  }

  /**
   * ShippingMetadata without action
   */
  export type ShippingMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShippingMetadata
     */
    select?: ShippingMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ShippingMetadata
     */
    omit?: ShippingMetadataOmit<ExtArgs> | null
  }


  /**
   * Model PackingScan
   */

  export type AggregatePackingScan = {
    _count: PackingScanCountAggregateOutputType | null
    _avg: PackingScanAvgAggregateOutputType | null
    _sum: PackingScanSumAggregateOutputType | null
    _min: PackingScanMinAggregateOutputType | null
    _max: PackingScanMaxAggregateOutputType | null
  }

  export type PackingScanAvgAggregateOutputType = {
    id: number | null
  }

  export type PackingScanSumAggregateOutputType = {
    id: number | null
  }

  export type PackingScanMinAggregateOutputType = {
    id: number | null
    scanId: string | null
    stationId: string | null
    nexsId: string | null
    timestamp: Date | null
  }

  export type PackingScanMaxAggregateOutputType = {
    id: number | null
    scanId: string | null
    stationId: string | null
    nexsId: string | null
    timestamp: Date | null
  }

  export type PackingScanCountAggregateOutputType = {
    id: number
    scanId: number
    stationId: number
    nexsId: number
    timestamp: number
    _all: number
  }


  export type PackingScanAvgAggregateInputType = {
    id?: true
  }

  export type PackingScanSumAggregateInputType = {
    id?: true
  }

  export type PackingScanMinAggregateInputType = {
    id?: true
    scanId?: true
    stationId?: true
    nexsId?: true
    timestamp?: true
  }

  export type PackingScanMaxAggregateInputType = {
    id?: true
    scanId?: true
    stationId?: true
    nexsId?: true
    timestamp?: true
  }

  export type PackingScanCountAggregateInputType = {
    id?: true
    scanId?: true
    stationId?: true
    nexsId?: true
    timestamp?: true
    _all?: true
  }

  export type PackingScanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackingScan to aggregate.
     */
    where?: PackingScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackingScans to fetch.
     */
    orderBy?: PackingScanOrderByWithRelationInput | PackingScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackingScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackingScans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackingScans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackingScans
    **/
    _count?: true | PackingScanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackingScanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackingScanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackingScanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackingScanMaxAggregateInputType
  }

  export type GetPackingScanAggregateType<T extends PackingScanAggregateArgs> = {
        [P in keyof T & keyof AggregatePackingScan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackingScan[P]>
      : GetScalarType<T[P], AggregatePackingScan[P]>
  }




  export type PackingScanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackingScanWhereInput
    orderBy?: PackingScanOrderByWithAggregationInput | PackingScanOrderByWithAggregationInput[]
    by: PackingScanScalarFieldEnum[] | PackingScanScalarFieldEnum
    having?: PackingScanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackingScanCountAggregateInputType | true
    _avg?: PackingScanAvgAggregateInputType
    _sum?: PackingScanSumAggregateInputType
    _min?: PackingScanMinAggregateInputType
    _max?: PackingScanMaxAggregateInputType
  }

  export type PackingScanGroupByOutputType = {
    id: number
    scanId: string
    stationId: string
    nexsId: string
    timestamp: Date
    _count: PackingScanCountAggregateOutputType | null
    _avg: PackingScanAvgAggregateOutputType | null
    _sum: PackingScanSumAggregateOutputType | null
    _min: PackingScanMinAggregateOutputType | null
    _max: PackingScanMaxAggregateOutputType | null
  }

  type GetPackingScanGroupByPayload<T extends PackingScanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackingScanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackingScanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackingScanGroupByOutputType[P]>
            : GetScalarType<T[P], PackingScanGroupByOutputType[P]>
        }
      >
    >


  export type PackingScanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    stationId?: boolean
    nexsId?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["packingScan"]>



  export type PackingScanSelectScalar = {
    id?: boolean
    scanId?: boolean
    stationId?: boolean
    nexsId?: boolean
    timestamp?: boolean
  }

  export type PackingScanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scanId" | "stationId" | "nexsId" | "timestamp", ExtArgs["result"]["packingScan"]>

  export type $PackingScanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackingScan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scanId: string
      stationId: string
      nexsId: string
      timestamp: Date
    }, ExtArgs["result"]["packingScan"]>
    composites: {}
  }

  type PackingScanGetPayload<S extends boolean | null | undefined | PackingScanDefaultArgs> = $Result.GetResult<Prisma.$PackingScanPayload, S>

  type PackingScanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackingScanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackingScanCountAggregateInputType | true
    }

  export interface PackingScanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackingScan'], meta: { name: 'PackingScan' } }
    /**
     * Find zero or one PackingScan that matches the filter.
     * @param {PackingScanFindUniqueArgs} args - Arguments to find a PackingScan
     * @example
     * // Get one PackingScan
     * const packingScan = await prisma.packingScan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackingScanFindUniqueArgs>(args: SelectSubset<T, PackingScanFindUniqueArgs<ExtArgs>>): Prisma__PackingScanClient<$Result.GetResult<Prisma.$PackingScanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackingScan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackingScanFindUniqueOrThrowArgs} args - Arguments to find a PackingScan
     * @example
     * // Get one PackingScan
     * const packingScan = await prisma.packingScan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackingScanFindUniqueOrThrowArgs>(args: SelectSubset<T, PackingScanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackingScanClient<$Result.GetResult<Prisma.$PackingScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackingScan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackingScanFindFirstArgs} args - Arguments to find a PackingScan
     * @example
     * // Get one PackingScan
     * const packingScan = await prisma.packingScan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackingScanFindFirstArgs>(args?: SelectSubset<T, PackingScanFindFirstArgs<ExtArgs>>): Prisma__PackingScanClient<$Result.GetResult<Prisma.$PackingScanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackingScan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackingScanFindFirstOrThrowArgs} args - Arguments to find a PackingScan
     * @example
     * // Get one PackingScan
     * const packingScan = await prisma.packingScan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackingScanFindFirstOrThrowArgs>(args?: SelectSubset<T, PackingScanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackingScanClient<$Result.GetResult<Prisma.$PackingScanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackingScans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackingScanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackingScans
     * const packingScans = await prisma.packingScan.findMany()
     * 
     * // Get first 10 PackingScans
     * const packingScans = await prisma.packingScan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packingScanWithIdOnly = await prisma.packingScan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackingScanFindManyArgs>(args?: SelectSubset<T, PackingScanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackingScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackingScan.
     * @param {PackingScanCreateArgs} args - Arguments to create a PackingScan.
     * @example
     * // Create one PackingScan
     * const PackingScan = await prisma.packingScan.create({
     *   data: {
     *     // ... data to create a PackingScan
     *   }
     * })
     * 
     */
    create<T extends PackingScanCreateArgs>(args: SelectSubset<T, PackingScanCreateArgs<ExtArgs>>): Prisma__PackingScanClient<$Result.GetResult<Prisma.$PackingScanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackingScans.
     * @param {PackingScanCreateManyArgs} args - Arguments to create many PackingScans.
     * @example
     * // Create many PackingScans
     * const packingScan = await prisma.packingScan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackingScanCreateManyArgs>(args?: SelectSubset<T, PackingScanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PackingScan.
     * @param {PackingScanDeleteArgs} args - Arguments to delete one PackingScan.
     * @example
     * // Delete one PackingScan
     * const PackingScan = await prisma.packingScan.delete({
     *   where: {
     *     // ... filter to delete one PackingScan
     *   }
     * })
     * 
     */
    delete<T extends PackingScanDeleteArgs>(args: SelectSubset<T, PackingScanDeleteArgs<ExtArgs>>): Prisma__PackingScanClient<$Result.GetResult<Prisma.$PackingScanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackingScan.
     * @param {PackingScanUpdateArgs} args - Arguments to update one PackingScan.
     * @example
     * // Update one PackingScan
     * const packingScan = await prisma.packingScan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackingScanUpdateArgs>(args: SelectSubset<T, PackingScanUpdateArgs<ExtArgs>>): Prisma__PackingScanClient<$Result.GetResult<Prisma.$PackingScanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackingScans.
     * @param {PackingScanDeleteManyArgs} args - Arguments to filter PackingScans to delete.
     * @example
     * // Delete a few PackingScans
     * const { count } = await prisma.packingScan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackingScanDeleteManyArgs>(args?: SelectSubset<T, PackingScanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackingScans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackingScanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackingScans
     * const packingScan = await prisma.packingScan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackingScanUpdateManyArgs>(args: SelectSubset<T, PackingScanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PackingScan.
     * @param {PackingScanUpsertArgs} args - Arguments to update or create a PackingScan.
     * @example
     * // Update or create a PackingScan
     * const packingScan = await prisma.packingScan.upsert({
     *   create: {
     *     // ... data to create a PackingScan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackingScan we want to update
     *   }
     * })
     */
    upsert<T extends PackingScanUpsertArgs>(args: SelectSubset<T, PackingScanUpsertArgs<ExtArgs>>): Prisma__PackingScanClient<$Result.GetResult<Prisma.$PackingScanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackingScans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackingScanCountArgs} args - Arguments to filter PackingScans to count.
     * @example
     * // Count the number of PackingScans
     * const count = await prisma.packingScan.count({
     *   where: {
     *     // ... the filter for the PackingScans we want to count
     *   }
     * })
    **/
    count<T extends PackingScanCountArgs>(
      args?: Subset<T, PackingScanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackingScanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackingScan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackingScanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackingScanAggregateArgs>(args: Subset<T, PackingScanAggregateArgs>): Prisma.PrismaPromise<GetPackingScanAggregateType<T>>

    /**
     * Group by PackingScan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackingScanGroupByArgs} args - Group by arguments.
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
      T extends PackingScanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackingScanGroupByArgs['orderBy'] }
        : { orderBy?: PackingScanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackingScanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackingScanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackingScan model
   */
  readonly fields: PackingScanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackingScan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackingScanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PackingScan model
   */
  interface PackingScanFieldRefs {
    readonly id: FieldRef<"PackingScan", 'Int'>
    readonly scanId: FieldRef<"PackingScan", 'String'>
    readonly stationId: FieldRef<"PackingScan", 'String'>
    readonly nexsId: FieldRef<"PackingScan", 'String'>
    readonly timestamp: FieldRef<"PackingScan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PackingScan findUnique
   */
  export type PackingScanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackingScan
     */
    select?: PackingScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackingScan
     */
    omit?: PackingScanOmit<ExtArgs> | null
    /**
     * Filter, which PackingScan to fetch.
     */
    where: PackingScanWhereUniqueInput
  }

  /**
   * PackingScan findUniqueOrThrow
   */
  export type PackingScanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackingScan
     */
    select?: PackingScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackingScan
     */
    omit?: PackingScanOmit<ExtArgs> | null
    /**
     * Filter, which PackingScan to fetch.
     */
    where: PackingScanWhereUniqueInput
  }

  /**
   * PackingScan findFirst
   */
  export type PackingScanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackingScan
     */
    select?: PackingScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackingScan
     */
    omit?: PackingScanOmit<ExtArgs> | null
    /**
     * Filter, which PackingScan to fetch.
     */
    where?: PackingScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackingScans to fetch.
     */
    orderBy?: PackingScanOrderByWithRelationInput | PackingScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackingScans.
     */
    cursor?: PackingScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackingScans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackingScans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackingScans.
     */
    distinct?: PackingScanScalarFieldEnum | PackingScanScalarFieldEnum[]
  }

  /**
   * PackingScan findFirstOrThrow
   */
  export type PackingScanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackingScan
     */
    select?: PackingScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackingScan
     */
    omit?: PackingScanOmit<ExtArgs> | null
    /**
     * Filter, which PackingScan to fetch.
     */
    where?: PackingScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackingScans to fetch.
     */
    orderBy?: PackingScanOrderByWithRelationInput | PackingScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackingScans.
     */
    cursor?: PackingScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackingScans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackingScans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackingScans.
     */
    distinct?: PackingScanScalarFieldEnum | PackingScanScalarFieldEnum[]
  }

  /**
   * PackingScan findMany
   */
  export type PackingScanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackingScan
     */
    select?: PackingScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackingScan
     */
    omit?: PackingScanOmit<ExtArgs> | null
    /**
     * Filter, which PackingScans to fetch.
     */
    where?: PackingScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackingScans to fetch.
     */
    orderBy?: PackingScanOrderByWithRelationInput | PackingScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackingScans.
     */
    cursor?: PackingScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackingScans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackingScans.
     */
    skip?: number
    distinct?: PackingScanScalarFieldEnum | PackingScanScalarFieldEnum[]
  }

  /**
   * PackingScan create
   */
  export type PackingScanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackingScan
     */
    select?: PackingScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackingScan
     */
    omit?: PackingScanOmit<ExtArgs> | null
    /**
     * The data needed to create a PackingScan.
     */
    data: XOR<PackingScanCreateInput, PackingScanUncheckedCreateInput>
  }

  /**
   * PackingScan createMany
   */
  export type PackingScanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackingScans.
     */
    data: PackingScanCreateManyInput | PackingScanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackingScan update
   */
  export type PackingScanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackingScan
     */
    select?: PackingScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackingScan
     */
    omit?: PackingScanOmit<ExtArgs> | null
    /**
     * The data needed to update a PackingScan.
     */
    data: XOR<PackingScanUpdateInput, PackingScanUncheckedUpdateInput>
    /**
     * Choose, which PackingScan to update.
     */
    where: PackingScanWhereUniqueInput
  }

  /**
   * PackingScan updateMany
   */
  export type PackingScanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackingScans.
     */
    data: XOR<PackingScanUpdateManyMutationInput, PackingScanUncheckedUpdateManyInput>
    /**
     * Filter which PackingScans to update
     */
    where?: PackingScanWhereInput
    /**
     * Limit how many PackingScans to update.
     */
    limit?: number
  }

  /**
   * PackingScan upsert
   */
  export type PackingScanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackingScan
     */
    select?: PackingScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackingScan
     */
    omit?: PackingScanOmit<ExtArgs> | null
    /**
     * The filter to search for the PackingScan to update in case it exists.
     */
    where: PackingScanWhereUniqueInput
    /**
     * In case the PackingScan found by the `where` argument doesn't exist, create a new PackingScan with this data.
     */
    create: XOR<PackingScanCreateInput, PackingScanUncheckedCreateInput>
    /**
     * In case the PackingScan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackingScanUpdateInput, PackingScanUncheckedUpdateInput>
  }

  /**
   * PackingScan delete
   */
  export type PackingScanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackingScan
     */
    select?: PackingScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackingScan
     */
    omit?: PackingScanOmit<ExtArgs> | null
    /**
     * Filter which PackingScan to delete.
     */
    where: PackingScanWhereUniqueInput
  }

  /**
   * PackingScan deleteMany
   */
  export type PackingScanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackingScans to delete
     */
    where?: PackingScanWhereInput
    /**
     * Limit how many PackingScans to delete.
     */
    limit?: number
  }

  /**
   * PackingScan without action
   */
  export type PackingScanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackingScan
     */
    select?: PackingScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackingScan
     */
    omit?: PackingScanOmit<ExtArgs> | null
  }


  /**
   * Model DispatchScan
   */

  export type AggregateDispatchScan = {
    _count: DispatchScanCountAggregateOutputType | null
    _avg: DispatchScanAvgAggregateOutputType | null
    _sum: DispatchScanSumAggregateOutputType | null
    _min: DispatchScanMinAggregateOutputType | null
    _max: DispatchScanMaxAggregateOutputType | null
  }

  export type DispatchScanAvgAggregateOutputType = {
    id: number | null
  }

  export type DispatchScanSumAggregateOutputType = {
    id: number | null
  }

  export type DispatchScanMinAggregateOutputType = {
    id: number | null
    scanId: string | null
    stationId: string | null
    nexsId: string | null
    timestamp: Date | null
  }

  export type DispatchScanMaxAggregateOutputType = {
    id: number | null
    scanId: string | null
    stationId: string | null
    nexsId: string | null
    timestamp: Date | null
  }

  export type DispatchScanCountAggregateOutputType = {
    id: number
    scanId: number
    stationId: number
    nexsId: number
    timestamp: number
    _all: number
  }


  export type DispatchScanAvgAggregateInputType = {
    id?: true
  }

  export type DispatchScanSumAggregateInputType = {
    id?: true
  }

  export type DispatchScanMinAggregateInputType = {
    id?: true
    scanId?: true
    stationId?: true
    nexsId?: true
    timestamp?: true
  }

  export type DispatchScanMaxAggregateInputType = {
    id?: true
    scanId?: true
    stationId?: true
    nexsId?: true
    timestamp?: true
  }

  export type DispatchScanCountAggregateInputType = {
    id?: true
    scanId?: true
    stationId?: true
    nexsId?: true
    timestamp?: true
    _all?: true
  }

  export type DispatchScanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DispatchScan to aggregate.
     */
    where?: DispatchScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DispatchScans to fetch.
     */
    orderBy?: DispatchScanOrderByWithRelationInput | DispatchScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DispatchScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DispatchScans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DispatchScans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DispatchScans
    **/
    _count?: true | DispatchScanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DispatchScanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DispatchScanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DispatchScanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DispatchScanMaxAggregateInputType
  }

  export type GetDispatchScanAggregateType<T extends DispatchScanAggregateArgs> = {
        [P in keyof T & keyof AggregateDispatchScan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispatchScan[P]>
      : GetScalarType<T[P], AggregateDispatchScan[P]>
  }




  export type DispatchScanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DispatchScanWhereInput
    orderBy?: DispatchScanOrderByWithAggregationInput | DispatchScanOrderByWithAggregationInput[]
    by: DispatchScanScalarFieldEnum[] | DispatchScanScalarFieldEnum
    having?: DispatchScanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DispatchScanCountAggregateInputType | true
    _avg?: DispatchScanAvgAggregateInputType
    _sum?: DispatchScanSumAggregateInputType
    _min?: DispatchScanMinAggregateInputType
    _max?: DispatchScanMaxAggregateInputType
  }

  export type DispatchScanGroupByOutputType = {
    id: number
    scanId: string
    stationId: string
    nexsId: string
    timestamp: Date
    _count: DispatchScanCountAggregateOutputType | null
    _avg: DispatchScanAvgAggregateOutputType | null
    _sum: DispatchScanSumAggregateOutputType | null
    _min: DispatchScanMinAggregateOutputType | null
    _max: DispatchScanMaxAggregateOutputType | null
  }

  type GetDispatchScanGroupByPayload<T extends DispatchScanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DispatchScanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DispatchScanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DispatchScanGroupByOutputType[P]>
            : GetScalarType<T[P], DispatchScanGroupByOutputType[P]>
        }
      >
    >


  export type DispatchScanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scanId?: boolean
    stationId?: boolean
    nexsId?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["dispatchScan"]>



  export type DispatchScanSelectScalar = {
    id?: boolean
    scanId?: boolean
    stationId?: boolean
    nexsId?: boolean
    timestamp?: boolean
  }

  export type DispatchScanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "scanId" | "stationId" | "nexsId" | "timestamp", ExtArgs["result"]["dispatchScan"]>

  export type $DispatchScanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DispatchScan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scanId: string
      stationId: string
      nexsId: string
      timestamp: Date
    }, ExtArgs["result"]["dispatchScan"]>
    composites: {}
  }

  type DispatchScanGetPayload<S extends boolean | null | undefined | DispatchScanDefaultArgs> = $Result.GetResult<Prisma.$DispatchScanPayload, S>

  type DispatchScanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DispatchScanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DispatchScanCountAggregateInputType | true
    }

  export interface DispatchScanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DispatchScan'], meta: { name: 'DispatchScan' } }
    /**
     * Find zero or one DispatchScan that matches the filter.
     * @param {DispatchScanFindUniqueArgs} args - Arguments to find a DispatchScan
     * @example
     * // Get one DispatchScan
     * const dispatchScan = await prisma.dispatchScan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DispatchScanFindUniqueArgs>(args: SelectSubset<T, DispatchScanFindUniqueArgs<ExtArgs>>): Prisma__DispatchScanClient<$Result.GetResult<Prisma.$DispatchScanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DispatchScan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DispatchScanFindUniqueOrThrowArgs} args - Arguments to find a DispatchScan
     * @example
     * // Get one DispatchScan
     * const dispatchScan = await prisma.dispatchScan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DispatchScanFindUniqueOrThrowArgs>(args: SelectSubset<T, DispatchScanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DispatchScanClient<$Result.GetResult<Prisma.$DispatchScanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DispatchScan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchScanFindFirstArgs} args - Arguments to find a DispatchScan
     * @example
     * // Get one DispatchScan
     * const dispatchScan = await prisma.dispatchScan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DispatchScanFindFirstArgs>(args?: SelectSubset<T, DispatchScanFindFirstArgs<ExtArgs>>): Prisma__DispatchScanClient<$Result.GetResult<Prisma.$DispatchScanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DispatchScan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchScanFindFirstOrThrowArgs} args - Arguments to find a DispatchScan
     * @example
     * // Get one DispatchScan
     * const dispatchScan = await prisma.dispatchScan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DispatchScanFindFirstOrThrowArgs>(args?: SelectSubset<T, DispatchScanFindFirstOrThrowArgs<ExtArgs>>): Prisma__DispatchScanClient<$Result.GetResult<Prisma.$DispatchScanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DispatchScans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchScanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DispatchScans
     * const dispatchScans = await prisma.dispatchScan.findMany()
     * 
     * // Get first 10 DispatchScans
     * const dispatchScans = await prisma.dispatchScan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dispatchScanWithIdOnly = await prisma.dispatchScan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DispatchScanFindManyArgs>(args?: SelectSubset<T, DispatchScanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DispatchScanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DispatchScan.
     * @param {DispatchScanCreateArgs} args - Arguments to create a DispatchScan.
     * @example
     * // Create one DispatchScan
     * const DispatchScan = await prisma.dispatchScan.create({
     *   data: {
     *     // ... data to create a DispatchScan
     *   }
     * })
     * 
     */
    create<T extends DispatchScanCreateArgs>(args: SelectSubset<T, DispatchScanCreateArgs<ExtArgs>>): Prisma__DispatchScanClient<$Result.GetResult<Prisma.$DispatchScanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DispatchScans.
     * @param {DispatchScanCreateManyArgs} args - Arguments to create many DispatchScans.
     * @example
     * // Create many DispatchScans
     * const dispatchScan = await prisma.dispatchScan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DispatchScanCreateManyArgs>(args?: SelectSubset<T, DispatchScanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DispatchScan.
     * @param {DispatchScanDeleteArgs} args - Arguments to delete one DispatchScan.
     * @example
     * // Delete one DispatchScan
     * const DispatchScan = await prisma.dispatchScan.delete({
     *   where: {
     *     // ... filter to delete one DispatchScan
     *   }
     * })
     * 
     */
    delete<T extends DispatchScanDeleteArgs>(args: SelectSubset<T, DispatchScanDeleteArgs<ExtArgs>>): Prisma__DispatchScanClient<$Result.GetResult<Prisma.$DispatchScanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DispatchScan.
     * @param {DispatchScanUpdateArgs} args - Arguments to update one DispatchScan.
     * @example
     * // Update one DispatchScan
     * const dispatchScan = await prisma.dispatchScan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DispatchScanUpdateArgs>(args: SelectSubset<T, DispatchScanUpdateArgs<ExtArgs>>): Prisma__DispatchScanClient<$Result.GetResult<Prisma.$DispatchScanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DispatchScans.
     * @param {DispatchScanDeleteManyArgs} args - Arguments to filter DispatchScans to delete.
     * @example
     * // Delete a few DispatchScans
     * const { count } = await prisma.dispatchScan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DispatchScanDeleteManyArgs>(args?: SelectSubset<T, DispatchScanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DispatchScans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchScanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DispatchScans
     * const dispatchScan = await prisma.dispatchScan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DispatchScanUpdateManyArgs>(args: SelectSubset<T, DispatchScanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DispatchScan.
     * @param {DispatchScanUpsertArgs} args - Arguments to update or create a DispatchScan.
     * @example
     * // Update or create a DispatchScan
     * const dispatchScan = await prisma.dispatchScan.upsert({
     *   create: {
     *     // ... data to create a DispatchScan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DispatchScan we want to update
     *   }
     * })
     */
    upsert<T extends DispatchScanUpsertArgs>(args: SelectSubset<T, DispatchScanUpsertArgs<ExtArgs>>): Prisma__DispatchScanClient<$Result.GetResult<Prisma.$DispatchScanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DispatchScans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchScanCountArgs} args - Arguments to filter DispatchScans to count.
     * @example
     * // Count the number of DispatchScans
     * const count = await prisma.dispatchScan.count({
     *   where: {
     *     // ... the filter for the DispatchScans we want to count
     *   }
     * })
    **/
    count<T extends DispatchScanCountArgs>(
      args?: Subset<T, DispatchScanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DispatchScanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DispatchScan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchScanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DispatchScanAggregateArgs>(args: Subset<T, DispatchScanAggregateArgs>): Prisma.PrismaPromise<GetDispatchScanAggregateType<T>>

    /**
     * Group by DispatchScan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DispatchScanGroupByArgs} args - Group by arguments.
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
      T extends DispatchScanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DispatchScanGroupByArgs['orderBy'] }
        : { orderBy?: DispatchScanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DispatchScanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDispatchScanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DispatchScan model
   */
  readonly fields: DispatchScanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DispatchScan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DispatchScanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DispatchScan model
   */
  interface DispatchScanFieldRefs {
    readonly id: FieldRef<"DispatchScan", 'Int'>
    readonly scanId: FieldRef<"DispatchScan", 'String'>
    readonly stationId: FieldRef<"DispatchScan", 'String'>
    readonly nexsId: FieldRef<"DispatchScan", 'String'>
    readonly timestamp: FieldRef<"DispatchScan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DispatchScan findUnique
   */
  export type DispatchScanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchScan
     */
    select?: DispatchScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchScan
     */
    omit?: DispatchScanOmit<ExtArgs> | null
    /**
     * Filter, which DispatchScan to fetch.
     */
    where: DispatchScanWhereUniqueInput
  }

  /**
   * DispatchScan findUniqueOrThrow
   */
  export type DispatchScanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchScan
     */
    select?: DispatchScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchScan
     */
    omit?: DispatchScanOmit<ExtArgs> | null
    /**
     * Filter, which DispatchScan to fetch.
     */
    where: DispatchScanWhereUniqueInput
  }

  /**
   * DispatchScan findFirst
   */
  export type DispatchScanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchScan
     */
    select?: DispatchScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchScan
     */
    omit?: DispatchScanOmit<ExtArgs> | null
    /**
     * Filter, which DispatchScan to fetch.
     */
    where?: DispatchScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DispatchScans to fetch.
     */
    orderBy?: DispatchScanOrderByWithRelationInput | DispatchScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DispatchScans.
     */
    cursor?: DispatchScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DispatchScans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DispatchScans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DispatchScans.
     */
    distinct?: DispatchScanScalarFieldEnum | DispatchScanScalarFieldEnum[]
  }

  /**
   * DispatchScan findFirstOrThrow
   */
  export type DispatchScanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchScan
     */
    select?: DispatchScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchScan
     */
    omit?: DispatchScanOmit<ExtArgs> | null
    /**
     * Filter, which DispatchScan to fetch.
     */
    where?: DispatchScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DispatchScans to fetch.
     */
    orderBy?: DispatchScanOrderByWithRelationInput | DispatchScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DispatchScans.
     */
    cursor?: DispatchScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DispatchScans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DispatchScans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DispatchScans.
     */
    distinct?: DispatchScanScalarFieldEnum | DispatchScanScalarFieldEnum[]
  }

  /**
   * DispatchScan findMany
   */
  export type DispatchScanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchScan
     */
    select?: DispatchScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchScan
     */
    omit?: DispatchScanOmit<ExtArgs> | null
    /**
     * Filter, which DispatchScans to fetch.
     */
    where?: DispatchScanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DispatchScans to fetch.
     */
    orderBy?: DispatchScanOrderByWithRelationInput | DispatchScanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DispatchScans.
     */
    cursor?: DispatchScanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DispatchScans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DispatchScans.
     */
    skip?: number
    distinct?: DispatchScanScalarFieldEnum | DispatchScanScalarFieldEnum[]
  }

  /**
   * DispatchScan create
   */
  export type DispatchScanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchScan
     */
    select?: DispatchScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchScan
     */
    omit?: DispatchScanOmit<ExtArgs> | null
    /**
     * The data needed to create a DispatchScan.
     */
    data: XOR<DispatchScanCreateInput, DispatchScanUncheckedCreateInput>
  }

  /**
   * DispatchScan createMany
   */
  export type DispatchScanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DispatchScans.
     */
    data: DispatchScanCreateManyInput | DispatchScanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DispatchScan update
   */
  export type DispatchScanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchScan
     */
    select?: DispatchScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchScan
     */
    omit?: DispatchScanOmit<ExtArgs> | null
    /**
     * The data needed to update a DispatchScan.
     */
    data: XOR<DispatchScanUpdateInput, DispatchScanUncheckedUpdateInput>
    /**
     * Choose, which DispatchScan to update.
     */
    where: DispatchScanWhereUniqueInput
  }

  /**
   * DispatchScan updateMany
   */
  export type DispatchScanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DispatchScans.
     */
    data: XOR<DispatchScanUpdateManyMutationInput, DispatchScanUncheckedUpdateManyInput>
    /**
     * Filter which DispatchScans to update
     */
    where?: DispatchScanWhereInput
    /**
     * Limit how many DispatchScans to update.
     */
    limit?: number
  }

  /**
   * DispatchScan upsert
   */
  export type DispatchScanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchScan
     */
    select?: DispatchScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchScan
     */
    omit?: DispatchScanOmit<ExtArgs> | null
    /**
     * The filter to search for the DispatchScan to update in case it exists.
     */
    where: DispatchScanWhereUniqueInput
    /**
     * In case the DispatchScan found by the `where` argument doesn't exist, create a new DispatchScan with this data.
     */
    create: XOR<DispatchScanCreateInput, DispatchScanUncheckedCreateInput>
    /**
     * In case the DispatchScan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DispatchScanUpdateInput, DispatchScanUncheckedUpdateInput>
  }

  /**
   * DispatchScan delete
   */
  export type DispatchScanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchScan
     */
    select?: DispatchScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchScan
     */
    omit?: DispatchScanOmit<ExtArgs> | null
    /**
     * Filter which DispatchScan to delete.
     */
    where: DispatchScanWhereUniqueInput
  }

  /**
   * DispatchScan deleteMany
   */
  export type DispatchScanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DispatchScans to delete
     */
    where?: DispatchScanWhereInput
    /**
     * Limit how many DispatchScans to delete.
     */
    limit?: number
  }

  /**
   * DispatchScan without action
   */
  export type DispatchScanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DispatchScan
     */
    select?: DispatchScanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DispatchScan
     */
    omit?: DispatchScanOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    employeeCode: 'employeeCode',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShippingMetadataScalarFieldEnum: {
    id: 'id',
    shippingID: 'shippingID',
    city: 'city'
  };

  export type ShippingMetadataScalarFieldEnum = (typeof ShippingMetadataScalarFieldEnum)[keyof typeof ShippingMetadataScalarFieldEnum]


  export const PackingScanScalarFieldEnum: {
    id: 'id',
    scanId: 'scanId',
    stationId: 'stationId',
    nexsId: 'nexsId',
    timestamp: 'timestamp'
  };

  export type PackingScanScalarFieldEnum = (typeof PackingScanScalarFieldEnum)[keyof typeof PackingScanScalarFieldEnum]


  export const DispatchScanScalarFieldEnum: {
    id: 'id',
    scanId: 'scanId',
    stationId: 'stationId',
    nexsId: 'nexsId',
    timestamp: 'timestamp'
  };

  export type DispatchScanScalarFieldEnum = (typeof DispatchScanScalarFieldEnum)[keyof typeof DispatchScanScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UserOrderByRelevanceFieldEnum: {
    employeeCode: 'employeeCode',
    passwordHash: 'passwordHash'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ShippingMetadataOrderByRelevanceFieldEnum: {
    shippingID: 'shippingID',
    city: 'city'
  };

  export type ShippingMetadataOrderByRelevanceFieldEnum = (typeof ShippingMetadataOrderByRelevanceFieldEnum)[keyof typeof ShippingMetadataOrderByRelevanceFieldEnum]


  export const PackingScanOrderByRelevanceFieldEnum: {
    scanId: 'scanId',
    stationId: 'stationId',
    nexsId: 'nexsId'
  };

  export type PackingScanOrderByRelevanceFieldEnum = (typeof PackingScanOrderByRelevanceFieldEnum)[keyof typeof PackingScanOrderByRelevanceFieldEnum]


  export const DispatchScanOrderByRelevanceFieldEnum: {
    scanId: 'scanId',
    stationId: 'stationId',
    nexsId: 'nexsId'
  };

  export type DispatchScanOrderByRelevanceFieldEnum = (typeof DispatchScanOrderByRelevanceFieldEnum)[keyof typeof DispatchScanOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    employeeCode?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    employeeCode?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    employeeCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "employeeCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    employeeCode?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    employeeCode?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ShippingMetadataWhereInput = {
    AND?: ShippingMetadataWhereInput | ShippingMetadataWhereInput[]
    OR?: ShippingMetadataWhereInput[]
    NOT?: ShippingMetadataWhereInput | ShippingMetadataWhereInput[]
    id?: IntFilter<"ShippingMetadata"> | number
    shippingID?: StringFilter<"ShippingMetadata"> | string
    city?: StringFilter<"ShippingMetadata"> | string
  }

  export type ShippingMetadataOrderByWithRelationInput = {
    id?: SortOrder
    shippingID?: SortOrder
    city?: SortOrder
    _relevance?: ShippingMetadataOrderByRelevanceInput
  }

  export type ShippingMetadataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    shippingID?: string
    AND?: ShippingMetadataWhereInput | ShippingMetadataWhereInput[]
    OR?: ShippingMetadataWhereInput[]
    NOT?: ShippingMetadataWhereInput | ShippingMetadataWhereInput[]
    city?: StringFilter<"ShippingMetadata"> | string
  }, "id" | "shippingID">

  export type ShippingMetadataOrderByWithAggregationInput = {
    id?: SortOrder
    shippingID?: SortOrder
    city?: SortOrder
    _count?: ShippingMetadataCountOrderByAggregateInput
    _avg?: ShippingMetadataAvgOrderByAggregateInput
    _max?: ShippingMetadataMaxOrderByAggregateInput
    _min?: ShippingMetadataMinOrderByAggregateInput
    _sum?: ShippingMetadataSumOrderByAggregateInput
  }

  export type ShippingMetadataScalarWhereWithAggregatesInput = {
    AND?: ShippingMetadataScalarWhereWithAggregatesInput | ShippingMetadataScalarWhereWithAggregatesInput[]
    OR?: ShippingMetadataScalarWhereWithAggregatesInput[]
    NOT?: ShippingMetadataScalarWhereWithAggregatesInput | ShippingMetadataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ShippingMetadata"> | number
    shippingID?: StringWithAggregatesFilter<"ShippingMetadata"> | string
    city?: StringWithAggregatesFilter<"ShippingMetadata"> | string
  }

  export type PackingScanWhereInput = {
    AND?: PackingScanWhereInput | PackingScanWhereInput[]
    OR?: PackingScanWhereInput[]
    NOT?: PackingScanWhereInput | PackingScanWhereInput[]
    id?: IntFilter<"PackingScan"> | number
    scanId?: StringFilter<"PackingScan"> | string
    stationId?: StringFilter<"PackingScan"> | string
    nexsId?: StringFilter<"PackingScan"> | string
    timestamp?: DateTimeFilter<"PackingScan"> | Date | string
  }

  export type PackingScanOrderByWithRelationInput = {
    id?: SortOrder
    scanId?: SortOrder
    stationId?: SortOrder
    nexsId?: SortOrder
    timestamp?: SortOrder
    _relevance?: PackingScanOrderByRelevanceInput
  }

  export type PackingScanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PackingScanWhereInput | PackingScanWhereInput[]
    OR?: PackingScanWhereInput[]
    NOT?: PackingScanWhereInput | PackingScanWhereInput[]
    scanId?: StringFilter<"PackingScan"> | string
    stationId?: StringFilter<"PackingScan"> | string
    nexsId?: StringFilter<"PackingScan"> | string
    timestamp?: DateTimeFilter<"PackingScan"> | Date | string
  }, "id">

  export type PackingScanOrderByWithAggregationInput = {
    id?: SortOrder
    scanId?: SortOrder
    stationId?: SortOrder
    nexsId?: SortOrder
    timestamp?: SortOrder
    _count?: PackingScanCountOrderByAggregateInput
    _avg?: PackingScanAvgOrderByAggregateInput
    _max?: PackingScanMaxOrderByAggregateInput
    _min?: PackingScanMinOrderByAggregateInput
    _sum?: PackingScanSumOrderByAggregateInput
  }

  export type PackingScanScalarWhereWithAggregatesInput = {
    AND?: PackingScanScalarWhereWithAggregatesInput | PackingScanScalarWhereWithAggregatesInput[]
    OR?: PackingScanScalarWhereWithAggregatesInput[]
    NOT?: PackingScanScalarWhereWithAggregatesInput | PackingScanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PackingScan"> | number
    scanId?: StringWithAggregatesFilter<"PackingScan"> | string
    stationId?: StringWithAggregatesFilter<"PackingScan"> | string
    nexsId?: StringWithAggregatesFilter<"PackingScan"> | string
    timestamp?: DateTimeWithAggregatesFilter<"PackingScan"> | Date | string
  }

  export type DispatchScanWhereInput = {
    AND?: DispatchScanWhereInput | DispatchScanWhereInput[]
    OR?: DispatchScanWhereInput[]
    NOT?: DispatchScanWhereInput | DispatchScanWhereInput[]
    id?: IntFilter<"DispatchScan"> | number
    scanId?: StringFilter<"DispatchScan"> | string
    stationId?: StringFilter<"DispatchScan"> | string
    nexsId?: StringFilter<"DispatchScan"> | string
    timestamp?: DateTimeFilter<"DispatchScan"> | Date | string
  }

  export type DispatchScanOrderByWithRelationInput = {
    id?: SortOrder
    scanId?: SortOrder
    stationId?: SortOrder
    nexsId?: SortOrder
    timestamp?: SortOrder
    _relevance?: DispatchScanOrderByRelevanceInput
  }

  export type DispatchScanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DispatchScanWhereInput | DispatchScanWhereInput[]
    OR?: DispatchScanWhereInput[]
    NOT?: DispatchScanWhereInput | DispatchScanWhereInput[]
    scanId?: StringFilter<"DispatchScan"> | string
    stationId?: StringFilter<"DispatchScan"> | string
    nexsId?: StringFilter<"DispatchScan"> | string
    timestamp?: DateTimeFilter<"DispatchScan"> | Date | string
  }, "id">

  export type DispatchScanOrderByWithAggregationInput = {
    id?: SortOrder
    scanId?: SortOrder
    stationId?: SortOrder
    nexsId?: SortOrder
    timestamp?: SortOrder
    _count?: DispatchScanCountOrderByAggregateInput
    _avg?: DispatchScanAvgOrderByAggregateInput
    _max?: DispatchScanMaxOrderByAggregateInput
    _min?: DispatchScanMinOrderByAggregateInput
    _sum?: DispatchScanSumOrderByAggregateInput
  }

  export type DispatchScanScalarWhereWithAggregatesInput = {
    AND?: DispatchScanScalarWhereWithAggregatesInput | DispatchScanScalarWhereWithAggregatesInput[]
    OR?: DispatchScanScalarWhereWithAggregatesInput[]
    NOT?: DispatchScanScalarWhereWithAggregatesInput | DispatchScanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DispatchScan"> | number
    scanId?: StringWithAggregatesFilter<"DispatchScan"> | string
    stationId?: StringWithAggregatesFilter<"DispatchScan"> | string
    nexsId?: StringWithAggregatesFilter<"DispatchScan"> | string
    timestamp?: DateTimeWithAggregatesFilter<"DispatchScan"> | Date | string
  }

  export type UserCreateInput = {
    employeeCode: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    employeeCode: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    employeeCode?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeCode?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    employeeCode: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    employeeCode?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeeCode?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShippingMetadataCreateInput = {
    shippingID: string
    city: string
  }

  export type ShippingMetadataUncheckedCreateInput = {
    id?: number
    shippingID: string
    city: string
  }

  export type ShippingMetadataUpdateInput = {
    shippingID?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type ShippingMetadataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    shippingID?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type ShippingMetadataCreateManyInput = {
    id?: number
    shippingID: string
    city: string
  }

  export type ShippingMetadataUpdateManyMutationInput = {
    shippingID?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type ShippingMetadataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    shippingID?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type PackingScanCreateInput = {
    scanId: string
    stationId: string
    nexsId: string
    timestamp?: Date | string
  }

  export type PackingScanUncheckedCreateInput = {
    id?: number
    scanId: string
    stationId: string
    nexsId: string
    timestamp?: Date | string
  }

  export type PackingScanUpdateInput = {
    scanId?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    nexsId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackingScanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scanId?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    nexsId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackingScanCreateManyInput = {
    id?: number
    scanId: string
    stationId: string
    nexsId: string
    timestamp?: Date | string
  }

  export type PackingScanUpdateManyMutationInput = {
    scanId?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    nexsId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackingScanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scanId?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    nexsId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispatchScanCreateInput = {
    scanId: string
    stationId: string
    nexsId: string
    timestamp?: Date | string
  }

  export type DispatchScanUncheckedCreateInput = {
    id?: number
    scanId: string
    stationId: string
    nexsId: string
    timestamp?: Date | string
  }

  export type DispatchScanUpdateInput = {
    scanId?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    nexsId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispatchScanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scanId?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    nexsId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispatchScanCreateManyInput = {
    id?: number
    scanId: string
    stationId: string
    nexsId: string
    timestamp?: Date | string
  }

  export type DispatchScanUpdateManyMutationInput = {
    scanId?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    nexsId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DispatchScanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scanId?: StringFieldUpdateOperationsInput | string
    stationId?: StringFieldUpdateOperationsInput | string
    nexsId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    employeeCode?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeCode?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    employeeCode?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ShippingMetadataOrderByRelevanceInput = {
    fields: ShippingMetadataOrderByRelevanceFieldEnum | ShippingMetadataOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ShippingMetadataCountOrderByAggregateInput = {
    id?: SortOrder
    shippingID?: SortOrder
    city?: SortOrder
  }

  export type ShippingMetadataAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ShippingMetadataMaxOrderByAggregateInput = {
    id?: SortOrder
    shippingID?: SortOrder
    city?: SortOrder
  }

  export type ShippingMetadataMinOrderByAggregateInput = {
    id?: SortOrder
    shippingID?: SortOrder
    city?: SortOrder
  }

  export type ShippingMetadataSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PackingScanOrderByRelevanceInput = {
    fields: PackingScanOrderByRelevanceFieldEnum | PackingScanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PackingScanCountOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    stationId?: SortOrder
    nexsId?: SortOrder
    timestamp?: SortOrder
  }

  export type PackingScanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PackingScanMaxOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    stationId?: SortOrder
    nexsId?: SortOrder
    timestamp?: SortOrder
  }

  export type PackingScanMinOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    stationId?: SortOrder
    nexsId?: SortOrder
    timestamp?: SortOrder
  }

  export type PackingScanSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DispatchScanOrderByRelevanceInput = {
    fields: DispatchScanOrderByRelevanceFieldEnum | DispatchScanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DispatchScanCountOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    stationId?: SortOrder
    nexsId?: SortOrder
    timestamp?: SortOrder
  }

  export type DispatchScanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DispatchScanMaxOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    stationId?: SortOrder
    nexsId?: SortOrder
    timestamp?: SortOrder
  }

  export type DispatchScanMinOrderByAggregateInput = {
    id?: SortOrder
    scanId?: SortOrder
    stationId?: SortOrder
    nexsId?: SortOrder
    timestamp?: SortOrder
  }

  export type DispatchScanSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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