import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ActivityProperties {
    Name?: Value<string>;
}
export default class Activity extends ResourceBase {
    constructor(properties: ActivityProperties, dependsOn?: Value<string>);
}
