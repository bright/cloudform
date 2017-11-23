/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export interface S3ReferenceDataSourceProperties {
    BucketARN: Value<string>
    FileKey: Value<string>
    ReferenceRoleARN: Value<string>
}

export class S3ReferenceDataSource extends ResourceBase {
    constructor(properties: S3ReferenceDataSourceProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::S3ReferenceDataSource', properties, dependsOn)
    }
}

export interface MappingParametersProperties {
    JSONMappingParameters?: JSONMappingParameters
    CSVMappingParameters?: CSVMappingParameters
}

export class MappingParameters extends ResourceBase {
    constructor(properties: MappingParametersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::MappingParameters', properties, dependsOn)
    }
}

export interface JSONMappingParametersProperties {
    RecordRowPath: Value<string>
}

export class JSONMappingParameters extends ResourceBase {
    constructor(properties: JSONMappingParametersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::JSONMappingParameters', properties, dependsOn)
    }
}

export interface RecordFormatProperties {
    MappingParameters?: MappingParameters
    RecordFormatType: Value<string>
}

export class RecordFormat extends ResourceBase {
    constructor(properties: RecordFormatProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::RecordFormat', properties, dependsOn)
    }
}

export interface RecordColumnProperties {
    Mapping?: Value<string>
    SqlType: Value<string>
    Name: Value<string>
}

export class RecordColumn extends ResourceBase {
    constructor(properties: RecordColumnProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::RecordColumn', properties, dependsOn)
    }
}

export interface CSVMappingParametersProperties {
    RecordRowDelimiter: Value<string>
    RecordColumnDelimiter: Value<string>
}

export class CSVMappingParameters extends ResourceBase {
    constructor(properties: CSVMappingParametersProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::CSVMappingParameters', properties, dependsOn)
    }
}

export interface ReferenceSchemaProperties {
    RecordEncoding?: Value<string>
    RecordColumns: List<RecordColumn>
    RecordFormat: RecordFormat
}

export class ReferenceSchema extends ResourceBase {
    constructor(properties: ReferenceSchemaProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::ReferenceSchema', properties, dependsOn)
    }
}

export interface ReferenceDataSourceProperties {
    ReferenceSchema: ReferenceSchema
    TableName?: Value<string>
    S3ReferenceDataSource?: S3ReferenceDataSource
}

export class ReferenceDataSource extends ResourceBase {
    constructor(properties: ReferenceDataSourceProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::ReferenceDataSource', properties, dependsOn)
    }
}

export interface ApplicationReferenceDataSourceProperties {
    ApplicationName: Value<string>
    ReferenceDataSource: ReferenceDataSource
}

export default class ApplicationReferenceDataSource extends ResourceBase {
    constructor(properties: ApplicationReferenceDataSourceProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::KinesisAnalytics::ApplicationReferenceDataSource', properties, dependsOn)
    }
}
