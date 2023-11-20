import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HadoopJarStepConfig {
    Args?: List<Value<string>>;
    MainClass?: Value<string>;
    StepProperties?: List<KeyValue>;
    Jar: Value<string>;
    constructor(properties: HadoopJarStepConfig);
}
export declare class KeyValue {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: KeyValue);
}
export interface StepProperties {
    JobFlowId: Value<string>;
    ActionOnFailure: Value<string>;
    HadoopJarStep: HadoopJarStepConfig;
    Name: Value<string>;
}
export default class Step extends ResourceBase<StepProperties> {
    static HadoopJarStepConfig: typeof HadoopJarStepConfig;
    static KeyValue: typeof KeyValue;
    constructor(properties: StepProperties);
}
