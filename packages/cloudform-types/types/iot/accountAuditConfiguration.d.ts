import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class AuditCheckConfiguration {
    Enabled?: Value<boolean>;
    constructor(properties: AuditCheckConfiguration);
}
export declare class AuditNotificationTargetConfigurations {
    Sns?: AuditNotificationTarget;
    constructor(properties: AuditNotificationTargetConfigurations);
}
export declare class AuditNotificationTarget {
    TargetArn?: Value<string>;
    RoleArn?: Value<string>;
    Enabled?: Value<boolean>;
    constructor(properties: AuditNotificationTarget);
}
export declare class AuditCheckConfigurations {
    AuthenticatedCognitoRoleOverlyPermissiveCheck?: AuditCheckConfiguration;
    CaCertificateExpiringCheck?: AuditCheckConfiguration;
    CaCertificateKeyQualityCheck?: AuditCheckConfiguration;
    ConflictingClientIdsCheck?: AuditCheckConfiguration;
    DeviceCertificateExpiringCheck?: AuditCheckConfiguration;
    DeviceCertificateKeyQualityCheck?: AuditCheckConfiguration;
    DeviceCertificateSharedCheck?: AuditCheckConfiguration;
    IotPolicyOverlyPermissiveCheck?: AuditCheckConfiguration;
    IotRoleAliasAllowsAccessToUnusedServicesCheck?: AuditCheckConfiguration;
    IotRoleAliasOverlyPermissiveCheck?: AuditCheckConfiguration;
    LoggingDisabledCheck?: AuditCheckConfiguration;
    RevokedCaCertificateStillActiveCheck?: AuditCheckConfiguration;
    RevokedDeviceCertificateStillActiveCheck?: AuditCheckConfiguration;
    UnauthenticatedCognitoRoleOverlyPermissiveCheck?: AuditCheckConfiguration;
    constructor(properties: AuditCheckConfigurations);
}
export interface AccountAuditConfigurationProperties {
    AccountId: Value<string>;
    AuditCheckConfigurations: AuditCheckConfigurations;
    AuditNotificationTargetConfigurations?: AuditNotificationTargetConfigurations;
    RoleArn: Value<string>;
}
export default class AccountAuditConfiguration extends ResourceBase<AccountAuditConfigurationProperties> {
    static AuditCheckConfiguration: typeof AuditCheckConfiguration;
    static AuditNotificationTargetConfigurations: typeof AuditNotificationTargetConfigurations;
    static AuditNotificationTarget: typeof AuditNotificationTarget;
    static AuditCheckConfigurations: typeof AuditCheckConfigurations;
    constructor(properties: AccountAuditConfigurationProperties);
}
