import React from "react";
import "./Bidding.css";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import Card from "../../components/MyNichoShop/card/Card";
import Footer from "../../components/MyNichoShop/footer/Footer";
import Notification from "../../components/notification/Notification";
import { useSelector, useDispatch } from "react-redux";
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Image from 'react-random-image'

export let data: Object[] = [
    {
        Productname: 'EE PAY AS YOU GO 4G prepaid simcard $150.50',Sellername : 'seller username1',Maxbidprice: 11.29, LeftTime:'12m 34s left',showTime:'01:34 AM PDT', OrderDate: new Date(8364186e5),sellerButton:'View sellers other item', buyButton :'Buy it Now'
    },
    {
        Productname: 'EE PAY AS YOU GO 4G prepaid simcard $150.50',Sellername : 'seller username1',Maxbidprice: 11.29, LeftTime:'12m 34s left',showTime:'01:34 AM PDT', OrderDate: new Date(836505e6),sellerButton:'Increase max bid', buyButton :'Buy it Now'
    },
    {
        Productname: 'EE PAY AS YOU GO 4G prepaid simcard $150.50', Sellername :'seller username1', Maxbidprice: 33.29, LeftTime:'12m 34s left',showTime:'01:34 AM PDT', OrderDate: new Date(8367642e5),sellerButton:'View similar items', buyButton :'Buy it Now'
    },
    {
        Productname: 'EE PAY AS YOU GO 4G prepaid simcard $150.50',Sellername : 'seller username1', Maxbidprice: 55.29, LeftTime:'12m 34s left',showTime:'01:34 AM PDT', OrderDate: new Date(8367642e5),sellerButton:'View sellers other item', buyButton :'Buy it Now'
    }];

export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.template = this.gridTemplate;
        this.productname = this.productName;
        this.timeSection = this.timeSection;
        this.priceSection = this.priceSection;
        this.buttonSection = this.buttonSection;
        this.customAttributes1 = {class:'p-3'};

        this.pageOptions = {
            pageSize: 8, pageSizes: true
        };
    }
    gridTemplate(props) {
        const src = props.EmployeeID + '.png';
        return (<div className='image'>
           <Image width={180} height={180} />
        </ div>);
    }
    productName(props){
        return (<div className='test'>
            <div><a className="e-link" htef="">{props.Productname}</a></div>
            <div><span className="text-black-50">Offered By:</span> <a className="e-link" htef="">{props.Sellername}</a></div>
            <div><span className="text-black-50">Your max bid:</span> US${props.Maxbidprice}</div>
        </div>);
    }
    timeSection(props){
        return (<div className='timesection'>
            <div className="left-time text-end"><span className="text-danger">{props.LeftTime}</span> <span className="d-block text-black-50">Today</span></div> 
            <div className="text-end text-black-50">{props.showTime}</div>
        </div>);
    }
    priceSection(props){
        return (<div className='pricesection'>
            <div className="main-price text-end"><span className="text-success">US $ 12,345.67</span> <span className="text-black-50 d-block">6 bids</span></div>
            <div className="price-remaining text-end">US $ 12,345.67 <span className="text-black-50 d-block">By it now</span></div>
            <div className="price-discount text-end"><span className="text-black-50">+ US $ 123.67</span> <span className="text-black-50 d-block">shipping</span></div>
        </div>);
    }
    buttonSection(props){
        return (<div className='buttonsection text-end'>
            <div className="d-grid gap-2">
                <a className="view-seller-items btn btn-primary" htef="">{props.sellerButton}</a>
                <a className="buybutton btn btn-outline-primary" htef="">{props.buyButton}</a>
            </div>
            <div className="dropdown pt-2 pb-4">
              <div className="dropdown-toggle" type="button" id="MoreActionsButton" data-bs-toggle="dropdown" aria-expanded="false">More actions</div>
              <ul className="dropdown-menu  dropdown-menu-end" aria-labelledby="MoreActionsButton">
                <li><a className="dropdown-item" href="#">Add</a></li>
                <li><a className="dropdown-item" href="#">Edit</a></li>
              </ul>
            </div>
            <a className="remove-items text-danger" htef=""><i class="bi bi-trash"></i> Remove</a>
        </div>);
    }
    render() {
        return  <div className="my-nicho-shop">
            {/* <Header /> */}
            <Menu />
            <div className="my-nicho-shop-container container-ns">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="text.primary" href="/">My NichoShop</Link>
                    <Typography color="text.primary">Bidding</Typography>
                </Breadcrumbs>
                <h2 className="title">Bidding</h2>
                <GridComponent className="border rounded" dataSource={data} allowPaging={true} pageSettings={this.pageOptions}>
                    <ColumnsDirective>
                        <ColumnDirective customAttributes={this.customAttributes1} width='180' template={this.template}/>
                        <ColumnDirective customAttributes={this.customAttributes1} template={this.productname} />
                        <ColumnDirective customAttributes={this.customAttributes1} width='10%' template={this.timeSection} />
                        <ColumnDirective customAttributes={this.customAttributes1} width='15%' template={this.priceSection} />
                        <ColumnDirective customAttributes={this.customAttributes1} width='20%' template={this.buttonSection} />
                    </ColumnsDirective>
                    <Inject services={[Page]}/>
                </GridComponent>
                <div className="note-section">*If you’ve been outbid, you can be again the high bidder in the case, if the seller cancels a bid or reduces the reserve price for example.</div>
            </div>
            <Footer />
        </div>;           
    }
};
