import { ResourceBase } from '../resource';
import { Value } from '../internal';
import Rule from './rule';
export interface ReplicationConfigurationProperties {
    Role: Value<string>;
    Rules: Rule[];
}
export default class ReplicationConfiguration extends ResourceBase {
    constructor(properties: ReplicationConfigurationProperties, dependsOn?: Value<string>);
}
