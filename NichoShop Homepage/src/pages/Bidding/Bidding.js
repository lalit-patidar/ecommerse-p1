import React , { Component } from "react";
import "./Bidding.css";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Card from "../../components/MyNichoShop/card/Card";
import Footer from "../../components/MyNichoShop/footer/Footer";
import Notification from "../../components/notification/Notification";
import { useSelector, useDispatch } from "react-redux";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import axios from 'axios';
import PaginationComponent from "../../components/pagination/PaginationComponent";
import Image from 'react-random-image'

class Pagination extends Component {   
    state = {
        data: [],
        totalRecords:0,
        limit: 6
    }
    componentDidMount(){
        this.loadData(1);
    }
    loadData = (page) =>{
        console.log('page>>',page)
        axios
            .get(`https://reqres.in/api/users?page=`+page)
            .then(res => {
                const data = res.data;
                console.log('data>>>>',data)
                this.setState({
                    data: data.data,
                    totalRecords : data.total ? data.total : 0,
                    limit : data.per_page ? data.per_page : 6
                })
            });
    }
    getPaginatedData = page =>{
        this.loadData(page);
    }
    gridTemplate(props) {
        const src = props.EmployeeID + '.png';
        return (<div className='image'>
           <Image width={180} height={180} />
        </ div>);
    }
    productName(props){
        return (<div className='test'>
            <h4 className="mb-3"><a className="e-link" htef="">{props.first_name}- {props   .last_name}</a></h4>
            <div><span className="text-black-50">Offered By:</span> <a className="e-link" htef="">seller username1</a></div>
            <div><span className="text-black-50">Your max bid:</span> US $11.29</div>
        </div>);
    }    
    timeSection(props){
        return (<div className='timesection'>
            <div className="left-time text-end">
                <span className="text-danger mb-3 d-block">12m 34s left</span>
                <span className="d-block text-black-50">Today</span>
            </div> 
            <div className="text-end text-black-50">01:34 AM PDT</div>
        </div>);
    }
    priceSection(props){
        return (<div className='pricesection'>
            <div className="main-price text-end mb-3"><span className="text-success h4">US $ 12,345.67</span> <span className="text-black-50 d-block">6 bids</span></div>
            <div className="price-remaining text-end mb-3"><span className="h4">US $ 12,345.67</span> <span className="text-black-50 d-block">By it now</span></div>
            <div className="price-discount text-end"><span className="text-black-50 h4">+ US $ 123.67</span> <span className="text-black-50 d-block">shipping</span></div>
        </div>);
    } 
    buttonSection(props){
        return (<div className='buttonsection text-end'>
            <div className="d-grid gap-2 justify-content-md-end">
                <a className="view-seller-items btn btn-primary" htef="">View sellers other item</a>
                <a className="buybutton btn btn-outline-primary" htef="">Buy it Now</a>
            </div>
            <div className="dropdown pt-3 pb-5">
              <div className="dropdown-toggle" type="button" id="MoreActionsButton" data-bs-toggle="dropdown" aria-expanded="false">More actions</div>
              <ul className="dropdown-menu  dropdown-menu-end" aria-labelledby="MoreActionsButton">
                <li><a className="dropdown-item" href="#">Add</a></li>
                <li><a className="dropdown-item" href="#">Edit</a></li>
              </ul>
            </div>
            <a className="remove-items text-danger" htef=""><i class="bi bi-trash"></i> Remove</a>
        </div>);
    }      
   
    render(){
        const { data, totalRecords, limit } = this.state;
        return(
            <div className="my-nicho-shop">
                  {/* <Header /> */}
                  <Menu />
                   <div className="my-nicho-shop-container container-ns">
                        <Breadcrumbs className="mt-4" aria-label="breadcrumb">       
                            <Link color="text.primary" href="/">My NichoShop</Link>
                            <Typography color="text.primary">Bidding</Typography>
                        </Breadcrumbs>
                        <h2 className="title fw-bold my-4">Bidding</h2>
                        <div className="border rounded">
                                <div className="dropdown top-dropdown pt-3 pb-5">
                                    <span>Show:</span>
                                    <div className="dropdown-toggle" type="button" id="total-records" data-bs-toggle="dropdown" aria-expanded="false">All(9)</div>
                                    <ul className="dropdown-menu  dropdown-result-end" aria-labelledby="total-records">
                                            <li><a className="dropdown-result" href="#">All(10)</a></li>
                                            <li><a className="dropdown-result" href="#">All(20)</a></li>
                                    </ul>
                                </div> 
                            <table className="table m-0">
                                <tbody>
                                    {
                                        data && data.length > 0 ?
                                        data.map((item,index)=>(
                                            <tr>
                                                <td width="180" className="p-3" scope="col">{this.gridTemplate(item)}</td>
                                                <td scope="col" className="p-3">{this.productName(item)}</td>
                                                <td width="10%" className="p-3" scope="col">{this.timeSection(item)} </td>
                                                <td width="12%" className="p-3" scope="col">{this.priceSection(item)}</td>
                                                <td width="15%" className="p-3" scope="col">{this.buttonSection(item)}</td>
                                            </tr>
                                        )) :
                                        <h4>No Data Found!!</h4>
                                    }
                                </tbody>
                            </table>
                            <div className="biddingNote border-bottom p-3">*If you’ve been outbid, you can be again the high bidder in the case, if the seller cancels a bid or reduces the reserve price for example.</div> 
                            <div className="p-3 d-flex justify-content-between align-items-center">
                                <div className="page-result-total fs-5">Page 1 of 4</div>
                                {totalRecords > 6 &&
                                    <PaginationComponent
                                        getAllData={this.data} 
                                        totalRecords={totalRecords}
                                        itemsCountPerPage = {limit} />
                                }
                                <div className="result-per-page d-flex">
                                    <div className="pe-2 fs-6">Results per page</div>
                                    <div className="dropdown-toggle" type="button" id="resultperpage" data-bs-toggle="dropdown" aria-expanded="false">20</div>
                                    <ul className="dropdown-menu  dropdown-result-end" aria-labelledby="resultperpage">
                                        <li><a className="dropdown-result" href="#">30</a></li>
                                        <li><a className="dropdown-result" href="#">50</a></li>
                                    </ul>
                                </div>                                  
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default Pagination;
