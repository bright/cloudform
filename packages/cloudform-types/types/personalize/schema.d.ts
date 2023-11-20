import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SchemaProperties {
    Schema: Value<string>;
    Domain?: Value<string>;
    Name: Value<string>;
}
export default class Schema extends ResourceBase<SchemaProperties> {
    constructor(properties: SchemaProperties);
}
