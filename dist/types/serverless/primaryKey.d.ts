import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Type = "*" | "String" | "Number" | "Binary";
export interface PrimaryKeyProperties {
    Name?: Value<string>;
    Type?: Value<Type>;
}
export default class PrimaryKey extends ResourceBase {
    constructor(properties: PrimaryKeyProperties, dependsOn?: Value<string>);
}
