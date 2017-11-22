/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../internal'



export interface GatewayResponseProperties {
    ResponseParameters?: {[key: string]: Value<string>}
    ResponseTemplates?: {[key: string]: Value<string>}
    ResponseType: Value<string>
    RestApiId: Value<string>
    StatusCode?: Value<string>
}

export default class GatewayResponse extends ResourceBase {
    constructor(properties: GatewayResponseProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::GatewayResponse', properties, dependsOn)
    }
}