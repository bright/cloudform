import {ResourceBase} from '../resource'
import {Value} from '../internal'
import ByteMatchTuples from './byteMatchTuples'



export interface ByteMatchSetProperties {
    ByteMatchTuples?: ByteMatchTuples
    Name: Value<string>
}

export default class ByteMatchSet extends ResourceBase {
    constructor(properties: ByteMatchSetProperties, dependsOn?: Value<string>) {
        super('AWS::WAF::ByteMatchSet', properties, dependsOn)
    }
}