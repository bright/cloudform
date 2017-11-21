import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type IpProtocol = "*" | "tcp" | "udp" | "icmp"
export type FromPort = "*" | {"display-label":"SSH (22)","value":"22"} | {"display-label":"SMTP (25)","value":"25"} | {"display-label":"HTTP (80)","value":"80"} | {"display-label":"POP3 (110)","value":"110"} | {"display-label":"HTTPS (443)","value":"443"} | {"display-label":"MS_SQL (1433)","value":"1433"} | {"display-label":"RDP (3389)","value":"3389"}
export type ToPort = "*" | {"display-label":"SSH (22)","value":"22"} | {"display-label":"SMTP (25)","value":"25"} | {"display-label":"HTTP (80)","value":"80"} | {"display-label":"POP3 (110)","value":"110"} | {"display-label":"HTTPS (443)","value":"443"} | {"display-label":"MS_SQL (1433)","value":"1433"} | {"display-label":"RDP (3389)","value":"3389"}

export interface SecurityGroupIngressProperties {
    GroupName?: Value<string>
    GroupId?: Value<string>
    IpProtocol: Value<IpProtocol>
    CidrIp?: Value<string>
    CidrIpv6?: Value<string>
    SourceSecurityGroupName?: Value<string>
    SourceSecurityGroupId?: Value<string>
    SourceSecurityGroupOwnerId?: Value<string>
    FromPort: Value<FromPort>
    ToPort: Value<ToPort>
}

export default class SecurityGroupIngress extends ResourceBase {
    constructor(properties: SecurityGroupIngressProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::SecurityGroupIngress', properties, dependsOn)
    }
}