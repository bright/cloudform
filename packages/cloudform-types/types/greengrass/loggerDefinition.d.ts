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
export declare class LoggerDefinitionVersion {
    Loggers: List<Logger>;
    constructor(properties: LoggerDefinitionVersion);
}
export interface LoggerDefinitionProperties {
    InitialVersion?: LoggerDefinitionVersion;
    Name: Value<string>;
}
export default class LoggerDefinition extends ResourceBase<LoggerDefinitionProperties> {
    static Logger: typeof Logger;
    static LoggerDefinitionVersion: typeof LoggerDefinitionVersion;
    constructor(properties: LoggerDefinitionProperties);
}
