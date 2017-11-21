import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface UserPoolGroupProperties {
    Description?: Value<string>
    GroupName: Value<string>
    Precedence?: Value<number>
    RoleArn?: Value<string>
    UserPoolId: Value<string>
}

export default class UserPoolGroup extends ResourceBase {
    constructor(properties: UserPoolGroupProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::UserPoolGroup', properties, dependsOn)
    }
}