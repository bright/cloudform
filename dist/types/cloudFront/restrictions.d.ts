import { ResourceBase } from '../resource';
import { Value } from '../internal';
import GeoRestriction from './geoRestriction';
export interface RestrictionsProperties {
    GeoRestriction?: GeoRestriction;
}
export default class Restrictions extends ResourceBase {
    constructor(properties: RestrictionsProperties, dependsOn?: Value<string>);
}
