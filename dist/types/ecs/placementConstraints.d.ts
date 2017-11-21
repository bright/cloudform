import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Type = "*" | "distinctInstance" | "memberOf";
export interface PlacementConstraintsProperties {
    Type?: Value<Type>;
    Expression?: Value<string>;
}
export default class PlacementConstraints extends ResourceBase {
    constructor(properties: PlacementConstraintsProperties, dependsOn?: Value<string>);
}
