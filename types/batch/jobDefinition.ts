/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface VolumesProperties {
    Host?: VolumesHost
    Name?: Value<string>
}

export class Volumes extends ResourceBase {
    constructor(properties: VolumesProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Batch::Volumes', properties, dependsOn)
    }
}

export interface RetryStrategyProperties {
    Attempts?: Value<number>
}

export class RetryStrategy extends ResourceBase {
    constructor(properties: RetryStrategyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Batch::RetryStrategy', properties, dependsOn)
    }
}

export interface ContainerPropertiesProperties {
    MountPoints?: MountPoints[]
    User?: Value<string>
    Volumes?: Volumes[]
    Command?: Value<string>[]
    Memory: Value<number>
    Privileged?: Value<boolean>
    Environment?: Environment[]
    JobRoleArn?: Value<string>
    ReadonlyRootFilesystem?: Value<boolean>
    Ulimits?: Ulimit[]
    Vcpus: Value<number>
    Image: Value<string>
}

export class ContainerProperties extends ResourceBase {
    constructor(properties: ContainerPropertiesProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Batch::ContainerProperties', properties, dependsOn)
    }
}

export interface MountPointsProperties {
    ReadOnly?: Value<boolean>
    SourceVolume?: Value<string>
    ContainerPath?: Value<string>
}

export class MountPoints extends ResourceBase {
    constructor(properties: MountPointsProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Batch::MountPoints', properties, dependsOn)
    }
}

export interface EnvironmentProperties {
    Value?: Value<string>
    Name?: Value<string>
}

export class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Batch::Environment', properties, dependsOn)
    }
}

export interface UlimitProperties {
    SoftLimit: Value<number>
    HardLimit: Value<number>
    Name: Value<string>
}

export class Ulimit extends ResourceBase {
    constructor(properties: UlimitProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Batch::Ulimit', properties, dependsOn)
    }
}

export interface VolumesHostProperties {
    SourcePath?: Value<string>
}

export class VolumesHost extends ResourceBase {
    constructor(properties: VolumesHostProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Batch::VolumesHost', properties, dependsOn)
    }
}

export interface JobDefinitionProperties {
    Type: Value<string>
    Parameters?: any
    ContainerProperties: ContainerProperties
    JobDefinitionName?: Value<string>
    RetryStrategy?: RetryStrategy
}

export default class JobDefinition extends ResourceBase {
    constructor(properties: JobDefinitionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Batch::JobDefinition', properties, dependsOn)
    }
}
