import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ScalableTargetProperties {
    MaxCapacity: Value<number>
    MinCapacity: Value<number>
    ResourceId: Value<string>
    RoleARN?: Value<string>
    ScalableDimension: Value<string>
    ServiceNamespace: Value<string>
}

export default class ScalableTarget extends ResourceBase {
    constructor(properties: ScalableTargetProperties, dependsOn?: Value<string>) {
        super('AWS::ApplicationAutoScaling::ScalableTarget', properties, dependsOn)
    }
}