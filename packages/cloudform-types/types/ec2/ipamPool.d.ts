import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ProvisionedCidr {
    Cidr: Value<string>;
    constructor(properties: ProvisionedCidr);
}
export interface IPAMPoolProperties {
    AwsService?: Value<string>;
    Locale?: Value<string>;
    PublicIpSource?: Value<string>;
    Description?: Value<string>;
    SourceIpamPoolId?: Value<string>;
    AllocationMinNetmaskLength?: Value<number>;
    IpamScopeId: Value<string>;
    ProvisionedCidrs?: List<ProvisionedCidr>;
    AllocationMaxNetmaskLength?: Value<number>;
    AllocationDefaultNetmaskLength?: Value<number>;
    AutoImport?: Value<boolean>;
    AddressFamily: Value<string>;
    AllocationResourceTags?: List<ResourceTag>;
    PubliclyAdvertisable?: Value<boolean>;
    Tags?: List<ResourceTag>;
}
export default class IPAMPool extends ResourceBase<IPAMPoolProperties> {
    static ProvisionedCidr: typeof ProvisionedCidr;
    constructor(properties: IPAMPoolProperties);
}
