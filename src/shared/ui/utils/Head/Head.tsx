import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

type Props = {
  title?: string;
  description?: string;
};

/**
 * Add to every page to set the title and description of the page.
 */
export const Head = ({ title = "", description = "" }: Props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet
      title={title ? `${title} | FE Boilerplate V2` : undefined}
      defaultTitle="Datalux"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
