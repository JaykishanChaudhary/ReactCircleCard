import powerbi from "powerbi-visuals-api";
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import "./../style/visual.less";
export declare class Visual implements IVisual {
    private formattingSettings;
    private formattingSettingsService;
    private viewport;
    private target;
    private reactRoot;
    constructor(options: VisualConstructorOptions);
    getFormattingModel(): powerbi.visuals.FormattingModel;
    update(options: VisualUpdateOptions): void;
    private clear;
}
