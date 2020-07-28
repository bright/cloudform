import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Validity {
    Value: Value<number>;
    Type: Value<string>;
    constructor(properties: Validity);
}
export interface CertificateProperties {
    CertificateAuthorityArn: Value<string>;
    CertificateSigningRequest: Value<string>;
    SigningAlgorithm: Value<string>;
    TemplateArn?: Value<string>;
    Validity: Validity;
}
export default class Certificate extends ResourceBase<CertificateProperties> {
    static Validity: typeof Validity;
    constructor(properties: CertificateProperties);
}
