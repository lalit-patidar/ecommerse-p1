import { useState } from "react";
import Footer from "../../../../container/Footer/footer";
import Nav from "../../../../container/Nav/navbar";
import ContentDelete from "./components/ContentDelete";
import "./contentdisplay.scss";

const ContentDisplay = () => {
    const [isDelete, setDelete] = useState(false);
    const delHandler = () => {
        setDelete(false);
    };
    const canHandler = () => {
        setDelete(false);
    };

    const deleteHandler = () => {
        setDelete(true);
    };
    return (
        <>
            <Nav />
            <div className="ui-content-display">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="ui-content-display-body">
                                <h2>Accepted payment policy</h2>
                                <div className="ui-content-display-body-list">
                                    <h6>Accepted payment policy</h6>
                                    <p>
                                        pEnsuring NichoShop users have a safe,
                                        simple and easy experience is a top
                                        priority for us. To help achieve this,
                                        we only allow payment methods that are
                                        safe, easy to use, and offer strong
                                        protections against fraud.
                                    </p>
                                    <p>
                                        Our accepted payments policy gives
                                        buyers and sellers on NichoShop
                                        convenient payment options. To help
                                        ensure a safe marketplace, as a seller
                                        you can only use our approved payment
                                        methods. You also must state in your
                                        listing which specific payment methods
                                        you accept. If you accept a payment
                                        method, don't place limitations on what
                                        forms of it you accept.
                                    </p>
                                    <p>
                                        Make sure your listing follows these
                                        guidelines. If it doesn't, it may be
                                        removed, and you may be subject to a
                                        range of other actions, including limits
                                        of your buying and selling privileges
                                        and suspension of your account.
                                    </p>
                                </div>
                                <div className="ui-content-display-body-list">
                                    <h6>What are the guidelines?</h6>
                                    <h4>
                                        <svg
                                            width="26"
                                            height="26"
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="13"
                                                cy="13"
                                                r="12.5"
                                                fill="#2AAC27"
                                                stroke="#2AAC27"
                                            />
                                            <path
                                                d="M19.5234 8.04297L10.5859 16.7096L6.52344 12.7702"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        Allowed
                                    </h4>
                                    <ul>
                                        <li>
                                            Credit card or debit card processed
                                            through the seller's Internet
                                            merchant account
                                        </li>
                                        <li>
                                            Your payment is safe and secure. You
                                            can choose to save your card to your
                                            NichoShop account. Remove a saved
                                            card any time by going to My
                                            NichoShop &gt; Account &gt; Payment
                                            methods.
                                        </li>
                                        <li>PayPal</li>
                                        <li>PayPal Credit</li>
                                        <li>Payment upon pickup</li>
                                        <li>
                                            Payment upon pickup If you offer
                                            payment upon pickup, you'll also
                                            need to offer one of the approved
                                            electronic methods, and may include
                                            this statement in your listing:
                                            "Contact me for payment methods to
                                            pay on pickup."
                                        </li>
                                    </ul>
                                    <h4>
                                        <svg
                                            width="26"
                                            height="26"
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.2405 4.50752L1.65488 20.51C1.45725 20.8523 1.35268 21.2403 1.35157 21.6355C1.35046 22.0308 1.45286 22.4194 1.64858 22.7627C1.84429 23.1061 2.1265 23.3922 2.46713 23.5927C2.80776 23.7931 3.19493 23.9008 3.59012 23.9052H22.7614C23.1566 23.9008 23.5438 23.7931 23.8844 23.5927C24.2251 23.3922 24.5073 23.1061 24.703 22.7627C24.8987 22.4194 25.0011 22.0308 25 21.6355C24.9989 21.2403 24.8943 20.8523 24.6967 20.51L15.111 4.50752C14.9093 4.17492 14.6252 3.89993 14.2862 3.70908C13.9472 3.51823 13.5648 3.41797 13.1758 3.41797C12.7868 3.41797 12.4043 3.51823 12.0653 3.70908C11.7264 3.89993 11.4423 4.17492 11.2405 4.50752Z"
                                                fill="#F7A428"
                                                stroke="#F7A428"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M13.1758 10.3203V14.8472"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M13.1758 19.375H13.1876"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        Restricted
                                    </h4>
                                    <ul>
                                        <li>
                                            Bank-to-bank transfers (also known
                                            as bank wire transfers and bank cash
                                            transfers)
                                        </li>
                                        <li>Money orders</li>
                                        <li>PayPal</li>
                                        <li>
                                            Online payment services: Allpay.net,
                                            CertaPay, Fiserv, Nochex.com, XOOM
                                        </li>
                                    </ul>
                                    <p>
                                        Any payments that occur outside of
                                        NichoShop pages are not allowed, except
                                        in certain listing categories. See the
                                        full list of categories that allow
                                        bank-to-bank transfers, checks, money
                                        orders, and the permitted online payment
                                        services.
                                    </p>
                                    <h4>
                                        <svg
                                            width="26"
                                            height="26"
                                            viewBox="0 0 26 26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="13"
                                                cy="13"
                                                r="12"
                                                fill="#EB5454"
                                                stroke="#EB5454"
                                                stroke-width="2"
                                            />
                                            <path
                                                d="M19 7L7 19"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M7 7L19 19"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        Not allowed
                                    </h4>
                                    <ul>
                                        <li>Sending cash through the mail</li>
                                        <li>
                                            Sending cash or money orders through
                                            instant, point-to-point cash
                                            transfer services (that aren't
                                            banks) such as Western Union or
                                            MoneyGram
                                        </li>
                                        <li>
                                            Mailing checks or money orders
                                            (except for items in categories
                                            specifically permitted)
                                        </li>
                                        <li>
                                            Paying through bank-to-bank
                                            transfers (except for items in
                                            categories specifically permitted)
                                        </li>
                                        <li>
                                            Paying by "topping off" a seller's
                                            prepaid credit or debit card
                                        </li>
                                        <li>
                                            Paying using online or other payment
                                            methods not specifically permitted
                                            in this policy
                                        </li>
                                        <li>
                                            Asking buyers to contact you for
                                            additional payment methods, or
                                            including misleading or unclear
                                            payment information
                                        </li>
                                        <li>
                                            Offering a payment method to some
                                            buyers and not to others
                                        </li>
                                        <li>
                                            Discouraging buyers from using any
                                            payment method you specified in the
                                            listing
                                        </li>
                                        <li>
                                            Discouraging buyers from using
                                            NichoShop's accepted payment methods
                                        </li>
                                        <li>
                                            Asking buyers to pay using a method
                                            not mentioned in the listing
                                        </li>
                                        <li>
                                            Paying with Virtual or
                                            Cryptocurrencies
                                        </li>
                                        <li>
                                            Placing limitations on payment
                                            methods you accept. For example:
                                            <ul className="pt-2">
                                                <li>
                                                    "I accept PayPal but do not
                                                    accept credit card payments
                                                    through PayPal"
                                                </li>
                                                <li>
                                                    "I only accept PayPal if the
                                                    bid amount is greater than
                                                    $15"
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <p>
                                        These rules apply to all
                                        transaction-related correspondence
                                        between a seller and buyer, as well as
                                        to the listings. In addition, you aren't
                                        allowed to make statements such as:
                                    </p>
                                    <ul>
                                        <li>
                                            "Contact us for payment
                                            information."
                                        </li>
                                        <li>
                                            "Contact us for other payment
                                            methods."
                                        </li>
                                        <li>
                                            "Contact us for your preferred
                                            payment method."
                                        </li>
                                        <li>
                                            "Buyers may request to pay by check
                                            or money order."
                                        </li>
                                    </ul>
                                    <h6>
                                        Categories allowing bank-to-bank
                                        transfers, checks, money order and
                                        online payment services.
                                    </h6>
                                    <ul>
                                        <li>
                                            Coins & Paper Money &gt; Bullion
                                            &gt; Wholesale Bullion
                                        </li>
                                        <li>Motors &gt; Boats</li>
                                        <li>Motors &gt; Cars & Trucks</li>
                                        <li>
                                            Motors &gt; Cars &amp; Trucks &gt;
                                            Collector Cars
                                        </li>
                                        <li>Motors &gt; Motorcycles</li>
                                        <li>Motors &gt; Powersports</li>
                                        <li>
                                            Motors &gt; Other Vehicles &amp;
                                            Trailers
                                        </li>
                                        <li>
                                            Motors &gt; Automotive Tools &amp;
                                            Supplies &gt; Air Compressors
                                        </li>
                                        <li>
                                            Motors &gt; Automotive Tools &amp;
                                            Supplies &gt; Shop Equipment &amp;
                                            Supplies &gt; Brake Lathes
                                        </li>
                                        <li>
                                            Motors &gt; Automotive Tools &amp;
                                            Supplies &gt; Shop Equipment &amp;
                                            Supplies &gt; Auto Lifts &amp; Frame
                                            Machines
                                        </li>
                                        <li>
                                            Motors &gt; Automotive Tools &amp;
                                            Supplies &gt; Shop Equipment &amp;
                                            Supplies &gt; Other Shop Equipment
                                        </li>
                                        <li>
                                            Motors &gt; Automotive Tools &amp;
                                            Supplies &gt; Shop Equipment &amp;
                                            Supplies &gt; Paint Booths
                                        </li>
                                        <li>
                                            Motors &gt; Automotive Tools &amp;
                                            Supplies &gt; Shop Equipment &amp;
                                            Supplies &gt; Tire Changers / Wheel
                                            Balancers
                                        </li>
                                        <li>
                                            Motors &gt; Parts &amp; Accessories
                                            &gt; Aviation Parts &gt; Engines
                                        </li>
                                        <li>
                                            Motors &gt; Parts &amp; Accessories
                                            &gt; Car &amp; Truck Parts &gt;
                                            Engines &amp; Components
                                        </li>
                                        <li>
                                            Motors &gt; Parts &amp; Accessories
                                            &gt; Motorcycle Parts &gt; Engines
                                            &amp; Components
                                        </li>
                                        <li>
                                            Motors &gt; Parts &amp; Accessories
                                            &gt; Performance &amp; Racing Parts
                                            &gt; Auto Performance Parts &gt;
                                            Engine &amp; Components
                                        </li>
                                        <li>
                                            Motors &gt; Parts &amp; Accessories
                                            &gt; Salvage Parts Cars
                                        </li>
                                        <li>
                                            Motors &gt; Parts &amp; Accessories
                                            &gt; Vintage Car &amp; Truck Parts
                                            &gt; Engines &amp; Components
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt;
                                            Construction &gt; Buildings, Modular
                                            &amp; Pre-Fab
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt;
                                            Healthcare, Lab &amp; Life Science
                                            &gt; Imaging &amp; Aesthetics
                                            Equipment
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt; Heavy
                                            Equipment (all subcategories)
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt; Heavy
                                            Equipment Parts &amp; Accessories
                                            (all subcategories)
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt;
                                            Manufacturing &amp; Metalworking
                                            &gt; Woodworking &gt; Equipment
                                            &amp; Machinery
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt;
                                            Industrial Supply &amp; MRO &gt;
                                            Cleaning Equipment &amp; Supplies
                                            &gt; Sweepers &amp; Scrubbers
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt;
                                            Industrial Supply&amp; MRO &gt; Fork
                                            Lifts &amp; Other Lifts
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt; MRO
                                            &amp; Industrial Supply &gt; HVAC
                                            &gt; HVAC Units
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt;
                                            Printing &amp; Graphic Arts &gt;
                                            Bindery &amp; Finishing Equipment
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt;
                                            Printing &amp; Graphic Arts &gt;
                                            Commercial Printing Presses
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt;
                                            Printing &amp; Graphic Arts &gt;
                                            Plotters, Wide Format Printing
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt;
                                            Restaurant &amp; Catering &gt;
                                            Commercial Kitchen Equipment &gt;
                                            Cooking &amp; Warming Equipment &gt;
                                            Ovens &amp; Ranges
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt;
                                            Restaurant &amp; Catering &gt;
                                            Concession Trailers &amp; Carts &gt;
                                            Concession Trailers
                                        </li>
                                        <li>
                                            Business &amp; Industrial &gt;
                                            Restaurant &amp; Catering &gt;
                                            Refrigeration &amp; Ice Machines
                                        </li>
                                        <li>Real Estate</li>
                                        <li>Everything Else &gt; Adult Only</li>
                                    </ul>
                                    <h6>
                                        Why does NichoShop have this policy?
                                    </h6>
                                    <p>
                                        This policy helps to create a successful
                                        shopping and selling experience by
                                        encouraging online payment methods that
                                        are safe, easy to use, and offer strong
                                        protections for members.
                                    </p>
                                </div>
                                <div className="ui-content-display-body-btn">
                                    <button className="ui-back-btn">
                                        Back
                                    </button>
                                    <button className="ui-edit-btn">
                                        Edit
                                    </button>
                                    <button
                                        onClick={deleteHandler}
                                        className="ui-delete-btn"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isDelete && (
                    <ContentDelete
                        delHandler={delHandler}
                        canHandler={canHandler}
                    />
                )}
            </div>
            <Footer />
        </>
    );
};

export default ContentDisplay;
