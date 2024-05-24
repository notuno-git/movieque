"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// import categories from "@/data/category";
import CategoryCard from "@/components/Card/CategoryCard";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from "@/redux/slice/moviesSlice";

export default function CategoryOne() {

  const dispatch = useDispatch();
  const { movies, status, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  console.log("cat", movies);


  const swiperOptions = {
    speed: 5000,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 1,
      pauseOnMouseEnter: true,
    },
    modules: [Autoplay],
    breakpoints: {
      0: { slidesPerView: "1" },
      576: { slidesPerView: "2" },
      768: { slidesPerView: "2" },
      992: { slidesPerView: "3" },
      1200: { slidesPerView: "4" },
      1500: { slidesPerView: "5" },
      1700: { slidesPerView: "6", spaceBetween: 30 },
    },
  };
  return (
    <div className="category pt-80">
      <div className="container mb-45">
        <div className="d-flex justify-content-center mb-40">
          <div className="section-header">
            <h3 className="section-title mt-2 mb-0 lh-1">Browse by category</h3>
          </div>
        </div>
      </div>
      {movies && movies.length > 0 && (
        <Swiper {...swiperOptions} className="swiper categories-slider">
          {movies.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
