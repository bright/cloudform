import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface FlowVpcInterfaceProperties {
    FlowArn: Value<string>;
    Name: Value<string>;
    RoleArn: Value<string>;
    SecurityGroupIds: List<Value<string>>;
    SubnetId: Value<string>;
}
export default class FlowVpcInterface extends ResourceBase<FlowVpcInterfaceProperties> {
    constructor(properties: FlowVpcInterfaceProperties);
}
