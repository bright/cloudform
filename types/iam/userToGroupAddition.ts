/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface UserToGroupAdditionProperties {
    GroupName: Value<string>
    Users: Value<string>[]
}

export default class UserToGroupAddition extends ResourceBase {
    constructor(properties: UserToGroupAdditionProperties, dependsOn?: Value<string>) {
        super('AWS::IAM::UserToGroupAddition', properties, dependsOn)
    }
}