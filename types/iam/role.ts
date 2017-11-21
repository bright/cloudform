import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface RoleProperties {
    AssumeRolePolicyDocument: any
    ManagedPolicyArns?: Value<string>[]
    Path?: Value<string>
    Policies?: any[]
    RoleName?: Value<string>
}

export default class Role extends ResourceBase {
    constructor(properties: RoleProperties, dependsOn?: Value<string>) {
        super('AWS::IAM::Role', properties, dependsOn)
    }
}