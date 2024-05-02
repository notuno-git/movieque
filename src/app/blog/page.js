import FooterOne from "@/components/Footer/FooterOne";
import HeaderOne from "@/components/Header/HeaderOne";
import BlogContent from "@/components/Blog/BlogContent";
import BlogPagination from "@/components/Pagination/BlogPagination";
import BlogSidebar from "@/components/Blog/BlogSidebar";

export default function Blog() {
  const breadcrumb = {
    title: "Blog",
    links: [
      { name: "Home", href: "/" },
      { name: "Blog", href: "#" },
    ],
  };
  return (
    <>
      <HeaderOne data={{ breadcrumb }} />
      {/* <!-- Start Main --> */}
      <main className="main">
        <div className="blog-area py-80">
          <div className="container">
            <div className="row">
              <div className="col-xxl-9 col-lg-8">
                <BlogContent />
                <BlogPagination />
              </div>
              {/* <!-- Blog Side Bar --> */}
              <div className="col-xxl-3 col-lg-4 d-lg-block d-none">
                <BlogSidebar />
              </div>
            </div>
          </div>
        </div>
      </main>
      <FooterOne />
    </>
  );
}
