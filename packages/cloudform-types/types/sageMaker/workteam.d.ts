import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CognitoMemberDefinition {
    CognitoUserPool: Value<string>;
    CognitoClientId: Value<string>;
    CognitoUserGroup: Value<string>;
    constructor(properties: CognitoMemberDefinition);
}
export declare class MemberDefinition {
    OidcMemberDefinition?: OidcMemberDefinition;
    CognitoMemberDefinition?: CognitoMemberDefinition;
    constructor(properties: MemberDefinition);
}
export declare class NotificationConfiguration {
    NotificationTopicArn: Value<string>;
    constructor(properties: NotificationConfiguration);
}
export declare class OidcMemberDefinition {
    OidcGroups: List<Value<string>>;
    constructor(properties: OidcMemberDefinition);
}
export interface WorkteamProperties {
    Description?: Value<string>;
    NotificationConfiguration?: NotificationConfiguration;
    WorkteamName?: Value<string>;
    MemberDefinitions?: List<MemberDefinition>;
    WorkforceName?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Workteam extends ResourceBase<WorkteamProperties> {
    static CognitoMemberDefinition: typeof CognitoMemberDefinition;
    static MemberDefinition: typeof MemberDefinition;
    static NotificationConfiguration: typeof NotificationConfiguration;
    static OidcMemberDefinition: typeof OidcMemberDefinition;
    constructor(properties?: WorkteamProperties);
}
