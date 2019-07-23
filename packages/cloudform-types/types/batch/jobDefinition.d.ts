import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Volumes {
    Host?: VolumesHost;
    Name?: Value<string>;
    constructor(properties: Volumes);
}
export declare class ContainerProperties {
    User?: Value<string>;
    Memory: Value<number>;
    Privileged?: Value<boolean>;
    JobRoleArn?: Value<string>;
    ReadonlyRootFilesystem?: Value<boolean>;
    Vcpus: Value<number>;
    Image: Value<string>;
    ResourceRequirements?: List<ResourceRequirement>;
    MountPoints?: List<MountPoints>;
    Volumes?: List<Volumes>;
    Command?: List<Value<string>>;
    Environment?: List<Environment>;
    Ulimits?: List<Ulimit>;
    InstanceType?: Value<string>;
    constructor(properties: ContainerProperties);
}
export declare class ResourceRequirement {
    Type?: Value<string>;
    Value?: Value<string>;
    constructor(properties: ResourceRequirement);
}
export declare class MountPoints {
    ReadOnly?: Value<boolean>;
    SourceVolume?: Value<string>;
    ContainerPath?: Value<string>;
    constructor(properties: MountPoints);
}
export declare class Environment {
    Value?: Value<string>;
    Name?: Value<string>;
    constructor(properties: Environment);
}
export declare class Ulimit {
    SoftLimit: Value<number>;
    HardLimit: Value<number>;
    Name: Value<string>;
    constructor(properties: Ulimit);
}
export declare class VolumesHost {
    SourcePath?: Value<string>;
    constructor(properties: VolumesHost);
}
export declare class NodeProperties {
    MainNode: Value<number>;
    NodeRangeProperties: List<NodeRangeProperty>;
    NumNodes: Value<number>;
    constructor(properties: NodeProperties);
}
export declare class RetryStrategy {
    Attempts?: Value<number>;
    constructor(properties: RetryStrategy);
}
export declare class Timeout {
    AttemptDurationSeconds?: Value<number>;
    constructor(properties: Timeout);
}
export declare class NodeRangeProperty {
    Container?: ContainerProperties;
    TargetNodes: Value<string>;
    constructor(properties: NodeRangeProperty);
}
export interface JobDefinitionProperties {
    Type: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    NodeProperties?: NodeProperties;
    Timeout?: Timeout;
    ContainerProperties?: ContainerProperties;
    JobDefinitionName?: Value<string>;
    RetryStrategy?: RetryStrategy;
}
export default class JobDefinition extends ResourceBase<JobDefinitionProperties> {
    static Volumes: typeof Volumes;
    static ContainerProperties: typeof ContainerProperties;
    static ResourceRequirement: typeof ResourceRequirement;
    static MountPoints: typeof MountPoints;
    static Environment: typeof Environment;
    static Ulimit: typeof Ulimit;
    static VolumesHost: typeof VolumesHost;
    static NodeProperties: typeof NodeProperties;
    static RetryStrategy: typeof RetryStrategy;
    static Timeout: typeof Timeout;
    static NodeRangeProperty: typeof NodeRangeProperty;
    constructor(properties: JobDefinitionProperties);
}
