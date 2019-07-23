import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class SubDomainSetting {
    Prefix: Value<string>;
    BranchName: Value<string>;
    constructor(properties: SubDomainSetting);
}
export interface DomainProperties {
    SubDomainSettings: List<SubDomainSetting>;
    AppId: Value<string>;
    DomainName: Value<string>;
}
export default class Domain extends ResourceBase<DomainProperties> {
    static SubDomainSetting: typeof SubDomainSetting;
    constructor(properties: DomainProperties);
}
