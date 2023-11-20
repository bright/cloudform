import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VpcInformation {
    SecurityGroupIds: List<Value<string>>;
    constructor(properties: VpcInformation);
}
export interface ConnectorProperties {
    CertificateAuthorityArn: Value<string>;
    DirectoryId: Value<string>;
    VpcInformation: VpcInformation;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Connector extends ResourceBase<ConnectorProperties> {
    static VpcInformation: typeof VpcInformation;
    constructor(properties: ConnectorProperties);
}
