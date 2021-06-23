/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class S3Location {
    Bucket!: Value<string>
    Key?: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export class OutputFormatOptions {
    Csv?: CsvOutputOptions

    constructor(properties: OutputFormatOptions) {
        Object.assign(this, properties)
    }
}

export class CsvOutputOptions {
    Delimiter?: Value<string>

    constructor(properties: CsvOutputOptions) {
        Object.assign(this, properties)
    }
}

export class Recipe {
    Name!: Value<string>
    Version?: Value<string>

    constructor(properties: Recipe) {
        Object.assign(this, properties)
    }
}

export class Output {
    CompressionFormat?: Value<string>
    Format?: Value<string>
    FormatOptions?: OutputFormatOptions
    PartitionColumns?: List<Value<string>>
    Location!: S3Location
    Overwrite?: Value<boolean>

    constructor(properties: Output) {
        Object.assign(this, properties)
    }
}

export class OutputLocation {
    Bucket!: Value<string>
    Key?: Value<string>

    constructor(properties: OutputLocation) {
        Object.assign(this, properties)
    }
}

export class JobSample {
    Mode?: Value<string>
    Size?: Value<number>

    constructor(properties: JobSample) {
        Object.assign(this, properties)
    }
}

export interface JobProperties {
    DatasetName?: Value<string>
    EncryptionKeyArn?: Value<string>
    EncryptionMode?: Value<string>
    Name: Value<string>
    Type: Value<string>
    LogSubscription?: Value<string>
    MaxCapacity?: Value<number>
    MaxRetries?: Value<number>
    Outputs?: List<Output>
    OutputLocation?: OutputLocation
    ProjectName?: Value<string>
    Recipe?: Recipe
    RoleArn: Value<string>
    Tags?: List<ResourceTag>
    Timeout?: Value<number>
    JobSample?: JobSample
}

export default class Job extends ResourceBase<JobProperties> {
    static S3Location = S3Location
    static OutputFormatOptions = OutputFormatOptions
    static CsvOutputOptions = CsvOutputOptions
    static Recipe = Recipe
    static Output = Output
    static OutputLocation = OutputLocation
    static JobSample = JobSample

    constructor(properties: JobProperties) {
        super('AWS::DataBrew::Job', properties)
    }
}
