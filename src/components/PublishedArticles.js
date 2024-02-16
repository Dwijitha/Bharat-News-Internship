import React, { useEffect, useState } from "react";
import { getPublishedArticles } from "./newsAPI";
import { Container, Row, Col, Card } from "react-bootstrap";

const PublishedArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const articlesData = await getPublishedArticles();
        setArticles(articlesData);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <h1 className="text-center m-2">Published Articles</h1>
        {articles.map((article) => (
          <Col md={3} key={article.url} className="mb-4">
            <Card className="h-100 border-0 rounded-lg shadow-lg my-3">
              <Card.Body style={{ height: "15rem" }}>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.description}</Card.Text>
              </Card.Body>
              <Card.Img
                variant="top"
                src={article.urlToImage}
                alt={article.title}
                className="card-img-top rounded-circle mx-auto mt-1 mb-5"
                style={{ width: "150px", height: "150px" }}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PublishedArticles;
