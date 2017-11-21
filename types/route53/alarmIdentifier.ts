import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface AlarmIdentifierProperties {
    Name: Value<string>
    Region: Value<string>
}

export default class AlarmIdentifier extends ResourceBase {
    constructor(properties: AlarmIdentifierProperties, dependsOn?: Value<string>) {
        super('AWS::Route53::AlarmIdentifier', properties, dependsOn)
    }
}