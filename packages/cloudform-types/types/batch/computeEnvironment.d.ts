import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ComputeResources {
    SpotIamFleetRole?: Value<string>;
    MaxvCpus: Value<number>;
    Ec2Configuration?: List<Ec2ConfigurationObject>;
    BidPercentage?: Value<number>;
    SecurityGroupIds?: List<Value<string>>;
    AllocationStrategy?: Value<string>;
    Subnets: List<Value<string>>;
    Type: Value<string>;
    MinvCpus?: Value<number>;
    UpdateToLatestImageVersion?: Value<boolean>;
    LaunchTemplate?: LaunchTemplateSpecification;
    ImageId?: Value<string>;
    InstanceRole?: Value<string>;
    InstanceTypes?: List<Value<string>>;
    Ec2KeyPair?: Value<string>;
    PlacementGroup?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
    DesiredvCpus?: Value<number>;
    constructor(properties: ComputeResources);
}
export declare class Ec2ConfigurationObject {
    ImageIdOverride?: Value<string>;
    ImageKubernetesVersion?: Value<string>;
    ImageType: Value<string>;
    constructor(properties: Ec2ConfigurationObject);
}
export declare class EksConfiguration {
    EksClusterArn: Value<string>;
    KubernetesNamespace: Value<string>;
    constructor(properties: EksConfiguration);
}
export declare class LaunchTemplateSpecification {
    LaunchTemplateName?: Value<string>;
    Version?: Value<string>;
    LaunchTemplateId?: Value<string>;
    constructor(properties: LaunchTemplateSpecification);
}
export declare class UpdatePolicy {
    JobExecutionTimeoutMinutes?: Value<number>;
    TerminateJobsOnUpdate?: Value<boolean>;
    constructor(properties: UpdatePolicy);
}
export interface ComputeEnvironmentProperties {
    UnmanagedvCpus?: Value<number>;
    Type: Value<string>;
    ReplaceComputeEnvironment?: Value<boolean>;
    ServiceRole?: Value<string>;
    UpdatePolicy?: UpdatePolicy;
    EksConfiguration?: EksConfiguration;
    ComputeEnvironmentName?: Value<string>;
    ComputeResources?: ComputeResources;
    State?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class ComputeEnvironment extends ResourceBase<ComputeEnvironmentProperties> {
    static ComputeResources: typeof ComputeResources;
    static Ec2ConfigurationObject: typeof Ec2ConfigurationObject;
    static EksConfiguration: typeof EksConfiguration;
    static LaunchTemplateSpecification: typeof LaunchTemplateSpecification;
    static UpdatePolicy: typeof UpdatePolicy;
    constructor(properties: ComputeEnvironmentProperties);
}
