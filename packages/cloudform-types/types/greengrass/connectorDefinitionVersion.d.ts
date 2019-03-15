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
export interface ConnectorDefinitionVersionProperties {
    Connectors: List<Connector>;
    ConnectorDefinitionId: Value<string>;
}
export default class ConnectorDefinitionVersion extends ResourceBase<ConnectorDefinitionVersionProperties> {
    static Connector: typeof Connector;
    constructor(properties: ConnectorDefinitionVersionProperties);
}
