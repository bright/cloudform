import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface HadoopJarStepConfigProperties {
    Args?: Value<string>[];
    Jar: Value<string>;
    MainClass?: Value<string>;
    StepProperties?: KeyValue[];
}
export declare class HadoopJarStepConfig extends ResourceBase {
    constructor(properties: HadoopJarStepConfigProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface KeyValueProperties {
    Key?: Value<string>;
    Value?: Value<string>;
}
export declare class KeyValue extends ResourceBase {
    constructor(properties: KeyValueProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface StepProperties {
    ActionOnFailure: Value<string>;
    HadoopJarStep: HadoopJarStepConfig;
    JobFlowId: Value<string>;
    Name: Value<string>;
}
export default class Step extends ResourceBase {
    constructor(properties: StepProperties, dependsOn?: Value<string> | Value<string>[]);
}
