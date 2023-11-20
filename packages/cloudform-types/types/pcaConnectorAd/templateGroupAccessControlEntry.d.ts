import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class AccessRights {
    Enroll?: Value<string>;
    AutoEnroll?: Value<string>;
    constructor(properties: AccessRights);
}
export interface TemplateGroupAccessControlEntryProperties {
    AccessRights: AccessRights;
    TemplateArn?: Value<string>;
    GroupDisplayName: Value<string>;
    GroupSecurityIdentifier?: Value<string>;
}
export default class TemplateGroupAccessControlEntry extends ResourceBase<TemplateGroupAccessControlEntryProperties> {
    static AccessRights: typeof AccessRights;
    constructor(properties: TemplateGroupAccessControlEntryProperties);
}
