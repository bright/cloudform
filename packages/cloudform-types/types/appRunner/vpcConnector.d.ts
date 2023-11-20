import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VpcConnectorProperties {
    SecurityGroups?: List<Value<string>>;
    Subnets: List<Value<string>>;
    VpcConnectorName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class VpcConnector extends ResourceBase<VpcConnectorProperties> {
    constructor(properties: VpcConnectorProperties);
}
