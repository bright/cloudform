import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FieldToMatch {
    Data?: Value<string>;
    Type: Value<string>;
    constructor(properties: FieldToMatch);
}
export declare class ByteMatchTuple {
    FieldToMatch: FieldToMatch;
    PositionalConstraint: Value<string>;
    TargetString?: Value<string>;
    TargetStringBase64?: Value<string>;
    TextTransformation: Value<string>;
    constructor(properties: ByteMatchTuple);
}
export interface ByteMatchSetProperties {
    ByteMatchTuples?: List<ByteMatchTuple>;
    Name: Value<string>;
}
export default class ByteMatchSet extends ResourceBase<ByteMatchSetProperties> {
    static FieldToMatch: typeof FieldToMatch;
    static ByteMatchTuple: typeof ByteMatchTuple;
    constructor(properties: ByteMatchSetProperties);
}
