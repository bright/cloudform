/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
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
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AbortIncompleteMultipartUpload {
    DaysAfterInitiation!: Value<number>

    constructor(properties: AbortIncompleteMultipartUpload) {
        Object.assign(this, properties)
    }
}

export class Filter {
    AndOperator?: FilterAndOperator
    Prefix?: Value<string>
    Tag?: FilterTag

    constructor(properties: Filter) {
        Object.assign(this, properties)
    }
}

export class FilterAndOperator {
    Prefix?: Value<string>
    Tags!: List<FilterTag>

    constructor(properties: FilterAndOperator) {
        Object.assign(this, properties)
    }
}

export class FilterTag {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: FilterTag) {
        Object.assign(this, properties)
    }
}

export class LifecycleConfiguration {
    Rules!: List<Rule>

    constructor(properties: LifecycleConfiguration) {
        Object.assign(this, properties)
    }
}

export class Rule {
    Status!: Value<string>
    ExpirationDate?: Value<string>
    Filter?: Filter
    ExpirationInDays?: Value<number>
    Id?: Value<string>
    AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export interface BucketProperties {
    OutpostId: Value<string>
    BucketName: Value<string>
    LifecycleConfiguration?: LifecycleConfiguration
    Tags?: List<ResourceTag>
}

export default class Bucket extends ResourceBase<BucketProperties> {
    static AbortIncompleteMultipartUpload = AbortIncompleteMultipartUpload
    static Filter = Filter
    static FilterAndOperator = FilterAndOperator
    static FilterTag = FilterTag
    static LifecycleConfiguration = LifecycleConfiguration
    static Rule = Rule

    constructor(properties: BucketProperties) {
        super('AWS::S3Outposts::Bucket', properties)
    }
}
