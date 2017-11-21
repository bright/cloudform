import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type FromPort = "*" | {
    "display-label": "SSH (22)";
    "value": "22";
} | {
    "display-label": "SMTP (25)";
    "value": "25";
} | {
    "display-label": "HTTP (80)";
    "value": "80";
} | {
    "display-label": "POP3 (110)";
    "value": "110";
} | {
    "display-label": "HTTPS (443)";
    "value": "443";
} | {
    "display-label": "MS_SQL (1433)";
    "value": "1433";
} | {
    "display-label": "RDP (3389)";
    "value": "3389";
};
export declare type IpProtocol = "*" | "tcp" | "udp" | "icmp";
export declare type ToPort = "*" | {
    "display-label": "SSH (22)";
    "value": "22";
} | {
    "display-label": "SMTP (25)";
    "value": "25";
} | {
    "display-label": "HTTP (80)";
    "value": "80";
} | {
    "display-label": "POP3 (110)";
    "value": "110";
} | {
    "display-label": "HTTPS (443)";
    "value": "443";
} | {
    "display-label": "MS_SQL (1433)";
    "value": "1433";
} | {
    "display-label": "RDP (3389)";
    "value": "3389";
};
export interface SecurityGroupEgressProperties {
    CidrIp?: Value<string>;
    CidrIpv6?: Value<string>;
    DestinationPrefixListId?: Value<string>;
    DestinationSecurityGroupId?: Value<string>;
    FromPort: Value<FromPort>;
    GroupId: Value<string>;
    IpProtocol: Value<IpProtocol>;
    ToPort: Value<ToPort>;
}
export default class SecurityGroupEgress extends ResourceBase {
    constructor(properties: SecurityGroupEgressProperties, dependsOn?: Value<string>);
}
