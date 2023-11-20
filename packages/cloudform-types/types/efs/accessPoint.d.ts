import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessPointTag {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: AccessPointTag);
}
export declare class CreationInfo {
    OwnerGid: Value<string>;
    OwnerUid: Value<string>;
    Permissions: Value<string>;
    constructor(properties: CreationInfo);
}
export declare class PosixUser {
    Uid: Value<string>;
    SecondaryGids?: List<Value<string>>;
    Gid: Value<string>;
    constructor(properties: PosixUser);
}
export declare class RootDirectory {
    Path?: Value<string>;
    CreationInfo?: CreationInfo;
    constructor(properties: RootDirectory);
}
export interface AccessPointProperties {
    FileSystemId: Value<string>;
    RootDirectory?: RootDirectory;
    ClientToken?: Value<string>;
    AccessPointTags?: List<AccessPointTag>;
    PosixUser?: PosixUser;
}
export default class AccessPoint extends ResourceBase<AccessPointProperties> {
    static AccessPointTag: typeof AccessPointTag;
    static CreationInfo: typeof CreationInfo;
    static PosixUser: typeof PosixUser;
    static RootDirectory: typeof RootDirectory;
    constructor(properties: AccessPointProperties);
}
