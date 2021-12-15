import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";
import "./userTests.scss";
import { Table, Button } from "react-bootstrap";

function TestButton() {
  let navigate = useNavigate();
  return (
    <Button
      variant="newTestColor"
      style={{ marginLeft: "30px", marginTop: "20px" }}
      onClick={() => navigate("/tests/new-test")}
    >
      Test your Water Now
    </Button>
  );
}

export default function UserTests() {
  let navigate = useNavigate();
  const { axios, user, backURL, setTestDetail } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState([]);
  const userFirstName = userDetails?.Name?.firstName || user?.displayName?.split(" ")[0];

  const getUserDetails = () =>
    axios.get(`${backURL}/user/${user ? user.uid : "Anonymous"}`).then((res) => {
      setUserDetails(res.data);

      //signed up using google
      if (res.data === "user404") {
        axios
          .post(
            backURL + "/user/register",
            {
              userData: { fname: userFirstName },
              userID: user?.uid || "Anonymous",
              email: user?.email || "666@illuminati.com",
            },
            { withCredentials: true }
          )
          .catch((er) => console.log(er));
      }
    });

  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line
  }, [user]);

  // if (loading) return <h1>Loading, Please wait</h1>;
  if (userDetails?.tests?.length === 0)
    return (
      <div className="container">
        <h1>Hello {userFirstName}, You haven't done any tests yet</h1>
        <TestButton />
      </div>
    );
  return (
    <div className="container userTests">
      <TestButton />
      {userFirstName === "Anonymous" ? (
        <h1>Some of Previous Tests are </h1>
      ) : (
        <h1>Hello {userFirstName},Your Previous Tests</h1>
      )}

      <Table striped bordered hover>
        <thead>
          <tr className="userTests__header">
            <th className="userTests__index">#</th>
            <th className="userTests__wqi">WQI</th>
            <th className="userTests__rating">Rating</th>
            <th className="userTests__confidence">Confidence</th>
            <th className="userTests__season">Date</th>
          </tr>
        </thead>
        <tbody>
          {userDetails?.tests?.map((test, index) => (
            <tr
              className={`userTests__data ${test.calculatedResult.quality}`}
              key={test._id}
              onClick={() => {
                setTestDetail({ ...test, userFirstName });
                navigate("/tests/" + test._id, { state: test });
              }}
            >
              <td className="userTests__index">{index + 1}</td>
              <td className="userTests__wqi">{test.calculatedResult.wqi}</td>
              <td className="userTests__rating">{test.calculatedResult.rating}</td>
              <td className="userTests__confidence">{test.calculatedResult.confidence}</td>
              <td className="userTests__season">{test.calculatedResult.season}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
