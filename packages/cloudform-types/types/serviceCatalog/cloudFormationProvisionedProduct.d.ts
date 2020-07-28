import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProvisioningParameter {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: ProvisioningParameter);
}
export declare class ProvisioningPreferences {
    StackSetAccounts?: List<Value<string>>;
    StackSetFailureToleranceCount?: Value<number>;
    StackSetFailureTolerancePercentage?: Value<number>;
    StackSetMaxConcurrencyCount?: Value<number>;
    StackSetMaxConcurrencyPercentage?: Value<number>;
    StackSetOperationType?: Value<string>;
    StackSetRegions?: List<Value<string>>;
    constructor(properties: ProvisioningPreferences);
}
export interface CloudFormationProvisionedProductProperties {
    AcceptLanguage?: Value<string>;
    NotificationArns?: List<Value<string>>;
    PathId?: Value<string>;
    ProductId?: Value<string>;
    ProductName?: Value<string>;
    ProvisionedProductName?: Value<string>;
    ProvisioningArtifactId?: Value<string>;
    ProvisioningArtifactName?: Value<string>;
    ProvisioningParameters?: List<ProvisioningParameter>;
    ProvisioningPreferences?: ProvisioningPreferences;
    Tags?: List<ResourceTag>;
}
export default class CloudFormationProvisionedProduct extends ResourceBase<CloudFormationProvisionedProductProperties> {
    static ProvisioningParameter: typeof ProvisioningParameter;
    static ProvisioningPreferences: typeof ProvisioningPreferences;
    constructor(properties?: CloudFormationProvisionedProductProperties);
}
