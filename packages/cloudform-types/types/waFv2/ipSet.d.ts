import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface IPSetProperties {
    Description?: Value<string>;
    Name?: Value<string>;
    Scope: Value<string>;
    IPAddressVersion: Value<string>;
    Addresses: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class IPSet extends ResourceBase<IPSetProperties> {
    constructor(properties: IPSetProperties);
}
