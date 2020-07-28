import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ReportExportConfig {
    S3Destination?: S3ReportExportConfig;
    ExportConfigType: Value<string>;
    constructor(properties: ReportExportConfig);
}
export declare class S3ReportExportConfig {
    Path?: Value<string>;
    Bucket: Value<string>;
    Packaging?: Value<string>;
    EncryptionKey?: Value<string>;
    EncryptionDisabled?: Value<boolean>;
    constructor(properties: S3ReportExportConfig);
}
export interface ReportGroupProperties {
    Type: Value<string>;
    ExportConfig: ReportExportConfig;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class ReportGroup extends ResourceBase<ReportGroupProperties> {
    static ReportExportConfig: typeof ReportExportConfig;
    static S3ReportExportConfig: typeof S3ReportExportConfig;
    constructor(properties: ReportGroupProperties);
}
