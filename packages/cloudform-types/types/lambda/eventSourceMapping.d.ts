import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class OnFailure {
    Destination: Value<string>;
    constructor(properties: OnFailure);
}
export declare class DestinationConfig {
    OnFailure: OnFailure;
    constructor(properties: DestinationConfig);
}
export interface EventSourceMappingProperties {
    BatchSize?: Value<number>;
    BisectBatchOnFunctionError?: Value<boolean>;
    DestinationConfig?: DestinationConfig;
    Enabled?: Value<boolean>;
    EventSourceArn: Value<string>;
    FunctionName: Value<string>;
    MaximumBatchingWindowInSeconds?: Value<number>;
    MaximumRecordAgeInSeconds?: Value<number>;
    MaximumRetryAttempts?: Value<number>;
    ParallelizationFactor?: Value<number>;
    StartingPosition?: Value<string>;
}
export default class EventSourceMapping extends ResourceBase<EventSourceMappingProperties> {
    static OnFailure: typeof OnFailure;
    static DestinationConfig: typeof DestinationConfig;
    constructor(properties: EventSourceMappingProperties);
}
