import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface LoadBalancerProperties {
    ContainerName?: Value<string>
    ContainerPort?: Value<number>
    LoadBalancerName?: Value<string>
    TargetGroupArn?: Value<string>
}

export default class LoadBalancer extends ResourceBase {
    constructor(properties: LoadBalancerProperties, dependsOn?: Value<string>) {
        super('AWS::ECS::LoadBalancer', properties, dependsOn)
    }
}