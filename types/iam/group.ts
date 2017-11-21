import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface GroupProperties {
    GroupName?: Value<string>
    ManagedPolicyArns?: Value<string>[]
    Path?: Value<string>
    Policies?: any[]
}

export default class Group extends ResourceBase {
    constructor(properties: GroupProperties, dependsOn?: Value<string>) {
        super('AWS::IAM::Group', properties, dependsOn)
    }
}