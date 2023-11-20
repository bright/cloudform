import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class AccessPolicyIdentity {
    User?: User;
    IamUser?: IamUser;
    IamRole?: IamRole;
    constructor(properties: AccessPolicyIdentity);
}
export declare class AccessPolicyResource {
    Project?: Project;
    Portal?: Portal;
    constructor(properties: AccessPolicyResource);
}
export declare class IamRole {
    arn?: Value<string>;
    constructor(properties: IamRole);
}
export declare class IamUser {
    arn?: Value<string>;
    constructor(properties: IamUser);
}
export declare class Portal {
    id?: Value<string>;
    constructor(properties: Portal);
}
export declare class Project {
    id?: Value<string>;
    constructor(properties: Project);
}
export declare class User {
    id?: Value<string>;
    constructor(properties: User);
}
export interface AccessPolicyProperties {
    AccessPolicyResource: AccessPolicyResource;
    AccessPolicyIdentity: AccessPolicyIdentity;
    AccessPolicyPermission: Value<string>;
}
export default class AccessPolicy extends ResourceBase<AccessPolicyProperties> {
    static AccessPolicyIdentity: typeof AccessPolicyIdentity;
    static AccessPolicyResource: typeof AccessPolicyResource;
    static IamRole: typeof IamRole;
    static IamUser: typeof IamUser;
    static Portal: typeof Portal;
    static Project: typeof Project;
    static User: typeof User;
    constructor(properties: AccessPolicyProperties);
}
