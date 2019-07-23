import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SqlInjectionMatchTuple {
    TextTransformation: Value<string>;
    FieldToMatch: FieldToMatch;
    constructor(properties: SqlInjectionMatchTuple);
}
export declare class FieldToMatch {
    Type: Value<string>;
    Data?: Value<string>;
    constructor(properties: FieldToMatch);
}
export interface SqlInjectionMatchSetProperties {
    SqlInjectionMatchTuples?: List<SqlInjectionMatchTuple>;
    Name: Value<string>;
}
export default class SqlInjectionMatchSet extends ResourceBase<SqlInjectionMatchSetProperties> {
    static SqlInjectionMatchTuple: typeof SqlInjectionMatchTuple;
    static FieldToMatch: typeof FieldToMatch;
    constructor(properties: SqlInjectionMatchSetProperties);
}
