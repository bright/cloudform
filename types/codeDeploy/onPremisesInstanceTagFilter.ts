import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Type = "KEY_ONLY" | "VALUE_ONLY" | "KEY_AND_VALUE"

export interface OnPremisesInstanceTagFilterProperties {
    Key?: Value<string>
    Type?: Value<Type>
    Value?: Value<string>
}

export default class OnPremisesInstanceTagFilter extends ResourceBase {
    constructor(properties: OnPremisesInstanceTagFilterProperties, dependsOn?: Value<string>) {
        super('AWS::CodeDeploy::OnPremisesInstanceTagFilter', properties, dependsOn)
    }
}