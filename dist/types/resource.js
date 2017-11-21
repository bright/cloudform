"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResourceBase {
    constructor(Type, Properties, DependsOn) {
        this.Type = Type;
        this.Properties = Properties;
        this.DependsOn = DependsOn;
    }
}
exports.ResourceBase = ResourceBase;
class ResourceTag {
    constructor(Key, Value) {
        this.Key = Key;
        this.Value = Value;
    }
}
exports.ResourceTag = ResourceTag;
