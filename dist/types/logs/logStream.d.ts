import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface LogStreamProperties {
    LogGroupName: Value<string>;
    LogStreamName: Value<string>;
}
export default class LogStream extends ResourceBase {
    constructor(properties: LogStreamProperties, dependsOn?: Value<string>);
}
