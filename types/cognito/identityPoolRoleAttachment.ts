/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.7.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.7.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.7.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.7.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.7.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.7.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.7.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.7.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.7.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class RulesConfigurationType {
    Rules!: List<MappingRule>

    constructor(properties: RulesConfigurationType) {
        Object.assign(this, properties)
    }
}

export class RoleMapping {
    Type!: Value<string>
    AmbiguousRoleResolution?: Value<string>
    RulesConfiguration?: RulesConfigurationType

    constructor(properties: RoleMapping) {
        Object.assign(this, properties)
    }
}

export class MappingRule {
    MatchType!: Value<string>
    Value!: Value<string>
    Claim!: Value<string>
    RoleARN!: Value<string>

    constructor(properties: MappingRule) {
        Object.assign(this, properties)
    }
}

export interface IdentityPoolRoleAttachmentProperties {
    RoleMappings?: any
    IdentityPoolId: Value<string>
    Roles?: any
}

export default class IdentityPoolRoleAttachment extends ResourceBase {
    static RulesConfigurationType = RulesConfigurationType
    static RoleMapping = RoleMapping
    static MappingRule = MappingRule

    constructor(properties?: IdentityPoolRoleAttachmentProperties) {
        super('AWS::Cognito::IdentityPoolRoleAttachment', properties)
    }
}
