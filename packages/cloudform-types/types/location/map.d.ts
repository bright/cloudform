import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class MapConfiguration {
    Style: Value<string>;
    constructor(properties: MapConfiguration);
}
export interface MapProperties {
    Configuration: MapConfiguration;
    Description?: Value<string>;
    MapName: Value<string>;
    PricingPlan: Value<string>;
}
export default class Map extends ResourceBase<MapProperties> {
    static MapConfiguration: typeof MapConfiguration;
    constructor(properties: MapProperties);
}
