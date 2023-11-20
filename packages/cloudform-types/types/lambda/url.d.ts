import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Cors {
    AllowCredentials?: Value<boolean>;
    AllowOrigins?: List<Value<string>>;
    ExposeHeaders?: List<Value<string>>;
    AllowHeaders?: List<Value<string>>;
    MaxAge?: Value<number>;
    AllowMethods?: List<Value<string>>;
    constructor(properties: Cors);
}
export interface UrlProperties {
    Qualifier?: Value<string>;
    InvokeMode?: Value<string>;
    AuthType: Value<string>;
    TargetFunctionArn: Value<string>;
    Cors?: Cors;
}
export default class Url extends ResourceBase<UrlProperties> {
    static Cors: typeof Cors;
    constructor(properties: UrlProperties);
}
