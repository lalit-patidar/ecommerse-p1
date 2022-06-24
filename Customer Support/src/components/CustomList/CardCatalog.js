import React from "react";
import "./CardCatalog.css";
import NumberFormat from "react-number-format";
import { ReactComponent as InfoIcon } from "../../assets/svg/customerList/infoIcon.svg";

function CardCatalog() {
	let radioBtnList = [
		{ name: "All", number: null },
		{ name: "Claims", number: 2345 },
		{ name: "Returns", number: 234 },
		{ name: "Chargebacks", number: 0 },
	];
	return (
		<div className="cardContainer">
			<div className="catalogHeader">
				<div className="radioButtonGroup">
					{radioBtnList.map((radioBtn, idx) => {
						return (
							<div className="radioBtn">
								<input
									type="radio"
									id={radioBtn.name}
									name="radioCatalog"
									value={radioBtn.name}
								/>
								{radioBtn.number !== null && (
									<label className="radioNumber">
										<NumberFormat
											value={radioBtn.number}
											displayType={"text"}
											thousandSeparator={true}
										/>
									</label>
								)}
								<label for={radioBtn.name}>{radioBtn.name}</label>
							</div>
						);
					})}
				</div>
				<div className="recentActions">
					<button>Recent actions</button>
				</div>
			</div>
			<div className="catalogBody">
				<div className="notification">
					<InfoIcon />
					<span>
						<span style={{ color: "#0072BC" }}>
							<NumberFormat
								value={1234}
								displayType={"text"}
								thousandSeparator={true}
							/>
							<span> Requests</span>
						</span>
						<span> require immediate action</span>
					</span>
				</div>
				<div className="resultShow">
					<h3>Results: 9</h3>
				</div>
			</div>
		</div>
	);
}

export default CardCatalog;
