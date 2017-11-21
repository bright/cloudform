import {ResourceBase} from '../resource'
import {Value} from '../internal'
import BodyS3Location from './bodyS3Location'



export interface RestApiProperties {
    Body?: any
    BodyS3Location?: BodyS3Location
    CloneFrom?: Value<string>
    Description?: Value<string>
    FailOnWarnings?: Value<boolean>
    Name?: Value<string>
    Parameters?: Value<string>[]
}

export default class RestApi extends ResourceBase {
    constructor(properties: RestApiProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::RestApi', properties, dependsOn)
    }
}