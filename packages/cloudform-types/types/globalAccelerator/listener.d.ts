import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class PortRange {
    FromPort: Value<number>;
    ToPort: Value<number>;
    constructor(properties: PortRange);
}
export interface ListenerProperties {
    AcceleratorArn: Value<string>;
    PortRanges: List<PortRange>;
    Protocol: Value<string>;
    ClientAffinity?: Value<string>;
}
export default class Listener extends ResourceBase<ListenerProperties> {
    static PortRange: typeof PortRange;
    constructor(properties: ListenerProperties);
}
