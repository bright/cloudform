import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface DownScalingProperties {
    CpuThreshold?: Value<number>;
    IgnoreMetricsTime?: Value<number>;
    InstanceCount?: Value<number>;
    LoadThreshold?: Value<number>;
    MemoryThreshold?: Value<number>;
    ThresholdsWaitTime?: Value<number>;
}
export default class DownScaling extends ResourceBase {
    constructor(properties: DownScalingProperties, dependsOn?: Value<string>);
}
