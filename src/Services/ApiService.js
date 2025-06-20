const BASE_URL = process.env.REACT_APP_API_URL;

const apiService = {
  async fetchCourses() {
    const url = `${BASE_URL}/api/courses`;
    console.log("Fetching courses from:", url);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const courses = await response.json();
      return courses;
    } catch (error) {
      console.error("Failed to fetch courses:", error);
      throw new Error("Could not load courses");
    }
  }
};

export default apiService;
