import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class MapConfiguration {
    Style: Value<string>;
    constructor(properties: MapConfiguration);
}
export interface MapProperties {
    MapName: Value<string>;
    Description?: Value<string>;
    Configuration: MapConfiguration;
    PricingPlan?: Value<string>;
}
export default class Map extends ResourceBase<MapProperties> {
    static MapConfiguration: typeof MapConfiguration;
    constructor(properties: MapProperties);
}
