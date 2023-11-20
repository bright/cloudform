import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DashboardProperties {
    DashboardName: Value<string>;
    DashboardDefinition: Value<string>;
    ProjectId?: Value<string>;
    DashboardDescription: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Dashboard extends ResourceBase<DashboardProperties> {
    constructor(properties: DashboardProperties);
}
