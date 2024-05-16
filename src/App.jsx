import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import CreatePost from "./components/CreatePost.jsx";
import PostList from "./components/PostList.jsx";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
  const [selectedTab, setSelectedTab] = useState("");
  return (
    <PostListProvider>
      <div className="app-container sidebar">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
