import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface IntegrationProperties {
    Description?: Value<string>;
    TemplateSelectionExpression?: Value<string>;
    ConnectionType?: Value<string>;
    IntegrationMethod?: Value<string>;
    PassthroughBehavior?: Value<string>;
    RequestParameters?: {
        [key: string]: any;
    };
    IntegrationUri?: Value<string>;
    CredentialsArn?: Value<string>;
    RequestTemplates?: {
        [key: string]: any;
    };
    TimeoutInMillis?: Value<number>;
    ContentHandlingStrategy?: Value<string>;
    ApiId: Value<string>;
    IntegrationType: Value<string>;
}
export default class Integration extends ResourceBase<IntegrationProperties> {
    constructor(properties: IntegrationProperties);
}
