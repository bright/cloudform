import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class IncludedProperty {
    Name: Value<string>;
    constructor(properties: IncludedProperty);
}
export declare class SearchFilter {
    FilterString: Value<string>;
    constructor(properties: SearchFilter);
}
export declare class Filters {
    FilterString: Value<string>;
    constructor(properties: Filters);
}
export interface ViewProperties {
    Filters?: SearchFilter;
    IncludedProperties?: List<IncludedProperty>;
    Tags?: {
        [key: string]: Value<string>;
    };
    ViewName: Value<string>;
}
export default class View extends ResourceBase<ViewProperties> {
    static IncludedProperty: typeof IncludedProperty;
    static SearchFilter: typeof SearchFilter;
    static Filters: typeof Filters;
    constructor(properties: ViewProperties);
}
