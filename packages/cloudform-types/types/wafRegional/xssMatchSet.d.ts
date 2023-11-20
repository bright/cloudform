import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FieldToMatch {
    Type: Value<string>;
    Data?: Value<string>;
    constructor(properties: FieldToMatch);
}
export declare class XssMatchTuple {
    TextTransformation: Value<string>;
    FieldToMatch: FieldToMatch;
    constructor(properties: XssMatchTuple);
}
export interface XssMatchSetProperties {
    XssMatchTuples?: List<XssMatchTuple>;
    Name: Value<string>;
}
export default class XssMatchSet extends ResourceBase<XssMatchSetProperties> {
    static FieldToMatch: typeof FieldToMatch;
    static XssMatchTuple: typeof XssMatchTuple;
    constructor(properties: XssMatchSetProperties);
}
