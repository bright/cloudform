import {ResourceBase} from '../resource'
import {Value} from '../internal'
import SizeConstraints from './sizeConstraints'



export interface SizeConstraintSetProperties {
    Name: Value<string>
    SizeConstraints: SizeConstraints
}

export default class SizeConstraintSet extends ResourceBase {
    constructor(properties: SizeConstraintSetProperties, dependsOn?: Value<string>) {
        super('AWS::WAFRegional::SizeConstraintSet', properties, dependsOn)
    }
}