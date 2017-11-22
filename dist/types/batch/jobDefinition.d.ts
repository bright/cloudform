import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface VolumesProperties {
    Host?: VolumesHost;
    Name?: Value<string>;
}
export declare class Volumes extends ResourceBase {
    constructor(properties: VolumesProperties, dependsOn?: Value<string>);
}
export interface RetryStrategyProperties {
    Attempts?: Value<number>;
}
export declare class RetryStrategy extends ResourceBase {
    constructor(properties: RetryStrategyProperties, dependsOn?: Value<string>);
}
export interface ContainerPropertiesProperties {
    MountPoints?: MountPoints[];
    User?: Value<string>;
    Volumes?: Volumes[];
    Command?: Value<string>[];
    Memory: Value<number>;
    Privileged?: Value<boolean>;
    Environment?: Environment[];
    JobRoleArn?: Value<string>;
    ReadonlyRootFilesystem?: Value<boolean>;
    Ulimits?: Ulimit[];
    Vcpus: Value<number>;
    Image: Value<string>;
}
export declare class ContainerProperties extends ResourceBase {
    constructor(properties: ContainerPropertiesProperties, dependsOn?: Value<string>);
}
export interface MountPointsProperties {
    ReadOnly?: Value<boolean>;
    SourceVolume?: Value<string>;
    ContainerPath?: Value<string>;
}
export declare class MountPoints extends ResourceBase {
    constructor(properties: MountPointsProperties, dependsOn?: Value<string>);
}
export interface EnvironmentProperties {
    Value?: Value<string>;
    Name?: Value<string>;
}
export declare class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string>);
}
export interface UlimitProperties {
    SoftLimit: Value<number>;
    HardLimit: Value<number>;
    Name: Value<string>;
}
export declare class Ulimit extends ResourceBase {
    constructor(properties: UlimitProperties, dependsOn?: Value<string>);
}
export interface VolumesHostProperties {
    SourcePath?: Value<string>;
}
export declare class VolumesHost extends ResourceBase {
    constructor(properties: VolumesHostProperties, dependsOn?: Value<string>);
}
export interface JobDefinitionProperties {
    Type: Value<string>;
    Parameters?: any;
    ContainerProperties: ContainerProperties;
    JobDefinitionName?: Value<string>;
    RetryStrategy?: RetryStrategy;
}
export default class JobDefinition extends ResourceBase {
    constructor(properties: JobDefinitionProperties, dependsOn?: Value<string>);
}
