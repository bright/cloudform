import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class DataSourceConfiguration {
    IntendedUse?: Value<string>;
    constructor(properties: DataSourceConfiguration);
}
export interface PlaceIndexProperties {
    IndexName: Value<string>;
    Description?: Value<string>;
    PricingPlan?: Value<string>;
    DataSourceConfiguration?: DataSourceConfiguration;
    DataSource: Value<string>;
}
export default class PlaceIndex extends ResourceBase<PlaceIndexProperties> {
    static DataSourceConfiguration: typeof DataSourceConfiguration;
    constructor(properties: PlaceIndexProperties);
}
