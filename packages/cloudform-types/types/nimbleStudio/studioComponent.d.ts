import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LicenseServiceConfiguration {
    Endpoint?: Value<string>;
    constructor(properties: LicenseServiceConfiguration);
}
export declare class ScriptParameterKeyValue {
    Key?: Value<string>;
    Value?: Value<string>;
    constructor(properties: ScriptParameterKeyValue);
}
export declare class ActiveDirectoryConfiguration {
    ComputerAttributes?: List<ActiveDirectoryComputerAttribute>;
    DirectoryId?: Value<string>;
    OrganizationalUnitDistinguishedName?: Value<string>;
    constructor(properties: ActiveDirectoryConfiguration);
}
export declare class ActiveDirectoryComputerAttribute {
    Name?: Value<string>;
    Value?: Value<string>;
    constructor(properties: ActiveDirectoryComputerAttribute);
}
export declare class StudioComponentConfiguration {
    ActiveDirectoryConfiguration?: ActiveDirectoryConfiguration;
    ComputeFarmConfiguration?: ComputeFarmConfiguration;
    LicenseServiceConfiguration?: LicenseServiceConfiguration;
    SharedFileSystemConfiguration?: SharedFileSystemConfiguration;
    constructor(properties: StudioComponentConfiguration);
}
export declare class StudioComponentInitializationScript {
    LaunchProfileProtocolVersion?: Value<string>;
    Platform?: Value<string>;
    RunContext?: Value<string>;
    Script?: Value<string>;
    constructor(properties: StudioComponentInitializationScript);
}
export declare class ComputeFarmConfiguration {
    ActiveDirectoryUser?: Value<string>;
    Endpoint?: Value<string>;
    constructor(properties: ComputeFarmConfiguration);
}
export declare class SharedFileSystemConfiguration {
    Endpoint?: Value<string>;
    FileSystemId?: Value<string>;
    LinuxMountPoint?: Value<string>;
    ShareName?: Value<string>;
    WindowsMountDrive?: Value<string>;
    constructor(properties: SharedFileSystemConfiguration);
}
export interface StudioComponentProperties {
    Configuration?: StudioComponentConfiguration;
    Description?: Value<string>;
    InitializationScripts?: List<StudioComponentInitializationScript>;
    Name: Value<string>;
    ScriptParameters?: List<ScriptParameterKeyValue>;
    Ec2SecurityGroupIds?: List<Value<string>>;
    StudioId: Value<string>;
    Subtype?: Value<string>;
    Type: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class StudioComponent extends ResourceBase<StudioComponentProperties> {
    static LicenseServiceConfiguration: typeof LicenseServiceConfiguration;
    static ScriptParameterKeyValue: typeof ScriptParameterKeyValue;
    static ActiveDirectoryConfiguration: typeof ActiveDirectoryConfiguration;
    static ActiveDirectoryComputerAttribute: typeof ActiveDirectoryComputerAttribute;
    static StudioComponentConfiguration: typeof StudioComponentConfiguration;
    static StudioComponentInitializationScript: typeof StudioComponentInitializationScript;
    static ComputeFarmConfiguration: typeof ComputeFarmConfiguration;
    static SharedFileSystemConfiguration: typeof SharedFileSystemConfiguration;
    constructor(properties: StudioComponentProperties);
}
