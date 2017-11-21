import {ResourceBase} from '../resource'
import {Value} from '../internal'
import StageDescription from './stageDescription'



export interface DeploymentProperties {
    Description?: Value<string>
    RestApiId: Value<string>
    StageDescription?: StageDescription
    StageName?: Value<string>
}

export default class Deployment extends ResourceBase {
    constructor(properties: DeploymentProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::Deployment', properties, dependsOn)
    }
}