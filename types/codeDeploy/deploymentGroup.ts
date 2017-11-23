/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface LoadBalancerInfoProperties {
    ElbInfoList?: ELBInfo[]
    TargetGroupInfoList?: TargetGroupInfo[]
}

export class LoadBalancerInfo extends ResourceBase {
    constructor(properties: LoadBalancerInfoProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::LoadBalancerInfo', properties, dependsOn)
    }
}

export interface RevisionLocationProperties {
    GitHubLocation?: GitHubLocation
    RevisionType?: Value<string>
    S3Location?: S3Location
}

export class RevisionLocation extends ResourceBase {
    constructor(properties: RevisionLocationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::RevisionLocation', properties, dependsOn)
    }
}

export interface S3LocationProperties {
    Bucket: Value<string>
    BundleType?: Value<string>
    ETag?: Value<string>
    Key: Value<string>
    Version?: Value<string>
}

export class S3Location extends ResourceBase {
    constructor(properties: S3LocationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::S3Location', properties, dependsOn)
    }
}

export interface TriggerConfigProperties {
    TriggerEvents?: Value<string>[]
    TriggerName?: Value<string>
    TriggerTargetArn?: Value<string>
}

export class TriggerConfig extends ResourceBase {
    constructor(properties: TriggerConfigProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::TriggerConfig', properties, dependsOn)
    }
}

export interface TagFilterProperties {
    Key?: Value<string>
    Type?: Value<string>
    Value?: Value<string>
}

export class TagFilter extends ResourceBase {
    constructor(properties: TagFilterProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::TagFilter', properties, dependsOn)
    }
}

export interface GitHubLocationProperties {
    CommitId: Value<string>
    Repository: Value<string>
}

export class GitHubLocation extends ResourceBase {
    constructor(properties: GitHubLocationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::GitHubLocation', properties, dependsOn)
    }
}

export interface TargetGroupInfoProperties {
    Name?: Value<string>
}

export class TargetGroupInfo extends ResourceBase {
    constructor(properties: TargetGroupInfoProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::TargetGroupInfo', properties, dependsOn)
    }
}

export interface ELBInfoProperties {
    Name?: Value<string>
}

export class ELBInfo extends ResourceBase {
    constructor(properties: ELBInfoProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::ELBInfo', properties, dependsOn)
    }
}

export interface AlarmConfigurationProperties {
    Alarms?: Alarm[]
    Enabled?: Value<boolean>
    IgnorePollAlarmFailure?: Value<boolean>
}

export class AlarmConfiguration extends ResourceBase {
    constructor(properties: AlarmConfigurationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::AlarmConfiguration', properties, dependsOn)
    }
}

export interface DeploymentStyleProperties {
    DeploymentOption?: Value<string>
}

export class DeploymentStyle extends ResourceBase {
    constructor(properties: DeploymentStyleProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::DeploymentStyle', properties, dependsOn)
    }
}

export interface AlarmProperties {
    Name?: Value<string>
}

export class Alarm extends ResourceBase {
    constructor(properties: AlarmProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::Alarm', properties, dependsOn)
    }
}

export interface EC2TagFilterProperties {
    Key?: Value<string>
    Type?: Value<string>
    Value?: Value<string>
}

export class EC2TagFilter extends ResourceBase {
    constructor(properties: EC2TagFilterProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::EC2TagFilter', properties, dependsOn)
    }
}

export interface AutoRollbackConfigurationProperties {
    Enabled?: Value<boolean>
    Events?: Value<string>[]
}

export class AutoRollbackConfiguration extends ResourceBase {
    constructor(properties: AutoRollbackConfigurationProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::AutoRollbackConfiguration', properties, dependsOn)
    }
}

export interface DeploymentProperties {
    Description?: Value<string>
    IgnoreApplicationStopFailures?: Value<boolean>
    Revision: RevisionLocation
}

export class Deployment extends ResourceBase {
    constructor(properties: DeploymentProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::Deployment', properties, dependsOn)
    }
}

export interface DeploymentGroupProperties {
    AlarmConfiguration?: AlarmConfiguration
    ApplicationName: Value<string>
    AutoRollbackConfiguration?: AutoRollbackConfiguration
    AutoScalingGroups?: Value<string>[]
    Deployment?: Deployment
    DeploymentConfigName?: Value<string>
    DeploymentGroupName?: Value<string>
    DeploymentStyle?: DeploymentStyle
    Ec2TagFilters?: EC2TagFilter[]
    LoadBalancerInfo?: LoadBalancerInfo
    OnPremisesInstanceTagFilters?: TagFilter[]
    ServiceRoleArn: Value<string>
    TriggerConfigurations?: TriggerConfig[]
}

export default class DeploymentGroup extends ResourceBase {
    constructor(properties: DeploymentGroupProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::CodeDeploy::DeploymentGroup', properties, dependsOn)
    }
}
