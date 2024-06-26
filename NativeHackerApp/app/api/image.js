export const fetchImageFromUnsplash = async (itemName, accessKey) => {
  const url = `https://api.unsplash.com/search/photos?page=1&query=${encodeURIComponent(
    itemName
  )}&client_id=${accessKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const imageUrl = data.results[0].urls.small;
      return imageUrl;
    } else {
      throw new Error("No image found for the given item.");
    }
  } catch (error) {
    console.log("Error fetching image:", error);
    throw error;
  }
};
