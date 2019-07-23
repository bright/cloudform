import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class XssMatchTuple {
    FieldToMatch: FieldToMatch;
    TextTransformation: Value<string>;
    constructor(properties: XssMatchTuple);
}
export declare class FieldToMatch {
    Data?: Value<string>;
    Type: Value<string>;
    constructor(properties: FieldToMatch);
}
export interface XssMatchSetProperties {
    Name: Value<string>;
    XssMatchTuples: List<XssMatchTuple>;
}
export default class XssMatchSet extends ResourceBase<XssMatchSetProperties> {
    static XssMatchTuple: typeof XssMatchTuple;
    static FieldToMatch: typeof FieldToMatch;
    constructor(properties: XssMatchSetProperties);
}
