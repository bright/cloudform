import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Bandwidth {
    DownloadSpeed?: Value<number>;
    UploadSpeed?: Value<number>;
    constructor(properties: Bandwidth);
}
export interface LinkProperties {
    SiteId: Value<string>;
    Type?: Value<string>;
    GlobalNetworkId: Value<string>;
    Description?: Value<string>;
    Bandwidth: Bandwidth;
    Tags?: List<ResourceTag>;
    Provider?: Value<string>;
}
export default class Link extends ResourceBase<LinkProperties> {
    static Bandwidth: typeof Bandwidth;
    constructor(properties: LinkProperties);
}
