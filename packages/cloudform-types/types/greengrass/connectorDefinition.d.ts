import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Connector {
    ConnectorArn: Value<string>;
    Parameters?: {
        [key: string]: any;
    };
    Id: Value<string>;
    constructor(properties: Connector);
}
export declare class ConnectorDefinitionVersion {
    Connectors: List<Connector>;
    constructor(properties: ConnectorDefinitionVersion);
}
export interface ConnectorDefinitionProperties {
    InitialVersion?: ConnectorDefinitionVersion;
    Tags?: {
        [key: string]: any;
    };
    Name: Value<string>;
}
export default class ConnectorDefinition extends ResourceBase<ConnectorDefinitionProperties> {
    static Connector: typeof Connector;
    static ConnectorDefinitionVersion: typeof ConnectorDefinitionVersion;
    constructor(properties: ConnectorDefinitionProperties);
}
