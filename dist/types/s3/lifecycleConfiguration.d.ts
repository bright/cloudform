import { ResourceBase } from '../resource';
import { Value } from '../internal';
import Rule from './rule';
export interface LifecycleConfigurationProperties {
    Rules: Rule[];
}
export default class LifecycleConfiguration extends ResourceBase {
    constructor(properties: LifecycleConfigurationProperties, dependsOn?: Value<string>);
}
