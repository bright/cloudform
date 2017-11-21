import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type LogDriver = "*" | "json-file" | "syslog" | "journald" | "gelf" | "fluentd" | "awslogs" | "splunk";
export interface LogConfigurationProperties {
    LogDriver: Value<LogDriver>;
    Options: any;
}
export default class LogConfiguration extends ResourceBase {
    constructor(properties: LogConfigurationProperties, dependsOn?: Value<string>);
}
