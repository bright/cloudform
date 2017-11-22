/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface ParameterAttributeProperties {
    Key: Value<string>
    StringValue: Value<string>
}

export class ParameterAttribute extends ResourceBase {
    constructor(properties: ParameterAttributeProperties, dependsOn?: Value<string>) {
        super('AWS::DataPipeline::ParameterAttribute', properties, dependsOn)
    }
}

export interface PipelineTagProperties {
    Key: Value<string>
    Value: Value<string>
}

export class PipelineTag extends ResourceBase {
    constructor(properties: PipelineTagProperties, dependsOn?: Value<string>) {
        super('AWS::DataPipeline::PipelineTag', properties, dependsOn)
    }
}

export interface ParameterObjectProperties {
    Attributes: ParameterAttribute[]
    Id: Value<string>
}

export class ParameterObject extends ResourceBase {
    constructor(properties: ParameterObjectProperties, dependsOn?: Value<string>) {
        super('AWS::DataPipeline::ParameterObject', properties, dependsOn)
    }
}

export interface PipelineObjectProperties {
    Fields: Field[]
    Id: Value<string>
    Name: Value<string>
}

export class PipelineObject extends ResourceBase {
    constructor(properties: PipelineObjectProperties, dependsOn?: Value<string>) {
        super('AWS::DataPipeline::PipelineObject', properties, dependsOn)
    }
}

export interface ParameterValueProperties {
    Id: Value<string>
    StringValue: Value<string>
}

export class ParameterValue extends ResourceBase {
    constructor(properties: ParameterValueProperties, dependsOn?: Value<string>) {
        super('AWS::DataPipeline::ParameterValue', properties, dependsOn)
    }
}

export interface FieldProperties {
    Key: Value<string>
    RefValue?: Value<string>
    StringValue?: Value<string>
}

export class Field extends ResourceBase {
    constructor(properties: FieldProperties, dependsOn?: Value<string>) {
        super('AWS::DataPipeline::Field', properties, dependsOn)
    }
}

export interface PipelineProperties {
    Activate?: Value<boolean>
    Description?: Value<string>
    Name: Value<string>
    ParameterObjects: ParameterObject[]
    ParameterValues?: ParameterValue[]
    PipelineObjects?: PipelineObject[]
    PipelineTags?: PipelineTag[]
}

export default class Pipeline extends ResourceBase {
    constructor(properties: PipelineProperties, dependsOn?: Value<string>) {
        super('AWS::DataPipeline::Pipeline', properties, dependsOn)
    }
}