import { ResourceBase } from '../resource';
import { Value } from '../internal';
import DownScaling from './downScaling';
import UpScaling from './upScaling';
export interface LoadBasedAutoScalingProperties {
    Enable: Value<boolean>;
    DownScaling?: DownScaling[];
    UpScaling?: UpScaling[];
}
export default class LoadBasedAutoScaling extends ResourceBase {
    constructor(properties: LoadBasedAutoScalingProperties, dependsOn?: Value<string>);
}
