import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class MemberId {
    UserId: Value<string>;
    constructor(properties: MemberId);
}
export interface GroupMembershipProperties {
    MemberId: MemberId;
    IdentityStoreId: Value<string>;
    GroupId: Value<string>;
}
export default class GroupMembership extends ResourceBase<GroupMembershipProperties> {
    static MemberId: typeof MemberId;
    constructor(properties: GroupMembershipProperties);
}
