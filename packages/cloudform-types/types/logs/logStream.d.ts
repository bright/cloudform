import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface LogStreamProperties {
    LogGroupName: Value<string>;
    LogStreamName?: Value<string>;
}
export default class LogStream extends ResourceBase<LogStreamProperties> {
    constructor(properties: LogStreamProperties);
}
