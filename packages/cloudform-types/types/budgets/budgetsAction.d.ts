import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IamActionDefinition {
    PolicyArn: Value<string>;
    Roles?: List<Value<string>>;
    Groups?: List<Value<string>>;
    Users?: List<Value<string>>;
    constructor(properties: IamActionDefinition);
}
export declare class Definition {
    IamActionDefinition?: IamActionDefinition;
    ScpActionDefinition?: ScpActionDefinition;
    SsmActionDefinition?: SsmActionDefinition;
    constructor(properties: Definition);
}
export declare class ScpActionDefinition {
    PolicyId: Value<string>;
    TargetIds: List<Value<string>>;
    constructor(properties: ScpActionDefinition);
}
export declare class SsmActionDefinition {
    Subtype: Value<string>;
    Region: Value<string>;
    InstanceIds: List<Value<string>>;
    constructor(properties: SsmActionDefinition);
}
export declare class ActionThreshold {
    Value: Value<number>;
    Type: Value<string>;
    constructor(properties: ActionThreshold);
}
export declare class Subscriber {
    Type: Value<string>;
    Address: Value<string>;
    constructor(properties: Subscriber);
}
export interface BudgetsActionProperties {
    BudgetName: Value<string>;
    NotificationType: Value<string>;
    ActionType: Value<string>;
    ActionThreshold: ActionThreshold;
    ExecutionRoleArn: Value<string>;
    ApprovalModel?: Value<string>;
    Subscribers?: List<Subscriber>;
    Definition: Definition;
}
export default class BudgetsAction extends ResourceBase<BudgetsActionProperties> {
    static IamActionDefinition: typeof IamActionDefinition;
    static Definition: typeof Definition;
    static ScpActionDefinition: typeof ScpActionDefinition;
    static SsmActionDefinition: typeof SsmActionDefinition;
    static ActionThreshold: typeof ActionThreshold;
    static Subscriber: typeof Subscriber;
    constructor(properties: BudgetsActionProperties);
}
