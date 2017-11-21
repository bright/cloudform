import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Revision from './revision'



export interface DeploymentProperties {
    Description?: Value<string>
    IgnoreApplicationStopFailures?: Value<boolean>
    Revision: Revision
}

export default class Deployment extends ResourceBase {
    constructor(properties: DeploymentProperties, dependsOn?: Value<string>) {
        super('AWS::CodeDeploy::Deployment', properties, dependsOn)
    }
}