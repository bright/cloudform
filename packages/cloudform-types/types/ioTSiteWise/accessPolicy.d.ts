import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class Project {
    id?: Value<string>;
    constructor(properties: Project);
}
export declare class IamRole {
    arn?: Value<string>;
    constructor(properties: IamRole);
}
export declare class AccessPolicyResource {
    Portal?: Portal;
    Project?: Project;
    constructor(properties: AccessPolicyResource);
}
export declare class User {
    id?: Value<string>;
    constructor(properties: User);
}
export declare class IamUser {
    arn?: Value<string>;
    constructor(properties: IamUser);
}
export declare class Portal {
    id?: Value<string>;
    constructor(properties: Portal);
}
export declare class AccessPolicyIdentity {
    User?: User;
    IamUser?: IamUser;
    IamRole?: IamRole;
    constructor(properties: AccessPolicyIdentity);
}
export interface AccessPolicyProperties {
    AccessPolicyIdentity: AccessPolicyIdentity;
    AccessPolicyPermission: Value<string>;
    AccessPolicyResource: AccessPolicyResource;
}
export default class AccessPolicy extends ResourceBase<AccessPolicyProperties> {
    static Project: typeof Project;
    static IamRole: typeof IamRole;
    static AccessPolicyResource: typeof AccessPolicyResource;
    static User: typeof User;
    static IamUser: typeof IamUser;
    static Portal: typeof Portal;
    static AccessPolicyIdentity: typeof AccessPolicyIdentity;
    constructor(properties: AccessPolicyProperties);
}
