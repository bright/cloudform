import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PortRange {
    FromPort: Value<number>;
    ToPort: Value<number>;
    constructor(properties: PortRange);
}
export interface ListenerProperties {
    PortRanges: List<PortRange>;
    AcceleratorArn: Value<string>;
    Protocol: Value<string>;
    ClientAffinity?: Value<string>;
}
export default class Listener extends ResourceBase<ListenerProperties> {
    static PortRange: typeof PortRange;
    constructor(properties: ListenerProperties);
}
