import { ResourceBase } from '../resource';
import { Value } from '../internal';
import HadoopJarStep from './hadoopJarStep';
export declare type ActionOnFailure = "*" | "CONTINUE" | "CONTINUE_AND_WAIT";
export interface StepProperties {
    ActionOnFailure: Value<ActionOnFailure>;
    HadoopJarStep: HadoopJarStep;
    JobFlowId: Value<string>;
    Name: Value<string>;
}
export default class Step extends ResourceBase {
    constructor(properties: StepProperties, dependsOn?: Value<string>);
}
