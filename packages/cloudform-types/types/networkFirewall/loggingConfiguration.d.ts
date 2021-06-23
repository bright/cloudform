import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LogDestinationConfig {
    LogType: Value<string>;
    LogDestinationType: Value<string>;
    LogDestination: {
        [key: string]: Value<string>;
    };
    constructor(properties: LogDestinationConfig);
}
export declare class LoggingConfigurationInner {
    LogDestinationConfigs: List<LogDestinationConfig>;
    constructor(properties: LoggingConfigurationInner);
}
export interface LoggingConfigurationProperties {
    FirewallName?: Value<string>;
    FirewallArn: Value<string>;
    LoggingConfiguration: LoggingConfiguration;
}
export default class LoggingConfiguration extends ResourceBase<LoggingConfigurationProperties> {
    static LogDestinationConfig: typeof LogDestinationConfig;
    static LoggingConfiguration: typeof LoggingConfigurationInner;
    constructor(properties: LoggingConfigurationProperties);
}
