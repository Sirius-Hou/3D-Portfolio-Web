import { useState, useEffect } from "react";

export const usePreloadImages = (imageUrls) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const promises = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(promises)
      .then(() => setLoaded(true))
      .catch(() => console.error("Error preloading images"));

  }, [imageUrls]);

  return loaded;
};
