import data from '../data';

const Seo = () => {
  const { title, author, description } = data;
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={author.name} />
      <meta name="og:type" content="website" />
      <meta name="og:description" content={description} />
      <meta name="og:site_name" content={title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@ichiklaus" />
    </>
  );
};

export default Seo;
