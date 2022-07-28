import React, { useState, useEffect } from "react";
import Nav from "../../container/Nav/navbar";
import "./category.css";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Footer from "../../container/Footer/footer";
import Alert_Success from "./alert_success";
import Alert from "./alert";
import Axios from "axios";
import { MultiSelect } from "react-multi-select-component";

const Category = () => {
    const [category, setInitialdata] = useState([]);
    const [conditions, setconditions] = useState([]);
    const [specifics, setspecifics] = useState([]);
    const [msg, setMsg] = useState("");
    const [renamecat, setRenamecat] = useState(null);
    const [toggleAccordionButton, setToggleAccordionButtonState] =
        useState(null);
    const [CategoryValue, setAddCategoryValue] = useState("");
    const [SubCategoryValue, setSubCategoryValue] = useState("");
    const [title, setTitle] = useState("");
    const [categoryrename, setRename] = useState("");
    const [categoryspecifics, setcategoryspecifics] = useState(
        {
            id: 1,
            conditions: [],
            specifics: []
        }
    );
    const [showA, setShowA] = useState(false);
    const [showB, setShowB] = useState(false);
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    const [specificsValue, setspecificsValue] = useState(null);
    const toggle = (index) => {
        setToggleAccordionButtonState(index);
    };
    const [movecate, setmovecate] = useState(null);
    const [moveto, setmoveto] = useState(null);
    const [categorydisplay, setcategorydisplay] = useState([]);
    const [subcategory, setsubcategory] = useState([]);
    const addCategoryValue = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "addCategory":
                if (value.length == 0) {
                    alert("Enter the CategoryName");
                } else {
                    setAddCategoryValue(value);
                }
                break;
            case "addSubCategory":
                if (value.length == 0) {
                    alert("Enter your SubCategoryName");
                } else {
                    setSubCategoryValue(value);
                }
                break;
            case "setrename":
                if (value.length == 0) {
                    alert("Enter your Setrename");
                } else {
                    setRename(value);
                }
                break;
            default:
                break;
        }
    };
    const resetinputs = () => {
        setAddCategoryValue("");
        setRename("");
        setSubCategoryValue("");
    }
    const gecategories = () => {
        Axios.get(process.env.REACT_APP_DOMIAN_API+"/admin/category/all").then(
            (res) => {
                if(res.data.length > 0){
                    if(categorydisplay.length > 0){
                        var se = res.data;
                        categorydisplay.forEach(c=>{
                            se.forEach(e=>{
                                if(e.category.id == c.id){
                                    if(e.children){
                                        se = e.children;
                                    }else{
                                        se = [];
                                    }
                                }
                            })
                        })
                        setsubcategory(se);
                    }
                    setInitialdata(res.data);
                }
            }
        );
    }
    const movecategory = () => {
        var url = "/admin/category/parent/"+moveto.id+"/"+movecate.id;
        Axios.put(process.env.REACT_APP_DOMIAN_API+url).then(
            (res) => {
                gecategories();
                setShowB(true);
            }
        );
    }
    const getspacificsandconditions = () => {
        Axios.get(process.env.REACT_APP_DOMIAN_API+"/admin/category/conditions").then(
            (res) => {
                if(res.data.length > 0){
                    var d = [];
                    res.data.forEach(e=>{
                        d.push({'label': e.name, 'value': e.id});
                    })
                    setconditions(d);
                }
            }
        );
        Axios.get(process.env.REACT_APP_DOMIAN_API+"/admin/category/specifics").then(
            (res) => {
                if(res.data.length > 0){
                    setspecifics(res.data);
                }
            }
        );
    }
    useEffect(() => {
        gecategories();
        getspacificsandconditions();
    }, []);

    const updateconditionandspecifics = (cs) => {
        var ccs = [];
        cs.conditions.forEach((c, i)=>{
            ccs.push(c.value);
        })
        var update = {
            "conditions": ccs,
            "specifics":cs.specifics
        }
        
        Axios.put(process.env.REACT_APP_DOMIAN_API+"/admin/category/" + cs.id, update,
        ).then((res) => {
            if (res.status == 200 && res.data && res.data.status == "true") {
                toggleShowA();
            }
        });
    }

    const AddSubCategory = (id) => {
        if(SubCategoryValue && SubCategoryValue != ''){
            Axios.post(process.env.REACT_APP_DOMIAN_API+"/admin/category/parent/" + id, {
                name: SubCategoryValue,
            }).then((res) => {
                if (res.status == 200 && res.data && res.data.status == "true") {
                    setMsg('Subcategory added successfully');
                    resetinputs();
                    successfulDelete();
                    gecategories();
                }else{
                    setMsg('Error while adding subcategory');
                    successfulDelete();
                }
            });
        }
    };
    // const getActionData = (id) => {
    //     Axios.post('https://nichoshop.com/api/v1/admin/category/' + id + '/attributes' + id, { name: SubCategoryValue })
    //         .then(res => {

    //         })
    // }
    const AddCategory = () => {
        if(CategoryValue && CategoryValue != ''){
            Axios.post(process.env.REACT_APP_DOMIAN_API+"/admin/category/parent/0", {
                name: CategoryValue,
            }).then((res) => {
                if (res.status == 200) {
                    setMsg('Category added successfully');
                    successfulDelete();
                    gecategories();
                    resetinputs();
                }
            });
        }
    };

    const SetReName = (name) => {
        Axios.put(
            process.env.REACT_APP_DOMIAN_API+"/admin/category/rename/" +
            renamecat.category.id +
                "/" +
                name
        ).then((res) => {
            if (res.status == 200 && res.data && res.data.status == "true") {
                setMsg('Category name updated successfully');
                successfulDelete();
                gecategories();
                resetinputs();
            }
        });
    };

    const edit = (name) => {
        setTitle(name);
    };
    const rename = (name, category) => {
        setRenamecat(category);
        setTitle(name);
    };
    const addspecific = () => {
        if(specificsValue){
            var ccc = Object.assign({}, categoryspecifics);
            ccc.specifics.push(
                specificsValue,
            );
            setcategoryspecifics(ccc);    
            updateconditionandspecifics(ccc);
        }
    }
    const categorydelete = (category) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="custom-ui text-center alert_window px-5 py-4">
                        <h3>Confrim your delete</h3>
                        <p>Are you sure you want to delete Fashion?</p>
                        <button
                            type="button"
                            onClick={onClose}
                            className="btn mx-2 px-3 btn-sm btn-outline-dark"
                        >
                            Cancel
                        </button>
                        <button
                            className="btn btn-sm btn-primary mx-2 px-3"
                            onClick={() => {
                                onClose();
                                Axios.delete(process.env.REACT_APP_DOMIAN_API+"/admin/category/"+category.category.id).then((res) => {
                                    if (res.status == 200) {
                                        setMsg('Category deleted successfully');
                                        successfulDelete();
                                        gecategories();
                                    }
                                });
                            }}
                        >
                            Delete
                        </button>
                    </div>
                );
            },
        });
    };
    const successfulDelete = () => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="custom-ui text-center alert_window px-5 py-5">
                        <h5>{msg}</h5>
                        <i
                            className="fa fa-check text-success"
                            style={{ fontSize: "30px" }}
                        ></i>
                    </div>
                );
            },
        });
    };
    const setmulcondition = (cat) => {
        var c = cat;
        if(c.conditions){
            c.conditions.forEach((e, q)=>{
                conditions.forEach(s=>{
                    if(s.value == e){
                        c.conditions[q] = s;
                    }
                })
            })
        }
        if(c.specifics && c.specifics == ""){
            c.specifics = [];
        }else if(c.specifics){
            if(!Array.isArray(c.specifics)){
                c.specifics = JSON.parse(c.specifics)
            }
        }else{
            c.specifics = [];
        }
        setcategoryspecifics(c);
    }
    const movecat = (cat) => {
        setmovecate(cat);
    }
    return (
        <React.Fragment>
            <Nav />
            <Alert showA={showA} toggleShowA={toggleShowA} title={'Updated'} msg={'Condition and specifics are updated successfully'} />
            <Alert showA={showB} toggleShowA={toggleShowB} title={'Moved successfully'} msg={'Category moved successfully'} />
            <div className="container-fluid">
                <div className="row mt-3 text-center">
                    <h3>Categories</h3>
                </div>
                <div className="row col-lg-10 offset-lg-1 col-md-12 col-sm-12">
                    <div className="accordion categorys" id="accordionExample">
                        {category && category.map((category, index) => {
                            const list = (
                                <div
                                    key={index}
                                    className="accordion-item my-3 "
                                >
                                    <h2 className="accordion-header" id={index}>
                                        <div className="dropdown pull-right">
                                            <div>
                                                <img
                                                    src="assets/img/plus-circle (1).svg"
                                                    className="category-dropdown"
                                                    data-bs-toggle="dropdown"
                                                />
                                                <ul className="dropdown-menu">
                                                    <li
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#myModal"
                                                    >
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            onClick={() =>
                                                                rename(
                                                                    category.category
                                                                        .name,
                                                                        category
                                                                )
                                                            }
                                                        >
                                                            <img src="assets/img/edit-2.svg" />
                                                            &nbsp;Rename
                                                        </a>
                                                    </li>
                                                    <li
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#myModal1"
                                                    >
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            onClick={()=>movecat(category.category)}
                                                        >
                                                            <img src="assets/img/arrow-right.svg" />
                                                            &nbsp;Move to
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="dropdown-item"
                                                            href="#"
                                                            onClick={()=>
                                                                categorydelete(category)
                                                            }
                                                        >
                                                            <img src="assets/img/trash.svg" />
                                                            &nbsp;Delete
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {toggleAccordionButton !== index ? (
                                            <button
                                                className="accordion-button collapsed text-white p--20"
                                                onClick={() => {
                                                    toggle(index);
                                                    setmulcondition(category.category);
                                                    var cate = {
                                                        id: category.category.id,
                                                        index: 0,
                                                        name: category.category.name
                                                    }
                                                    setcategorydisplay([cate])
                                                    if(category.children){
                                                        setsubcategory(category.children)
                                                    }else{
                                                        setsubcategory([]);
                                                    }
                                                }}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={
                                                    "#" + category.category.name.replace(/\s/g,'')
                                                }
                                                aria-expanded="false"
                                                aria-controls={
                                                    category.category.name
                                                }
                                            >
                                                <img src="assets/img/plus-circle.png" />
                                                &nbsp;
                                                <b style={{ color: "black" }}>
                                                    {category.category.name}
                                                </b>
                                            </button>
                                        ) : (
                                            <button
                                                className="accordion-button collapsed text-white p--20"
                                                onClick={() => toggle(null)}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={
                                                    "#" + category.category.name
                                                }
                                                aria-expanded="false"
                                                aria-controls={
                                                    category.category.name
                                                }
                                            >
                                                <img
                                                    src="assets/img/minus.png"
                                                    style={{
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                                &nbsp;
                                                <b style={{ color: "black" }}>
                                                    {category.category.name}
                                                </b>
                                            </button>
                                        )}
                                    </h2>
                                    <div
                                        id={category.category.name.replace(/\s/g,'')}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={index}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body row p-4">
                                            <div className="col-lg-12">
                                                <div className="row">
                                                    <p className="categorytopname">
                                                        {categorydisplay.map((c, indexs)=>{ 
                                                            const result = ( <span className="mar-2" onClick={()=>{
                                                                var ds = [];
                                                                // console.log(categorydisplay);
                                                                categorydisplay.forEach((s, m)=>{
                                                                    if(m <= indexs){
                                                                        ds.push(s);
                                                                    }
                                                                })
                                                                if(indexs > 0){
                                                                    setmulcondition(category.category);
                                                                    setsubcategory(category.children);
                                                                    var car = category;
                                                                    for(var i = 0; i<indexs; i++){
                                                                        car = car.children && car.children[categorydisplay[i+1].index] ? car.children[categorydisplay[i+1].index] : [];
                                                                        setmulcondition(car.category);
                                                                        setsubcategory(car.children);
                                                                        // console.log(car);
                                                                    }
                                                                }else{
                                                                    setmulcondition(category.category);
                                                                    category.children ? setsubcategory(category.children) : setsubcategory([]);
                                                                }
                                                                setcategorydisplay(ds);
                                                            }}>{c.name} {" > "}</span> ); return result;
                                                        })} 
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 mb-4">
                                                <div className="row">
                                                    {subcategory && subcategory.map(
                                                        (category, index) => {
                                                            const result = (
                                                                <div
                                                                    className="row"
                                                                    key={index}
                                                                >
                                                                    {/* onClick={() => getActionData(category.category.name.id)} */}
                                                                    <a className="col-10 colorblack" onClick={()=>{
                                                                            setmulcondition(category.category);
                                                                            var c = categorydisplay;
                                                                            c.push({
                                                                                id: category.category.id,
                                                                                index: index,
                                                                                name: category.category.name
                                                                            })
                                                                            setcategorydisplay(c)
                                                                            if(category.children){
                                                                                setsubcategory(category.children)
                                                                            }else{
                                                                                setsubcategory([]);
                                                                            }
                        
                                                                        }}>
                                                                        <span>
                                                                            &nbsp;
                                                                            <b>
                                                                                {
                                                                                    category
                                                                                        .category
                                                                                        .name
                                                                                }
                                                                            </b>
                                                                        </span>
                                                                    </a>
                                                                    <div className="col-2">
                                                                        <div>
                                                                            <i
                                                                                className="fa fa-bars"
                                                                                data-bs-toggle="dropdown"
                                                                            ></i>
                                                                            <ul className="dropdown-menu">
                                                                                <li
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#myModal"
                                                                                >
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="#"
                                                                                        onClick={() =>
                                                                                            rename(
                                                                                                category
                                                                                                    .category
                                                                                                    .name,
                                                                                                    category
                                                                                            )
                                                                                        }
                                                                                    >
                                                                                        <img src="assets/img/edit-2.svg" />
                                                                                        &nbsp;Rename
                                                                                    </a>
                                                                                </li>
                                                                                <li
                                                                                    data-bs-toggle="modal"
                                                                                    data-bs-target="#myModal1"
                                                                                >
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="#"
                                                                                        onClick={
                                                                                            ()=>movecat(category.category)
                                                                                        }
                                                                                    >
                                                                                        <img src="assets/img/arrow-right.svg" />
                                                                                        &nbsp;Move
                                                                                        to
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        className="dropdown-item"
                                                                                        href="#"
                                                                                        onClick={()=>
                                                                                            categorydelete(category)
                                                                                        }
                                                                                    >
                                                                                        <img src="assets/img/trash.svg" />
                                                                                        &nbsp;Delete
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                            return result;
                                                        }
                                                    )}
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="btn-group">
                                                        <div className="col-lg-8 col-sm-8 col-sm-8">
                                                            <input
                                                                type="text"
                                                                name="addSubCategory"
                                                                placeholder="Add a sub-category"
                                                                value={SubCategoryValue}
                                                                onChange={
                                                                    addCategoryValue
                                                                }
                                                                className="form-control"
                                                            />
                                                        </div>
                                                        <div className="col-4 mx-1">
                                                            <button
                                                                className="btn btn-outline-success"
                                                                onClick={() =>
                                                                    AddSubCategory(
                                                                        categorydisplay[categorydisplay.length - 1].id
                                                                    )
                                                                }
                                                            >
                                                                {" "}
                                                                <i className="fa fa-plus"></i>
                                                                &nbsp;Add
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="row">
                                                    <div className="col-lg-10">
                                                        <div className="row">
                                                            <div className="col-2">
                                                                <label htmlFor="Condition">
                                                                    Condition
                                                                </label>
                                                            </div>
                                                            <div className="col-8">
                                                                <MultiSelect
                                                                    options={conditions}
                                                                    value={categoryspecifics.conditions}
                                                                    onChange={(a)=>{
                                                                        var ccc = Object.assign({}, categoryspecifics);
                                                                        ccc.conditions = a;
                                                                        setcategoryspecifics(ccc);
                                                                        updateconditionandspecifics(ccc);
                                                                    }}
                                                                    labelledBy="Choose a condition"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6"></div>
                                                </div>
                                                <div className="row mt-2">
                                                    <div className="col-lg-10">
                                                        <div className="row">
                                                            <div className="col-2">
                                                                <label htmlFor="Condition mt-1">
                                                                    Specfics
                                                                </label>
                                                            </div>
                                                            <div className="col-10 row">
                                                                {categoryspecifics.specifics.map(
                                                                    (cs, csindex) => {
                                                                        const resultss = (
                                                                        <div className="row">
                                                                            <div className="col-10">
                                                                                <select className="form-control" onChange={(e)=>{
                                                                                    if(e.target.value){
                                                                                        var ccc = Object.assign({}, categoryspecifics);
                                                                                        var o = {};
                                                                                        specifics.forEach(s=>{
                                                                                            if(s.id == e.target.value){
                                                                                                o = {
                                                                                                    'id': s.id,
                                                                                                    'name': s.name,
                                                                                                    'defaultValue': s.defaultValue,
                                                                                                    'required': ccc.specifics[csindex].required ? ccc.specifics[csindex].required : false
                                                                                                }                                                                        
                                                                                            }
                                                                                        });
                                                                                        ccc.specifics[csindex] = o;
                                                                                        setcategoryspecifics(ccc);
                                                                                        updateconditionandspecifics(ccc);
                                                                                    }
                                                                                }}>
                                                                                <option>Select </option>
                                                                                    {specifics.map(
                                                                                    (c, index) => {
                                                                                        const results = (
                                                                                            (cs.id == c.id) ?
                                                                                            <option value={c.id} selected={true}>{c.name}</option>
                                                                                            :
                                                                                            <option value={c.id}>{c.name}</option>
                                                                                        )
                                                                                    return results}
                                                                                    )}
                                                                                </select>
                                                                            </div>
                                                                            <div className="col-1">
                                                                                {cs.required ?
                                                                                    <div className="active_red mt-1"></div>
                                                                                    :
                                                                                    <div className="active_grey mt-1"></div>
                                                                                }
                                                                            </div>
                                                                            <div className="col-1">
                                                                                <input
                                                                                    className="form-check-input p-2"
                                                                                    type="checkbox"
                                                                                    defaultChecked={cs.required}
                                                                                    onChange={(e)=>{
                                                                                        var ccc = Object.assign({}, categoryspecifics);
                                                                                        ccc.specifics[csindex].required = !ccc.specifics[csindex].required;
                                                                                        setcategoryspecifics(ccc);
                                                                                        updateconditionandspecifics(ccc);
                                                                                    }}
                                                                                    id="flexCheckDefault"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                    return resultss}
                                                                )}
                                                                <div className="row mt-2">
                                                                    <div className="col-lg-8">
                                                                        <div className="row">
                                                                            <div className="col-12">
                                                                                <select className="form-control" onChange={(e)=>{
                                                                                    var o = {};
                                                                                    specifics.forEach(s=>{
                                                                                        if(s.id == e.target.value){
                                                                                            o = {
                                                                                                'id': s.id,
                                                                                                'name': s.name,
                                                                                                'defaultValue': s.defaultValue,
                                                                                                'required': false
                                                                                            }                                                                        
                                                                                        }
                                                                                    });
                                                                                    setspecificsValue(o);
                                                                                }}>
                                                                                <option>Select </option>
                                                                                    {specifics.map(
                                                                                    (c, index) => {
                                                                                        const results = (
                                                                                            <option value={c.id}>{c.name}</option>
                                                                                        )
                                                                                    return results}
                                                                                    )}
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-4">
                                                                        <button className="btn btn-outline-success" onClick={addspecific}>
                                                                            <i className="fa fa-plus">
                                                                                &nbsp;Add
                                                                            </i>
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            );
                            return list;
                        })}
                    </div>
                </div>
                <div className="row col-lg-10 offset-lg-1">
                    <div className="btn-group col-lg-6">
                        <div className="col-lg-8 col-sm-8 col-sm-8">
                            <input
                                type="text"
                                name="addCategory"
                                placeholder="Add a category"
                                value={CategoryValue}
                                onChange={addCategoryValue}
                                className="form-control"
                            />
                        </div>
                        <div className="col-4 mx-1">
                            <button
                                className="btn btn-outline-success"
                                onClick={AddCategory}
                            >
                                {" "}
                                <i className="fa fa-plus"></i>&nbsp;Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal mt-5" id="myModal">
                <div className="modal-dialog mt-5">
                    <div className="modal-content p-3">
                        <div className="modal-header">
                            <h5 className="modal-title">Rename</h5>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                readOnly
                                value={title}
                            />
                        </div>

                        <div className="modal-body">
                            <span className="modal-title mb-1">Rename to:</span>
                            <input
                                type="text"
                                className="form-control"
                                name="setrename"
                                value={categoryrename}
                                onChange={addCategoryValue}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-dark"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() =>
                                    SetReName(
                                        categoryrename
                                    )
                                }
                                data-bs-dismiss="modal"
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal mt-5" id="myModal1">
                <div className="modal-dialog mt-5">
                    <div className="modal-content p-3">
                        <div className="modal-header">
                            <h5 className="modal-title">
                                Move {movecate && movecate.name} to:
                            </h5>
                        </div>
                        <div className="modal-body">
                            {category && category.map((category, index) => {
                                const list = (movecate && movecate.id != category.category.id) && (
                                    <p key="index">
                                        {category.children &&
                                        category.children ? (
                                            <a className="fa fa-plus"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={
                                                "#moveto_"+category.category.id
                                            }
                                            aria-expanded="false"
                                            aria-controls={
                                                category.category.name
                                            }
                                             >
                                               <b className={moveto && moveto.id == category.category.id ? 'color-green' : ''} onClick={()=>{setmoveto(category.category)}}> &nbsp;{category.category.name}</b>
                                            </a>
                                        ) : (
                                            <a className="fa ml-3" data-toggle="collapse" href={"#moveto_"+category.category.id} role="button" aria-expanded="false" aria-controls={"#moveto_"+category.category.id}>
                                                <b className={moveto && moveto.id == category.category.id ? 'color-green' : ''} onClick={()=>{setmoveto(category.category)}}> &nbsp;{category.category.name}</b>
                                            </a>
                                        )}
                                        <span className="collapse multi-collapse" id={"moveto_"+category.category.id} >
                                        {category.children && category.children.map(
                                            (category, index) => {
                                                const data = (movecate && movecate.id != category.category.id) && (
                                                    <p className="mx-3 ">
                                                        <i className={category.children ? "fa fa-plus" : null}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={
                                                                "#moveto_"+category.category.id
                                                            }
                                                            aria-expanded="false"
                                                            aria-controls={
                                                                category.category.name
                                                            }
                                                        ></i>{" "}
                                                        <span className={moveto && moveto.id == category.category.id ? 'color-green' : ''} onClick={()=>{setmoveto(category.category)}}>
                                                            {
                                                                category
                                                                    .category
                                                                    .name
                                                            }
                                                        </span>
                                                        <span className="collapse multi-collapse" id={"moveto_"+category.category.id}>
                                                            {category.children && category.children.map(
                                                                (category, index) => {
                                                                    const data = (movecate && movecate.id != category.category.id) && (
                                                                        <p className="mx-3">
                                                                            <i className={category.children ? "fa fa-plus" : null}
                                                                                type="button"
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target={
                                                                                    "#moveto_"+category.category.id
                                                                                }
                                                                                aria-expanded="false"
                                                                                aria-controls={
                                                                                    category.category.name
                                                                                }
                                                                            ></i>{" "}
                                                                            <span className={moveto && moveto.id == category.category.id ? 'color-green' : ''} onClick={()=>{setmoveto(category.category)}}>
                                                                                {
                                                                                    category
                                                                                        .category
                                                                                        .name
                                                                                }
                                                                            </span>
                                                                            <span className="collapse multi-collapse" id={"moveto_"+category.category.id}>
                                                                            {category.children && category.children.map(
                                                                                (category, index) => {
                                                                                    const data = (movecate && movecate.id != category.category.id) && (
                                                                                        <p className="mx-3">
                                                                                            <i className={category.children ? "fa fa-plus" : null}
                                                                                                type="button"
                                                                                                data-bs-toggle="collapse"
                                                                                                data-bs-target={
                                                                                                    "#moveto_"+category.category.id
                                                                                                }
                                                                                                aria-expanded="false"
                                                                                                aria-controls={
                                                                                                    category.category.name
                                                                                                }></i>{" "}
                                                                                            <span className={moveto && moveto.id == category.category.id ? 'color-green' : ''} onClick={()=>{setmoveto(category.category)}}>
                                                                                                {
                                                                                                    category
                                                                                                        .category
                                                                                                        .name
                                                                                                }
                                                                                            </span>
                                                                                            <span className="collapse multi-collapse" id={"moveto_"+category.category.id}>
                                                                                                {category.children && category.children.map(
                                                                                                    (category, index) => {
                                                                                                        const data = (movecate && movecate.id != category.category.id) && (
                                                                                                            <p className="mx-3">
                                                                                                                <i className={category.children ? "fa fa-plus" : null}
                                                                                                                    type="button"
                                                                                                                    data-bs-toggle="collapse"
                                                                                                                    data-bs-target={
                                                                                                                        "#moveto_"+category.category.id
                                                                                                                    }
                                                                                                                    aria-expanded="false"
                                                                                                                    aria-controls={
                                                                                                                        category.category.name
                                                                                                                    }></i>{" "}
                                                                                                                <span className={moveto && moveto.id == category.category.id ? 'color-green' : ''} onClick={()=>{setmoveto(category.category)}}>
                                                                                                                    {
                                                                                                                        category
                                                                                                                            .category
                                                                                                                            .name
                                                                                                                    }
                                                                                                                </span>
                                                                                                            </p>
                                                                                                        );
                                                                                                        return data;
                                                                                                    }
                                                                                                )}
                                                                                                </span>
                                                                                        </p>
                                                                                    );
                                                                                    return data;
                                                                                }
                                                                            )}
                                                                            </span>

                                                                        </p>
                                                                    );
                                                                    return data;
                                                                }
                                                            )}
                                                        </span>
                                                    </p>
                                                );
                                                return data;
                                            }
                                        )}
                                        </span>
                                    </p>
                                );
                                return list;
                            })}
                        </div>

                        {/* <div className="modal-body">
                            <span className="modal-title mb-1">Rename to:</span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Move to"
                            />
                        </div> */}
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-outline-dark"
                                data-bs-dismiss="modal"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={()=>{
                                    if(moveto){
                                        movecategory();
                                    }
                                }}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};
export default Category;
