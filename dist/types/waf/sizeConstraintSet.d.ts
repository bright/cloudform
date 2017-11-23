import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface FieldToMatchProperties {
    Data?: Value<string>;
    Type: Value<string>;
}
export declare class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string>);
}
export interface SizeConstraintProperties {
    ComparisonOperator: Value<string>;
    FieldToMatch: FieldToMatch;
    Size: Value<number>;
    TextTransformation: Value<string>;
}
export declare class SizeConstraint extends ResourceBase {
    constructor(properties: SizeConstraintProperties, dependsOn?: Value<string>);
}
export interface SizeConstraintSetProperties {
    Name: Value<string>;
    SizeConstraints: SizeConstraint[];
}
export default class SizeConstraintSet extends ResourceBase {
    constructor(properties: SizeConstraintSetProperties, dependsOn?: Value<string>);
}
