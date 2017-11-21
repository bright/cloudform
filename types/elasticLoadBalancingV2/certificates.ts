import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface CertificatesProperties {
    CertificateArn?: Value<string>
}

export default class Certificates extends ResourceBase {
    constructor(properties: CertificatesProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticLoadBalancingV2::Certificates', properties, dependsOn)
    }
}