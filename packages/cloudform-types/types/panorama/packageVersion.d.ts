import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PackageVersionProperties {
    UpdatedLatestPatchVersion?: Value<string>;
    PatchVersion: Value<string>;
    MarkLatest?: Value<boolean>;
    PackageId: Value<string>;
    OwnerAccount?: Value<string>;
    PackageVersion: Value<string>;
}
export default class PackageVersion extends ResourceBase<PackageVersionProperties> {
    constructor(properties: PackageVersionProperties);
}
