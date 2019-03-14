import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PipelineConfig {
    Functions?: List<Value<string>>;
    constructor(properties: PipelineConfig);
}
export interface ResolverProperties {
    ResponseMappingTemplateS3Location?: Value<string>;
    TypeName: Value<string>;
    PipelineConfig?: PipelineConfig;
    DataSourceName?: Value<string>;
    RequestMappingTemplate?: Value<string>;
    ResponseMappingTemplate?: Value<string>;
    Kind?: Value<string>;
    RequestMappingTemplateS3Location?: Value<string>;
    ApiId: Value<string>;
    FieldName: Value<string>;
}
export default class Resolver extends ResourceBase<ResolverProperties> {
    static PipelineConfig: typeof PipelineConfig;
    constructor(properties: ResolverProperties);
}
