import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MultiplexMediaConnectOutputDestinationSettings {
    EntitlementArn?: Value<string>;
    constructor(properties: MultiplexMediaConnectOutputDestinationSettings);
}
export declare class MultiplexOutputDestination {
    MultiplexMediaConnectOutputDestinationSettings?: MultiplexMediaConnectOutputDestinationSettings;
    constructor(properties: MultiplexOutputDestination);
}
export declare class MultiplexSettings {
    TransportStreamBitrate: Value<number>;
    MaximumVideoBufferDelayMilliseconds?: Value<number>;
    TransportStreamId: Value<number>;
    TransportStreamReservedBitrate?: Value<number>;
    constructor(properties: MultiplexSettings);
}
export declare class Tags {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Tags);
}
export interface MultiplexProperties {
    MultiplexSettings: MultiplexSettings;
    AvailabilityZones: List<Value<string>>;
    Destinations?: List<MultiplexOutputDestination>;
    Tags?: List<Tags>;
    Name: Value<string>;
}
export default class Multiplex extends ResourceBase<MultiplexProperties> {
    static MultiplexMediaConnectOutputDestinationSettings: typeof MultiplexMediaConnectOutputDestinationSettings;
    static MultiplexOutputDestination: typeof MultiplexOutputDestination;
    static MultiplexSettings: typeof MultiplexSettings;
    static Tags: typeof Tags;
    constructor(properties: MultiplexProperties);
}
