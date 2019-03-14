/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.26.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class LambdaOutput {
    ResourceARN!: Value<string>

    constructor(properties: LambdaOutput) {
        Object.assign(this, properties)
    }
}

export class KinesisFirehoseOutput {
    ResourceARN!: Value<string>

    constructor(properties: KinesisFirehoseOutput) {
        Object.assign(this, properties)
    }
}

export class KinesisStreamsOutput {
    ResourceARN!: Value<string>

    constructor(properties: KinesisStreamsOutput) {
        Object.assign(this, properties)
    }
}

export class DestinationSchema {
    RecordFormatType?: Value<string>

    constructor(properties: DestinationSchema) {
        Object.assign(this, properties)
    }
}

export class Output {
    DestinationSchema!: DestinationSchema
    LambdaOutput?: LambdaOutput
    KinesisFirehoseOutput?: KinesisFirehoseOutput
    KinesisStreamsOutput?: KinesisStreamsOutput
    Name?: Value<string>

    constructor(properties: Output) {
        Object.assign(this, properties)
    }
}

export interface ApplicationOutputProperties {
    ApplicationName: Value<string>
    Output: Output
}

export default class ApplicationOutput extends ResourceBase<ApplicationOutputProperties> {
    static LambdaOutput = LambdaOutput
    static KinesisFirehoseOutput = KinesisFirehoseOutput
    static KinesisStreamsOutput = KinesisStreamsOutput
    static DestinationSchema = DestinationSchema
    static Output = Output

    constructor(properties: ApplicationOutputProperties) {
        super('AWS::KinesisAnalyticsV2::ApplicationOutput', properties)
    }
}
