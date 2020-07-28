import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LambdaConflictHandlerConfig {
    LambdaConflictHandlerArn?: Value<string>;
    constructor(properties: LambdaConflictHandlerConfig);
}
export declare class PipelineConfig {
    Functions?: List<Value<string>>;
    constructor(properties: PipelineConfig);
}
export declare class SyncConfig {
    ConflictHandler?: Value<string>;
    ConflictDetection: Value<string>;
    LambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
    constructor(properties: SyncConfig);
}
export declare class CachingConfig {
    CachingKeys?: List<Value<string>>;
    Ttl?: Value<number>;
    constructor(properties: CachingConfig);
}
export interface ResolverProperties {
    ResponseMappingTemplateS3Location?: Value<string>;
    TypeName: Value<string>;
    PipelineConfig?: PipelineConfig;
    DataSourceName?: Value<string>;
    RequestMappingTemplate?: Value<string>;
    ResponseMappingTemplate?: Value<string>;
    Kind?: Value<string>;
    CachingConfig?: CachingConfig;
    SyncConfig?: SyncConfig;
    RequestMappingTemplateS3Location?: Value<string>;
    ApiId: Value<string>;
    FieldName: Value<string>;
}
export default class Resolver extends ResourceBase<ResolverProperties> {
    static LambdaConflictHandlerConfig: typeof LambdaConflictHandlerConfig;
    static PipelineConfig: typeof PipelineConfig;
    static SyncConfig: typeof SyncConfig;
    static CachingConfig: typeof CachingConfig;
    constructor(properties: ResolverProperties);
}
