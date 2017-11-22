/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface MappingParametersProperties {
    JSONMappingParameters?: JSONMappingParameters
    CSVMappingParameters?: CSVMappingParameters
}

export class MappingParameters extends ResourceBase {
    constructor(properties: MappingParametersProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::MappingParameters', properties, dependsOn)
    }
}

export interface CSVMappingParametersProperties {
    RecordRowDelimiter: Value<string>
    RecordColumnDelimiter: Value<string>
}

export class CSVMappingParameters extends ResourceBase {
    constructor(properties: CSVMappingParametersProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::CSVMappingParameters', properties, dependsOn)
    }
}

export interface KinesisStreamsInputProperties {
    ResourceARN: Value<string>
    RoleARN: Value<string>
}

export class KinesisStreamsInput extends ResourceBase {
    constructor(properties: KinesisStreamsInputProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::KinesisStreamsInput', properties, dependsOn)
    }
}

export interface InputProperties {
    NamePrefix: Value<string>
    InputSchema: InputSchema
    KinesisStreamsInput?: KinesisStreamsInput
    KinesisFirehoseInput?: KinesisFirehoseInput
    InputProcessingConfiguration?: InputProcessingConfiguration
    InputParallelism?: InputParallelism
}

export class Input extends ResourceBase {
    constructor(properties: InputProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::Input', properties, dependsOn)
    }
}

export interface InputSchemaProperties {
    RecordEncoding?: Value<string>
    RecordColumns: RecordColumn[]
    RecordFormat: RecordFormat
}

export class InputSchema extends ResourceBase {
    constructor(properties: InputSchemaProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::InputSchema', properties, dependsOn)
    }
}

export interface RecordColumnProperties {
    Mapping?: Value<string>
    SqlType: Value<string>
    Name: Value<string>
}

export class RecordColumn extends ResourceBase {
    constructor(properties: RecordColumnProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::RecordColumn', properties, dependsOn)
    }
}

export interface RecordFormatProperties {
    MappingParameters?: MappingParameters
    RecordFormatType: Value<string>
}

export class RecordFormat extends ResourceBase {
    constructor(properties: RecordFormatProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::RecordFormat', properties, dependsOn)
    }
}

export interface KinesisFirehoseInputProperties {
    ResourceARN: Value<string>
    RoleARN: Value<string>
}

export class KinesisFirehoseInput extends ResourceBase {
    constructor(properties: KinesisFirehoseInputProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::KinesisFirehoseInput', properties, dependsOn)
    }
}

export interface InputParallelismProperties {
    Count?: Value<number>
}

export class InputParallelism extends ResourceBase {
    constructor(properties: InputParallelismProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::InputParallelism', properties, dependsOn)
    }
}

export interface InputProcessingConfigurationProperties {
    InputLambdaProcessor?: InputLambdaProcessor
}

export class InputProcessingConfiguration extends ResourceBase {
    constructor(properties: InputProcessingConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::InputProcessingConfiguration', properties, dependsOn)
    }
}

export interface JSONMappingParametersProperties {
    RecordRowPath: Value<string>
}

export class JSONMappingParameters extends ResourceBase {
    constructor(properties: JSONMappingParametersProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::JSONMappingParameters', properties, dependsOn)
    }
}

export interface InputLambdaProcessorProperties {
    ResourceARN: Value<string>
    RoleARN: Value<string>
}

export class InputLambdaProcessor extends ResourceBase {
    constructor(properties: InputLambdaProcessorProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::InputLambdaProcessor', properties, dependsOn)
    }
}

export interface ApplicationProperties {
    ApplicationName?: Value<string>
    Inputs: Input[]
    ApplicationDescription?: Value<string>
    ApplicationCode?: Value<string>
}

export default class Application extends ResourceBase {
    constructor(properties: ApplicationProperties, dependsOn?: Value<string>) {
        super('AWS::KinesisAnalytics::Application', properties, dependsOn)
    }
}