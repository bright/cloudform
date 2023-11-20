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

export class CsvOptions {
    Delimiter?: Value<string>
    HeaderRow?: Value<boolean>

    constructor(properties: CsvOptions) {
        Object.assign(this, properties)
    }
}

export class DataCatalogInputDefinition {
    TableName?: Value<string>
    TempDirectory?: S3Location
    DatabaseName?: Value<string>
    CatalogId?: Value<string>

    constructor(properties: DataCatalogInputDefinition) {
        Object.assign(this, properties)
    }
}

export class DatabaseInputDefinition {
    TempDirectory?: S3Location
    QueryString?: Value<string>
    GlueConnectionName!: Value<string>
    DatabaseTableName?: Value<string>

    constructor(properties: DatabaseInputDefinition) {
        Object.assign(this, properties)
    }
}

export class DatasetParameter {
    Type!: Value<string>
    DatetimeOptions?: DatetimeOptions
    Filter?: FilterExpression
    CreateColumn?: Value<boolean>
    Name!: Value<string>

    constructor(properties: DatasetParameter) {
        Object.assign(this, properties)
    }
}

export class DatetimeOptions {
    LocaleCode?: Value<string>
    Format!: Value<string>
    TimezoneOffset?: Value<string>

    constructor(properties: DatetimeOptions) {
        Object.assign(this, properties)
    }
}

export class ExcelOptions {
    HeaderRow?: Value<boolean>
    SheetNames?: List<Value<string>>
    SheetIndexes?: List<Value<number>>

    constructor(properties: ExcelOptions) {
        Object.assign(this, properties)
    }
}

export class FilesLimit {
    Order?: Value<string>
    OrderedBy?: Value<string>
    MaxFiles!: Value<number>

    constructor(properties: FilesLimit) {
        Object.assign(this, properties)
    }
}

export class FilterExpression {
    Expression!: Value<string>
    ValuesMap!: List<FilterValue>

    constructor(properties: FilterExpression) {
        Object.assign(this, properties)
    }
}

export class FilterValue {
    Value!: Value<string>
    ValueReference!: Value<string>

    constructor(properties: FilterValue) {
        Object.assign(this, properties)
    }
}

export class FormatOptions {
    Excel?: ExcelOptions
    Csv?: CsvOptions
    Json?: JsonOptions

    constructor(properties: FormatOptions) {
        Object.assign(this, properties)
    }
}

export class Input {
    DatabaseInputDefinition?: DatabaseInputDefinition
    S3InputDefinition?: S3Location
    Metadata?: Metadata
    DataCatalogInputDefinition?: DataCatalogInputDefinition

    constructor(properties: Input) {
        Object.assign(this, properties)
    }
}

export class JsonOptions {
    MultiLine?: Value<boolean>

    constructor(properties: JsonOptions) {
        Object.assign(this, properties)
    }
}

export class Metadata {
    SourceArn?: Value<string>

    constructor(properties: Metadata) {
        Object.assign(this, properties)
    }
}

export class PathOptions {
    Parameters?: List<PathParameter>
    LastModifiedDateCondition?: FilterExpression
    FilesLimit?: FilesLimit

    constructor(properties: PathOptions) {
        Object.assign(this, properties)
    }
}

export class PathParameter {
    PathParameterName!: Value<string>
    DatasetParameter!: DatasetParameter

    constructor(properties: PathParameter) {
        Object.assign(this, properties)
    }
}

export class S3Location {
    Bucket!: Value<string>
    Key?: Value<string>

    constructor(properties: S3Location) {
        Object.assign(this, properties)
    }
}

export interface DatasetProperties {
    Input: Input
    Format?: Value<string>
    FormatOptions?: FormatOptions
    PathOptions?: PathOptions
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Dataset extends ResourceBase<DatasetProperties> {
    static CsvOptions = CsvOptions
    static DataCatalogInputDefinition = DataCatalogInputDefinition
    static DatabaseInputDefinition = DatabaseInputDefinition
    static DatasetParameter = DatasetParameter
    static DatetimeOptions = DatetimeOptions
    static ExcelOptions = ExcelOptions
    static FilesLimit = FilesLimit
    static FilterExpression = FilterExpression
    static FilterValue = FilterValue
    static FormatOptions = FormatOptions
    static Input = Input
    static JsonOptions = JsonOptions
    static Metadata = Metadata
    static PathOptions = PathOptions
    static PathParameter = PathParameter
    static S3Location = S3Location

    constructor(properties: DatasetProperties) {
        super('AWS::DataBrew::Dataset', properties)
    }
}
