import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Targets {
    S3Targets?: List<S3Target>;
    JdbcTargets?: List<JdbcTarget>;
    constructor(properties: Targets);
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
export declare class S3Target {
    Path?: Value<string>;
    Exclusions?: List<Value<string>>;
    constructor(properties: S3Target);
}
export declare class SchemaChangePolicy {
    UpdateBehavior?: Value<string>;
    DeleteBehavior?: Value<string>;
    constructor(properties: SchemaChangePolicy);
}
export interface CrawlerProperties {
    Role: Value<string>;
    Classifiers?: List<Value<string>>;
    Description?: Value<string>;
    SchemaChangePolicy?: SchemaChangePolicy;
    Schedule?: Schedule;
    DatabaseName: Value<string>;
    Targets: Targets;
    TablePrefix?: Value<string>;
    Name?: Value<string>;
}
export default class Crawler extends ResourceBase {
    constructor(properties?: CrawlerProperties);
}
