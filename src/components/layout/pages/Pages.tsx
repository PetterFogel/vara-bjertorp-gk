import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import CreatePosts from "../../manage-create-posts/create-posts/CreatePosts";
import BookTeeTime from "../../routes/book-tee-time/BookTeeTime";
import Contest from "../../routes/contest/Contest";
import Gallery from "../../routes/gallery/Gallery";
import Home from "../../routes/home/Home";
import Login from "../../routes/login/Login";
import Member from "../../routes/member/Member";
import News from "../../routes/news/News";

const Pages: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/boka-starttid" element={<BookTeeTime />} />
      <Route path="/nyheter" element={<News />} />
      <Route path="/tavling" element={<Contest />} />
      <Route path="/galleri" element={<Gallery />} />
      <Route path="/medlem" element={<Member />} />
      <Route path="/login" element={<Login />} />
      <Route path="/create-posts" element={<CreatePosts />} />
    </Routes>
  );
};

export default Pages;
