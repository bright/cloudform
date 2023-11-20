import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface EnvironmentAccountConnectionProperties {
    EnvironmentName?: Value<string>;
    ComponentRoleArn?: Value<string>;
    ManagementAccountId?: Value<string>;
    CodebuildRoleArn?: Value<string>;
    EnvironmentAccountId?: Value<string>;
    RoleArn?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class EnvironmentAccountConnection extends ResourceBase<EnvironmentAccountConnectionProperties> {
    constructor(properties?: EnvironmentAccountConnectionProperties);
}
