import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CustomMetricProperties {
    MetricName?: Value<string>;
    MetricType: Value<string>;
    DisplayName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class CustomMetric extends ResourceBase<CustomMetricProperties> {
    constructor(properties: CustomMetricProperties);
}
