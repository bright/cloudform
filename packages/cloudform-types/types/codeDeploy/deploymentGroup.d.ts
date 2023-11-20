import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Alarm {
    Name?: Value<string>;
    constructor(properties: Alarm);
}
export declare class AlarmConfiguration {
    Alarms?: List<Alarm>;
    Enabled?: Value<boolean>;
    IgnorePollAlarmFailure?: Value<boolean>;
    constructor(properties: AlarmConfiguration);
}
export declare class AutoRollbackConfiguration {
    Enabled?: Value<boolean>;
    Events?: List<Value<string>>;
    constructor(properties: AutoRollbackConfiguration);
}
export declare class BlueGreenDeploymentConfiguration {
    DeploymentReadyOption?: DeploymentReadyOption;
    GreenFleetProvisioningOption?: GreenFleetProvisioningOption;
    TerminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption;
    constructor(properties: BlueGreenDeploymentConfiguration);
}
export declare class BlueInstanceTerminationOption {
    Action?: Value<string>;
    TerminationWaitTimeInMinutes?: Value<number>;
    constructor(properties: BlueInstanceTerminationOption);
}
export declare class Deployment {
    Description?: Value<string>;
    IgnoreApplicationStopFailures?: Value<boolean>;
    Revision: RevisionLocation;
    constructor(properties: Deployment);
}
export declare class DeploymentReadyOption {
    ActionOnTimeout?: Value<string>;
    WaitTimeInMinutes?: Value<number>;
    constructor(properties: DeploymentReadyOption);
}
export declare class DeploymentStyle {
    DeploymentOption?: Value<string>;
    DeploymentType?: Value<string>;
    constructor(properties: DeploymentStyle);
}
export declare class EC2TagFilter {
    Key?: Value<string>;
    Type?: Value<string>;
    Value?: Value<string>;
    constructor(properties: EC2TagFilter);
}
export declare class EC2TagSet {
    Ec2TagSetList?: List<EC2TagSetListObject>;
    constructor(properties: EC2TagSet);
}
export declare class EC2TagSetListObject {
    Ec2TagGroup?: List<EC2TagFilter>;
    constructor(properties: EC2TagSetListObject);
}
export declare class ECSService {
    ClusterName: Value<string>;
    ServiceName: Value<string>;
    constructor(properties: ECSService);
}
export declare class ELBInfo {
    Name?: Value<string>;
    constructor(properties: ELBInfo);
}
export declare class GitHubLocation {
    CommitId: Value<string>;
    Repository: Value<string>;
    constructor(properties: GitHubLocation);
}
export declare class GreenFleetProvisioningOption {
    Action?: Value<string>;
    constructor(properties: GreenFleetProvisioningOption);
}
export declare class LoadBalancerInfo {
    ElbInfoList?: List<ELBInfo>;
    TargetGroupInfoList?: List<TargetGroupInfo>;
    TargetGroupPairInfoList?: List<TargetGroupPairInfo>;
    constructor(properties: LoadBalancerInfo);
}
export declare class OnPremisesTagSet {
    OnPremisesTagSetList?: List<OnPremisesTagSetListObject>;
    constructor(properties: OnPremisesTagSet);
}
export declare class OnPremisesTagSetListObject {
    OnPremisesTagGroup?: List<TagFilter>;
    constructor(properties: OnPremisesTagSetListObject);
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
export declare class TagFilter {
    Key?: Value<string>;
    Type?: Value<string>;
    Value?: Value<string>;
    constructor(properties: TagFilter);
}
export declare class TargetGroupInfo {
    Name?: Value<string>;
    constructor(properties: TargetGroupInfo);
}
export declare class TargetGroupPairInfo {
    ProdTrafficRoute?: TrafficRoute;
    TargetGroups?: List<TargetGroupInfo>;
    TestTrafficRoute?: TrafficRoute;
    constructor(properties: TargetGroupPairInfo);
}
export declare class TrafficRoute {
    ListenerArns?: List<Value<string>>;
    constructor(properties: TrafficRoute);
}
export declare class TriggerConfig {
    TriggerEvents?: List<Value<string>>;
    TriggerName?: Value<string>;
    TriggerTargetArn?: Value<string>;
    constructor(properties: TriggerConfig);
}
export interface DeploymentGroupProperties {
    AlarmConfiguration?: AlarmConfiguration;
    ApplicationName: Value<string>;
    AutoRollbackConfiguration?: AutoRollbackConfiguration;
    AutoScalingGroups?: List<Value<string>>;
    BlueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration;
    Deployment?: Deployment;
    DeploymentConfigName?: Value<string>;
    DeploymentGroupName?: Value<string>;
    DeploymentStyle?: DeploymentStyle;
    ECSServices?: List<ECSService>;
    Ec2TagFilters?: List<EC2TagFilter>;
    Ec2TagSet?: EC2TagSet;
    LoadBalancerInfo?: LoadBalancerInfo;
    OnPremisesInstanceTagFilters?: List<TagFilter>;
    OnPremisesTagSet?: OnPremisesTagSet;
    OutdatedInstancesStrategy?: Value<string>;
    ServiceRoleArn: Value<string>;
    Tags?: List<ResourceTag>;
    TriggerConfigurations?: List<TriggerConfig>;
}
export default class DeploymentGroup extends ResourceBase<DeploymentGroupProperties> {
    static Alarm: typeof Alarm;
    static AlarmConfiguration: typeof AlarmConfiguration;
    static AutoRollbackConfiguration: typeof AutoRollbackConfiguration;
    static BlueGreenDeploymentConfiguration: typeof BlueGreenDeploymentConfiguration;
    static BlueInstanceTerminationOption: typeof BlueInstanceTerminationOption;
    static Deployment: typeof Deployment;
    static DeploymentReadyOption: typeof DeploymentReadyOption;
    static DeploymentStyle: typeof DeploymentStyle;
    static EC2TagFilter: typeof EC2TagFilter;
    static EC2TagSet: typeof EC2TagSet;
    static EC2TagSetListObject: typeof EC2TagSetListObject;
    static ECSService: typeof ECSService;
    static ELBInfo: typeof ELBInfo;
    static GitHubLocation: typeof GitHubLocation;
    static GreenFleetProvisioningOption: typeof GreenFleetProvisioningOption;
    static LoadBalancerInfo: typeof LoadBalancerInfo;
    static OnPremisesTagSet: typeof OnPremisesTagSet;
    static OnPremisesTagSetListObject: typeof OnPremisesTagSetListObject;
    static RevisionLocation: typeof RevisionLocation;
    static S3Location: typeof S3Location;
    static TagFilter: typeof TagFilter;
    static TargetGroupInfo: typeof TargetGroupInfo;
    static TargetGroupPairInfo: typeof TargetGroupPairInfo;
    static TrafficRoute: typeof TrafficRoute;
    static TriggerConfig: typeof TriggerConfig;
    constructor(properties: DeploymentGroupProperties);
}
