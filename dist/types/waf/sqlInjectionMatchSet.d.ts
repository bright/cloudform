import { ResourceBase } from '../resource';
import { Value } from '../internal';
import SqlInjectionMatchTuples from './sqlInjectionMatchTuples';
export interface SqlInjectionMatchSetProperties {
    Name: Value<string>;
    SqlInjectionMatchTuples?: SqlInjectionMatchTuples;
}
export default class SqlInjectionMatchSet extends ResourceBase {
    constructor(properties: SqlInjectionMatchSetProperties, dependsOn?: Value<string>);
}
