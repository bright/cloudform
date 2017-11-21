import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface GeoLocationProperties {
    ContinentCode?: Value<string>
    CountryCode?: Value<string>
    SubdivisionCode?: Value<string>
}

export default class GeoLocation extends ResourceBase {
    constructor(properties: GeoLocationProperties, dependsOn?: Value<string>) {
        super('AWS::Route53::GeoLocation', properties, dependsOn)
    }
}