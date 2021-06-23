import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConditionResourceType {
    ConditionKey: Value<string>;
    ConditionValue: Value<string>;
    ConditionType: Value<string>;
    constructor(properties: ConditionResourceType);
}
export declare class BackupSelectionResourceType {
    IamRoleArn: Value<string>;
    ListOfTags?: List<ConditionResourceType>;
    Resources?: List<Value<string>>;
    SelectionName: Value<string>;
    constructor(properties: BackupSelectionResourceType);
}
export interface BackupSelectionProperties {
    BackupPlanId: Value<string>;
    BackupSelection: BackupSelectionResourceType;
}
export default class BackupSelection extends ResourceBase<BackupSelectionProperties> {
    static ConditionResourceType: typeof ConditionResourceType;
    static BackupSelectionResourceType: typeof BackupSelectionResourceType;
    constructor(properties: BackupSelectionProperties);
}
