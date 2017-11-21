import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface HostedZoneTagProperties {
    Key: Value<string>;
    Value: Value<string>;
}
export default class HostedZoneTag extends ResourceBase {
    constructor(properties: HostedZoneTagProperties, dependsOn?: Value<string>);
}
