import { MainTemplate } from "@react-mvvm/uikit-web/templates/main-template";
import type { PropsWithChildren } from "react";
import { withVM } from "@/core/dependency-context";
import { mainTemplateViewModel, type ViewModel } from "./main-template.vm";

interface ViewDependencies {
  useViewModel: ViewModel;
}

type Props = PropsWithChildren;

export var View = ({ useViewModel, children }: ViewDependencies & Props) => (
  <MainTemplate menu={useViewModel().menu}>{children}</MainTemplate>
);

export var MainTemplateView = withVM<ViewModel, Props>(mainTemplateViewModel)(
  View,
);
