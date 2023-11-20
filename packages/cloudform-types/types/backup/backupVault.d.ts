import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LockConfigurationType {
    ChangeableForDays?: Value<number>;
    MaxRetentionDays?: Value<number>;
    MinRetentionDays: Value<number>;
    constructor(properties: LockConfigurationType);
}
export declare class NotificationObjectType {
    SNSTopicArn: Value<string>;
    BackupVaultEvents: List<Value<string>>;
    constructor(properties: NotificationObjectType);
}
export interface BackupVaultProperties {
    BackupVaultTags?: {
        [key: string]: Value<string>;
    };
    BackupVaultName: Value<string>;
    EncryptionKeyArn?: Value<string>;
    LockConfiguration?: LockConfigurationType;
    Notifications?: NotificationObjectType;
    AccessPolicy?: {
        [key: string]: any;
    };
}
export default class BackupVault extends ResourceBase<BackupVaultProperties> {
    static LockConfigurationType: typeof LockConfigurationType;
    static NotificationObjectType: typeof NotificationObjectType;
    constructor(properties: BackupVaultProperties);
}
