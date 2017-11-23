/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface StageKeyProperties {
    RestApiId?: Value<string>
    StageName?: Value<string>
}

export class StageKey extends ResourceBase {
    constructor(properties: StageKeyProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::StageKey', properties, dependsOn)
    }
}

export interface ApiKeyProperties {
    CustomerId?: Value<string>
    Description?: Value<string>
    Enabled?: Value<boolean>
    GenerateDistinctId?: Value<boolean>
    Name?: Value<string>
    StageKeys?: StageKey[]
}

export default class ApiKey extends ResourceBase {
    constructor(properties: ApiKeyProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::ApiKey', properties, dependsOn)
    }
}
