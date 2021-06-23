import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FieldToMatch {
    Data?: Value<string>;
    Type: Value<string>;
    constructor(properties: FieldToMatch);
}
export declare class SqlInjectionMatchTuple {
    FieldToMatch: FieldToMatch;
    TextTransformation: Value<string>;
    constructor(properties: SqlInjectionMatchTuple);
}
export interface SqlInjectionMatchSetProperties {
    Name: Value<string>;
    SqlInjectionMatchTuples?: List<SqlInjectionMatchTuple>;
}
export default class SqlInjectionMatchSet extends ResourceBase<SqlInjectionMatchSetProperties> {
    static FieldToMatch: typeof FieldToMatch;
    static SqlInjectionMatchTuple: typeof SqlInjectionMatchTuple;
    constructor(properties: SqlInjectionMatchSetProperties);
}
