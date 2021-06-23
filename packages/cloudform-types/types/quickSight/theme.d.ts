import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Font {
    FontFamily?: Value<string>;
    constructor(properties: Font);
}
export declare class BorderStyle {
    Show?: Value<boolean>;
    constructor(properties: BorderStyle);
}
export declare class TileStyle {
    Border?: BorderStyle;
    constructor(properties: TileStyle);
}
export declare class ResourcePermission {
    Actions: List<Value<string>>;
    Principal: Value<string>;
    constructor(properties: ResourcePermission);
}
export declare class MarginStyle {
    Show?: Value<boolean>;
    constructor(properties: MarginStyle);
}
export declare class GutterStyle {
    Show?: Value<boolean>;
    constructor(properties: GutterStyle);
}
export declare class DataColorPalette {
    EmptyFillColor?: Value<string>;
    Colors?: List<Value<string>>;
    MinMaxGradient?: List<Value<string>>;
    constructor(properties: DataColorPalette);
}
export declare class ThemeConfiguration {
    DataColorPalette?: DataColorPalette;
    UIColorPalette?: UIColorPalette;
    Sheet?: SheetStyle;
    Typography?: Typography;
    constructor(properties: ThemeConfiguration);
}
export declare class UIColorPalette {
    Warning?: Value<string>;
    Accent?: Value<string>;
    AccentForeground?: Value<string>;
    SecondaryBackground?: Value<string>;
    DangerForeground?: Value<string>;
    PrimaryBackground?: Value<string>;
    Dimension?: Value<string>;
    SecondaryForeground?: Value<string>;
    WarningForeground?: Value<string>;
    DimensionForeground?: Value<string>;
    PrimaryForeground?: Value<string>;
    Success?: Value<string>;
    Danger?: Value<string>;
    SuccessForeground?: Value<string>;
    Measure?: Value<string>;
    MeasureForeground?: Value<string>;
    constructor(properties: UIColorPalette);
}
export declare class SheetStyle {
    TileLayout?: TileLayoutStyle;
    Tile?: TileStyle;
    constructor(properties: SheetStyle);
}
export declare class TileLayoutStyle {
    Gutter?: GutterStyle;
    Margin?: MarginStyle;
    constructor(properties: TileLayoutStyle);
}
export declare class Typography {
    FontFamilies?: List<Font>;
    constructor(properties: Typography);
}
export interface ThemeProperties {
    AwsAccountId: Value<string>;
    BaseThemeId?: Value<string>;
    Configuration?: ThemeConfiguration;
    Name?: Value<string>;
    Permissions?: List<ResourcePermission>;
    Tags?: List<ResourceTag>;
    ThemeId: Value<string>;
    VersionDescription?: Value<string>;
}
export default class Theme extends ResourceBase<ThemeProperties> {
    static Font: typeof Font;
    static BorderStyle: typeof BorderStyle;
    static TileStyle: typeof TileStyle;
    static ResourcePermission: typeof ResourcePermission;
    static MarginStyle: typeof MarginStyle;
    static GutterStyle: typeof GutterStyle;
    static DataColorPalette: typeof DataColorPalette;
    static ThemeConfiguration: typeof ThemeConfiguration;
    static UIColorPalette: typeof UIColorPalette;
    static SheetStyle: typeof SheetStyle;
    static TileLayoutStyle: typeof TileLayoutStyle;
    static Typography: typeof Typography;
    constructor(properties: ThemeProperties);
}
