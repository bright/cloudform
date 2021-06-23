import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface TrackerProperties {
    Description?: Value<string>;
    KmsKeyId?: Value<string>;
    PricingPlan: Value<string>;
    PricingPlanDataSource?: Value<string>;
    TrackerName: Value<string>;
}
export default class Tracker extends ResourceBase<TrackerProperties> {
    constructor(properties: TrackerProperties);
}
