import { ResourceBase } from '../resource';
import { Value } from '../internal';
import StepPropertie from './stepPropertie';
export interface HadoopJarStepProperties {
    Args?: Value<string>;
    Jar: Value<string>;
    MainClass?: Value<string>;
    StepProperties?: StepPropertie[];
}
export default class HadoopJarStep extends ResourceBase {
    constructor(properties: HadoopJarStepProperties, dependsOn?: Value<string>);
}
