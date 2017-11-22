import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface MethodResponseProperties {
    ResponseModels?: {
        [key: string]: Value<string>;
    };
    ResponseParameters?: {
        [key: string]: Value<boolean>;
    };
    StatusCode: Value<string>;
}
export declare class MethodResponse extends ResourceBase {
    constructor(properties: MethodResponseProperties, dependsOn?: Value<string>);
}
export interface IntegrationProperties {
    CacheKeyParameters?: Value<string>[];
    CacheNamespace?: Value<string>;
    ContentHandling?: Value<string>;
    Credentials?: Value<string>;
    IntegrationHttpMethod?: Value<string>;
    IntegrationResponses?: IntegrationResponse[];
    PassthroughBehavior?: Value<string>;
    RequestParameters?: {
        [key: string]: Value<string>;
    };
    RequestTemplates?: {
        [key: string]: Value<string>;
    };
    Type?: Value<string>;
    Uri?: Value<string>;
}
export declare class Integration extends ResourceBase {
    constructor(properties: IntegrationProperties, dependsOn?: Value<string>);
}
export interface IntegrationResponseProperties {
    ContentHandling?: Value<string>;
    ResponseParameters?: {
        [key: string]: Value<string>;
    };
    ResponseTemplates?: {
        [key: string]: Value<string>;
    };
    SelectionPattern?: Value<string>;
    StatusCode: Value<string>;
}
export declare class IntegrationResponse extends ResourceBase {
    constructor(properties: IntegrationResponseProperties, dependsOn?: Value<string>);
}
export interface MethodProperties {
    ApiKeyRequired?: Value<boolean>;
    AuthorizationType?: Value<string>;
    AuthorizerId?: Value<string>;
    HttpMethod: Value<string>;
    Integration?: Integration;
    MethodResponses?: MethodResponse[];
    OperationName?: Value<string>;
    RequestModels?: {
        [key: string]: Value<string>;
    };
    RequestParameters?: {
        [key: string]: Value<boolean>;
    };
    RequestValidatorId?: Value<string>;
    ResourceId: Value<string>;
    RestApiId: Value<string>;
}
export default class Method extends ResourceBase {
    constructor(properties: MethodProperties, dependsOn?: Value<string>);
}
