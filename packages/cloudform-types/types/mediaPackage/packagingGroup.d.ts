import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Authorization {
    SecretsRoleArn: Value<string>;
    CdnIdentifierSecret: Value<string>;
    constructor(properties: Authorization);
}
export declare class LogConfiguration {
    LogGroupName?: Value<string>;
    constructor(properties: LogConfiguration);
}
export interface PackagingGroupProperties {
    Authorization?: Authorization;
    Id: Value<string>;
    EgressAccessLogs?: LogConfiguration;
    Tags?: List<ResourceTag>;
}
export default class PackagingGroup extends ResourceBase<PackagingGroupProperties> {
    static Authorization: typeof Authorization;
    static LogConfiguration: typeof LogConfiguration;
    constructor(properties: PackagingGroupProperties);
}
