import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConformancePackInputParameter {
    ParameterName: Value<string>;
    ParameterValue: Value<string>;
    constructor(properties: ConformancePackInputParameter);
}
export interface OrganizationConformancePackProperties {
    OrganizationConformancePackName: Value<string>;
    TemplateS3Uri?: Value<string>;
    TemplateBody?: Value<string>;
    DeliveryS3Bucket: Value<string>;
    DeliveryS3KeyPrefix?: Value<string>;
    ConformancePackInputParameters?: List<ConformancePackInputParameter>;
    ExcludedAccounts?: List<Value<string>>;
}
export default class OrganizationConformancePack extends ResourceBase<OrganizationConformancePackProperties> {
    static ConformancePackInputParameter: typeof ConformancePackInputParameter;
    constructor(properties: OrganizationConformancePackProperties);
}
