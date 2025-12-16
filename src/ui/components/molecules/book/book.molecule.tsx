import { ButtonAtom } from "@/ui/components/atoms/button/button.atom";
import styles from "@/ui/components/molecules/book/book.molecule.module.css";
import { useTranslation } from "@/ui/services/i18n/i18n.service";

interface Props {
  title: string;
  author: string;
  date: string;
  price: string;
  cover: string;
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
  isInCart: boolean;
}

export function BookMolecule({
  title,
  author,
  date,
  price,
  cover,
  onAddToCart,
  onRemoveFromCart,
  isInCart,
}: Props) {
  const { t } = useTranslation("common");

  return (
    <div className={styles.root}>
      <img src={cover} alt={title} className={styles.cover} />
      <div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.infoWrap}>
          <i>{date}, </i>
          <span>
            {t("book_item.author", {
              author,
            })}
          </span>
        </div>
        <div className={styles.price}>{price}</div>
        <ButtonAtom
          className={styles.addToCartBtn}
          onClick={isInCart ? onRemoveFromCart : onAddToCart}
        >
          {isInCart
            ? t("book_item.already_in_cart")
            : t("book_item.add_to_cart")}
        </ButtonAtom>
      </div>
    </div>
  );
}
