import React from "react";
import BodyLabel from "../components/CustomList/BodyLabel";
import CardCatalog from "../components/CustomList/CardCatalog";
import CustomPagination from "../components/CustomList/CustomPagination";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./CustomerList.css";

function CustomerList() {
	return (
		<div className="customerList">
			<Header />
			<div className="body">
				<BodyLabel />
				<CardCatalog />
				<CustomPagination />
			</div>
			<Footer />
		</div>
	);
}

export default CustomerList;
