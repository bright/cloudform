import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ParameterAttributeProperties {
    Key: Value<string>;
    StringValue: Value<string>;
}
export declare class ParameterAttribute extends ResourceBase {
    constructor(properties: ParameterAttributeProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PipelineTagProperties {
    Key: Value<string>;
    Value: Value<string>;
}
export declare class PipelineTag extends ResourceBase {
    constructor(properties: PipelineTagProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ParameterObjectProperties {
    Attributes: ParameterAttribute[];
    Id: Value<string>;
}
export declare class ParameterObject extends ResourceBase {
    constructor(properties: ParameterObjectProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PipelineObjectProperties {
    Fields: Field[];
    Id: Value<string>;
    Name: Value<string>;
}
export declare class PipelineObject extends ResourceBase {
    constructor(properties: PipelineObjectProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface ParameterValueProperties {
    Id: Value<string>;
    StringValue: Value<string>;
}
export declare class ParameterValue extends ResourceBase {
    constructor(properties: ParameterValueProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface FieldProperties {
    Key: Value<string>;
    RefValue?: Value<string>;
    StringValue?: Value<string>;
}
export declare class Field extends ResourceBase {
    constructor(properties: FieldProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface PipelineProperties {
    Activate?: Value<boolean>;
    Description?: Value<string>;
    Name: Value<string>;
    ParameterObjects: ParameterObject[];
    ParameterValues?: ParameterValue[];
    PipelineObjects?: PipelineObject[];
    PipelineTags?: PipelineTag[];
}
export default class Pipeline extends ResourceBase {
    constructor(properties: PipelineProperties, dependsOn?: Value<string> | Value<string>[]);
}
