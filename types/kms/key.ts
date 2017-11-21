import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface KeyProperties {
    Description?: Value<string>
    Enabled?: Value<boolean>
    EnableKeyRotation?: Value<boolean>
    KeyPolicy?: any
}

export default class Key extends ResourceBase {
    constructor(properties: KeyProperties, dependsOn?: Value<string>) {
        super('AWS::KMS::Key', properties, dependsOn)
    }
}