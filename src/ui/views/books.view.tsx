import { DI } from "@/application/di/di";
import { BookMolecule } from "@/ui/components/molecules/book/book.molecule";
import { useTranslation } from "@/ui/services/i18n/i18n.service";
import { type BooksViewModel, booksViewModel } from "@/ui/view-models/books.vm";

interface Props {
  useViewModel: BooksViewModel;
}

function View({ useViewModel }: Props) {
  const { t } = useTranslation("common");

  const { books, isLoading, isError, onAddToCart, onRemoveFromCart, isInCart } =
    useViewModel();

  return (
    <div>
      {isLoading && <p>{t("labels.loading")}</p>}
      {isError && <p>{t("errors.unexpected")}</p>}
      {!isLoading && !isError && (
        <div>
          {books.map((book) => (
            <BookMolecule
              key={book.id}
              title={book.title}
              author={book.author.name}
              date={book.date}
              price={book.price}
              cover={book.cover}
              onAddToCart={() => onAddToCart(book)}
              onRemoveFromCart={() => onRemoveFromCart(book.id)}
              isInCart={isInCart(book.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// You can skip ViewModel generic here if no custom props are needed for View
export const BooksView = DI.withVM(booksViewModel)(View);
