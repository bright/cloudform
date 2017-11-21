import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type AllowedMethods = "GET" | "PUT" | "HEAD" | "POST" | "DELETE"

export interface CorsRuleProperties {
    AllowedHeaders?: Value<string>[]
    AllowedMethods: Value<AllowedMethods>
    AllowedOrigins: Value<string>[]
    ExposedHeaders: Value<string>[]
    Id?: Value<string>
    MaxAge?: Value<number>
}

export default class CorsRule extends ResourceBase {
    constructor(properties: CorsRuleProperties, dependsOn?: Value<string>) {
        super('AWS::S3::CorsRule', properties, dependsOn)
    }
}