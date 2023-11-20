import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CsvOptions {
    Delimiter?: Value<string>;
    HeaderRow?: Value<boolean>;
    constructor(properties: CsvOptions);
}
export declare class DataCatalogInputDefinition {
    TableName?: Value<string>;
    TempDirectory?: S3Location;
    DatabaseName?: Value<string>;
    CatalogId?: Value<string>;
    constructor(properties: DataCatalogInputDefinition);
}
export declare class DatabaseInputDefinition {
    TempDirectory?: S3Location;
    QueryString?: Value<string>;
    GlueConnectionName: Value<string>;
    DatabaseTableName?: Value<string>;
    constructor(properties: DatabaseInputDefinition);
}
export declare class DatasetParameter {
    Type: Value<string>;
    DatetimeOptions?: DatetimeOptions;
    Filter?: FilterExpression;
    CreateColumn?: Value<boolean>;
    Name: Value<string>;
    constructor(properties: DatasetParameter);
}
export declare class DatetimeOptions {
    LocaleCode?: Value<string>;
    Format: Value<string>;
    TimezoneOffset?: Value<string>;
    constructor(properties: DatetimeOptions);
}
export declare class ExcelOptions {
    HeaderRow?: Value<boolean>;
    SheetNames?: List<Value<string>>;
    SheetIndexes?: List<Value<number>>;
    constructor(properties: ExcelOptions);
}
export declare class FilesLimit {
    Order?: Value<string>;
    OrderedBy?: Value<string>;
    MaxFiles: Value<number>;
    constructor(properties: FilesLimit);
}
export declare class FilterExpression {
    Expression: Value<string>;
    ValuesMap: List<FilterValue>;
    constructor(properties: FilterExpression);
}
export declare class FilterValue {
    Value: Value<string>;
    ValueReference: Value<string>;
    constructor(properties: FilterValue);
}
export declare class FormatOptions {
    Excel?: ExcelOptions;
    Csv?: CsvOptions;
    Json?: JsonOptions;
    constructor(properties: FormatOptions);
}
export declare class Input {
    DatabaseInputDefinition?: DatabaseInputDefinition;
    S3InputDefinition?: S3Location;
    Metadata?: Metadata;
    DataCatalogInputDefinition?: DataCatalogInputDefinition;
    constructor(properties: Input);
}
export declare class JsonOptions {
    MultiLine?: Value<boolean>;
    constructor(properties: JsonOptions);
}
export declare class Metadata {
    SourceArn?: Value<string>;
    constructor(properties: Metadata);
}
export declare class PathOptions {
    Parameters?: List<PathParameter>;
    LastModifiedDateCondition?: FilterExpression;
    FilesLimit?: FilesLimit;
    constructor(properties: PathOptions);
}
export declare class PathParameter {
    PathParameterName: Value<string>;
    DatasetParameter: DatasetParameter;
    constructor(properties: PathParameter);
}
export declare class S3Location {
    Bucket: Value<string>;
    Key?: Value<string>;
    constructor(properties: S3Location);
}
export interface DatasetProperties {
    Input: Input;
    Format?: Value<string>;
    FormatOptions?: FormatOptions;
    PathOptions?: PathOptions;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Dataset extends ResourceBase<DatasetProperties> {
    static CsvOptions: typeof CsvOptions;
    static DataCatalogInputDefinition: typeof DataCatalogInputDefinition;
    static DatabaseInputDefinition: typeof DatabaseInputDefinition;
    static DatasetParameter: typeof DatasetParameter;
    static DatetimeOptions: typeof DatetimeOptions;
    static ExcelOptions: typeof ExcelOptions;
    static FilesLimit: typeof FilesLimit;
    static FilterExpression: typeof FilterExpression;
    static FilterValue: typeof FilterValue;
    static FormatOptions: typeof FormatOptions;
    static Input: typeof Input;
    static JsonOptions: typeof JsonOptions;
    static Metadata: typeof Metadata;
    static PathOptions: typeof PathOptions;
    static PathParameter: typeof PathParameter;
    static S3Location: typeof S3Location;
    constructor(properties: DatasetProperties);
}
