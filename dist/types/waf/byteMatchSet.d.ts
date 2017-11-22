import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ByteMatchTupleProperties {
    FieldToMatch: FieldToMatch;
    PositionalConstraint: Value<string>;
    TargetString?: Value<string>;
    TargetStringBase64?: Value<string>;
    TextTransformation: Value<string>;
}
export declare class ByteMatchTuple extends ResourceBase {
    constructor(properties: ByteMatchTupleProperties, dependsOn?: Value<string>);
}
export interface FieldToMatchProperties {
    Data?: Value<string>;
    Type: Value<string>;
}
export declare class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string>);
}
export interface ByteMatchSetProperties {
    ByteMatchTuples?: ByteMatchTuple[];
    Name: Value<string>;
}
export default class ByteMatchSet extends ResourceBase {
    constructor(properties: ByteMatchSetProperties, dependsOn?: Value<string>);
}
