/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'

export interface AttributePayloadProperties {
    Attributes?: {[key: string]: Value<string>}
}

export class AttributePayload extends ResourceBase {
    constructor(properties: AttributePayloadProperties, dependsOn?: Value<string>) {
        super('AWS::IoT::AttributePayload', properties, dependsOn)
    }
}

export interface ThingProperties {
    AttributePayload?: AttributePayload
    ThingName?: Value<string>
}

export default class Thing extends ResourceBase {
    constructor(properties: ThingProperties, dependsOn?: Value<string>) {
        super('AWS::IoT::Thing', properties, dependsOn)
    }
}