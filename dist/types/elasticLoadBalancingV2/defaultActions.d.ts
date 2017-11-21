import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Type = "*" | "forward";
export interface DefaultActionsProperties {
    TargetGroupArn: Value<string>;
    Type: Value<Type>;
}
export default class DefaultActions extends ResourceBase {
    constructor(properties: DefaultActionsProperties, dependsOn?: Value<string>);
}
