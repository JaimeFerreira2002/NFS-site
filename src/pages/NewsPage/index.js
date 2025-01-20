import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth"; // Firebase auth
import { doc, getDoc } from "firebase/firestore"; // Firestore functions
import { db } from "../../firebase"; // Firebase Firestore instance
import LatestArticle from "./LatestArticle";
import PreviousArticlesList from "./PreviousArticlesList";
import NewsletterColumn from "./NewsletterColumn";
import "./style.css";
import PageHeader from "../../components/PageHeader";
import { useTranslation } from "react-i18next";


const NewsPage = () => {
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin status
  const [loading, setLoading] = useState(true); // State to track loading
  const { t } = useTranslation();


  useEffect(() => {
    const checkAdminStatus = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        console.log("User found:", user.uid); // Debugging

        try {
          // Fetch user data from Firestore
          const userDoc = await getDoc(doc(db, "Users", user.uid)); // Change 'Users' to 'users' if needed
          console.log("User document fetched:", userDoc.data()); // Debugging

          if (userDoc.exists() && userDoc.data().role === "admin") {
            setIsAdmin(true); // Set admin status if user has the 'admin' role
            console.log("Admin role detected"); // Debugging
          } else {
            console.log("User is not admin or no role found"); // Debugging
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      } else {
        console.log("No user logged in"); // Debugging
      }

      setLoading(false); // Stop loading once the check is done
    };

    checkAdminStatus();
  }, []);

  // Log the state when it changes
  useEffect(() => {
    console.log("isAdmin state changed to:", isAdmin);
  }, [isAdmin]);

  // If loading, show a loading message
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="newspage">
     
      <PageHeader
        title={t("news-page.page-title")}
        subtitle={ t("news-page.page-subtitle")}
        gradientColor="#19a3ff"
        height={"2.5%"}
      />

        {/* Conditionally render the "Add Article" button if the user is an admin */}
      {isAdmin && (
        <div className="add-article-button">
          <button onClick={() => alert("Redirect to Add Article Page")}>
            Add Article
          </button>
        </div>
      )}

      <div className="news-container">
        <div className="main-content">
          <LatestArticle />
          <PreviousArticlesList className="previous-articles-container" /> {/* This now fetches data from Firestore */}
        </div>
        {/* <div className="sidebar">
          <NewsletterColumn />
        </div> */}
      </div>

     
    </div>
  );
};

export default NewsPage;