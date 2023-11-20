/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class ActiveDirectoryComputerAttribute {
    Value?: Value<string>
    Name?: Value<string>

    constructor(properties: ActiveDirectoryComputerAttribute) {
        Object.assign(this, properties)
    }
}

export class ActiveDirectoryConfiguration {
    DirectoryId?: Value<string>
    OrganizationalUnitDistinguishedName?: Value<string>
    ComputerAttributes?: List<ActiveDirectoryComputerAttribute>

    constructor(properties: ActiveDirectoryConfiguration) {
        Object.assign(this, properties)
    }
}

export class ComputeFarmConfiguration {
    ActiveDirectoryUser?: Value<string>
    Endpoint?: Value<string>

    constructor(properties: ComputeFarmConfiguration) {
        Object.assign(this, properties)
    }
}

export class LicenseServiceConfiguration {
    Endpoint?: Value<string>

    constructor(properties: LicenseServiceConfiguration) {
        Object.assign(this, properties)
    }
}

export class ScriptParameterKeyValue {
    Value?: Value<string>
    Key?: Value<string>

    constructor(properties: ScriptParameterKeyValue) {
        Object.assign(this, properties)
    }
}

export class SharedFileSystemConfiguration {
    Endpoint?: Value<string>
    FileSystemId?: Value<string>
    ShareName?: Value<string>
    WindowsMountDrive?: Value<string>
    LinuxMountPoint?: Value<string>

    constructor(properties: SharedFileSystemConfiguration) {
        Object.assign(this, properties)
    }
}

export class StudioComponentConfiguration {
    LicenseServiceConfiguration?: LicenseServiceConfiguration
    ComputeFarmConfiguration?: ComputeFarmConfiguration
    ActiveDirectoryConfiguration?: ActiveDirectoryConfiguration
    SharedFileSystemConfiguration?: SharedFileSystemConfiguration

    constructor(properties: StudioComponentConfiguration) {
        Object.assign(this, properties)
    }
}

export class StudioComponentInitializationScript {
    Script?: Value<string>
    LaunchProfileProtocolVersion?: Value<string>
    Platform?: Value<string>
    RunContext?: Value<string>

    constructor(properties: StudioComponentInitializationScript) {
        Object.assign(this, properties)
    }
}

export interface StudioComponentProperties {
    Configuration?: StudioComponentConfiguration
    Description?: Value<string>
    Ec2SecurityGroupIds?: List<Value<string>>
    InitializationScripts?: List<StudioComponentInitializationScript>
    Name: Value<string>
    ScriptParameters?: List<ScriptParameterKeyValue>
    StudioId: Value<string>
    Subtype?: Value<string>
    Tags?: {[key: string]: Value<string>}
    Type: Value<string>
    RuntimeRoleArn?: Value<string>
    SecureInitializationRoleArn?: Value<string>
}

export default class StudioComponent extends ResourceBase<StudioComponentProperties> {
    static ActiveDirectoryComputerAttribute = ActiveDirectoryComputerAttribute
    static ActiveDirectoryConfiguration = ActiveDirectoryConfiguration
    static ComputeFarmConfiguration = ComputeFarmConfiguration
    static LicenseServiceConfiguration = LicenseServiceConfiguration
    static ScriptParameterKeyValue = ScriptParameterKeyValue
    static SharedFileSystemConfiguration = SharedFileSystemConfiguration
    static StudioComponentConfiguration = StudioComponentConfiguration
    static StudioComponentInitializationScript = StudioComponentInitializationScript

    constructor(properties: StudioComponentProperties) {
        super('AWS::NimbleStudio::StudioComponent', properties)
    }
}
