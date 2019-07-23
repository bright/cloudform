import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CorsRule {
    AllowedMethods?: List<Value<string>>;
    AllowedOrigins?: List<Value<string>>;
    ExposeHeaders?: List<Value<string>>;
    MaxAgeSeconds?: Value<number>;
    AllowedHeaders?: List<Value<string>>;
    constructor(properties: CorsRule);
}
export interface ContainerProperties {
    Policy?: Value<string>;
    ContainerName: Value<string>;
    CorsPolicy?: List<CorsRule>;
    LifecyclePolicy?: Value<string>;
    AccessLoggingEnabled?: Value<boolean>;
}
export default class Container extends ResourceBase<ContainerProperties> {
    static CorsRule: typeof CorsRule;
    constructor(properties: ContainerProperties);
}
