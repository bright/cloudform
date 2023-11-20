import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface InstanceProfileProperties {
    Description?: Value<string>;
    PackageCleanup?: Value<boolean>;
    ExcludeAppPackagesFromCleanup?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    RebootAfterUse?: Value<boolean>;
}
export default class InstanceProfile extends ResourceBase<InstanceProfileProperties> {
    constructor(properties: InstanceProfileProperties);
}
