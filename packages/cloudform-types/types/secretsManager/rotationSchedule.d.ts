import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class RotationRules {
    AutomaticallyAfterDays?: Value<number>;
    constructor(properties: RotationRules);
}
export interface RotationScheduleProperties {
    SecretId: Value<string>;
    RotationLambdaARN?: Value<string>;
    RotationRules?: RotationRules;
}
export default class RotationSchedule extends ResourceBase<RotationScheduleProperties> {
    static RotationRules: typeof RotationRules;
    constructor(properties: RotationScheduleProperties);
}
