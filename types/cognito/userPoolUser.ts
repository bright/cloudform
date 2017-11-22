/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'

export interface AttributeTypeProperties {
    Value?: Value<string>
    Name?: Value<string>
}

export class AttributeType extends ResourceBase {
    constructor(properties: AttributeTypeProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::AttributeType', properties, dependsOn)
    }
}

export interface UserPoolUserProperties {
    ValidationData?: AttributeType[]
    UserPoolId: Value<string>
    Username?: Value<string>
    MessageAction?: Value<string>
    DesiredDeliveryMediums?: Value<string>[]
    ForceAliasCreation?: Value<boolean>
    UserAttributes?: AttributeType[]
}

export default class UserPoolUser extends ResourceBase {
    constructor(properties: UserPoolUserProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::UserPoolUser', properties, dependsOn)
    }
}