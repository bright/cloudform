import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ByteMatchTupleProperties {
    TargetString?: Value<string>;
    TargetStringBase64?: Value<string>;
    PositionalConstraint: Value<string>;
    TextTransformation: Value<string>;
    FieldToMatch: FieldToMatch;
}
export declare class ByteMatchTuple extends ResourceBase {
    constructor(properties: ByteMatchTupleProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface FieldToMatchProperties {
    Type: Value<string>;
    Data?: Value<string>;
}
export declare class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ByteMatchSetProperties {
    ByteMatchTuples?: ByteMatchTuple[];
    Name: Value<string>;
}
export default class ByteMatchSet extends ResourceBase {
    constructor(properties: ByteMatchSetProperties, dependsOn?: Value<string> | Value<string>[]);
}
