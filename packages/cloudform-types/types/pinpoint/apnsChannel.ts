/* Generated from: 
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface APNSChannelProperties {
    BundleId?: Value<string>
    PrivateKey?: Value<string>
    Enabled?: Value<boolean>
    DefaultAuthenticationMethod?: Value<string>
    TokenKey?: Value<string>
    ApplicationId: Value<string>
    TeamId?: Value<string>
    Certificate?: Value<string>
    TokenKeyId?: Value<string>
}

export default class APNSChannel extends ResourceBase<APNSChannelProperties> {


    constructor(properties: APNSChannelProperties) {
        super('AWS::Pinpoint::APNSChannel', properties)
    }
}
