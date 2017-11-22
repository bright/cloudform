import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface KinesisFirehoseOutputProperties {
    ResourceARN: Value<string>;
    RoleARN: Value<string>;
}
export declare class KinesisFirehoseOutput extends ResourceBase {
    constructor(properties: KinesisFirehoseOutputProperties, dependsOn?: Value<string>);
}
export interface KinesisStreamsOutputProperties {
    ResourceARN: Value<string>;
    RoleARN: Value<string>;
}
export declare class KinesisStreamsOutput extends ResourceBase {
    constructor(properties: KinesisStreamsOutputProperties, dependsOn?: Value<string>);
}
export interface OutputProperties {
    DestinationSchema: DestinationSchema;
    KinesisFirehoseOutput?: KinesisFirehoseOutput;
    KinesisStreamsOutput?: KinesisStreamsOutput;
    Name?: Value<string>;
}
export declare class Output extends ResourceBase {
    constructor(properties: OutputProperties, dependsOn?: Value<string>);
}
export interface DestinationSchemaProperties {
    RecordFormatType?: Value<string>;
}
export declare class DestinationSchema extends ResourceBase {
    constructor(properties: DestinationSchemaProperties, dependsOn?: Value<string>);
}
export interface ApplicationOutputProperties {
    ApplicationName: Value<string>;
    Output: Output;
}
export default class ApplicationOutput extends ResourceBase {
    constructor(properties: ApplicationOutputProperties, dependsOn?: Value<string>);
}
