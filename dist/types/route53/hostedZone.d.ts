import { ResourceBase } from '../resource';
import { Value } from '../internal';
import HostedZoneConfig from './hostedZoneConfig';
import VPC from './vpc';
import HostedZoneTag from './hostedZoneTag';
export interface HostedZoneProperties {
    HostedZoneConfig?: HostedZoneConfig;
    Name: Value<string>;
    VPCs?: VPC[];
    HostedZoneTags?: HostedZoneTag[];
}
export default class HostedZone extends ResourceBase {
    constructor(properties: HostedZoneProperties, dependsOn?: Value<string>);
}
