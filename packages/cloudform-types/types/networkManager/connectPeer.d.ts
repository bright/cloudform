import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BgpOptions {
    PeerAsn?: Value<number>;
    constructor(properties: BgpOptions);
}
export declare class ConnectPeerBgpConfiguration {
    PeerAddress?: Value<string>;
    CoreNetworkAddress?: Value<string>;
    PeerAsn?: Value<number>;
    CoreNetworkAsn?: Value<number>;
    constructor(properties: ConnectPeerBgpConfiguration);
}
export declare class ConnectPeerConfiguration {
    BgpConfigurations?: List<ConnectPeerBgpConfiguration>;
    PeerAddress?: Value<string>;
    CoreNetworkAddress?: Value<string>;
    InsideCidrBlocks?: List<Value<string>>;
    Protocol?: Value<string>;
    constructor(properties: ConnectPeerConfiguration);
}
export interface ConnectPeerProperties {
    ConnectAttachmentId: Value<string>;
    PeerAddress: Value<string>;
    SubnetArn?: Value<string>;
    CoreNetworkAddress?: Value<string>;
    BgpOptions?: BgpOptions;
    InsideCidrBlocks?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class ConnectPeer extends ResourceBase<ConnectPeerProperties> {
    static BgpOptions: typeof BgpOptions;
    static ConnectPeerBgpConfiguration: typeof ConnectPeerBgpConfiguration;
    static ConnectPeerConfiguration: typeof ConnectPeerConfiguration;
    constructor(properties: ConnectPeerProperties);
}
