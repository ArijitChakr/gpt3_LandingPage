import "./article.css";

const Article = ({
  imgURL,
  date,
  title,
}: {
  imgURL: string;
  date: string;
  title: string;
}) => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imgURL} alt="blog" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
