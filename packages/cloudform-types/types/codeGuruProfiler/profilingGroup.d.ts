import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ProfilingGroupProperties {
    ProfilingGroupName: Value<string>;
}
export default class ProfilingGroup extends ResourceBase<ProfilingGroupProperties> {
    constructor(properties: ProfilingGroupProperties);
}
