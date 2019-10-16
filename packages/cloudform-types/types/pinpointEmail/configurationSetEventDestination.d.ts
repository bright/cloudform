import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DimensionConfiguration {
    DimensionValueSource: Value<string>;
    DefaultDimensionValue: Value<string>;
    DimensionName: Value<string>;
    constructor(properties: DimensionConfiguration);
}
export declare class SnsDestination {
    TopicArn: Value<string>;
    constructor(properties: SnsDestination);
}
export declare class PinpointDestination {
    ApplicationArn?: Value<string>;
    constructor(properties: PinpointDestination);
}
export declare class CloudWatchDestination {
    DimensionConfigurations?: List<DimensionConfiguration>;
    constructor(properties: CloudWatchDestination);
}
export declare class KinesisFirehoseDestination {
    DeliveryStreamArn: Value<string>;
    IamRoleArn: Value<string>;
    constructor(properties: KinesisFirehoseDestination);
}
export declare class EventDestination {
    SnsDestination?: SnsDestination;
    CloudWatchDestination?: CloudWatchDestination;
    Enabled?: Value<boolean>;
    MatchingEventTypes: List<Value<string>>;
    PinpointDestination?: PinpointDestination;
    KinesisFirehoseDestination?: KinesisFirehoseDestination;
    constructor(properties: EventDestination);
}
export interface ConfigurationSetEventDestinationProperties {
    EventDestinationName: Value<string>;
    ConfigurationSetName: Value<string>;
    EventDestination?: EventDestination;
}
export default class ConfigurationSetEventDestination extends ResourceBase<ConfigurationSetEventDestinationProperties> {
    static DimensionConfiguration: typeof DimensionConfiguration;
    static SnsDestination: typeof SnsDestination;
    static PinpointDestination: typeof PinpointDestination;
    static CloudWatchDestination: typeof CloudWatchDestination;
    static KinesisFirehoseDestination: typeof KinesisFirehoseDestination;
    static EventDestination: typeof EventDestination;
    constructor(properties: ConfigurationSetEventDestinationProperties);
}
