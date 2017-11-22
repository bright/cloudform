import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface CertificateProperties {
    CertificateIdentifier?: Value<string>;
    CertificatePem?: Value<string>;
    CertificateWallet?: Value<string>;
}
export default class Certificate extends ResourceBase {
    constructor(properties: CertificateProperties, dependsOn?: Value<string>);
}
