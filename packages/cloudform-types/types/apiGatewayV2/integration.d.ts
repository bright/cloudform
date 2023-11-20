import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ResponseParameter {
    Destination: Value<string>;
    Source: Value<string>;
    constructor(properties: ResponseParameter);
}
export declare class ResponseParameterList {
    ResponseParameters?: List<ResponseParameter>;
    constructor(properties: ResponseParameterList);
}
export declare class TlsConfig {
    ServerNameToVerify?: Value<string>;
    constructor(properties: TlsConfig);
}
export interface IntegrationProperties {
    Description?: Value<string>;
    TemplateSelectionExpression?: Value<string>;
    ConnectionType?: Value<string>;
    ResponseParameters?: {
        [key: string]: any;
    };
    IntegrationMethod?: Value<string>;
    PassthroughBehavior?: Value<string>;
    RequestParameters?: {
        [key: string]: any;
    };
    ConnectionId?: Value<string>;
    IntegrationUri?: Value<string>;
    PayloadFormatVersion?: Value<string>;
    CredentialsArn?: Value<string>;
    RequestTemplates?: {
        [key: string]: any;
    };
    TimeoutInMillis?: Value<number>;
    TlsConfig?: TlsConfig;
    ContentHandlingStrategy?: Value<string>;
    IntegrationSubtype?: Value<string>;
    ApiId: Value<string>;
    IntegrationType: Value<string>;
}
export default class Integration extends ResourceBase<IntegrationProperties> {
    static ResponseParameter: typeof ResponseParameter;
    static ResponseParameterList: typeof ResponseParameterList;
    static TlsConfig: typeof TlsConfig;
    constructor(properties: IntegrationProperties);
}
