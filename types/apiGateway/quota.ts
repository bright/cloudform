import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Period = "*" | "DAY" | "WEEK" | "MONTH"

export interface QuotaProperties {
    Limit?: Value<number>
    Offset?: Value<number>
    Period?: Value<Period>
}

export default class Quota extends ResourceBase {
    constructor(properties: QuotaProperties, dependsOn?: Value<string>) {
        super('AWS::ApiGateway::Quota', properties, dependsOn)
    }
}