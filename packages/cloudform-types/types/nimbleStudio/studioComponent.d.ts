import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ActiveDirectoryComputerAttribute {
    Value?: Value<string>;
    Name?: Value<string>;
    constructor(properties: ActiveDirectoryComputerAttribute);
}
export declare class ActiveDirectoryConfiguration {
    DirectoryId?: Value<string>;
    OrganizationalUnitDistinguishedName?: Value<string>;
    ComputerAttributes?: List<ActiveDirectoryComputerAttribute>;
    constructor(properties: ActiveDirectoryConfiguration);
}
export declare class ComputeFarmConfiguration {
    ActiveDirectoryUser?: Value<string>;
    Endpoint?: Value<string>;
    constructor(properties: ComputeFarmConfiguration);
}
export declare class LicenseServiceConfiguration {
    Endpoint?: Value<string>;
    constructor(properties: LicenseServiceConfiguration);
}
export declare class ScriptParameterKeyValue {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: ScriptParameterKeyValue);
}
export declare class SharedFileSystemConfiguration {
    Endpoint?: Value<string>;
    FileSystemId?: Value<string>;
    ShareName?: Value<string>;
    WindowsMountDrive?: Value<string>;
    LinuxMountPoint?: Value<string>;
    constructor(properties: SharedFileSystemConfiguration);
}
export declare class StudioComponentConfiguration {
    LicenseServiceConfiguration?: LicenseServiceConfiguration;
    ComputeFarmConfiguration?: ComputeFarmConfiguration;
    ActiveDirectoryConfiguration?: ActiveDirectoryConfiguration;
    SharedFileSystemConfiguration?: SharedFileSystemConfiguration;
    constructor(properties: StudioComponentConfiguration);
}
export declare class StudioComponentInitializationScript {
    Script?: Value<string>;
    LaunchProfileProtocolVersion?: Value<string>;
    Platform?: Value<string>;
    RunContext?: Value<string>;
    constructor(properties: StudioComponentInitializationScript);
}
export interface StudioComponentProperties {
    Configuration?: StudioComponentConfiguration;
    Description?: Value<string>;
    Ec2SecurityGroupIds?: List<Value<string>>;
    InitializationScripts?: List<StudioComponentInitializationScript>;
    Name: Value<string>;
    ScriptParameters?: List<ScriptParameterKeyValue>;
    StudioId: Value<string>;
    Subtype?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Type: Value<string>;
    RuntimeRoleArn?: Value<string>;
    SecureInitializationRoleArn?: Value<string>;
}
export default class StudioComponent extends ResourceBase<StudioComponentProperties> {
    static ActiveDirectoryComputerAttribute: typeof ActiveDirectoryComputerAttribute;
    static ActiveDirectoryConfiguration: typeof ActiveDirectoryConfiguration;
    static ComputeFarmConfiguration: typeof ComputeFarmConfiguration;
    static LicenseServiceConfiguration: typeof LicenseServiceConfiguration;
    static ScriptParameterKeyValue: typeof ScriptParameterKeyValue;
    static SharedFileSystemConfiguration: typeof SharedFileSystemConfiguration;
    static StudioComponentConfiguration: typeof StudioComponentConfiguration;
    static StudioComponentInitializationScript: typeof StudioComponentInitializationScript;
    constructor(properties: StudioComponentProperties);
}
