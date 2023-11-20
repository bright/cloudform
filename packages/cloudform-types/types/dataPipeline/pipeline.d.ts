import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Field {
    RefValue?: Value<string>;
    StringValue?: Value<string>;
    Key: Value<string>;
    constructor(properties: Field);
}
export declare class ParameterAttribute {
    StringValue: Value<string>;
    Key: Value<string>;
    constructor(properties: ParameterAttribute);
}
export declare class ParameterObject {
    Attributes: List<ParameterAttribute>;
    Id: Value<string>;
    constructor(properties: ParameterObject);
}
export declare class ParameterValue {
    Id: Value<string>;
    StringValue: Value<string>;
    constructor(properties: ParameterValue);
}
export declare class PipelineObject {
    Fields: List<Field>;
    Id: Value<string>;
    Name: Value<string>;
    constructor(properties: PipelineObject);
}
export declare class PipelineTag {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: PipelineTag);
}
export interface PipelineProperties {
    PipelineTags?: List<PipelineTag>;
    ParameterObjects?: List<ParameterObject>;
    Description?: Value<string>;
    Activate?: Value<boolean>;
    PipelineObjects?: List<PipelineObject>;
    ParameterValues?: List<ParameterValue>;
    Name: Value<string>;
}
export default class Pipeline extends ResourceBase<PipelineProperties> {
    static Field: typeof Field;
    static ParameterAttribute: typeof ParameterAttribute;
    static ParameterObject: typeof ParameterObject;
    static ParameterValue: typeof ParameterValue;
    static PipelineObject: typeof PipelineObject;
    static PipelineTag: typeof PipelineTag;
    constructor(properties: PipelineProperties);
}
