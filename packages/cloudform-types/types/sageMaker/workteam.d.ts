import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CognitoMemberDefinition {
    CognitoUserPool: Value<string>;
    CognitoClientId: Value<string>;
    CognitoUserGroup: Value<string>;
    constructor(properties: CognitoMemberDefinition);
}
export declare class MemberDefinition {
    CognitoMemberDefinition: CognitoMemberDefinition;
    constructor(properties: MemberDefinition);
}
export declare class NotificationConfiguration {
    NotificationTopicArn: Value<string>;
    constructor(properties: NotificationConfiguration);
}
export interface WorkteamProperties {
    Description?: Value<string>;
    NotificationConfiguration?: NotificationConfiguration;
    WorkteamName?: Value<string>;
    MemberDefinitions?: List<MemberDefinition>;
    Tags?: List<ResourceTag>;
}
export default class Workteam extends ResourceBase<WorkteamProperties> {
    static CognitoMemberDefinition: typeof CognitoMemberDefinition;
    static MemberDefinition: typeof MemberDefinition;
    static NotificationConfiguration: typeof NotificationConfiguration;
    constructor(properties?: WorkteamProperties);
}
