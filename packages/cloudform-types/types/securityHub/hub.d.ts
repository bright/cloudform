import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface HubProperties {
    ControlFindingGenerator?: Value<string>;
    EnableDefaultStandards?: Value<boolean>;
    AutoEnableControls?: Value<boolean>;
    Tags?: {
        [key: string]: any;
    };
}
export default class Hub extends ResourceBase<HubProperties> {
    constructor(properties?: HubProperties);
}
