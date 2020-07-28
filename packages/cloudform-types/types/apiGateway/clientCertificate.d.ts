import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ClientCertificateProperties {
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ClientCertificate extends ResourceBase<ClientCertificateProperties> {
    constructor(properties?: ClientCertificateProperties);
}
