/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Project {
    id?: Value<string>

    constructor(properties: Project) {
        Object.assign(this, properties)
    }
}

export class IamRole {
    arn?: Value<string>

    constructor(properties: IamRole) {
        Object.assign(this, properties)
    }
}

export class AccessPolicyResource {
    Portal?: Portal
    Project?: Project

    constructor(properties: AccessPolicyResource) {
        Object.assign(this, properties)
    }
}

export class User {
    id?: Value<string>

    constructor(properties: User) {
        Object.assign(this, properties)
    }
}

export class IamUser {
    arn?: Value<string>

    constructor(properties: IamUser) {
        Object.assign(this, properties)
    }
}

export class Portal {
    id?: Value<string>

    constructor(properties: Portal) {
        Object.assign(this, properties)
    }
}

export class AccessPolicyIdentity {
    User?: User
    IamUser?: IamUser
    IamRole?: IamRole

    constructor(properties: AccessPolicyIdentity) {
        Object.assign(this, properties)
    }
}

export interface AccessPolicyProperties {
    AccessPolicyIdentity: AccessPolicyIdentity
    AccessPolicyPermission: Value<string>
    AccessPolicyResource: AccessPolicyResource
}

export default class AccessPolicy extends ResourceBase<AccessPolicyProperties> {
    static Project = Project
    static IamRole = IamRole
    static AccessPolicyResource = AccessPolicyResource
    static User = User
    static IamUser = IamUser
    static Portal = Portal
    static AccessPolicyIdentity = AccessPolicyIdentity

    constructor(properties: AccessPolicyProperties) {
        super('AWS::IoTSiteWise::AccessPolicy', properties)
    }
}
