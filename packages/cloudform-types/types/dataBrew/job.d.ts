import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class S3Location {
    Bucket: Value<string>;
    Key?: Value<string>;
    constructor(properties: S3Location);
}
export declare class OutputFormatOptions {
    Csv?: CsvOutputOptions;
    constructor(properties: OutputFormatOptions);
}
export declare class CsvOutputOptions {
    Delimiter?: Value<string>;
    constructor(properties: CsvOutputOptions);
}
export declare class Recipe {
    Name: Value<string>;
    Version?: Value<string>;
    constructor(properties: Recipe);
}
export declare class Output {
    CompressionFormat?: Value<string>;
    Format?: Value<string>;
    FormatOptions?: OutputFormatOptions;
    PartitionColumns?: List<Value<string>>;
    Location: S3Location;
    Overwrite?: Value<boolean>;
    constructor(properties: Output);
}
export declare class OutputLocation {
    Bucket: Value<string>;
    Key?: Value<string>;
    constructor(properties: OutputLocation);
}
export declare class JobSample {
    Mode?: Value<string>;
    Size?: Value<number>;
    constructor(properties: JobSample);
}
export interface JobProperties {
    DatasetName?: Value<string>;
    EncryptionKeyArn?: Value<string>;
    EncryptionMode?: Value<string>;
    Name: Value<string>;
    Type: Value<string>;
    LogSubscription?: Value<string>;
    MaxCapacity?: Value<number>;
    MaxRetries?: Value<number>;
    Outputs?: List<Output>;
    OutputLocation?: OutputLocation;
    ProjectName?: Value<string>;
    Recipe?: Recipe;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
    Timeout?: Value<number>;
    JobSample?: JobSample;
}
export default class Job extends ResourceBase<JobProperties> {
    static S3Location: typeof S3Location;
    static OutputFormatOptions: typeof OutputFormatOptions;
    static CsvOutputOptions: typeof CsvOutputOptions;
    static Recipe: typeof Recipe;
    static Output: typeof Output;
    static OutputLocation: typeof OutputLocation;
    static JobSample: typeof JobSample;
    constructor(properties: JobProperties);
}
