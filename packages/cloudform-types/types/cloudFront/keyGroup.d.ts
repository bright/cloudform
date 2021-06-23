import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class KeyGroupConfig {
    Comment?: Value<string>;
    Items: List<Value<string>>;
    Name: Value<string>;
    constructor(properties: KeyGroupConfig);
}
export interface KeyGroupProperties {
    KeyGroupConfig: KeyGroupConfig;
}
export default class KeyGroup extends ResourceBase<KeyGroupProperties> {
    static KeyGroupConfig: typeof KeyGroupConfig;
    constructor(properties: KeyGroupProperties);
}
