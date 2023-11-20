import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface SoftwarePackageVersionProperties {
    Description?: Value<string>;
    PackageName: Value<string>;
    Attributes?: {
        [key: string]: Value<string>;
    };
    VersionName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class SoftwarePackageVersion extends ResourceBase<SoftwarePackageVersionProperties> {
    constructor(properties: SoftwarePackageVersionProperties);
}
