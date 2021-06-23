import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PermissionSetProperties {
    Name: Value<string>;
    Description?: Value<string>;
    InstanceArn: Value<string>;
    SessionDuration?: Value<string>;
    RelayStateType?: Value<string>;
    ManagedPolicies?: List<Value<string>>;
    InlinePolicy?: {
        [key: string]: any;
    };
    Tags?: List<ResourceTag>;
}
export default class PermissionSet extends ResourceBase<PermissionSetProperties> {
    constructor(properties: PermissionSetProperties);
}
