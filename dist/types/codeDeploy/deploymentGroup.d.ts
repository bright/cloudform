import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoadBalancerInfo {
    ElbInfoList?: List<ELBInfo>;
    TargetGroupInfoList?: List<TargetGroupInfo>;
    constructor(properties: LoadBalancerInfo);
}
export declare class RevisionLocation {
    GitHubLocation?: GitHubLocation;
    RevisionType?: Value<string>;
    S3Location?: S3Location;
    constructor(properties: RevisionLocation);
}
export declare class S3Location {
    Bucket: Value<string>;
    BundleType?: Value<string>;
    ETag?: Value<string>;
    Key: Value<string>;
    Version?: Value<string>;
    constructor(properties: S3Location);
}
export declare class TriggerConfig {
    TriggerEvents?: List<Value<string>>;
    TriggerName?: Value<string>;
    TriggerTargetArn?: Value<string>;
    constructor(properties: TriggerConfig);
}
export declare class TagFilter {
    Key?: Value<string>;
    Type?: Value<string>;
    Value?: Value<string>;
    constructor(properties: TagFilter);
}
export declare class GitHubLocation {
    CommitId: Value<string>;
    Repository: Value<string>;
    constructor(properties: GitHubLocation);
}
export declare class TargetGroupInfo {
    Name?: Value<string>;
    constructor(properties: TargetGroupInfo);
}
export declare class ELBInfo {
    Name?: Value<string>;
    constructor(properties: ELBInfo);
}
export declare class AlarmConfiguration {
    Alarms?: List<Alarm>;
    Enabled?: Value<boolean>;
    IgnorePollAlarmFailure?: Value<boolean>;
    constructor(properties: AlarmConfiguration);
}
export declare class DeploymentStyle {
    DeploymentOption?: Value<string>;
    constructor(properties: DeploymentStyle);
}
export declare class Alarm {
    Name?: Value<string>;
    constructor(properties: Alarm);
}
export declare class EC2TagFilter {
    Key?: Value<string>;
    Type?: Value<string>;
    Value?: Value<string>;
    constructor(properties: EC2TagFilter);
}
export declare class AutoRollbackConfiguration {
    Enabled?: Value<boolean>;
    Events?: List<Value<string>>;
    constructor(properties: AutoRollbackConfiguration);
}
export declare class Deployment {
    Description?: Value<string>;
    IgnoreApplicationStopFailures?: Value<boolean>;
    Revision: RevisionLocation;
    constructor(properties: Deployment);
}
export interface DeploymentGroupProperties {
    AlarmConfiguration?: AlarmConfiguration;
    ApplicationName: Value<string>;
    AutoRollbackConfiguration?: AutoRollbackConfiguration;
    AutoScalingGroups?: List<Value<string>>;
    Deployment?: Deployment;
    DeploymentConfigName?: Value<string>;
    DeploymentGroupName?: Value<string>;
    DeploymentStyle?: DeploymentStyle;
    Ec2TagFilters?: List<EC2TagFilter>;
    LoadBalancerInfo?: LoadBalancerInfo;
    OnPremisesInstanceTagFilters?: List<TagFilter>;
    ServiceRoleArn: Value<string>;
    TriggerConfigurations?: List<TriggerConfig>;
}
export default class DeploymentGroup extends ResourceBase {
    constructor(properties: DeploymentGroupProperties);
}
