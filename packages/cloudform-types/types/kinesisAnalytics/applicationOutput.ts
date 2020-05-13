/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 14.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class KinesisFirehoseOutput {
    ResourceARN!: Value<string>
    RoleARN!: Value<string>

    constructor(properties: KinesisFirehoseOutput) {
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

export class DestinationSchema {
    RecordFormatType?: Value<string>

    constructor(properties: DestinationSchema) {
        Object.assign(this, properties)
    }
}

export class KinesisStreamsOutput {
    ResourceARN!: Value<string>
    RoleARN!: Value<string>

    constructor(properties: KinesisStreamsOutput) {
        Object.assign(this, properties)
    }
}

export class LambdaOutput {
    ResourceARN!: Value<string>
    RoleARN!: Value<string>

    constructor(properties: LambdaOutput) {
        Object.assign(this, properties)
    }
}

export interface ApplicationOutputProperties {
    ApplicationName: Value<string>
    Output: Output
}

export default class ApplicationOutput extends ResourceBase<ApplicationOutputProperties> {
    static KinesisFirehoseOutput = KinesisFirehoseOutput
    static Output = Output
    static DestinationSchema = DestinationSchema
    static KinesisStreamsOutput = KinesisStreamsOutput
    static LambdaOutput = LambdaOutput

    constructor(properties: ApplicationOutputProperties) {
        super('AWS::KinesisAnalytics::ApplicationOutput', properties)
    }
}
