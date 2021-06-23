import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ComputeResources {
    SpotIamFleetRole?: Value<string>;
    MaxvCpus: Value<number>;
    Ec2Configuration?: List<Ec2ConfigurationObject>;
    BidPercentage?: Value<number>;
    SecurityGroupIds?: List<Value<string>>;
    Subnets: List<Value<string>>;
    Type: Value<string>;
    AllocationStrategy?: Value<string>;
    MinvCpus?: Value<number>;
    LaunchTemplate?: LaunchTemplateSpecification;
    ImageId?: Value<string>;
    InstanceRole?: Value<string>;
    InstanceTypes?: List<Value<string>>;
    Ec2KeyPair?: Value<string>;
    PlacementGroup?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    DesiredvCpus?: Value<number>;
    constructor(properties: ComputeResources);
}
export declare class LaunchTemplateSpecification {
    LaunchTemplateName?: Value<string>;
    Version?: Value<string>;
    LaunchTemplateId?: Value<string>;
    constructor(properties: LaunchTemplateSpecification);
}
export declare class Ec2ConfigurationObject {
    ImageIdOverride?: Value<string>;
    ImageType: Value<string>;
    constructor(properties: Ec2ConfigurationObject);
}
export interface ComputeEnvironmentProperties {
    Type: Value<string>;
    ServiceRole?: Value<string>;
    ComputeEnvironmentName?: Value<string>;
    ComputeResources?: ComputeResources;
    State?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
}
export default class ComputeEnvironment extends ResourceBase<ComputeEnvironmentProperties> {
    static ComputeResources: typeof ComputeResources;
    static LaunchTemplateSpecification: typeof LaunchTemplateSpecification;
    static Ec2ConfigurationObject: typeof Ec2ConfigurationObject;
    constructor(properties: ComputeEnvironmentProperties);
}
