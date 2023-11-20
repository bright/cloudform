import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AssertionAttributes {
    Role?: Value<string>;
    Email?: Value<string>;
    Org?: Value<string>;
    Groups?: Value<string>;
    Login?: Value<string>;
    Name?: Value<string>;
    constructor(properties: AssertionAttributes);
}
export declare class IdpMetadata {
    Xml?: Value<string>;
    Url?: Value<string>;
    constructor(properties: IdpMetadata);
}
export declare class NetworkAccessControl {
    PrefixListIds?: List<Value<string>>;
    VpceIds?: List<Value<string>>;
    constructor(properties: NetworkAccessControl);
}
export declare class RoleValues {
    Editor?: List<Value<string>>;
    Admin?: List<Value<string>>;
    constructor(properties: RoleValues);
}
export declare class SamlConfiguration {
    LoginValidityDuration?: Value<number>;
    RoleValues?: RoleValues;
    IdpMetadata: IdpMetadata;
    AssertionAttributes?: AssertionAttributes;
    AllowedOrganizations?: List<Value<string>>;
    constructor(properties: SamlConfiguration);
}
export declare class VpcConfiguration {
    SecurityGroupIds: List<Value<string>>;
    SubnetIds: List<Value<string>>;
    constructor(properties: VpcConfiguration);
}
export interface WorkspaceProperties {
    NotificationDestinations?: List<Value<string>>;
    Description?: Value<string>;
    PermissionType: Value<string>;
    AccountAccessType: Value<string>;
    StackSetName?: Value<string>;
    SamlConfiguration?: SamlConfiguration;
    OrganizationalUnits?: List<Value<string>>;
    RoleArn?: Value<string>;
    Name?: Value<string>;
    GrafanaVersion?: Value<string>;
    DataSources?: List<Value<string>>;
    AuthenticationProviders: List<Value<string>>;
    OrganizationRoleName?: Value<string>;
    VpcConfiguration?: VpcConfiguration;
    NetworkAccessControl?: NetworkAccessControl;
    ClientToken?: Value<string>;
}
export default class Workspace extends ResourceBase<WorkspaceProperties> {
    static AssertionAttributes: typeof AssertionAttributes;
    static IdpMetadata: typeof IdpMetadata;
    static NetworkAccessControl: typeof NetworkAccessControl;
    static RoleValues: typeof RoleValues;
    static SamlConfiguration: typeof SamlConfiguration;
    static VpcConfiguration: typeof VpcConfiguration;
    constructor(properties: WorkspaceProperties);
}
