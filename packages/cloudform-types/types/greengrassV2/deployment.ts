/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ComponentConfigurationUpdate {
    Merge?: Value<string>
    Reset?: List<Value<string>>

    constructor(properties: ComponentConfigurationUpdate) {
        Object.assign(this, properties)
    }
}

export class ComponentDeploymentSpecification {
    RunWith?: ComponentRunWith
    ConfigurationUpdate?: ComponentConfigurationUpdate
    ComponentVersion?: Value<string>

    constructor(properties: ComponentDeploymentSpecification) {
        Object.assign(this, properties)
    }
}

export class ComponentRunWith {
    WindowsUser?: Value<string>
    SystemResourceLimits?: SystemResourceLimits
    PosixUser?: Value<string>

    constructor(properties: ComponentRunWith) {
        Object.assign(this, properties)
    }
}

export class DeploymentComponentUpdatePolicy {
    Action?: Value<string>
    TimeoutInSeconds?: Value<number>

    constructor(properties: DeploymentComponentUpdatePolicy) {
        Object.assign(this, properties)
    }
}

export class DeploymentConfigurationValidationPolicy {
    TimeoutInSeconds?: Value<number>

    constructor(properties: DeploymentConfigurationValidationPolicy) {
        Object.assign(this, properties)
    }
}

export class DeploymentIoTJobConfiguration {
    JobExecutionsRolloutConfig?: IoTJobExecutionsRolloutConfig
    TimeoutConfig?: IoTJobTimeoutConfig
    AbortConfig?: IoTJobAbortConfig

    constructor(properties: DeploymentIoTJobConfiguration) {
        Object.assign(this, properties)
    }
}

export class DeploymentPolicies {
    ComponentUpdatePolicy?: DeploymentComponentUpdatePolicy
    ConfigurationValidationPolicy?: DeploymentConfigurationValidationPolicy
    FailureHandlingPolicy?: Value<string>

    constructor(properties: DeploymentPolicies) {
        Object.assign(this, properties)
    }
}

export class IoTJobAbortConfig {
    CriteriaList!: List<IoTJobAbortCriteria>

    constructor(properties: IoTJobAbortConfig) {
        Object.assign(this, properties)
    }
}

export class IoTJobAbortCriteria {
    FailureType!: Value<string>
    Action!: Value<string>
    ThresholdPercentage!: Value<number>
    MinNumberOfExecutedThings!: Value<number>

    constructor(properties: IoTJobAbortCriteria) {
        Object.assign(this, properties)
    }
}

export class IoTJobExecutionsRolloutConfig {
    MaximumPerMinute?: Value<number>
    ExponentialRate?: IoTJobExponentialRolloutRate

    constructor(properties: IoTJobExecutionsRolloutConfig) {
        Object.assign(this, properties)
    }
}

export class IoTJobExponentialRolloutRate {
    RateIncreaseCriteria!: IoTJobRateIncreaseCriteria
    BaseRatePerMinute!: Value<number>
    IncrementFactor!: Value<number>

    constructor(properties: IoTJobExponentialRolloutRate) {
        Object.assign(this, properties)
    }
}

export class IoTJobRateIncreaseCriteria {
    NumberOfSucceededThings?: Value<number>
    NumberOfNotifiedThings?: Value<number>

    constructor(properties: IoTJobRateIncreaseCriteria) {
        Object.assign(this, properties)
    }
}

export class IoTJobTimeoutConfig {
    InProgressTimeoutInMinutes?: Value<number>

    constructor(properties: IoTJobTimeoutConfig) {
        Object.assign(this, properties)
    }
}

export class SystemResourceLimits {
    Memory?: Value<number>
    Cpus?: Value<number>

    constructor(properties: SystemResourceLimits) {
        Object.assign(this, properties)
    }
}

export interface DeploymentProperties {
    Components?: {[key: string]: ComponentDeploymentSpecification}
    DeploymentName?: Value<string>
    IotJobConfiguration?: DeploymentIoTJobConfiguration
    DeploymentPolicies?: DeploymentPolicies
    TargetArn: Value<string>
    ParentTargetArn?: Value<string>
    Tags?: {[key: string]: Value<string>}
}

export default class Deployment extends ResourceBase<DeploymentProperties> {
    static ComponentConfigurationUpdate = ComponentConfigurationUpdate
    static ComponentDeploymentSpecification = ComponentDeploymentSpecification
    static ComponentRunWith = ComponentRunWith
    static DeploymentComponentUpdatePolicy = DeploymentComponentUpdatePolicy
    static DeploymentConfigurationValidationPolicy = DeploymentConfigurationValidationPolicy
    static DeploymentIoTJobConfiguration = DeploymentIoTJobConfiguration
    static DeploymentPolicies = DeploymentPolicies
    static IoTJobAbortConfig = IoTJobAbortConfig
    static IoTJobAbortCriteria = IoTJobAbortCriteria
    static IoTJobExecutionsRolloutConfig = IoTJobExecutionsRolloutConfig
    static IoTJobExponentialRolloutRate = IoTJobExponentialRolloutRate
    static IoTJobRateIncreaseCriteria = IoTJobRateIncreaseCriteria
    static IoTJobTimeoutConfig = IoTJobTimeoutConfig
    static SystemResourceLimits = SystemResourceLimits

    constructor(properties: DeploymentProperties) {
        super('AWS::GreengrassV2::Deployment', properties)
    }
}
