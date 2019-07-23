import { ResourceBase } from '../resource';
export interface HubProperties {
    Tags?: {
        [key: string]: any;
    };
}
export default class Hub extends ResourceBase<HubProperties> {
    constructor(properties?: HubProperties);
}
