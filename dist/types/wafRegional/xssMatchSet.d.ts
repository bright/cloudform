import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface XssMatchTupleProperties {
    TextTransformation: Value<string>;
    FieldToMatch: FieldToMatch;
}
export declare class XssMatchTuple extends ResourceBase {
    constructor(properties: XssMatchTupleProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface FieldToMatchProperties {
    Type: Value<string>;
    Data?: Value<string>;
}
export declare class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface XssMatchSetProperties {
    XssMatchTuples?: XssMatchTuple[];
    Name: Value<string>;
}
export default class XssMatchSet extends ResourceBase {
    constructor(properties: XssMatchSetProperties, dependsOn?: Value<string> | Value<string>[]);
}
