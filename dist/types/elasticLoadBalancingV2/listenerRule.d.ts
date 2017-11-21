import { ResourceBase } from '../resource';
import { Value } from '../internal';
import Action from './action';
import Condition from './condition';
export interface ListenerRuleProperties {
    Actions: Action[];
    Conditions: Condition[];
    ListenerArn: Value<string>;
    Priority: Value<number>;
}
export default class ListenerRule extends ResourceBase {
    constructor(properties: ListenerRuleProperties, dependsOn?: Value<string>);
}
