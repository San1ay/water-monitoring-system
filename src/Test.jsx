import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./userContext";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./userTests.scss";

export default function Test() {
  const { backURL, axios, user, setTestDetail } = useContext(UserContext);
  const [testData, setTestData] = useState({});
  const userID = user ? user.uid : "Anonymous";
  let navigate = useNavigate();

  return (
    <form>
      <h3>Test Your Water Quility</h3>
      <div className="form-group">
        <label>Location/Name</label>
        <input
          type="text"
          value={testData.name}
          onChange={(e) => {
            setTestData((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
          className="form-control"
          placeholder="Test Name"
        />
      </div>
      <div className="water-quility">
        <div className="form-group">
          <label>Temprature</label>
          <input
            type="number"
            value={testData.temp}
            onChange={(e) => setTestData({ ...testData, temp: e.target.value })}
            className="form-control temp"
            placeholder="Water Temprature"
          />

          <Form.Select
            aria-label="temp-scale"
            onChange={(e) => setTestData({ ...testData, tempScale: e.target.value })}
          >
            <option value="C">°C</option>
            <option value="F">°F</option>
            <option value="K">K</option>
          </Form.Select>
        </div>
        <div>
          <label>Level</label>
          <input
            type="number"
            value={testData.waterLevel}
            onChange={(e) => setTestData({ ...testData, waterLevel: e.target.value })}
            className="form-control"
            placeholder="Water Level"
          />
        </div>
        <div className="form-group">
          <label>Turbidity</label>
          <input
            type="text"
            value={testData.turbidity}
            onChange={(e) => setTestData({ ...testData, turbidity: e.target.value })}
            className="form-control"
            placeholder="Water Turbidity"
          />
        </div>
        <div className="form-group">
          <label>PH Value</label>
          <input
            type="number"
            value={testData.phValue}
            onChange={(e) => setTestData({ ...testData, phValue: e.target.value })}
            className="form-control"
            placeholder="PH Value"
          />
        </div>
      </div>
      <Button
        variant="newTestColor"
        style={{ marginTop: "20px" }}
        onClick={() => {
          axios.post(backURL + "/test", { userID, ...testData }).then((res) => {
            if (res.data === "failed") alert("Please Enter Valid Data in Respective Fields");
            else {
              setTestDetail({ ...res.data });
              navigate("/tests/result");
            }
          });
        }}
      >
        Test Now
      </Button>
    </form>
  );
}
