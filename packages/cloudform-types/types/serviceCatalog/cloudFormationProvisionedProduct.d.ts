import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProvisioningParameter {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: ProvisioningParameter);
}
export declare class ProvisioningPreferences {
    StackSetAccounts?: List<Value<string>>;
    StackSetFailureToleranceCount?: Value<number>;
    StackSetMaxConcurrencyPercentage?: Value<number>;
    StackSetMaxConcurrencyCount?: Value<number>;
    StackSetRegions?: List<Value<string>>;
    StackSetOperationType?: Value<string>;
    StackSetFailureTolerancePercentage?: Value<number>;
    constructor(properties: ProvisioningPreferences);
}
export interface CloudFormationProvisionedProductProperties {
    PathId?: Value<string>;
    ProvisioningParameters?: List<ProvisioningParameter>;
    ProvisioningPreferences?: ProvisioningPreferences;
    ProductName?: Value<string>;
    ProvisioningArtifactName?: Value<string>;
    NotificationArns?: List<Value<string>>;
    AcceptLanguage?: Value<string>;
    ProductId?: Value<string>;
    Tags?: List<ResourceTag>;
    ProvisionedProductName?: Value<string>;
    ProvisioningArtifactId?: Value<string>;
}
export default class CloudFormationProvisionedProduct extends ResourceBase<CloudFormationProvisionedProductProperties> {
    static ProvisioningParameter: typeof ProvisioningParameter;
    static ProvisioningPreferences: typeof ProvisioningPreferences;
    constructor(properties?: CloudFormationProvisionedProductProperties);
}
