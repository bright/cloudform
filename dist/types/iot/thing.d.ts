import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AttributePayloadProperties {
    Attributes?: {
        [key: string]: Value<string>;
    };
}
export declare class AttributePayload extends ResourceBase {
    constructor(properties: AttributePayloadProperties, dependsOn?: Value<string>);
}
export interface ThingProperties {
    AttributePayload?: AttributePayload;
    ThingName?: Value<string>;
}
export default class Thing extends ResourceBase {
    constructor(properties: ThingProperties, dependsOn?: Value<string>);
}
