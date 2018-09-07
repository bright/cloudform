import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ConfigurationProperties {
    EngineVersion: Value<string>;
    Description?: Value<string>;
    EngineType: Value<string>;
    Data: Value<string>;
    Name: Value<string>;
}
export default class Configuration extends ResourceBase {
    constructor(properties?: ConfigurationProperties);
}
