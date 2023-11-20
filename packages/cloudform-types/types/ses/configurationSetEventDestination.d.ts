import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CloudWatchDestination {
    DimensionConfigurations?: List<DimensionConfiguration>;
    constructor(properties: CloudWatchDestination);
}
export declare class DimensionConfiguration {
    DimensionValueSource: Value<string>;
    DefaultDimensionValue: Value<string>;
    DimensionName: Value<string>;
    constructor(properties: DimensionConfiguration);
}
export declare class EventDestination {
    SnsDestination?: SnsDestination;
    CloudWatchDestination?: CloudWatchDestination;
    Enabled?: Value<boolean>;
    MatchingEventTypes: List<Value<string>>;
    Name?: Value<string>;
    KinesisFirehoseDestination?: KinesisFirehoseDestination;
    constructor(properties: EventDestination);
}
export declare class KinesisFirehoseDestination {
    IAMRoleARN: Value<string>;
    DeliveryStreamARN: Value<string>;
    constructor(properties: KinesisFirehoseDestination);
}
export declare class SnsDestination {
    TopicARN: Value<string>;
    constructor(properties: SnsDestination);
}
export interface ConfigurationSetEventDestinationProperties {
    ConfigurationSetName: Value<string>;
    EventDestination: EventDestination;
}
export default class ConfigurationSetEventDestination extends ResourceBase<ConfigurationSetEventDestinationProperties> {
    static CloudWatchDestination: typeof CloudWatchDestination;
    static DimensionConfiguration: typeof DimensionConfiguration;
    static EventDestination: typeof EventDestination;
    static KinesisFirehoseDestination: typeof KinesisFirehoseDestination;
    static SnsDestination: typeof SnsDestination;
    constructor(properties: ConfigurationSetEventDestinationProperties);
}
