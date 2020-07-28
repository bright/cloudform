import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ConformancePackInputParameter {
    ParameterName: Value<string>;
    ParameterValue: Value<string>;
    constructor(properties: ConformancePackInputParameter);
}
export interface ConformancePackProperties {
    ConformancePackName: Value<string>;
    DeliveryS3Bucket: Value<string>;
    DeliveryS3KeyPrefix?: Value<string>;
    TemplateBody?: Value<string>;
    TemplateS3Uri?: Value<string>;
    ConformancePackInputParameters?: List<ConformancePackInputParameter>;
}
export default class ConformancePack extends ResourceBase<ConformancePackProperties> {
    static ConformancePackInputParameter: typeof ConformancePackInputParameter;
    constructor(properties: ConformancePackProperties);
}
