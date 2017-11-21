import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ConnectionDrainingPolicyProperties {
    Enabled: Value<boolean>
    Timeout?: Value<number>
}

export default class ConnectionDrainingPolicy extends ResourceBase {
    constructor(properties: ConnectionDrainingPolicyProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancing::ConnectionDrainingPolicy', properties, dependsOn)
    }
}