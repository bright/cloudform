import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ActionThreshold {
    Type: Value<string>;
    Value: Value<number>;
    constructor(properties: ActionThreshold);
}
export declare class Definition {
    SsmActionDefinition?: SsmActionDefinition;
    IamActionDefinition?: IamActionDefinition;
    ScpActionDefinition?: ScpActionDefinition;
    constructor(properties: Definition);
}
export declare class IamActionDefinition {
    PolicyArn: Value<string>;
    Groups?: List<Value<string>>;
    Roles?: List<Value<string>>;
    Users?: List<Value<string>>;
    constructor(properties: IamActionDefinition);
}
export declare class ScpActionDefinition {
    TargetIds: List<Value<string>>;
    PolicyId: Value<string>;
    constructor(properties: ScpActionDefinition);
}
export declare class SsmActionDefinition {
    Region: Value<string>;
    InstanceIds: List<Value<string>>;
    Subtype: Value<string>;
    constructor(properties: SsmActionDefinition);
}
export declare class Subscriber {
    Type: Value<string>;
    Address: Value<string>;
    constructor(properties: Subscriber);
}
export interface BudgetsActionProperties {
    ExecutionRoleArn: Value<string>;
    ActionType: Value<string>;
    NotificationType: Value<string>;
    ActionThreshold: ActionThreshold;
    Definition: Definition;
    ApprovalModel?: Value<string>;
    Subscribers: List<Subscriber>;
    BudgetName: Value<string>;
}
export default class BudgetsAction extends ResourceBase<BudgetsActionProperties> {
    static ActionThreshold: typeof ActionThreshold;
    static Definition: typeof Definition;
    static IamActionDefinition: typeof IamActionDefinition;
    static ScpActionDefinition: typeof ScpActionDefinition;
    static SsmActionDefinition: typeof SsmActionDefinition;
    static Subscriber: typeof Subscriber;
    constructor(properties: BudgetsActionProperties);
}
