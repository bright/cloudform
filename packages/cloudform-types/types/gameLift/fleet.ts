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
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AnywhereConfiguration {
    Cost!: Value<string>

    constructor(properties: AnywhereConfiguration) {
        Object.assign(this, properties)
    }
}

export class CertificateConfiguration {
    CertificateType!: Value<string>

    constructor(properties: CertificateConfiguration) {
        Object.assign(this, properties)
    }
}

export class IpPermission {
    IpRange!: Value<string>
    FromPort!: Value<number>
    ToPort!: Value<number>
    Protocol!: Value<string>

    constructor(properties: IpPermission) {
        Object.assign(this, properties)
    }
}

export class LocationCapacity {
    MinSize!: Value<number>
    DesiredEC2Instances!: Value<number>
    MaxSize!: Value<number>

    constructor(properties: LocationCapacity) {
        Object.assign(this, properties)
    }
}

export class LocationConfiguration {
    LocationCapacity?: LocationCapacity
    Location!: Value<string>

    constructor(properties: LocationConfiguration) {
        Object.assign(this, properties)
    }
}

export class ResourceCreationLimitPolicy {
    PolicyPeriodInMinutes?: Value<number>
    NewGameSessionsPerCreator?: Value<number>

    constructor(properties: ResourceCreationLimitPolicy) {
        Object.assign(this, properties)
    }
}

export class RuntimeConfiguration {
    ServerProcesses?: List<ServerProcess>
    MaxConcurrentGameSessionActivations?: Value<number>
    GameSessionActivationTimeoutSeconds?: Value<number>

    constructor(properties: RuntimeConfiguration) {
        Object.assign(this, properties)
    }
}

export class ScalingPolicy {
    Status?: Value<string>
    MetricName!: Value<string>
    PolicyType?: Value<string>
    ComparisonOperator?: Value<string>
    TargetConfiguration?: TargetConfiguration
    UpdateStatus?: Value<string>
    ScalingAdjustment?: Value<number>
    EvaluationPeriods?: Value<number>
    Location?: Value<string>
    Name!: Value<string>
    ScalingAdjustmentType?: Value<string>
    Threshold?: Value<number>

    constructor(properties: ScalingPolicy) {
        Object.assign(this, properties)
    }
}

export class ServerProcess {
    ConcurrentExecutions!: Value<number>
    Parameters?: Value<string>
    LaunchPath!: Value<string>

    constructor(properties: ServerProcess) {
        Object.assign(this, properties)
    }
}

export class TargetConfiguration {
    TargetValue!: Value<number>

    constructor(properties: TargetConfiguration) {
        Object.assign(this, properties)
    }
}

export interface FleetProperties {
    ScalingPolicies?: List<ScalingPolicy>
    Description?: Value<string>
    PeerVpcId?: Value<string>
    ApplyCapacity?: Value<string>
    FleetType?: Value<string>
    EC2InboundPermissions?: List<IpPermission>
    Locations?: List<LocationConfiguration>
    NewGameSessionProtectionPolicy?: Value<string>
    ScriptId?: Value<string>
    ComputeType?: Value<string>
    MaxSize?: Value<number>
    RuntimeConfiguration?: RuntimeConfiguration
    Name: Value<string>
    MinSize?: Value<number>
    PeerVpcAwsAccountId?: Value<string>
    AnywhereConfiguration?: AnywhereConfiguration
    InstanceRoleARN?: Value<string>
    MetricGroups?: List<Value<string>>
    BuildId?: Value<string>
    ResourceCreationLimitPolicy?: ResourceCreationLimitPolicy
    EC2InstanceType?: Value<string>
    CertificateConfiguration?: CertificateConfiguration
    InstanceRoleCredentialsProvider?: Value<string>
    DesiredEC2Instances?: Value<number>
    LogPaths?: List<Value<string>>
    ServerLaunchParameters?: Value<string>
    ServerLaunchPath?: Value<string>
}

export default class Fleet extends ResourceBase<FleetProperties> {
    static AnywhereConfiguration = AnywhereConfiguration
    static CertificateConfiguration = CertificateConfiguration
    static IpPermission = IpPermission
    static LocationCapacity = LocationCapacity
    static LocationConfiguration = LocationConfiguration
    static ResourceCreationLimitPolicy = ResourceCreationLimitPolicy
    static RuntimeConfiguration = RuntimeConfiguration
    static ScalingPolicy = ScalingPolicy
    static ServerProcess = ServerProcess
    static TargetConfiguration = TargetConfiguration

    constructor(properties: FleetProperties) {
        super('AWS::GameLift::Fleet', properties)
    }
}
