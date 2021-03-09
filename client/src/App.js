import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import BlogInput from "./Components/BlogInput/Bloginput";
import Blogs from "./Components/Blogs/Blogs";

function App() {
  const [BlogData, setBlogData] = useState([]);

  useState(async () => {
    const JSONData = await fetch("http://localhost:5000/api/blogs");
    const data = await JSONData.json();
    delete data.code;
    console.log(typeof data);

    setBlogData(data.data);
  }, []);

  let elem = "";
  if (BlogData) {
    elem = <Blogs data={BlogData} />;
    console.log(BlogData);
  }
  return (
    <div>
      <Navbar />
      <BlogInput />
      {elem}
    </div>
  );
}

export default App;
