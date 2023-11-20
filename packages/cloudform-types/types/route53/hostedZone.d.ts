import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HostedZoneConfig {
    Comment?: Value<string>;
    constructor(properties: HostedZoneConfig);
}
export declare class HostedZoneTag {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: HostedZoneTag);
}
export declare class QueryLoggingConfig {
    CloudWatchLogsLogGroupArn: Value<string>;
    constructor(properties: QueryLoggingConfig);
}
export declare class VPC {
    VPCRegion: Value<string>;
    VPCId: Value<string>;
    constructor(properties: VPC);
}
export interface HostedZoneProperties {
    HostedZoneTags?: List<HostedZoneTag>;
    VPCs?: List<VPC>;
    HostedZoneConfig?: HostedZoneConfig;
    QueryLoggingConfig?: QueryLoggingConfig;
    Name?: Value<string>;
}
export default class HostedZone extends ResourceBase<HostedZoneProperties> {
    static HostedZoneConfig: typeof HostedZoneConfig;
    static HostedZoneTag: typeof HostedZoneTag;
    static QueryLoggingConfig: typeof QueryLoggingConfig;
    static VPC: typeof VPC;
    constructor(properties?: HostedZoneProperties);
}
