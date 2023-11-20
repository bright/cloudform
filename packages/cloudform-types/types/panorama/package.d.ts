import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class StorageLocation {
    RepoPrefixLocation?: Value<string>;
    GeneratedPrefixLocation?: Value<string>;
    BinaryPrefixLocation?: Value<string>;
    Bucket?: Value<string>;
    ManifestPrefixLocation?: Value<string>;
    constructor(properties: StorageLocation);
}
export interface PackageProperties {
    PackageName: Value<string>;
    StorageLocation?: StorageLocation;
    Tags?: List<ResourceTag>;
}
export default class Package extends ResourceBase<PackageProperties> {
    static StorageLocation: typeof StorageLocation;
    constructor(properties: PackageProperties);
}
