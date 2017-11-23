import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface SizeConstraintProperties {
    ComparisonOperator: Value<string>;
    Size: Value<number>;
    TextTransformation: Value<string>;
    FieldToMatch: FieldToMatch;
}
export declare class SizeConstraint extends ResourceBase {
    constructor(properties: SizeConstraintProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface FieldToMatchProperties {
    Type: Value<string>;
    Data?: Value<string>;
}
export declare class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface SizeConstraintSetProperties {
    SizeConstraints?: List<SizeConstraint>;
    Name: Value<string>;
}
export default class SizeConstraintSet extends ResourceBase {
    constructor(properties: SizeConstraintSetProperties, dependsOn?: Value<string> | Value<string>[]);
}
