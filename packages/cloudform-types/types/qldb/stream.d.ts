import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class KinesisConfiguration {
    AggregationEnabled?: Value<boolean>;
    StreamArn?: Value<string>;
    constructor(properties: KinesisConfiguration);
}
export interface StreamProperties {
    InclusiveStartTime: Value<string>;
    StreamName: Value<string>;
    KinesisConfiguration: KinesisConfiguration;
    ExclusiveEndTime?: Value<string>;
    LedgerName: Value<string>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Stream extends ResourceBase<StreamProperties> {
    static KinesisConfiguration: typeof KinesisConfiguration;
    constructor(properties: StreamProperties);
}
