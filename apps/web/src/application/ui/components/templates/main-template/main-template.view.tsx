import { MainTemplate as MainTemplate_ } from "@react-mvvm/uikit-web/templates/main-template";
import type { PropsWithChildren } from "react";
import { useNavigate } from "react-router";
import { PUBLIC_ROUTES } from "@/router";

export const MainTemplate = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();

  return (
    <MainTemplate_
      menu={[
        {
          id: "posts",
          label: "Posts",
          isVisible: true,
          onClick: () => navigate(PUBLIC_ROUTES.posts()),
        },
      ]}
    >
      {children}
    </MainTemplate_>
  );
};
