/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface ArtifactsProperties {
    Path?: Value<string>
    Type: Value<string>
    Packaging?: Value<string>
    Location?: Value<string>
    Name?: Value<string>
    NamespaceType?: Value<string>
}

export class Artifacts extends ResourceBase {
    constructor(properties: ArtifactsProperties, dependsOn?: Value<string>) {
        super('AWS::CodeBuild::Artifacts', properties, dependsOn)
    }
}

export interface SourceAuthProperties {
    Type: Value<string>
    Resource?: Value<string>
}

export class SourceAuth extends ResourceBase {
    constructor(properties: SourceAuthProperties, dependsOn?: Value<string>) {
        super('AWS::CodeBuild::SourceAuth', properties, dependsOn)
    }
}

export interface EnvironmentProperties {
    Type: Value<string>
    EnvironmentVariables?: EnvironmentVariable[]
    PrivilegedMode?: Value<boolean>
    Image: Value<string>
    ComputeType: Value<string>
}

export class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string>) {
        super('AWS::CodeBuild::Environment', properties, dependsOn)
    }
}

export interface EnvironmentVariableProperties {
    Type?: Value<string>
    Value: Value<string>
    Name: Value<string>
}

export class EnvironmentVariable extends ResourceBase {
    constructor(properties: EnvironmentVariableProperties, dependsOn?: Value<string>) {
        super('AWS::CodeBuild::EnvironmentVariable', properties, dependsOn)
    }
}

export interface SourceProperties {
    Type: Value<string>
    Auth?: SourceAuth
    BuildSpec?: Value<string>
    Location?: Value<string>
}

export class Source extends ResourceBase {
    constructor(properties: SourceProperties, dependsOn?: Value<string>) {
        super('AWS::CodeBuild::Source', properties, dependsOn)
    }
}

export interface ProjectProperties {
    Artifacts: Artifacts
    Description?: Value<string>
    ServiceRole: Value<string>
    Environment: Environment
    EncryptionKey?: Value<string>
    Source: Source
    Tags?: ResourceTag[]
    Name?: Value<string>
    TimeoutInMinutes?: Value<number>
}

export default class Project extends ResourceBase {
    constructor(properties: ProjectProperties, dependsOn?: Value<string>) {
        super('AWS::CodeBuild::Project', properties, dependsOn)
    }
}