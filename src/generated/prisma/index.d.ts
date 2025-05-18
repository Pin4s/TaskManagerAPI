
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Teams
 * 
 */
export type Teams = $Result.DefaultSelection<Prisma.$TeamsPayload>
/**
 * Model TeamMembers
 * 
 */
export type TeamMembers = $Result.DefaultSelection<Prisma.$TeamMembersPayload>
/**
 * Model Tasks
 * 
 */
export type Tasks = $Result.DefaultSelection<Prisma.$TasksPayload>
/**
 * Model TasksHistory
 * 
 */
export type TasksHistory = $Result.DefaultSelection<Prisma.$TasksHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Priority: {
  high: 'high',
  medium: 'medium',
  low: 'low'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const Status: {
  pending: 'pending',
  inProgress: 'inProgress',
  completed: 'completed'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Role: {
  admin: 'admin',
  member: 'member'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teams`: Exposes CRUD operations for the **Teams** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.teams.findMany()
    * ```
    */
  get teams(): Prisma.TeamsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMembers`: Exposes CRUD operations for the **TeamMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMembers.findMany()
    * ```
    */
  get teamMembers(): Prisma.TeamMembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasks`: Exposes CRUD operations for the **Tasks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.tasks.findMany()
    * ```
    */
  get tasks(): Prisma.TasksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tasksHistory`: Exposes CRUD operations for the **TasksHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TasksHistories
    * const tasksHistories = await prisma.tasksHistory.findMany()
    * ```
    */
  get tasksHistory(): Prisma.TasksHistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    Users: 'Users',
    Teams: 'Teams',
    TeamMembers: 'TeamMembers',
    Tasks: 'Tasks',
    TasksHistory: 'TasksHistory'
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
      modelProps: "users" | "teams" | "teamMembers" | "tasks" | "tasksHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Teams: {
        payload: Prisma.$TeamsPayload<ExtArgs>
        fields: Prisma.TeamsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          findFirst: {
            args: Prisma.TeamsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          findMany: {
            args: Prisma.TeamsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          create: {
            args: Prisma.TeamsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          createMany: {
            args: Prisma.TeamsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          delete: {
            args: Prisma.TeamsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          update: {
            args: Prisma.TeamsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          deleteMany: {
            args: Prisma.TeamsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>[]
          }
          upsert: {
            args: Prisma.TeamsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamsPayload>
          }
          aggregate: {
            args: Prisma.TeamsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeams>
          }
          groupBy: {
            args: Prisma.TeamsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamsCountAggregateOutputType> | number
          }
        }
      }
      TeamMembers: {
        payload: Prisma.$TeamMembersPayload<ExtArgs>
        fields: Prisma.TeamMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>
          }
          findFirst: {
            args: Prisma.TeamMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>
          }
          findMany: {
            args: Prisma.TeamMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>[]
          }
          create: {
            args: Prisma.TeamMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>
          }
          createMany: {
            args: Prisma.TeamMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMembersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>[]
          }
          delete: {
            args: Prisma.TeamMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>
          }
          update: {
            args: Prisma.TeamMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>
          }
          deleteMany: {
            args: Prisma.TeamMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMembersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>[]
          }
          upsert: {
            args: Prisma.TeamMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMembersPayload>
          }
          aggregate: {
            args: Prisma.TeamMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMembers>
          }
          groupBy: {
            args: Prisma.TeamMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMembersCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMembersCountAggregateOutputType> | number
          }
        }
      }
      Tasks: {
        payload: Prisma.$TasksPayload<ExtArgs>
        fields: Prisma.TasksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TasksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TasksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          findFirst: {
            args: Prisma.TasksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TasksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          findMany: {
            args: Prisma.TasksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          create: {
            args: Prisma.TasksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          createMany: {
            args: Prisma.TasksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TasksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          delete: {
            args: Prisma.TasksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          update: {
            args: Prisma.TasksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          deleteMany: {
            args: Prisma.TasksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TasksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TasksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>[]
          }
          upsert: {
            args: Prisma.TasksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksPayload>
          }
          aggregate: {
            args: Prisma.TasksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasks>
          }
          groupBy: {
            args: Prisma.TasksGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksGroupByOutputType>[]
          }
          count: {
            args: Prisma.TasksCountArgs<ExtArgs>
            result: $Utils.Optional<TasksCountAggregateOutputType> | number
          }
        }
      }
      TasksHistory: {
        payload: Prisma.$TasksHistoryPayload<ExtArgs>
        fields: Prisma.TasksHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TasksHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TasksHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksHistoryPayload>
          }
          findFirst: {
            args: Prisma.TasksHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TasksHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksHistoryPayload>
          }
          findMany: {
            args: Prisma.TasksHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksHistoryPayload>[]
          }
          create: {
            args: Prisma.TasksHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksHistoryPayload>
          }
          createMany: {
            args: Prisma.TasksHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TasksHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksHistoryPayload>[]
          }
          delete: {
            args: Prisma.TasksHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksHistoryPayload>
          }
          update: {
            args: Prisma.TasksHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TasksHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TasksHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TasksHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TasksHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TasksHistoryPayload>
          }
          aggregate: {
            args: Prisma.TasksHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTasksHistory>
          }
          groupBy: {
            args: Prisma.TasksHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TasksHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TasksHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TasksHistoryCountAggregateOutputType> | number
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
    users?: UsersOmit
    teams?: TeamsOmit
    teamMembers?: TeamMembersOmit
    tasks?: TasksOmit
    tasksHistory?: TasksHistoryOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    historyTask: number
    teamMembers: number
    assignedTo: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historyTask?: boolean | UsersCountOutputTypeCountHistoryTaskArgs
    teamMembers?: boolean | UsersCountOutputTypeCountTeamMembersArgs
    assignedTo?: boolean | UsersCountOutputTypeCountAssignedToArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountHistoryTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksHistoryWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTeamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMembersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAssignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
  }


  /**
   * Count Type TeamsCountOutputType
   */

  export type TeamsCountOutputType = {
    members: number
    tasks: number
  }

  export type TeamsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamsCountOutputTypeCountMembersArgs
    tasks?: boolean | TeamsCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamsCountOutputType
     */
    select?: TeamsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMembersWhereInput
  }

  /**
   * TeamsCountOutputType without action
   */
  export type TeamsCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
  }


  /**
   * Count Type TasksCountOutputType
   */

  export type TasksCountOutputType = {
    TasksHistory: number
  }

  export type TasksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TasksHistory?: boolean | TasksCountOutputTypeCountTasksHistoryArgs
  }

  // Custom InputTypes
  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksCountOutputType
     */
    select?: TasksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TasksCountOutputType without action
   */
  export type TasksCountOutputTypeCountTasksHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    historyTask?: boolean | Users$historyTaskArgs<ExtArgs>
    teamMembers?: boolean | Users$teamMembersArgs<ExtArgs>
    assignedTo?: boolean | Users$assignedToArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    historyTask?: boolean | Users$historyTaskArgs<ExtArgs>
    teamMembers?: boolean | Users$teamMembersArgs<ExtArgs>
    assignedTo?: boolean | Users$assignedToArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      historyTask: Prisma.$TasksHistoryPayload<ExtArgs>[]
      teamMembers: Prisma.$TeamMembersPayload<ExtArgs>[]
      assignedTo: Prisma.$TasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    historyTask<T extends Users$historyTaskArgs<ExtArgs> = {}>(args?: Subset<T, Users$historyTaskArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamMembers<T extends Users$teamMembersArgs<ExtArgs> = {}>(args?: Subset<T, Users$teamMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedTo<T extends Users$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Users$assignedToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.historyTask
   */
  export type Users$historyTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryInclude<ExtArgs> | null
    where?: TasksHistoryWhereInput
    orderBy?: TasksHistoryOrderByWithRelationInput | TasksHistoryOrderByWithRelationInput[]
    cursor?: TasksHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksHistoryScalarFieldEnum | TasksHistoryScalarFieldEnum[]
  }

  /**
   * Users.teamMembers
   */
  export type Users$teamMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    where?: TeamMembersWhereInput
    orderBy?: TeamMembersOrderByWithRelationInput | TeamMembersOrderByWithRelationInput[]
    cursor?: TeamMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }

  /**
   * Users.assignedTo
   */
  export type Users$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    cursor?: TasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Teams
   */

  export type AggregateTeams = {
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  export type TeamsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to aggregate.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamsMaxAggregateInputType
  }

  export type GetTeamsAggregateType<T extends TeamsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeams]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeams[P]>
      : GetScalarType<T[P], AggregateTeams[P]>
  }




  export type TeamsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamsWhereInput
    orderBy?: TeamsOrderByWithAggregationInput | TeamsOrderByWithAggregationInput[]
    by: TeamsScalarFieldEnum[] | TeamsScalarFieldEnum
    having?: TeamsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamsCountAggregateInputType | true
    _min?: TeamsMinAggregateInputType
    _max?: TeamsMaxAggregateInputType
  }

  export type TeamsGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: TeamsCountAggregateOutputType | null
    _min: TeamsMinAggregateOutputType | null
    _max: TeamsMaxAggregateOutputType | null
  }

  type GetTeamsGroupByPayload<T extends TeamsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamsGroupByOutputType[P]>
        }
      >
    >


  export type TeamsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    members?: boolean | Teams$membersArgs<ExtArgs>
    tasks?: boolean | Teams$tasksArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["teams"]>

  export type TeamsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["teams"]>
  export type TeamsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Teams$membersArgs<ExtArgs>
    tasks?: boolean | Teams$tasksArgs<ExtArgs>
    _count?: boolean | TeamsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TeamsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeamsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teams"
    objects: {
      members: Prisma.$TeamMembersPayload<ExtArgs>[]
      tasks: Prisma.$TasksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teams"]>
    composites: {}
  }

  type TeamsGetPayload<S extends boolean | null | undefined | TeamsDefaultArgs> = $Result.GetResult<Prisma.$TeamsPayload, S>

  type TeamsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamsCountAggregateInputType | true
    }

  export interface TeamsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teams'], meta: { name: 'Teams' } }
    /**
     * Find zero or one Teams that matches the filter.
     * @param {TeamsFindUniqueArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamsFindUniqueArgs>(args: SelectSubset<T, TeamsFindUniqueArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Teams that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamsFindUniqueOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamsFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamsFindFirstArgs>(args?: SelectSubset<T, TeamsFindFirstArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Teams that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindFirstOrThrowArgs} args - Arguments to find a Teams
     * @example
     * // Get one Teams
     * const teams = await prisma.teams.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamsFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.teams.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.teams.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamsWithIdOnly = await prisma.teams.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamsFindManyArgs>(args?: SelectSubset<T, TeamsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Teams.
     * @param {TeamsCreateArgs} args - Arguments to create a Teams.
     * @example
     * // Create one Teams
     * const Teams = await prisma.teams.create({
     *   data: {
     *     // ... data to create a Teams
     *   }
     * })
     * 
     */
    create<T extends TeamsCreateArgs>(args: SelectSubset<T, TeamsCreateArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamsCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamsCreateManyArgs>(args?: SelectSubset<T, TeamsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamsCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const teams = await prisma.teams.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamsCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Teams.
     * @param {TeamsDeleteArgs} args - Arguments to delete one Teams.
     * @example
     * // Delete one Teams
     * const Teams = await prisma.teams.delete({
     *   where: {
     *     // ... filter to delete one Teams
     *   }
     * })
     * 
     */
    delete<T extends TeamsDeleteArgs>(args: SelectSubset<T, TeamsDeleteArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Teams.
     * @param {TeamsUpdateArgs} args - Arguments to update one Teams.
     * @example
     * // Update one Teams
     * const teams = await prisma.teams.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamsUpdateArgs>(args: SelectSubset<T, TeamsUpdateArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamsDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.teams.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamsDeleteManyArgs>(args?: SelectSubset<T, TeamsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamsUpdateManyArgs>(args: SelectSubset<T, TeamsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamsUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const teams = await prisma.teams.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamsWithIdOnly = await prisma.teams.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamsUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Teams.
     * @param {TeamsUpsertArgs} args - Arguments to update or create a Teams.
     * @example
     * // Update or create a Teams
     * const teams = await prisma.teams.upsert({
     *   create: {
     *     // ... data to create a Teams
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teams we want to update
     *   }
     * })
     */
    upsert<T extends TeamsUpsertArgs>(args: SelectSubset<T, TeamsUpsertArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.teams.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamsCountArgs>(
      args?: Subset<T, TeamsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamsAggregateArgs>(args: Subset<T, TeamsAggregateArgs>): Prisma.PrismaPromise<GetTeamsAggregateType<T>>

    /**
     * Group by Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamsGroupByArgs} args - Group by arguments.
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
      T extends TeamsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamsGroupByArgs['orderBy'] }
        : { orderBy?: TeamsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teams model
   */
  readonly fields: TeamsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teams.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Teams$membersArgs<ExtArgs> = {}>(args?: Subset<T, Teams$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Teams$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Teams$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Teams model
   */
  interface TeamsFieldRefs {
    readonly id: FieldRef<"Teams", 'String'>
    readonly name: FieldRef<"Teams", 'String'>
    readonly description: FieldRef<"Teams", 'String'>
    readonly createdAt: FieldRef<"Teams", 'DateTime'>
    readonly updatedAt: FieldRef<"Teams", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teams findUnique
   */
  export type TeamsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findUniqueOrThrow
   */
  export type TeamsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams findFirst
   */
  export type TeamsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams findFirstOrThrow
   */
  export type TeamsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams findMany
   */
  export type TeamsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamsOrderByWithRelationInput | TeamsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamsScalarFieldEnum | TeamsScalarFieldEnum[]
  }

  /**
   * Teams create
   */
  export type TeamsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The data needed to create a Teams.
     */
    data: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
  }

  /**
   * Teams createMany
   */
  export type TeamsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamsCreateManyInput | TeamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teams createManyAndReturn
   */
  export type TeamsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamsCreateManyInput | TeamsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teams update
   */
  export type TeamsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The data needed to update a Teams.
     */
    data: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
    /**
     * Choose, which Teams to update.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams updateMany
   */
  export type TeamsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamsWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Teams updateManyAndReturn
   */
  export type TeamsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamsUpdateManyMutationInput, TeamsUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamsWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Teams upsert
   */
  export type TeamsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * The filter to search for the Teams to update in case it exists.
     */
    where: TeamsWhereUniqueInput
    /**
     * In case the Teams found by the `where` argument doesn't exist, create a new Teams with this data.
     */
    create: XOR<TeamsCreateInput, TeamsUncheckedCreateInput>
    /**
     * In case the Teams was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamsUpdateInput, TeamsUncheckedUpdateInput>
  }

  /**
   * Teams delete
   */
  export type TeamsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
    /**
     * Filter which Teams to delete.
     */
    where: TeamsWhereUniqueInput
  }

  /**
   * Teams deleteMany
   */
  export type TeamsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamsWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Teams.members
   */
  export type Teams$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    where?: TeamMembersWhereInput
    orderBy?: TeamMembersOrderByWithRelationInput | TeamMembersOrderByWithRelationInput[]
    cursor?: TeamMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }

  /**
   * Teams.tasks
   */
  export type Teams$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    cursor?: TasksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Teams without action
   */
  export type TeamsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teams
     */
    select?: TeamsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Teams
     */
    omit?: TeamsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamsInclude<ExtArgs> | null
  }


  /**
   * Model TeamMembers
   */

  export type AggregateTeamMembers = {
    _count: TeamMembersCountAggregateOutputType | null
    _min: TeamMembersMinAggregateOutputType | null
    _max: TeamMembersMaxAggregateOutputType | null
  }

  export type TeamMembersMinAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    createdAt: Date | null
  }

  export type TeamMembersMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    createdAt: Date | null
  }

  export type TeamMembersCountAggregateOutputType = {
    id: number
    userId: number
    teamId: number
    createdAt: number
    _all: number
  }


  export type TeamMembersMinAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    createdAt?: true
  }

  export type TeamMembersMaxAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    createdAt?: true
  }

  export type TeamMembersCountAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    createdAt?: true
    _all?: true
  }

  export type TeamMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to aggregate.
     */
    where?: TeamMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMembersOrderByWithRelationInput | TeamMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMembersMaxAggregateInputType
  }

  export type GetTeamMembersAggregateType<T extends TeamMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMembers[P]>
      : GetScalarType<T[P], AggregateTeamMembers[P]>
  }




  export type TeamMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMembersWhereInput
    orderBy?: TeamMembersOrderByWithAggregationInput | TeamMembersOrderByWithAggregationInput[]
    by: TeamMembersScalarFieldEnum[] | TeamMembersScalarFieldEnum
    having?: TeamMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMembersCountAggregateInputType | true
    _min?: TeamMembersMinAggregateInputType
    _max?: TeamMembersMaxAggregateInputType
  }

  export type TeamMembersGroupByOutputType = {
    id: string
    userId: string
    teamId: string
    createdAt: Date
    _count: TeamMembersCountAggregateOutputType | null
    _min: TeamMembersMinAggregateOutputType | null
    _max: TeamMembersMaxAggregateOutputType | null
  }

  type GetTeamMembersGroupByPayload<T extends TeamMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMembersGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMembersGroupByOutputType[P]>
        }
      >
    >


  export type TeamMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMembers"]>

  export type TeamMembersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMembers"]>

  export type TeamMembersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMembers"]>

  export type TeamMembersSelectScalar = {
    id?: boolean
    userId?: boolean
    teamId?: boolean
    createdAt?: boolean
  }

  export type TeamMembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "teamId" | "createdAt", ExtArgs["result"]["teamMembers"]>
  export type TeamMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type TeamMembersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type TeamMembersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }

  export type $TeamMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMembers"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      team: Prisma.$TeamsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      teamId: string
      createdAt: Date
    }, ExtArgs["result"]["teamMembers"]>
    composites: {}
  }

  type TeamMembersGetPayload<S extends boolean | null | undefined | TeamMembersDefaultArgs> = $Result.GetResult<Prisma.$TeamMembersPayload, S>

  type TeamMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMembersCountAggregateInputType | true
    }

  export interface TeamMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMembers'], meta: { name: 'TeamMembers' } }
    /**
     * Find zero or one TeamMembers that matches the filter.
     * @param {TeamMembersFindUniqueArgs} args - Arguments to find a TeamMembers
     * @example
     * // Get one TeamMembers
     * const teamMembers = await prisma.teamMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMembersFindUniqueArgs>(args: SelectSubset<T, TeamMembersFindUniqueArgs<ExtArgs>>): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMembersFindUniqueOrThrowArgs} args - Arguments to find a TeamMembers
     * @example
     * // Get one TeamMembers
     * const teamMembers = await prisma.teamMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersFindFirstArgs} args - Arguments to find a TeamMembers
     * @example
     * // Get one TeamMembers
     * const teamMembers = await prisma.teamMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMembersFindFirstArgs>(args?: SelectSubset<T, TeamMembersFindFirstArgs<ExtArgs>>): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersFindFirstOrThrowArgs} args - Arguments to find a TeamMembers
     * @example
     * // Get one TeamMembers
     * const teamMembers = await prisma.teamMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMembers.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMembersWithIdOnly = await prisma.teamMembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMembersFindManyArgs>(args?: SelectSubset<T, TeamMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMembers.
     * @param {TeamMembersCreateArgs} args - Arguments to create a TeamMembers.
     * @example
     * // Create one TeamMembers
     * const TeamMembers = await prisma.teamMembers.create({
     *   data: {
     *     // ... data to create a TeamMembers
     *   }
     * })
     * 
     */
    create<T extends TeamMembersCreateArgs>(args: SelectSubset<T, TeamMembersCreateArgs<ExtArgs>>): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMembersCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMembers = await prisma.teamMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMembersCreateManyArgs>(args?: SelectSubset<T, TeamMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMembersCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMembers = await prisma.teamMembers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMembersWithIdOnly = await prisma.teamMembers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMembersCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMembersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamMembers.
     * @param {TeamMembersDeleteArgs} args - Arguments to delete one TeamMembers.
     * @example
     * // Delete one TeamMembers
     * const TeamMembers = await prisma.teamMembers.delete({
     *   where: {
     *     // ... filter to delete one TeamMembers
     *   }
     * })
     * 
     */
    delete<T extends TeamMembersDeleteArgs>(args: SelectSubset<T, TeamMembersDeleteArgs<ExtArgs>>): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMembers.
     * @param {TeamMembersUpdateArgs} args - Arguments to update one TeamMembers.
     * @example
     * // Update one TeamMembers
     * const teamMembers = await prisma.teamMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMembersUpdateArgs>(args: SelectSubset<T, TeamMembersUpdateArgs<ExtArgs>>): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMembersDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMembersDeleteManyArgs>(args?: SelectSubset<T, TeamMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMembers = await prisma.teamMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMembersUpdateManyArgs>(args: SelectSubset<T, TeamMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMembersUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMembers = await prisma.teamMembers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMembersWithIdOnly = await prisma.teamMembers.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamMembersUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMembersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamMembers.
     * @param {TeamMembersUpsertArgs} args - Arguments to update or create a TeamMembers.
     * @example
     * // Update or create a TeamMembers
     * const teamMembers = await prisma.teamMembers.upsert({
     *   create: {
     *     // ... data to create a TeamMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMembers we want to update
     *   }
     * })
     */
    upsert<T extends TeamMembersUpsertArgs>(args: SelectSubset<T, TeamMembersUpsertArgs<ExtArgs>>): Prisma__TeamMembersClient<$Result.GetResult<Prisma.$TeamMembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMembers.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMembersCountArgs>(
      args?: Subset<T, TeamMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamMembersAggregateArgs>(args: Subset<T, TeamMembersAggregateArgs>): Prisma.PrismaPromise<GetTeamMembersAggregateType<T>>

    /**
     * Group by TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMembersGroupByArgs} args - Group by arguments.
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
      T extends TeamMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMembersGroupByArgs['orderBy'] }
        : { orderBy?: TeamMembersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMembers model
   */
  readonly fields: TeamMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamMembers model
   */
  interface TeamMembersFieldRefs {
    readonly id: FieldRef<"TeamMembers", 'String'>
    readonly userId: FieldRef<"TeamMembers", 'String'>
    readonly teamId: FieldRef<"TeamMembers", 'String'>
    readonly createdAt: FieldRef<"TeamMembers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMembers findUnique
   */
  export type TeamMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where: TeamMembersWhereUniqueInput
  }

  /**
   * TeamMembers findUniqueOrThrow
   */
  export type TeamMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where: TeamMembersWhereUniqueInput
  }

  /**
   * TeamMembers findFirst
   */
  export type TeamMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMembersOrderByWithRelationInput | TeamMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }

  /**
   * TeamMembers findFirstOrThrow
   */
  export type TeamMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMembersOrderByWithRelationInput | TeamMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }

  /**
   * TeamMembers findMany
   */
  export type TeamMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMembersOrderByWithRelationInput | TeamMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMembersScalarFieldEnum | TeamMembersScalarFieldEnum[]
  }

  /**
   * TeamMembers create
   */
  export type TeamMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMembers.
     */
    data: XOR<TeamMembersCreateInput, TeamMembersUncheckedCreateInput>
  }

  /**
   * TeamMembers createMany
   */
  export type TeamMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMembersCreateManyInput | TeamMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMembers createManyAndReturn
   */
  export type TeamMembersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMembersCreateManyInput | TeamMembersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMembers update
   */
  export type TeamMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMembers.
     */
    data: XOR<TeamMembersUpdateInput, TeamMembersUncheckedUpdateInput>
    /**
     * Choose, which TeamMembers to update.
     */
    where: TeamMembersWhereUniqueInput
  }

  /**
   * TeamMembers updateMany
   */
  export type TeamMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMembersUpdateManyMutationInput, TeamMembersUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMembersWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMembers updateManyAndReturn
   */
  export type TeamMembersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMembersUpdateManyMutationInput, TeamMembersUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMembersWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMembers upsert
   */
  export type TeamMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMembers to update in case it exists.
     */
    where: TeamMembersWhereUniqueInput
    /**
     * In case the TeamMembers found by the `where` argument doesn't exist, create a new TeamMembers with this data.
     */
    create: XOR<TeamMembersCreateInput, TeamMembersUncheckedCreateInput>
    /**
     * In case the TeamMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMembersUpdateInput, TeamMembersUncheckedUpdateInput>
  }

  /**
   * TeamMembers delete
   */
  export type TeamMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
    /**
     * Filter which TeamMembers to delete.
     */
    where: TeamMembersWhereUniqueInput
  }

  /**
   * TeamMembers deleteMany
   */
  export type TeamMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMembersWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
  }

  /**
   * TeamMembers without action
   */
  export type TeamMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMembers
     */
    select?: TeamMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMembers
     */
    omit?: TeamMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMembersInclude<ExtArgs> | null
  }


  /**
   * Model Tasks
   */

  export type AggregateTasks = {
    _count: TasksCountAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  export type TasksMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.Status | null
    priority: $Enums.Priority | null
    assignedTo: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TasksMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    status: $Enums.Status | null
    priority: $Enums.Priority | null
    assignedTo: string | null
    teamId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TasksCountAggregateOutputType = {
    id: number
    title: number
    description: number
    status: number
    priority: number
    assignedTo: number
    teamId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TasksMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assignedTo?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TasksMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assignedTo?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TasksCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    assignedTo?: true
    teamId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TasksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to aggregate.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TasksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksMaxAggregateInputType
  }

  export type GetTasksAggregateType<T extends TasksAggregateArgs> = {
        [P in keyof T & keyof AggregateTasks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasks[P]>
      : GetScalarType<T[P], AggregateTasks[P]>
  }




  export type TasksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksWhereInput
    orderBy?: TasksOrderByWithAggregationInput | TasksOrderByWithAggregationInput[]
    by: TasksScalarFieldEnum[] | TasksScalarFieldEnum
    having?: TasksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksCountAggregateInputType | true
    _min?: TasksMinAggregateInputType
    _max?: TasksMaxAggregateInputType
  }

  export type TasksGroupByOutputType = {
    id: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    assignedTo: string
    teamId: string
    createdAt: Date
    updatedAt: Date
    _count: TasksCountAggregateOutputType | null
    _min: TasksMinAggregateOutputType | null
    _max: TasksMaxAggregateOutputType | null
  }

  type GetTasksGroupByPayload<T extends TasksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksGroupByOutputType[P]>
            : GetScalarType<T[P], TasksGroupByOutputType[P]>
        }
      >
    >


  export type TasksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assignedTo?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigned?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    TasksHistory?: boolean | Tasks$TasksHistoryArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assignedTo?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigned?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assignedTo?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assigned?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasks"]>

  export type TasksSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assignedTo?: boolean
    teamId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TasksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "status" | "priority" | "assignedTo" | "teamId" | "createdAt" | "updatedAt", ExtArgs["result"]["tasks"]>
  export type TasksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
    TasksHistory?: boolean | Tasks$TasksHistoryArgs<ExtArgs>
    _count?: boolean | TasksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TasksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }
  export type TasksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigned?: boolean | UsersDefaultArgs<ExtArgs>
    team?: boolean | TeamsDefaultArgs<ExtArgs>
  }

  export type $TasksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tasks"
    objects: {
      assigned: Prisma.$UsersPayload<ExtArgs>
      team: Prisma.$TeamsPayload<ExtArgs>
      TasksHistory: Prisma.$TasksHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      status: $Enums.Status
      priority: $Enums.Priority
      assignedTo: string
      teamId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["tasks"]>
    composites: {}
  }

  type TasksGetPayload<S extends boolean | null | undefined | TasksDefaultArgs> = $Result.GetResult<Prisma.$TasksPayload, S>

  type TasksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TasksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksCountAggregateInputType | true
    }

  export interface TasksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tasks'], meta: { name: 'Tasks' } }
    /**
     * Find zero or one Tasks that matches the filter.
     * @param {TasksFindUniqueArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TasksFindUniqueArgs>(args: SelectSubset<T, TasksFindUniqueArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tasks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TasksFindUniqueOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TasksFindUniqueOrThrowArgs>(args: SelectSubset<T, TasksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindFirstArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TasksFindFirstArgs>(args?: SelectSubset<T, TasksFindFirstArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tasks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindFirstOrThrowArgs} args - Arguments to find a Tasks
     * @example
     * // Get one Tasks
     * const tasks = await prisma.tasks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TasksFindFirstOrThrowArgs>(args?: SelectSubset<T, TasksFindFirstOrThrowArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.tasks.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.tasks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksWithIdOnly = await prisma.tasks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TasksFindManyArgs>(args?: SelectSubset<T, TasksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tasks.
     * @param {TasksCreateArgs} args - Arguments to create a Tasks.
     * @example
     * // Create one Tasks
     * const Tasks = await prisma.tasks.create({
     *   data: {
     *     // ... data to create a Tasks
     *   }
     * })
     * 
     */
    create<T extends TasksCreateArgs>(args: SelectSubset<T, TasksCreateArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TasksCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TasksCreateManyArgs>(args?: SelectSubset<T, TasksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TasksCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const tasks = await prisma.tasks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TasksCreateManyAndReturnArgs>(args?: SelectSubset<T, TasksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tasks.
     * @param {TasksDeleteArgs} args - Arguments to delete one Tasks.
     * @example
     * // Delete one Tasks
     * const Tasks = await prisma.tasks.delete({
     *   where: {
     *     // ... filter to delete one Tasks
     *   }
     * })
     * 
     */
    delete<T extends TasksDeleteArgs>(args: SelectSubset<T, TasksDeleteArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tasks.
     * @param {TasksUpdateArgs} args - Arguments to update one Tasks.
     * @example
     * // Update one Tasks
     * const tasks = await prisma.tasks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TasksUpdateArgs>(args: SelectSubset<T, TasksUpdateArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TasksDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.tasks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TasksDeleteManyArgs>(args?: SelectSubset<T, TasksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TasksUpdateManyArgs>(args: SelectSubset<T, TasksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TasksUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const tasks = await prisma.tasks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const tasksWithIdOnly = await prisma.tasks.updateManyAndReturn({
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
    updateManyAndReturn<T extends TasksUpdateManyAndReturnArgs>(args: SelectSubset<T, TasksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tasks.
     * @param {TasksUpsertArgs} args - Arguments to update or create a Tasks.
     * @example
     * // Update or create a Tasks
     * const tasks = await prisma.tasks.upsert({
     *   create: {
     *     // ... data to create a Tasks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tasks we want to update
     *   }
     * })
     */
    upsert<T extends TasksUpsertArgs>(args: SelectSubset<T, TasksUpsertArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.tasks.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TasksCountArgs>(
      args?: Subset<T, TasksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TasksAggregateArgs>(args: Subset<T, TasksAggregateArgs>): Prisma.PrismaPromise<GetTasksAggregateType<T>>

    /**
     * Group by Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksGroupByArgs} args - Group by arguments.
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
      T extends TasksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TasksGroupByArgs['orderBy'] }
        : { orderBy?: TasksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TasksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tasks model
   */
  readonly fields: TasksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tasks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TasksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assigned<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamsDefaultArgs<ExtArgs>>): Prisma__TeamsClient<$Result.GetResult<Prisma.$TeamsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    TasksHistory<T extends Tasks$TasksHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Tasks$TasksHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tasks model
   */
  interface TasksFieldRefs {
    readonly id: FieldRef<"Tasks", 'String'>
    readonly title: FieldRef<"Tasks", 'String'>
    readonly description: FieldRef<"Tasks", 'String'>
    readonly status: FieldRef<"Tasks", 'Status'>
    readonly priority: FieldRef<"Tasks", 'Priority'>
    readonly assignedTo: FieldRef<"Tasks", 'String'>
    readonly teamId: FieldRef<"Tasks", 'String'>
    readonly createdAt: FieldRef<"Tasks", 'DateTime'>
    readonly updatedAt: FieldRef<"Tasks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tasks findUnique
   */
  export type TasksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks findUniqueOrThrow
   */
  export type TasksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks findFirst
   */
  export type TasksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks findFirstOrThrow
   */
  export type TasksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks findMany
   */
  export type TasksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TasksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TasksOrderByWithRelationInput | TasksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TasksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TasksScalarFieldEnum | TasksScalarFieldEnum[]
  }

  /**
   * Tasks create
   */
  export type TasksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The data needed to create a Tasks.
     */
    data: XOR<TasksCreateInput, TasksUncheckedCreateInput>
  }

  /**
   * Tasks createMany
   */
  export type TasksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TasksCreateManyInput | TasksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tasks createManyAndReturn
   */
  export type TasksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TasksCreateManyInput | TasksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tasks update
   */
  export type TasksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The data needed to update a Tasks.
     */
    data: XOR<TasksUpdateInput, TasksUncheckedUpdateInput>
    /**
     * Choose, which Tasks to update.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks updateMany
   */
  export type TasksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Tasks updateManyAndReturn
   */
  export type TasksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tasks upsert
   */
  export type TasksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * The filter to search for the Tasks to update in case it exists.
     */
    where: TasksWhereUniqueInput
    /**
     * In case the Tasks found by the `where` argument doesn't exist, create a new Tasks with this data.
     */
    create: XOR<TasksCreateInput, TasksUncheckedCreateInput>
    /**
     * In case the Tasks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TasksUpdateInput, TasksUncheckedUpdateInput>
  }

  /**
   * Tasks delete
   */
  export type TasksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
    /**
     * Filter which Tasks to delete.
     */
    where: TasksWhereUniqueInput
  }

  /**
   * Tasks deleteMany
   */
  export type TasksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TasksWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Tasks.TasksHistory
   */
  export type Tasks$TasksHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryInclude<ExtArgs> | null
    where?: TasksHistoryWhereInput
    orderBy?: TasksHistoryOrderByWithRelationInput | TasksHistoryOrderByWithRelationInput[]
    cursor?: TasksHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TasksHistoryScalarFieldEnum | TasksHistoryScalarFieldEnum[]
  }

  /**
   * Tasks without action
   */
  export type TasksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tasks
     */
    select?: TasksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tasks
     */
    omit?: TasksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksInclude<ExtArgs> | null
  }


  /**
   * Model TasksHistory
   */

  export type AggregateTasksHistory = {
    _count: TasksHistoryCountAggregateOutputType | null
    _min: TasksHistoryMinAggregateOutputType | null
    _max: TasksHistoryMaxAggregateOutputType | null
  }

  export type TasksHistoryMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    changedBy: string | null
    oldStatus: $Enums.Status | null
    newStatus: $Enums.Status | null
  }

  export type TasksHistoryMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    changedBy: string | null
    oldStatus: $Enums.Status | null
    newStatus: $Enums.Status | null
  }

  export type TasksHistoryCountAggregateOutputType = {
    id: number
    taskId: number
    changedBy: number
    oldStatus: number
    newStatus: number
    _all: number
  }


  export type TasksHistoryMinAggregateInputType = {
    id?: true
    taskId?: true
    changedBy?: true
    oldStatus?: true
    newStatus?: true
  }

  export type TasksHistoryMaxAggregateInputType = {
    id?: true
    taskId?: true
    changedBy?: true
    oldStatus?: true
    newStatus?: true
  }

  export type TasksHistoryCountAggregateInputType = {
    id?: true
    taskId?: true
    changedBy?: true
    oldStatus?: true
    newStatus?: true
    _all?: true
  }

  export type TasksHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TasksHistory to aggregate.
     */
    where?: TasksHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TasksHistories to fetch.
     */
    orderBy?: TasksHistoryOrderByWithRelationInput | TasksHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TasksHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TasksHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TasksHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TasksHistories
    **/
    _count?: true | TasksHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TasksHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TasksHistoryMaxAggregateInputType
  }

  export type GetTasksHistoryAggregateType<T extends TasksHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTasksHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTasksHistory[P]>
      : GetScalarType<T[P], AggregateTasksHistory[P]>
  }




  export type TasksHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TasksHistoryWhereInput
    orderBy?: TasksHistoryOrderByWithAggregationInput | TasksHistoryOrderByWithAggregationInput[]
    by: TasksHistoryScalarFieldEnum[] | TasksHistoryScalarFieldEnum
    having?: TasksHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TasksHistoryCountAggregateInputType | true
    _min?: TasksHistoryMinAggregateInputType
    _max?: TasksHistoryMaxAggregateInputType
  }

  export type TasksHistoryGroupByOutputType = {
    id: string
    taskId: string
    changedBy: string
    oldStatus: $Enums.Status
    newStatus: $Enums.Status
    _count: TasksHistoryCountAggregateOutputType | null
    _min: TasksHistoryMinAggregateOutputType | null
    _max: TasksHistoryMaxAggregateOutputType | null
  }

  type GetTasksHistoryGroupByPayload<T extends TasksHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TasksHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TasksHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TasksHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TasksHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TasksHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    changedBy?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    changerId?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasksHistory"]>

  export type TasksHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    changedBy?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    changerId?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasksHistory"]>

  export type TasksHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    changedBy?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    task?: boolean | TasksDefaultArgs<ExtArgs>
    changerId?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tasksHistory"]>

  export type TasksHistorySelectScalar = {
    id?: boolean
    taskId?: boolean
    changedBy?: boolean
    oldStatus?: boolean
    newStatus?: boolean
  }

  export type TasksHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "taskId" | "changedBy" | "oldStatus" | "newStatus", ExtArgs["result"]["tasksHistory"]>
  export type TasksHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    changerId?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TasksHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    changerId?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type TasksHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TasksDefaultArgs<ExtArgs>
    changerId?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $TasksHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TasksHistory"
    objects: {
      task: Prisma.$TasksPayload<ExtArgs>
      changerId: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      changedBy: string
      oldStatus: $Enums.Status
      newStatus: $Enums.Status
    }, ExtArgs["result"]["tasksHistory"]>
    composites: {}
  }

  type TasksHistoryGetPayload<S extends boolean | null | undefined | TasksHistoryDefaultArgs> = $Result.GetResult<Prisma.$TasksHistoryPayload, S>

  type TasksHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TasksHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TasksHistoryCountAggregateInputType | true
    }

  export interface TasksHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TasksHistory'], meta: { name: 'TasksHistory' } }
    /**
     * Find zero or one TasksHistory that matches the filter.
     * @param {TasksHistoryFindUniqueArgs} args - Arguments to find a TasksHistory
     * @example
     * // Get one TasksHistory
     * const tasksHistory = await prisma.tasksHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TasksHistoryFindUniqueArgs>(args: SelectSubset<T, TasksHistoryFindUniqueArgs<ExtArgs>>): Prisma__TasksHistoryClient<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TasksHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TasksHistoryFindUniqueOrThrowArgs} args - Arguments to find a TasksHistory
     * @example
     * // Get one TasksHistory
     * const tasksHistory = await prisma.tasksHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TasksHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TasksHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TasksHistoryClient<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TasksHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksHistoryFindFirstArgs} args - Arguments to find a TasksHistory
     * @example
     * // Get one TasksHistory
     * const tasksHistory = await prisma.tasksHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TasksHistoryFindFirstArgs>(args?: SelectSubset<T, TasksHistoryFindFirstArgs<ExtArgs>>): Prisma__TasksHistoryClient<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TasksHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksHistoryFindFirstOrThrowArgs} args - Arguments to find a TasksHistory
     * @example
     * // Get one TasksHistory
     * const tasksHistory = await prisma.tasksHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TasksHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TasksHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TasksHistoryClient<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TasksHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TasksHistories
     * const tasksHistories = await prisma.tasksHistory.findMany()
     * 
     * // Get first 10 TasksHistories
     * const tasksHistories = await prisma.tasksHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tasksHistoryWithIdOnly = await prisma.tasksHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TasksHistoryFindManyArgs>(args?: SelectSubset<T, TasksHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TasksHistory.
     * @param {TasksHistoryCreateArgs} args - Arguments to create a TasksHistory.
     * @example
     * // Create one TasksHistory
     * const TasksHistory = await prisma.tasksHistory.create({
     *   data: {
     *     // ... data to create a TasksHistory
     *   }
     * })
     * 
     */
    create<T extends TasksHistoryCreateArgs>(args: SelectSubset<T, TasksHistoryCreateArgs<ExtArgs>>): Prisma__TasksHistoryClient<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TasksHistories.
     * @param {TasksHistoryCreateManyArgs} args - Arguments to create many TasksHistories.
     * @example
     * // Create many TasksHistories
     * const tasksHistory = await prisma.tasksHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TasksHistoryCreateManyArgs>(args?: SelectSubset<T, TasksHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TasksHistories and returns the data saved in the database.
     * @param {TasksHistoryCreateManyAndReturnArgs} args - Arguments to create many TasksHistories.
     * @example
     * // Create many TasksHistories
     * const tasksHistory = await prisma.tasksHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TasksHistories and only return the `id`
     * const tasksHistoryWithIdOnly = await prisma.tasksHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TasksHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TasksHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TasksHistory.
     * @param {TasksHistoryDeleteArgs} args - Arguments to delete one TasksHistory.
     * @example
     * // Delete one TasksHistory
     * const TasksHistory = await prisma.tasksHistory.delete({
     *   where: {
     *     // ... filter to delete one TasksHistory
     *   }
     * })
     * 
     */
    delete<T extends TasksHistoryDeleteArgs>(args: SelectSubset<T, TasksHistoryDeleteArgs<ExtArgs>>): Prisma__TasksHistoryClient<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TasksHistory.
     * @param {TasksHistoryUpdateArgs} args - Arguments to update one TasksHistory.
     * @example
     * // Update one TasksHistory
     * const tasksHistory = await prisma.tasksHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TasksHistoryUpdateArgs>(args: SelectSubset<T, TasksHistoryUpdateArgs<ExtArgs>>): Prisma__TasksHistoryClient<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TasksHistories.
     * @param {TasksHistoryDeleteManyArgs} args - Arguments to filter TasksHistories to delete.
     * @example
     * // Delete a few TasksHistories
     * const { count } = await prisma.tasksHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TasksHistoryDeleteManyArgs>(args?: SelectSubset<T, TasksHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TasksHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TasksHistories
     * const tasksHistory = await prisma.tasksHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TasksHistoryUpdateManyArgs>(args: SelectSubset<T, TasksHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TasksHistories and returns the data updated in the database.
     * @param {TasksHistoryUpdateManyAndReturnArgs} args - Arguments to update many TasksHistories.
     * @example
     * // Update many TasksHistories
     * const tasksHistory = await prisma.tasksHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TasksHistories and only return the `id`
     * const tasksHistoryWithIdOnly = await prisma.tasksHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends TasksHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TasksHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TasksHistory.
     * @param {TasksHistoryUpsertArgs} args - Arguments to update or create a TasksHistory.
     * @example
     * // Update or create a TasksHistory
     * const tasksHistory = await prisma.tasksHistory.upsert({
     *   create: {
     *     // ... data to create a TasksHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TasksHistory we want to update
     *   }
     * })
     */
    upsert<T extends TasksHistoryUpsertArgs>(args: SelectSubset<T, TasksHistoryUpsertArgs<ExtArgs>>): Prisma__TasksHistoryClient<$Result.GetResult<Prisma.$TasksHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TasksHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksHistoryCountArgs} args - Arguments to filter TasksHistories to count.
     * @example
     * // Count the number of TasksHistories
     * const count = await prisma.tasksHistory.count({
     *   where: {
     *     // ... the filter for the TasksHistories we want to count
     *   }
     * })
    **/
    count<T extends TasksHistoryCountArgs>(
      args?: Subset<T, TasksHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TasksHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TasksHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TasksHistoryAggregateArgs>(args: Subset<T, TasksHistoryAggregateArgs>): Prisma.PrismaPromise<GetTasksHistoryAggregateType<T>>

    /**
     * Group by TasksHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TasksHistoryGroupByArgs} args - Group by arguments.
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
      T extends TasksHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TasksHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TasksHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TasksHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTasksHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TasksHistory model
   */
  readonly fields: TasksHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TasksHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TasksHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TasksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TasksDefaultArgs<ExtArgs>>): Prisma__TasksClient<$Result.GetResult<Prisma.$TasksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    changerId<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TasksHistory model
   */
  interface TasksHistoryFieldRefs {
    readonly id: FieldRef<"TasksHistory", 'String'>
    readonly taskId: FieldRef<"TasksHistory", 'String'>
    readonly changedBy: FieldRef<"TasksHistory", 'String'>
    readonly oldStatus: FieldRef<"TasksHistory", 'Status'>
    readonly newStatus: FieldRef<"TasksHistory", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * TasksHistory findUnique
   */
  export type TasksHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TasksHistory to fetch.
     */
    where: TasksHistoryWhereUniqueInput
  }

  /**
   * TasksHistory findUniqueOrThrow
   */
  export type TasksHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TasksHistory to fetch.
     */
    where: TasksHistoryWhereUniqueInput
  }

  /**
   * TasksHistory findFirst
   */
  export type TasksHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TasksHistory to fetch.
     */
    where?: TasksHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TasksHistories to fetch.
     */
    orderBy?: TasksHistoryOrderByWithRelationInput | TasksHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TasksHistories.
     */
    cursor?: TasksHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TasksHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TasksHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TasksHistories.
     */
    distinct?: TasksHistoryScalarFieldEnum | TasksHistoryScalarFieldEnum[]
  }

  /**
   * TasksHistory findFirstOrThrow
   */
  export type TasksHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TasksHistory to fetch.
     */
    where?: TasksHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TasksHistories to fetch.
     */
    orderBy?: TasksHistoryOrderByWithRelationInput | TasksHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TasksHistories.
     */
    cursor?: TasksHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TasksHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TasksHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TasksHistories.
     */
    distinct?: TasksHistoryScalarFieldEnum | TasksHistoryScalarFieldEnum[]
  }

  /**
   * TasksHistory findMany
   */
  export type TasksHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TasksHistories to fetch.
     */
    where?: TasksHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TasksHistories to fetch.
     */
    orderBy?: TasksHistoryOrderByWithRelationInput | TasksHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TasksHistories.
     */
    cursor?: TasksHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TasksHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TasksHistories.
     */
    skip?: number
    distinct?: TasksHistoryScalarFieldEnum | TasksHistoryScalarFieldEnum[]
  }

  /**
   * TasksHistory create
   */
  export type TasksHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TasksHistory.
     */
    data: XOR<TasksHistoryCreateInput, TasksHistoryUncheckedCreateInput>
  }

  /**
   * TasksHistory createMany
   */
  export type TasksHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TasksHistories.
     */
    data: TasksHistoryCreateManyInput | TasksHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TasksHistory createManyAndReturn
   */
  export type TasksHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TasksHistories.
     */
    data: TasksHistoryCreateManyInput | TasksHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TasksHistory update
   */
  export type TasksHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TasksHistory.
     */
    data: XOR<TasksHistoryUpdateInput, TasksHistoryUncheckedUpdateInput>
    /**
     * Choose, which TasksHistory to update.
     */
    where: TasksHistoryWhereUniqueInput
  }

  /**
   * TasksHistory updateMany
   */
  export type TasksHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TasksHistories.
     */
    data: XOR<TasksHistoryUpdateManyMutationInput, TasksHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TasksHistories to update
     */
    where?: TasksHistoryWhereInput
    /**
     * Limit how many TasksHistories to update.
     */
    limit?: number
  }

  /**
   * TasksHistory updateManyAndReturn
   */
  export type TasksHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TasksHistories.
     */
    data: XOR<TasksHistoryUpdateManyMutationInput, TasksHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TasksHistories to update
     */
    where?: TasksHistoryWhereInput
    /**
     * Limit how many TasksHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TasksHistory upsert
   */
  export type TasksHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TasksHistory to update in case it exists.
     */
    where: TasksHistoryWhereUniqueInput
    /**
     * In case the TasksHistory found by the `where` argument doesn't exist, create a new TasksHistory with this data.
     */
    create: XOR<TasksHistoryCreateInput, TasksHistoryUncheckedCreateInput>
    /**
     * In case the TasksHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TasksHistoryUpdateInput, TasksHistoryUncheckedUpdateInput>
  }

  /**
   * TasksHistory delete
   */
  export type TasksHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryInclude<ExtArgs> | null
    /**
     * Filter which TasksHistory to delete.
     */
    where: TasksHistoryWhereUniqueInput
  }

  /**
   * TasksHistory deleteMany
   */
  export type TasksHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TasksHistories to delete
     */
    where?: TasksHistoryWhereInput
    /**
     * Limit how many TasksHistories to delete.
     */
    limit?: number
  }

  /**
   * TasksHistory without action
   */
  export type TasksHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TasksHistory
     */
    select?: TasksHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TasksHistory
     */
    omit?: TasksHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TasksHistoryInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const TeamsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamsScalarFieldEnum = (typeof TeamsScalarFieldEnum)[keyof typeof TeamsScalarFieldEnum]


  export const TeamMembersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teamId: 'teamId',
    createdAt: 'createdAt'
  };

  export type TeamMembersScalarFieldEnum = (typeof TeamMembersScalarFieldEnum)[keyof typeof TeamMembersScalarFieldEnum]


  export const TasksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    assignedTo: 'assignedTo',
    teamId: 'teamId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TasksScalarFieldEnum = (typeof TasksScalarFieldEnum)[keyof typeof TasksScalarFieldEnum]


  export const TasksHistoryScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    changedBy: 'changedBy',
    oldStatus: 'oldStatus',
    newStatus: 'newStatus'
  };

  export type TasksHistoryScalarFieldEnum = (typeof TasksHistoryScalarFieldEnum)[keyof typeof TasksHistoryScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    historyTask?: TasksHistoryListRelationFilter
    teamMembers?: TeamMembersListRelationFilter
    assignedTo?: TasksListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    historyTask?: TasksHistoryOrderByRelationAggregateInput
    teamMembers?: TeamMembersOrderByRelationAggregateInput
    assignedTo?: TasksOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    historyTask?: TasksHistoryListRelationFilter
    teamMembers?: TeamMembersListRelationFilter
    assignedTo?: TasksListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type TeamsWhereInput = {
    AND?: TeamsWhereInput | TeamsWhereInput[]
    OR?: TeamsWhereInput[]
    NOT?: TeamsWhereInput | TeamsWhereInput[]
    id?: StringFilter<"Teams"> | string
    name?: StringFilter<"Teams"> | string
    description?: StringNullableFilter<"Teams"> | string | null
    createdAt?: DateTimeFilter<"Teams"> | Date | string
    updatedAt?: DateTimeFilter<"Teams"> | Date | string
    members?: TeamMembersListRelationFilter
    tasks?: TasksListRelationFilter
  }

  export type TeamsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    members?: TeamMembersOrderByRelationAggregateInput
    tasks?: TasksOrderByRelationAggregateInput
  }

  export type TeamsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamsWhereInput | TeamsWhereInput[]
    OR?: TeamsWhereInput[]
    NOT?: TeamsWhereInput | TeamsWhereInput[]
    name?: StringFilter<"Teams"> | string
    description?: StringNullableFilter<"Teams"> | string | null
    createdAt?: DateTimeFilter<"Teams"> | Date | string
    updatedAt?: DateTimeFilter<"Teams"> | Date | string
    members?: TeamMembersListRelationFilter
    tasks?: TasksListRelationFilter
  }, "id">

  export type TeamsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamsCountOrderByAggregateInput
    _max?: TeamsMaxOrderByAggregateInput
    _min?: TeamsMinOrderByAggregateInput
  }

  export type TeamsScalarWhereWithAggregatesInput = {
    AND?: TeamsScalarWhereWithAggregatesInput | TeamsScalarWhereWithAggregatesInput[]
    OR?: TeamsScalarWhereWithAggregatesInput[]
    NOT?: TeamsScalarWhereWithAggregatesInput | TeamsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teams"> | string
    name?: StringWithAggregatesFilter<"Teams"> | string
    description?: StringNullableWithAggregatesFilter<"Teams"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Teams"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teams"> | Date | string
  }

  export type TeamMembersWhereInput = {
    AND?: TeamMembersWhereInput | TeamMembersWhereInput[]
    OR?: TeamMembersWhereInput[]
    NOT?: TeamMembersWhereInput | TeamMembersWhereInput[]
    id?: StringFilter<"TeamMembers"> | string
    userId?: StringFilter<"TeamMembers"> | string
    teamId?: StringFilter<"TeamMembers"> | string
    createdAt?: DateTimeFilter<"TeamMembers"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }

  export type TeamMembersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    user?: UsersOrderByWithRelationInput
    team?: TeamsOrderByWithRelationInput
  }

  export type TeamMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamMembersWhereInput | TeamMembersWhereInput[]
    OR?: TeamMembersWhereInput[]
    NOT?: TeamMembersWhereInput | TeamMembersWhereInput[]
    userId?: StringFilter<"TeamMembers"> | string
    teamId?: StringFilter<"TeamMembers"> | string
    createdAt?: DateTimeFilter<"TeamMembers"> | Date | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
  }, "id">

  export type TeamMembersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    _count?: TeamMembersCountOrderByAggregateInput
    _max?: TeamMembersMaxOrderByAggregateInput
    _min?: TeamMembersMinOrderByAggregateInput
  }

  export type TeamMembersScalarWhereWithAggregatesInput = {
    AND?: TeamMembersScalarWhereWithAggregatesInput | TeamMembersScalarWhereWithAggregatesInput[]
    OR?: TeamMembersScalarWhereWithAggregatesInput[]
    NOT?: TeamMembersScalarWhereWithAggregatesInput | TeamMembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamMembers"> | string
    userId?: StringWithAggregatesFilter<"TeamMembers"> | string
    teamId?: StringWithAggregatesFilter<"TeamMembers"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TeamMembers"> | Date | string
  }

  export type TasksWhereInput = {
    AND?: TasksWhereInput | TasksWhereInput[]
    OR?: TasksWhereInput[]
    NOT?: TasksWhereInput | TasksWhereInput[]
    id?: StringFilter<"Tasks"> | string
    title?: StringFilter<"Tasks"> | string
    description?: StringFilter<"Tasks"> | string
    status?: EnumStatusFilter<"Tasks"> | $Enums.Status
    priority?: EnumPriorityFilter<"Tasks"> | $Enums.Priority
    assignedTo?: StringFilter<"Tasks"> | string
    teamId?: StringFilter<"Tasks"> | string
    createdAt?: DateTimeFilter<"Tasks"> | Date | string
    updatedAt?: DateTimeFilter<"Tasks"> | Date | string
    assigned?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    TasksHistory?: TasksHistoryListRelationFilter
  }

  export type TasksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assigned?: UsersOrderByWithRelationInput
    team?: TeamsOrderByWithRelationInput
    TasksHistory?: TasksHistoryOrderByRelationAggregateInput
  }

  export type TasksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TasksWhereInput | TasksWhereInput[]
    OR?: TasksWhereInput[]
    NOT?: TasksWhereInput | TasksWhereInput[]
    title?: StringFilter<"Tasks"> | string
    description?: StringFilter<"Tasks"> | string
    status?: EnumStatusFilter<"Tasks"> | $Enums.Status
    priority?: EnumPriorityFilter<"Tasks"> | $Enums.Priority
    assignedTo?: StringFilter<"Tasks"> | string
    teamId?: StringFilter<"Tasks"> | string
    createdAt?: DateTimeFilter<"Tasks"> | Date | string
    updatedAt?: DateTimeFilter<"Tasks"> | Date | string
    assigned?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    team?: XOR<TeamsScalarRelationFilter, TeamsWhereInput>
    TasksHistory?: TasksHistoryListRelationFilter
  }, "id">

  export type TasksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TasksCountOrderByAggregateInput
    _max?: TasksMaxOrderByAggregateInput
    _min?: TasksMinOrderByAggregateInput
  }

  export type TasksScalarWhereWithAggregatesInput = {
    AND?: TasksScalarWhereWithAggregatesInput | TasksScalarWhereWithAggregatesInput[]
    OR?: TasksScalarWhereWithAggregatesInput[]
    NOT?: TasksScalarWhereWithAggregatesInput | TasksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tasks"> | string
    title?: StringWithAggregatesFilter<"Tasks"> | string
    description?: StringWithAggregatesFilter<"Tasks"> | string
    status?: EnumStatusWithAggregatesFilter<"Tasks"> | $Enums.Status
    priority?: EnumPriorityWithAggregatesFilter<"Tasks"> | $Enums.Priority
    assignedTo?: StringWithAggregatesFilter<"Tasks"> | string
    teamId?: StringWithAggregatesFilter<"Tasks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tasks"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Tasks"> | Date | string
  }

  export type TasksHistoryWhereInput = {
    AND?: TasksHistoryWhereInput | TasksHistoryWhereInput[]
    OR?: TasksHistoryWhereInput[]
    NOT?: TasksHistoryWhereInput | TasksHistoryWhereInput[]
    id?: StringFilter<"TasksHistory"> | string
    taskId?: StringFilter<"TasksHistory"> | string
    changedBy?: StringFilter<"TasksHistory"> | string
    oldStatus?: EnumStatusFilter<"TasksHistory"> | $Enums.Status
    newStatus?: EnumStatusFilter<"TasksHistory"> | $Enums.Status
    task?: XOR<TasksScalarRelationFilter, TasksWhereInput>
    changerId?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type TasksHistoryOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    changedBy?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    task?: TasksOrderByWithRelationInput
    changerId?: UsersOrderByWithRelationInput
  }

  export type TasksHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TasksHistoryWhereInput | TasksHistoryWhereInput[]
    OR?: TasksHistoryWhereInput[]
    NOT?: TasksHistoryWhereInput | TasksHistoryWhereInput[]
    taskId?: StringFilter<"TasksHistory"> | string
    changedBy?: StringFilter<"TasksHistory"> | string
    oldStatus?: EnumStatusFilter<"TasksHistory"> | $Enums.Status
    newStatus?: EnumStatusFilter<"TasksHistory"> | $Enums.Status
    task?: XOR<TasksScalarRelationFilter, TasksWhereInput>
    changerId?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type TasksHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    changedBy?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    _count?: TasksHistoryCountOrderByAggregateInput
    _max?: TasksHistoryMaxOrderByAggregateInput
    _min?: TasksHistoryMinOrderByAggregateInput
  }

  export type TasksHistoryScalarWhereWithAggregatesInput = {
    AND?: TasksHistoryScalarWhereWithAggregatesInput | TasksHistoryScalarWhereWithAggregatesInput[]
    OR?: TasksHistoryScalarWhereWithAggregatesInput[]
    NOT?: TasksHistoryScalarWhereWithAggregatesInput | TasksHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TasksHistory"> | string
    taskId?: StringWithAggregatesFilter<"TasksHistory"> | string
    changedBy?: StringWithAggregatesFilter<"TasksHistory"> | string
    oldStatus?: EnumStatusWithAggregatesFilter<"TasksHistory"> | $Enums.Status
    newStatus?: EnumStatusWithAggregatesFilter<"TasksHistory"> | $Enums.Status
  }

  export type UsersCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    historyTask?: TasksHistoryCreateNestedManyWithoutChangerIdInput
    teamMembers?: TeamMembersCreateNestedManyWithoutUserInput
    assignedTo?: TasksCreateNestedManyWithoutAssignedInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    historyTask?: TasksHistoryUncheckedCreateNestedManyWithoutChangerIdInput
    teamMembers?: TeamMembersUncheckedCreateNestedManyWithoutUserInput
    assignedTo?: TasksUncheckedCreateNestedManyWithoutAssignedInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historyTask?: TasksHistoryUpdateManyWithoutChangerIdNestedInput
    teamMembers?: TeamMembersUpdateManyWithoutUserNestedInput
    assignedTo?: TasksUpdateManyWithoutAssignedNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historyTask?: TasksHistoryUncheckedUpdateManyWithoutChangerIdNestedInput
    teamMembers?: TeamMembersUncheckedUpdateManyWithoutUserNestedInput
    assignedTo?: TasksUncheckedUpdateManyWithoutAssignedNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMembersCreateNestedManyWithoutTeamInput
    tasks?: TasksCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMembersUncheckedCreateNestedManyWithoutTeamInput
    tasks?: TasksUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMembersUpdateManyWithoutTeamNestedInput
    tasks?: TasksUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMembersUncheckedUpdateManyWithoutTeamNestedInput
    tasks?: TasksUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamsCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembersCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutTeamMembersInput
    team: TeamsCreateNestedOneWithoutMembersInput
  }

  export type TeamMembersUncheckedCreateInput = {
    id?: string
    userId: string
    teamId: string
    createdAt?: Date | string
  }

  export type TeamMembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTeamMembersNestedInput
    team?: TeamsUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembersCreateManyInput = {
    id?: string
    userId: string
    teamId: string
    createdAt?: Date | string
  }

  export type TeamMembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksCreateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigned: UsersCreateNestedOneWithoutAssignedToInput
    team: TeamsCreateNestedOneWithoutTasksInput
    TasksHistory?: TasksHistoryCreateNestedManyWithoutTaskInput
  }

  export type TasksUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    assignedTo: string
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TasksHistory?: TasksHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TasksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned?: UsersUpdateOneRequiredWithoutAssignedToNestedInput
    team?: TeamsUpdateOneRequiredWithoutTasksNestedInput
    TasksHistory?: TasksHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TasksHistory?: TasksHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TasksCreateManyInput = {
    id?: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    assignedTo: string
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TasksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksHistoryCreateInput = {
    id?: string
    oldStatus: $Enums.Status
    newStatus: $Enums.Status
    task: TasksCreateNestedOneWithoutTasksHistoryInput
    changerId: UsersCreateNestedOneWithoutHistoryTaskInput
  }

  export type TasksHistoryUncheckedCreateInput = {
    id?: string
    taskId: string
    changedBy: string
    oldStatus: $Enums.Status
    newStatus: $Enums.Status
  }

  export type TasksHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    newStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    task?: TasksUpdateOneRequiredWithoutTasksHistoryNestedInput
    changerId?: UsersUpdateOneRequiredWithoutHistoryTaskNestedInput
  }

  export type TasksHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    newStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type TasksHistoryCreateManyInput = {
    id?: string
    taskId: string
    changedBy: string
    oldStatus: $Enums.Status
    newStatus: $Enums.Status
  }

  export type TasksHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    newStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type TasksHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    newStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type TasksHistoryListRelationFilter = {
    every?: TasksHistoryWhereInput
    some?: TasksHistoryWhereInput
    none?: TasksHistoryWhereInput
  }

  export type TeamMembersListRelationFilter = {
    every?: TeamMembersWhereInput
    some?: TeamMembersWhereInput
    none?: TeamMembersWhereInput
  }

  export type TasksListRelationFilter = {
    every?: TasksWhereInput
    some?: TasksWhereInput
    none?: TasksWhereInput
  }

  export type TasksHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TasksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type TeamsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type TeamsScalarRelationFilter = {
    is?: TeamsWhereInput
    isNot?: TeamsWhereInput
  }

  export type TeamMembersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type TeamMembersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type TasksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TasksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TasksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    teamId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type TasksScalarRelationFilter = {
    is?: TasksWhereInput
    isNot?: TasksWhereInput
  }

  export type TasksHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    changedBy?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
  }

  export type TasksHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    changedBy?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
  }

  export type TasksHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    changedBy?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
  }

  export type TasksHistoryCreateNestedManyWithoutChangerIdInput = {
    create?: XOR<TasksHistoryCreateWithoutChangerIdInput, TasksHistoryUncheckedCreateWithoutChangerIdInput> | TasksHistoryCreateWithoutChangerIdInput[] | TasksHistoryUncheckedCreateWithoutChangerIdInput[]
    connectOrCreate?: TasksHistoryCreateOrConnectWithoutChangerIdInput | TasksHistoryCreateOrConnectWithoutChangerIdInput[]
    createMany?: TasksHistoryCreateManyChangerIdInputEnvelope
    connect?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
  }

  export type TeamMembersCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMembersCreateWithoutUserInput, TeamMembersUncheckedCreateWithoutUserInput> | TeamMembersCreateWithoutUserInput[] | TeamMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutUserInput | TeamMembersCreateOrConnectWithoutUserInput[]
    createMany?: TeamMembersCreateManyUserInputEnvelope
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
  }

  export type TasksCreateNestedManyWithoutAssignedInput = {
    create?: XOR<TasksCreateWithoutAssignedInput, TasksUncheckedCreateWithoutAssignedInput> | TasksCreateWithoutAssignedInput[] | TasksUncheckedCreateWithoutAssignedInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutAssignedInput | TasksCreateOrConnectWithoutAssignedInput[]
    createMany?: TasksCreateManyAssignedInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type TasksHistoryUncheckedCreateNestedManyWithoutChangerIdInput = {
    create?: XOR<TasksHistoryCreateWithoutChangerIdInput, TasksHistoryUncheckedCreateWithoutChangerIdInput> | TasksHistoryCreateWithoutChangerIdInput[] | TasksHistoryUncheckedCreateWithoutChangerIdInput[]
    connectOrCreate?: TasksHistoryCreateOrConnectWithoutChangerIdInput | TasksHistoryCreateOrConnectWithoutChangerIdInput[]
    createMany?: TasksHistoryCreateManyChangerIdInputEnvelope
    connect?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
  }

  export type TeamMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMembersCreateWithoutUserInput, TeamMembersUncheckedCreateWithoutUserInput> | TeamMembersCreateWithoutUserInput[] | TeamMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutUserInput | TeamMembersCreateOrConnectWithoutUserInput[]
    createMany?: TeamMembersCreateManyUserInputEnvelope
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
  }

  export type TasksUncheckedCreateNestedManyWithoutAssignedInput = {
    create?: XOR<TasksCreateWithoutAssignedInput, TasksUncheckedCreateWithoutAssignedInput> | TasksCreateWithoutAssignedInput[] | TasksUncheckedCreateWithoutAssignedInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutAssignedInput | TasksCreateOrConnectWithoutAssignedInput[]
    createMany?: TasksCreateManyAssignedInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TasksHistoryUpdateManyWithoutChangerIdNestedInput = {
    create?: XOR<TasksHistoryCreateWithoutChangerIdInput, TasksHistoryUncheckedCreateWithoutChangerIdInput> | TasksHistoryCreateWithoutChangerIdInput[] | TasksHistoryUncheckedCreateWithoutChangerIdInput[]
    connectOrCreate?: TasksHistoryCreateOrConnectWithoutChangerIdInput | TasksHistoryCreateOrConnectWithoutChangerIdInput[]
    upsert?: TasksHistoryUpsertWithWhereUniqueWithoutChangerIdInput | TasksHistoryUpsertWithWhereUniqueWithoutChangerIdInput[]
    createMany?: TasksHistoryCreateManyChangerIdInputEnvelope
    set?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    disconnect?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    delete?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    connect?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    update?: TasksHistoryUpdateWithWhereUniqueWithoutChangerIdInput | TasksHistoryUpdateWithWhereUniqueWithoutChangerIdInput[]
    updateMany?: TasksHistoryUpdateManyWithWhereWithoutChangerIdInput | TasksHistoryUpdateManyWithWhereWithoutChangerIdInput[]
    deleteMany?: TasksHistoryScalarWhereInput | TasksHistoryScalarWhereInput[]
  }

  export type TeamMembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMembersCreateWithoutUserInput, TeamMembersUncheckedCreateWithoutUserInput> | TeamMembersCreateWithoutUserInput[] | TeamMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutUserInput | TeamMembersCreateOrConnectWithoutUserInput[]
    upsert?: TeamMembersUpsertWithWhereUniqueWithoutUserInput | TeamMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMembersCreateManyUserInputEnvelope
    set?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    disconnect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    delete?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    update?: TeamMembersUpdateWithWhereUniqueWithoutUserInput | TeamMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMembersUpdateManyWithWhereWithoutUserInput | TeamMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMembersScalarWhereInput | TeamMembersScalarWhereInput[]
  }

  export type TasksUpdateManyWithoutAssignedNestedInput = {
    create?: XOR<TasksCreateWithoutAssignedInput, TasksUncheckedCreateWithoutAssignedInput> | TasksCreateWithoutAssignedInput[] | TasksUncheckedCreateWithoutAssignedInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutAssignedInput | TasksCreateOrConnectWithoutAssignedInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutAssignedInput | TasksUpsertWithWhereUniqueWithoutAssignedInput[]
    createMany?: TasksCreateManyAssignedInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutAssignedInput | TasksUpdateWithWhereUniqueWithoutAssignedInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutAssignedInput | TasksUpdateManyWithWhereWithoutAssignedInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type TasksHistoryUncheckedUpdateManyWithoutChangerIdNestedInput = {
    create?: XOR<TasksHistoryCreateWithoutChangerIdInput, TasksHistoryUncheckedCreateWithoutChangerIdInput> | TasksHistoryCreateWithoutChangerIdInput[] | TasksHistoryUncheckedCreateWithoutChangerIdInput[]
    connectOrCreate?: TasksHistoryCreateOrConnectWithoutChangerIdInput | TasksHistoryCreateOrConnectWithoutChangerIdInput[]
    upsert?: TasksHistoryUpsertWithWhereUniqueWithoutChangerIdInput | TasksHistoryUpsertWithWhereUniqueWithoutChangerIdInput[]
    createMany?: TasksHistoryCreateManyChangerIdInputEnvelope
    set?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    disconnect?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    delete?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    connect?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    update?: TasksHistoryUpdateWithWhereUniqueWithoutChangerIdInput | TasksHistoryUpdateWithWhereUniqueWithoutChangerIdInput[]
    updateMany?: TasksHistoryUpdateManyWithWhereWithoutChangerIdInput | TasksHistoryUpdateManyWithWhereWithoutChangerIdInput[]
    deleteMany?: TasksHistoryScalarWhereInput | TasksHistoryScalarWhereInput[]
  }

  export type TeamMembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMembersCreateWithoutUserInput, TeamMembersUncheckedCreateWithoutUserInput> | TeamMembersCreateWithoutUserInput[] | TeamMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutUserInput | TeamMembersCreateOrConnectWithoutUserInput[]
    upsert?: TeamMembersUpsertWithWhereUniqueWithoutUserInput | TeamMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMembersCreateManyUserInputEnvelope
    set?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    disconnect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    delete?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    update?: TeamMembersUpdateWithWhereUniqueWithoutUserInput | TeamMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMembersUpdateManyWithWhereWithoutUserInput | TeamMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMembersScalarWhereInput | TeamMembersScalarWhereInput[]
  }

  export type TasksUncheckedUpdateManyWithoutAssignedNestedInput = {
    create?: XOR<TasksCreateWithoutAssignedInput, TasksUncheckedCreateWithoutAssignedInput> | TasksCreateWithoutAssignedInput[] | TasksUncheckedCreateWithoutAssignedInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutAssignedInput | TasksCreateOrConnectWithoutAssignedInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutAssignedInput | TasksUpsertWithWhereUniqueWithoutAssignedInput[]
    createMany?: TasksCreateManyAssignedInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutAssignedInput | TasksUpdateWithWhereUniqueWithoutAssignedInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutAssignedInput | TasksUpdateManyWithWhereWithoutAssignedInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type TeamMembersCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMembersCreateWithoutTeamInput, TeamMembersUncheckedCreateWithoutTeamInput> | TeamMembersCreateWithoutTeamInput[] | TeamMembersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutTeamInput | TeamMembersCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMembersCreateManyTeamInputEnvelope
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
  }

  export type TasksCreateNestedManyWithoutTeamInput = {
    create?: XOR<TasksCreateWithoutTeamInput, TasksUncheckedCreateWithoutTeamInput> | TasksCreateWithoutTeamInput[] | TasksUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutTeamInput | TasksCreateOrConnectWithoutTeamInput[]
    createMany?: TasksCreateManyTeamInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type TeamMembersUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMembersCreateWithoutTeamInput, TeamMembersUncheckedCreateWithoutTeamInput> | TeamMembersCreateWithoutTeamInput[] | TeamMembersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutTeamInput | TeamMembersCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMembersCreateManyTeamInputEnvelope
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
  }

  export type TasksUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TasksCreateWithoutTeamInput, TasksUncheckedCreateWithoutTeamInput> | TasksCreateWithoutTeamInput[] | TasksUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutTeamInput | TasksCreateOrConnectWithoutTeamInput[]
    createMany?: TasksCreateManyTeamInputEnvelope
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TeamMembersUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMembersCreateWithoutTeamInput, TeamMembersUncheckedCreateWithoutTeamInput> | TeamMembersCreateWithoutTeamInput[] | TeamMembersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutTeamInput | TeamMembersCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMembersUpsertWithWhereUniqueWithoutTeamInput | TeamMembersUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMembersCreateManyTeamInputEnvelope
    set?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    disconnect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    delete?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    update?: TeamMembersUpdateWithWhereUniqueWithoutTeamInput | TeamMembersUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMembersUpdateManyWithWhereWithoutTeamInput | TeamMembersUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMembersScalarWhereInput | TeamMembersScalarWhereInput[]
  }

  export type TasksUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TasksCreateWithoutTeamInput, TasksUncheckedCreateWithoutTeamInput> | TasksCreateWithoutTeamInput[] | TasksUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutTeamInput | TasksCreateOrConnectWithoutTeamInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutTeamInput | TasksUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TasksCreateManyTeamInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutTeamInput | TasksUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutTeamInput | TasksUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type TeamMembersUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMembersCreateWithoutTeamInput, TeamMembersUncheckedCreateWithoutTeamInput> | TeamMembersCreateWithoutTeamInput[] | TeamMembersUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMembersCreateOrConnectWithoutTeamInput | TeamMembersCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMembersUpsertWithWhereUniqueWithoutTeamInput | TeamMembersUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMembersCreateManyTeamInputEnvelope
    set?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    disconnect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    delete?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    connect?: TeamMembersWhereUniqueInput | TeamMembersWhereUniqueInput[]
    update?: TeamMembersUpdateWithWhereUniqueWithoutTeamInput | TeamMembersUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMembersUpdateManyWithWhereWithoutTeamInput | TeamMembersUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMembersScalarWhereInput | TeamMembersScalarWhereInput[]
  }

  export type TasksUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TasksCreateWithoutTeamInput, TasksUncheckedCreateWithoutTeamInput> | TasksCreateWithoutTeamInput[] | TasksUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TasksCreateOrConnectWithoutTeamInput | TasksCreateOrConnectWithoutTeamInput[]
    upsert?: TasksUpsertWithWhereUniqueWithoutTeamInput | TasksUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TasksCreateManyTeamInputEnvelope
    set?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    disconnect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    delete?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    connect?: TasksWhereUniqueInput | TasksWhereUniqueInput[]
    update?: TasksUpdateWithWhereUniqueWithoutTeamInput | TasksUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TasksUpdateManyWithWhereWithoutTeamInput | TasksUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TasksScalarWhereInput | TasksScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutTeamMembersInput = {
    create?: XOR<UsersCreateWithoutTeamMembersInput, UsersUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTeamMembersInput
    connect?: UsersWhereUniqueInput
  }

  export type TeamsCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutMembersInput
    connect?: TeamsWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutTeamMembersNestedInput = {
    create?: XOR<UsersCreateWithoutTeamMembersInput, UsersUncheckedCreateWithoutTeamMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTeamMembersInput
    upsert?: UsersUpsertWithoutTeamMembersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTeamMembersInput, UsersUpdateWithoutTeamMembersInput>, UsersUncheckedUpdateWithoutTeamMembersInput>
  }

  export type TeamsUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutMembersInput
    upsert?: TeamsUpsertWithoutMembersInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutMembersInput, TeamsUpdateWithoutMembersInput>, TeamsUncheckedUpdateWithoutMembersInput>
  }

  export type UsersCreateNestedOneWithoutAssignedToInput = {
    create?: XOR<UsersCreateWithoutAssignedToInput, UsersUncheckedCreateWithoutAssignedToInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAssignedToInput
    connect?: UsersWhereUniqueInput
  }

  export type TeamsCreateNestedOneWithoutTasksInput = {
    create?: XOR<TeamsCreateWithoutTasksInput, TeamsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutTasksInput
    connect?: TeamsWhereUniqueInput
  }

  export type TasksHistoryCreateNestedManyWithoutTaskInput = {
    create?: XOR<TasksHistoryCreateWithoutTaskInput, TasksHistoryUncheckedCreateWithoutTaskInput> | TasksHistoryCreateWithoutTaskInput[] | TasksHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TasksHistoryCreateOrConnectWithoutTaskInput | TasksHistoryCreateOrConnectWithoutTaskInput[]
    createMany?: TasksHistoryCreateManyTaskInputEnvelope
    connect?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
  }

  export type TasksHistoryUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TasksHistoryCreateWithoutTaskInput, TasksHistoryUncheckedCreateWithoutTaskInput> | TasksHistoryCreateWithoutTaskInput[] | TasksHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TasksHistoryCreateOrConnectWithoutTaskInput | TasksHistoryCreateOrConnectWithoutTaskInput[]
    createMany?: TasksHistoryCreateManyTaskInputEnvelope
    connect?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type UsersUpdateOneRequiredWithoutAssignedToNestedInput = {
    create?: XOR<UsersCreateWithoutAssignedToInput, UsersUncheckedCreateWithoutAssignedToInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAssignedToInput
    upsert?: UsersUpsertWithoutAssignedToInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAssignedToInput, UsersUpdateWithoutAssignedToInput>, UsersUncheckedUpdateWithoutAssignedToInput>
  }

  export type TeamsUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<TeamsCreateWithoutTasksInput, TeamsUncheckedCreateWithoutTasksInput>
    connectOrCreate?: TeamsCreateOrConnectWithoutTasksInput
    upsert?: TeamsUpsertWithoutTasksInput
    connect?: TeamsWhereUniqueInput
    update?: XOR<XOR<TeamsUpdateToOneWithWhereWithoutTasksInput, TeamsUpdateWithoutTasksInput>, TeamsUncheckedUpdateWithoutTasksInput>
  }

  export type TasksHistoryUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TasksHistoryCreateWithoutTaskInput, TasksHistoryUncheckedCreateWithoutTaskInput> | TasksHistoryCreateWithoutTaskInput[] | TasksHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TasksHistoryCreateOrConnectWithoutTaskInput | TasksHistoryCreateOrConnectWithoutTaskInput[]
    upsert?: TasksHistoryUpsertWithWhereUniqueWithoutTaskInput | TasksHistoryUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TasksHistoryCreateManyTaskInputEnvelope
    set?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    disconnect?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    delete?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    connect?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    update?: TasksHistoryUpdateWithWhereUniqueWithoutTaskInput | TasksHistoryUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TasksHistoryUpdateManyWithWhereWithoutTaskInput | TasksHistoryUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TasksHistoryScalarWhereInput | TasksHistoryScalarWhereInput[]
  }

  export type TasksHistoryUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TasksHistoryCreateWithoutTaskInput, TasksHistoryUncheckedCreateWithoutTaskInput> | TasksHistoryCreateWithoutTaskInput[] | TasksHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TasksHistoryCreateOrConnectWithoutTaskInput | TasksHistoryCreateOrConnectWithoutTaskInput[]
    upsert?: TasksHistoryUpsertWithWhereUniqueWithoutTaskInput | TasksHistoryUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TasksHistoryCreateManyTaskInputEnvelope
    set?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    disconnect?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    delete?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    connect?: TasksHistoryWhereUniqueInput | TasksHistoryWhereUniqueInput[]
    update?: TasksHistoryUpdateWithWhereUniqueWithoutTaskInput | TasksHistoryUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TasksHistoryUpdateManyWithWhereWithoutTaskInput | TasksHistoryUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TasksHistoryScalarWhereInput | TasksHistoryScalarWhereInput[]
  }

  export type TasksCreateNestedOneWithoutTasksHistoryInput = {
    create?: XOR<TasksCreateWithoutTasksHistoryInput, TasksUncheckedCreateWithoutTasksHistoryInput>
    connectOrCreate?: TasksCreateOrConnectWithoutTasksHistoryInput
    connect?: TasksWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutHistoryTaskInput = {
    create?: XOR<UsersCreateWithoutHistoryTaskInput, UsersUncheckedCreateWithoutHistoryTaskInput>
    connectOrCreate?: UsersCreateOrConnectWithoutHistoryTaskInput
    connect?: UsersWhereUniqueInput
  }

  export type TasksUpdateOneRequiredWithoutTasksHistoryNestedInput = {
    create?: XOR<TasksCreateWithoutTasksHistoryInput, TasksUncheckedCreateWithoutTasksHistoryInput>
    connectOrCreate?: TasksCreateOrConnectWithoutTasksHistoryInput
    upsert?: TasksUpsertWithoutTasksHistoryInput
    connect?: TasksWhereUniqueInput
    update?: XOR<XOR<TasksUpdateToOneWithWhereWithoutTasksHistoryInput, TasksUpdateWithoutTasksHistoryInput>, TasksUncheckedUpdateWithoutTasksHistoryInput>
  }

  export type UsersUpdateOneRequiredWithoutHistoryTaskNestedInput = {
    create?: XOR<UsersCreateWithoutHistoryTaskInput, UsersUncheckedCreateWithoutHistoryTaskInput>
    connectOrCreate?: UsersCreateOrConnectWithoutHistoryTaskInput
    upsert?: UsersUpsertWithoutHistoryTaskInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutHistoryTaskInput, UsersUpdateWithoutHistoryTaskInput>, UsersUncheckedUpdateWithoutHistoryTaskInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type TasksHistoryCreateWithoutChangerIdInput = {
    id?: string
    oldStatus: $Enums.Status
    newStatus: $Enums.Status
    task: TasksCreateNestedOneWithoutTasksHistoryInput
  }

  export type TasksHistoryUncheckedCreateWithoutChangerIdInput = {
    id?: string
    taskId: string
    oldStatus: $Enums.Status
    newStatus: $Enums.Status
  }

  export type TasksHistoryCreateOrConnectWithoutChangerIdInput = {
    where: TasksHistoryWhereUniqueInput
    create: XOR<TasksHistoryCreateWithoutChangerIdInput, TasksHistoryUncheckedCreateWithoutChangerIdInput>
  }

  export type TasksHistoryCreateManyChangerIdInputEnvelope = {
    data: TasksHistoryCreateManyChangerIdInput | TasksHistoryCreateManyChangerIdInput[]
    skipDuplicates?: boolean
  }

  export type TeamMembersCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    team: TeamsCreateNestedOneWithoutMembersInput
  }

  export type TeamMembersUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
    createdAt?: Date | string
  }

  export type TeamMembersCreateOrConnectWithoutUserInput = {
    where: TeamMembersWhereUniqueInput
    create: XOR<TeamMembersCreateWithoutUserInput, TeamMembersUncheckedCreateWithoutUserInput>
  }

  export type TeamMembersCreateManyUserInputEnvelope = {
    data: TeamMembersCreateManyUserInput | TeamMembersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TasksCreateWithoutAssignedInput = {
    id?: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamsCreateNestedOneWithoutTasksInput
    TasksHistory?: TasksHistoryCreateNestedManyWithoutTaskInput
  }

  export type TasksUncheckedCreateWithoutAssignedInput = {
    id?: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TasksHistory?: TasksHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TasksCreateOrConnectWithoutAssignedInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutAssignedInput, TasksUncheckedCreateWithoutAssignedInput>
  }

  export type TasksCreateManyAssignedInputEnvelope = {
    data: TasksCreateManyAssignedInput | TasksCreateManyAssignedInput[]
    skipDuplicates?: boolean
  }

  export type TasksHistoryUpsertWithWhereUniqueWithoutChangerIdInput = {
    where: TasksHistoryWhereUniqueInput
    update: XOR<TasksHistoryUpdateWithoutChangerIdInput, TasksHistoryUncheckedUpdateWithoutChangerIdInput>
    create: XOR<TasksHistoryCreateWithoutChangerIdInput, TasksHistoryUncheckedCreateWithoutChangerIdInput>
  }

  export type TasksHistoryUpdateWithWhereUniqueWithoutChangerIdInput = {
    where: TasksHistoryWhereUniqueInput
    data: XOR<TasksHistoryUpdateWithoutChangerIdInput, TasksHistoryUncheckedUpdateWithoutChangerIdInput>
  }

  export type TasksHistoryUpdateManyWithWhereWithoutChangerIdInput = {
    where: TasksHistoryScalarWhereInput
    data: XOR<TasksHistoryUpdateManyMutationInput, TasksHistoryUncheckedUpdateManyWithoutChangerIdInput>
  }

  export type TasksHistoryScalarWhereInput = {
    AND?: TasksHistoryScalarWhereInput | TasksHistoryScalarWhereInput[]
    OR?: TasksHistoryScalarWhereInput[]
    NOT?: TasksHistoryScalarWhereInput | TasksHistoryScalarWhereInput[]
    id?: StringFilter<"TasksHistory"> | string
    taskId?: StringFilter<"TasksHistory"> | string
    changedBy?: StringFilter<"TasksHistory"> | string
    oldStatus?: EnumStatusFilter<"TasksHistory"> | $Enums.Status
    newStatus?: EnumStatusFilter<"TasksHistory"> | $Enums.Status
  }

  export type TeamMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMembersWhereUniqueInput
    update: XOR<TeamMembersUpdateWithoutUserInput, TeamMembersUncheckedUpdateWithoutUserInput>
    create: XOR<TeamMembersCreateWithoutUserInput, TeamMembersUncheckedCreateWithoutUserInput>
  }

  export type TeamMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMembersWhereUniqueInput
    data: XOR<TeamMembersUpdateWithoutUserInput, TeamMembersUncheckedUpdateWithoutUserInput>
  }

  export type TeamMembersUpdateManyWithWhereWithoutUserInput = {
    where: TeamMembersScalarWhereInput
    data: XOR<TeamMembersUpdateManyMutationInput, TeamMembersUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamMembersScalarWhereInput = {
    AND?: TeamMembersScalarWhereInput | TeamMembersScalarWhereInput[]
    OR?: TeamMembersScalarWhereInput[]
    NOT?: TeamMembersScalarWhereInput | TeamMembersScalarWhereInput[]
    id?: StringFilter<"TeamMembers"> | string
    userId?: StringFilter<"TeamMembers"> | string
    teamId?: StringFilter<"TeamMembers"> | string
    createdAt?: DateTimeFilter<"TeamMembers"> | Date | string
  }

  export type TasksUpsertWithWhereUniqueWithoutAssignedInput = {
    where: TasksWhereUniqueInput
    update: XOR<TasksUpdateWithoutAssignedInput, TasksUncheckedUpdateWithoutAssignedInput>
    create: XOR<TasksCreateWithoutAssignedInput, TasksUncheckedCreateWithoutAssignedInput>
  }

  export type TasksUpdateWithWhereUniqueWithoutAssignedInput = {
    where: TasksWhereUniqueInput
    data: XOR<TasksUpdateWithoutAssignedInput, TasksUncheckedUpdateWithoutAssignedInput>
  }

  export type TasksUpdateManyWithWhereWithoutAssignedInput = {
    where: TasksScalarWhereInput
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyWithoutAssignedInput>
  }

  export type TasksScalarWhereInput = {
    AND?: TasksScalarWhereInput | TasksScalarWhereInput[]
    OR?: TasksScalarWhereInput[]
    NOT?: TasksScalarWhereInput | TasksScalarWhereInput[]
    id?: StringFilter<"Tasks"> | string
    title?: StringFilter<"Tasks"> | string
    description?: StringFilter<"Tasks"> | string
    status?: EnumStatusFilter<"Tasks"> | $Enums.Status
    priority?: EnumPriorityFilter<"Tasks"> | $Enums.Priority
    assignedTo?: StringFilter<"Tasks"> | string
    teamId?: StringFilter<"Tasks"> | string
    createdAt?: DateTimeFilter<"Tasks"> | Date | string
    updatedAt?: DateTimeFilter<"Tasks"> | Date | string
  }

  export type TeamMembersCreateWithoutTeamInput = {
    id?: string
    createdAt?: Date | string
    user: UsersCreateNestedOneWithoutTeamMembersInput
  }

  export type TeamMembersUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type TeamMembersCreateOrConnectWithoutTeamInput = {
    where: TeamMembersWhereUniqueInput
    create: XOR<TeamMembersCreateWithoutTeamInput, TeamMembersUncheckedCreateWithoutTeamInput>
  }

  export type TeamMembersCreateManyTeamInputEnvelope = {
    data: TeamMembersCreateManyTeamInput | TeamMembersCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TasksCreateWithoutTeamInput = {
    id?: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigned: UsersCreateNestedOneWithoutAssignedToInput
    TasksHistory?: TasksHistoryCreateNestedManyWithoutTaskInput
  }

  export type TasksUncheckedCreateWithoutTeamInput = {
    id?: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    assignedTo: string
    createdAt?: Date | string
    updatedAt?: Date | string
    TasksHistory?: TasksHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TasksCreateOrConnectWithoutTeamInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutTeamInput, TasksUncheckedCreateWithoutTeamInput>
  }

  export type TasksCreateManyTeamInputEnvelope = {
    data: TasksCreateManyTeamInput | TasksCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamMembersUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMembersWhereUniqueInput
    update: XOR<TeamMembersUpdateWithoutTeamInput, TeamMembersUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamMembersCreateWithoutTeamInput, TeamMembersUncheckedCreateWithoutTeamInput>
  }

  export type TeamMembersUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMembersWhereUniqueInput
    data: XOR<TeamMembersUpdateWithoutTeamInput, TeamMembersUncheckedUpdateWithoutTeamInput>
  }

  export type TeamMembersUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMembersScalarWhereInput
    data: XOR<TeamMembersUpdateManyMutationInput, TeamMembersUncheckedUpdateManyWithoutTeamInput>
  }

  export type TasksUpsertWithWhereUniqueWithoutTeamInput = {
    where: TasksWhereUniqueInput
    update: XOR<TasksUpdateWithoutTeamInput, TasksUncheckedUpdateWithoutTeamInput>
    create: XOR<TasksCreateWithoutTeamInput, TasksUncheckedCreateWithoutTeamInput>
  }

  export type TasksUpdateWithWhereUniqueWithoutTeamInput = {
    where: TasksWhereUniqueInput
    data: XOR<TasksUpdateWithoutTeamInput, TasksUncheckedUpdateWithoutTeamInput>
  }

  export type TasksUpdateManyWithWhereWithoutTeamInput = {
    where: TasksScalarWhereInput
    data: XOR<TasksUpdateManyMutationInput, TasksUncheckedUpdateManyWithoutTeamInput>
  }

  export type UsersCreateWithoutTeamMembersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    historyTask?: TasksHistoryCreateNestedManyWithoutChangerIdInput
    assignedTo?: TasksCreateNestedManyWithoutAssignedInput
  }

  export type UsersUncheckedCreateWithoutTeamMembersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    historyTask?: TasksHistoryUncheckedCreateNestedManyWithoutChangerIdInput
    assignedTo?: TasksUncheckedCreateNestedManyWithoutAssignedInput
  }

  export type UsersCreateOrConnectWithoutTeamMembersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTeamMembersInput, UsersUncheckedCreateWithoutTeamMembersInput>
  }

  export type TeamsCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TasksCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TasksUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutMembersInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput>
  }

  export type UsersUpsertWithoutTeamMembersInput = {
    update: XOR<UsersUpdateWithoutTeamMembersInput, UsersUncheckedUpdateWithoutTeamMembersInput>
    create: XOR<UsersCreateWithoutTeamMembersInput, UsersUncheckedCreateWithoutTeamMembersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTeamMembersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTeamMembersInput, UsersUncheckedUpdateWithoutTeamMembersInput>
  }

  export type UsersUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historyTask?: TasksHistoryUpdateManyWithoutChangerIdNestedInput
    assignedTo?: TasksUpdateManyWithoutAssignedNestedInput
  }

  export type UsersUncheckedUpdateWithoutTeamMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historyTask?: TasksHistoryUncheckedUpdateManyWithoutChangerIdNestedInput
    assignedTo?: TasksUncheckedUpdateManyWithoutAssignedNestedInput
  }

  export type TeamsUpsertWithoutMembersInput = {
    update: XOR<TeamsUpdateWithoutMembersInput, TeamsUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamsCreateWithoutMembersInput, TeamsUncheckedCreateWithoutMembersInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutMembersInput, TeamsUncheckedUpdateWithoutMembersInput>
  }

  export type TeamsUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TasksUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TasksUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type UsersCreateWithoutAssignedToInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    historyTask?: TasksHistoryCreateNestedManyWithoutChangerIdInput
    teamMembers?: TeamMembersCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutAssignedToInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    historyTask?: TasksHistoryUncheckedCreateNestedManyWithoutChangerIdInput
    teamMembers?: TeamMembersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutAssignedToInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAssignedToInput, UsersUncheckedCreateWithoutAssignedToInput>
  }

  export type TeamsCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMembersCreateNestedManyWithoutTeamInput
  }

  export type TeamsUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMembersUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamsCreateOrConnectWithoutTasksInput = {
    where: TeamsWhereUniqueInput
    create: XOR<TeamsCreateWithoutTasksInput, TeamsUncheckedCreateWithoutTasksInput>
  }

  export type TasksHistoryCreateWithoutTaskInput = {
    id?: string
    oldStatus: $Enums.Status
    newStatus: $Enums.Status
    changerId: UsersCreateNestedOneWithoutHistoryTaskInput
  }

  export type TasksHistoryUncheckedCreateWithoutTaskInput = {
    id?: string
    changedBy: string
    oldStatus: $Enums.Status
    newStatus: $Enums.Status
  }

  export type TasksHistoryCreateOrConnectWithoutTaskInput = {
    where: TasksHistoryWhereUniqueInput
    create: XOR<TasksHistoryCreateWithoutTaskInput, TasksHistoryUncheckedCreateWithoutTaskInput>
  }

  export type TasksHistoryCreateManyTaskInputEnvelope = {
    data: TasksHistoryCreateManyTaskInput | TasksHistoryCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutAssignedToInput = {
    update: XOR<UsersUpdateWithoutAssignedToInput, UsersUncheckedUpdateWithoutAssignedToInput>
    create: XOR<UsersCreateWithoutAssignedToInput, UsersUncheckedCreateWithoutAssignedToInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAssignedToInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAssignedToInput, UsersUncheckedUpdateWithoutAssignedToInput>
  }

  export type UsersUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historyTask?: TasksHistoryUpdateManyWithoutChangerIdNestedInput
    teamMembers?: TeamMembersUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    historyTask?: TasksHistoryUncheckedUpdateManyWithoutChangerIdNestedInput
    teamMembers?: TeamMembersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamsUpsertWithoutTasksInput = {
    update: XOR<TeamsUpdateWithoutTasksInput, TeamsUncheckedUpdateWithoutTasksInput>
    create: XOR<TeamsCreateWithoutTasksInput, TeamsUncheckedCreateWithoutTasksInput>
    where?: TeamsWhereInput
  }

  export type TeamsUpdateToOneWithWhereWithoutTasksInput = {
    where?: TeamsWhereInput
    data: XOR<TeamsUpdateWithoutTasksInput, TeamsUncheckedUpdateWithoutTasksInput>
  }

  export type TeamsUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMembersUpdateManyWithoutTeamNestedInput
  }

  export type TeamsUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMembersUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TasksHistoryUpsertWithWhereUniqueWithoutTaskInput = {
    where: TasksHistoryWhereUniqueInput
    update: XOR<TasksHistoryUpdateWithoutTaskInput, TasksHistoryUncheckedUpdateWithoutTaskInput>
    create: XOR<TasksHistoryCreateWithoutTaskInput, TasksHistoryUncheckedCreateWithoutTaskInput>
  }

  export type TasksHistoryUpdateWithWhereUniqueWithoutTaskInput = {
    where: TasksHistoryWhereUniqueInput
    data: XOR<TasksHistoryUpdateWithoutTaskInput, TasksHistoryUncheckedUpdateWithoutTaskInput>
  }

  export type TasksHistoryUpdateManyWithWhereWithoutTaskInput = {
    where: TasksHistoryScalarWhereInput
    data: XOR<TasksHistoryUpdateManyMutationInput, TasksHistoryUncheckedUpdateManyWithoutTaskInput>
  }

  export type TasksCreateWithoutTasksHistoryInput = {
    id?: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    createdAt?: Date | string
    updatedAt?: Date | string
    assigned: UsersCreateNestedOneWithoutAssignedToInput
    team: TeamsCreateNestedOneWithoutTasksInput
  }

  export type TasksUncheckedCreateWithoutTasksHistoryInput = {
    id?: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    assignedTo: string
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TasksCreateOrConnectWithoutTasksHistoryInput = {
    where: TasksWhereUniqueInput
    create: XOR<TasksCreateWithoutTasksHistoryInput, TasksUncheckedCreateWithoutTasksHistoryInput>
  }

  export type UsersCreateWithoutHistoryTaskInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMembersCreateNestedManyWithoutUserInput
    assignedTo?: TasksCreateNestedManyWithoutAssignedInput
  }

  export type UsersUncheckedCreateWithoutHistoryTaskInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    teamMembers?: TeamMembersUncheckedCreateNestedManyWithoutUserInput
    assignedTo?: TasksUncheckedCreateNestedManyWithoutAssignedInput
  }

  export type UsersCreateOrConnectWithoutHistoryTaskInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutHistoryTaskInput, UsersUncheckedCreateWithoutHistoryTaskInput>
  }

  export type TasksUpsertWithoutTasksHistoryInput = {
    update: XOR<TasksUpdateWithoutTasksHistoryInput, TasksUncheckedUpdateWithoutTasksHistoryInput>
    create: XOR<TasksCreateWithoutTasksHistoryInput, TasksUncheckedCreateWithoutTasksHistoryInput>
    where?: TasksWhereInput
  }

  export type TasksUpdateToOneWithWhereWithoutTasksHistoryInput = {
    where?: TasksWhereInput
    data: XOR<TasksUpdateWithoutTasksHistoryInput, TasksUncheckedUpdateWithoutTasksHistoryInput>
  }

  export type TasksUpdateWithoutTasksHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned?: UsersUpdateOneRequiredWithoutAssignedToNestedInput
    team?: TeamsUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TasksUncheckedUpdateWithoutTasksHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpsertWithoutHistoryTaskInput = {
    update: XOR<UsersUpdateWithoutHistoryTaskInput, UsersUncheckedUpdateWithoutHistoryTaskInput>
    create: XOR<UsersCreateWithoutHistoryTaskInput, UsersUncheckedCreateWithoutHistoryTaskInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutHistoryTaskInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutHistoryTaskInput, UsersUncheckedUpdateWithoutHistoryTaskInput>
  }

  export type UsersUpdateWithoutHistoryTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMembersUpdateManyWithoutUserNestedInput
    assignedTo?: TasksUpdateManyWithoutAssignedNestedInput
  }

  export type UsersUncheckedUpdateWithoutHistoryTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamMembers?: TeamMembersUncheckedUpdateManyWithoutUserNestedInput
    assignedTo?: TasksUncheckedUpdateManyWithoutAssignedNestedInput
  }

  export type TasksHistoryCreateManyChangerIdInput = {
    id?: string
    taskId: string
    oldStatus: $Enums.Status
    newStatus: $Enums.Status
  }

  export type TeamMembersCreateManyUserInput = {
    id?: string
    teamId: string
    createdAt?: Date | string
  }

  export type TasksCreateManyAssignedInput = {
    id?: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    teamId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TasksHistoryUpdateWithoutChangerIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    newStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    task?: TasksUpdateOneRequiredWithoutTasksHistoryNestedInput
  }

  export type TasksHistoryUncheckedUpdateWithoutChangerIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    newStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type TasksHistoryUncheckedUpdateManyWithoutChangerIdInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    newStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type TeamMembersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMembersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksUpdateWithoutAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamsUpdateOneRequiredWithoutTasksNestedInput
    TasksHistory?: TasksHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateWithoutAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TasksHistory?: TasksHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateManyWithoutAssignedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembersCreateManyTeamInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type TasksCreateManyTeamInput = {
    id?: string
    title: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    assignedTo: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamMembersUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UsersUpdateOneRequiredWithoutTeamMembersNestedInput
  }

  export type TeamMembersUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMembersUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assigned?: UsersUpdateOneRequiredWithoutAssignedToNestedInput
    TasksHistory?: TasksHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TasksHistory?: TasksHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TasksUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TasksHistoryCreateManyTaskInput = {
    id?: string
    changedBy: string
    oldStatus: $Enums.Status
    newStatus: $Enums.Status
  }

  export type TasksHistoryUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    newStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    changerId?: UsersUpdateOneRequiredWithoutHistoryTaskNestedInput
  }

  export type TasksHistoryUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    newStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type TasksHistoryUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    changedBy?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    newStatus?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
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