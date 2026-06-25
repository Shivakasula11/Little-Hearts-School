import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Little Hearts Kindergarten School';
const BASE_URL = 'https://littleheartskgschool.in'; 
export default function SEO({ title, description, path = '/', image }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Best Preschool & Primary School in Devarakonda`;
  const url = `${BASE_URL}${path}`;
  const ogImage = image || `${BASE_URL}/og-image.jpg`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}