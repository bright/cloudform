"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIColorPalette = exports.Typography = exports.TileStyle = exports.TileLayoutStyle = exports.ThemeVersion = exports.ThemeError = exports.ThemeConfiguration = exports.SheetStyle = exports.ResourcePermission = exports.MarginStyle = exports.GutterStyle = exports.Font = exports.DataColorPalette = exports.BorderStyle = void 0;
const resource_1 = require("../resource");
class BorderStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BorderStyle = BorderStyle;
class DataColorPalette {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.DataColorPalette = DataColorPalette;
class Font {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Font = Font;
class GutterStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GutterStyle = GutterStyle;
class MarginStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MarginStyle = MarginStyle;
class ResourcePermission {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ResourcePermission = ResourcePermission;
class SheetStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SheetStyle = SheetStyle;
class ThemeConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ThemeConfiguration = ThemeConfiguration;
class ThemeError {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ThemeError = ThemeError;
class ThemeVersion {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ThemeVersion = ThemeVersion;
class TileLayoutStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TileLayoutStyle = TileLayoutStyle;
class TileStyle {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TileStyle = TileStyle;
class Typography {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Typography = Typography;
class UIColorPalette {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.UIColorPalette = UIColorPalette;
class Theme extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::QuickSight::Theme', properties);
    }
}
exports.default = Theme;
Theme.BorderStyle = BorderStyle;
Theme.DataColorPalette = DataColorPalette;
Theme.Font = Font;
Theme.GutterStyle = GutterStyle;
Theme.MarginStyle = MarginStyle;
Theme.ResourcePermission = ResourcePermission;
Theme.SheetStyle = SheetStyle;
Theme.ThemeConfiguration = ThemeConfiguration;
Theme.ThemeError = ThemeError;
Theme.ThemeVersion = ThemeVersion;
Theme.TileLayoutStyle = TileLayoutStyle;
Theme.TileStyle = TileStyle;
Theme.Typography = Typography;
Theme.UIColorPalette = UIColorPalette;
