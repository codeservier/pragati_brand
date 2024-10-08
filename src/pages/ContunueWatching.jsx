import React, { useEffect, useState, useRef } from "react"; 
import Card from "../components/card/Card";
import Loader from "../components/loader/Loader";
import { useNavigate, useLocation } from "react-router-dom";
import { db, collection, getDocs } from "../../firebase";
import defaultCoverImage from "../assets/placeholder.jpg"; // Adjust the path as needed

const ContinueWatching = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const coursesRef = useRef(null);
  const techCoursesRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        setLoading(true);
        const collectionRef = collection(db, "registration");
        const querySnapshot = await getDocs(collectionRef);
        const allDocuments = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const cardData = allDocuments.map((doc) => ({
          id: doc.id,
          title: doc.coachingname || "No Coaching Name",
          address: doc.address || "No Address",
          logo: doc.coachingLogoUrl || "default-logo-url",  // Changed field name
          coverPic: doc.coachingCoverPicUrl || defaultCoverImage  // Changed field name
        }));

        setCardsData(cardData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchCardData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (location.state?.courseType === "ourCourses" && coursesRef.current) {
        const top =
          coursesRef.current.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: top - 150, behavior: "smooth" });
      } else if (
        location.state?.courseType === "techCourses" &&
        techCoursesRef.current
      ) {
        const top =
          techCoursesRef.current.getBoundingClientRect().top +
          window.pageYOffset;
        window.scrollTo({ top: top - 150, behavior: "smooth" });
      }
    };

    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    const timer = setTimeout(() => {
      handleScroll();
      scrollToTop();
    }, 100);

    return () => clearTimeout(timer);
  }, [location]);

  const handleCardClick = (id) => {
    navigate(`/coursedetail`, { state:{ id } });
  };

  return (
    <>
      {loading ? (
        <div className="min-h-[80vh] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto p-2">
          <div className="container mx-auto p-4 my-4">
            <h1 ref={coursesRef} className="text-2xl font-medium mb-4">
              All Coaching
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cardsData.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  description={card.address}
                  logo={card.logo}
                  coverPic={card.coverPic}
                  onClick={() => handleCardClick(card.id)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContinueWatching;
