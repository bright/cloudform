import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface RepositoryProperties {
    RepositoryName?: Value<string>
    RepositoryPolicyText?: any
}

export default class Repository extends ResourceBase {
    constructor(properties: RepositoryProperties, dependsOn?: Value<string>) {
        super('AWS::ECR::Repository', properties, dependsOn)
    }
}