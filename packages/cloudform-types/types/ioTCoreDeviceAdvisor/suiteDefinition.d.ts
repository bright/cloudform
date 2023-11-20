import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DeviceUnderTest {
    ThingArn?: Value<string>;
    CertificateArn?: Value<string>;
    constructor(properties: DeviceUnderTest);
}
export declare class SuiteDefinitionConfiguration {
    DevicePermissionRoleArn: Value<string>;
    SuiteDefinitionName?: Value<string>;
    IntendedForQualification?: Value<boolean>;
    Devices?: List<DeviceUnderTest>;
    RootGroup: Value<string>;
    constructor(properties: SuiteDefinitionConfiguration);
}
export interface SuiteDefinitionProperties {
    SuiteDefinitionConfiguration: SuiteDefinitionConfiguration;
    Tags?: List<ResourceTag>;
}
export default class SuiteDefinition extends ResourceBase<SuiteDefinitionProperties> {
    static DeviceUnderTest: typeof DeviceUnderTest;
    static SuiteDefinitionConfiguration: typeof SuiteDefinitionConfiguration;
    constructor(properties: SuiteDefinitionProperties);
}
