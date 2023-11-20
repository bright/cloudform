import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface MemberInvitationProperties {
    MemberId: Value<string>;
    Message?: Value<string>;
    GraphArn: Value<string>;
    DisableEmailNotification?: Value<boolean>;
    MemberEmailAddress: Value<string>;
}
export default class MemberInvitation extends ResourceBase<MemberInvitationProperties> {
    constructor(properties: MemberInvitationProperties);
}
