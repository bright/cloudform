import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface IdentityPoolRoleAttachmentProperties {
    IdentityPoolId: Value<string>;
    RoleMappings?: any;
    Roles?: any;
}
export default class IdentityPoolRoleAttachment extends ResourceBase {
    constructor(properties: IdentityPoolRoleAttachmentProperties, dependsOn?: Value<string>);
}
