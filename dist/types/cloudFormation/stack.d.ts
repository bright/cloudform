import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface StackProperties {
    TemplateURL: Value<string>;
    TimeoutInMinutes?: Value<string>;
    Parameters?: any;
}
export default class Stack extends ResourceBase {
    constructor(properties: StackProperties, dependsOn?: Value<string>);
}
