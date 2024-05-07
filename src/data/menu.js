import logo from "@/../public/assets/images/logo.png";

const menuOneData = {
  logo: logo,
  href: "/",
  btnText: "Subscribe Now",
  menus: [
    // {
    //   name: "Home",
    //   href: "#",
    //   subMenus: [
    //     {
    //       name: "Home One",
    //       href: "/",
    //     },
    //     {
    //       name: "Home Two",
    //       href: "home-two",
    //     },
    //   ],
    // },
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Movies",
      href: "movies",
    },
    {
      name: "TV Shows",
      href: "tv-shows",
    },
    {
      name: "Lists",
      href: "#",
      subMenus: [
        {
          name: "Movie Details",
          href: "movie-details",
        },
        {
          name: "Category Grid",
          href: "category-grid",
        },
        {
          name: "Privacy Policy",
          href: "privacy-policy",
        },
        {
          name: "Celebs",
          href: "about",
        },
        {
          name: "Awards and Events",
          href: "blog",
        },
        {
          name: "Sign in",
          href: "auth",
        },
        // {
        //   name: "About Us",
        //   href: "about",
        // },
        // {
        //   name: "Playlist",
        //   href: "playlist",
        // },
        // {
        //   name: "Category",
        //   href: "category",
        // },
        // {
        //   name: "Category List",
        //   href: "category-list",
        // },
        // {
        //   name: "Pricing",
        //   href: "pricing",
        // },
        // {
        //   name: "Pagination 01",
        //   href: "pagination-one",
        // },
        // {
        //   name: "Pagination 02",
        //   href: "pagination-two",
        // },
        // {
        //   name: "Blog",
        //   href: "blog",
        // },
        // {
        //   name: "Blog Details",
        //   href: "blog-details",
        // },
        // {
        //   name: "404",
        //   href: "not-found",
        // },
      ],
    },
  ],
};

const menuTwoData = {
  primaryMenus: [
    { name: "Home", href: "/" },
    { name: "Search", href: "category" },
    { name: "Movies", href: "movies" },
    { name: "Add To Playlist", href: "playlist" },
    { name: "Tv Showes", href: "pagination-one" },
    { name: "Games", href: "pagination-two" },
    { name: "Sports", href: "pagination-one" },
  ],
};

export { menuOneData, menuTwoData };
