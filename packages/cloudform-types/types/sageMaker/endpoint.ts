/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
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

export class TrafficRoutingConfig {
    Type!: Value<string>
    CanarySize?: CapacitySize
    WaitIntervalInSeconds?: Value<number>

    constructor(properties: TrafficRoutingConfig) {
        Object.assign(this, properties)
    }
}

export class DeploymentConfig {
    AutoRollbackConfiguration?: AutoRollbackConfig
    BlueGreenUpdatePolicy!: BlueGreenUpdatePolicy

    constructor(properties: DeploymentConfig) {
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

export class VariantProperty {
    VariantPropertyType?: Value<string>

    constructor(properties: VariantProperty) {
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

export interface EndpointProperties {
    RetainAllVariantProperties?: Value<boolean>
    EndpointName?: Value<string>
    ExcludeRetainedVariantProperties?: List<VariantProperty>
    EndpointConfigName: Value<string>
    DeploymentConfig?: DeploymentConfig
    Tags?: List<ResourceTag>
}

export default class Endpoint extends ResourceBase<EndpointProperties> {
    static Alarm = Alarm
    static AutoRollbackConfig = AutoRollbackConfig
    static TrafficRoutingConfig = TrafficRoutingConfig
    static DeploymentConfig = DeploymentConfig
    static CapacitySize = CapacitySize
    static VariantProperty = VariantProperty
    static BlueGreenUpdatePolicy = BlueGreenUpdatePolicy

    constructor(properties: EndpointProperties) {
        super('AWS::SageMaker::Endpoint', properties)
    }
}
