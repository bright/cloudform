import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface HadoopJarStepConfigProperties {
    Args?: List<Value<string>>;
    Jar: Value<string>;
    MainClass?: Value<string>;
    StepProperties?: List<KeyValue>;
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
