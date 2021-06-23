import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AnomalyMonitorProperties {
    MonitorType: Value<string>;
    MonitorName: Value<string>;
    MonitorDimension?: Value<string>;
    MonitorSpecification?: Value<string>;
}
export default class AnomalyMonitor extends ResourceBase<AnomalyMonitorProperties> {
    constructor(properties: AnomalyMonitorProperties);
}
