import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AssetHierarchy {
    LogicalId: Value<string>;
    ChildAssetId: Value<string>;
    constructor(properties: AssetHierarchy);
}
export declare class AssetProperty {
    LogicalId: Value<string>;
    Alias?: Value<string>;
    Unit?: Value<string>;
    NotificationState?: Value<string>;
    constructor(properties: AssetProperty);
}
export interface AssetProperties {
    AssetModelId: Value<string>;
    AssetDescription?: Value<string>;
    AssetProperties?: List<AssetProperty>;
    AssetName: Value<string>;
    Tags?: List<ResourceTag>;
    AssetHierarchies?: List<AssetHierarchy>;
}
export default class Asset extends ResourceBase<AssetProperties> {
    static AssetHierarchy: typeof AssetHierarchy;
    static AssetProperty: typeof AssetProperty;
    constructor(properties: AssetProperties);
}
