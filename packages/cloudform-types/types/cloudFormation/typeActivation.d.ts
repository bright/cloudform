import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class LoggingConfig {
    LogGroupName?: Value<string>;
    LogRoleArn?: Value<string>;
    constructor(properties: LoggingConfig);
}
export interface TypeActivationProperties {
    MajorVersion?: Value<string>;
    ExecutionRoleArn?: Value<string>;
    TypeName?: Value<string>;
    Type?: Value<string>;
    PublicTypeArn?: Value<string>;
    AutoUpdate?: Value<boolean>;
    LoggingConfig?: LoggingConfig;
    PublisherId?: Value<string>;
    VersionBump?: Value<string>;
    TypeNameAlias?: Value<string>;
}
export default class TypeActivation extends ResourceBase<TypeActivationProperties> {
    static LoggingConfig: typeof LoggingConfig;
    constructor(properties?: TypeActivationProperties);
}
