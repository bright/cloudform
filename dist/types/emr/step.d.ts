import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HadoopJarStepConfig {
    Args?: List<Value<string>>;
    Jar: Value<string>;
    MainClass?: Value<string>;
    StepProperties?: List<KeyValue>;
    constructor(properties: HadoopJarStepConfig);
}
export declare class KeyValue {
    Key?: Value<string>;
    Value?: Value<string>;
    constructor(properties: KeyValue);
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
