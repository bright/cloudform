import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BackupSelectionResourceType {
    ListOfTags?: List<ConditionResourceType>;
    SelectionName: Value<string>;
    IamRoleArn: Value<string>;
    Resources?: List<Value<string>>;
    constructor(properties: BackupSelectionResourceType);
}
export declare class ConditionResourceType {
    ConditionValue: Value<string>;
    ConditionKey: Value<string>;
    ConditionType: Value<string>;
    constructor(properties: ConditionResourceType);
}
export interface BackupSelectionProperties {
    BackupSelection: BackupSelectionResourceType;
    BackupPlanId: Value<string>;
}
export default class BackupSelection extends ResourceBase<BackupSelectionProperties> {
    static BackupSelectionResourceType: typeof BackupSelectionResourceType;
    static ConditionResourceType: typeof ConditionResourceType;
    constructor(properties: BackupSelectionProperties);
}
