import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PresetProperties {
    Category?: Value<string>;
    Description?: Value<string>;
    SettingsJson: {
        [key: string]: any;
    };
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class Preset extends ResourceBase<PresetProperties> {
    constructor(properties: PresetProperties);
}
