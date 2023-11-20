import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CloudWatchLogsDestinationConfiguration {
    LogGroupName: Value<string>;
    constructor(properties: CloudWatchLogsDestinationConfiguration);
}
export declare class DestinationConfiguration {
    S3?: S3DestinationConfiguration;
    Firehose?: FirehoseDestinationConfiguration;
    CloudWatchLogs?: CloudWatchLogsDestinationConfiguration;
    constructor(properties: DestinationConfiguration);
}
export declare class FirehoseDestinationConfiguration {
    DeliveryStreamName: Value<string>;
    constructor(properties: FirehoseDestinationConfiguration);
}
export declare class S3DestinationConfiguration {
    BucketName: Value<string>;
    constructor(properties: S3DestinationConfiguration);
}
export interface LoggingConfigurationProperties {
    DestinationConfiguration: DestinationConfiguration;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class LoggingConfiguration extends ResourceBase<LoggingConfigurationProperties> {
    static CloudWatchLogsDestinationConfiguration: typeof CloudWatchLogsDestinationConfiguration;
    static DestinationConfiguration: typeof DestinationConfiguration;
    static FirehoseDestinationConfiguration: typeof FirehoseDestinationConfiguration;
    static S3DestinationConfiguration: typeof S3DestinationConfiguration;
    constructor(properties: LoggingConfigurationProperties);
}
