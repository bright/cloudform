import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class KinesisFirehoseOutput {
    ResourceARN: Value<string>;
    RoleARN: Value<string>;
    constructor(properties: KinesisFirehoseOutput);
}
export declare class KinesisStreamsOutput {
    ResourceARN: Value<string>;
    RoleARN: Value<string>;
    constructor(properties: KinesisStreamsOutput);
}
export declare class Output {
    DestinationSchema: DestinationSchema;
    KinesisFirehoseOutput?: KinesisFirehoseOutput;
    KinesisStreamsOutput?: KinesisStreamsOutput;
    Name?: Value<string>;
    constructor(properties: Output);
}
export declare class DestinationSchema {
    RecordFormatType?: Value<string>;
    constructor(properties: DestinationSchema);
}
export interface ApplicationOutputProperties {
    ApplicationName: Value<string>;
    Output: Output;
}
export default class ApplicationOutput extends ResourceBase {
    constructor(properties: ApplicationOutputProperties, dependsOn?: Value<string> | Value<string>[]);
}
