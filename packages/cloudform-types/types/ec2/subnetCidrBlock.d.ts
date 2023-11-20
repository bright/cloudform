import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SubnetCidrBlockProperties {
    SubnetId: Value<string>;
    Ipv6CidrBlock: Value<string>;
}
export default class SubnetCidrBlock extends ResourceBase<SubnetCidrBlockProperties> {
    constructor(properties: SubnetCidrBlockProperties);
}
