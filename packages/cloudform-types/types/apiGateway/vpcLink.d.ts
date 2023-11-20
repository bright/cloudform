import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VpcLinkProperties {
    Description?: Value<string>;
    TargetArns: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class VpcLink extends ResourceBase<VpcLinkProperties> {
    constructor(properties: VpcLinkProperties);
}
