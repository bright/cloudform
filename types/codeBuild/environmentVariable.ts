import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface EnvironmentVariableProperties {
    Name: Value<string>
    Value: Value<string>
}

export default class EnvironmentVariable extends ResourceBase {
    constructor(properties: EnvironmentVariableProperties, dependsOn?: Value<string>) {
        super('AWS::CodeBuild::EnvironmentVariable', properties, dependsOn)
    }
}