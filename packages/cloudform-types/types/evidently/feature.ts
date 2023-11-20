/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class EntityOverride {
    EntityId?: Value<string>
    Variation?: Value<string>

    constructor(properties: EntityOverride) {
        Object.assign(this, properties)
    }
}

export class VariationObject {
    VariationName!: Value<string>
    DoubleValue?: Value<number>
    BooleanValue?: Value<boolean>
    LongValue?: Value<number>
    StringValue?: Value<string>

    constructor(properties: VariationObject) {
        Object.assign(this, properties)
    }
}

export interface FeatureProperties {
    Project: Value<string>
    Description?: Value<string>
    EvaluationStrategy?: Value<string>
    DefaultVariation?: Value<string>
    EntityOverrides?: List<EntityOverride>
    Variations: List<VariationObject>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Feature extends ResourceBase<FeatureProperties> {
    static EntityOverride = EntityOverride
    static VariationObject = VariationObject

    constructor(properties: FeatureProperties) {
        super('AWS::Evidently::Feature', properties)
    }
}
