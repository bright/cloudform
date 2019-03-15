import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Logger {
    Space?: Value<number>;
    Type: Value<string>;
    Level: Value<string>;
    Id: Value<string>;
    Component: Value<string>;
    constructor(properties: Logger);
}
export interface LoggerDefinitionVersionProperties {
    LoggerDefinitionId: Value<string>;
    Loggers: List<Logger>;
}
export default class LoggerDefinitionVersion extends ResourceBase<LoggerDefinitionVersionProperties> {
    static Logger: typeof Logger;
    constructor(properties: LoggerDefinitionVersionProperties);
}
