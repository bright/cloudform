import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface UserPoolUserToGroupAttachmentProperties {
    GroupName: Value<string>
    Username: Value<string>
    UserPoolId: Value<string>
}

export default class UserPoolUserToGroupAttachment extends ResourceBase {
    constructor(properties: UserPoolUserToGroupAttachmentProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::UserPoolUserToGroupAttachment', properties, dependsOn)
    }
}