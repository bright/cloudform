import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface LoadBalancerTlsCertificateProperties {
    LoadBalancerName: Value<string>;
    CertificateDomainName: Value<string>;
    IsAttached?: Value<boolean>;
    CertificateAlternativeNames?: List<Value<string>>;
    HttpsRedirectionEnabled?: Value<boolean>;
    CertificateName: Value<string>;
}
export default class LoadBalancerTlsCertificate extends ResourceBase<LoadBalancerTlsCertificateProperties> {
    constructor(properties: LoadBalancerTlsCertificateProperties);
}
