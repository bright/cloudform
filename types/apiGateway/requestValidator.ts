/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface RequestValidatorProperties {
    Name?: Value<string>
    RestApiId: Value<string>
    ValidateRequestBody?: Value<boolean>
    ValidateRequestParameters?: Value<boolean>
}

export default class RequestValidator extends ResourceBase {
    constructor(properties: RequestValidatorProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::RequestValidator', properties, dependsOn)
    }
}