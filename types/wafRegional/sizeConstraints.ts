import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface SizeConstraintsProperties {
    ComparisonOperator: Value<string>
    FieldToMatch: any
    Size: Value<number>
    TextTransformation: Value<string>
}

export default class SizeConstraints extends ResourceBase {
    constructor(properties: SizeConstraintsProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::SizeConstraints', properties, dependsOn)
    }
}