import React, { useState } from "react";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Button, ButtonBase, CssBaseline, Divider, FormControl, Grid, MenuItem, Pagination, Select, Tab, Tabs } from "@mui/material";
import { Box, styled } from "@mui/system";
import { red, blue, grey, green } from "@mui/material/colors";
import { Dropdown, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {setDetailItem, setPublicPage} from './../../../actions/actions'


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

function SelectComponent({items, fn_change}) {
    const [age, setAge] = React.useState(0);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 200 }}>
            <Select value={age} onChange={handleChange} displayEmpty inputProps={{ 'aria-label': 'Without label' }}>
                {items.map((item, index) => 
                    <MenuItem value={index}>{item}</MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

function TabPanel() {
    const [value, setValue] = React.useState(0);
    const f_items = ['Last 90 days', '2022','2019','2018']
    const s_items = ['All', 'Delivered','In Transit','Awaiting feedback']
  
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
  
    return (
        <Box sx={{ border: "1px solid #CBCBCB", borderRadius: "5px", p: 2}}>
            <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
                <Tab value={0} label="Orders" />
                <Tab value={1} label="Canceled orders" />
                <Tab value={2} label="Claims" />
                <Tab value={3} label="Returns" />
            </Tabs>
            <Divider />
            <Box sx={{display: "flex"}}>
                <Typography variant="h6" component="label" sx={{pt: 2.5}}>
                8 orders placed in
                </Typography>
                <SelectComponent items={f_items} />

                <Typography variant="h6" component="label" sx={{pt:2.5, pl:5}}>
                Filter By
                </Typography>
                <SelectComponent items={s_items} />
            </Box>
        </Box>
    );
}

function ShopItem({item}) {
    const dispatch = useDispatch()
    const moveToDetail = () => {
        dispatch(setPublicPage(1))
        dispatch(setDetailItem(item.id))
    }
    const currency = ["$", "Eur"];
    const itemState = ["Awaiting Payment", "Shipped", "Not shipped", "Not yet shipped", "In transit", "Delivered", "Awaiting feedback"];
    const color = [red[500], grey[900], grey[900], grey[900], grey[900], green[500], green[500]];
    const [trackState, setTrackState] = useState(0)
    return (
        <Box sx={{border: "1px solid #CBCBCB", borderRadius: "5px", margin :"10px 0px"}}>
            <Box sx={{m: 2}}>
                <Typography variant="h6" componet="h6" color={color[item.status]} >
                    {itemState[item.status]}
                </Typography>
                {item.status != 0 ? 
                    <Typography variant="subtitle1" componet="p" color={grey[500]} >
                        Delivery estimate: {item.created}
                    </Typography> : null}
                {item.status == 0 ?
                    <Typography variant="subtitle1" componet="p" color={grey[500]}>
                        An unpaid item requested for this purchase has been opened. Payment must be made by 29 Sep 2017.
                    </Typography> : 
                    (item.tracking != null ?(
                        trackState == 0 ? 
                        <Typography variant="subtitle1" componet="p" color={blue[500]} >
                            Track this order
                        </Typography> : 
                        <Box>
                            <Typography variant="subtitle1" componet="p" color={blue[500]} >
                            Hide tracking details
                            </Typography>
                            <Grid container>
                                <Grid item width={150}>Carrier : </Grid>
                                <Grid item >{item.currency}</Grid>
                            </Grid>
                            <Grid container>
                                <Grid item width={150}>Carrier : </Grid>
                                <Grid item >{item.tracknumber}</Grid>
                            </Grid>
                        </Box>) : null)}
            </Box>
            <Divider />
            <Box sx={{m: 2}}>
                <Grid container spacing={1}>
                    <Grid item direction="column" xs={3} >
                        <Box sx={{borderRight: "1px solid grey"}}>
                            <Typography gutterBottom variant="subtitle1" component="h6">
                                ORDER PLACED
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                                {item.created}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h6">
                                {item.soldbySeller} ITEM SOLD BY
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p" color={blue[500]}>
                                {item.sellerName}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h6">
                                Total
                            </Typography>
                            <Typography gutterBottom variant="body2" component="p">
                                US {currency[item.totalCurrency]}{item.totalAmount}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h6">
                                ORDER#{item.orderNum}
                            </Typography>
                            <Typography gutterBottom variant="subtitle1" component="h6" onClick={moveToDetail} color={blue[500]} sx={{cursor: "point"}}>
                                view order detail
                            </Typography>
                            {/* onClick={()=>dispatch({type: "MOVETODETAIL", value: item.id})} */}
                            {/* <Link underline="hover"  className="my-nicho-shop-font Blue_Main" href="/MNSOrderDetail">
                                view order detail
                            </Link> */}
                        </Box>
                    </Grid>
                    <Grid item xs={9} >
                        <Box>
                            <Grid container spacing={2}>
                                {item.items.map((detailItem, index)=>
                                    <Box sx={{display: "flex", width: "100%", p: 2}}>
                                        <Grid xs={3}>
                                            <ButtonBase sx={{ width: 150, height: 150 }}>
                                                <Img alt="Image" src={detailItem.image} />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid container item xs={9}>
                                            <Grid item xs={9} spacing={2}>
                                                <Typography gutterBottom variant="subtitle1" component="h1" color={blue[500]} sx={{fontSize : "20px", mt: 2}}>
                                                EE PAY AS YOU GO 4G prepaid simcard $150.50
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Item price: US ${detailItem.price}
                                                </Typography>
                                                <Typography variant="body2" gutterBottom>
                                                    Shipping: US ${detailItem.currency}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={3} height={30} spacing={2}>
                                                {item.status == 0 ? 
                                                    <Button variant="contained" sx={{mt : 2, width: "100%"}} >Pay Now</Button> :
                                                    <Button variant="contained" >View seller’s other items</Button>
                                                }
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="first" style={{alignSelf : "left"}}>
                                                    More Actions
                                                    </Dropdown.Toggle>
                                                    {item.status == 0 && item.payment == 0 ?
                                                        <Dropdown.Menu >
                                                            <Dropdown.Item href="#/action-2">Contact seller</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Leave seller feedback</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Cancel this order</Dropdown.Item> 
                                                        </Dropdown.Menu>:
                                                    null}
                                                    {item.status == 0 && item.payment != 0 ?
                                                        <Dropdown.Menu >
                                                            <Dropdown.Item href="#/action-2">View seller’s other items</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Contact seller</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Leave seller feedback</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Cancel this order</Dropdown.Item> 
                                                        </Dropdown.Menu>:
                                                    null}
                                                    {item.status >= 5 && item.tracking == null?
                                                        <Dropdown.Menu >
                                                            <Dropdown.Item href="#/action-2">View similar items</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Contact seller</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Not received item</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Return this item</Dropdown.Item> 
                                                        </Dropdown.Menu>: 
                                                    null}
                                                    {item.status >= 5 && item.tracking ?
                                                        <Dropdown.Menu >
                                                            <Dropdown.Item href="#/action-2">View similar's other items</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">View similar items</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Contact seller</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-2">Ask to cancel order</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-3">Not received item</Dropdown.Item>
                                                            <Dropdown.Item href="#/action-4">Return this item</Dropdown.Item> 
                                                        </Dropdown.Menu>: 
                                                    null}
                                                </Dropdown>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )}
                                
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>       
            </Box>
        </Box>
    )
}

function Pagenation({length}){
    const [pagenum, setPagenum] = useState("25");
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const handleSelectChange = (event, value) => {
        setPagenum(event.target.value)
    }

    return (
        <Box sx={{border: "1px solid #CBCBCB", borderRadius: "5px", margin :"10px 0px"}}>
            <Box sx={{m: 2}}>
                <Grid container spacing={2} >
                    <Grid item xs={2}>
                        <Typography variant="subtitle1" container="h6" sx={{mt: 2}}>
                        Page {page} / {Math.ceil(length / pagenum)}
                        </Typography>
                    </Grid>
                    <Grid item xs={8} >
                        <Pagination count={Math.ceil(length / pagenum)} sx={{mt : 2, padding: "auto"}} page={page} onChange={handleChange} />
                    </Grid>
                    <Grid item xs={2}>
                        <Form.Select aria-label="Default select example" onChange={handleSelectChange}>
                            {pagenum == "10" ? <option value="10" selected >10</option> : <option value="10" >10</option>}
                            {pagenum == "25" ? <option value="25" selected >25</option> : <option value="25" >25</option>}
                            {pagenum == "50" ? <option value="50" selected >50</option> : <option value="50" >50</option>}
                            {pagenum == "100" ? <option value="100" selected >100</option> : <option value="100" >100</option>}
                        </Form.Select>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

const ShopItems = [{
    id : 12,
    payment : 1,    //payment method : Awaiting payment : 0, visa : 1 
    created : 123345234,
    soldbySeller : 1,
    sellerName : "Andrey",
    totalAmount: 12345.6,
    totalCurrency : 0,
    orderNum : "12312312-123123",
    status: 0,
    delivery: 1234,
    tracking:{
        carrier: "string",
        number: 1234,
        step: 0  // 0: none, 1: accepted, 2: intransit 3: delivered
    },
    summary:{
        subtotal: 1,
        shippingCost: 123,
        total: 123,
        refund: 12,
        currency: 1
    },
    address:{
        id: 12,
        name: "Book",
        userId: 12,
        address1: "sadadasdasd",
        address2: "asdasdasdasdas",
        city: "Ryssby, Sweden",
        state: "show state",
        zip: "zipcode",
        country: 3,
        phone: "+1 519 876 8907"
    },
    items:[
        {
            id:1,
            condition: "asdasdasd",
            qty: 6,
            image: "/assets/product-img/product.png",
            variables:[
                {
                    "variable_name":"variable_value"
                }
            ],
            price:123,
            currency: 123
            
        }
    ]
}]

function Main() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <br />
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" className="my-nicho-shop-font Blue_Main" href="/mynichoshop">
                    My NichoShop
                    </Link>
                    <Typography className="my-nicho-shop-font" >Purchases</Typography>
                </Breadcrumbs>
                <br />
                <Typography variant="h3" component="h3" >
                    Purchases
                </Typography>
                <TabPanel />
                {ShopItems.map(item => 
                    <ShopItem item={item} />    
                )}
                <Pagenation length={ShopItems.length} />
            </Container>
        </React.Fragment>
    );
}

export default Main;