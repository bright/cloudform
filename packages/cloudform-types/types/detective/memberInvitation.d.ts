import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface MemberInvitationProperties {
    GraphArn: Value<string>;
    MemberId: Value<string>;
    MemberEmailAddress: Value<string>;
    Message?: Value<string>;
}
export default class MemberInvitation extends ResourceBase<MemberInvitationProperties> {
    constructor(properties: MemberInvitationProperties);
}
