/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface VersionProperties {
    CodeSha256?: Value<string>
    Description?: Value<string>
    FunctionName: Value<string>
}

export default class Version extends ResourceBase {
    constructor(properties: VersionProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::Lambda::Version', properties, dependsOn)
    }
}
