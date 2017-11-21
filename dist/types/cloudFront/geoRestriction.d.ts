import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type RestrictionType = "blacklist" | "whitelist" | "none";
export interface GeoRestrictionProperties {
    Locations?: Value<string>[];
    RestrictionType: Value<RestrictionType>;
}
export default class GeoRestriction extends ResourceBase {
    constructor(properties: GeoRestrictionProperties, dependsOn?: Value<string>);
}
