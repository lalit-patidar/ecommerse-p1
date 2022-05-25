import React, { useState } from "react";
import { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const ListForm = () => {
  const [img, setImg] = useState([]);
  const bgimage = "/images/BG.png";
  const fileArray = [];
  const fileObj = [];

  var i = 0;
  const MAX_LENGTH = 6;

  const onImageChange = (e) => {
    // const [file] = e.target.files;
    // setImg(URL.createObjectURL(file));
    fileObj.push(e.target.files);

    for (i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }

    setImg(fileArray);
  };

  // CKEDITOR.editorConfig = function (config) {
  //   config.height = eval(this.element.$.rows * 40) + "px";
  // };

  return (
    <>
      <div className="main-heading">
        <h3 className="heading">List multiple variations of your item</h3>
        <div className="tooltip-ques">
          <img src="/images/questions.png" />
          {/* <span class="tooltiptext">
            If you sell multiple variations of your item, you can list all item
            variations in one multi-quantity listing. That saves your time.
          </span> */}
        </div>
      </div>
      <div className="main-form">
        <form className="list-form">
          <div className="main-list-form">
            <h3>Describe your item</h3>
            <hr />
            <div className="com-fields">
              <div className="first-field">
                <lable>*Category</lable>
              </div>
              <div className="sec-field">
                <label>
                  Computers, Tables & Networking > Software > Antivirus &
                  Security
                </label>
                <a className="category-link"> Change category</a>
              </div>
            </div>
            <div className="com-fields">
              <div className="first-field">
                <lable>*Title</lable>
              </div>
              <div className="sec-field">
                <input type="text" placeholder="Enter a title" />
              </div>
            </div>

            <div className="com-fields">
              <div className="first-field">
                <lable>*Condition details</lable>
              </div>
              <div className="sec-field">
                <input type="text" placeholder="Enter a title" />
              </div>
            </div>

            <div className="com-fields">
              <div className="first-field">
                <lable>*Photos</lable>
              </div>
              <div className="sec-field">
                <label>
                  Add up to 6 photos. We accepting jpg, gif, or png image files
                  under 10MB, and between 128 and 4.096 pixels in size.
                </label>
                <div className="com-fields">
                  <div className="first-field">
                    <input
                      type="file"
                      id="img"
                      name="img"
                      accept="image/*"
                      onChange={onImageChange}
                      multiple="multiple"
                    />
                  </div>
                  <div className="sec-field">
                    {console.log(img.length)}
                    {img.map((url) => (
                      <img
                        src={url ? url : bgimage}
                        alt="..."
                        className="select-img"
                        accept="image/*"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="com-fields">
              <div className="first-field">
                <label>*Item specifics</label>
              </div>
              <div className="sec-field option">
                <select>
                  <option>Brand</option>
                  <option>Type</option>
                  <option>Platform</option>
                </select>

                <select>
                  <option>Type</option>
                  <option>Brand</option>
                  <option>Platform</option>
                </select>

                <select>
                  <option>Platform</option>
                  <option>Type</option>
                  <option>Brand</option>
                </select>

                <select>
                  <option>Operating System</option>
                  <option>Type</option>
                  <option>Platform</option>
                </select>

                <select>
                  <option>Language</option>
                  <option>Brand</option>
                  <option>Platform</option>
                </select>

                <select>
                  <option>Distribution Media</option>
                  <option>Type</option>
                  <option>Brand</option>
                </select>

                <select>
                  <option>License Category</option>
                  <option>Type</option>
                  <option>Platform</option>
                </select>

                <select>
                  <option>Min. Hard Drive Space</option>
                  <option>Type</option>
                  <option>Platform</option>
                </select>
              </div>
            </div>

            <div className="com-fields">
              <div className="first-field">
                <label>*Item description</label>
              </div>
              <div className="sec-field">
                <CKEditor
                  editor={ClassicEditor}
                  data="<p>Hello from CKEditor 5!</p>"
                  width="10"
                  height="10"
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                  }}
                  onBlur={(event, editor) => {
                    console.log("Blur.", editor);
                  }}
                  onFocus={(event, editor) => {
                    console.log("Focus.", editor);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="main-list-form">
            <h3>Select listing and price</h3>
            <hr />

            <div className="com-fields">
              <div className="first-field">
                <label>*Listing format</label>
              </div>
              <div className="sec-field btns">
                <button className="fixed-price-btn">Fixed price</button>
                <button className="auction-btn">Auction</button>
              </div>
            </div>

            <div className="com-fields list-price">
              <div className="first-field">
                <label>*Buy it now price</label>
              </div>
              <div className="sec-field">
                <input type="number" placeholder="0" />
              </div>
            </div>

            <div className="com-fields list-price">
              <div className="first-field">
                <label>*Quantity</label>
              </div>
              <div className="sec-field">
                <input type="number" />
              </div>
            </div>

            <div className="com-fields list-price">
              <div className="first-field">
                <label>*Listing duration</label>
              </div>
              <div className="sec-field">
                <select>
                  <option>---</option>
                  <option>Test</option>
                  <option>Test</option>
                </select>
              </div>
            </div>
          </div>

          <div className="main-list-form">
            <h3>How you’ll post it</h3>
            <hr />

            <div className="com-fields">
              <div className="first-field">
                <label>*Shipping options</label>
              </div>
              <div className="sec-field">
                <label>Domestic shipping</label>
                <div className="com-fiedls-post">
                  <div className="first-field">
                    <label>Service</label>
                  </div>
                  <div className="sec-field">
                    <select>
                      <option>---</option>
                      <option>Test</option>
                      <option>Test</option>
                    </select>
                  </div>
                </div>

                <div className="com-fiedls-post">
                  <div className="first-field">
                    <label>Cost</label>
                  </div>
                  <div className="sec-field">
                    <input type="number" placeholder="0" />
                    <div className="com-fiedls-checkbox">
                      <div className="first-field-input">
                        <input type="checkbox" />
                      </div>
                      <div className="sec-field">
                        <span>Offer another shipping service</span>
                      </div>
                    </div>
                    <div className="com-fiedls-checkbox">
                      <div className="first-field-input">
                        <input type="checkbox" />
                      </div>
                      <div className="sec-field">
                        <span>Offer local collection</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="com-fiedls-checkbox"
                  style={{
                    borderTop: "2px dashed #cbcbcb8c",
                    padding: "10px 0px",
                    margin: "16px 0px",
                  }}
                >
                  <div className="first-field-input" style={{ width: "4%" }}>
                    <input type="checkbox" />
                  </div>
                  <div className="sec-field">
                    <span>Offer local collection</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="com-fields">
              <div className="first-field">
                <label>*Dispatch time</label>
              </div>
              <div className="sec-field">
                <select>
                  <option>---</option>
                  <option>Test</option>
                  <option>Test</option>
                </select>
              </div>
            </div>

            <div className="com-fields">
              <div className="first-field">
                <label>*Item location</label>
              </div>
              <div className="sec-field">
                <lable>London, United Kingdom</lable>
                <a className="change-location">Change location</a>
              </div>
            </div>
          </div>

          <div className="main-list-form">
            <h3>Return policy</h3>
            <hr />

            <div className="com-fields list-price">
              <div className="first-field">
                <label>*Returns</label>
              </div>
              <div className="sec-field return">
                <input
                  type="radio"
                  style={{ width: "4%" }}
                  checked
                  name="return"
                />
                <label>Returns accepted</label> <br />
                <lable>
                  Within how many days after receiving the item, your buyer
                  should start return
                </lable>{" "}
                <br />
                <select style={{ margin: "10px 0px" }}>
                  <option>14 days</option>
                  <option>Test</option>
                  <option>Test</option>
                </select>
                <br />
                <label>Return shipping will be paid by</label>
                <br />
                <select>
                  <option>Buyer</option>
                  <option>Test</option>
                  <option>Test</option>
                </select>
                <br />
                <input type="radio" style={{ width: "4%" }} name="return" />
                <label>Returns not accepted</label>
              </div>
            </div>
          </div>

          <div className="list-form-btns">
            <button className="list-it-btn">List it</button>
            <button className="save-btn">Save for later</button>
            <button className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ListForm;
