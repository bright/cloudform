import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class DataSourceConfiguration {
    IntendedUse?: Value<string>;
    constructor(properties: DataSourceConfiguration);
}
export interface PlaceIndexProperties {
    DataSource: Value<string>;
    DataSourceConfiguration?: DataSourceConfiguration;
    Description?: Value<string>;
    IndexName: Value<string>;
    PricingPlan: Value<string>;
}
export default class PlaceIndex extends ResourceBase<PlaceIndexProperties> {
    static DataSourceConfiguration: typeof DataSourceConfiguration;
    constructor(properties: PlaceIndexProperties);
}
