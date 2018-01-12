/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.12.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'



export interface PolicyPrincipalAttachmentProperties {
    PolicyName: Value<string>
    Principal: Value<string>
}

export default class PolicyPrincipalAttachment extends ResourceBase {
    constructor(properties?: PolicyPrincipalAttachmentProperties) {
        super('AWS::IoT::PolicyPrincipalAttachment', properties)
    }
}
