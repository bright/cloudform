import { ResourceBase } from '../resource';
import { Value } from '../internal';
import FieldToMatch from './fieldToMatch';
export interface SqlInjectionMatchTupleProperties {
    FieldToMatch: FieldToMatch;
    TextTransformation: Value<string>;
}
export default class SqlInjectionMatchTuple extends ResourceBase {
    constructor(properties: SqlInjectionMatchTupleProperties, dependsOn?: Value<string>);
}
