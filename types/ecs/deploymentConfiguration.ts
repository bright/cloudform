import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface DeploymentConfigurationProperties {
    MaximumPercent?: Value<number>
    MinimumHealthyPercent?: Value<number>
}

export default class DeploymentConfiguration extends ResourceBase {
    constructor(properties: DeploymentConfigurationProperties, dependsOn?: Value<string>) {
        super('AWS::ECS::DeploymentConfiguration', properties, dependsOn)
    }
}