import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AgentProperties {
    SubnetArns?: List<Value<string>>;
    AgentName?: Value<string>;
    VpcEndpointId?: Value<string>;
    ActivationKey?: Value<string>;
    SecurityGroupArns?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class Agent extends ResourceBase<AgentProperties> {
    constructor(properties?: AgentProperties);
}
