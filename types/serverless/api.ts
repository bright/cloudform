import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ApiProperties {
    StageName: Value<string>
    DefinitionUri: Value<string>
    CacheClusterEnabled?: Value<boolean>
    CacheClusterSize?: Value<string>
    Variables?: any
}

export default class Api extends ResourceBase {
    constructor(properties: ApiProperties, dependsOn?: Value<string>) {
        super('AWS::Serverless::Api', properties, dependsOn)
    }
}