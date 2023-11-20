/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DNSTargetResource {
    TargetResource?: TargetResource
    RecordType?: Value<string>
    DomainName?: Value<string>
    HostedZoneArn?: Value<string>
    RecordSetId?: Value<string>

    constructor(properties: DNSTargetResource) {
        Object.assign(this, properties)
    }
}

export class NLBResource {
    Arn?: Value<string>

    constructor(properties: NLBResource) {
        Object.assign(this, properties)
    }
}

export class R53ResourceRecord {
    DomainName?: Value<string>
    RecordSetId?: Value<string>

    constructor(properties: R53ResourceRecord) {
        Object.assign(this, properties)
    }
}

export class Resource {
    ResourceArn?: Value<string>
    DnsTargetResource?: DNSTargetResource
    ReadinessScopes?: List<Value<string>>
    ComponentId?: Value<string>

    constructor(properties: Resource) {
        Object.assign(this, properties)
    }
}

export class TargetResource {
    R53Resource?: R53ResourceRecord
    NLBResource?: NLBResource

    constructor(properties: TargetResource) {
        Object.assign(this, properties)
    }
}

export interface ResourceSetProperties {
    ResourceSetType: Value<string>
    ResourceSetName?: Value<string>
    Resources: List<Resource>
    Tags?: List<ResourceTag>
}

export default class ResourceSet extends ResourceBase<ResourceSetProperties> {
    static DNSTargetResource = DNSTargetResource
    static NLBResource = NLBResource
    static R53ResourceRecord = R53ResourceRecord
    static Resource = Resource
    static TargetResource = TargetResource

    constructor(properties: ResourceSetProperties) {
        super('AWS::Route53RecoveryReadiness::ResourceSet', properties)
    }
}
