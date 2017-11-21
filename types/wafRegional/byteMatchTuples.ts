import {ResourceBase} from '../resource'
import {Value} from '../internal'
import FieldToMatch from './fieldToMatch'



export interface ByteMatchTuplesProperties {
    FieldToMatch: FieldToMatch
    PositionalConstraint: Value<string>
    TargetString?: Value<string>
    TargetStringBase64?: Value<string>
    TextTransformation: Value<string>
}

export default class ByteMatchTuples extends ResourceBase {
    constructor(properties: ByteMatchTuplesProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::ByteMatchTuples', properties, dependsOn)
    }
}