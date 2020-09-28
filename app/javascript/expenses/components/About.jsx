import React from 'react';

import register from '../../../../assets/login.jpg';

const Nav = (props) => {
  return (
    <div>
        
        <h1>What is Home Budget Friend App?</h1>
        <p>
            Home budgeting process is complicated, yet an important aspect of wellbeing and success.
        </p>
        <p> The aim of "Home Budget Friend" is to easy the home budgeting pain and make of it an enjoyable experience.</p>

        <h1>How to use the app?</h1>
        <h3> * First time user? Please "Sign Up"</h3>
        <img sizes="293px" src="https://i.imgur.com/MDii53w.jpg" alt="sign up" />

        <h3> * Already have an account? Please login</h3>
        <img sizes="293px" src="https://i.imgur.com/u3NYLyL.jpg" alt="login" />

        <h3> Add new expense. "Navigation Bar" My Account / Add Expense </h3>
        <img sizes="293px" src="https://i.imgur.com/coHGRot.jpg" alt="Add new posted expense" />

        <h3> Select expense type</h3>
        <img sizes="293px" src="https://i.imgur.com/66wZDgN.jpg" alt="logiSelect expense typen" />

        <h3> Select expense due date</h3>
        <img sizes="293px" src="https://i.imgur.com/NJK9Xq1.jpg" alt="Select expense due date" />

        <h3> Enter cost, if the expense is already paid and then: Click "Add" button</h3>
        <img sizes="293px" src="https://i.imgur.com/HBXB0wI.jpg" alt="Click Add button" />

        <h3> "Navigation Bar" My Account / All Expenses</h3>
        <h3> Do you want to "Edit" or "Delete" any posted expense?</h3>
        <h3> If yes, just click "Edit"</h3>
        <img sizes="293px" src="https://i.imgur.com/2bLQoU9.jpg" alt="Dashboard" />

        <h3>Update the expense as needed</h3>                
        <img sizes="293px" src="https://i.imgur.com/7ZvQZOg.jpg" alt="Update if it is paid" />

        <h3>Then, click "Edit"</h3>
        <img sizes="293px" src="https://i.imgur.com/7iflOIi.jpg" alt="Edit" />

        <h3>Your posted expenses will be updated accordingly!</h3>
        <h3>Just click: My Account / All Expenses </h3>
        <img sizes="293px" src="https://i.imgur.com/yOL3cTn.jpg" alt="See dashboard updated" />

        <h3>Are you finished using the app? Then, just "Log out"</h3>

        <h1>Now, you are all set, it's that easy!</h1>
        <h3>Keep using the app! More cool features are comming soon...</h3>

        <div className="contactInfoDiv">
            <h4>Contact us: </h4>
            <p>Site by: Shirley Hastier</p>
            <p>Software Engineer</p>
            <p>Houston, TX</p>
            <p>Phone: 1-786-635-4354</p>
            <p>E-mail: shastier@yahoo.com</p>
            <a href="https://www.linkedin.com/in/shirley-hastier">Linkedin</a>
        </div>       

    </div>
  );
};

export default Nav;