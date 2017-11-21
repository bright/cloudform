import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ElasticLoadBalancerAttachmentProperties {
    ElasticLoadBalancerName: Value<string>
    LayerId: Value<string>
}

export default class ElasticLoadBalancerAttachment extends ResourceBase {
    constructor(properties: ElasticLoadBalancerAttachmentProperties, dependsOn?: Value<string>) {
        super('AWS::OpsWorks::ElasticLoadBalancerAttachment', properties, dependsOn)
    }
}