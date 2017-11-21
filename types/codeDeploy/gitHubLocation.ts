import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface GitHubLocationProperties {
    CommitId: Value<string>
    Repository: Value<string>
}

export default class GitHubLocation extends ResourceBase {
    constructor(properties: GitHubLocationProperties, dependsOn?: Value<string>) {
        super('AWS::CodeDeploy::GitHubLocation', properties, dependsOn)
    }
}