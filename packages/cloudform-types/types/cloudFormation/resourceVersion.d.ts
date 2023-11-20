import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class LoggingConfig {
    LogGroupName?: Value<string>;
    LogRoleArn?: Value<string>;
    constructor(properties: LoggingConfig);
}
export interface ResourceVersionProperties {
    ExecutionRoleArn?: Value<string>;
    TypeName: Value<string>;
    LoggingConfig?: LoggingConfig;
    SchemaHandlerPackage: Value<string>;
}
export default class ResourceVersion extends ResourceBase<ResourceVersionProperties> {
    static LoggingConfig: typeof LoggingConfig;
    constructor(properties: ResourceVersionProperties);
}
