import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BackupSelectionResourceType {
    ListOfTags?: List<ConditionResourceType>;
    NotResources?: List<Value<string>>;
    SelectionName: Value<string>;
    IamRoleArn: Value<string>;
    Resources?: List<Value<string>>;
    Conditions?: Conditions;
    constructor(properties: BackupSelectionResourceType);
}
export declare class ConditionParameter {
    ConditionValue?: Value<string>;
    ConditionKey?: Value<string>;
    constructor(properties: ConditionParameter);
}
export declare class ConditionResourceType {
    ConditionValue: Value<string>;
    ConditionKey: Value<string>;
    ConditionType: Value<string>;
    constructor(properties: ConditionResourceType);
}
export declare class Conditions {
    StringEquals?: List<ConditionParameter>;
    StringNotLike?: List<ConditionParameter>;
    StringLike?: List<ConditionParameter>;
    StringNotEquals?: List<ConditionParameter>;
    constructor(properties: Conditions);
}
export interface BackupSelectionProperties {
    BackupSelection: BackupSelectionResourceType;
    BackupPlanId: Value<string>;
}
export default class BackupSelection extends ResourceBase<BackupSelectionProperties> {
    static BackupSelectionResourceType: typeof BackupSelectionResourceType;
    static ConditionParameter: typeof ConditionParameter;
    static ConditionResourceType: typeof ConditionResourceType;
    static Conditions: typeof Conditions;
    constructor(properties: BackupSelectionProperties);
}
