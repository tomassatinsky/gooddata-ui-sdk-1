## API Report File for "@gooddata/sdk-ui-dashboard"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { AnyAction } from '@reduxjs/toolkit';
import { ComponentType } from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { EntityState } from '@reduxjs/toolkit';
import { IAnalyticalBackend } from '@gooddata/sdk-backend-spi';
import { IDashboard } from '@gooddata/sdk-backend-spi';
import { IDashboardAttributeFilter } from '@gooddata/sdk-backend-spi';
import { IDashboardDateFilter } from '@gooddata/sdk-backend-spi';
import { IDashboardFilter } from '@gooddata/sdk-ui-ext';
import { IDashboardLayout } from '@gooddata/sdk-backend-spi';
import { IFilterContext } from '@gooddata/sdk-backend-spi';
import { IInsight } from '@gooddata/sdk-model';
import { ObjRef } from '@gooddata/sdk-model';
import { default as React_2 } from 'react';
import { TypedUseSelectorHook } from 'react-redux';

// @internal (undocumented)
export type CustomAttributeFilter = DashboardAttributeFilterComponent | ((filter: IDashboardAttributeFilter) => DashboardAttributeFilterComponent | undefined);

// @internal (undocumented)
export const Dashboard: React_2.FC<IDashboardProps>;

// @internal
export const DashboardAttributeFilter: React_2.FC<IDashboardAttributeFilter>;

// @internal (undocumented)
export type DashboardAttributeFilterComponent = React_2.ComponentType<IDashboardAttributeFilterProps>;

// @internal (undocumented)
export const DashboardButtonBar: React_2.FC<IDashboardButtonBarProps & IDefaultButtonBarProps>;

// @internal (undocumented)
export type DashboardButtonBarComponent = ComponentType<IDashboardButtonBarProps>;

// @internal (undocumented)
export type DashboardCommands = LoadDashboard;

// @internal
export type DashboardCommandType = "GDC.DASHBOARD.CMD.LOAD";

// @internal
export type DashboardContext = {
    backend: IAnalyticalBackend;
    workspace: string;
    dashboardRef?: ObjRef;
};

// @internal
export const DashboardDateFilter: React_2.FC<IDashboardDateFilterProps>;

// @internal (undocumented)
export type DashboardDateFilterComponent = React_2.ComponentType<IDashboardDateFilterProps>;

// @internal
export type DashboardDispatch = Dispatch<AnyAction>;

// @internal
export type DashboardEventHandler = {
    eval: (type: DashboardEventType) => boolean;
    handler: (event: DashboardEvents) => void;
};

// @internal (undocumented)
export type DashboardEvents = DashboardLoaded;

// @internal (undocumented)
export type DashboardEventType = "GDC.DASHBOARD.EVT.LOADED";

// @internal
export interface DashboardLoaded extends IDashboardEvent {
    // (undocumented)
    payload: {
        dashboard: IDashboard;
        insights: IInsight[];
    };
    // (undocumented)
    type: "GDC.DASHBOARD.EVT.LOADED";
}

// @internal
export const DashboardMenuButton: React_2.FC<IDashboardMenuButtonProps & IDefaultMenuButtonProps>;

// @internal (undocumented)
export type DashboardMenuButtonComponent = ComponentType<IDashboardMenuButtonProps>;

// @internal
export type DashboardState = {
    loading: LoadingState;
    filterContext: FilterContextState;
    layout: LayoutState;
    insights: EntityState<IInsight>;
};

// @internal (undocumented)
export const DashboardTitle: React_2.FC<IDashboardTitleProps>;

// @internal (undocumented)
export type DashboardTitleComponent = ComponentType<IDashboardTitleProps>;

// @internal (undocumented)
export const FilterBar: React_2.FC<IFilterBarProps & IDefaultFilterBarProps>;

// @internal (undocumented)
export type FilterBarComponent = ComponentType<IFilterBarProps>;

// @internal
export const filterContextSelector: import("@reduxjs/toolkit").OutputSelector<DashboardState, import("@gooddata/sdk-backend-spi").IFilterContext, (res: import("./filterContextState").FilterContextState) => import("@gooddata/sdk-backend-spi").IFilterContext>;

// @internal (undocumented)
export interface FilterContextState {
    // (undocumented)
    filterContext?: IFilterContext;
}

// @internal
export const HiddenDashboardAttributeFilter: React_2.FC<IDashboardAttributeFilter>;

// @internal
export const HiddenDashboardDateFilter: React_2.FC<IDashboardDateFilterProps>;

// @internal
export const HiddenFilterBar: React_2.FC<IFilterBarProps>;

// @internal
export interface IDashboardAttributeFilterProps {
    filter: IDashboardAttributeFilter;
    onFilterChanged: (filter: IDashboardAttributeFilter) => void;
}

// @internal
export interface IDashboardButtonBarProps {
    // (undocumented)
    onButtonClicked: (buttonId: string) => void;
    // (undocumented)
    onButtonHover: (buttonId: string) => void;
}

