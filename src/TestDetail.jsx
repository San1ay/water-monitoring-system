import React, { useContext } from "react";
import { UserContext } from "./userContext";
import "./userTests.scss";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router";

export default function TestDetail() {
  const { testDetail } = useContext(UserContext);
  let navigate = useNavigate();
  let testDate = new Date(testDetail.createdAt).toLocaleString();
  return (
    <>
      {!testDetail.sampleData ? (
        <h1>Test Not Available</h1>
      ) : (
        <div>
          {testDetail.userFirstName && (
            <>
              <h1>{testDetail?.sampleData?.name}</h1>
              <p>Done on : {testDate}</p>
              <p className="userTests__user">
                Submitted by : {testDetail?.userFirstName}
              </p>
            </>
          )}
          <h3>Input Data :</h3>
          <Table className="inputData">
            <thead>
              <tr className="userTests__header">
                <th className="userTests__wqi">PH</th>
                <th className="userTests__rating">Temperature</th>
                <th className="userTests__confidence">Turbidity</th>
                <th className="userTests__season">Water Level</th>
              </tr>
            </thead>
            <tbody>
              <tr
                className={`userTests__data ${testDetail.calculatedResult.quality}`}
              >
                <td className="userTests__wqi">
                  {testDetail?.sampleData?.phValue}
                </td>
                <td className="userTests__rating">
                  {testDetail?.sampleData?.temp}
                  {testDetail.sampleData.tempScale}
                </td>
                <td className="userTests__confidence">
                  {testDetail?.sampleData?.turbidity}
                </td>
                <td className="userTests__season">
                  {testDetail?.sampleData?.waterLevel}
                </td>
              </tr>
            </tbody>
          </Table>
          <h3>Calculated Result :</h3>
          <Table className="calculatedData">
            <thead>
              <tr className="userTests__header">
                <th className="userTests__wqi">WQI</th>
                <th className="userTests__rating">Rating</th>
                <th className="userTests__confidence">Confidence</th>
                <th className="userTests__season">Season</th>
              </tr>
            </thead>
            <tbody>
              <tr
                className={`userTests__data ${testDetail.calculatedResult.quality}`}
              >
                <td className="userTests__wqi">
                  {testDetail?.calculatedResult?.wqi}
                </td>
                <td className="userTests__rating">
                  {testDetail?.calculatedResult?.rating}
                </td>
                <td className="userTests__confidence">
                  {testDetail?.calculatedResult?.confidence}
                </td>
                <td className="userTests__season">
                  {testDetail?.calculatedResult?.season}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
      <Button
        variant="newTestColor"
        style={{ marginLeft: "30px", marginTop: "20px" }}
        onClick={() => navigate("/tests/new-test")}
      >
        Test your Water Now
      </Button>{" "}
      <Button
        variant="backButtonColor"
        style={{ marginLeft: "30px", marginTop: "20px" }}
        onClick={() => navigate("/tests")}
      >
        Go Back to Tests
      </Button>
    </>
  );
}
