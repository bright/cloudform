import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SeriesProperties {
    RunDefinition: {
        [key: string]: any;
    };
    State: Value<string>;
    PersistentConfigurationId: Value<string>;
    Name?: Value<string>;
}
export default class Series extends ResourceBase<SeriesProperties> {
    constructor(properties: SeriesProperties);
}
