import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface LoggingProperties {
    AccountId: Value<string>;
    RoleArn: Value<string>;
    DefaultLogLevel: Value<string>;
}
export default class Logging extends ResourceBase<LoggingProperties> {
    constructor(properties: LoggingProperties);
}
