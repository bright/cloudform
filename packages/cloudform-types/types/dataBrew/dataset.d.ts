import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FilterExpression {
    Expression: Value<string>;
    ValuesMap: List<FilterValue>;
    constructor(properties: FilterExpression);
}
export declare class PathParameter {
    PathParameterName: Value<string>;
    DatasetParameter: DatasetParameter;
    constructor(properties: PathParameter);
}
export declare class DatabaseInputDefinition {
    GlueConnectionName?: Value<string>;
    DatabaseTableName?: Value<string>;
    TempDirectory?: S3Location;
    constructor(properties: DatabaseInputDefinition);
}
export declare class PathOptions {
    FilesLimit?: FilesLimit;
    LastModifiedDateCondition?: FilterExpression;
    Parameters?: List<PathParameter>;
    constructor(properties: PathOptions);
}
export declare class DatasetParameter {
    Name: Value<string>;
    Type: Value<string>;
    DatetimeOptions?: DatetimeOptions;
    CreateColumn?: Value<boolean>;
    Filter?: FilterExpression;
    constructor(properties: DatasetParameter);
}
export declare class FilesLimit {
    MaxFiles: Value<number>;
    OrderedBy?: Value<string>;
    Order?: Value<string>;
    constructor(properties: FilesLimit);
}
export declare class CsvOptions {
    Delimiter?: Value<string>;
    HeaderRow?: Value<boolean>;
    constructor(properties: CsvOptions);
}
export declare class FormatOptions {
    Json?: JsonOptions;
    Excel?: ExcelOptions;
    Csv?: CsvOptions;
    constructor(properties: FormatOptions);
}
export declare class ExcelOptions {
    SheetNames?: List<Value<string>>;
    SheetIndexes?: List<Value<number>>;
    HeaderRow?: Value<boolean>;
    constructor(properties: ExcelOptions);
}
export declare class JsonOptions {
    MultiLine?: Value<boolean>;
    constructor(properties: JsonOptions);
}
export declare class Input {
    S3InputDefinition?: S3Location;
    DataCatalogInputDefinition?: DataCatalogInputDefinition;
    DatabaseInputDefinition?: DatabaseInputDefinition;
    constructor(properties: Input);
}
export declare class FilterValue {
    ValueReference: Value<string>;
    Value: Value<string>;
    constructor(properties: FilterValue);
}
export declare class DataCatalogInputDefinition {
    CatalogId?: Value<string>;
    DatabaseName?: Value<string>;
    TableName?: Value<string>;
    TempDirectory?: S3Location;
    constructor(properties: DataCatalogInputDefinition);
}
export declare class DatetimeOptions {
    Format: Value<string>;
    TimezoneOffset?: Value<string>;
    LocaleCode?: Value<string>;
    constructor(properties: DatetimeOptions);
}
export declare class S3Location {
    Bucket: Value<string>;
    Key?: Value<string>;
    constructor(properties: S3Location);
}
export interface DatasetProperties {
    Name: Value<string>;
    Format?: Value<string>;
    FormatOptions?: FormatOptions;
    Input: Input;
    PathOptions?: PathOptions;
    Tags?: List<ResourceTag>;
}
export default class Dataset extends ResourceBase<DatasetProperties> {
    static FilterExpression: typeof FilterExpression;
    static PathParameter: typeof PathParameter;
    static DatabaseInputDefinition: typeof DatabaseInputDefinition;
    static PathOptions: typeof PathOptions;
    static DatasetParameter: typeof DatasetParameter;
    static FilesLimit: typeof FilesLimit;
    static CsvOptions: typeof CsvOptions;
    static FormatOptions: typeof FormatOptions;
    static ExcelOptions: typeof ExcelOptions;
    static JsonOptions: typeof JsonOptions;
    static Input: typeof Input;
    static FilterValue: typeof FilterValue;
    static DataCatalogInputDefinition: typeof DataCatalogInputDefinition;
    static DatetimeOptions: typeof DatetimeOptions;
    static S3Location: typeof S3Location;
    constructor(properties: DatasetProperties);
}
