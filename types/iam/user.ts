import {ResourceBase} from '../resource'
import {Value} from '../internal'
import LoginProfile from './loginProfile'



export interface UserProperties {
    Path?: Value<string>
    Groups?: Value<string>[]
    LoginProfile?: LoginProfile
    ManagedPolicyArns?: Value<string>[]
    Policies?: any[]
    UserName?: Value<string>
}

export default class User extends ResourceBase {
    constructor(properties: UserProperties, dependsOn?: Value<string>) {
        super('AWS::IAM::User', properties, dependsOn)
    }
}