/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AuditCheckConfiguration {
    Enabled?: Value<boolean>

    constructor(properties: AuditCheckConfiguration) {
        Object.assign(this, properties)
    }
}

export class AuditCheckConfigurations {
    IotRoleAliasOverlyPermissiveCheck?: AuditCheckConfiguration
    DeviceCertificateSharedCheck?: AuditCheckConfiguration
    ConflictingClientIdsCheck?: AuditCheckConfiguration
    IntermediateCaRevokedForActiveDeviceCertificatesCheck?: AuditCheckConfiguration
    IotRoleAliasAllowsAccessToUnusedServicesCheck?: AuditCheckConfiguration
    RevokedCaCertificateStillActiveCheck?: AuditCheckConfiguration
    LoggingDisabledCheck?: AuditCheckConfiguration
    UnauthenticatedCognitoRoleOverlyPermissiveCheck?: AuditCheckConfiguration
    AuthenticatedCognitoRoleOverlyPermissiveCheck?: AuditCheckConfiguration
    CaCertificateExpiringCheck?: AuditCheckConfiguration
    DeviceCertificateExpiringCheck?: AuditCheckConfiguration
    IoTPolicyPotentialMisConfigurationCheck?: AuditCheckConfiguration
    IotPolicyOverlyPermissiveCheck?: AuditCheckConfiguration
    RevokedDeviceCertificateStillActiveCheck?: AuditCheckConfiguration
    DeviceCertificateKeyQualityCheck?: AuditCheckConfiguration
    CaCertificateKeyQualityCheck?: AuditCheckConfiguration

    constructor(properties: AuditCheckConfigurations) {
        Object.assign(this, properties)
    }
}

export class AuditNotificationTarget {
    TargetArn?: Value<string>
    Enabled?: Value<boolean>
    RoleArn?: Value<string>

    constructor(properties: AuditNotificationTarget) {
        Object.assign(this, properties)
    }
}

export class AuditNotificationTargetConfigurations {
    Sns?: AuditNotificationTarget

    constructor(properties: AuditNotificationTargetConfigurations) {
        Object.assign(this, properties)
    }
}

export interface AccountAuditConfigurationProperties {
    AccountId: Value<string>
    AuditCheckConfigurations: AuditCheckConfigurations
    AuditNotificationTargetConfigurations?: AuditNotificationTargetConfigurations
    RoleArn: Value<string>
}

export default class AccountAuditConfiguration extends ResourceBase<AccountAuditConfigurationProperties> {
    static AuditCheckConfiguration = AuditCheckConfiguration
    static AuditCheckConfigurations = AuditCheckConfigurations
    static AuditNotificationTarget = AuditNotificationTarget
    static AuditNotificationTargetConfigurations = AuditNotificationTargetConfigurations

    constructor(properties: AccountAuditConfigurationProperties) {
        super('AWS::IoT::AccountAuditConfiguration', properties)
    }
}
