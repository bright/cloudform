import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface PermissionProperties {
    Action: Value<string>
    FunctionName: Value<string>
    Principal: Value<string>
    SourceAccount?: Value<string>
    SourceArn?: Value<string>
}

export default class Permission extends ResourceBase {
    constructor(properties: PermissionProperties, dependsOn?: Value<string>) {
        super('AWS::Lambda::Permission', properties, dependsOn)
    }
}