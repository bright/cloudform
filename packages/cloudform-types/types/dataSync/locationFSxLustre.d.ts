import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LocationFSxLustreProperties {
    Subdirectory?: Value<string>;
    FsxFilesystemArn?: Value<string>;
    SecurityGroupArns: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class LocationFSxLustre extends ResourceBase<LocationFSxLustreProperties> {
    constructor(properties: LocationFSxLustreProperties);
}
