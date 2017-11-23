/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'



export interface DHCPOptionsProperties {
    DomainName?: Value<string>
    DomainNameServers?: Value<string>[]
    NetbiosNameServers?: Value<string>[]
    NetbiosNodeType?: Value<number>
    NtpServers?: Value<string>[]
    Tags?: ResourceTag[]
}

export default class DHCPOptions extends ResourceBase {
    constructor(properties: DHCPOptionsProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::EC2::DHCPOptions', properties, dependsOn)
    }
}
