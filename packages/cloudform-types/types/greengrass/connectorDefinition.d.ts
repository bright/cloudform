import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConnectorDefinitionVersion {
    Connectors: List<Connector>;
    constructor(properties: ConnectorDefinitionVersion);
}
export declare class Connector {
    ConnectorArn: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    Id: Value<string>;
    constructor(properties: Connector);
}
export interface ConnectorDefinitionProperties {
    InitialVersion?: ConnectorDefinitionVersion;
    Name: Value<string>;
}
export default class ConnectorDefinition extends ResourceBase<ConnectorDefinitionProperties> {
    static ConnectorDefinitionVersion: typeof ConnectorDefinitionVersion;
    static Connector: typeof Connector;
    constructor(properties: ConnectorDefinitionProperties);
}
