import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Taint {
    Value?: Value<string>;
    Effect?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Taint);
}
export declare class LaunchTemplateSpecification {
    Version?: Value<string>;
    Id?: Value<string>;
    Name?: Value<string>;
    constructor(properties: LaunchTemplateSpecification);
}
export declare class UpdateConfig {
    MaxUnavailablePercentage?: Value<number>;
    MaxUnavailable?: Value<number>;
    constructor(properties: UpdateConfig);
}
export declare class ScalingConfig {
    MinSize?: Value<number>;
    DesiredSize?: Value<number>;
    MaxSize?: Value<number>;
    constructor(properties: ScalingConfig);
}
export declare class RemoteAccess {
    SourceSecurityGroups?: List<Value<string>>;
    Ec2SshKey: Value<string>;
    constructor(properties: RemoteAccess);
}
export interface NodegroupProperties {
    UpdateConfig?: UpdateConfig;
    ScalingConfig?: ScalingConfig;
    Labels?: {
        [key: string]: any;
    };
    Taints?: List<Taint>;
    ReleaseVersion?: Value<string>;
    CapacityType?: Value<string>;
    NodegroupName?: Value<string>;
    Subnets: List<Value<string>>;
    NodeRole: Value<string>;
    AmiType?: Value<string>;
    ForceUpdateEnabled?: Value<boolean>;
    Version?: Value<string>;
    LaunchTemplate?: LaunchTemplateSpecification;
    RemoteAccess?: RemoteAccess;
    DiskSize?: Value<number>;
    ClusterName: Value<string>;
    InstanceTypes?: List<Value<string>>;
    Tags?: {
        [key: string]: any;
    };
}
export default class Nodegroup extends ResourceBase<NodegroupProperties> {
    static Taint: typeof Taint;
    static LaunchTemplateSpecification: typeof LaunchTemplateSpecification;
    static UpdateConfig: typeof UpdateConfig;
    static ScalingConfig: typeof ScalingConfig;
    static RemoteAccess: typeof RemoteAccess;
    constructor(properties: NodegroupProperties);
}
