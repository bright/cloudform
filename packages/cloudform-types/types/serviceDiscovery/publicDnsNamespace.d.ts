import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PublicDnsNamespaceProperties {
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class PublicDnsNamespace extends ResourceBase<PublicDnsNamespaceProperties> {
    constructor(properties: PublicDnsNamespaceProperties);
}
