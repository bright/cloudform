import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface TargetProperties {
    Key: Value<string>;
    Values: List<Value<string>>;
}
export declare class Target extends ResourceBase {
    constructor(properties: TargetProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ParameterValuesProperties {
    ParameterValues: List<Value<string>>;
}
export declare class ParameterValues extends ResourceBase {
    constructor(properties: ParameterValuesProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface AssociationProperties {
    DocumentVersion?: Value<string>;
    InstanceId?: Value<string>;
    Name: Value<string>;
    Parameters?: {
        [key: string]: ParameterValues;
    };
    ScheduleExpression?: Value<string>;
    Targets?: List<Target>;
}
export default class Association extends ResourceBase {
    constructor(properties: AssociationProperties, dependsOn?: Value<string> | Value<string>[]);
}
