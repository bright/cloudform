/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class KinesisFirehoseOutput {
    ResourceARN: Value<string>
    RoleARN: Value<string>

    constructor(properties: KinesisFirehoseOutput) {
        Object.assign(this, properties)
    }
}

export class KinesisStreamsOutput {
    ResourceARN: Value<string>
    RoleARN: Value<string>

    constructor(properties: KinesisStreamsOutput) {
        Object.assign(this, properties)
    }
}

export class Output {
    DestinationSchema: DestinationSchema
    KinesisFirehoseOutput?: KinesisFirehoseOutput
    KinesisStreamsOutput?: KinesisStreamsOutput
    Name?: Value<string>

    constructor(properties: Output) {
        Object.assign(this, properties)
    }
}

export class DestinationSchema {
    RecordFormatType?: Value<string>

    constructor(properties: DestinationSchema) {
        Object.assign(this, properties)
    }
}

export interface ApplicationOutputProperties {
    ApplicationName: Value<string>
    Output: Output
}

export default class ApplicationOutput extends ResourceBase {
    constructor(properties?: ApplicationOutputProperties) {
        super('AWS::KinesisAnalytics::ApplicationOutput', properties)
    }
}
