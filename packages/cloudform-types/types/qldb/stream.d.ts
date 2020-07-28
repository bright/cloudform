import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class KinesisConfiguration {
    StreamArn?: Value<string>;
    AggregationEnabled?: Value<boolean>;
    constructor(properties: KinesisConfiguration);
}
export interface StreamProperties {
    LedgerName: Value<string>;
    StreamName: Value<string>;
    RoleArn: Value<string>;
    InclusiveStartTime: Value<string>;
    ExclusiveEndTime?: Value<string>;
    KinesisConfiguration: KinesisConfiguration;
    Tags?: List<ResourceTag>;
}
export default class Stream extends ResourceBase<StreamProperties> {
    static KinesisConfiguration: typeof KinesisConfiguration;
    constructor(properties: StreamProperties);
}
