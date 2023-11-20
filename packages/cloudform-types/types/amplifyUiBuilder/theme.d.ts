import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ThemeValue {
    Value?: Value<string>;
    Children?: List<ThemeValues>;
    constructor(properties: ThemeValue);
}
export declare class ThemeValues {
    Value?: ThemeValue;
    Key?: Value<string>;
    constructor(properties: ThemeValues);
}
export interface ThemeProperties {
    AppId?: Value<string>;
    EnvironmentName?: Value<string>;
    Values: List<ThemeValues>;
    Overrides?: List<ThemeValues>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class Theme extends ResourceBase<ThemeProperties> {
    static ThemeValue: typeof ThemeValue;
    static ThemeValues: typeof ThemeValues;
    constructor(properties: ThemeProperties);
}
