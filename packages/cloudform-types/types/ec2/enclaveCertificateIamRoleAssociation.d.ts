import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface EnclaveCertificateIamRoleAssociationProperties {
    CertificateArn: Value<string>;
    RoleArn: Value<string>;
}
export default class EnclaveCertificateIamRoleAssociation extends ResourceBase<EnclaveCertificateIamRoleAssociationProperties> {
    constructor(properties: EnclaveCertificateIamRoleAssociationProperties);
}
