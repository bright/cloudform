import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface MetricsCollectionProperties {
    Granularity: Value<string>;
    Metrics?: Value<string>[];
}
export default class MetricsCollection extends ResourceBase {
    constructor(properties: MetricsCollectionProperties, dependsOn?: Value<string>);
}
