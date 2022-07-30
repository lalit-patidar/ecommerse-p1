import React, { useState, useEffect } from "react";
import "./BrowseCategory.css";
// import { useHistory } from "react-router-dom";

const BrowseCategory = (props) => {
    // const history = useHistory();
    const [category, setcategory] = useState([]);
    const [categoryloop, setcategoryloop] = useState([]);
    const [count, setcount] = useState(0);
    const [selected, setselected] = useState([]);
    const [showBrowse, setShowBrowse] = useState(false);

    const showBrowsecategory = () => {
        setShowBrowse(!showBrowse);
    };

    const haldeRedirect = () => {
        props.continuebutton()
    };
    const addsubcategory = (category, index) => {
        var s = selected;
        if(s.length-1 >= index){
            s.length = index+1;
            s[index] = category.category.id;
        }else{
            s.push(category.category.id);
        }
        props.updatecategory(s);
        setselected(s);
        if(category.children && category.children.length > 0){
            var loop = categoryloop;
            if(loop.length-1 > index){
                loop.length = index+1;
                loop.push(category.children);
            }else{
                loop.push(category.children);
            }
            setselected(s);
            setcategoryloop(loop);
        }else{
            var loop = categoryloop;
            if(loop.length-1 > index){
                loop.length = index+1;
            }
            setcategoryloop(loop);
        }
        setcount(count+1);
    }
    const check = (id) => {
        return selected.indexOf(id) == -1 ? false : true;
    }
    useEffect(()=>{
        if(category.length == 0){
            setcategory(props.category);
            setcategoryloop([props.category]);
        }
    },[count])

    return (
        <>
            <div className="browse-main">
                <button
                    className="browse-heading"
                    onClick={showBrowsecategory}
                    type="button"
                >
                    Browse Category
                </button>
                {showBrowse ? (
                    <div className="browse-category">
                        <div className="main-browse-category">
                            <div className="row main-category">
                                {categoryloop.map(
                                    (categorylist, i) => {
                                        const result = (
                                        <div className="col-sm-12 col-md-3 category" key={'listof'+i}>
                                            <div className="category-type">
                                                {categorylist.length > 0 && categorylist.map(
                                                    (category, index) => {
                                                        const results = (
                                                            <div className={check(category.category.id) ? "selectdiv selected" : "selectdiv"} onClick={()=>addsubcategory(category, i)} key={category.category.id}>
                                                                <span className="Fontblack">{category.category.name}</span>
                                                            </div>
                                                        )
                                                    return results}
                                                )}
                                            </div>
                                        </div>
                                    )
                                    return result}
                                )}
    

                            </div>
                            <div className="category-btn-sec">
                                <button
                                    className="category-btn"
                                    onClick={haldeRedirect}
                                    type="button"
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p></p>
                )}
            </div>
        </>
    );
};

export default BrowseCategory;
