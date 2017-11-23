import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface S3ReferenceDataSourceProperties {
    BucketARN: Value<string>;
    FileKey: Value<string>;
    ReferenceRoleARN: Value<string>;
}
export declare class S3ReferenceDataSource extends ResourceBase {
    constructor(properties: S3ReferenceDataSourceProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface MappingParametersProperties {
    JSONMappingParameters?: JSONMappingParameters;
    CSVMappingParameters?: CSVMappingParameters;
}
export declare class MappingParameters extends ResourceBase {
    constructor(properties: MappingParametersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface JSONMappingParametersProperties {
    RecordRowPath: Value<string>;
}
export declare class JSONMappingParameters extends ResourceBase {
    constructor(properties: JSONMappingParametersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RecordFormatProperties {
    MappingParameters?: MappingParameters;
    RecordFormatType: Value<string>;
}
export declare class RecordFormat extends ResourceBase {
    constructor(properties: RecordFormatProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface RecordColumnProperties {
    Mapping?: Value<string>;
    SqlType: Value<string>;
    Name: Value<string>;
}
export declare class RecordColumn extends ResourceBase {
    constructor(properties: RecordColumnProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface CSVMappingParametersProperties {
    RecordRowDelimiter: Value<string>;
    RecordColumnDelimiter: Value<string>;
}
export declare class CSVMappingParameters extends ResourceBase {
    constructor(properties: CSVMappingParametersProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ReferenceSchemaProperties {
    RecordEncoding?: Value<string>;
    RecordColumns: RecordColumn[];
    RecordFormat: RecordFormat;
}
export declare class ReferenceSchema extends ResourceBase {
    constructor(properties: ReferenceSchemaProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ReferenceDataSourceProperties {
    ReferenceSchema: ReferenceSchema;
    TableName?: Value<string>;
    S3ReferenceDataSource?: S3ReferenceDataSource;
}
export declare class ReferenceDataSource extends ResourceBase {
    constructor(properties: ReferenceDataSourceProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ApplicationReferenceDataSourceProperties {
    ApplicationName: Value<string>;
    ReferenceDataSource: ReferenceDataSource;
}
export default class ApplicationReferenceDataSource extends ResourceBase {
    constructor(properties: ApplicationReferenceDataSourceProperties, dependsOn?: Value<string> | Value<string>[]);
}
