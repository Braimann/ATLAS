import { generateDefaultSeo } from "next-seo/pages";
import defaultSEOConfig from "../../next-seo.config";

export default function DefaultSeoConfig() {
  return <>{generateDefaultSeo(defaultSEOConfig)}</>;
}
