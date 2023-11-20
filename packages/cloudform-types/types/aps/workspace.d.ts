import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LoggingConfiguration {
    LogGroupArn?: Value<string>;
    constructor(properties: LoggingConfiguration);
}
export interface WorkspaceProperties {
    Alias?: Value<string>;
    LoggingConfiguration?: LoggingConfiguration;
    AlertManagerDefinition?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Workspace extends ResourceBase<WorkspaceProperties> {
    static LoggingConfiguration: typeof LoggingConfiguration;
    constructor(properties?: WorkspaceProperties);
}
