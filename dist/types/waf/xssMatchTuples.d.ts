import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface XssMatchTuplesProperties {
    FieldToMatch: any;
    TextTransformation: Value<string>;
}
export default class XssMatchTuples extends ResourceBase {
    constructor(properties: XssMatchTuplesProperties, dependsOn?: Value<string>);
}
