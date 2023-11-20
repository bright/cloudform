import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface EnclaveCertificateIamRoleAssociationProperties {
    RoleArn: Value<string>;
    CertificateArn: Value<string>;
}
export default class EnclaveCertificateIamRoleAssociation extends ResourceBase<EnclaveCertificateIamRoleAssociationProperties> {
    constructor(properties: EnclaveCertificateIamRoleAssociationProperties);
}
