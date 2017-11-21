import { ResourceBase } from '../resource';
import { Value } from '../internal';
import FieldToMatch from './fieldToMatch';
export interface SqlInjectionMatchTuplesProperties {
    FieldToMatch: FieldToMatch;
}
export default class SqlInjectionMatchTuples extends ResourceBase {
    constructor(properties: SqlInjectionMatchTuplesProperties, dependsOn?: Value<string>);
}
