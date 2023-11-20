import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AutoDeployment {
    Enabled?: Value<boolean>;
    RetainStacksOnAccountRemoval?: Value<boolean>;
    constructor(properties: AutoDeployment);
}
export declare class DeploymentTargets {
    AccountFilterType?: Value<string>;
    Accounts?: List<Value<string>>;
    AccountsUrl?: Value<string>;
    OrganizationalUnitIds?: List<Value<string>>;
    constructor(properties: DeploymentTargets);
}
export declare class ManagedExecution {
    Active?: Value<boolean>;
    constructor(properties: ManagedExecution);
}
export declare class OperationPreferences {
    MaxConcurrentPercentage?: Value<number>;
    RegionConcurrencyType?: Value<string>;
    MaxConcurrentCount?: Value<number>;
    FailureTolerancePercentage?: Value<number>;
    FailureToleranceCount?: Value<number>;
    RegionOrder?: List<Value<string>>;
    constructor(properties: OperationPreferences);
}
export declare class Parameter {
    ParameterValue: Value<string>;
    ParameterKey: Value<string>;
    constructor(properties: Parameter);
}
export declare class StackInstances {
    ParameterOverrides?: List<Parameter>;
    DeploymentTargets: DeploymentTargets;
    Regions: List<Value<string>>;
    constructor(properties: StackInstances);
}
export interface StackSetProperties {
    Description?: Value<string>;
    Parameters?: List<Parameter>;
    StackInstancesGroup?: List<StackInstances>;
    TemplateBody?: Value<string>;
    StackSetName: Value<string>;
    CallAs?: Value<string>;
    OperationPreferences?: OperationPreferences;
    TemplateURL?: Value<string>;
    AutoDeployment?: AutoDeployment;
    Capabilities?: List<Value<string>>;
    PermissionModel: Value<string>;
    AdministrationRoleARN?: Value<string>;
    ExecutionRoleName?: Value<string>;
    ManagedExecution?: ManagedExecution;
    Tags?: List<ResourceTag>;
}
export default class StackSet extends ResourceBase<StackSetProperties> {
    static AutoDeployment: typeof AutoDeployment;
    static DeploymentTargets: typeof DeploymentTargets;
    static ManagedExecution: typeof ManagedExecution;
    static OperationPreferences: typeof OperationPreferences;
    static Parameter: typeof Parameter;
    static StackInstances: typeof StackInstances;
    constructor(properties: StackSetProperties);
}
