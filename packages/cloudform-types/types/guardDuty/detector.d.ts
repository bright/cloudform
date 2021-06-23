import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class CFNDataSourceConfigurations {
    S3Logs?: CFNS3LogsConfiguration;
    constructor(properties: CFNDataSourceConfigurations);
}
export declare class CFNS3LogsConfiguration {
    Enable?: Value<boolean>;
    constructor(properties: CFNS3LogsConfiguration);
}
export interface DetectorProperties {
    FindingPublishingFrequency?: Value<string>;
    DataSources?: CFNDataSourceConfigurations;
    Enable: Value<boolean>;
}
export default class Detector extends ResourceBase<DetectorProperties> {
    static CFNDataSourceConfigurations: typeof CFNDataSourceConfigurations;
    static CFNS3LogsConfiguration: typeof CFNS3LogsConfiguration;
    constructor(properties: DetectorProperties);
}
