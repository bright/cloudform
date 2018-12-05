/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ParameterAttribute {
    Key!: Value<string>
    StringValue!: Value<string>

    constructor(properties: ParameterAttribute) {
        Object.assign(this, properties)
    }
}

export class PipelineTag {
    Key!: Value<string>
    Value!: Value<string>

    constructor(properties: PipelineTag) {
        Object.assign(this, properties)
    }
}

export class ParameterObject {
    Attributes!: List<ParameterAttribute>
    Id!: Value<string>

    constructor(properties: ParameterObject) {
        Object.assign(this, properties)
    }
}

export class PipelineObject {
    Fields!: List<Field>
    Id!: Value<string>
    Name!: Value<string>

    constructor(properties: PipelineObject) {
        Object.assign(this, properties)
    }
}

export class ParameterValue {
    Id!: Value<string>
    StringValue!: Value<string>

    constructor(properties: ParameterValue) {
        Object.assign(this, properties)
    }
}

export class Field {
    Key!: Value<string>
    RefValue?: Value<string>
    StringValue?: Value<string>

    constructor(properties: Field) {
        Object.assign(this, properties)
    }
}

export interface PipelineProperties {
    Activate?: Value<boolean>
    Description?: Value<string>
    Name: Value<string>
    ParameterObjects: List<ParameterObject>
    ParameterValues?: List<ParameterValue>
    PipelineObjects?: List<PipelineObject>
    PipelineTags?: List<PipelineTag>
}

export default class Pipeline extends ResourceBase {
    static ParameterAttribute = ParameterAttribute
    static PipelineTag = PipelineTag
    static ParameterObject = ParameterObject
    static PipelineObject = PipelineObject
    static ParameterValue = ParameterValue
    static Field = Field

    constructor(properties?: PipelineProperties) {
        super('AWS::DataPipeline::Pipeline', properties)
    }
}
