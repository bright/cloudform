import {ResourceBase} from '../resource'
import {Value} from '../internal'
import GitHubLocation from './gitHubLocation'
import S3Location from './s3Location'

export type RevisionType = "S3" | "GitHub" | "*"

export interface RevisionProperties {
    GitHubLocation?: GitHubLocation
    RevisionType: Value<RevisionType>
    S3Location?: S3Location
}

export default class Revision extends ResourceBase {
    constructor(properties: RevisionProperties, dependsOn?: Value<string>) {
        super('AWS::CodeDeploy::Revision', properties, dependsOn)
    }
}