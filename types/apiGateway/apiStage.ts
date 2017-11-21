import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ApiStageProperties {
    ApiId?: Value<string>
    Stage?: Value<string>
}

export default class ApiStage extends ResourceBase {
    constructor(properties: ApiStageProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::ApiStage', properties, dependsOn)
    }
}