import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Cookies from './cookies'



export interface ForwardedValuesProperties {
    Cookies?: Cookies
    Headers?: Value<string>[]
    QueryString: Value<boolean>
    QueryStringCacheKeys?: Value<string>[]
}

export default class ForwardedValues extends ResourceBase {
    constructor(properties: ForwardedValuesProperties, dependsOn?: Value<string>) {
        super('AWS::CloudFront::ForwardedValues', properties, dependsOn)
    }
}