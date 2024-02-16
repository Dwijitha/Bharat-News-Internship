import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const UserInfo = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const userData = response.data;
        userData.achievements = ["Achievement 1", "Achievement 2"];
        userData.socialMedia = [
          {
            name: "Facebook",
            url: "https://www.facebook.com/",
            icon: FaFacebookF,
          },
          {
            name: "Twitter",
            url: "https://www.twitter.com/",
            icon: FaTwitter,
          },
          {
            name: "LinkedIn",
            url: "https://www.linkedin.com/",
            icon: FaLinkedinIn,
          },
        ];
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="d-flex justify-content-center">
      <Col md={4} className="text-center">
        {user && (
          <Card
            className="h-100 border-0 rounded-lg shadow-lg my-3"
            style={{ width: "20rem" }}
          >
            <Card.Img
              variant="top"
              src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.username}&size=150`}
              alt={user.username}
              className="card-img-top rounded-circle mx-auto mt-3 mb-4"
              style={{ width: "150px", height: "150px" }}
            />
            <Card.Body>
              <Card.Title className="text-center">{user.name}</Card.Title>
              <Card.Text className="text-center">{user.email}</Card.Text>
              <Card.Text>{user.about || "No information available."}</Card.Text>
            </Card.Body>
            <Card.Footer className="bg-white border-0 py-2 text-center m-0">
              <ListGroup className="list-group-flush">
                <ListGroupItem className="border-0">
                  <i className="fas fa-trophy mr-2"></i>
                  {user.achievements && user.achievements.length > 0 ? (
                    <span>Achievements: {user.achievements.join(", ")}</span>
                  ) : (
                    "No achievements yet."
                  )}
                </ListGroupItem>
              </ListGroup>
              <ListGroup className="list-group-flush">
                <ListGroupItem className="border-0">
                  {user.socialMedia && user.socialMedia.length > 0
                    ? user.socialMedia.map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted mx-2"
                        >
                          <item.icon className="fab fa-xs" />
                        </a>
                      ))
                    : "No social media profiles yet."}
                </ListGroupItem>
              </ListGroup>
            </Card.Footer>
          </Card>
        )}
      </Col>
    </div>
  );
};

export default UserInfo;
