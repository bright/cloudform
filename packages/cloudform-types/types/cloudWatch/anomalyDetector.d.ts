import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Range {
    EndTime: Value<string>;
    StartTime: Value<string>;
    constructor(properties: Range);
}
export declare class Dimension {
    Value: Value<string>;
    Name: Value<string>;
    constructor(properties: Dimension);
}
export declare class Configuration {
    MetricTimeZone?: Value<string>;
    ExcludedTimeRanges?: List<Range>;
    constructor(properties: Configuration);
}
export interface AnomalyDetectorProperties {
    MetricName: Value<string>;
    Stat: Value<string>;
    Configuration?: Configuration;
    Dimensions?: List<Dimension>;
    Namespace: Value<string>;
}
export default class AnomalyDetector extends ResourceBase<AnomalyDetectorProperties> {
    static Range: typeof Range;
    static Dimension: typeof Dimension;
    static Configuration: typeof Configuration;
    constructor(properties: AnomalyDetectorProperties);
}
