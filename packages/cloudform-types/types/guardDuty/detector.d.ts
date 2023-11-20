import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CFNDataSourceConfigurations {
    MalwareProtection?: CFNMalwareProtectionConfiguration;
    S3Logs?: CFNS3LogsConfiguration;
    Kubernetes?: CFNKubernetesConfiguration;
    constructor(properties: CFNDataSourceConfigurations);
}
export declare class CFNFeatureAdditionalConfiguration {
    Status?: Value<string>;
    Name?: Value<string>;
    constructor(properties: CFNFeatureAdditionalConfiguration);
}
export declare class CFNFeatureConfiguration {
    Status: Value<string>;
    AdditionalConfiguration?: List<CFNFeatureAdditionalConfiguration>;
    Name: Value<string>;
    constructor(properties: CFNFeatureConfiguration);
}
export declare class CFNKubernetesAuditLogsConfiguration {
    Enable: Value<boolean>;
    constructor(properties: CFNKubernetesAuditLogsConfiguration);
}
export declare class CFNKubernetesConfiguration {
    AuditLogs: CFNKubernetesAuditLogsConfiguration;
    constructor(properties: CFNKubernetesConfiguration);
}
export declare class CFNMalwareProtectionConfiguration {
    ScanEc2InstanceWithFindings?: CFNScanEc2InstanceWithFindingsConfiguration;
    constructor(properties: CFNMalwareProtectionConfiguration);
}
export declare class CFNS3LogsConfiguration {
    Enable: Value<boolean>;
    constructor(properties: CFNS3LogsConfiguration);
}
export declare class CFNScanEc2InstanceWithFindingsConfiguration {
    EbsVolumes?: Value<boolean>;
    constructor(properties: CFNScanEc2InstanceWithFindingsConfiguration);
}
export declare class TagItem {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: TagItem);
}
export interface DetectorProperties {
    FindingPublishingFrequency?: Value<string>;
    DataSources?: CFNDataSourceConfigurations;
    Enable: Value<boolean>;
    Features?: List<CFNFeatureConfiguration>;
    Tags?: List<TagItem>;
}
export default class Detector extends ResourceBase<DetectorProperties> {
    static CFNDataSourceConfigurations: typeof CFNDataSourceConfigurations;
    static CFNFeatureAdditionalConfiguration: typeof CFNFeatureAdditionalConfiguration;
    static CFNFeatureConfiguration: typeof CFNFeatureConfiguration;
    static CFNKubernetesAuditLogsConfiguration: typeof CFNKubernetesAuditLogsConfiguration;
    static CFNKubernetesConfiguration: typeof CFNKubernetesConfiguration;
    static CFNMalwareProtectionConfiguration: typeof CFNMalwareProtectionConfiguration;
    static CFNS3LogsConfiguration: typeof CFNS3LogsConfiguration;
    static CFNScanEc2InstanceWithFindingsConfiguration: typeof CFNScanEc2InstanceWithFindingsConfiguration;
    static TagItem: typeof TagItem;
    constructor(properties: DetectorProperties);
}
