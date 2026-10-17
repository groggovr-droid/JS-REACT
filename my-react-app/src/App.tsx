// import { useState } from "react";
// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import { PostCardLarge } from "./components/PostCard/PostCardLarge";
import { PostCardMedium } from "./components/PostCard/PostCardMedium";
import { PostCardSmall } from "./components/PostCard/PostCardSmall";
import {
  postLargeMock,
  postMediumMock,
  postSmallMock,
} from "./components/PostCard/mockData";
import { PostsPage } from "./components/PostPages/postsPage";

function App() {
  return (
    <>
      <div>
        Single Posts
        <div>
          Large Post
          <PostCardLarge post={postLargeMock} />
        </div>
        <div>
          Medium Post
          <PostCardMedium post={postMediumMock} />
        </div>
        <div>
          Small Post
          <PostCardSmall post={postSmallMock} />
        </div>
      </div>
      <div>
        AllPosts
        <PostsPage />
      </div>
    </>
  );
}

export default App;
