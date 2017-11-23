import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface FieldToMatchProperties {
    Data?: Value<string>;
    Type: Value<string>;
}
export declare class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface XssMatchTupleProperties {
    FieldToMatch: FieldToMatch;
    TextTransformation: Value<string>;
}
export declare class XssMatchTuple extends ResourceBase {
    constructor(properties: XssMatchTupleProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface XssMatchSetProperties {
    Name: Value<string>;
    XssMatchTuples: List<XssMatchTuple>;
}
export default class XssMatchSet extends ResourceBase {
    constructor(properties: XssMatchSetProperties, dependsOn?: Value<string> | Value<string>[]);
}
