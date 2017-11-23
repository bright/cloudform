/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface ModelProperties {
    ContentType?: Value<string>
    Description?: Value<string>
    Name?: Value<string>
    RestApiId: Value<string>
    Schema?: any
}

export default class Model extends ResourceBase {
    constructor(properties: ModelProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::Model', properties, dependsOn)
    }
}
