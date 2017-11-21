import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../internal';
import Environment from './environment';
import VpcConfig from './vpcConfig';
export declare type Runtime = "*" | "dotnetcore1.0" | "nodejs" | "nodejs4.3" | "nodejs4.3-edge" | "nodejs6.10" | "java8" | "python2.7" | "python3.6" | "nodejs6.10";
export interface FunctionProperties {
    Handler: Value<string>;
    Runtime: Value<Runtime>;
    CodeUri: Value<string>;
    FunctionName?: Value<string>;
    Description?: Value<string>;
    MemorySize?: Value<number>;
    Timeout?: Value<number>;
    Role?: Value<string>;
    Policies?: Value<string>[];
    Environment?: Environment;
    VpcConfig?: VpcConfig;
    Tags?: ResourceTag[];
    Events?: {
        [key: string]: any;
    };
}
export default class Function extends ResourceBase {
    constructor(properties: FunctionProperties, dependsOn?: Value<string>);
}
