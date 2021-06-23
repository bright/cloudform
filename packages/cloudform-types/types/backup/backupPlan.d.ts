import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CopyActionResourceType {
    Lifecycle?: LifecycleResourceType;
    DestinationBackupVaultArn: Value<string>;
    constructor(properties: CopyActionResourceType);
}
export declare class BackupPlanResourceType {
    BackupPlanName: Value<string>;
    AdvancedBackupSettings?: List<AdvancedBackupSettingResourceType>;
    BackupPlanRule: List<BackupRuleResourceType>;
    constructor(properties: BackupPlanResourceType);
}
export declare class AdvancedBackupSettingResourceType {
    BackupOptions: {
        [key: string]: any;
    };
    ResourceType: Value<string>;
    constructor(properties: AdvancedBackupSettingResourceType);
}
export declare class LifecycleResourceType {
    MoveToColdStorageAfterDays?: Value<number>;
    DeleteAfterDays?: Value<number>;
    constructor(properties: LifecycleResourceType);
}
export declare class BackupRuleResourceType {
    RuleName: Value<string>;
    TargetBackupVault: Value<string>;
    StartWindowMinutes?: Value<number>;
    CompletionWindowMinutes?: Value<number>;
    ScheduleExpression?: Value<string>;
    RecoveryPointTags?: {
        [key: string]: Value<string>;
    };
    CopyActions?: List<CopyActionResourceType>;
    Lifecycle?: LifecycleResourceType;
    EnableContinuousBackup?: Value<boolean>;
    constructor(properties: BackupRuleResourceType);
}
export interface BackupPlanProperties {
    BackupPlan: BackupPlanResourceType;
    BackupPlanTags?: {
        [key: string]: Value<string>;
    };
}
export default class BackupPlan extends ResourceBase<BackupPlanProperties> {
    static CopyActionResourceType: typeof CopyActionResourceType;
    static BackupPlanResourceType: typeof BackupPlanResourceType;
    static AdvancedBackupSettingResourceType: typeof AdvancedBackupSettingResourceType;
    static LifecycleResourceType: typeof LifecycleResourceType;
    static BackupRuleResourceType: typeof BackupRuleResourceType;
    constructor(properties: BackupPlanProperties);
}
