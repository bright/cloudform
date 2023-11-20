import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Schema {
    RegistryName?: Value<string>;
    SchemaArn?: Value<string>;
    SchemaName?: Value<string>;
    constructor(properties: Schema);
}
export interface SchemaVersionProperties {
    SchemaDefinition: Value<string>;
    Schema: Schema;
}
export default class SchemaVersion extends ResourceBase<SchemaVersionProperties> {
    static Schema: typeof Schema;
    constructor(properties: SchemaVersionProperties);
}
