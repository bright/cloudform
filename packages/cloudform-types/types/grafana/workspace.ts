/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class AssertionAttributes {
    Role?: Value<string>
    Email?: Value<string>
    Org?: Value<string>
    Groups?: Value<string>
    Login?: Value<string>
    Name?: Value<string>

    constructor(properties: AssertionAttributes) {
        Object.assign(this, properties)
    }
}

export class IdpMetadata {
    Xml?: Value<string>
    Url?: Value<string>

    constructor(properties: IdpMetadata) {
        Object.assign(this, properties)
    }
}

export class NetworkAccessControl {
    PrefixListIds?: List<Value<string>>
    VpceIds?: List<Value<string>>

    constructor(properties: NetworkAccessControl) {
        Object.assign(this, properties)
    }
}

export class RoleValues {
    Editor?: List<Value<string>>
    Admin?: List<Value<string>>

    constructor(properties: RoleValues) {
        Object.assign(this, properties)
    }
}

export class SamlConfiguration {
    LoginValidityDuration?: Value<number>
    RoleValues?: RoleValues
    IdpMetadata!: IdpMetadata
    AssertionAttributes?: AssertionAttributes
    AllowedOrganizations?: List<Value<string>>

    constructor(properties: SamlConfiguration) {
        Object.assign(this, properties)
    }
}

export class VpcConfiguration {
    SecurityGroupIds!: List<Value<string>>
    SubnetIds!: List<Value<string>>

    constructor(properties: VpcConfiguration) {
        Object.assign(this, properties)
    }
}

export interface WorkspaceProperties {
    NotificationDestinations?: List<Value<string>>
    Description?: Value<string>
    PermissionType: Value<string>
    AccountAccessType: Value<string>
    StackSetName?: Value<string>
    SamlConfiguration?: SamlConfiguration
    OrganizationalUnits?: List<Value<string>>
    RoleArn?: Value<string>
    Name?: Value<string>
    GrafanaVersion?: Value<string>
    DataSources?: List<Value<string>>
    AuthenticationProviders: List<Value<string>>
    OrganizationRoleName?: Value<string>
    VpcConfiguration?: VpcConfiguration
    NetworkAccessControl?: NetworkAccessControl
    ClientToken?: Value<string>
}

export default class Workspace extends ResourceBase<WorkspaceProperties> {
    static AssertionAttributes = AssertionAttributes
    static IdpMetadata = IdpMetadata
    static NetworkAccessControl = NetworkAccessControl
    static RoleValues = RoleValues
    static SamlConfiguration = SamlConfiguration
    static VpcConfiguration = VpcConfiguration

    constructor(properties: WorkspaceProperties) {
        super('AWS::Grafana::Workspace', properties)
    }
}
