import React, { useEffect, useState, useRef } from 'react'
import './CustomerDetail.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { ReactComponent as BackArrowLogo } from '../assets/svg/customerDetail/back-logo.svg'
import { ReactComponent as GreyRectLogo } from '../assets/svg/customerDetail/grey-rect.svg'
import { ReactComponent as PlusButtonLogo } from '../assets/svg/customerDetail/plus-button.svg'
import { ReactComponent as DropDownLogo } from '../assets/svg/filter/dropdown-logo.svg'
import { useSelector, useDispatch } from 'react-redux';

function CustomerDetail() {
    const textareaRef = useRef(null);
    const [addCommentFlag, setAddCommentFlag] = useState(false)
    const [addProofsFlag, setAddProofsFlag] = useState(false)
    const chooseList = useSelector(state => state.customer.chooseList)
    const [ droplistChooseId, setDroplistChooseId ] = useState(1);
    const [ droplistFlag, setDroplistFlage ] = useState(false);
    const [ filterInput, setFilterInput ] = useState("")
    const [ typeTextAreaData, setTypeTextAreaData ] = useState("");
    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [typeTextAreaData]);
    return (
        <div className='CustomerDetail'>
            <Header />
            <div className='body'>
                <div className='top-back-button'>
                    <div className='left pointer'>
                        <BackArrowLogo />
                        <p>Back</p>
                    </div>
                    <p className='right'>Not received item</p>
                </div>
                <div className='cards'>
                    <div className='left column'>
                        <p className='title'>Buyer asked us to help</p>
                        <p className='sub-title'>Please take action by 30 Sep, 12:34  (1 day 25 min left).</p>
                        <div className='inter-line'></div>
                        <div className='color button'>Take action</div>
                        <div className='inter-line shadow'></div>
                        <div className='items'>
                            <div className='item'>
                                <div className='flex'>
                                    <p className='left'>30 Sep 2017:</p>
                                    <div className='right'>
                                        <p className='bold'>Seller asked us to help</p>
                                        <p className='simple'>Reason:</p>
                                        <p className='simple'>I’m having trouble communicating with the seller</p>
                                        <p className='simple'>Comment:</p>
                                        <p className='simple'>Example of the buyer’s comment</p>
                                    </div>
                                </div>
                                <div className='inter-line'></div>
                            </div>
                            <div className='item'>
                                <div className='flex'>
                                    <p className='left'>30 Sep 2017:</p>
                                    <div className='right'>
                                        <p className='bold'>Seller asked us to help</p>
                                        <p className='simple'>Reason:</p>
                                        <p className='simple'>I’m having trouble communicating with the seller</p>
                                        <p className='simple'>Comment:</p>
                                        <p className='simple'>Example of the buyer’s comment</p>
                                    </div>
                                </div>
                                <div className='inter-line'></div>
                            </div>
                            <div className='item'>
                                <div className='flex'>
                                    <p className='left'>30 Sep 2017:</p>
                                    <div className='right'>
                                        <p className='bold'>Seller asked us to help</p>
                                        <p className='simple'>Reason:</p>
                                        <p className='simple'>I’m having trouble communicating with the seller</p>
                                        <p className='simple'>Comment:</p>
                                        <p className='simple'>Example of the buyer’s comment</p>
                                    </div>
                                </div>
                                <div className='inter-line'></div>
                            </div>
                            <div className='item'>
                                <div className='flex'>
                                    <p className='left'>30 Sep 2017:</p>
                                    <div className='right'>
                                        <p className='bold'>Seller asked us to help</p>
                                        <p className='simple'>Reason:</p>
                                        <p className='simple'>I’m having trouble communicating with the seller</p>
                                        <p className='simple'>Comment:</p>
                                        <p className='simple'>Example of the buyer’s comment</p>
                                    </div>
                                </div>
                                <div className='inter-line'></div>
                            </div>
                            <div className='item'>
                                <div className='flex'>
                                    <p className='left'>30 Sep 2017:</p>
                                    <div className='right'>
                                        <p className='bold'>Seller asked us to help</p>
                                        <p className='simple'>Reason:</p>
                                        <p className='simple'>I’m having trouble communicating with the seller</p>
                                        <p className='simple'>Comment:</p>
                                        <p className='simple'>Example of the buyer’s comment</p>
                                    </div>
                                </div>
                                <div className='inter-line'></div>
                            </div>
                            <div className='item'>
                                <div className='flex'>
                                    <p className='left'>30 Sep 2017:</p>
                                    <div className='right'>
                                        <p className='bold'>Seller asked us to help</p>
                                        <p className='simple'>Reason:</p>
                                        <p className='simple'>I’m having trouble communicating with the seller</p>
                                        <p className='simple'>Comment:</p>
                                        <p className='simple'>Example of the buyer’s comment</p>
                                    </div>
                                </div>
                                <div className='inter-line'></div>
                            </div>
                            <div className='item'>
                                <div className='flex'>
                                    <p className='left'>30 Sep 2017:</p>
                                    <div className='right'>
                                        <p className='bold'>Seller asked us to help</p>
                                        <p className='simple'>Reason:</p>
                                        <p className='simple'>I’m having trouble communicating with the seller</p>
                                        <p className='simple'>Comment:</p>
                                        <p className='simple'>Example of the buyer’s comment</p>
                                    </div>
                                </div>
                                <div className='inter-line'></div>
                            </div>
                            <div className='item'>
                                <div className='flex'>
                                    <p className='left'>30 Sep 2017:</p>
                                    <div className='right'>
                                        <p className='bold'>Seller asked us to help</p>
                                        <p className='simple'>Reason:</p>
                                        <p className='simple'>I’m having trouble communicating with the seller</p>
                                        <p className='simple'>Comment:</p>
                                        <p className='simple'>Example of the buyer’s comment</p>
                                    </div>
                                </div>
                                <div className='inter-line'></div>
                            </div>
                        </div>
                    </div>
                    <div className='right-columns'>
                        <div className='right column'>
                            <p className='title'>Claim summary [ ID: 12345676890 ]</p>
                            <div className='inter-line'></div>
                            <p className='title red'>Not received  item</p>
                            <div className='describe-line'>
                                <p className='gray'>Order ID:</p>
                                <p className='blue'>12345678-123456</p>
                            </div>
                            <div className='describe-line'>
                                <p className='gray'>Buyer:</p>
                                <p className='blue'>buyer_username</p>
                            </div>
                            <div className='describe-line'>
                                <p className='gray'>Seller:</p>
                                <p className='blue'>Seller_username</p>
                            </div>
                            <div className='inter-line dot'></div>
                            <div className='description'>
                                <div className='left'>
                                    <GreyRectLogo />
                                </div>
                                <div className='right'>
                                    <p className='blue'>Norton Security Deluxe 2016 - 300 Days / 1 Device (Windows, Mac, Android)</p>
                                    <div className='describe-line'>
                                        <p className='gray'>NSLN:</p>
                                        <p className='black'>123456789012</p>
                                    </div>
                                    <div className='describe-line'>
                                        <p className='gray'>Condition:</p>
                                        <p className='black'>New</p>
                                    </div>
                                    <div className='describe-line'>
                                        <p className='gray'>Color:</p>
                                        <p className='black'>Blue</p>
                                    </div>
                                    <div className='describe-line'>
                                        <p className='gray'>Size:</p>
                                        <p className='black'>XL</p>
                                    </div>
                                    <div className='describe-line'>
                                        <p className='gray'>Material:</p>
                                        <p className='black'>Cotton</p>
                                    </div>
                                    <div className='describe-line'>
                                        <p className='gray'>NSClaim Items:</p>
                                        <p className='black'>2 of 3</p>
                                    </div>
                                </div>
                            </div>
                            <div className='inter-line'></div>
                        </div>
                        <div className='right column'>
                            <div className='flex-space'>
                                <p className='title'>CS comments</p>
                                <div className='flex'>
                                    <input className='checkbox' type="checkbox" defaultChecked={addCommentFlag}
                                    onChange={() => setAddCommentFlag(!addCommentFlag)}/>
                                    <p className='check-label grey'>Add comment</p>
                                </div>
                            </div>
                            <div className='inter-line'></div>
                            <div className={addCommentFlag ? '':'hidden'}>
                                <textarea className='comment-box' ref={textareaRef} placeholder='Enter tour comment...'
                                    value={typeTextAreaData} onChange={e=>{ setTypeTextAreaData(e.target.value); }}/>
                                <div className='inter-line dot'></div>
                                <div className='flex'>
                                    <input className='checkbox' type="checkbox" defaultChecked={addProofsFlag}
                                        onChange={() => setAddProofsFlag(!addProofsFlag)}/>
                                    <p className='check-label'>Add proofs</p>
                                </div>
                                <div className={addProofsFlag ? 'proof' : 'hidden'}>
                                    <div className='left'>
                                        <div className='dropbox'>
                                            <div className='drop-text'>{chooseList[droplistChooseId-1]?.string}</div>
                                            <DropDownLogo onClick={()=>setDroplistFlage(!droplistFlag)} />
                                            <div className={droplistFlag ? 'drop-list' : 'drop-list hidden'}
                                            onMouseLeave={()=>setDroplistFlage(false)}>
                                                {
                                                    chooseList.map((item)=>{
                                                        return(
                                                            <div className={droplistChooseId === item.id ? 'drop-item selected' : 'drop-item'} key={"drop-item"+item.id}
                                                            onClick={()=>{setDroplistChooseId(item.id); setDroplistFlage(false)}}>
                                                                <p>{item.string}</p>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        <div className='item-input'>
                                            <input value={filterInput} onChange={(e)=>{
                                                setFilterInput(e.target.value)
                                            }}></input>
                                        </div>
                                    </div>
                                    <PlusButtonLogo />
                                </div>
                                <div className='inter-line'></div>
                                <div className='flex buttons'>
                                    <div className='button'>Cancel</div>
                                    <div className='button color'>Submit</div>
                                </div>
                            </div>
                            <div className={!addCommentFlag ? '':'hidden'}>
                                <p className='grey'>No comments yet</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CustomerDetail