import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface MountTargetProperties {
    FileSystemId: Value<string>
    IpAddress?: Value<string>
    SecurityGroups: Value<string>[]
    SubnetId: Value<string>
}

export default class MountTarget extends ResourceBase {
    constructor(properties: MountTargetProperties, dependsOn?: Value<string>) {
        super('AWS::EFS::MountTarget', properties, dependsOn)
    }
}