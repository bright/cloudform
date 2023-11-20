import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MountOptions {
    Version?: Value<string>;
    constructor(properties: MountOptions);
}
export declare class NFS {
    MountOptions: MountOptions;
    constructor(properties: NFS);
}
export declare class Protocol {
    NFS?: NFS;
    constructor(properties: Protocol);
}
export interface LocationFSxOpenZFSProperties {
    Subdirectory?: Value<string>;
    FsxFilesystemArn?: Value<string>;
    Protocol: Protocol;
    SecurityGroupArns: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class LocationFSxOpenZFS extends ResourceBase<LocationFSxOpenZFSProperties> {
    static MountOptions: typeof MountOptions;
    static NFS: typeof NFS;
    static Protocol: typeof Protocol;
    constructor(properties: LocationFSxOpenZFSProperties);
}
