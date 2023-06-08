import PageWrapper from "src/components/PageWrapper";
import axios from "axios";
import { useEffect, useState } from "react";
import { ArticleBrief } from "src/types/api";
import ArticleBriefCard from "src/components/ArticleBriefCard";
import ListWrapper from "src/components/ListWrapper";
import NeumorphismButton from "src/components/NeumorphismButton";
import { Link } from "react-router-dom";

function ArticleListPage() {
  const [data, setData] = useState<ArticleBrief[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<ArticleBrief[]>(
          "http://127.0.0.1:8000/api/articles/"
        );
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <PageWrapper>
      <h1>Article List Page</h1>
      <Link to="/">
        <NeumorphismButton>Go to Main</NeumorphismButton>
      </Link>
      <ListWrapper>
        {data.map((article) => (
          <ArticleBriefCard key={article.id} article={article} />
        ))}
      </ListWrapper>
      <Link to="/posts/write">
        <NeumorphismButton>write</NeumorphismButton>
      </Link>
    </PageWrapper>
  );
}

export default ArticleListPage;
