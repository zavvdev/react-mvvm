import "@react-mvvm/uikit-web/styles.css";
import { MainTemplateView } from "@/application/components/templates/main-template/main-template.view";
import { DependenciesContext } from "@/application/dependency-context";
import { Router } from "@/application/router";
import type { CoreDependencies } from "@/core/bootstrap";

interface ApplicationViewProps {
  dependencies: CoreDependencies;
}

export var ApplicationView = ({ dependencies }: ApplicationViewProps) => (
  <DependenciesContext.Provider value={dependencies}>
    <MainTemplateView>
      <Router />
    </MainTemplateView>
  </DependenciesContext.Provider>
);
