import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface PushSyncProperties {
    ApplicationArns?: Value<string>[]
    RoleArn?: Value<string>
}

export default class PushSync extends ResourceBase {
    constructor(properties: PushSyncProperties, dependsOn?: Value<string>) {
        super('AWS::Cognito::PushSync', properties, dependsOn)
    }
}