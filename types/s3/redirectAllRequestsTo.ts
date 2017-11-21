import {ResourceBase} from '../resource'
import {Value} from '../internal'


export type Protocol = "http" | "https"

export interface RedirectAllRequestsToProperties {
    HostName: Value<string>
    Protocol?: Value<Protocol>
}

export default class RedirectAllRequestsTo extends ResourceBase {
    constructor(properties: RedirectAllRequestsToProperties, dependsOn?: Value<string>) {
        super('AWS::S3::RedirectAllRequestsTo', properties, dependsOn)
    }
}