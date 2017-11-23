/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface LoginProfileProperties {
    Password: Value<string>
    PasswordResetRequired?: Value<boolean>
}

export class LoginProfile extends ResourceBase {
    constructor(properties: LoginProfileProperties, dependsOn?: Value<string>) {
        super('AWS::IAM::LoginProfile', properties, dependsOn)
    }
}

export interface PolicyProperties {
    PolicyDocument: any
    PolicyName: Value<string>
}

export class Policy extends ResourceBase {
    constructor(properties: PolicyProperties, dependsOn?: Value<string>) {
        super('AWS::IAM::Policy', properties, dependsOn)
    }
}

export interface UserProperties {
    Groups?: Value<string>[]
    LoginProfile?: LoginProfile
    ManagedPolicyArns?: Value<string>[]
    Path?: Value<string>
    Policies?: Policy[]
    UserName?: Value<string>
}

export default class User extends ResourceBase {
    constructor(properties: UserProperties, dependsOn?: Value<string>) {
        super('AWS::IAM::User', properties, dependsOn)
    }
}