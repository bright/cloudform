import { ResourceBase } from '../resource';
import { Value } from '../internal';
import InviteMessageTemplate from './inviteMessageTemplate';
export interface AdminCreateUserConfigProperties {
    AllowAdminCreateUserOnly?: Value<boolean>;
    InviteMessageTemplate?: InviteMessageTemplate;
    UnusedAccountValidityDays?: Value<number>;
}
export default class AdminCreateUserConfig extends ResourceBase {
    constructor(properties: AdminCreateUserConfigProperties, dependsOn?: Value<string>);
}
