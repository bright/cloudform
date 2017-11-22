import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface HostedZoneTagProperties {
    Key: Value<string>;
    Value: Value<string>;
}
export declare class HostedZoneTag extends ResourceBase {
    constructor(properties: HostedZoneTagProperties, dependsOn?: Value<string>);
}
export interface HostedZoneConfigProperties {
    Comment?: Value<string>;
}
export declare class HostedZoneConfig extends ResourceBase {
    constructor(properties: HostedZoneConfigProperties, dependsOn?: Value<string>);
}
export interface QueryLoggingConfigProperties {
    CloudWatchLogsLogGroupArn: Value<string>;
}
export declare class QueryLoggingConfig extends ResourceBase {
    constructor(properties: QueryLoggingConfigProperties, dependsOn?: Value<string>);
}
export interface VPCProperties {
    VPCId: Value<string>;
    VPCRegion: Value<string>;
}
export declare class VPC extends ResourceBase {
    constructor(properties: VPCProperties, dependsOn?: Value<string>);
}
export interface HostedZoneProperties {
    HostedZoneConfig?: HostedZoneConfig;
    HostedZoneTags?: HostedZoneTag[];
    Name: Value<string>;
    QueryLoggingConfig?: QueryLoggingConfig;
    VPCs?: VPC[];
}
export default class HostedZone extends ResourceBase {
    constructor(properties: HostedZoneProperties, dependsOn?: Value<string>);
}
