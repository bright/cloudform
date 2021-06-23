import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class SyncConfig {
    ConflictHandler?: Value<string>;
    ConflictDetection: Value<string>;
    LambdaConflictHandlerConfig?: LambdaConflictHandlerConfig;
    constructor(properties: SyncConfig);
}
export declare class LambdaConflictHandlerConfig {
    LambdaConflictHandlerArn?: Value<string>;
    constructor(properties: LambdaConflictHandlerConfig);
}
export interface FunctionConfigurationProperties {
    ResponseMappingTemplateS3Location?: Value<string>;
    Description?: Value<string>;
    DataSourceName: Value<string>;
    RequestMappingTemplate?: Value<string>;
    ResponseMappingTemplate?: Value<string>;
    FunctionVersion: Value<string>;
    SyncConfig?: SyncConfig;
    RequestMappingTemplateS3Location?: Value<string>;
    ApiId: Value<string>;
    Name: Value<string>;
}
export default class FunctionConfiguration extends ResourceBase<FunctionConfigurationProperties> {
    static SyncConfig: typeof SyncConfig;
    static LambdaConflictHandlerConfig: typeof LambdaConflictHandlerConfig;
    constructor(properties: FunctionConfigurationProperties);
}
