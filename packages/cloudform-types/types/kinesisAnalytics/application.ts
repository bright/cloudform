/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class CSVMappingParameters {
    RecordRowDelimiter!: Value<string>
    RecordColumnDelimiter!: Value<string>

    constructor(properties: CSVMappingParameters) {
        Object.assign(this, properties)
    }
}

export class Input {
    NamePrefix!: Value<string>
    InputSchema!: InputSchema
    KinesisStreamsInput?: KinesisStreamsInput
    KinesisFirehoseInput?: KinesisFirehoseInput
    InputProcessingConfiguration?: InputProcessingConfiguration
    InputParallelism?: InputParallelism

    constructor(properties: Input) {
        Object.assign(this, properties)
    }
}

export class InputSchema {
    RecordEncoding?: Value<string>
    RecordColumns!: List<RecordColumn>
    RecordFormat!: RecordFormat

    constructor(properties: InputSchema) {
        Object.assign(this, properties)
    }
}

export class JSONMappingParameters {
    RecordRowPath!: Value<string>

    constructor(properties: JSONMappingParameters) {
        Object.assign(this, properties)
    }
}

export class MappingParameters {
    JSONMappingParameters?: JSONMappingParameters
    CSVMappingParameters?: CSVMappingParameters

    constructor(properties: MappingParameters) {
        Object.assign(this, properties)
    }
}

export class KinesisStreamsInput {
    ResourceARN!: Value<string>
    RoleARN!: Value<string>

    constructor(properties: KinesisStreamsInput) {
        Object.assign(this, properties)
    }
}

export class RecordColumn {
    Mapping?: Value<string>
    SqlType!: Value<string>
    Name!: Value<string>

    constructor(properties: RecordColumn) {
        Object.assign(this, properties)
    }
}

export class RecordFormat {
    MappingParameters?: MappingParameters
    RecordFormatType!: Value<string>

    constructor(properties: RecordFormat) {
        Object.assign(this, properties)
    }
}

export class KinesisFirehoseInput {
    ResourceARN!: Value<string>
    RoleARN!: Value<string>

    constructor(properties: KinesisFirehoseInput) {
        Object.assign(this, properties)
    }
}

export class InputParallelism {
    Count?: Value<number>

    constructor(properties: InputParallelism) {
        Object.assign(this, properties)
    }
}

export class InputProcessingConfiguration {
    InputLambdaProcessor?: InputLambdaProcessor

    constructor(properties: InputProcessingConfiguration) {
        Object.assign(this, properties)
    }
}

export class InputLambdaProcessor {
    ResourceARN!: Value<string>
    RoleARN!: Value<string>

    constructor(properties: InputLambdaProcessor) {
        Object.assign(this, properties)
    }
}

export interface ApplicationProperties {
    ApplicationName?: Value<string>
    Inputs: List<Input>
    ApplicationDescription?: Value<string>
    ApplicationCode?: Value<string>
}

export default class Application extends ResourceBase<ApplicationProperties> {
    static CSVMappingParameters = CSVMappingParameters
    static Input = Input
    static InputSchema = InputSchema
    static JSONMappingParameters = JSONMappingParameters
    static MappingParameters = MappingParameters
    static KinesisStreamsInput = KinesisStreamsInput
    static RecordColumn = RecordColumn
    static RecordFormat = RecordFormat
    static KinesisFirehoseInput = KinesisFirehoseInput
    static InputParallelism = InputParallelism
    static InputProcessingConfiguration = InputProcessingConfiguration
    static InputLambdaProcessor = InputLambdaProcessor

    constructor(properties: ApplicationProperties) {
        super('AWS::KinesisAnalytics::Application', properties)
    }
}
