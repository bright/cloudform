/* Generated from: 
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.1.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class LicenseServiceConfiguration {
    Endpoint?: Value<string>

    constructor(properties: LicenseServiceConfiguration) {
        Object.assign(this, properties)
    }
}

export class ScriptParameterKeyValue {
    Key?: Value<string>
    Value?: Value<string>

    constructor(properties: ScriptParameterKeyValue) {
        Object.assign(this, properties)
    }
}

export class ActiveDirectoryConfiguration {
    DirectoryId?: Value<string>
    OrganizationalUnitDistinguishedName?: Value<string>

    constructor(properties: ActiveDirectoryConfiguration) {
        Object.assign(this, properties)
    }
}

export class ActiveDirectoryComputerAttribute {
    Name?: Value<string>
    Value?: Value<string>

    constructor(properties: ActiveDirectoryComputerAttribute) {
        Object.assign(this, properties)
    }
}

export class StudioComponentConfiguration {


    constructor(properties: StudioComponentConfiguration) {
        Object.assign(this, properties)
    }
}

export class StudioComponentInitializationScript {
    LaunchProfileProtocolVersion?: Value<string>
    Platform?: Value<string>
    RunContext?: Value<string>
    Script?: Value<string>

    constructor(properties: StudioComponentInitializationScript) {
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

export class SharedFileSystemConfiguration {
    Endpoint?: Value<string>
    FileSystemId?: Value<string>
    LinuxMountPoint?: Value<string>
    ShareName?: Value<string>
    WindowsMountDrive?: Value<string>

    constructor(properties: SharedFileSystemConfiguration) {
        Object.assign(this, properties)
    }
}

export interface StudioComponentProperties {
    Description?: Value<string>
    Name: Value<string>
    StudioId: Value<string>
    Subtype?: Value<string>
    Type: Value<string>
}

export default class StudioComponent extends ResourceBase<StudioComponentProperties> {
    static LicenseServiceConfiguration = LicenseServiceConfiguration
    static ScriptParameterKeyValue = ScriptParameterKeyValue
    static ActiveDirectoryConfiguration = ActiveDirectoryConfiguration
    static ActiveDirectoryComputerAttribute = ActiveDirectoryComputerAttribute
    static StudioComponentConfiguration = StudioComponentConfiguration
    static StudioComponentInitializationScript = StudioComponentInitializationScript
    static ComputeFarmConfiguration = ComputeFarmConfiguration
    static SharedFileSystemConfiguration = SharedFileSystemConfiguration

    constructor(properties: StudioComponentProperties) {
        super('AWS::NimbleStudio::StudioComponent', properties)
    }
}
