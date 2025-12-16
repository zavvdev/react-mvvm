import { Link } from "react-router";
import { PUBLIC_ROUTES } from "@/_router/router.config";
import styles from "@/ui/components/atoms/header/header.atom.module.css";
import { useTranslation } from "@/ui/services/i18n/i18n.service";

interface Props {
  cartItemCount: number;
}

export function HeaderAtom({ cartItemCount }: Props) {
  const { t } = useTranslation("common");

  return (
    <div className={styles.root}>
      <Link className={styles.logo} to={PUBLIC_ROUTES.books()}>
        <span>{t("app_name")}</span>
      </Link>
      <Link to={PUBLIC_ROUTES.cart()}>
        {t("app_header.cart", {
          count: cartItemCount,
        })}
      </Link>
    </div>
  );
}
