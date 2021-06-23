import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SelfManagedEventSource {
    Endpoints?: Endpoints;
    constructor(properties: SelfManagedEventSource);
}
export declare class OnFailure {
    Destination?: Value<string>;
    constructor(properties: OnFailure);
}
export declare class SourceAccessConfiguration {
    Type?: Value<string>;
    URI?: Value<string>;
    constructor(properties: SourceAccessConfiguration);
}
export declare class Endpoints {
    KafkaBootstrapServers?: List<Value<string>>;
    constructor(properties: Endpoints);
}
export declare class DestinationConfig {
    OnFailure?: OnFailure;
    constructor(properties: DestinationConfig);
}
export interface EventSourceMappingProperties {
    BatchSize?: Value<number>;
    BisectBatchOnFunctionError?: Value<boolean>;
    DestinationConfig?: DestinationConfig;
    Enabled?: Value<boolean>;
    EventSourceArn?: Value<string>;
    FunctionName: Value<string>;
    MaximumBatchingWindowInSeconds?: Value<number>;
    MaximumRecordAgeInSeconds?: Value<number>;
    MaximumRetryAttempts?: Value<number>;
    ParallelizationFactor?: Value<number>;
    StartingPosition?: Value<string>;
    Topics?: List<Value<string>>;
    Queues?: List<Value<string>>;
    SourceAccessConfigurations?: List<SourceAccessConfiguration>;
    TumblingWindowInSeconds?: Value<number>;
    FunctionResponseTypes?: List<Value<string>>;
    SelfManagedEventSource?: SelfManagedEventSource;
}
export default class EventSourceMapping extends ResourceBase<EventSourceMappingProperties> {
    static SelfManagedEventSource: typeof SelfManagedEventSource;
    static OnFailure: typeof OnFailure;
    static SourceAccessConfiguration: typeof SourceAccessConfiguration;
    static Endpoints: typeof Endpoints;
    static DestinationConfig: typeof DestinationConfig;
    constructor(properties: EventSourceMappingProperties);
}
