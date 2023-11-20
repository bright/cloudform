import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HomeDirectoryMapEntry {
    Entry: Value<string>;
    Target: Value<string>;
    constructor(properties: HomeDirectoryMapEntry);
}
export declare class PosixProfile {
    Uid: Value<number>;
    SecondaryGids?: List<Value<number>>;
    Gid: Value<number>;
    constructor(properties: PosixProfile);
}
export declare type SshPublicKey = Value<string>;
export interface UserProperties {
    Policy?: Value<string>;
    Role: Value<string>;
    HomeDirectory?: Value<string>;
    HomeDirectoryType?: Value<string>;
    ServerId: Value<string>;
    UserName: Value<string>;
    HomeDirectoryMappings?: List<HomeDirectoryMapEntry>;
    PosixProfile?: PosixProfile;
    SshPublicKeys?: List<SshPublicKey>;
    Tags?: List<ResourceTag>;
}
export default class User extends ResourceBase<UserProperties> {
    static HomeDirectoryMapEntry: typeof HomeDirectoryMapEntry;
    static PosixProfile: typeof PosixProfile;
    constructor(properties: UserProperties);
}
