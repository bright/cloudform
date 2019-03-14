import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ElasticLoadBalancerAttachmentProperties {
    ElasticLoadBalancerName: Value<string>;
    LayerId: Value<string>;
}
export default class ElasticLoadBalancerAttachment extends ResourceBase<ElasticLoadBalancerAttachmentProperties> {
    constructor(properties: ElasticLoadBalancerAttachmentProperties);
}
