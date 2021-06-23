import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class StackInstances {
    DeploymentTargets: DeploymentTargets;
    Regions: List<Value<string>>;
    ParameterOverrides?: List<Parameter>;
    constructor(properties: StackInstances);
}
export declare class AutoDeployment {
    Enabled?: Value<boolean>;
    RetainStacksOnAccountRemoval?: Value<boolean>;
    constructor(properties: AutoDeployment);
}
export declare class DeploymentTargets {
    Accounts?: List<Value<string>>;
    OrganizationalUnitIds?: List<Value<string>>;
    constructor(properties: DeploymentTargets);
}
export declare class OperationPreferences {
    FailureToleranceCount?: Value<number>;
    FailureTolerancePercentage?: Value<number>;
    MaxConcurrentCount?: Value<number>;
    MaxConcurrentPercentage?: Value<number>;
    RegionOrder?: List<Value<string>>;
    RegionConcurrencyType?: Value<string>;
    constructor(properties: OperationPreferences);
}
export declare class Parameter {
    ParameterKey: Value<string>;
    ParameterValue: Value<string>;
    constructor(properties: Parameter);
}
export interface StackSetProperties {
    StackSetName: Value<string>;
    AdministrationRoleARN?: Value<string>;
    AutoDeployment?: AutoDeployment;
    Capabilities?: List<Value<string>>;
    Description?: Value<string>;
    ExecutionRoleName?: Value<string>;
    OperationPreferences?: OperationPreferences;
    StackInstancesGroup?: List<StackInstances>;
    Parameters?: List<Parameter>;
    PermissionModel: Value<string>;
    Tags?: List<ResourceTag>;
    TemplateBody?: Value<string>;
    TemplateURL?: Value<string>;
    CallAs?: Value<string>;
}
export default class StackSet extends ResourceBase<StackSetProperties> {
    static StackInstances: typeof StackInstances;
    static AutoDeployment: typeof AutoDeployment;
    static DeploymentTargets: typeof DeploymentTargets;
    static OperationPreferences: typeof OperationPreferences;
    static Parameter: typeof Parameter;
    constructor(properties: StackSetProperties);
}
