import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AppProperties {
    Tags?: {
        [key: string]: any;
    };
    Name: Value<string>;
}
export default class App extends ResourceBase<AppProperties> {
    constructor(properties: AppProperties);
}
