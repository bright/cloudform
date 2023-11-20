import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AmazonManagedKafkaEventSourceConfig {
    ConsumerGroupId?: Value<string>;
    constructor(properties: AmazonManagedKafkaEventSourceConfig);
}
export declare class DestinationConfig {
    OnFailure?: OnFailure;
    constructor(properties: DestinationConfig);
}
export declare class DocumentDBEventSourceConfig {
    FullDocument?: Value<string>;
    CollectionName?: Value<string>;
    DatabaseName?: Value<string>;
    constructor(properties: DocumentDBEventSourceConfig);
}
export declare class Endpoints {
    KafkaBootstrapServers?: List<Value<string>>;
    constructor(properties: Endpoints);
}
export declare class Filter {
    Pattern?: Value<string>;
    constructor(properties: Filter);
}
export declare class FilterCriteria {
    Filters?: List<Filter>;
    constructor(properties: FilterCriteria);
}
export declare class OnFailure {
    Destination?: Value<string>;
    constructor(properties: OnFailure);
}
export declare class ScalingConfig {
    MaximumConcurrency?: Value<number>;
    constructor(properties: ScalingConfig);
}
export declare class SelfManagedEventSource {
    Endpoints?: Endpoints;
    constructor(properties: SelfManagedEventSource);
}
export declare class SelfManagedKafkaEventSourceConfig {
    ConsumerGroupId?: Value<string>;
    constructor(properties: SelfManagedKafkaEventSourceConfig);
}
export declare class SourceAccessConfiguration {
    Type?: Value<string>;
    URI?: Value<string>;
    constructor(properties: SourceAccessConfiguration);
}
export interface EventSourceMappingProperties {
    StartingPosition?: Value<string>;
    BatchSize?: Value<number>;
    MaximumRetryAttempts?: Value<number>;
    Topics?: List<Value<string>>;
    ScalingConfig?: ScalingConfig;
    SelfManagedEventSource?: SelfManagedEventSource;
    ParallelizationFactor?: Value<number>;
    Enabled?: Value<boolean>;
    FilterCriteria?: FilterCriteria;
    EventSourceArn?: Value<string>;
    SelfManagedKafkaEventSourceConfig?: SelfManagedKafkaEventSourceConfig;
    DocumentDBEventSourceConfig?: DocumentDBEventSourceConfig;
    FunctionName: Value<string>;
    TumblingWindowInSeconds?: Value<number>;
    BisectBatchOnFunctionError?: Value<boolean>;
    DestinationConfig?: DestinationConfig;
    AmazonManagedKafkaEventSourceConfig?: AmazonManagedKafkaEventSourceConfig;
    MaximumRecordAgeInSeconds?: Value<number>;
    StartingPositionTimestamp?: Value<number>;
    Queues?: List<Value<string>>;
    SourceAccessConfigurations?: List<SourceAccessConfiguration>;
    FunctionResponseTypes?: List<Value<string>>;
    MaximumBatchingWindowInSeconds?: Value<number>;
}
export default class EventSourceMapping extends ResourceBase<EventSourceMappingProperties> {
    static AmazonManagedKafkaEventSourceConfig: typeof AmazonManagedKafkaEventSourceConfig;
    static DestinationConfig: typeof DestinationConfig;
    static DocumentDBEventSourceConfig: typeof DocumentDBEventSourceConfig;
    static Endpoints: typeof Endpoints;
    static Filter: typeof Filter;
    static FilterCriteria: typeof FilterCriteria;
    static OnFailure: typeof OnFailure;
    static ScalingConfig: typeof ScalingConfig;
    static SelfManagedEventSource: typeof SelfManagedEventSource;
    static SelfManagedKafkaEventSourceConfig: typeof SelfManagedKafkaEventSourceConfig;
    static SourceAccessConfiguration: typeof SourceAccessConfiguration;
    constructor(properties: EventSourceMappingProperties);
}
