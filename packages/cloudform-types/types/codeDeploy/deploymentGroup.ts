/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Alarm {
    Name?: Value<string>

    constructor(properties: Alarm) {
        Object.assign(this, properties)
    }
}

export class AlarmConfiguration {
    Alarms?: List<Alarm>
    Enabled?: Value<boolean>
    IgnorePollAlarmFailure?: Value<boolean>

    constructor(properties: AlarmConfiguration) {
        Object.assign(this, properties)
    }
}

export class AutoRollbackConfiguration {
    Enabled?: Value<boolean>
    Events?: List<Value<string>>

    constructor(properties: AutoRollbackConfiguration) {
        Object.assign(this, properties)
    }
}

export class BlueGreenDeploymentConfiguration {
    DeploymentReadyOption?: DeploymentReadyOption
    GreenFleetProvisioningOption?: GreenFleetProvisioningOption
    TerminateBlueInstancesOnDeploymentSuccess?: BlueInstanceTerminationOption

    constructor(properties: BlueGreenDeploymentConfiguration) {
        Object.assign(this, properties)
    }
}

export class BlueInstanceTerminationOption {
    Action?: Value<string>
    TerminationWaitTimeInMinutes?: Value<number>

    constructor(properties: BlueInstanceTerminationOption) {
        Object.assign(this, properties)
    }
}

export class Deployment {
    Description?: Value<string>
    IgnoreApplicationStopFailures?: Value<boolean>
    Revision!: RevisionLocation

    constructor(properties: Deployment) {
        Object.assign(this, properties)
    }
}

export class DeploymentReadyOption {
    ActionOnTimeout?: Value<string>
    WaitTimeInMinutes?: Value<number>

    constructor(properties: DeploymentReadyOption) {
        Object.assign(this, properties)
    }
}

export class DeploymentStyle {
    DeploymentOption?: Value<string>
    DeploymentType?: Value<string>

    constructor(properties: DeploymentStyle) {
        Object.assign(this, properties)
    }
}

export class EC2TagFilter {
    Key?: Value<string>
    Type?: Value<string>
    Value?: Value<string>

    constructor(properties: EC2TagFilter) {
        Object.assign(this, properties)
    }
}

export class EC2TagSet {
    Ec2TagSetList?: List<EC2TagSetListObject>

    constructor(properties: EC2TagSet) {
        Object.assign(this, properties)
    }
}

export class EC2TagSetListObject {
    Ec2TagGroup?: List<EC2TagFilter>

    constructor(properties: EC2TagSetListObject) {
        Object.assign(this, properties)
    }
}

export class ECSService {
    ClusterName!: Value<string>
    ServiceName!: Value<string>

    constructor(properties: ECSService) {
        Object.assign(this, properties)
    }
}

export class ELBInfo {
    Name?: Value<string>

    constructor(properties: ELBInfo) {
        Object.assign(this, properties)
    }
}

export class GitHubLocation {
    CommitId!: Value<string>
    Repository!: Value<string>

    constructor(properties: GitHubLocation) {
        Object.assign(this, properties)
    }
}

export class GreenFleetProvisioningOption {
    Action?: Value<string>

    constructor(properties: GreenFleetProvisioningOption) {
        Object.assign(this, properties)
    }
}

export class LoadBalancerInfo {
    ElbInfoList?: List<ELBInfo>
    TargetGroupInfoList?: List<TargetGroupInfo>
    TargetGroupPairInfoList?: List<TargetGroupPairInfo>

    constructor(properties: LoadBalancerInfo) {
        Object.assign(this, properties)
    }
}

export class OnPremisesTagSet {
    OnPremisesTagSetList?: List<OnPremisesTagSetListObject>

    constructor(properties: OnPremisesTagSet) {
        Object.assign(this, properties)
    }
}

export class OnPremisesTagSetListObject {
    OnPremisesTagGroup?: List<TagFilter>

    constructor(properties: OnPremisesTagSetListObject) {
        Object.assign(this, properties)
    }
}

