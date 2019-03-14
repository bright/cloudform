import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class LambdaOutput {
    ResourceARN: Value<string>;
    constructor(properties: LambdaOutput);
}
export declare class KinesisFirehoseOutput {
    ResourceARN: Value<string>;
    constructor(properties: KinesisFirehoseOutput);
}
export declare class KinesisStreamsOutput {
    ResourceARN: Value<string>;
    constructor(properties: KinesisStreamsOutput);
}
export declare class DestinationSchema {
    RecordFormatType?: Value<string>;
    constructor(properties: DestinationSchema);
}
export declare class Output {
    DestinationSchema: DestinationSchema;
    LambdaOutput?: LambdaOutput;
    KinesisFirehoseOutput?: KinesisFirehoseOutput;
    KinesisStreamsOutput?: KinesisStreamsOutput;
    Name?: Value<string>;
    constructor(properties: Output);
}
export interface ApplicationOutputProperties {
    ApplicationName: Value<string>;
    Output: Output;
}
export default class ApplicationOutput extends ResourceBase<ApplicationOutputProperties> {
    static LambdaOutput: typeof LambdaOutput;
    static KinesisFirehoseOutput: typeof KinesisFirehoseOutput;
    static KinesisStreamsOutput: typeof KinesisStreamsOutput;
    static DestinationSchema: typeof DestinationSchema;
    static Output: typeof Output;
    constructor(properties: ApplicationOutputProperties);
}
