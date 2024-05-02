import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import PaginationOne from "@/components/Pagination/PaginationOne";

export default function Movies() {
  const breadcrumb = {
    title: "Movies",
    links: [
      { name: "Home", href: "/" },
      { name: "Movies", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />

      {/* <!-- Start Main --> */}
      <main className="main">
        {/* <!-- Start Pagination Area --> */}
        <PaginationOne />
        {/* <!-- End Pagination Area --> */}
      </main>

      <FooterOne />
    </>
  );
}
