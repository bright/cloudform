/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AllowedStatistics {
    Statistics!: List<Value<string>>

    constructor(properties: AllowedStatistics) {
        Object.assign(this, properties)
    }
}

export class ColumnSelector {
    Regex?: Value<string>
    Name?: Value<string>

    constructor(properties: ColumnSelector) {
        Object.assign(this, properties)
    }
}

export class ColumnStatisticsConfiguration {
    Statistics!: StatisticsConfiguration
    Selectors?: List<ColumnSelector>

    constructor(properties: ColumnStatisticsConfiguration) {
        Object.assign(this, properties)
    }
}

export class CsvOutputOptions {
    Delimiter?: Value<string>

    constructor(properties: CsvOutputOptions) {
        Object.assign(this, properties)
    }
}

export class DataCatalogOutput {
    TableName!: Value<string>
    Overwrite?: Value<boolean>
    S3Options?: S3TableOutputOptions
    DatabaseOptions?: DatabaseTableOutputOptions
    DatabaseName!: Value<string>
    CatalogId?: Value<string>

    constructor(properties: DataCatalogOutput) {
        Object.assign(this, properties)
    }
}

export class DatabaseOutput {
    DatabaseOutputMode?: Value<string>
    DatabaseOptions!: DatabaseTableOutputOptions
    GlueConnectionName!: Value<string>

    constructor(properties: DatabaseOutput) {
        Object.assign(this, properties)
    }
}

export class DatabaseTableOutputOptions {
    TempDirectory?: S3Location
    TableName!: Value<string>

    constructor(properties: DatabaseTableOutputOptions) {
        Object.assign(this, properties)
    }
}

export class EntityDetectorConfiguration {
    EntityTypes!: List<Value<string>>
    AllowedStatistics?: AllowedStatistics

    constructor(properties: EntityDetectorConfiguration) {
        Object.assign(this, properties)
    }
}

export class JobSample {
    Size?: Value<number>
    Mode?: Value<string>

    constructor(properties: JobSample) {
        Object.assign(this, properties)
    }
}

export class Output {
    Overwrite?: Value<boolean>
    Format?: Value<string>
    MaxOutputFiles?: Value<number>
    CompressionFormat?: Value<string>
    PartitionColumns?: List<Value<string>>
    FormatOptions?: OutputFormatOptions
    Location!: S3Location

    constructor(properties: Output) {
        Object.assign(this, properties)
    }
}

export class OutputFormatOptions {
    Csv?: CsvOutputOptions

    constructor(properties: OutputFormatOptions) {
        Object.assign(this, properties)
    }
}

export class OutputLocation {
    Bucket!: Value<string>
    BucketOwner?: Value<string>
    Key?: Value<string>

    constructor(properties: OutputLocation) {
        Object.assign(this, properties)
    }
}

export class ProfileConfiguration {
    ProfileColumns?: List<ColumnSelector>
    DatasetStatisticsConfiguration?: StatisticsConfiguration
    ColumnStatisticsConfigurations?: List<ColumnStatisticsConfiguration>
    EntityDetectorConfiguration?: EntityDetectorConfiguration

    constructor(properties: ProfileConfiguration) {
        Object.assign(this, properties)
    }
}

export class Recipe {
    Version?: Value<string>
    Name!: Value<string>

    constructor(properties: Recipe) {
        Object.assign(this, properties)
    }
}

export class S3Location {
    Bucket!: Value<string>
    BucketOwner?: Value<string>
    Key?: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export class S3TableOutputOptions {
    Location!: S3Location

    constructor(properties: S3TableOutputOptions) {
        Object.assign(this, properties)
    }
}

export class StatisticOverride {
    Parameters!: {[key: string]: Value<string>}
    Statistic!: Value<string>

    constructor(properties: StatisticOverride) {
        Object.assign(this, properties)
    }
}

export class StatisticsConfiguration {
    IncludedStatistics?: List<Value<string>>
    Overrides?: List<StatisticOverride>

    constructor(properties: StatisticsConfiguration) {
        Object.assign(this, properties)
    }
}

export class ValidationConfiguration {
    RulesetArn!: Value<string>
    ValidationMode?: Value<string>

    constructor(properties: ValidationConfiguration) {
        Object.assign(this, properties)
    }
}

export interface JobProperties {
    MaxRetries?: Value<number>
    ProjectName?: Value<string>
    Recipe?: Recipe
    EncryptionKeyArn?: Value<string>
    LogSubscription?: Value<string>
    Timeout?: Value<number>
    DatabaseOutputs?: List<DatabaseOutput>
    OutputLocation?: OutputLocation
    RoleArn: Value<string>
    Name: Value<string>
    Type: Value<string>
    DatasetName?: Value<string>
    ProfileConfiguration?: ProfileConfiguration
    Outputs?: List<Output>
    ValidationConfigurations?: List<ValidationConfiguration>
    Tags?: List<ResourceTag>
    JobSample?: JobSample
    EncryptionMode?: Value<string>
    MaxCapacity?: Value<number>
    DataCatalogOutputs?: List<DataCatalogOutput>
}

export default class Job extends ResourceBase<JobProperties> {
    static AllowedStatistics = AllowedStatistics
    static ColumnSelector = ColumnSelector
    static ColumnStatisticsConfiguration = ColumnStatisticsConfiguration
    static CsvOutputOptions = CsvOutputOptions
    static DataCatalogOutput = DataCatalogOutput
    static DatabaseOutput = DatabaseOutput
    static DatabaseTableOutputOptions = DatabaseTableOutputOptions
    static EntityDetectorConfiguration = EntityDetectorConfiguration
    static JobSample = JobSample
    static Output = Output
    static OutputFormatOptions = OutputFormatOptions
    static OutputLocation = OutputLocation
    static ProfileConfiguration = ProfileConfiguration
    static Recipe = Recipe
    static S3Location = S3Location
    static S3TableOutputOptions = S3TableOutputOptions
    static StatisticOverride = StatisticOverride
    static StatisticsConfiguration = StatisticsConfiguration
    static ValidationConfiguration = ValidationConfiguration

    constructor(properties: JobProperties) {
        super('AWS::DataBrew::Job', properties)
    }
}
