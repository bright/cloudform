import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'


export type DomainNameServers = "AmazonProvidedDNS" | "*"
export type NetbiosNodeType = 1 | 2 | 4 | 8 | "*"

export interface DHCPOptionsProperties {
    DomainName: Value<string>
    DomainNameServers: Value<DomainNameServers>
    NtpServers: Value<string>[]
    NetbiosNameServers: Value<string>[]
    NetbiosNodeType: Value<NetbiosNodeType>
    Tags?: ResourceTag[]
}

export default class DHCPOptions extends ResourceBase {
    constructor(properties: DHCPOptionsProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::DHCPOptions', properties, dependsOn)
    }
}