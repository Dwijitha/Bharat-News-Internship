import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBookmark } from "react-icons/fa";
import { getBookmarkedArticles } from "./newsAPI";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const bookmarksData = await getBookmarkedArticles();
        setBookmarks(bookmarksData);
      } catch (error) {
        console.error("Error fetching bookmarks:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <h1 className="text-center m-2">Bookmarked Articles</h1>
        {bookmarks.map((bookmark) => (
          <Col md={3} key={bookmark.url} className="mb-4">
            <Card className="h-100 border-0 rounded-lg shadow-lg my-3">
              <Card.Body style={{ height: "15rem" }}>
                <Card.Title>
                  <FaBookmark className="text-muted mr-2" />
                  {bookmark.title}
                </Card.Title>
                <Card.Text>{bookmark.description}</Card.Text>
              </Card.Body>
              <Card.Img
                variant="top"
                src={bookmark.urlToImage}
                alt={bookmark.title}
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

export default Bookmarks;
