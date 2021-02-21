import React, { useState, useEffect } from "react";
import { Col, Row, Form, FormGroup, Label, Button, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { Create, GetOne } from "../actions/ctiAction";

// import { completed, pending } from '../actions/completedAction'

const CTI = ({ Done, completed, pending }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { urlid } = useParams();
  // console.log(urlid);
  const data = useSelector((state) => state.ctiReducer.state);
  const id = useSelector((state) => state.ciReducer.id);
  // console.log(data);
  // console.log(id);
  useEffect(() => {
    urlid ? dispatch(GetOne(urlid)) : console.log("creating");
  }, [urlid]);

  const [CTI, setCTI] = React.useState({
    // cti_fcaForm: 'Pending',
    // cti_bInformation: 'Pending',
    // cti_otAgreement: '',
    // cti_hwUrl: 'Pending',
    // cti_wCompliance: '',
    // cti_wUrl_proofDomain: 'Pending',
    // cti_osChart: 'Pending',
    // cti_bPlan: 'Pending',
  });
  // console.log(CTI)
  function handleInput(evt) {
    setCTI({
      ...CTI,
      [evt.target.name]: evt.target.value,
    });
  }
  console.log(CTI);

  useEffect(() => {
    setCTI(data);
  }, [data]);
  const onSubmit = (e) => {
    console.log(CTI);
    dispatch(Create(CTI, id));

    history.push("/KYC");
  };
  const onUpdateSubmit = (e) => {
    dispatch(Create(CTI, urlid));
    history.push("/KYC/" + urlid);
  };

  return (
    <div className="container">
      <div>
        <h2>
          <span class="badge badge-success">COMPANY TRADING INFORMATION</span>
        </h2>
      </div>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="certificate">Fully Completed Application Form:</Label>
              <select
                className={
                  CTI.cti_fcaForm === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={CTI.cti_fcaForm}
                id="1"
                name="cti_fcaForm"
                onChange={handleInput}
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="memo">Bank Information (Welcome Letter):</Label>
              <select
                className={
                  CTI.cti_bInformation === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={CTI.cti_bInformation}
                id="1"
                name="cti_bInformation"
                onChange={handleInput}
              >
                <option value="Pending">Pending</option>
                <option value="Received">Received</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="OTA">Office Tenancy Agreement:</Label>

              <Input
                className={
                  CTI.cti_otAgreement === ""
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={CTI.cti_otAgreement}
                name="cti_otAgreement"
                onChange={handleInput}
                required={false}
                type="text"
                id="Name"
                placeholder="OTA"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="shareRegister">Headline Website URL Address:</Label>
              <select
                className={
                  CTI.cti_hwUrl === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={CTI.cti_hwUrl}
                id="1"
                name="cti_hwUrl"
                onChange={handleInput}
              >
                <option selected value="Pending">
                  Pending
                </option>
                <option value="Received">Received</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="shareCertificate">Website Compliance:</Label>
              <Input
                className={
                  CTI.cti_wCompliance === ""
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={CTI.cti_wCompliance}
                name="cti_wCompliance"
                onChange={handleInput}
                type="url"
                id="Url"
                placeholder="Company URL"
              ></Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Website URL - Proof of Domain:</Label>
              <select
                className={
                  CTI.cti_wUrl_proofDomain === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={CTI.cti_wUrl_proofDomain}
                id="1"
                name="cti_wUrl_proofDomain"
                onChange={handleInput}
              >
                <option selected value="Pending">
                  Pending
                </option>
                <option value="Received">Received</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Ownership Structure Chart:</Label>
              <select
                className={
                  CTI.cti_osChart === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={CTI.cti_osChart}
                id="1"
                name="cti_osChart"
                onChange={handleInput}
              >
                <option selected value="Pending">
                  Pending
                </option>
                <option value="Received">Received</option>
              </select>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="CCR">Business Plan:</Label>
              <select
                className={
                  CTI.cti_bPlan === "Pending"
                    ? "border-red custom-select"
                    : "custom-select"
                }
                value={CTI.cti_bPlan}
                id="1"
                name="cti_bPlan"
                onChange={handleInput}
              >
                <option value="Pending"> Pending </option>
                <option value="Received">Received</option>
              </select>
            </FormGroup>
          </Col>
        </Row>

        {urlid ? (
          <Button onClick={onUpdateSubmit}>Update and Next</Button>
        ) : (
          <Button onClick={onSubmit}>Save and Next</Button>
        )}
      </Form>
    </div>
  );
};

export default CTI;
