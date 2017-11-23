import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ComputeResourcesProperties {
    SpotIamFleetRole?: Value<string>;
    MaxvCpus: Value<number>;
    BidPercentage?: Value<number>;
    SecurityGroupIds: List<Value<string>>;
    Subnets: List<Value<string>>;
    Type: Value<string>;
    MinvCpus: Value<number>;
    ImageId?: Value<string>;
    InstanceRole: Value<string>;
    InstanceTypes: List<Value<string>>;
    Ec2KeyPair?: Value<string>;
    Tags?: ResourceTag[];
    DesiredvCpus?: Value<number>;
}
export declare class ComputeResources extends ResourceBase {
    constructor(properties: ComputeResourcesProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ComputeEnvironmentProperties {
    Type: Value<string>;
    ServiceRole: Value<string>;
    ComputeEnvironmentName?: Value<string>;
    ComputeResources: ComputeResources;
    State?: Value<string>;
}
export default class ComputeEnvironment extends ResourceBase {
    constructor(properties: ComputeEnvironmentProperties, dependsOn?: Value<string> | Value<string>[]);
}
