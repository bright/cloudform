import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LocationFSxWindowsProperties {
    User: Value<string>;
    Subdirectory?: Value<string>;
    FsxFilesystemArn?: Value<string>;
    Domain?: Value<string>;
    SecurityGroupArns: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Password?: Value<string>;
}
export default class LocationFSxWindows extends ResourceBase<LocationFSxWindowsProperties> {
    constructor(properties: LocationFSxWindowsProperties);
}
