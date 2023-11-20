import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface CertificateAuthorityActivationProperties {
    Status?: Value<string>;
    CertificateAuthorityArn: Value<string>;
    CertificateChain?: Value<string>;
    Certificate: Value<string>;
}
export default class CertificateAuthorityActivation extends ResourceBase<CertificateAuthorityActivationProperties> {
    constructor(properties: CertificateAuthorityActivationProperties);
}
