import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface CertificateProperties {
    CACertificatePem?: Value<string>;
    CertificatePem?: Value<string>;
    CertificateSigningRequest?: Value<string>;
    CertificateMode?: Value<string>;
    Status: Value<string>;
}
export default class Certificate extends ResourceBase<CertificateProperties> {
    constructor(properties: CertificateProperties);
}
