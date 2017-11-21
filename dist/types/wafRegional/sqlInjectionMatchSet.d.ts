import { ResourceBase } from '../resource';
import { Value } from '../internal';
import SqlInjectionMatchTuple from './sqlInjectionMatchTuple';
export interface SqlInjectionMatchSetProperties {
    Name: Value<string>;
    SqlInjectionMatchTuples: SqlInjectionMatchTuple[];
}
export default class SqlInjectionMatchSet extends ResourceBase {
    constructor(properties: SqlInjectionMatchSetProperties, dependsOn?: Value<string>);
}
