import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AdvancedEventSelector {
    FieldSelectors: List<AdvancedFieldSelector>;
    Name?: Value<string>;
    constructor(properties: AdvancedEventSelector);
}
export declare class AdvancedFieldSelector {
    Field: Value<string>;
    Equals?: List<Value<string>>;
    NotStartsWith?: List<Value<string>>;
    NotEndsWith?: List<Value<string>>;
    StartsWith?: List<Value<string>>;
    EndsWith?: List<Value<string>>;
    NotEquals?: List<Value<string>>;
    constructor(properties: AdvancedFieldSelector);
}
export interface EventDataStoreProperties {
    OrganizationEnabled?: Value<boolean>;
    KmsKeyId?: Value<string>;
    AdvancedEventSelectors?: List<AdvancedEventSelector>;
    TerminationProtectionEnabled?: Value<boolean>;
    MultiRegionEnabled?: Value<boolean>;
    RetentionPeriod?: Value<number>;
    IngestionEnabled?: Value<boolean>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class EventDataStore extends ResourceBase<EventDataStoreProperties> {
    static AdvancedEventSelector: typeof AdvancedEventSelector;
    static AdvancedFieldSelector: typeof AdvancedFieldSelector;
    constructor(properties?: EventDataStoreProperties);
}
