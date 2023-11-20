import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class AuditCheckConfiguration {
    Enabled?: Value<boolean>;
    constructor(properties: AuditCheckConfiguration);
}
export declare class AuditCheckConfigurations {
    IotRoleAliasOverlyPermissiveCheck?: AuditCheckConfiguration;
    DeviceCertificateSharedCheck?: AuditCheckConfiguration;
    ConflictingClientIdsCheck?: AuditCheckConfiguration;
    IntermediateCaRevokedForActiveDeviceCertificatesCheck?: AuditCheckConfiguration;
    IotRoleAliasAllowsAccessToUnusedServicesCheck?: AuditCheckConfiguration;
    RevokedCaCertificateStillActiveCheck?: AuditCheckConfiguration;
    LoggingDisabledCheck?: AuditCheckConfiguration;
    UnauthenticatedCognitoRoleOverlyPermissiveCheck?: AuditCheckConfiguration;
    AuthenticatedCognitoRoleOverlyPermissiveCheck?: AuditCheckConfiguration;
    CaCertificateExpiringCheck?: AuditCheckConfiguration;
    DeviceCertificateExpiringCheck?: AuditCheckConfiguration;
    IoTPolicyPotentialMisConfigurationCheck?: AuditCheckConfiguration;
    IotPolicyOverlyPermissiveCheck?: AuditCheckConfiguration;
    RevokedDeviceCertificateStillActiveCheck?: AuditCheckConfiguration;
    DeviceCertificateKeyQualityCheck?: AuditCheckConfiguration;
    CaCertificateKeyQualityCheck?: AuditCheckConfiguration;
    constructor(properties: AuditCheckConfigurations);
}
export declare class AuditNotificationTarget {
    TargetArn?: Value<string>;
    Enabled?: Value<boolean>;
    RoleArn?: Value<string>;
    constructor(properties: AuditNotificationTarget);
}
export declare class AuditNotificationTargetConfigurations {
    Sns?: AuditNotificationTarget;
    constructor(properties: AuditNotificationTargetConfigurations);
}
export interface AccountAuditConfigurationProperties {
    AccountId: Value<string>;
    AuditCheckConfigurations: AuditCheckConfigurations;
    AuditNotificationTargetConfigurations?: AuditNotificationTargetConfigurations;
    RoleArn: Value<string>;
}
export default class AccountAuditConfiguration extends ResourceBase<AccountAuditConfigurationProperties> {
    static AuditCheckConfiguration: typeof AuditCheckConfiguration;
    static AuditCheckConfigurations: typeof AuditCheckConfigurations;
    static AuditNotificationTarget: typeof AuditNotificationTarget;
    static AuditNotificationTargetConfigurations: typeof AuditNotificationTargetConfigurations;
    constructor(properties: AccountAuditConfigurationProperties);
}
