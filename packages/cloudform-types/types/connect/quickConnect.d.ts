import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PhoneNumberQuickConnectConfig {
    PhoneNumber: Value<string>;
    constructor(properties: PhoneNumberQuickConnectConfig);
}
export declare class QueueQuickConnectConfig {
    ContactFlowArn: Value<string>;
    QueueArn: Value<string>;
    constructor(properties: QueueQuickConnectConfig);
}
export declare class QuickConnectConfig {
    QueueConfig?: QueueQuickConnectConfig;
    PhoneConfig?: PhoneNumberQuickConnectConfig;
    QuickConnectType: Value<string>;
    UserConfig?: UserQuickConnectConfig;
    constructor(properties: QuickConnectConfig);
}
export declare class UserQuickConnectConfig {
    UserArn: Value<string>;
    ContactFlowArn: Value<string>;
    constructor(properties: UserQuickConnectConfig);
}
export interface QuickConnectProperties {
    Description?: Value<string>;
    QuickConnectConfig: QuickConnectConfig;
    InstanceArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class QuickConnect extends ResourceBase<QuickConnectProperties> {
    static PhoneNumberQuickConnectConfig: typeof PhoneNumberQuickConnectConfig;
    static QueueQuickConnectConfig: typeof QueueQuickConnectConfig;
    static QuickConnectConfig: typeof QuickConnectConfig;
    static UserQuickConnectConfig: typeof UserQuickConnectConfig;
    constructor(properties: QuickConnectProperties);
}
