import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class NotificationObjectType {
    SNSTopicArn: Value<string>;
    BackupVaultEvents: List<Value<string>>;
    constructor(properties: NotificationObjectType);
}
export interface BackupVaultProperties {
    BackupVaultTags?: {
        [key: string]: any;
    };
    BackupVaultName: Value<string>;
    EncryptionKeyArn?: Value<string>;
    Notifications?: NotificationObjectType;
    AccessPolicy?: {
        [key: string]: any;
    };
}
export default class BackupVault extends ResourceBase<BackupVaultProperties> {
    static NotificationObjectType: typeof NotificationObjectType;
    constructor(properties: BackupVaultProperties);
}
