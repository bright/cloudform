import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConformancePackInputParameter {
    ParameterValue: Value<string>;
    ParameterName: Value<string>;
    constructor(properties: ConformancePackInputParameter);
}
export declare class TemplateSSMDocumentDetails {
    DocumentVersion?: Value<string>;
    DocumentName?: Value<string>;
    constructor(properties: TemplateSSMDocumentDetails);
}
export interface ConformancePackProperties {
    ConformancePackInputParameters?: List<ConformancePackInputParameter>;
    TemplateSSMDocumentDetails?: TemplateSSMDocumentDetails;
    DeliveryS3Bucket?: Value<string>;
    ConformancePackName: Value<string>;
    DeliveryS3KeyPrefix?: Value<string>;
    TemplateBody?: Value<string>;
    TemplateS3Uri?: Value<string>;
}
export default class ConformancePack extends ResourceBase<ConformancePackProperties> {
    static ConformancePackInputParameter: typeof ConformancePackInputParameter;
    static TemplateSSMDocumentDetails: typeof TemplateSSMDocumentDetails;
    constructor(properties: ConformancePackProperties);
}
