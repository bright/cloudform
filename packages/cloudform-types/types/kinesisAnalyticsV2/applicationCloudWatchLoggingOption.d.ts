import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class CloudWatchLoggingOption {
    LogStreamARN: Value<string>;
    constructor(properties: CloudWatchLoggingOption);
}
export interface ApplicationCloudWatchLoggingOptionProperties {
    ApplicationName: Value<string>;
    CloudWatchLoggingOption: CloudWatchLoggingOption;
}
export default class ApplicationCloudWatchLoggingOption extends ResourceBase<ApplicationCloudWatchLoggingOptionProperties> {
    static CloudWatchLoggingOption: typeof CloudWatchLoggingOption;
    constructor(properties: ApplicationCloudWatchLoggingOptionProperties);
}
