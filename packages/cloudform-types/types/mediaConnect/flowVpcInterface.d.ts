import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface FlowVpcInterfaceProperties {
    SubnetId: Value<string>;
    FlowArn: Value<string>;
    SecurityGroupIds: List<Value<string>>;
    RoleArn: Value<string>;
    Name: Value<string>;
}
export default class FlowVpcInterface extends ResourceBase<FlowVpcInterfaceProperties> {
    constructor(properties: FlowVpcInterfaceProperties);
}
