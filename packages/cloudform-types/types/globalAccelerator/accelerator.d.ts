import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AcceleratorProperties {
    Name: Value<string>;
    IpAddressType?: Value<string>;
    IpAddresses?: List<Value<string>>;
    Enabled?: Value<boolean>;
    Tags?: List<ResourceTag>;
}
export default class Accelerator extends ResourceBase<AcceleratorProperties> {
    constructor(properties: AcceleratorProperties);
}
