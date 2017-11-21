import {ResourceBase} from '../resource'
import {Value} from '../internal'
import MinimumHealthyHosts from './minimumHealthyHosts'



export interface DeploymentConfigProperties {
    DeploymentConfigName?: Value<string>
    MinimumHealthyHosts: MinimumHealthyHosts
}

export default class DeploymentConfig extends ResourceBase {
    constructor(properties: DeploymentConfigProperties, dependsOn?: Value<string>) {
        super('AWS::CodeDeploy::DeploymentConfig', properties, dependsOn)
    }
}