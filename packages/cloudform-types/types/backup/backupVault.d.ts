import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class NotificationObjectType {
    BackupVaultEvents: List<Value<string>>;
    SNSTopicArn: Value<string>;
    constructor(properties: NotificationObjectType);
}
export interface BackupVaultProperties {
    AccessPolicy?: {
        [key: string]: any;
    };
    BackupVaultName: Value<string>;
    BackupVaultTags?: {
        [key: string]: Value<string>;
    };
    EncryptionKeyArn?: Value<string>;
    Notifications?: NotificationObjectType;
}
export default class BackupVault extends ResourceBase<BackupVaultProperties> {
    static NotificationObjectType: typeof NotificationObjectType;
    constructor(properties: BackupVaultProperties);
}
