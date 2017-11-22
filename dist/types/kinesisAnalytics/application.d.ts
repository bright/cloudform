import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface MappingParametersProperties {
    JSONMappingParameters?: JSONMappingParameters;
    CSVMappingParameters?: CSVMappingParameters;
}
export declare class MappingParameters extends ResourceBase {
    constructor(properties: MappingParametersProperties, dependsOn?: Value<string>);
}
export interface CSVMappingParametersProperties {
    RecordRowDelimiter: Value<string>;
    RecordColumnDelimiter: Value<string>;
}
export declare class CSVMappingParameters extends ResourceBase {
    constructor(properties: CSVMappingParametersProperties, dependsOn?: Value<string>);
}
export interface KinesisStreamsInputProperties {
    ResourceARN: Value<string>;
    RoleARN: Value<string>;
}
export declare class KinesisStreamsInput extends ResourceBase {
    constructor(properties: KinesisStreamsInputProperties, dependsOn?: Value<string>);
}
export interface InputProperties {
    NamePrefix: Value<string>;
    InputSchema: InputSchema;
    KinesisStreamsInput?: KinesisStreamsInput;
    KinesisFirehoseInput?: KinesisFirehoseInput;
    InputProcessingConfiguration?: InputProcessingConfiguration;
    InputParallelism?: InputParallelism;
}
export declare class Input extends ResourceBase {
    constructor(properties: InputProperties, dependsOn?: Value<string>);
}
export interface InputSchemaProperties {
    RecordEncoding?: Value<string>;
    RecordColumns: RecordColumn[];
    RecordFormat: RecordFormat;
}
export declare class InputSchema extends ResourceBase {
    constructor(properties: InputSchemaProperties, dependsOn?: Value<string>);
}
export interface RecordColumnProperties {
    Mapping?: Value<string>;
    SqlType: Value<string>;
    Name: Value<string>;
}
export declare class RecordColumn extends ResourceBase {
    constructor(properties: RecordColumnProperties, dependsOn?: Value<string>);
}
export interface RecordFormatProperties {
    MappingParameters?: MappingParameters;
    RecordFormatType: Value<string>;
}
export declare class RecordFormat extends ResourceBase {
    constructor(properties: RecordFormatProperties, dependsOn?: Value<string>);
}
export interface KinesisFirehoseInputProperties {
    ResourceARN: Value<string>;
    RoleARN: Value<string>;
}
export declare class KinesisFirehoseInput extends ResourceBase {
    constructor(properties: KinesisFirehoseInputProperties, dependsOn?: Value<string>);
}
export interface InputParallelismProperties {
    Count?: Value<number>;
}
export declare class InputParallelism extends ResourceBase {
    constructor(properties: InputParallelismProperties, dependsOn?: Value<string>);
}
export interface InputProcessingConfigurationProperties {
    InputLambdaProcessor?: InputLambdaProcessor;
}
export declare class InputProcessingConfiguration extends ResourceBase {
    constructor(properties: InputProcessingConfigurationProperties, dependsOn?: Value<string>);
}
export interface JSONMappingParametersProperties {
    RecordRowPath: Value<string>;
}
export declare class JSONMappingParameters extends ResourceBase {
    constructor(properties: JSONMappingParametersProperties, dependsOn?: Value<string>);
}
export interface InputLambdaProcessorProperties {
    ResourceARN: Value<string>;
    RoleARN: Value<string>;
}
export declare class InputLambdaProcessor extends ResourceBase {
    constructor(properties: InputLambdaProcessorProperties, dependsOn?: Value<string>);
}
export interface ApplicationProperties {
    ApplicationName?: Value<string>;
    Inputs: Input[];
    ApplicationDescription?: Value<string>;
    ApplicationCode?: Value<string>;
}
export default class Application extends ResourceBase {
    constructor(properties: ApplicationProperties, dependsOn?: Value<string>);
}
