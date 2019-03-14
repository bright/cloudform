import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface IntegrationResponseProperties {
    ResponseTemplates?: {
        [key: string]: any;
    };
    TemplateSelectionExpression?: Value<string>;
    ResponseParameters?: {
        [key: string]: any;
    };
    ContentHandlingStrategy?: Value<string>;
    IntegrationId: Value<string>;
    IntegrationResponseKey: Value<string>;
    ApiId: Value<string>;
}
export default class IntegrationResponse extends ResourceBase<IntegrationResponseProperties> {
    constructor(properties: IntegrationResponseProperties);
}
