import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Field = "*" | "path-pattern";
export interface ConditionProperties {
    Field?: Value<Field>;
    Values?: Value<string>[];
}
export default class Condition extends ResourceBase {
    constructor(properties: ConditionProperties, dependsOn?: Value<string>);
}
