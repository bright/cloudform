import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ThingProperties {
    AttributePayload?: any
    ThingName?: Value<string>
}

export default class Thing extends ResourceBase {
    constructor(properties: ThingProperties, dependsOn?: Value<string>) {
        super('AWS::IoT::Thing', properties, dependsOn)
    }
}