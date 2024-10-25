import React, { useState, useEffect } from "react";
import { getAuth } from "firebase/auth"; // Firebase auth
import { collection, addDoc, doc, getDoc } from "firebase/firestore"; // Firestore functions
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Firebase storage
import { db, storage } from "../../firebase"; // Firebase Firestore and Storage instance
import "./style.css";
import PageHeader from "../../components/PageHeader";

const AddArticlePage = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [imageFile, setImageFile] = useState(null); // Store image file
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Check if user is admin

  useEffect(() => {
    const checkAdminStatus = async () => {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        try {
          // Fetch user data from Firestore
          const userDoc = await getDoc(doc(db, "Users", user.uid));
          if (userDoc.exists() && userDoc.data().role === "admin") {
            setIsAdmin(true); // Set admin status if user has the 'admin' role
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
        }
      }
    };

    checkAdminStatus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const auth = getAuth();
    const user = auth.currentUser;

    if (!isAdmin) {
      alert("Only admins can add articles.");
      setLoading(false);
      return;
    }

    if (user) {
      try {
        let uploadedImageUrl = "";

        if (imageFile) {
          // Upload the image to Firebase Storage under the articleImages folder
          const imageRef = ref(storage, `articleImages/${imageFile.name}`);
          const snapshot = await uploadBytes(imageRef, imageFile);
          uploadedImageUrl = await getDownloadURL(snapshot.ref);
        }

        // Add the article to Firestore
        await addDoc(collection(db, "articles"), {
          title,
          subtitle,
          imageUrl: uploadedImageUrl, // Store the uploaded image URL
          content,
          date: new Date(), // Current timestamp
          author: user.uid,
        });

        alert("Article added successfully!");
      } catch (error) {
        console.error("Error adding article: ", error);
        alert("Error adding article. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("You need to be logged in to add an article.");
      setLoading(false);
    }
  };

  return (
    <div className="add-article-page">
      <PageHeader
        title={"Add New Article"}
        subtitle={"Add a new article to the news section"}
        gradientColor="#19a3ff"
        height={"2.5%"}
      />

      <div className="news-container">
        <div className="main-content">
          <form className="add-article-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subtitle">Subtitle:</label>
              <input
                type="text"
                id="subtitle"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="imageFile">Image File:</label>
              <input
                type="file"
                id="imageFile"
                onChange={(e) => setImageFile(e.target.files[0])} // Capture the file
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Content:</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>

            <button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Article"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArticlePage;