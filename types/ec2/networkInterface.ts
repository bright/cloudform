import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Ipv6Addresse from './ipv6Addresse'
import PrivateIpAddresse from './privateIpAddresse'



export interface NetworkInterfaceProperties {
    AssociatePublicIpAddress?: Value<boolean>
    DeleteOnTermination?: Value<boolean>
    Description?: Value<string>
    DeviceIndex: Value<string>
    Groups?: Value<string>[]
    Ipv6AddressCount?: Value<number>
    Ipv6Addresses?: Ipv6Addresse[]
    NetworkInterfaceId: Value<string>
    PrivateIpAddress?: Value<string>
    PrivateIpAddresses?: PrivateIpAddresse[]
    SecondaryPrivateIpAddressCount?: Value<number>
    SubnetId?: Value<string>
}

export default class NetworkInterface extends ResourceBase {
    constructor(properties: NetworkInterfaceProperties, dependsOn?: Value<string>) {
        super('AWS::EC2::NetworkInterface', properties, dependsOn)
    }
}