import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ActiveDirectoryConfiguration {
    SelfManagedActiveDirectoryConfiguration?: SelfManagedActiveDirectoryConfiguration;
    NetBiosName?: Value<string>;
    constructor(properties: ActiveDirectoryConfiguration);
}
export declare class SelfManagedActiveDirectoryConfiguration {
    FileSystemAdministratorsGroup?: Value<string>;
    UserName?: Value<string>;
    DomainName?: Value<string>;
    OrganizationalUnitDistinguishedName?: Value<string>;
    DnsIps?: List<Value<string>>;
    Password?: Value<string>;
    constructor(properties: SelfManagedActiveDirectoryConfiguration);
}
export interface StorageVirtualMachineProperties {
    SvmAdminPassword?: Value<string>;
    ActiveDirectoryConfiguration?: ActiveDirectoryConfiguration;
    RootVolumeSecurityStyle?: Value<string>;
    FileSystemId: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class StorageVirtualMachine extends ResourceBase<StorageVirtualMachineProperties> {
    static ActiveDirectoryConfiguration: typeof ActiveDirectoryConfiguration;
    static SelfManagedActiveDirectoryConfiguration: typeof SelfManagedActiveDirectoryConfiguration;
    constructor(properties: StorageVirtualMachineProperties);
}
