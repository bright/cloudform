/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class TargetGroupAttribute {
    Key?: Value<string>
    Value?: Value<string>

    constructor(properties: TargetGroupAttribute) {
        Object.assign(this, properties)
    }
}

export class Matcher {
    HttpCode!: Value<string>

    constructor(properties: Matcher) {
        Object.assign(this, properties)
    }
}

export class TargetDescription {
    AvailabilityZone?: Value<string>
    Id!: Value<string>
    Port?: Value<number>

    constructor(properties: TargetDescription) {
        Object.assign(this, properties)
    }
}

export interface TargetGroupProperties {
    HealthCheckEnabled?: Value<boolean>
    HealthCheckIntervalSeconds?: Value<number>
    HealthCheckPath?: Value<string>
    HealthCheckPort?: Value<string>
    HealthCheckProtocol?: Value<string>
    HealthCheckTimeoutSeconds?: Value<number>
    HealthyThresholdCount?: Value<number>
    Matcher?: Matcher
    Name?: Value<string>
    Port?: Value<number>
    Protocol?: Value<string>
    Tags?: List<ResourceTag>
    TargetGroupAttributes?: List<TargetGroupAttribute>
    TargetType?: Value<string>
    Targets?: List<TargetDescription>
    UnhealthyThresholdCount?: Value<number>
    VpcId?: Value<string>
}

export default class TargetGroup extends ResourceBase<TargetGroupProperties> {
    static TargetGroupAttribute = TargetGroupAttribute
    static Matcher = Matcher
    static TargetDescription = TargetDescription

    constructor(properties?: TargetGroupProperties) {
        super('AWS::ElasticLoadBalancingV2::TargetGroup', properties)
    }
}
