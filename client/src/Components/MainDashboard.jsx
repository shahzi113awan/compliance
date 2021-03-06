import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Get } from "../actions/ciAction";

export default function MainDashboard() {
  const history = useHistory();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Get());
  }, [dispatch]);

  const data = useSelector((state) => state.ciReducer.state);
  // const isLoading = 'useSelector((state) => state.ciReducer.isLoading)'
  const isLoading = useSelector((state) => state.ciReducer.isLoading);
  if (!data) {
    window.location.reload();
  }
  console.log(isLoading);
  console.log(data);
  return isLoading ? (
    <h1 className="text-center">Loading</h1>
  ) : (
    <div className="container-fluid">
      <div class="table-responsive mt-5">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col"> # </th>
              <th scope="col" style={{ position: "relative" }} classNa>
                Registered Company Name
              </th>
              <th scope="col">Total Pending</th>
              <th scope="col ">Total Collected</th>
              <th scope="col">Total Outstanding</th>
              <th scope="col">10 Day Report</th>
              <th scope="col ">Allocated Acquirer / Solution</th>
              <th scope="col">Company Info & Checkout Page</th>
              <th scope="col">Pre Approval ems Buy Rate</th>
              <th scope="col ">Pre Approval ems Sel Rate</th>
              <th scope="col ">Application Boarded Date</th>
              <th scope="col">Aged Days</th>
              <th scope="col">Trading / New to Cards (NTC)</th>
              <th scope="col ">Vertical / Trading Sector</th>
              <th scope="col ">Business / Referral Partner</th>
              <th scope="col ">Assigned BDM / Owner</th>
              <th scope="col">Compliance Country Location</th>
              <th scope="col">EEA Documents</th>
              <th scope="col "> Trading License or Agreements Required</th>
              <th scope="col ">Fully Completed Application Form</th>
              <th scope="col ">Bank Information (Welcome Letter)</th>
              <th scope="col">Office Tenancy Agreement</th>
              <th scope="col">Acquiring Processing Statements</th>
              <th scope="col "> Headline Website URL Address</th>
              <th scope="col">Website Compliance</th>
              <th scope="col "> Website URL - Proof of Domain</th>
              <th scope="col ">Ownership Structure Chart</th>
              <th scope="col ">Business Plan</th>
              <th scope="col">Shareholder / Director Name</th>
              <th scope="col">Shareholding Percentage</th>
              <th scope="col "> Lead Director Passport</th>
              <th scope="col">Country / Nationality</th>
              <th scope="col">Notarised</th>
              <th scope="col "> Expiry Date</th>
              <th scope="col">Proof of Address (POA)</th>
              <th scope="col "> Type of POA</th>
              <th scope="col ">Notarised</th>
              <th scope="col ">POA Start Date</th>
              <th scope="col">POA Expiry Date (+90 days)</th>
              <th scope="col">Expiry Days</th>
              <th scope="col "> Power of Attorney Document</th>
              {/* <th scope="col">Shareholder / Director Name</th>
              <th scope="col">Shareholding Percentage</th>
              <th scope="col "> Client Passport</th>
              <th scope="col">Country / Nationality</th>
              <th scope="col "> Notarised</th>
              <th scope="col ">Expiry Date</th>
              <th scope="col ">Proof of Address (POA)</th>
              <th scope="col">Type of POA</th>
              <th scope="col">Notarised</th>
              <th scope="col "> POA Start Date</th>
              <th scope="col">POA Expiry Date (+90 days)</th>
              <th scope="col">Expiry Days</th>
              <th scope="col "> Certificate of Incorporation</th>
              <th scope="col">Memorandum of Association</th>
              <th scope="col ">Articles of Association</th>
              <th scope="col ">Share Register</th>
              <th scope="col ">Share Certificate(s) - Signed</th>
              <th scope="col">Current Commercial Register Extract</th>
              <th scope="col">Notarised</th> */}
              <th scope="col "> Corporate Bank Statements</th>
              <th scope="col">Personal Bank Statements</th>
              <th scope="col">Proof of Wealth</th>
              <th scope="col "> Company AML Policy</th>
              <th scope="col">Gambling or Forex License</th>
              <th scope="col ">Copywrite or Re-seller Agreement</th>
              <th scope="col ">Fulfilment or Drop shipping Agreement</th>
              <th scope="col ">FBO Company Registration (Nutra Merchants)</th>
              <th scope="col">Sales Handoff Sheet (CCBill Only)</th>
              <th scope="col">SPARE</th>
              <th scope="col "> SPARE</th>
            </tr>
          </thead>
          <tbody>
            {isLoading === true ? (
              <h1> </h1>
            ) : (
              data.map((res, index) => {
                return (
                  <tr>
                    <th scope="row">1</th>
                    <td style={{ position: "relative" }}>
                      {" "}
                      <Link to={"/ci/" + res._id}>{res.ci.tpi_rcName}</Link>
                    </td>
                    <td>20</td>
                    <td>06</td>
                    <td>14</td>
                    <td>
                      <button type="submit">0</button>
                    </td>
                    <td>{res.ci.tpi_aaSolution}</td>
                    <td>
                      <a href="https://www.google.com" type="submit">
                        url
                      </a>
                      <a href={"https://" + res.ci.tci_wUrl}> web</a>
                    </td>
                    <td>4.95%</td>
                    <td>6.95%</td>
                    <td>18 February, 2021</td>
                    <td>8</td>
                    <td>{res.ci.tpi_ntc}</td>
                    <td>{res.ci.tpi_vtSector}</td>
                    <td>{res.ci.tpi_brPartner}</td>
                    <td>{res.ci.tpi_aBdmOwner}</td>
                    <td>{res.ci.tpi_ccLocation}</td>
                    <td>{res.ci.tpi_EEADocuments}</td>
                    <td>{res.ci.tpi_TLoAR}</td>
                    <td>{res.cti.cti_fcaForm}</td>
                    <td>{res.cti.cti_bInformation}</td>
                    <td>{res.cti.cti_otAgreement}</td>
                    <td> </td>
                    <td>{res.cti.cti_hwUrl}</td>
                    <td>{res.cti.cti_wCompliance}</td>
                    <td>{res.cti.cti_wUrl_proofD}</td>
                    <td>
                      <input type="checkbox" class="le-checkbox" />
                    </td>
                    <td>{res.cti.cti_bPlan}</td>
                    <td>{res.kyc.kyc_name}</td>
                    <td>{res.kyc.kyc_sHolds}</td>
                    <td>
                      <input type="checkbox" class="le-checkbox" />
                    </td>
                    <td>{res.kyc.kyc_nationality}</td>
                    <td>{res.kyc.kyc_notarized}</td>
                    <td>{res.kyc.kyc_ExpiryDate}</td>
                    <td>{res.kyc.kyc_Address}</td>
                    <td>{res.kyc.kyc_toProof}</td>
                    <td>
                      <input type="checkbox" class="le-checkbox" />
                    </td>
                    <td>01 January, 2021</td>
                    <td>1 April, 2021</td>
                    <td>3</td>
                    <td>{res.kyc.kyc_paDocument}</td>
                    <td>{res.sd.fsd_cbs}</td>
                    <td>{res.sd.fsd_pbs}</td>
                    <td>{res.sd.fsd_pow}</td>
                    <td>{res.sd.fsd_cap}</td>
                    <td>{res.sd.lta_gfl}</td>
                    <td>{res.sd.lta_cra}</td>
                    <td>{res.sd.lta_fdsa}</td>
                    <td>{res.sd.lta_fbo_cr}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
