/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface RulesConfigurationTypeProperties {
    Rules: MappingRule[]
}

export class RulesConfigurationType extends ResourceBase {
    constructor(properties: RulesConfigurationTypeProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::RulesConfigurationType', properties, dependsOn)
    }
}

export interface RoleMappingProperties {
    Type: Value<string>
    AmbiguousRoleResolution?: Value<string>
    RulesConfiguration?: RulesConfigurationType
}

export class RoleMapping extends ResourceBase {
    constructor(properties: RoleMappingProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::RoleMapping', properties, dependsOn)
    }
}

export interface MappingRuleProperties {
    MatchType: Value<string>
    Value: Value<string>
    Claim: Value<string>
    RoleARN: Value<string>
}

export class MappingRule extends ResourceBase {
    constructor(properties: MappingRuleProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::MappingRule', properties, dependsOn)
    }
}

export interface IdentityPoolRoleAttachmentProperties {
    RoleMappings?: any
    IdentityPoolId: Value<string>
    Roles?: any
}

export default class IdentityPoolRoleAttachment extends ResourceBase {
    constructor(properties: IdentityPoolRoleAttachmentProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::IdentityPoolRoleAttachment', properties, dependsOn)
    }
}
