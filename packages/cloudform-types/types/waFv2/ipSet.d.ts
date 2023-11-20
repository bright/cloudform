import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface IPSetProperties {
    Addresses: List<Value<string>>;
    Description?: Value<string>;
    Scope: Value<string>;
    IPAddressVersion: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class IPSet extends ResourceBase<IPSetProperties> {
    constructor(properties: IPSetProperties);
}
