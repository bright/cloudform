import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface TargetProperties {
    Id: Value<string>
    Port?: Value<number>
}

export default class Target extends ResourceBase {
    constructor(properties: TargetProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancingV2::Target', properties, dependsOn)
    }
}