import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LogConfiguration {
    LogGroupName?: Value<string>;
    constructor(properties: LogConfiguration);
}
export declare class Authorization {
    CdnIdentifierSecret: Value<string>;
    SecretsRoleArn: Value<string>;
    constructor(properties: Authorization);
}
export interface PackagingGroupProperties {
    Id: Value<string>;
    Authorization?: Authorization;
    Tags?: List<ResourceTag>;
    EgressAccessLogs?: LogConfiguration;
}
export default class PackagingGroup extends ResourceBase<PackagingGroupProperties> {
    static LogConfiguration: typeof LogConfiguration;
    static Authorization: typeof Authorization;
    constructor(properties: PackagingGroupProperties);
}
