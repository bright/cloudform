import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface SecurityProfileProperties {
    AllowedAccessControlTags?: List<ResourceTag>;
    Description?: Value<string>;
    InstanceArn: Value<string>;
    Permissions?: List<Value<string>>;
    SecurityProfileName: Value<string>;
    TagRestrictedResources?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class SecurityProfile extends ResourceBase<SecurityProfileProperties> {
    constructor(properties: SecurityProfileProperties);
}
