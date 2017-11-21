import {ResourceBase, ResourceTag} from '../resource'
import {Value} from '../internal'
import Artifacts from './artifacts'
import Environment from './environment'
import Source from './source'



export interface ProjectProperties {
    Artifacts: Artifacts
    Description?: Value<string>
    EncryptionKey?: Value<string>
    Environment?: Environment
    Name: Value<string>
    ServiceRole: Value<string>
    Source: Source
    TimeoutInMinutes?: Value<number>
    Tags?: ResourceTag[]
}

export default class Project extends ResourceBase {
    constructor(properties: ProjectProperties, dependsOn?: Value<string>) {
        super('AWS::CodeBuild::Project', properties, dependsOn)
    }
}