import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class LoggingConfig {
    LogGroupName?: Value<string>;
    LogRoleArn?: Value<string>;
    constructor(properties: LoggingConfig);
}
export interface HookVersionProperties {
    ExecutionRoleArn?: Value<string>;
    TypeName: Value<string>;
    LoggingConfig?: LoggingConfig;
    SchemaHandlerPackage: Value<string>;
}
export default class HookVersion extends ResourceBase<HookVersionProperties> {
    static LoggingConfig: typeof LoggingConfig;
    constructor(properties: HookVersionProperties);
}
