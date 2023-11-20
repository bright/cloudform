import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface TrackerProperties {
    TrackerName: Value<string>;
    Description?: Value<string>;
    KmsKeyId?: Value<string>;
    PositionFiltering?: Value<string>;
}
export default class Tracker extends ResourceBase<TrackerProperties> {
    constructor(properties: TrackerProperties);
}
