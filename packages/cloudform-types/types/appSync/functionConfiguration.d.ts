import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class AppSyncRuntime {
    RuntimeVersion: Value<string>;
    Name: Value<string>;
    constructor(properties: AppSyncRuntime);
}
export declare class LambdaConflictHandlerConfig {
    LambdaConflictHandlerArn?: Value<string>;
    constructor(properties: LambdaConflictHandlerConfig);
}
export declare class SyncConfig {
    ConflictHandler?: Value<string>;
    ConflictDetection: Value<string>;
    LambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
    constructor(properties: SyncConfig);
}
export interface FunctionConfigurationProperties {
    Description?: Value<string>;
    RequestMappingTemplate?: Value<string>;
    ResponseMappingTemplate?: Value<string>;
    MaxBatchSize?: Value<number>;
    SyncConfig?: SyncConfig;
    Code?: Value<string>;
    Name: Value<string>;
    ResponseMappingTemplateS3Location?: Value<string>;
    Runtime?: AppSyncRuntime;
    CodeS3Location?: Value<string>;
    DataSourceName: Value<string>;
    FunctionVersion?: Value<string>;
    RequestMappingTemplateS3Location?: Value<string>;
    ApiId: Value<string>;
}
export default class FunctionConfiguration extends ResourceBase<FunctionConfigurationProperties> {
    static AppSyncRuntime: typeof AppSyncRuntime;
    static LambdaConflictHandlerConfig: typeof LambdaConflictHandlerConfig;
    static SyncConfig: typeof SyncConfig;
    constructor(properties: FunctionConfigurationProperties);
}
