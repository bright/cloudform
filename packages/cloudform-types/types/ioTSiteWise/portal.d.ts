import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface PortalProperties {
    PortalAuthMode?: Value<string>;
    PortalContactEmail: Value<string>;
    PortalDescription?: Value<string>;
    PortalName: Value<string>;
    RoleArn: Value<string>;
    Tags?: List<ResourceTag>;
    NotificationSenderEmail?: Value<string>;
    Alarms?: {
        [key: string]: any;
    };
}
export default class Portal extends ResourceBase<PortalProperties> {
    constructor(properties: PortalProperties);
}
