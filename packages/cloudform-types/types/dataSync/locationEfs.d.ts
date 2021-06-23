import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Ec2Config {
    SecurityGroupArns: List<Value<string>>;
    SubnetArn: Value<string>;
    constructor(properties: Ec2Config);
}
export interface LocationEFSProperties {
    Ec2Config: Ec2Config;
    EfsFilesystemArn: Value<string>;
    Subdirectory?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class LocationEFS extends ResourceBase<LocationEFSProperties> {
    static Ec2Config: typeof Ec2Config;
    constructor(properties: LocationEFSProperties);
}
