import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface ProvisionedThroughputProperties {
    ReadCapacityUnits?: Value<number>
    WriteCapacityUnits?: Value<number>
}

export default class ProvisionedThroughput extends ResourceBase {
    constructor(properties: ProvisionedThroughputProperties, dependsOn?: Value<string>) {
        super('AWS::Serverless::ProvisionedThroughput', properties, dependsOn)
    }
}