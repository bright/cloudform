import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CSVMappingParameters {
    RecordRowDelimiter: Value<string>;
    RecordColumnDelimiter: Value<string>;
    constructor(properties: CSVMappingParameters);
}
export declare class JSONMappingParameters {
    RecordRowPath: Value<string>;
    constructor(properties: JSONMappingParameters);
}
export declare class MappingParameters {
    JSONMappingParameters?: JSONMappingParameters;
    CSVMappingParameters?: CSVMappingParameters;
    constructor(properties: MappingParameters);
}
export declare class RecordColumn {
    Mapping?: Value<string>;
    SqlType: Value<string>;
    Name: Value<string>;
    constructor(properties: RecordColumn);
}
export declare class RecordFormat {
    MappingParameters?: MappingParameters;
    RecordFormatType: Value<string>;
    constructor(properties: RecordFormat);
}
export declare class ReferenceDataSource {
    ReferenceSchema: ReferenceSchema;
    TableName?: Value<string>;
    S3ReferenceDataSource?: S3ReferenceDataSource;
    constructor(properties: ReferenceDataSource);
}
export declare class ReferenceSchema {
    RecordEncoding?: Value<string>;
    RecordColumns: List<RecordColumn>;
    RecordFormat: RecordFormat;
    constructor(properties: ReferenceSchema);
}
export declare class S3ReferenceDataSource {
    BucketARN: Value<string>;
    FileKey: Value<string>;
    constructor(properties: S3ReferenceDataSource);
}
export interface ApplicationReferenceDataSourceProperties {
    ApplicationName: Value<string>;
    ReferenceDataSource: ReferenceDataSource;
}
export default class ApplicationReferenceDataSource extends ResourceBase<ApplicationReferenceDataSourceProperties> {
    static CSVMappingParameters: typeof CSVMappingParameters;
    static JSONMappingParameters: typeof JSONMappingParameters;
    static MappingParameters: typeof MappingParameters;
    static RecordColumn: typeof RecordColumn;
    static RecordFormat: typeof RecordFormat;
    static ReferenceDataSource: typeof ReferenceDataSource;
    static ReferenceSchema: typeof ReferenceSchema;
    static S3ReferenceDataSource: typeof S3ReferenceDataSource;
    constructor(properties: ApplicationReferenceDataSourceProperties);
}
