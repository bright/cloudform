import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LaunchTemplateSpecification {
    Version?: Value<string>;
    Id?: Value<string>;
    Name?: Value<string>;
    constructor(properties: LaunchTemplateSpecification);
}
export declare class RemoteAccess {
    SourceSecurityGroups?: List<Value<string>>;
    Ec2SshKey: Value<string>;
    constructor(properties: RemoteAccess);
}
export declare class ScalingConfig {
    MinSize?: Value<number>;
    DesiredSize?: Value<number>;
    MaxSize?: Value<number>;
    constructor(properties: ScalingConfig);
}
export declare class Taint {
    Value?: Value<string>;
    Effect?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Taint);
}
export declare class UpdateConfig {
    MaxUnavailablePercentage?: Value<number>;
    MaxUnavailable?: Value<number>;
    constructor(properties: UpdateConfig);
}
export interface NodegroupProperties {
    UpdateConfig?: UpdateConfig;
    ScalingConfig?: ScalingConfig;
    Labels?: {
        [key: string]: Value<string>;
    };
    Taints?: List<Taint>;
    CapacityType?: Value<string>;
    ReleaseVersion?: Value<string>;
    NodegroupName?: Value<string>;
    NodeRole: Value<string>;
    Subnets: List<Value<string>>;
    AmiType?: Value<string>;
    ForceUpdateEnabled?: Value<boolean>;
    Version?: Value<string>;
    LaunchTemplate?: LaunchTemplateSpecification;
    RemoteAccess?: RemoteAccess;
    DiskSize?: Value<number>;
    ClusterName: Value<string>;
    InstanceTypes?: List<Value<string>>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Nodegroup extends ResourceBase<NodegroupProperties> {
    static LaunchTemplateSpecification: typeof LaunchTemplateSpecification;
    static RemoteAccess: typeof RemoteAccess;
    static ScalingConfig: typeof ScalingConfig;
    static Taint: typeof Taint;
    static UpdateConfig: typeof UpdateConfig;
    constructor(properties: NodegroupProperties);
}
