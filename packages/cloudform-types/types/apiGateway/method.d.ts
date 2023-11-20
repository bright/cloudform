import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Integration {
    CacheKeyParameters?: List<Value<string>>;
    CacheNamespace?: Value<string>;
    ConnectionId?: Value<string>;
    ConnectionType?: Value<string>;
    ContentHandling?: Value<string>;
    Credentials?: Value<string>;
    IntegrationHttpMethod?: Value<string>;
    IntegrationResponses?: List<IntegrationResponse>;
    PassthroughBehavior?: Value<string>;
    RequestParameters?: {
        [key: string]: Value<string>;
    };
    RequestTemplates?: {
        [key: string]: Value<string>;
    };
    TimeoutInMillis?: Value<number>;
    Type: Value<string>;
    Uri?: Value<string>;
    constructor(properties: Integration);
}
export declare class IntegrationResponse {
    ContentHandling?: Value<string>;
    ResponseParameters?: {
        [key: string]: Value<string>;
    };
    ResponseTemplates?: {
        [key: string]: Value<string>;
    };
    SelectionPattern?: Value<string>;
    StatusCode: Value<string>;
    constructor(properties: IntegrationResponse);
}
export declare class MethodResponse {
    ResponseModels?: {
        [key: string]: Value<string>;
    };
    ResponseParameters?: {
        [key: string]: Value<string>;
    };
    StatusCode: Value<string>;
    constructor(properties: MethodResponse);
}
export interface MethodProperties {
    ApiKeyRequired?: Value<boolean>;
    AuthorizationScopes?: List<Value<string>>;
    AuthorizationType?: Value<string>;
    AuthorizerId?: Value<string>;
    HttpMethod: Value<string>;
    Integration?: Integration;
    MethodResponses?: List<MethodResponse>;
    OperationName?: Value<string>;
    RequestModels?: {
        [key: string]: Value<string>;
    };
    RequestParameters?: {
        [key: string]: Value<string>;
    };
    RequestValidatorId?: Value<string>;
    ResourceId: Value<string>;
    RestApiId: Value<string>;
}
export default class Method extends ResourceBase<MethodProperties> {
    static Integration: typeof Integration;
    static IntegrationResponse: typeof IntegrationResponse;
    static MethodResponse: typeof MethodResponse;
    constructor(properties: MethodProperties);
}
