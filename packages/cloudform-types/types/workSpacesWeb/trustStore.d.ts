import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface TrustStoreProperties {
    CertificateList: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class TrustStore extends ResourceBase<TrustStoreProperties> {
    constructor(properties: TrustStoreProperties);
}
