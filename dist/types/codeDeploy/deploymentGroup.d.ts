import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface LoadBalancerInfoProperties {
    ElbInfoList?: ELBInfo[];
    TargetGroupInfoList?: TargetGroupInfo[];
}
export declare class LoadBalancerInfo extends ResourceBase {
    constructor(properties: LoadBalancerInfoProperties, dependsOn?: Value<string>);
}
export interface RevisionLocationProperties {
    GitHubLocation?: GitHubLocation;
    RevisionType?: Value<string>;
    S3Location?: S3Location;
}
export declare class RevisionLocation extends ResourceBase {
    constructor(properties: RevisionLocationProperties, dependsOn?: Value<string>);
}
export interface S3LocationProperties {
    Bucket: Value<string>;
    BundleType?: Value<string>;
    ETag?: Value<string>;
    Key: Value<string>;
    Version?: Value<string>;
}
export declare class S3Location extends ResourceBase {
    constructor(properties: S3LocationProperties, dependsOn?: Value<string>);
}
export interface TriggerConfigProperties {
    TriggerEvents?: Value<string>[];
    TriggerName?: Value<string>;
    TriggerTargetArn?: Value<string>;
}
export declare class TriggerConfig extends ResourceBase {
    constructor(properties: TriggerConfigProperties, dependsOn?: Value<string>);
}
export interface TagFilterProperties {
    Key?: Value<string>;
    Type?: Value<string>;
    Value?: Value<string>;
}
export declare class TagFilter extends ResourceBase {
    constructor(properties: TagFilterProperties, dependsOn?: Value<string>);
}
export interface GitHubLocationProperties {
    CommitId: Value<string>;
    Repository: Value<string>;
}
export declare class GitHubLocation extends ResourceBase {
    constructor(properties: GitHubLocationProperties, dependsOn?: Value<string>);
}
export interface TargetGroupInfoProperties {
    Name?: Value<string>;
}
export declare class TargetGroupInfo extends ResourceBase {
    constructor(properties: TargetGroupInfoProperties, dependsOn?: Value<string>);
}
export interface ELBInfoProperties {
    Name?: Value<string>;
}
export declare class ELBInfo extends ResourceBase {
    constructor(properties: ELBInfoProperties, dependsOn?: Value<string>);
}
export interface AlarmConfigurationProperties {
    Alarms?: Alarm[];
    Enabled?: Value<boolean>;
    IgnorePollAlarmFailure?: Value<boolean>;
}
export declare class AlarmConfiguration extends ResourceBase {
    constructor(properties: AlarmConfigurationProperties, dependsOn?: Value<string>);
}
export interface DeploymentStyleProperties {
    DeploymentOption?: Value<string>;
}
export declare class DeploymentStyle extends ResourceBase {
    constructor(properties: DeploymentStyleProperties, dependsOn?: Value<string>);
}
export interface AlarmProperties {
    Name?: Value<string>;
}
export declare class Alarm extends ResourceBase {
    constructor(properties: AlarmProperties, dependsOn?: Value<string>);
}
export interface EC2TagFilterProperties {
    Key?: Value<string>;
    Type?: Value<string>;
    Value?: Value<string>;
}
export declare class EC2TagFilter extends ResourceBase {
    constructor(properties: EC2TagFilterProperties, dependsOn?: Value<string>);
}
export interface AutoRollbackConfigurationProperties {
    Enabled?: Value<boolean>;
    Events?: Value<string>[];
}
export declare class AutoRollbackConfiguration extends ResourceBase {
    constructor(properties: AutoRollbackConfigurationProperties, dependsOn?: Value<string>);
}
export interface DeploymentProperties {
    Description?: Value<string>;
    IgnoreApplicationStopFailures?: Value<boolean>;
    Revision: RevisionLocation;
}
export declare class Deployment extends ResourceBase {
    constructor(properties: DeploymentProperties, dependsOn?: Value<string>);
}
export interface DeploymentGroupProperties {
    AlarmConfiguration?: AlarmConfiguration;
    ApplicationName: Value<string>;
    AutoRollbackConfiguration?: AutoRollbackConfiguration;
    AutoScalingGroups?: Value<string>[];
    Deployment?: Deployment;
    DeploymentConfigName?: Value<string>;
    DeploymentGroupName?: Value<string>;
    DeploymentStyle?: DeploymentStyle;
    Ec2TagFilters?: EC2TagFilter[];
    LoadBalancerInfo?: LoadBalancerInfo;
    OnPremisesInstanceTagFilters?: TagFilter[];
    ServiceRoleArn: Value<string>;
    TriggerConfigurations?: TriggerConfig[];
}
export default class DeploymentGroup extends ResourceBase {
    constructor(properties: DeploymentGroupProperties, dependsOn?: Value<string>);
}
