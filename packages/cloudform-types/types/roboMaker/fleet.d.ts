import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface FleetProperties {
    Tags?: {
        [key: string]: Value<string>;
    };
    Name?: Value<string>;
}
export default class Fleet extends ResourceBase<FleetProperties> {
    constructor(properties?: FleetProperties);
}
