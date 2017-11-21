import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Name = "*" | "core" | "cpu" | "data" | "fsize" | "locks" | "memlock" | "msgqueue" | "nice" | "nofile" | "nproc" | "rss" | "rtprio" | "rttime" | "sigpending" | "stack";
export interface UlimitProperties {
    HardLimit: Value<number>;
    Name: Value<Name>;
    SoftLimit: Value<number>;
}
export default class Ulimit extends ResourceBase {
    constructor(properties: UlimitProperties, dependsOn?: Value<string>);
}
