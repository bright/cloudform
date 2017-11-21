import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface MatcherProperties {
    HttpCode?: Value<string>;
}
export default class Matcher extends ResourceBase {
    constructor(properties: MatcherProperties, dependsOn?: Value<string>);
}
