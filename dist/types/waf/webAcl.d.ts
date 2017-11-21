import { ResourceBase } from '../resource';
import { Value } from '../internal';
import DefaultAction from './defaultAction';
import Rule from './rule';
export interface WebACLProperties {
    DefaultAction: DefaultAction;
    MetricName: Value<string>;
    Name: Value<string>;
    Rules?: Rule[];
}
export default class WebACL extends ResourceBase {
    constructor(properties: WebACLProperties, dependsOn?: Value<string>);
}
