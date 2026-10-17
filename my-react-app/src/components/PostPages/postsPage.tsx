import { postsAll } from "../PostCard/mockData"; // Импорт массива данных
import { PostCardLarge } from "../PostCard/PostCardLarge";
import { PostCardMedium } from "../PostCard/PostCardMedium";
import { PostCardSmall } from "../PostCard/PostCardSmall";
import "./postsPage.css";

export const PostsPage = () => {
  // Левая колонка (5 постов)
  const largePost = postsAll[0]; // Пост 1 (Большой сверху)
  const mediumRow1 = postsAll.slice(1, 3); // Посты 2 и 3 (Первый ряд средних)
  const mediumRow2 = postsAll.slice(3, 5); // Посты 4 и 5 (Второй ряд средних)

  // Правая колонка (6 постов)
  const sidebarPosts = postsAll.slice(5, 11); // Посты с 6 по 11 включительно (Маленькие)

  return (
    <div className="page-container">
      <div className="page-wrapper">
        {/* Главная двухколоночная сетка */}
        <div className="main-grid">
          {/* ЛЕВАЯ ЧАСТЬ: Основная лента (5 постов) */}
          <div className="news-feed">
            {/* 1. Крупный верхний пост */}
            {largePost && <PostCardLarge post={largePost} />}

            {/* 2. Первый ряд средних постов */}
            <div className="medium-cards-grid">
              {mediumRow1.map((post) => (
                <PostCardMedium key={post.id} post={post} />
              ))}
            </div>

            {/* 3. Второй ряд средних постов */}
            <div className="medium-cards-grid">
              {mediumRow2.map((post) => (
                <PostCardMedium key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Боковая панель (6 постов) */}
          <div className="sidebar-panel">
            {sidebarPosts.map((post) => (
              <PostCardSmall key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
