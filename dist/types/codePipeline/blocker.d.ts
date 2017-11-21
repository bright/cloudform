import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Type = "*" | "Schedule";
export interface BlockerProperties {
    Name: Value<string>;
    Type: Value<Type>;
}
export default class Blocker extends ResourceBase {
    constructor(properties: BlockerProperties, dependsOn?: Value<string>);
}
