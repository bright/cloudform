import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface HttpNamespaceProperties {
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class HttpNamespace extends ResourceBase<HttpNamespaceProperties> {
    constructor(properties: HttpNamespaceProperties);
}
