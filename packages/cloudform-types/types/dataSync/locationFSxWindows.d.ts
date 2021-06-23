import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LocationFSxWindowsProperties {
    Domain?: Value<string>;
    FsxFilesystemArn: Value<string>;
    Password: Value<string>;
    SecurityGroupArns: List<Value<string>>;
    Subdirectory?: Value<string>;
    User: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class LocationFSxWindows extends ResourceBase<LocationFSxWindowsProperties> {
    constructor(properties: LocationFSxWindowsProperties);
}
