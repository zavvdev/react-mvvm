import { MainTemplate } from "@react-mvvm/uikit-web/templates/main-template";
import type { PropsWithChildren } from "react";
import { withVM } from "@/application/dependency-context";
import { MainTemplateViewModel, type ViewModel } from "./main-template.vm";

interface Props extends PropsWithChildren {}

export var MainTemplateView = withVM<ViewModel, Props>(
  () => MainTemplateViewModel,
)(({ useViewModel, children }) => (
  <MainTemplate menu={useViewModel().menu}>{children}</MainTemplate>
));
