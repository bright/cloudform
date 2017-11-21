import { ResourceBase } from '../resource';
import { Value } from '../internal';
import XssMatchTuple from './xssMatchTuple';
export interface XssMatchSetProperties {
    Name: Value<string>;
    XssMatchTuples?: XssMatchTuple[];
}
export default class XssMatchSet extends ResourceBase {
    constructor(properties: XssMatchSetProperties, dependsOn?: Value<string>);
}
