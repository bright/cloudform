import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ConnectorProvisioningConfig {
    Lambda?: LambdaConnectorProvisioningConfig;
    constructor(properties: ConnectorProvisioningConfig);
}
export declare class LambdaConnectorProvisioningConfig {
    LambdaArn: Value<string>;
    constructor(properties: LambdaConnectorProvisioningConfig);
}
export interface ConnectorProperties {
    ConnectorLabel?: Value<string>;
    ConnectorProvisioningType: Value<string>;
    Description?: Value<string>;
    ConnectorProvisioningConfig: ConnectorProvisioningConfig;
}
export default class Connector extends ResourceBase<ConnectorProperties> {
    static ConnectorProvisioningConfig: typeof ConnectorProvisioningConfig;
    static LambdaConnectorProvisioningConfig: typeof LambdaConnectorProvisioningConfig;
    constructor(properties: ConnectorProperties);
}
