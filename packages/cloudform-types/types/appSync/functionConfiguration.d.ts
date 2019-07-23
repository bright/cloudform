import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface FunctionConfigurationProperties {
    ResponseMappingTemplateS3Location?: Value<string>;
    Description?: Value<string>;
    DataSourceName: Value<string>;
    RequestMappingTemplate?: Value<string>;
    ResponseMappingTemplate?: Value<string>;
    FunctionVersion: Value<string>;
    RequestMappingTemplateS3Location?: Value<string>;
    ApiId: Value<string>;
    Name: Value<string>;
}
export default class FunctionConfiguration extends ResourceBase<FunctionConfigurationProperties> {
    constructor(properties: FunctionConfigurationProperties);
}
