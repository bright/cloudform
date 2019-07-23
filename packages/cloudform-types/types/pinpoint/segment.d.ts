import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Coordinates {
    Latitude: Value<number>;
    Longitude: Value<number>;
    constructor(properties: Coordinates);
}
export declare class Groups {
    Type?: Value<string>;
    SourceType?: Value<string>;
    Dimensions?: List<SegmentDimensions>;
    SourceSegments?: List<SourceSegments>;
    constructor(properties: Groups);
}
export declare class Behavior {
    Recency?: Recency;
    constructor(properties: Behavior);
}
export declare class SegmentDimensions {
    Demographic?: Demographic;
    Metrics?: {
        [key: string]: any;
    };
    Attributes?: {
        [key: string]: any;
    };
    Behavior?: Behavior;
    UserAttributes?: {
        [key: string]: any;
    };
    Location?: Location;
    constructor(properties: SegmentDimensions);
}
export declare class SourceSegments {
    Version?: Value<number>;
    Id: Value<string>;
    constructor(properties: SourceSegments);
}
export declare class Location {
    GPSPoint?: GPSPoint;
    Country?: SetDimension;
    constructor(properties: Location);
}
export declare class AttributeDimension {
    AttributeType?: Value<string>;
    Values?: List<Value<string>>;
    constructor(properties: AttributeDimension);
}
export declare class GPSPoint {
    RangeInKilometers: Value<number>;
    Coordinates: Coordinates;
    constructor(properties: GPSPoint);
}
export declare class Demographic {
    AppVersion?: SetDimension;
    DeviceType?: SetDimension;
    Platform?: SetDimension;
    Channel?: SetDimension;
    Model?: SetDimension;
    Make?: SetDimension;
    constructor(properties: Demographic);
}
export declare class Recency {
    Duration: Value<string>;
    RecencyType: Value<string>;
    constructor(properties: Recency);
}
export declare class SegmentGroups {
    Groups?: List<Groups>;
    Include?: Value<string>;
    constructor(properties: SegmentGroups);
}
export declare class SetDimension {
    DimensionType?: Value<string>;
    Values?: List<Value<string>>;
    constructor(properties: SetDimension);
}
export interface SegmentProperties {
    SegmentGroups?: SegmentGroups;
    Dimensions?: SegmentDimensions;
    ApplicationId: Value<string>;
    Name: Value<string>;
}
export default class Segment extends ResourceBase<SegmentProperties> {
    static Coordinates: typeof Coordinates;
    static Groups: typeof Groups;
    static Behavior: typeof Behavior;
    static SegmentDimensions: typeof SegmentDimensions;
    static SourceSegments: typeof SourceSegments;
    static Location: typeof Location;
    static AttributeDimension: typeof AttributeDimension;
    static GPSPoint: typeof GPSPoint;
    static Demographic: typeof Demographic;
    static Recency: typeof Recency;
    static SegmentGroups: typeof SegmentGroups;
    static SetDimension: typeof SetDimension;
    constructor(properties: SegmentProperties);
}
