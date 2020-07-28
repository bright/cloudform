import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class TlsConfig {
    ServerNameToVerify?: Value<string>;
    constructor(properties: TlsConfig);
}
export interface IntegrationProperties {
    Description?: Value<string>;
    TemplateSelectionExpression?: Value<string>;
    ConnectionType?: Value<string>;
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
    ApiId: Value<string>;
    IntegrationType: Value<string>;
}
export default class Integration extends ResourceBase<IntegrationProperties> {
    static TlsConfig: typeof TlsConfig;
    constructor(properties: IntegrationProperties);
}
