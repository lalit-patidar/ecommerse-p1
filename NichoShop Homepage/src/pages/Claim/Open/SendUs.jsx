import { useEffect, useState } from "react";

import DocumentSend from "../../../components/Claims/ClaimBtnDialogs/DocumentSend";
import ClaimStatus from "../../../components/Claims/ClaimProgressBar/index.jsx";
import ClaimDetails from "../../../components/Claims/ClaimDetails";

const SendUs = () => {
  const [claimDetils, setClaimDetails] = useState({});

  useEffect(() => {
    setClaimDetails({
      item: [
        {
          info: "EE PAY AS YOU GO 4G prepaid sim card with preloader US $150.50 forcalls, everything in one package",
          condition: "New",
          claimItem: "2 of 3",
        },
      ],
      history: [
        {
          date: "28 Sep 2017",
          topic:
            "NichoShop Customer Support requested additional documentation from you",
        },
        {
          date: "28 Sep 2017",
          topic: "You asked us to help",
          reason: "The seller hasn't responded yet",
          comment: "Example of the buyer's comment",
        },
        {
          date: "28 Sep 2017",
          topic: "You hav eopened a claim for not received item",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ",
        },
        {
          date: "28 Sep 2017",
          topic: "The seller added shipping details",
          carrier: "USPS",
          trackingNumber: "GB12345678901234567890",
        },
        {
          date: "28 Sep 2017",
          topic: "You have opened a claim for not received item",
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release ",
        },
        {
          date: "28 Sep 2017",
          topic: "You have opened a claim for not received item",
          claimID: "1234567890",
          claimAmount: "US $1,234.56",
        },
        {
          date: "24 Sep 2017",
          topic: "The seller marked this order as shipped",
        },
        {
          date: "22 Sep 2017",
          topic: "You paid for this order",
          orderDetails: "US $1,234.56(12345678-123456)",
        },
      ],
    });
  }, []);

  return (
    <div className="claim-open">
      <h2>Send us documentation</h2>

      <DocumentSend />

      <div className="claim-open-content">
        <div className="claim-open-header">
          <h3>
            NichoShop Customer Support requested additional documentation from
            you
          </h3>
          <p>Provide us with the documentation by 22 Sep 2019</p>
        </div>

        <div className="claim-close">
          <p>
            If the problem was resolved, you can <span>close the claim</span>
          </p>
        </div>

        <ClaimStatus position={"in"} />

        <div className="claim-open-detail">
          <div className="item-infor d-lg-flex d-md-block justify-content-between">
            <div>
              <h3>Not recieved item</h3>
              <p>
                Order ID: <span className="order-id">12345678-123456</span>
              </p>
              <p>
                Seller: <span>seller_username</span>
              </p>
            </div>
          </div>

          <ClaimDetails details={claimDetils} />
        </div>
      </div>
    </div>
  );
};

export default SendUs;
