import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ClusterProperties {
    ClusterName?: Value<string>;
}
export default class Cluster extends ResourceBase {
    constructor(properties: ClusterProperties, dependsOn?: Value<string>);
}
