import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface UpScalingProperties {
    CpuThreshold?: Value<number>;
    IgnoreMetricsTime?: Value<number>;
    InstanceCount?: Value<number>;
    LoadThreshold?: Value<number>;
    MemoryThreshold?: Value<number>;
    ThresholdsWaitTime?: Value<number>;
}
export default class UpScaling extends ResourceBase {
    constructor(properties: UpScalingProperties, dependsOn?: Value<string>);
}
