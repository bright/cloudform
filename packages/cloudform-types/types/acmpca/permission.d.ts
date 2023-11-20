import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface PermissionProperties {
    CertificateAuthorityArn: Value<string>;
    Actions: List<Value<string>>;
    SourceAccount?: Value<string>;
    Principal: Value<string>;
}
export default class Permission extends ResourceBase<PermissionProperties> {
    constructor(properties: PermissionProperties);
}
