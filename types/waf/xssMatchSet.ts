import {ResourceBase} from '../resource'
import {Value} from '../internal'
import XssMatchTuples from './xssMatchTuples'



export interface XssMatchSetProperties {
    Name: Value<string>
    XssMatchTuples?: XssMatchTuples
}

export default class XssMatchSet extends ResourceBase {
    constructor(properties: XssMatchSetProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::XssMatchSet', properties, dependsOn)
    }
}