import { CasaSoleCompanion } from "../../CasaSoleCompanion";
import { normalizeLanguage } from "../../../content/i18n";

export default async function SharmHillsEnglishPage({
  searchParams,
}: {
  searchParams?: Promise<{ lang?: string }>;
}) {
  const params = await searchParams;
  return <CasaSoleCompanion lang={normalizeLanguage(params?.lang)} />;
}
