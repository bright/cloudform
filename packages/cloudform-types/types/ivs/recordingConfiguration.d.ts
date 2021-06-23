import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DestinationConfiguration {
    S3: S3DestinationConfiguration;
    constructor(properties: DestinationConfiguration);
}
export declare class S3DestinationConfiguration {
    BucketName: Value<string>;
    constructor(properties: S3DestinationConfiguration);
}
export interface RecordingConfigurationProperties {
    Name?: Value<string>;
    DestinationConfiguration: DestinationConfiguration;
    Tags?: List<ResourceTag>;
}
export default class RecordingConfiguration extends ResourceBase<RecordingConfigurationProperties> {
    static DestinationConfiguration: typeof DestinationConfiguration;
    static S3DestinationConfiguration: typeof S3DestinationConfiguration;
    constructor(properties: RecordingConfigurationProperties);
}
