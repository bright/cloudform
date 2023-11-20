import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class DataQualityTargetTable {
    TableName?: Value<string>;
    DatabaseName?: Value<string>;
    constructor(properties: DataQualityTargetTable);
}
export interface DataQualityRulesetProperties {
    Ruleset?: Value<string>;
    Description?: Value<string>;
    TargetTable?: DataQualityTargetTable;
    ClientToken?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class DataQualityRuleset extends ResourceBase<DataQualityRulesetProperties> {
    static DataQualityTargetTable: typeof DataQualityTargetTable;
    constructor(properties?: DataQualityRulesetProperties);
}
