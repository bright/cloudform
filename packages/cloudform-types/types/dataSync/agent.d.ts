import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AgentProperties {
    AgentName?: Value<string>;
    ActivationKey: Value<string>;
    SecurityGroupArns?: List<Value<string>>;
    SubnetArns?: List<Value<string>>;
    VpcEndpointId?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Agent extends ResourceBase<AgentProperties> {
    constructor(properties: AgentProperties);
}
