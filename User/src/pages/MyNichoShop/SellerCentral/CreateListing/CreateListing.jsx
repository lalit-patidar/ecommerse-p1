import React, {useEffect, useState} from "react";
import BrowseCategory from "./components/browsecategory/BrowseCategory";
import CreatelistSearch from "./components/createlistSearch/CreatelistSearch";
import FinishDraft from "./components/finishdraft/FinishDraft";
import HowitWorks from "./components/howitworks/HowitWorks";
import HowitWorkList from "./components/howitworks/HowitWorkList";
import Logo from "../../../../components/logo/Logo";
import "./CreateListing.css";
import axios from "axios";
var filtertexts = [];
const CreateListing = () => {
    const [category, setcategory] = useState([]);
    const [parcategory, setparcategory] = useState([]);
    const [filtertext, setfiltertext] = useState([]);
    const [count, setcount] = useState(0);
    const getallcategories = async () => {
        try{
            const data = await axios.get(
                `${process.env.REACT_APP_API_DOMAIN}/category/all`
            );
            if(data.data){
                setcategory(data.data);
            }
        }catch(e){
            console.log(e);
        }
        try{
            const data = await axios.get(
                `${process.env.REACT_APP_API_DOMAIN}/category/list`
            );
            if(data.data){
                setparcategory(data.data);
            }
        }catch(e){
            console.log(e);
        }
    }
    useEffect(()=>{
        getallcategories();
    },[])
    const categoryfilter = async (id, index) => {
        var f = await parcategory.filter((d)=>{
            if(d.id == id){
                return d;
            }
        });
        if(f.length > 0){
            if(filtertexts.length > index){
                filtertexts[index].push(f[0]);
            }else{
                filtertexts[index] = f;
            }
            setfiltertext(filtertexts);
            if(f[0].parentId > 0){
                categoryfilter(f[0].parentId, index);
            }
        }
        setcount(count+1);
        // console.log('filter', f);
        // console.log('filtertexts',filtertexts);
    }
    const changetext = async (val) => {
        filtertexts = [];
        setfiltertext([]);
        categoryfilter(60, 0);
        try{
            const data = await axios.get(
                `${process.env.REACT_APP_API_DOMAIN}/category/search?keyword=${val}`
            );
            if(data.data){
                data.data.forEach((d, i)=>{
                    categoryfilter(d, i);
                })
            }
        }catch(e){
            console.log(e);
        }
    }
    return (
        <>
            <div className="main-create-list">
                <div className="main-logo">
                    <Logo />
                    {/* <h3>Create a listing</h3> */}
                </div>
                <CreatelistSearch filtertext={filtertext} changetext={changetext} />
                {category.length > 0 ?
                    <BrowseCategory category={category} />
                    : null
                }
                <FinishDraft />
                <HowitWorks />
                <HowitWorkList />
            </div>
        </>
    );
};

export default CreateListing;
