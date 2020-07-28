import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
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
    ScalingConfig?: ScalingConfig;
    Labels?: {
        [key: string]: any;
    };
    ReleaseVersion?: Value<string>;
    NodegroupName?: Value<string>;
    Subnets: List<Value<string>>;
    NodeRole: Value<string>;
    AmiType?: Value<string>;
    ForceUpdateEnabled?: Value<boolean>;
    Version?: Value<string>;
    RemoteAccess?: RemoteAccess;
    DiskSize?: Value<number>;
    ClusterName: Value<string>;
    InstanceTypes?: List<Value<string>>;
    Tags?: {
        [key: string]: any;
    };
}
export default class Nodegroup extends ResourceBase<NodegroupProperties> {
    static ScalingConfig: typeof ScalingConfig;
    static RemoteAccess: typeof RemoteAccess;
    constructor(properties: NodegroupProperties);
}
