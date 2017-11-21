import { ResourceBase } from '../resource';
import { Value } from '../internal';
import EnvironmentVariable from './environmentVariable';
export declare type ComputeType = "*" | "BUILD_GENERAL1_SMALL" | "BUILD_GENERAL1_MEDIUM" | "BUILD_GENERAL1_LARGE";
export declare type Type = "*" | "LINUX_CONTAINER";
export interface EnvironmentProperties {
    ComputeType: Value<ComputeType>;
    EnvironmentVariables?: EnvironmentVariable[];
    Image: Value<string>;
    Type: Value<Type>;
}
export default class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string>);
}
