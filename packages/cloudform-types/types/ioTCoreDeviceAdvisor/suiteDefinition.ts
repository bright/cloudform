/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DeviceUnderTest {
    ThingArn?: Value<string>
    CertificateArn?: Value<string>

    constructor(properties: DeviceUnderTest) {
        Object.assign(this, properties)
    }
}

export class SuiteDefinitionConfiguration {
    DevicePermissionRoleArn!: Value<string>
    SuiteDefinitionName?: Value<string>
    IntendedForQualification?: Value<boolean>
    Devices?: List<DeviceUnderTest>
    RootGroup!: Value<string>

    constructor(properties: SuiteDefinitionConfiguration) {
        Object.assign(this, properties)
    }
}

export interface SuiteDefinitionProperties {
    SuiteDefinitionConfiguration: SuiteDefinitionConfiguration
    Tags?: List<ResourceTag>
}

export default class SuiteDefinition extends ResourceBase<SuiteDefinitionProperties> {
    static DeviceUnderTest = DeviceUnderTest
    static SuiteDefinitionConfiguration = SuiteDefinitionConfiguration

    constructor(properties: SuiteDefinitionProperties) {
        super('AWS::IoTCoreDeviceAdvisor::SuiteDefinition', properties)
    }
}
