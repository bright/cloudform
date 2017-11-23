/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface UserPoolGroupProperties {
    GroupName?: Value<string>
    Description?: Value<string>
    UserPoolId: Value<string>
    Precedence?: Value<number>
    RoleArn?: Value<string>
}

export default class UserPoolGroup extends ResourceBase {
    constructor(properties: UserPoolGroupProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::UserPoolGroup', properties, dependsOn)
    }
}
