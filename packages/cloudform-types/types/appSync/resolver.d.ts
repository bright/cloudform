import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AppSyncRuntime {
    RuntimeVersion: Value<string>;
    Name: Value<string>;
    constructor(properties: AppSyncRuntime);
}
export declare class CachingConfig {
    CachingKeys?: List<Value<string>>;
    Ttl: Value<number>;
    constructor(properties: CachingConfig);
}
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
export interface ResolverProperties {
    TypeName: Value<string>;
    PipelineConfig?: PipelineConfig;
    RequestMappingTemplate?: Value<string>;
    ResponseMappingTemplate?: Value<string>;
    MaxBatchSize?: Value<number>;
    SyncConfig?: SyncConfig;
    Code?: Value<string>;
    ResponseMappingTemplateS3Location?: Value<string>;
    Runtime?: AppSyncRuntime;
    CodeS3Location?: Value<string>;
    DataSourceName?: Value<string>;
    Kind?: Value<string>;
    CachingConfig?: CachingConfig;
    RequestMappingTemplateS3Location?: Value<string>;
    ApiId: Value<string>;
    FieldName: Value<string>;
}
export default class Resolver extends ResourceBase<ResolverProperties> {
    static AppSyncRuntime: typeof AppSyncRuntime;
    static CachingConfig: typeof CachingConfig;
    static LambdaConflictHandlerConfig: typeof LambdaConflictHandlerConfig;
    static PipelineConfig: typeof PipelineConfig;
    static SyncConfig: typeof SyncConfig;
    constructor(properties: ResolverProperties);
}
