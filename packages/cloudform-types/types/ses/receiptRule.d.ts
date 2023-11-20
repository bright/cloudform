import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Action {
    BounceAction?: BounceAction;
    S3Action?: S3Action;
    StopAction?: StopAction;
    SNSAction?: SNSAction;
    WorkmailAction?: WorkmailAction;
    AddHeaderAction?: AddHeaderAction;
    LambdaAction?: LambdaAction;
    constructor(properties: Action);
}
export declare class AddHeaderAction {
    HeaderValue: Value<string>;
    HeaderName: Value<string>;
    constructor(properties: AddHeaderAction);
}
export declare class BounceAction {
    Sender: Value<string>;
    SmtpReplyCode: Value<string>;
    Message: Value<string>;
    TopicArn?: Value<string>;
    StatusCode?: Value<string>;
    constructor(properties: BounceAction);
}
export declare class LambdaAction {
    FunctionArn: Value<string>;
    TopicArn?: Value<string>;
    InvocationType?: Value<string>;
    constructor(properties: LambdaAction);
}
export declare class Rule {
    ScanEnabled?: Value<boolean>;
    Recipients?: List<Value<string>>;
    Actions?: List<Action>;
    Enabled?: Value<boolean>;
    Name?: Value<string>;
    TlsPolicy?: Value<string>;
    constructor(properties: Rule);
}
export declare class S3Action {
    BucketName: Value<string>;
    KmsKeyArn?: Value<string>;
    TopicArn?: Value<string>;
    ObjectKeyPrefix?: Value<string>;
    constructor(properties: S3Action);
}
export declare class SNSAction {
    TopicArn?: Value<string>;
    Encoding?: Value<string>;
    constructor(properties: SNSAction);
}
export declare class StopAction {
    Scope: Value<string>;
    TopicArn?: Value<string>;
    constructor(properties: StopAction);
}
export declare class WorkmailAction {
    TopicArn?: Value<string>;
    OrganizationArn: Value<string>;
    constructor(properties: WorkmailAction);
}
export interface ReceiptRuleProperties {
    After?: Value<string>;
    Rule: Rule;
    RuleSetName: Value<string>;
}
export default class ReceiptRule extends ResourceBase<ReceiptRuleProperties> {
    static Action: typeof Action;
    static AddHeaderAction: typeof AddHeaderAction;
    static BounceAction: typeof BounceAction;
    static LambdaAction: typeof LambdaAction;
    static Rule: typeof Rule;
    static S3Action: typeof S3Action;
    static SNSAction: typeof SNSAction;
    static StopAction: typeof StopAction;
    static WorkmailAction: typeof WorkmailAction;
    constructor(properties: ReceiptRuleProperties);
}
