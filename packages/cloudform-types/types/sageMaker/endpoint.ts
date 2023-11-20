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
    AlarmName!: Value<string>

    constructor(properties: Alarm) {
        Object.assign(this, properties)
    }
}

export class AutoRollbackConfig {
    Alarms!: List<Alarm>

    constructor(properties: AutoRollbackConfig) {
        Object.assign(this, properties)
    }
}

export class BlueGreenUpdatePolicy {
    MaximumExecutionTimeoutInSeconds?: Value<number>
    TerminationWaitInSeconds?: Value<number>
    TrafficRoutingConfiguration!: TrafficRoutingConfig

    constructor(properties: BlueGreenUpdatePolicy) {
        Object.assign(this, properties)
    }
}

export class CapacitySize {
    Type!: Value<string>
    Value!: Value<number>

    constructor(properties: CapacitySize) {
        Object.assign(this, properties)
    }
}

export class DeploymentConfig {
    AutoRollbackConfiguration?: AutoRollbackConfig
    RollingUpdatePolicy?: RollingUpdatePolicy
    BlueGreenUpdatePolicy?: BlueGreenUpdatePolicy

    constructor(properties: DeploymentConfig) {
        Object.assign(this, properties)
    }
}

export class RollingUpdatePolicy {
    MaximumExecutionTimeoutInSeconds?: Value<number>
    MaximumBatchSize!: CapacitySize
    WaitIntervalInSeconds!: Value<number>
    RollbackMaximumBatchSize?: CapacitySize

    constructor(properties: RollingUpdatePolicy) {
        Object.assign(this, properties)
    }
}

export class TrafficRoutingConfig {
    Type!: Value<string>
    LinearStepSize?: CapacitySize
    CanarySize?: CapacitySize
    WaitIntervalInSeconds?: Value<number>

    constructor(properties: TrafficRoutingConfig) {
        Object.assign(this, properties)
    }
}

export class VariantProperty {
    VariantPropertyType?: Value<string>

    constructor(properties: VariantProperty) {
        Object.assign(this, properties)
    }
}

export interface EndpointProperties {
    RetainAllVariantProperties?: Value<boolean>
    EndpointName?: Value<string>
    ExcludeRetainedVariantProperties?: List<VariantProperty>
    EndpointConfigName: Value<string>
    DeploymentConfig?: DeploymentConfig
    RetainDeploymentConfig?: Value<boolean>
    Tags?: List<ResourceTag>
}

export default class Endpoint extends ResourceBase<EndpointProperties> {
    static Alarm = Alarm
    static AutoRollbackConfig = AutoRollbackConfig
    static BlueGreenUpdatePolicy = BlueGreenUpdatePolicy
    static CapacitySize = CapacitySize
    static DeploymentConfig = DeploymentConfig
    static RollingUpdatePolicy = RollingUpdatePolicy
    static TrafficRoutingConfig = TrafficRoutingConfig
    static VariantProperty = VariantProperty

    constructor(properties: EndpointProperties) {
        super('AWS::SageMaker::Endpoint', properties)
    }
}
