import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FeatureDefinition {
    FeatureName: Value<string>;
    FeatureType: Value<string>;
    constructor(properties: FeatureDefinition);
}
export interface FeatureGroupProperties {
    FeatureGroupName: Value<string>;
    RecordIdentifierFeatureName: Value<string>;
    EventTimeFeatureName: Value<string>;
    FeatureDefinitions: List<FeatureDefinition>;
    OnlineStoreConfig?: {
        [key: string]: any;
    };
    OfflineStoreConfig?: {
        [key: string]: any;
    };
    RoleArn?: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class FeatureGroup extends ResourceBase<FeatureGroupProperties> {
    static FeatureDefinition: typeof FeatureDefinition;
    constructor(properties: FeatureGroupProperties);
}