// @internal
export interface IDashboardCommand {
    correlationId?: string;
    type: DashboardCommandType;
}

// @internal
export interface IDashboardDateFilterProps {
    filter: IDashboardDateFilter;
    onFilterChanged: (filter: IDashboardDateFilter) => void;
}

// @internal
export interface IDashboardEvent {
    readonly correlationId?: string;
    readonly ctx: DashboardContext;
    readonly type: DashboardEventType;
}

// @internal (undocumented)
export interface IDashboardMenuButtonProps {
    // (undocumented)
    onMenuItemClicked: (itemId: string) => void;
    // (undocumented)
    onMenuItemHover: (itemId: string) => void;
}

// @internal (undocumented)
export interface IDashboardProps {
    backend?: IAnalyticalBackend;
    // (undocumented)
    children?: JSX.Element | ((dashboard: any) => JSX.Element);
    dashboardLayoutConfig?: {
        Component?: any;
        defaultComponentProps?: any;
    };
    dashboardRef?: ObjRef;
    eventHandlers?: DashboardEventHandler[];
    filterBarConfig?: {
        Component?: FilterBarComponent;
        defaultComponentProps?: IDefaultFilterBarProps;
    };
    topBarConfig?: {
        Component?: TopBarComponent;
        defaultComponentProps?: IDefaultTopBarProps;
    };
    workspace?: string;
}

// @internal (undocumented)
export interface IDashboardTitleProps {
    onTitleClicked: () => void;
    title: string;
}

// @internal (undocumented)
export interface IDefaultButtonBarProps {
}

// @internal (undocumented)
export interface IDefaultFilterBarProps {
    // (undocumented)
    attributeFilterConfig?: {
        Component?: CustomAttributeFilter;
    };
    // (undocumented)
    dateFilterConfig?: {
        Component?: DashboardDateFilterComponent;
    };
}

// @internal (undocumented)
export interface IDefaultMenuButtonProps {
    AdditionalMenuItems?: [number, MenuButtonItem][];
    ButtonComponent?: React_2.FC;
    MenuItems?: MenuButtonItem[];
}

// @internal
export interface IDefaultTopBarProps {
    // (undocumented)
    buttonBarConfig?: {
        Component?: DashboardButtonBarComponent;
        placement?: "left" | "right";
        order?: number;
        defaultComponentProps?: IDefaultButtonBarProps;
    };
    menuButtonConfig?: {
        Component?: DashboardMenuButtonComponent;
        placement?: "left" | "right";
        order?: number;
        defaultComponentProps?: IDefaultMenuButtonProps;
    };
    // (undocumented)
    titleConfig?: {
        Component?: DashboardTitleComponent;
        placement?: "left" | "right";
        order?: number;
    };
}

// @internal (undocumented)
export interface IFilterBarProps {
    filters: IDashboardFilter[];
    onFilterChanged: (filter: IDashboardFilter) => void;
}

// @internal
export const insightsSelector: (state: DashboardState) => import("@gooddata/sdk-model").IInsight[];

// @internal (undocumented)
export interface ITopBarProps {
    // (undocumented)
    title: string;
}

// @internal
export const layoutSelector: import("@reduxjs/toolkit").OutputSelector<DashboardState, import("@gooddata/sdk-backend-spi").IDashboardLayout<import("@gooddata/sdk-backend-spi").DashboardWidget>, (res: LayoutState) => import("@gooddata/sdk-backend-spi").IDashboardLayout<import("@gooddata/sdk-backend-spi").DashboardWidget>>;

// @internal (undocumented)
export interface LayoutState {
    // (undocumented)
    layout?: IDashboardLayout;
}

// @internal
export interface LoadDashboard extends IDashboardCommand {
    // (undocumented)
    type: "GDC.DASHBOARD.CMD.LOAD";
}

// @internal
export function loadDashboard(correlationId?: string): LoadDashboard;

// @internal (undocumented)
export const loadingSelector: import("@reduxjs/toolkit").OutputSelector<DashboardState, import("./loadingState").LoadingState, (res: DashboardState) => import("./loadingState").LoadingState>;

// @internal (undocumented)
export type LoadingState = {
    loading: boolean;
    result?: boolean;
    error?: Error;
};

// @internal (undocumented)
export type MenuButtonItem = {
    itemId: string;
    itemName: string;
    callback: () => void;
};

// @internal (undocumented)
export const NoTopBar: React_2.FC<ITopBarProps>;

// @internal (undocumented)
export const TopBar: React_2.FC<ITopBarProps & IDefaultTopBarProps>;

// @internal (undocumented)
export type TopBarComponent = ComponentType<ITopBarProps>;

// @internal (undocumented)
export const useDashboardDispatch: () => Dispatch<AnyAction>;

// @internal (undocumented)
export const useDashboardSelector: TypedUseSelectorHook<DashboardState>;


// (No @packageDocumentation comment for this package)

```