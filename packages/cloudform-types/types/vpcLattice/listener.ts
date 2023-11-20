/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DefaultAction {
    Forward?: Forward
    FixedResponse?: FixedResponse

    constructor(properties: DefaultAction) {
        Object.assign(this, properties)
    }
}

export class FixedResponse {
    StatusCode!: Value<number>

    constructor(properties: FixedResponse) {
        Object.assign(this, properties)
    }
}

export class Forward {
    TargetGroups!: List<WeightedTargetGroup>

    constructor(properties: Forward) {
        Object.assign(this, properties)
    }
}

export class WeightedTargetGroup {
    Weight?: Value<number>
    TargetGroupIdentifier!: Value<string>

    constructor(properties: WeightedTargetGroup) {
        Object.assign(this, properties)
    }
}

export interface ListenerProperties {
    DefaultAction: DefaultAction
    Port?: Value<number>
    ServiceIdentifier?: Value<string>
    Protocol: Value<string>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class Listener extends ResourceBase<ListenerProperties> {
    static DefaultAction = DefaultAction
    static FixedResponse = FixedResponse
    static Forward = Forward
    static WeightedTargetGroup = WeightedTargetGroup

    constructor(properties: ListenerProperties) {
        super('AWS::VpcLattice::Listener', properties)
    }
}
