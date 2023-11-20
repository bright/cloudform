import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CloudWatchLogsConfiguration {
    LogGroupArn?: Value<string>;
    constructor(properties: CloudWatchLogsConfiguration);
}
export declare class LogConfiguration {
    EventSource?: Value<string>;
    CloudWatchLogsConfiguration?: CloudWatchLogsConfiguration;
    LogLevel?: Value<string>;
    constructor(properties: LogConfiguration);
}
export interface LogDeliveryConfigurationProperties {
    UserPoolId: Value<string>;
    LogConfigurations?: List<LogConfiguration>;
}
export default class LogDeliveryConfiguration extends ResourceBase<LogDeliveryConfigurationProperties> {
    static CloudWatchLogsConfiguration: typeof CloudWatchLogsConfiguration;
    static LogConfiguration: typeof LogConfiguration;
    constructor(properties: LogDeliveryConfigurationProperties);
}
