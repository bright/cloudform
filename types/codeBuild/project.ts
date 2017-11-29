/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Artifacts {
    Path?: Value<string>
    Type: Value<string>
    Packaging?: Value<string>
    Location?: Value<string>
    Name?: Value<string>
    NamespaceType?: Value<string>

    constructor(properties: Artifacts) {
        Object.assign(this, properties)
    }
}

export class SourceAuth {
    Type: Value<string>
    Resource?: Value<string>

    constructor(properties: SourceAuth) {
        Object.assign(this, properties)
    }
}

export class Environment {
    Type: Value<string>
    EnvironmentVariables?: List<EnvironmentVariable>
    PrivilegedMode?: Value<boolean>
    Image: Value<string>
    ComputeType: Value<string>

    constructor(properties: Environment) {
        Object.assign(this, properties)
    }
}

export class ProjectCache {
    Type: Value<string>
    Location?: Value<string>

    constructor(properties: ProjectCache) {
        Object.assign(this, properties)
    }
}

export class VpcConfig {
    Subnets: List<Value<string>>
    VpcId: Value<string>
    SecurityGroupIds: List<Value<string>>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export class EnvironmentVariable {
    Type?: Value<string>
    Value: Value<string>
    Name: Value<string>

    constructor(properties: EnvironmentVariable) {
        Object.assign(this, properties)
    }
}

export class Source {
    Type: Value<string>
    Auth?: SourceAuth
    BuildSpec?: Value<string>
    Location?: Value<string>

    constructor(properties: Source) {
        Object.assign(this, properties)
    }
}

export interface ProjectProperties {
    Artifacts: Artifacts
    BadgeEnabled?: Value<boolean>
    Description?: Value<string>
    ServiceRole: Value<string>
    VpcConfig?: VpcConfig
    Environment: Environment
    EncryptionKey?: Value<string>
    Source: Source
    Tags?: ResourceTag[]
    Name?: Value<string>
    TimeoutInMinutes?: Value<number>
    Cache?: ProjectCache
}

export default class Project extends ResourceBase {
    constructor(properties?: ProjectProperties) {
        super('AWS::CodeBuild::Project', properties)
    }
}
