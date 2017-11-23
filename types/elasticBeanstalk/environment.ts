/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../dataTypes'

export interface OptionSettingProperties {
    Namespace: Value<string>
    OptionName: Value<string>
    ResourceName?: Value<string>
    Value?: Value<string>
}

export class OptionSetting extends ResourceBase {
    constructor(properties: OptionSettingProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticBeanstalk::OptionSetting', properties, dependsOn)
    }
}

export interface TierProperties {
    Name?: Value<string>
    Type?: Value<string>
    Version?: Value<string>
}

export class Tier extends ResourceBase {
    constructor(properties: TierProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticBeanstalk::Tier', properties, dependsOn)
    }
}

export interface EnvironmentProperties {
    ApplicationName: Value<string>
    CNAMEPrefix?: Value<string>
    Description?: Value<string>
    EnvironmentName?: Value<string>
    OptionSettings?: OptionSetting[]
    PlatformArn?: Value<string>
    SolutionStackName?: Value<string>
    Tags?: ResourceTag[]
    TemplateName?: Value<string>
    Tier?: Tier
    VersionLabel?: Value<string>
}

export default class Environment extends ResourceBase {
    constructor(properties: EnvironmentProperties, dependsOn?: Value<string>) {
        super('AWS::ElasticBeanstalk::Environment', properties, dependsOn)
    }
}
