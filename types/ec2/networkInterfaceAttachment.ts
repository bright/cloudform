import {ResourceBase} from '../resource'
import {Value} from '../internal'




export interface NetworkInterfaceAttachmentProperties {
    DeleteOnTermination?: Value<boolean>
    DeviceIndex: Value<string>
    InstanceId: Value<string>
    NetworkInterfaceId: Value<string>
}

export default class NetworkInterfaceAttachment extends ResourceBase {
    constructor(properties: NetworkInterfaceAttachmentProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::NetworkInterfaceAttachment', properties, dependsOn)
    }
}