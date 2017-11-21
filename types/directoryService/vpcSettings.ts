import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface VpcSettingsProperties {
    SubnetIds: Value<string>[]
    VpcId: Value<string>
}

export default class VpcSettings extends ResourceBase {
    constructor(properties: VpcSettingsProperties, dependsOn?: Value<string>) {
        super('AWS::DirectoryService::VpcSettings', properties, dependsOn)
    }
}