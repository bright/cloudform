import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Alarms {
    NotificationLambdaArn?: Value<string>;
    AlarmRoleArn?: Value<string>;
    constructor(properties: Alarms);
}
export interface PortalProperties {
    PortalName: Value<string>;
    PortalAuthMode?: Value<string>;
    NotificationSenderEmail?: Value<string>;
    Alarms?: Alarms;
    PortalContactEmail: Value<string>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
    PortalDescription?: Value<string>;
}
export default class Portal extends ResourceBase<PortalProperties> {
    static Alarms: typeof Alarms;
    constructor(properties: PortalProperties);
}
