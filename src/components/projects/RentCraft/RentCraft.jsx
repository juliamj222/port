import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../App.css";
import RentCraftTenants from "../../../assets/RentCraft/RentCraftTenants.png";
import RentCraftUnits from "../../../assets/RentCraft/RentCraftUnits.png";
import RentCraftPaymentHistory from "../../../assets/RentCraft/RentCraftPaymentHistory.png";
import RentCraftLogIn from "../../../assets/RentCraft/RentCraftLogIn.png";
import RentCraftLogoCropped from "../../../assets/RentCraft/RentCraftLogocropped.png";

function RentCraft() {
  return (
    <>
      <div id="rentCraftWrapper">
        <h1 className="title">RentCraft Walkthrough</h1>
        <div className="projectWrap">
          <div className="projectExplained">
            {" "}
            <br />
            <h1>RentCraft: Property Management App </h1>
            <p>Developed by Mike, Isaiah, and Julia.</p>{" "}
            <img
              src={RentCraftLogoCropped}
              className="d-block w-10 "
              alt="RentCraft logo"
            />{" "}
            <br />
            <h2>Technology Stack</h2> <br />
            <h3>
              {" "}
              <strong>Backend:</strong>
            </h3>
            Runtime: Node.js <br />
            Framework: Express.js <br />
            Database: MongoDB (Online database cluster)
            <br />
            Encryption: Bcrypt for sensitive information <br />
            <br />
            <h3>
              <strong>Frontend:</strong>
            </h3>
            Framework: React <br />
            Styling: Reactstrap (Bootstrap components) <br /> <br />
            <h2>Features</h2>
            <br /> <h2> Welcome Page </h2> Login/signup, with the option to
            toggle between the two. When login, a JSON web token authenticates
            the session, and sensitive information like passwords are encrypted
            using bcrypt. <br />{" "}
            <img src={RentCraftLogIn} className="screenShot" alt="units" />{" "}
            <br />
            <h2>Unit Feed </h2> After successful login, landlords are directed
            to the unit feed, displaying all registered units in their
            portfolio.
            <br />
            CRUD operations are managed through controllers, and React
            components handle display and updates. <br />{" "}
            <img src={RentCraftUnits} className="screenShot" alt="units" />{" "}
            <br />
            <h2>Registering Units </h2>Landlords can register units by providing
            essential details. <br />
            Deleting units is not allowed; instead, they can be removed from the
            portfolio, preserving tenant and payment history. <br />
            <br />
            <h2>Tenant Management</h2> Landlords can register new tenants with
            names and contact information.
            <br /> Tenants can be assigned to a unit using the edit feature on a
            registered property.
            <br />{" "}
            <img src={RentCraftTenants} className="screenShot" alt="tenants" />
            <br />
            <h2>Logging Payments</h2> Landlords can log new payments by
            selecting the unit and tenant, entering the amount, setting the
            date, selecting payment type, and confirming the transaction.
            <br /> <br />
            <h2>Payment History</h2> The application allows viewing payment
            history for either a unit or a tenant. Payments can be edited, and
            details, except for the payment id, can be modified. The server logs
            a timestamp for added dispute resolution. <br />{" "}
            <img
              src={RentCraftPaymentHistory}
              className="screenShot"
              alt="payment history"
            />
            <br />
            <h2>Payment Status Tracking</h2> A toggle feature on the unit card
            indicates the payment state, providing a quick overview of whether a
            tenant has paid rent for the unit. <br /> <br />
            <h2>Logout</h2> Landlords can log out from the navigation menu,
            deleting the JSON web token and returning to the welcome screen.
            Data retrieval is restricted unless logged in.
          </div>
          <br />
          <a
            href="https://github.com/juliamj222/rentcraft-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="externalLink"
          >
            Click here to see this GitHub repo.
          </a>
        </div>
      </div>
    </>
  );
}

export default RentCraft;
