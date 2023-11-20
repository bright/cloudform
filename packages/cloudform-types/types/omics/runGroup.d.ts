import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RunGroupProperties {
    MaxDuration?: Value<number>;
    MaxGpus?: Value<number>;
    MaxRuns?: Value<number>;
    MaxCpus?: Value<number>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name?: Value<string>;
}
export default class RunGroup extends ResourceBase<RunGroupProperties> {
    constructor(properties?: RunGroupProperties);
}
