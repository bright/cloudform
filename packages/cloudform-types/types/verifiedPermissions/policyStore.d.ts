import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class SchemaDefinition {
    CedarJson?: Value<string>;
    constructor(properties: SchemaDefinition);
}
export declare class ValidationSettings {
    Mode: Value<string>;
    constructor(properties: ValidationSettings);
}
export interface PolicyStoreProperties {
    ValidationSettings: ValidationSettings;
    Schema?: SchemaDefinition;
}
export default class PolicyStore extends ResourceBase<PolicyStoreProperties> {
    static SchemaDefinition: typeof SchemaDefinition;
    static ValidationSettings: typeof ValidationSettings;
    constructor(properties: PolicyStoreProperties);
}
