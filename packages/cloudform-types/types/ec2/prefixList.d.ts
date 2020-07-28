import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Entry {
    Cidr: Value<string>;
    Description?: Value<string>;
    constructor(properties: Entry);
}
export interface PrefixListProperties {
    PrefixListName: Value<string>;
    AddressFamily: Value<string>;
    MaxEntries: Value<number>;
    Tags?: List<ResourceTag>;
    Entries?: List<Entry>;
}
export default class PrefixList extends ResourceBase<PrefixListProperties> {
    static Entry: typeof Entry;
    constructor(properties: PrefixListProperties);
}
