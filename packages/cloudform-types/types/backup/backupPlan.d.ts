import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AdvancedBackupSettingResourceType {
    BackupOptions: {
        [key: string]: any;
    };
    ResourceType: Value<string>;
    constructor(properties: AdvancedBackupSettingResourceType);
}
export declare class BackupPlanResourceType {
    BackupPlanName: Value<string>;
    AdvancedBackupSettings?: List<AdvancedBackupSettingResourceType>;
    BackupPlanRule: List<BackupRuleResourceType>;
    constructor(properties: BackupPlanResourceType);
}
export declare class BackupRuleResourceType {
    CompletionWindowMinutes?: Value<number>;
    ScheduleExpression?: Value<string>;
    RecoveryPointTags?: {
        [key: string]: Value<string>;
    };
    CopyActions?: List<CopyActionResourceType>;
    EnableContinuousBackup?: Value<boolean>;
    Lifecycle?: LifecycleResourceType;
    TargetBackupVault: Value<string>;
    StartWindowMinutes?: Value<number>;
    ScheduleExpressionTimezone?: Value<string>;
    RuleName: Value<string>;
    constructor(properties: BackupRuleResourceType);
}
export declare class CopyActionResourceType {
    Lifecycle?: LifecycleResourceType;
    DestinationBackupVaultArn: Value<string>;
    constructor(properties: CopyActionResourceType);
}
export declare class LifecycleResourceType {
    DeleteAfterDays?: Value<number>;
    MoveToColdStorageAfterDays?: Value<number>;
    constructor(properties: LifecycleResourceType);
}
export interface BackupPlanProperties {
    BackupPlan: BackupPlanResourceType;
    BackupPlanTags?: {
        [key: string]: Value<string>;
    };
}
export default class BackupPlan extends ResourceBase<BackupPlanProperties> {
    static AdvancedBackupSettingResourceType: typeof AdvancedBackupSettingResourceType;
    static BackupPlanResourceType: typeof BackupPlanResourceType;
    static BackupRuleResourceType: typeof BackupRuleResourceType;
    static CopyActionResourceType: typeof CopyActionResourceType;
    static LifecycleResourceType: typeof LifecycleResourceType;
    constructor(properties: BackupPlanProperties);
}
