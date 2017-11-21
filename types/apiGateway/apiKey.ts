import {ResourceBase} from '../resource'
import {Value} from '../internal'
import StageKeys from './stageKeys'



export interface ApiKeyProperties {
    Description?: Value<string>
    Enabled?: Value<boolean>
    Name?: Value<string>
    StageKeys?: StageKeys
}

export default class ApiKey extends ResourceBase {
    constructor(properties: ApiKeyProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::ApiKey', properties, dependsOn)
    }
}