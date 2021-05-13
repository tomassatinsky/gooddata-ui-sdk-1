// (C) 2007-2019 GoodData Corporation

import { UnboundVisProps, CustomizedScenario } from "../../../src";
import { ILegendConfig, IBucketChartProps } from "@gooddata/sdk-ui-charts";
import { IResponsiveSize } from "./responsiveScenarios";

export const legendResponsiveSizeVariants: Array<IResponsiveSize> = [
    { label: "Force position TOP, max 1 row, Gradient legend minimized", width: 180, height: 154 },
    { label: "Force position TOP, max 1 row, Gradient legend minimized", width: 260, height: 154 },
    { label: "Force position TOP, max 2 rows, Gradient legend minimized", width: 180, height: 300 },
    { label: "Force position TOP, max 1 row, Gradient legend normal", width: 440, height: 154 },
    { label: "Force position RIGHT", width: 610, height: 154 },
    { label: "Position respects configuration, max 1 row for TOP/BOTTOM", width: 610, height: 194 },
    { label: "Position respects configuration, max 2 row for TOP/BOTTOM", width: 610, height: 274 },
    {
        label: "Position respects configuration, map legend fits into 1 row for TOP/BOTTOM",
        width: 650,
        height: 354,
    },
];

const legendVariants: Array<[string, ILegendConfig]> = [
    ["legend on top", { position: "top", responsive: "autoPositionWithPopup" }],
    ["legend at bottom", { position: "bottom", responsive: "autoPositionWithPopup" }],
    ["legend on left", { position: "left", responsive: "autoPositionWithPopup" }],
    ["legend on right", { position: "right", responsive: "autoPositionWithPopup" }],
    ["auto legend", { position: "auto", responsive: "autoPositionWithPopup" }],
];

export function legendResponsiveVariants<T extends IBucketChartProps>(
    baseName: string,
    baseProps: UnboundVisProps<T>,
): Array<CustomizedScenario<T>> {
    return legendVariants.map(([variantName, legendConfig]) => {
        return [
            `${baseName} - ${variantName}`,
            { ...baseProps, config: { ...baseProps.config, legend: legendConfig } },
        ];
    });
}
