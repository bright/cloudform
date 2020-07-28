import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessPointTag {
    Key?: Value<string>;
    Value?: Value<string>;
    constructor(properties: AccessPointTag);
}
export declare class CreationInfo {
    OwnerUid: Value<string>;
    OwnerGid: Value<string>;
    Permissions: Value<string>;
    constructor(properties: CreationInfo);
}
export declare class RootDirectory {
    Path?: Value<string>;
    CreationInfo?: CreationInfo;
    constructor(properties: RootDirectory);
}
export declare class PosixUser {
    Uid: Value<string>;
    Gid: Value<string>;
    SecondaryGids?: List<Value<string>>;
    constructor(properties: PosixUser);
}
export interface AccessPointProperties {
    ClientToken?: Value<string>;
    AccessPointTags?: List<AccessPointTag>;
    FileSystemId: Value<string>;
    PosixUser?: PosixUser;
    RootDirectory?: RootDirectory;
}
export default class AccessPoint extends ResourceBase<AccessPointProperties> {
    static AccessPointTag: typeof AccessPointTag;
    static CreationInfo: typeof CreationInfo;
    static RootDirectory: typeof RootDirectory;
    static PosixUser: typeof PosixUser;
    constructor(properties: AccessPointProperties);
}
