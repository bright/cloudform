import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface QueueProperties {
    Status?: Value<string>;
    Description?: Value<string>;
    PricingPlan?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class Queue extends ResourceBase<QueueProperties> {
    constructor(properties?: QueueProperties);
}
