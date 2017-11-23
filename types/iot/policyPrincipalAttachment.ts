/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface PolicyPrincipalAttachmentProperties {
    PolicyName: Value<string>
    Principal: Value<string>
}

export default class PolicyPrincipalAttachment extends ResourceBase {
    constructor(properties: PolicyPrincipalAttachmentProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::IoT::PolicyPrincipalAttachment', properties, dependsOn)
    }
}
