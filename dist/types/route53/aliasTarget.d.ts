import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface AliasTargetProperties {
    DNSName: Value<string>;
    EvaluateTargetHealth: Value<boolean>;
    HostedZoneId: Value<string>;
}
export default class AliasTarget extends ResourceBase {
    constructor(properties: AliasTargetProperties, dependsOn?: Value<string>);
}
