import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SimulationApplicationVersionProperties {
    CurrentRevisionId?: Value<string>;
    Application: Value<string>;
}
export default class SimulationApplicationVersion extends ResourceBase {
    constructor(properties?: SimulationApplicationVersionProperties);
}
