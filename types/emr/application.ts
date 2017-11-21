import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ApplicationProperties {
    AdditionalInfo?: any
    Args?: Value<string>[]
    Name?: Value<string>
    Version?: Value<string>
}

export default class Application extends ResourceBase {
    constructor(properties: ApplicationProperties, dependsOn?: Value<string>) {
        super('AWS::EMR::Application', properties, dependsOn)
    }
}