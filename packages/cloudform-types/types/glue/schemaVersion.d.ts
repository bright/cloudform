import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Schema {
    SchemaArn?: Value<string>;
    SchemaName?: Value<string>;
    RegistryName?: Value<string>;
    constructor(properties: Schema);
}
export interface SchemaVersionProperties {
    Schema: Schema;
    SchemaDefinition: Value<string>;
}
export default class SchemaVersion extends ResourceBase<SchemaVersionProperties> {
    static Schema: typeof Schema;
    constructor(properties: SchemaVersionProperties);
}
