import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface ReportDefinitionProperties {
    ReportName: Value<string>;
    TimeUnit: Value<string>;
    Format: Value<string>;
    Compression: Value<string>;
    AdditionalSchemaElements?: List<Value<string>>;
    S3Bucket: Value<string>;
    S3Prefix: Value<string>;
    S3Region: Value<string>;
    AdditionalArtifacts?: List<Value<string>>;
    RefreshClosedReports: Value<boolean>;
    ReportVersioning: Value<string>;
    BillingViewArn?: Value<string>;
}
export default class ReportDefinition extends ResourceBase<ReportDefinitionProperties> {
    constructor(properties: ReportDefinitionProperties);
}
