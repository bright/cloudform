/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface MinimumHealthyHostsProperties {
    Type: Value<string>
    Value: Value<number>
}

export class MinimumHealthyHosts extends ResourceBase {
    constructor(properties: MinimumHealthyHostsProperties, dependsOn?: Value<string>) {
        super('AWS::CodeDeploy::MinimumHealthyHosts', properties, dependsOn)
    }
}

export interface DeploymentConfigProperties {
    DeploymentConfigName?: Value<string>
    MinimumHealthyHosts?: MinimumHealthyHosts
}

export default class DeploymentConfig extends ResourceBase {
    constructor(properties: DeploymentConfigProperties, dependsOn?: Value<string>) {
        super('AWS::CodeDeploy::DeploymentConfig', properties, dependsOn)
    }
}
