/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface UsagePlanKeyProperties {
    KeyId: Value<string>
    KeyType: Value<string>
    UsagePlanId: Value<string>
}

export default class UsagePlanKey extends ResourceBase {
    constructor(properties: UsagePlanKeyProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::UsagePlanKey', properties, dependsOn)
    }
}
