import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Type = "*" | "forward";
export interface ActionProperties {
    TargetGroupArn: Value<string>;
    Type: Value<Type>;
}
export default class Action extends ResourceBase {
    constructor(properties: ActionProperties, dependsOn?: Value<string>);
}
