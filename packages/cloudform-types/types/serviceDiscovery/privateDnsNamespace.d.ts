import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PrivateDnsNamespaceProperties {
    Description?: Value<string>;
    Vpc: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class PrivateDnsNamespace extends ResourceBase<PrivateDnsNamespaceProperties> {
    constructor(properties: PrivateDnsNamespaceProperties);
}
