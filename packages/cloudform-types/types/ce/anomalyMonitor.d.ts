import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ResourceTag {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: ResourceTag);
}
export interface AnomalyMonitorProperties {
    MonitorType: Value<string>;
    ResourceTags?: List<ResourceTag>;
    MonitorName: Value<string>;
    MonitorSpecification?: Value<string>;
    MonitorDimension?: Value<string>;
}
export default class AnomalyMonitor extends ResourceBase<AnomalyMonitorProperties> {
    static ResourceTag: typeof ResourceTag;
    constructor(properties: AnomalyMonitorProperties);
}
