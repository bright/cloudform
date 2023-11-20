/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LoRaWANServiceProfile {
    DlBucketSize?: Value<number>
    MinGwDiversity?: Value<number>
    DrMax?: Value<number>
    ReportDevStatusMargin?: Value<boolean>
    PrAllowed?: Value<boolean>
    DlRate?: Value<number>
    UlRatePolicy?: Value<string>
    ReportDevStatusBattery?: Value<boolean>
    ChannelMask?: Value<string>
    UlRate?: Value<number>
    AddGwMetadata?: Value<boolean>
    DlRatePolicy?: Value<string>
    HrAllowed?: Value<boolean>
    DrMin?: Value<number>
    TargetPer?: Value<number>
    NwkGeoLoc?: Value<boolean>
    DevStatusReqFreq?: Value<number>
    UlBucketSize?: Value<number>
    RaAllowed?: Value<boolean>

    constructor(properties: LoRaWANServiceProfile) {
        Object.assign(this, properties)
    }
}

export interface ServiceProfileProperties {
    LoRaWAN?: LoRaWANServiceProfile
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class ServiceProfile extends ResourceBase<ServiceProfileProperties> {
    static LoRaWANServiceProfile = LoRaWANServiceProfile

    constructor(properties?: ServiceProfileProperties) {
        super('AWS::IoTWireless::ServiceProfile', properties || {})
    }
}
