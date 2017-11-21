import { ResourceBase } from '../resource';
import { Value } from '../internal';
import SpotFleetRequestConfigData from './spotFleetRequestConfigData';
export interface SpotFleetProperties {
    SpotFleetRequestConfigData: SpotFleetRequestConfigData;
}
export default class SpotFleet extends ResourceBase {
    constructor(properties: SpotFleetProperties, dependsOn?: Value<string>);
}
