import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AcceleratorProperties {
    IpAddressType?: Value<string>;
    IpAddresses?: List<Value<string>>;
    Enabled?: Value<boolean>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Accelerator extends ResourceBase<AcceleratorProperties> {
    constructor(properties: AcceleratorProperties);
}
