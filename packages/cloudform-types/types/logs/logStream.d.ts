import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface LogStreamProperties {
    LogStreamName?: Value<string>;
    LogGroupName: Value<string>;
}
export default class LogStream extends ResourceBase<LogStreamProperties> {
    constructor(properties: LogStreamProperties);
}
