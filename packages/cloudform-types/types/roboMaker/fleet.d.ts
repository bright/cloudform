import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface FleetProperties {
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class Fleet extends ResourceBase<FleetProperties> {
    constructor(properties?: FleetProperties);
}
