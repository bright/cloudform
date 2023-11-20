import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AttributePayload {
    Attributes?: {
        [key: string]: Value<string>;
    };
    constructor(properties: AttributePayload);
}
export declare class ThingGroupProperties {
    AttributePayload?: AttributePayload;
    ThingGroupDescription?: Value<string>;
    constructor(properties: ThingGroupProperties);
}
export interface ThingGroupProperties {
    ParentGroupName?: Value<string>;
    ThingGroupName?: Value<string>;
    ThingGroupProperties?: ThingGroupProperties;
    QueryString?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ThingGroup extends ResourceBase<ThingGroupProperties> {
    static AttributePayload: typeof AttributePayload;
    static ThingGroupProperties: typeof ThingGroupProperties;
    constructor(properties?: ThingGroupProperties);
}
