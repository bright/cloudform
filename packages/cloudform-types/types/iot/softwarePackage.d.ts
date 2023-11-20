import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface SoftwarePackageProperties {
    Description?: Value<string>;
    PackageName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class SoftwarePackage extends ResourceBase<SoftwarePackageProperties> {
    constructor(properties?: SoftwarePackageProperties);
}
