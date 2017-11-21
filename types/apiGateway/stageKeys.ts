import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface StageKeysProperties {
    RestApiId?: Value<string>
    StageName?: Value<string>
}

export default class StageKeys extends ResourceBase {
    constructor(properties: StageKeysProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::StageKeys', properties, dependsOn)
    }
}