import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LifecycleResourceType {
    DeleteAfterDays?: Value<number>;
    MoveToColdStorageAfterDays?: Value<number>;
    constructor(properties: LifecycleResourceType);
}
export declare class BackupRuleResourceType {
    CompletionWindowMinutes?: Value<number>;
    ScheduleExpression?: Value<string>;
    RecoveryPointTags?: {
        [key: string]: any;
    };
    Lifecycle?: LifecycleResourceType;
    TargetBackupVault: Value<string>;
    StartWindowMinutes?: Value<number>;
    RuleName: Value<string>;
    constructor(properties: BackupRuleResourceType);
}
export declare class BackupPlanResourceType {
    BackupPlanName: Value<string>;
    BackupPlanRule: List<BackupRuleResourceType>;
    constructor(properties: BackupPlanResourceType);
}
export interface BackupPlanProperties {
    BackupPlan: BackupPlanResourceType;
    BackupPlanTags?: {
        [key: string]: any;
    };
}
export default class BackupPlan extends ResourceBase<BackupPlanProperties> {
    static LifecycleResourceType: typeof LifecycleResourceType;
    static BackupRuleResourceType: typeof BackupRuleResourceType;
    static BackupPlanResourceType: typeof BackupPlanResourceType;
    constructor(properties: BackupPlanProperties);
}
