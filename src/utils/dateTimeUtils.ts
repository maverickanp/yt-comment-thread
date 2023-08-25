import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const publishedDateFormatted = (date: Date) => {
  return format(date, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });
};

export const publishedDateRelativeToNow = (date: Date) => {
  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
};
