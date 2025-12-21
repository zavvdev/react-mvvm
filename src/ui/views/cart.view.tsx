import { Link, useNavigate } from "react-router";
import { PUBLIC_ROUTES } from "@/_router/router.config";
import { DI } from "@/application/di/di";
import { ButtonAtom } from "@/ui/components/atoms/button/button.atom";
import { CartBookAtom } from "@/ui/components/atoms/cart-book/cart-book.atom";
import { useTranslation } from "@/ui/services/i18n/i18n.service";
import styles from "@/ui/styles/views/cart.view.module.css";
import { type CartViewModel, cartViewModel } from "@/ui/view-models/cart.vm";

interface Props {
  useViewModel: CartViewModel;
}

function View({ useViewModel }: Props) {
  const { t } = useTranslation("cart");
  const navigate = useNavigate();
  const { isEmpty, removeBook, books } = useViewModel();

  return (
    <div>
      {isEmpty ? (
        <>
          <p>{t("empty")}</p>
          <p>
            <Link to={PUBLIC_ROUTES.books()}>{t("add_books")}</Link>
          </p>
        </>
      ) : (
        <div>
          <div className={styles.selectMore}>
            <Link to={PUBLIC_ROUTES.books()}>{t("select_more")}</Link>
          </div>
          {books.map((book) => (
            <CartBookAtom
              key={book.id}
              cover={book.cover}
              title={book.title}
              author={book.author.name}
              price={book.price}
              onRemoveFromCart={() => removeBook(book.id)}
            />
          ))}
          <ButtonAtom fullWidth onClick={() => navigate(PUBLIC_ROUTES.order())}>
            {t("order")}
          </ButtonAtom>
        </div>
      )}
    </div>
  );
}

// You can skip ViewModel generic here if no custom props are needed for View
export const CartView = DI.withVM(cartViewModel)(View);
