/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class SidewalkAccountInfo {
    AppServerPrivateKey!: Value<string>

    constructor(properties: SidewalkAccountInfo) {
        Object.assign(this, properties)
    }
}

export class SidewalkUpdateAccount {
    AppServerPrivateKey?: Value<string>

    constructor(properties: SidewalkUpdateAccount) {
        Object.assign(this, properties)
    }
}

export interface PartnerAccountProperties {
    PartnerAccountId?: Value<string>
    PartnerType?: Value<string>
    AccountLinked?: Value<boolean>
    Fingerprint?: Value<string>
}

export default class PartnerAccount extends ResourceBase<PartnerAccountProperties> {
    static SidewalkAccountInfo = SidewalkAccountInfo
    static SidewalkUpdateAccount = SidewalkUpdateAccount

    constructor(properties?: PartnerAccountProperties) {
        super('AWS::IoTWireless::PartnerAccount', properties || {})
    }
}
