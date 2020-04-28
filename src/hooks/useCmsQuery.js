import { useCookies } from "react-cookie";
import { useLocale } from "../components/LocaleContext";
import { useQuery } from "@apollo/react-hooks";

function useCmsQuery(query, variables = {}, opts = {}) {
  // getting CMS preview cookie
  const previewCookie = "io.prismic.preview";
  const [cookies] = useCookies([previewCookie]);
  const prismicPreviewCookies = cookies[previewCookie];
  const repoCookie =
    prismicPreviewCookies && prismicPreviewCookies["cms-demo-gusto.prismic.io"];
  const previewRefURL = repoCookie && repoCookie["preview"];
  let queryContext;
  if (previewRefURL) {
    queryContext = {
      headers: {
        "Prismic-ref": previewRefURL,
      },
    };
  }

  const { locale } = useLocale();
  const { loading, data } = useQuery(query, {
    variables: {
      locale,
      experiments: window.experiments || ["exp-control"],
      ...variables,
    },
    context: queryContext,
    ...opts,
  });

  return { loading, data };
}

export default useCmsQuery;
