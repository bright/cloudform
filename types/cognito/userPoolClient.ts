/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface UserPoolClientProperties {
    GenerateSecret?: Value<boolean>
    ClientName?: Value<string>
    UserPoolId: Value<string>
    ExplicitAuthFlows?: Value<string>[]
    RefreshTokenValidity?: Value<number>
    ReadAttributes?: Value<string>[]
    WriteAttributes?: Value<string>[]
}

export default class UserPoolClient extends ResourceBase {
    constructor(properties: UserPoolClientProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::UserPoolClient', properties, dependsOn)
    }
}