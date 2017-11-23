/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface KinesisFirehoseOutputProperties {
    ResourceARN: Value<string>
    RoleARN: Value<string>
}

export class KinesisFirehoseOutput extends ResourceBase {
    constructor(properties: KinesisFirehoseOutputProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::KinesisFirehoseOutput', properties, dependsOn)
    }
}

export interface KinesisStreamsOutputProperties {
    ResourceARN: Value<string>
    RoleARN: Value<string>
}

export class KinesisStreamsOutput extends ResourceBase {
    constructor(properties: KinesisStreamsOutputProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::KinesisStreamsOutput', properties, dependsOn)
    }
}

export interface OutputProperties {
    DestinationSchema: DestinationSchema
    KinesisFirehoseOutput?: KinesisFirehoseOutput
    KinesisStreamsOutput?: KinesisStreamsOutput
    Name?: Value<string>
}

export class Output extends ResourceBase {
    constructor(properties: OutputProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::Output', properties, dependsOn)
    }
}

export interface DestinationSchemaProperties {
    RecordFormatType?: Value<string>
}

export class DestinationSchema extends ResourceBase {
    constructor(properties: DestinationSchemaProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::DestinationSchema', properties, dependsOn)
    }
}

export interface ApplicationOutputProperties {
    ApplicationName: Value<string>
    Output: Output
}

export default class ApplicationOutput extends ResourceBase {
    constructor(properties: ApplicationOutputProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::ApplicationOutput', properties, dependsOn)
    }
}
