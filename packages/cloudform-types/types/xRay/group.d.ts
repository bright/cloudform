import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InsightsConfiguration {
    NotificationsEnabled?: Value<boolean>;
    InsightsEnabled?: Value<boolean>;
    constructor(properties: InsightsConfiguration);
}
export interface GroupProperties {
    GroupName: Value<string>;
    InsightsConfiguration?: InsightsConfiguration;
    FilterExpression?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Group extends ResourceBase<GroupProperties> {
    static InsightsConfiguration: typeof InsightsConfiguration;
    constructor(properties: GroupProperties);
}
