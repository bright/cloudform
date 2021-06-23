import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ServerCertificateProperties {
    CertificateBody?: Value<string>;
    CertificateChain?: Value<string>;
    ServerCertificateName?: Value<string>;
    Path?: Value<string>;
    PrivateKey?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ServerCertificate extends ResourceBase<ServerCertificateProperties> {
    constructor(properties?: ServerCertificateProperties);
}
