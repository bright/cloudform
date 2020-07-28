import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProvisionedConcurrencyConfiguration {
    ProvisionedConcurrentExecutions: Value<number>;
    constructor(properties: ProvisionedConcurrencyConfiguration);
}
export declare class AliasRoutingConfiguration {
    AdditionalVersionWeights: List<VersionWeight>;
    constructor(properties: AliasRoutingConfiguration);
}
export declare class VersionWeight {
    FunctionVersion: Value<string>;
    FunctionWeight: Value<number>;
    constructor(properties: VersionWeight);
}
export interface AliasProperties {
    Description?: Value<string>;
    FunctionName: Value<string>;
    FunctionVersion: Value<string>;
    Name: Value<string>;
    ProvisionedConcurrencyConfig?: ProvisionedConcurrencyConfiguration;
    RoutingConfig?: AliasRoutingConfiguration;
}
export default class Alias extends ResourceBase<AliasProperties> {
    static ProvisionedConcurrencyConfiguration: typeof ProvisionedConcurrencyConfiguration;
    static AliasRoutingConfiguration: typeof AliasRoutingConfiguration;
    static VersionWeight: typeof VersionWeight;
    constructor(properties: AliasProperties);
}
