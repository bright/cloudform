import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ValidationDataProperties {
    Name: Value<string>
    Value?: Value<string>
}

export default class ValidationData extends ResourceBase {
    constructor(properties: ValidationDataProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::ValidationData', properties, dependsOn)
    }
}