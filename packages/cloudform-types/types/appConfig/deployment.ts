/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Tags {
    Value?: Value<string>
    Key?: Value<string>

    constructor(properties: Tags) {
        Object.assign(this, properties)
    }
}

export interface DeploymentProperties {
    DeploymentStrategyId: Value<string>
    ConfigurationProfileId: Value<string>
    EnvironmentId: Value<string>
    Description?: Value<string>
    ConfigurationVersion: Value<string>
    ApplicationId: Value<string>
    Tags?: List<Tags>
}

export default class Deployment extends ResourceBase<DeploymentProperties> {
    static Tags = Tags

    constructor(properties: DeploymentProperties) {
        super('AWS::AppConfig::Deployment', properties)
    }
}
