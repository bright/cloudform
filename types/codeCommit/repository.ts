import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Trigger from './trigger'



export interface RepositoryProperties {
    RepositoryDescription?: Value<string>
    RepositoryName?: Value<string>
    Triggers?: Trigger[]
}

export default class Repository extends ResourceBase {
    constructor(properties: RepositoryProperties, dependsOn?: Value<string>) {
        super('AWS::CodeCommit::Repository', properties, dependsOn)
    }
}