import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface SqlInjectionMatchTupleProperties {
    FieldToMatch: FieldToMatch;
    TextTransformation: Value<string>;
}
export declare class SqlInjectionMatchTuple extends ResourceBase {
    constructor(properties: SqlInjectionMatchTupleProperties, dependsOn?: Value<string>);
}
export interface FieldToMatchProperties {
    Data?: Value<string>;
    Type: Value<string>;
}
export declare class FieldToMatch extends ResourceBase {
    constructor(properties: FieldToMatchProperties, dependsOn?: Value<string>);
}
export interface SqlInjectionMatchSetProperties {
    Name: Value<string>;
    SqlInjectionMatchTuples?: SqlInjectionMatchTuple[];
}
export default class SqlInjectionMatchSet extends ResourceBase {
    constructor(properties: SqlInjectionMatchSetProperties, dependsOn?: Value<string>);
}
