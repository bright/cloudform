import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface CertificateProperties {
    Status: Value<string>;
    CACertificatePem?: Value<string>;
    CertificateMode?: Value<string>;
    CertificateSigningRequest?: Value<string>;
    CertificatePem?: Value<string>;
}
export default class Certificate extends ResourceBase<CertificateProperties> {
    constructor(properties: CertificateProperties);
}
