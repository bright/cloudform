import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CatalogTarget {
    ConnectionName?: Value<string>;
    DatabaseName?: Value<string>;
    DlqEventQueueArn?: Value<string>;
    Tables?: List<Value<string>>;
    EventQueueArn?: Value<string>;
    constructor(properties: CatalogTarget);
}
export declare class DeltaTarget {
    ConnectionName?: Value<string>;
    CreateNativeDeltaTable?: Value<boolean>;
    WriteManifest?: Value<boolean>;
    DeltaTables?: List<Value<string>>;
    constructor(properties: DeltaTarget);
}
export declare class DynamoDBTarget {
    Path?: Value<string>;
    constructor(properties: DynamoDBTarget);
}
export declare class IcebergTarget {
    ConnectionName?: Value<string>;
    Exclusions?: List<Value<string>>;
    Paths?: List<Value<string>>;
    MaximumTraversalDepth?: Value<number>;
    constructor(properties: IcebergTarget);
}
export declare class JdbcTarget {
    ConnectionName?: Value<string>;
    Path?: Value<string>;
    Exclusions?: List<Value<string>>;
    constructor(properties: JdbcTarget);
}
export declare class MongoDBTarget {
    ConnectionName?: Value<string>;
    Path?: Value<string>;
    constructor(properties: MongoDBTarget);
}
export declare class RecrawlPolicy {
    RecrawlBehavior?: Value<string>;
    constructor(properties: RecrawlPolicy);
}
export declare class S3Target {
    ConnectionName?: Value<string>;
    Path?: Value<string>;
    SampleSize?: Value<number>;
    Exclusions?: List<Value<string>>;
    DlqEventQueueArn?: Value<string>;
    EventQueueArn?: Value<string>;
    constructor(properties: S3Target);
}
export declare class Schedule {
    ScheduleExpression?: Value<string>;
    constructor(properties: Schedule);
}
export declare class SchemaChangePolicy {
    UpdateBehavior?: Value<string>;
    DeleteBehavior?: Value<string>;
    constructor(properties: SchemaChangePolicy);
}
export declare class Targets {
    S3Targets?: List<S3Target>;
    CatalogTargets?: List<CatalogTarget>;
    DeltaTargets?: List<DeltaTarget>;
    MongoDBTargets?: List<MongoDBTarget>;
    JdbcTargets?: List<JdbcTarget>;
    DynamoDBTargets?: List<DynamoDBTarget>;
    IcebergTargets?: List<IcebergTarget>;
    constructor(properties: Targets);
}
export interface CrawlerProperties {
    Classifiers?: List<Value<string>>;
    Description?: Value<string>;
    SchemaChangePolicy?: SchemaChangePolicy;
    Configuration?: Value<string>;
    RecrawlPolicy?: RecrawlPolicy;
    DatabaseName?: Value<string>;
    Targets: Targets;
    CrawlerSecurityConfiguration?: Value<string>;
    Name?: Value<string>;
    Role: Value<string>;
    Schedule?: Schedule;
    TablePrefix?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
}
export default class Crawler extends ResourceBase<CrawlerProperties> {
    static CatalogTarget: typeof CatalogTarget;
    static DeltaTarget: typeof DeltaTarget;
    static DynamoDBTarget: typeof DynamoDBTarget;
    static IcebergTarget: typeof IcebergTarget;
    static JdbcTarget: typeof JdbcTarget;
    static MongoDBTarget: typeof MongoDBTarget;
    static RecrawlPolicy: typeof RecrawlPolicy;
    static S3Target: typeof S3Target;
    static Schedule: typeof Schedule;
    static SchemaChangePolicy: typeof SchemaChangePolicy;
    static Targets: typeof Targets;
    constructor(properties: CrawlerProperties);
}
