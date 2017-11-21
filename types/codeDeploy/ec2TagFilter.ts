import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Type = "KEY_ONLY" | "VALUE_ONLY" | "KEY_AND_VALUE"

export interface Ec2TagFilterProperties {
    Key?: Value<string>
    Type?: Value<Type>
    Value?: Value<string>
}

export default class Ec2TagFilter extends ResourceBase {
    constructor(properties: Ec2TagFilterProperties, dependsOn?: Value<string>) {
        super('AWS::CodeDeploy::Ec2TagFilter', properties, dependsOn)
    }
}