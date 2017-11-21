import { ResourceBase } from '../resource';
import { Value } from '../internal';
import CorsRule from './corsRule';
export interface CorsConfigurationProperties {
    CorsRules: CorsRule[];
}
export default class CorsConfiguration extends ResourceBase {
    constructor(properties: CorsConfigurationProperties, dependsOn?: Value<string>);
}
