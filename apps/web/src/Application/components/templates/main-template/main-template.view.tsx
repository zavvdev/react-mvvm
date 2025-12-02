import { MainTemplate } from "@react-mvvm/uikit-web/templates/main-template";
import type { PropsWithChildren } from "react";
import { withVM } from "@/application/dependency-context";
import { MainTemplateViewModel, type VM } from "./main-template.vm";

interface Props extends PropsWithChildren {}

export var MainTemplateView = withVM<VM, Props>(MainTemplateViewModel)(
  ({ viewModel, children }) => (
    <MainTemplate menu={viewModel().menu}>{children}</MainTemplate>
  ),
);
