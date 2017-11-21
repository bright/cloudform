import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Period = "*" | "DAY" | "WEEK" | "MONTH";
export interface QuotaProperties {
    Limit?: Value<number>;
    Offset?: Value<number>;
    Period?: Value<Period>;
}
export default class Quota extends ResourceBase {
    constructor(properties: QuotaProperties, dependsOn?: Value<string>);
}
