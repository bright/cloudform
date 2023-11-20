import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CustomerManagedPolicyReference {
    Path?: Value<string>;
    Name: Value<string>;
    constructor(properties: CustomerManagedPolicyReference);
}
export declare class PermissionsBoundary {
    CustomerManagedPolicyReference?: CustomerManagedPolicyReference;
    ManagedPolicyArn?: Value<string>;
    constructor(properties: PermissionsBoundary);
}
export interface PermissionSetProperties {
    RelayStateType?: Value<string>;
    CustomerManagedPolicyReferences?: List<CustomerManagedPolicyReference>;
    SessionDuration?: Value<string>;
    Description?: Value<string>;
    InstanceArn: Value<string>;
    InlinePolicy?: {
        [key: string]: any;
    };
    ManagedPolicies?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    PermissionsBoundary?: PermissionsBoundary;
}
export default class PermissionSet extends ResourceBase<PermissionSetProperties> {
    static CustomerManagedPolicyReference: typeof CustomerManagedPolicyReference;
    static PermissionsBoundary: typeof PermissionsBoundary;
    constructor(properties: PermissionSetProperties);
}
