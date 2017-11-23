import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VolumesProperties {
    Host?: VolumesHost;
    Name?: Value<string>;
}
export declare class Volumes extends ResourceBase {
    constructor(properties: VolumesProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RetryStrategyProperties {
    Attempts?: Value<number>;
}
export declare class RetryStrategy extends ResourceBase {
    constructor(properties: RetryStrategyProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ContainerPropertiesProperties {
    MountPoints?: List<MountPoints>;
    User?: Value<string>;
    Volumes?: List<Volumes>;
    Command?: List<Value<string>>;
    Memory: Value<number>;
    Privileged?: Value<boolean>;
    Environment?: List<Environment>;
    JobRoleArn?: Value<string>;
    ReadonlyRootFilesystem?: Value<boolean>;
    Ulimits?: List<Ulimit>;
    Vcpus: Value<number>;
    Image: Value<string>;
}
export declare class ContainerProperties extends ResourceBase {
    constructor(properties: ContainerPropertiesProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface MountPointsProperties {
    ReadOnly?: Value<boolean>;
    SourceVolume?: Value<string>;
    ContainerPath?: Value<string>;
}
export declare class MountPoints extends ResourceBase {
    constructor(properties: MountPointsProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface EnvironmentProperties {
    Value?: Value<string>;
    Name?: Value<string>;
}
export declare class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface UlimitProperties {
    SoftLimit: Value<number>;
    HardLimit: Value<number>;
    Name: Value<string>;
}
export declare class Ulimit extends ResourceBase {
    constructor(properties: UlimitProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface VolumesHostProperties {
    SourcePath?: Value<string>;
}
export declare class VolumesHost extends ResourceBase {
    constructor(properties: VolumesHostProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface JobDefinitionProperties {
    Type: Value<string>;
    Parameters?: any;
    ContainerProperties: ContainerProperties;
    JobDefinitionName?: Value<string>;
    RetryStrategy?: RetryStrategy;
}
export default class JobDefinition extends ResourceBase {
    constructor(properties: JobDefinitionProperties, dependsOn?: Value<string> | Value<string>[]);
}
