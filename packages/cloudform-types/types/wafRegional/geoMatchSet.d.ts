import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class GeoMatchConstraint {
    Type: Value<string>;
    Value: Value<string>;
    constructor(properties: GeoMatchConstraint);
}
export interface GeoMatchSetProperties {
    GeoMatchConstraints?: List<GeoMatchConstraint>;
    Name: Value<string>;
}
export default class GeoMatchSet extends ResourceBase<GeoMatchSetProperties> {
    static GeoMatchConstraint: typeof GeoMatchConstraint;
    constructor(properties: GeoMatchSetProperties);
}
