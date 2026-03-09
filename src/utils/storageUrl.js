export const toPublicUrl = (firebaseUrl) => {
  if (!firebaseUrl || !firebaseUrl.includes('firebasestorage.googleapis.com')) {
    return firebaseUrl;
  }
  try {
    const url = new URL(firebaseUrl);
    // Extract the file path from the Firebase Storage URL
    const pathMatch = url.pathname.match(/\/o\/(.+)/);
    if (!pathMatch) return firebaseUrl;
    const filePath = decodeURIComponent(pathMatch[1]);
    return `https://storage.googleapis.com/novaformulastudent.appspot.com/${filePath}`;
  } catch {
    return firebaseUrl;
  }
};