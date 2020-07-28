import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Targets {
    S3Targets?: List<S3Target>;
    CatalogTargets?: List<CatalogTarget>;
    JdbcTargets?: List<JdbcTarget>;
    DynamoDBTargets?: List<DynamoDBTarget>;
    constructor(properties: Targets);
}
export declare class CatalogTarget {
    DatabaseName?: Value<string>;
    Tables?: List<Value<string>>;
    constructor(properties: CatalogTarget);
}
export declare class JdbcTarget {
    ConnectionName?: Value<string>;
    Path?: Value<string>;
    Exclusions?: List<Value<string>>;
    constructor(properties: JdbcTarget);
}
export declare class Schedule {
    ScheduleExpression?: Value<string>;
    constructor(properties: Schedule);
}
export declare class DynamoDBTarget {
    Path?: Value<string>;
    constructor(properties: DynamoDBTarget);
}
export declare class SchemaChangePolicy {
    UpdateBehavior?: Value<string>;
    DeleteBehavior?: Value<string>;
    constructor(properties: SchemaChangePolicy);
}
export declare class S3Target {
    Path?: Value<string>;
    Exclusions?: List<Value<string>>;
    constructor(properties: S3Target);
}
export interface CrawlerProperties {
    Role: Value<string>;
    Classifiers?: List<Value<string>>;
    Description?: Value<string>;
    SchemaChangePolicy?: SchemaChangePolicy;
    Configuration?: Value<string>;
    Schedule?: Schedule;
    DatabaseName?: Value<string>;
    Targets: Targets;
    CrawlerSecurityConfiguration?: Value<string>;
    TablePrefix?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class Crawler extends ResourceBase<CrawlerProperties> {
    static Targets: typeof Targets;
    static CatalogTarget: typeof CatalogTarget;
    static JdbcTarget: typeof JdbcTarget;
    static Schedule: typeof Schedule;
    static DynamoDBTarget: typeof DynamoDBTarget;
    static SchemaChangePolicy: typeof SchemaChangePolicy;
    static S3Target: typeof S3Target;
    constructor(properties: CrawlerProperties);
}
