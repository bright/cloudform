/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class CFNDataSourceConfigurations {
    MalwareProtection?: CFNMalwareProtectionConfiguration
    S3Logs?: CFNS3LogsConfiguration
    Kubernetes?: CFNKubernetesConfiguration

    constructor(properties: CFNDataSourceConfigurations) {
        Object.assign(this, properties)
    }
}

export class CFNFeatureAdditionalConfiguration {
    Status?: Value<string>
    Name?: Value<string>

    constructor(properties: CFNFeatureAdditionalConfiguration) {
        Object.assign(this, properties)
    }
}

export class CFNFeatureConfiguration {
    Status!: Value<string>
    AdditionalConfiguration?: List<CFNFeatureAdditionalConfiguration>
    Name!: Value<string>

    constructor(properties: CFNFeatureConfiguration) {
        Object.assign(this, properties)
    }
}

export class CFNKubernetesAuditLogsConfiguration {
    Enable!: Value<boolean>

    constructor(properties: CFNKubernetesAuditLogsConfiguration) {
        Object.assign(this, properties)
    }
}

export class CFNKubernetesConfiguration {
    AuditLogs!: CFNKubernetesAuditLogsConfiguration

    constructor(properties: CFNKubernetesConfiguration) {
        Object.assign(this, properties)
    }
}

export class CFNMalwareProtectionConfiguration {
    ScanEc2InstanceWithFindings?: CFNScanEc2InstanceWithFindingsConfiguration

    constructor(properties: CFNMalwareProtectionConfiguration) {
        Object.assign(this, properties)
    }
}

export class CFNS3LogsConfiguration {
    Enable!: Value<boolean>

    constructor(properties: CFNS3LogsConfiguration) {
        Object.assign(this, properties)
    }
}

export class CFNScanEc2InstanceWithFindingsConfiguration {
    EbsVolumes?: Value<boolean>

    constructor(properties: CFNScanEc2InstanceWithFindingsConfiguration) {
        Object.assign(this, properties)
    }
}

export class TagItem {
    Value!: Value<string>
    Key!: Value<string>

    constructor(properties: TagItem) {
        Object.assign(this, properties)
    }
}

export interface DetectorProperties {
    FindingPublishingFrequency?: Value<string>
    DataSources?: CFNDataSourceConfigurations
    Enable: Value<boolean>
    Features?: List<CFNFeatureConfiguration>
    Tags?: List<TagItem>
}

export default class Detector extends ResourceBase<DetectorProperties> {
    static CFNDataSourceConfigurations = CFNDataSourceConfigurations
    static CFNFeatureAdditionalConfiguration = CFNFeatureAdditionalConfiguration
    static CFNFeatureConfiguration = CFNFeatureConfiguration
    static CFNKubernetesAuditLogsConfiguration = CFNKubernetesAuditLogsConfiguration
    static CFNKubernetesConfiguration = CFNKubernetesConfiguration
    static CFNMalwareProtectionConfiguration = CFNMalwareProtectionConfiguration
    static CFNS3LogsConfiguration = CFNS3LogsConfiguration
    static CFNScanEc2InstanceWithFindingsConfiguration = CFNScanEc2InstanceWithFindingsConfiguration
    static TagItem = TagItem

    constructor(properties: DetectorProperties) {
        super('AWS::GuardDuty::Detector', properties)
    }
}
