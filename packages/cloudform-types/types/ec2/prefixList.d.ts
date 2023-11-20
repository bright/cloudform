import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Entry {
    Description?: Value<string>;
    Cidr: Value<string>;
    constructor(properties: Entry);
}
export interface PrefixListProperties {
    MaxEntries: Value<number>;
    PrefixListName: Value<string>;
    Entries?: List<Entry>;
    AddressFamily: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class PrefixList extends ResourceBase<PrefixListProperties> {
    static Entry: typeof Entry;
    constructor(properties: PrefixListProperties);
}
