import { Link } from "react-router";
import { PUBLIC_ROUTES } from "@/_router/router.config";
import { DI } from "@/application/di/di";
import { ButtonAtom } from "@/ui/components/atoms/button/button.atom";
import { InputAtom } from "@/ui/components/atoms/input/input.atom";
import { useTranslation } from "@/ui/services/i18n/i18n.service";
import styles from "@/ui/styles/views/order.view.module.css";
import { type OrderViewModel, orderViewModel } from "@/ui/view-models/order.vm";

interface Props {
  useViewModel: OrderViewModel;
}

function View({ useViewModel }: Props) {
  const { t } = useTranslation("order");

  const {
    email,
    setEmail,
    createOrder,
    isLoading,
    isError,
    isSuccess,
    isCartEmpty,
    bookTitlesToOrder,
  } = useViewModel();

  return (
    <div>
      {isError && <p>{t("order_error")}</p>}
      {isCartEmpty ? (
        <div>
          {isSuccess ? <p>{t("order_success")}</p> : <p>{t("empty")}</p>}
          <div>
            <Link to={PUBLIC_ROUTES.books()}>{t("select_books")}</Link>
          </div>
        </div>
      ) : (
        <div>
          <ul>
            {bookTitlesToOrder.map((bootTitle) => (
              <li className={styles.li} key={bootTitle}>
                {bootTitle}
              </li>
            ))}
          </ul>
          <div className={styles.formWrap}>
            <InputAtom
              type="email"
              name="email"
              value={email}
              placeholder={t("email")}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ButtonAtom disabled={!email.trim()} onClick={createOrder}>
              {isLoading ? t("submitting") : t("submit")}
            </ButtonAtom>
          </div>
        </div>
      )}
    </div>
  );
}

export const OrderView = DI.withVM<OrderViewModel>(orderViewModel)(View);
