import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface UserAttributeProperties {
    Name: Value<string>
    Value?: Value<string>
}

export default class UserAttribute extends ResourceBase {
    constructor(properties: UserAttributeProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::UserAttribute', properties, dependsOn)
    }
}