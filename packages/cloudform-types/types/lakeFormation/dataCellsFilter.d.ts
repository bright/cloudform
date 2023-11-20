import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ColumnWildcard {
    ExcludedColumnNames?: List<Value<string>>;
    constructor(properties: ColumnWildcard);
}
export declare class RowFilter {
    AllRowsWildcard?: {
        [key: string]: any;
    };
    FilterExpression?: Value<string>;
    constructor(properties: RowFilter);
}
export interface DataCellsFilterProperties {
    TableName: Value<string>;
    ColumnNames?: List<Value<string>>;
    RowFilter?: RowFilter;
    DatabaseName: Value<string>;
    TableCatalogId: Value<string>;
    Name: Value<string>;
    ColumnWildcard?: ColumnWildcard;
}
export default class DataCellsFilter extends ResourceBase<DataCellsFilterProperties> {
    static ColumnWildcard: typeof ColumnWildcard;
    static RowFilter: typeof RowFilter;
    constructor(properties: DataCellsFilterProperties);
}
