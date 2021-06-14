/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class FilterExpression {
    Expression!: Value<string>

    constructor(properties: FilterExpression) {
        Object.assign(this, properties)
    }
}

export class PathParameter {
    PathParameterName!: Value<string>

    constructor(properties: PathParameter) {
        Object.assign(this, properties)
    }
}

export class DatabaseInputDefinition {
    GlueConnectionName?: Value<string>
    DatabaseTableName?: Value<string>

    constructor(properties: DatabaseInputDefinition) {
        Object.assign(this, properties)
    }
}

export class PathOptions {


    constructor(properties: PathOptions) {
        Object.assign(this, properties)
    }
}

export class DatasetParameter {
    Name!: Value<string>
    Type!: Value<string>
    CreateColumn?: Value<boolean>

    constructor(properties: DatasetParameter) {
        Object.assign(this, properties)
    }
}

export class FilesLimit {
    MaxFiles!: Value<number>
    OrderedBy?: Value<string>
    Order?: Value<string>

    constructor(properties: FilesLimit) {
        Object.assign(this, properties)
    }
}

export class CsvOptions {
    Delimiter?: Value<string>
    HeaderRow?: Value<boolean>

    constructor(properties: CsvOptions) {
        Object.assign(this, properties)
    }
}

export class FormatOptions {


    constructor(properties: FormatOptions) {
        Object.assign(this, properties)
    }
}

export class ExcelOptions {
    HeaderRow?: Value<boolean>

    constructor(properties: ExcelOptions) {
        Object.assign(this, properties)
    }
}

export class JsonOptions {
    MultiLine?: Value<boolean>

    constructor(properties: JsonOptions) {
        Object.assign(this, properties)
    }
}

export class Input {


    constructor(properties: Input) {
        Object.assign(this, properties)
    }
}

export class FilterValue {
    ValueReference!: Value<string>
    Value!: Value<string>

    constructor(properties: FilterValue) {
        Object.assign(this, properties)
    }
}

export class DataCatalogInputDefinition {
    CatalogId?: Value<string>
    DatabaseName?: Value<string>
    TableName?: Value<string>

    constructor(properties: DataCatalogInputDefinition) {
        Object.assign(this, properties)
    }
}

export class DatetimeOptions {
    Format!: Value<string>
    TimezoneOffset?: Value<string>
    LocaleCode?: Value<string>

    constructor(properties: DatetimeOptions) {
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
    Name: Value<string>
    Format?: Value<string>
}

export default class Dataset extends ResourceBase<DatasetProperties> {
    static FilterExpression = FilterExpression
    static PathParameter = PathParameter
    static DatabaseInputDefinition = DatabaseInputDefinition
    static PathOptions = PathOptions
    static DatasetParameter = DatasetParameter
    static FilesLimit = FilesLimit
    static CsvOptions = CsvOptions
    static FormatOptions = FormatOptions
    static ExcelOptions = ExcelOptions
    static JsonOptions = JsonOptions
    static Input = Input
    static FilterValue = FilterValue
    static DataCatalogInputDefinition = DataCatalogInputDefinition
    static DatetimeOptions = DatetimeOptions
    static S3Location = S3Location

    constructor(properties: DatasetProperties) {
        super('AWS::DataBrew::Dataset', properties)
    }
}
