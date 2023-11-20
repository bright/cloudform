import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DeploymentPreference {
    Type: Value<string>;
    StateMachineVersionArn: Value<string>;
    Percentage?: Value<number>;
    Alarms?: List<Value<string>>;
    Interval?: Value<number>;
    constructor(properties: DeploymentPreference);
}
export declare class RoutingConfigurationVersion {
    StateMachineVersionArn: Value<string>;
    Weight: Value<number>;
    constructor(properties: RoutingConfigurationVersion);
}
export interface StateMachineAliasProperties {
    Description?: Value<string>;
    RoutingConfiguration?: List<RoutingConfigurationVersion>;
    DeploymentPreference?: DeploymentPreference;
    Name?: Value<string>;
}
export default class StateMachineAlias extends ResourceBase<StateMachineAliasProperties> {
    static DeploymentPreference: typeof DeploymentPreference;
    static RoutingConfigurationVersion: typeof RoutingConfigurationVersion;
    constructor(properties?: StateMachineAliasProperties);
}
