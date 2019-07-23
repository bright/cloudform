/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
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
