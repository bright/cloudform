import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface PolicyPrincipalAttachmentProperties {
    PolicyName: Value<string>
    Principal: Value<string>
}

export default class PolicyPrincipalAttachment extends ResourceBase {
    constructor(properties: PolicyPrincipalAttachmentProperties, dependsOn?: Value<string>) {
        super('AWS::IoT::PolicyPrincipalAttachment', properties, dependsOn)
    }
}