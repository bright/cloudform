import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DashboardProperties {
    ProjectId?: Value<string>;
    DashboardName: Value<string>;
    DashboardDescription: Value<string>;
    DashboardDefinition: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Dashboard extends ResourceBase<DashboardProperties> {
    constructor(properties: DashboardProperties);
}
