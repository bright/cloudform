/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class DateFilter {
    EndInclusive?: Value<number>
    StartInclusive?: Value<number>

    constructor(properties: DateFilter) {
        Object.assign(this, properties)
    }
}

export class FilterCriteria {
    ResourceTags?: List<MapFilter>
    Ec2InstanceImageId?: List<StringFilter>
    FirstObservedAt?: List<DateFilter>
    InspectorScore?: List<NumberFilter>
    Ec2InstanceVpcId?: List<StringFilter>
    LastObservedAt?: List<DateFilter>
    EcrImagePushedAt?: List<DateFilter>
    EcrImageArchitecture?: List<StringFilter>
    RelatedVulnerabilities?: List<StringFilter>
    EcrImageTags?: List<StringFilter>
    VulnerabilityId?: List<StringFilter>
    ComponentType?: List<StringFilter>
    VendorSeverity?: List<StringFilter>
    EcrImageRepositoryName?: List<StringFilter>
    Title?: List<StringFilter>
    ResourceType?: List<StringFilter>
    Severity?: List<StringFilter>
    NetworkProtocol?: List<StringFilter>
    UpdatedAt?: List<DateFilter>
    EcrImageHash?: List<StringFilter>
    PortRange?: List<PortRangeFilter>
    VulnerabilitySource?: List<StringFilter>
    Ec2InstanceSubnetId?: List<StringFilter>
    FindingArn?: List<StringFilter>
    ResourceId?: List<StringFilter>
    FindingStatus?: List<StringFilter>
    VulnerablePackages?: List<PackageFilter>
    AwsAccountId?: List<StringFilter>
    ComponentId?: List<StringFilter>
    EcrImageRegistry?: List<StringFilter>
    FindingType?: List<StringFilter>

    constructor(properties: FilterCriteria) {
        Object.assign(this, properties)
    }
}

export class MapFilter {
    Comparison!: Value<string>
    Value?: Value<string>
    Key?: Value<string>

    constructor(properties: MapFilter) {
        Object.assign(this, properties)
    }
}

export class NumberFilter {
    LowerInclusive?: Value<number>
    UpperInclusive?: Value<number>

    constructor(properties: NumberFilter) {
        Object.assign(this, properties)
    }
}

export class PackageFilter {
    Architecture?: StringFilter
    Version?: StringFilter
    Epoch?: NumberFilter
    SourceLayerHash?: StringFilter
    Release?: StringFilter
    Name?: StringFilter

    constructor(properties: PackageFilter) {
        Object.assign(this, properties)
    }
}

export class PortRangeFilter {
    BeginInclusive?: Value<number>
    EndInclusive?: Value<number>

    constructor(properties: PortRangeFilter) {
        Object.assign(this, properties)
    }
}

export class StringFilter {
    Comparison!: Value<string>
    Value!: Value<string>

    constructor(properties: StringFilter) {
        Object.assign(this, properties)
    }
}

export interface FilterProperties {
    Description?: Value<string>
    FilterCriteria: FilterCriteria
    FilterAction: Value<string>
    Name: Value<string>
}

export default class Filter extends ResourceBase<FilterProperties> {
    static DateFilter = DateFilter
    static FilterCriteria = FilterCriteria
    static MapFilter = MapFilter
    static NumberFilter = NumberFilter
    static PackageFilter = PackageFilter
    static PortRangeFilter = PortRangeFilter
    static StringFilter = StringFilter

    constructor(properties: FilterProperties) {
        super('AWS::InspectorV2::Filter', properties)
    }
}
