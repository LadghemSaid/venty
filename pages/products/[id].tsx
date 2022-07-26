import Head from "next/head";
import products from "products";
import { useRouter } from "next/router";
import { ProductType } from "types";
import i18next from "i18next";
import ProductPage from "@/components/ProductPage";

const Product = (props: ProductType) => {
  const router = useRouter();

  return router.isFallback ? (
    <>
      <Head>
        <title>
          <>{i18next.t("generic.loading")} ...</>
        </title>
      </Head>
      <p className="text-center text-lg py-12">
        <>{i18next.t("generic.loading")} ...</>
      </p>
    </>
  ) : (
    <ProductPage {...props} />
  );
};

export async function getStaticPaths() {
  console.log(products);
  return {
    // Existing posts are rendered to HTML at build time
    paths: products.map((item) => ({
      params: { id: item.id_price.toString() },
    })),
    // Enable statically generating additional pages
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  try {
    const props =
      products?.find((product) => product.id_price === params.id_price) ?? {};

    return {
      props,
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every second
      revalidate: 1, // In seconds
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default Product;
