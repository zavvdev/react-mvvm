import styles from "@/ui/components/atoms/cart-book/cart-book.atom.module.css";
import { useTranslation } from "@/ui/services/i18n/i18n.service";

interface Props {
  cover: string;
  title: string;
  author: string;
  price: string;
  onRemoveFromCart: () => void;
}

export function CartBookAtom({
  cover,
  title,
  author,
  price,
  onRemoveFromCart,
}: Props) {
  const { t } = useTranslation("common");

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <img src={cover} alt={title} className={styles.cover} />
        <div>
          <h2 className={styles.title}>{title}</h2>
          <div>
            <i>{author}</i>
            <div className={styles.price}>{price}</div>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={onRemoveFromCart}
        className={styles.removeBtn}
      >
        {t("cart_book.remove")}
      </button>
    </div>
  );
}
