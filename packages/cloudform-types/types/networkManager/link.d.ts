import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Bandwidth {
    DownloadSpeed?: Value<number>;
    UploadSpeed?: Value<number>;
    constructor(properties: Bandwidth);
}
export interface LinkProperties {
    GlobalNetworkId: Value<string>;
    SiteId: Value<string>;
    Bandwidth: Bandwidth;
    Provider?: Value<string>;
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    Type?: Value<string>;
}
export default class Link extends ResourceBase<LinkProperties> {
    static Bandwidth: typeof Bandwidth;
    constructor(properties: LinkProperties);
}
