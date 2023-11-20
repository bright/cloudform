import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class NFS {
    MountOptions: NfsMountOptions;
    constructor(properties: NFS);
}
export declare class NfsMountOptions {
    Version?: Value<string>;
    constructor(properties: NfsMountOptions);
}
export declare class Protocol {
    SMB?: SMB;
    NFS?: NFS;
    constructor(properties: Protocol);
}
export declare class SMB {
    User: Value<string>;
    Domain?: Value<string>;
    MountOptions: SmbMountOptions;
    Password: Value<string>;
    constructor(properties: SMB);
}
export declare class SmbMountOptions {
    Version?: Value<string>;
    constructor(properties: SmbMountOptions);
}
export interface LocationFSxONTAPProperties {
    StorageVirtualMachineArn: Value<string>;
    Subdirectory?: Value<string>;
    Protocol?: Protocol;
    SecurityGroupArns: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class LocationFSxONTAP extends ResourceBase<LocationFSxONTAPProperties> {
    static NFS: typeof NFS;
    static NfsMountOptions: typeof NfsMountOptions;
    static Protocol: typeof Protocol;
    static SMB: typeof SMB;
    static SmbMountOptions: typeof SmbMountOptions;
    constructor(properties: LocationFSxONTAPProperties);
}
