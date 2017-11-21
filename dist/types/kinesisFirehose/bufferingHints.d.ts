import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface BufferingHintsProperties {
    IntervalInSeconds?: Value<number>;
    SizeInMBs?: Value<number>;
}
export default class BufferingHints extends ResourceBase {
    constructor(properties: BufferingHintsProperties, dependsOn?: Value<string>);
}
