import { DI } from "@/application/di/di";
import { booksViewModel, type BooksViewModel } from "@/ui/view-models/books.vm";
import { useTranslation } from "@/ui/services/i18n/i18n.service";

interface Props {
  useViewModel: BooksViewModel;
}

function View({ useViewModel }: Props) {
  const { books, isLoading, isError } = useViewModel();
  const { t } = useTranslation("common");

  return (
    <div>
      {isLoading && <p>{t("labels.loading")}</p>}
      {isError && <p>{t("errors.unexpected")}</p>}
      {!isLoading && !isError && (
        <div>
          {books.map((book) => (
            <div key={book.id} style={{ marginBottom: "1rem" }}>
              <h2>{book.title}</h2>
              <p>
                {t("labels.author")}: {book.author}
              </p>
              <p>
                {t("labels.date")}: {book.date}
              </p>
              <img
                src={book.coverUrl}
                alt={book.title}
                style={{ width: "150px", height: "200px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export const BooksView = DI.withVM<BooksViewModel>(booksViewModel)(View);
