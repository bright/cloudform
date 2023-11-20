import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VpcLinkProperties {
    SubnetIds: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class VpcLink extends ResourceBase<VpcLinkProperties> {
    constructor(properties: VpcLinkProperties);
}
