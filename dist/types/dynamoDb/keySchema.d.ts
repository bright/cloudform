import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type KeyType = "HASH" | "RANGE";
export interface KeySchemaProperties {
    AttributeName: Value<string>;
    KeyType: Value<KeyType>;
}
export default class KeySchema extends ResourceBase {
    constructor(properties: KeySchemaProperties, dependsOn?: Value<string>);
}
