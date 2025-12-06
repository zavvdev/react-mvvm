import { MainTemplate } from "@react-mvvm/uikit-web/templates/main-template";
import type { PropsWithChildren } from "react";
import { withVM } from "@/core/dependency-context";
import { mainTemplateViewModel, type ViewModel } from "./main-template.vm";

interface Props extends PropsWithChildren {
  useViewModel: ViewModel;
}

var View = ({ useViewModel, children }: Props) => (
  <MainTemplate menu={useViewModel().menu}>{children}</MainTemplate>
);

export var MainTemplateView = withVM<ViewModel>(mainTemplateViewModel)(View);