export class RevisionLocation {
    GitHubLocation?: GitHubLocation
    RevisionType?: Value<string>
    S3Location?: S3Location

    constructor(properties: RevisionLocation) {
        Object.assign(this, properties)
    }
}

export class S3Location {
    Bucket!: Value<string>
    BundleType?: Value<string>
    ETag?: Value<string>
    Key!: Value<string>
    Version?: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export class TagFilter {
    Key?: Value<string>
    Type?: Value<string>
    Value?: Value<string>

    constructor(properties: TagFilter) {
        Object.assign(this, properties)
    }
}

export class TargetGroupInfo {
    Name?: Value<string>

    constructor(properties: TargetGroupInfo) {
        Object.assign(this, properties)
    }
}

export class TargetGroupPairInfo {
    ProdTrafficRoute?: TrafficRoute
    TargetGroups?: List<TargetGroupInfo>
    TestTrafficRoute?: TrafficRoute

    constructor(properties: TargetGroupPairInfo) {
        Object.assign(this, properties)
    }
}

export class TrafficRoute {
    ListenerArns?: List<Value<string>>

    constructor(properties: TrafficRoute) {
        Object.assign(this, properties)
    }
}

export class TriggerConfig {
    TriggerEvents?: List<Value<string>>
    TriggerName?: Value<string>
    TriggerTargetArn?: Value<string>

    constructor(properties: TriggerConfig) {
        Object.assign(this, properties)
    }
}

export interface DeploymentGroupProperties {
    AlarmConfiguration?: AlarmConfiguration
    ApplicationName: Value<string>
    AutoRollbackConfiguration?: AutoRollbackConfiguration
    AutoScalingGroups?: List<Value<string>>
    BlueGreenDeploymentConfiguration?: BlueGreenDeploymentConfiguration
    Deployment?: Deployment
    DeploymentConfigName?: Value<string>
    DeploymentGroupName?: Value<string>
    DeploymentStyle?: DeploymentStyle
    ECSServices?: List<ECSService>
    Ec2TagFilters?: List<EC2TagFilter>
    Ec2TagSet?: EC2TagSet
    LoadBalancerInfo?: LoadBalancerInfo
    OnPremisesInstanceTagFilters?: List<TagFilter>
    OnPremisesTagSet?: OnPremisesTagSet
    OutdatedInstancesStrategy?: Value<string>
    ServiceRoleArn: Value<string>
    Tags?: List<ResourceTag>
    TriggerConfigurations?: List<TriggerConfig>
}

export default class DeploymentGroup extends ResourceBase<DeploymentGroupProperties> {
    static Alarm = Alarm
    static AlarmConfiguration = AlarmConfiguration
    static AutoRollbackConfiguration = AutoRollbackConfiguration
    static BlueGreenDeploymentConfiguration = BlueGreenDeploymentConfiguration
    static BlueInstanceTerminationOption = BlueInstanceTerminationOption
    static Deployment = Deployment
    static DeploymentReadyOption = DeploymentReadyOption
    static DeploymentStyle = DeploymentStyle
    static EC2TagFilter = EC2TagFilter
    static EC2TagSet = EC2TagSet
    static EC2TagSetListObject = EC2TagSetListObject
    static ECSService = ECSService
    static ELBInfo = ELBInfo
    static GitHubLocation = GitHubLocation
    static GreenFleetProvisioningOption = GreenFleetProvisioningOption
    static LoadBalancerInfo = LoadBalancerInfo
    static OnPremisesTagSet = OnPremisesTagSet
    static OnPremisesTagSetListObject = OnPremisesTagSetListObject
    static RevisionLocation = RevisionLocation
    static S3Location = S3Location
    static TagFilter = TagFilter
    static TargetGroupInfo = TargetGroupInfo
    static TargetGroupPairInfo = TargetGroupPairInfo
    static TrafficRoute = TrafficRoute
    static TriggerConfig = TriggerConfig

    constructor(properties: DeploymentGroupProperties) {
        super('AWS::CodeDeploy::DeploymentGroup', properties)
    }
}
