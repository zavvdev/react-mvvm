import { useSharedTranslation } from "@/_shared/ui/services/i18n/i18n.service";
import { PUBLIC_ROUTES } from "@/__router/router.config";
import styles from "./header.module.css";
import { Link } from "react-router";

interface Props {
  cartItemCount: number;
}

export function Header({ cartItemCount }: Props) {
  const { t } = useSharedTranslation();

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
