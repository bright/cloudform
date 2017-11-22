import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface XssMatchTupleProperties {
    TextTransformation: Value<string>;
    FieldToMatch: FieldToMatch;
}
export declare class XssMatchTuple extends ResourceBase {
    constructor(properties: XssMatchTupleProperties, dependsOn?: Value<string>);
}
export interface FieldToMatchProperties {
    Type: Value<string>;
    Data?: Value<string>;
}
export declare class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string>);
}
export interface XssMatchSetProperties {
    XssMatchTuples?: XssMatchTuple[];
    Name: Value<string>;
}
export default class XssMatchSet extends ResourceBase {
    constructor(properties: XssMatchSetProperties, dependsOn?: Value<string>);
}
