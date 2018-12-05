import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface HttpNamespaceProperties {
    Description?: Value<string>;
    Name: Value<string>;
}
export default class HttpNamespace extends ResourceBase {
    constructor(properties?: HttpNamespaceProperties);
}
