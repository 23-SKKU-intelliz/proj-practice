import PageWrapper from "src/components/PageWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import { ArticleDetail } from "src/types/api";
import { Link, useParams } from "react-router-dom";
import ArticleTitle from "src/components/ArticleTitle";
import NeumorphismBase from "src/components/NeumorphismBase";
import ListWrapper from "src/components/ListWrapper";
import CommentCard from "src/components/CommentCard";
import NeumorphismButton from "src/components/NeumorphismButton";
import CommentForm from "src/components/CommentForm";

function ArticleDetailPage() {
  const [data, setData] = useState<ArticleDetail>();
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get<ArticleDetail>(
          "http://127.0.0.1:8000/api/articles/" + id
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
      <h1>Article Detail Page</h1>
      <Link to="/posts">
        <NeumorphismButton>Go to List</NeumorphismButton>
      </Link>
      <ArticleTitle article={data} />
      <NeumorphismBase>
        <p>{data?.content}</p>
      </NeumorphismBase>
      <CommentForm articleId={Number(id)} />
      <ListWrapper>
        {data?.comments.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </ListWrapper>
    </PageWrapper>
  );
}

export default ArticleDetailPage;
