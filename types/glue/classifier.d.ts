import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class XMLClassifier {
    RowTag: Value<string>;
    Classification: Value<string>;
    Name?: Value<string>;
    constructor(properties: XMLClassifier);
}
export declare class GrokClassifier {
    CustomPatterns?: Value<string>;
    GrokPattern: Value<string>;
    Classification: Value<string>;
    Name?: Value<string>;
    constructor(properties: GrokClassifier);
}
export declare class JsonClassifier {
    JsonPath: Value<string>;
    Name?: Value<string>;
    constructor(properties: JsonClassifier);
}
export interface ClassifierProperties {
    XMLClassifier?: XMLClassifier;
    JsonClassifier?: JsonClassifier;
    GrokClassifier?: GrokClassifier;
}
export default class Classifier extends ResourceBase {
    static XMLClassifier: typeof XMLClassifier;
    static GrokClassifier: typeof GrokClassifier;
    static JsonClassifier: typeof JsonClassifier;
    constructor(properties?: ClassifierProperties);
}
