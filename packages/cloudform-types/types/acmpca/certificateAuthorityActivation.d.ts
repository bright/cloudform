import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface CertificateAuthorityActivationProperties {
    CertificateAuthorityArn: Value<string>;
    Certificate: Value<string>;
    CertificateChain?: Value<string>;
    Status?: Value<string>;
}
export default class CertificateAuthorityActivation extends ResourceBase<CertificateAuthorityActivationProperties> {
    constructor(properties: CertificateAuthorityActivationProperties);
}
