import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface IntegrationResponsesProperties {
    ResponseParameters?: any
    ResponseTemplates?: any
    SelectionPattern?: Value<string>
    StatusCode?: Value<string>
}

export default class IntegrationResponses extends ResourceBase {
    constructor(properties: IntegrationResponsesProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::IntegrationResponses', properties, dependsOn)
    }
}