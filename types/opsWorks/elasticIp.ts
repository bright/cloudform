import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ElasticIpProperties {
    Ip: Value<string>
    Name?: Value<string>
}

export default class ElasticIp extends ResourceBase {
    constructor(properties: ElasticIpProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::ElasticIp', properties, dependsOn)
    }
}