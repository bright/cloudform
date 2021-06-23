import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class InsightsConfiguration {
    InsightsEnabled?: Value<boolean>;
    NotificationsEnabled?: Value<boolean>;
    constructor(properties: InsightsConfiguration);
}
export interface GroupProperties {
    FilterExpression?: Value<string>;
    GroupName?: Value<string>;
    InsightsConfiguration?: InsightsConfiguration;
    Tags?: List<{
        [key: string]: any;
    }>;
}
export default class Group extends ResourceBase<GroupProperties> {
    static InsightsConfiguration: typeof InsightsConfiguration;
    constructor(properties?: GroupProperties);
}
