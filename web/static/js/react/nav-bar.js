var NavBar = React.createClass({
   // Props are attributes we pass into this React component
   propTypes: {
     // isLoggedIn tells us whether the user is logged in
     isLoggedIn: React.PropTypes.bool.isRequired
   },

   // opens the menu
   openMenu() {
     console.log("opening menu");
   },

   renderDashboardLink() {
     if(this.props.isLoggedIn) {
       return(
         <li>
           <a href="/#/dashboard">Dashboard</a>
         </li>
       );
     }
   },

   renderLoginLink() {
     if(!this.props.isLoggedIn) {
       return(
         <li>
           <a href="#login">Login</a>
         </li>
       );
     }
   },

   renderSignupLink() {
     if(!this.props.isLoggedIn) {
       return(
         <li>
           <a href="#signup">Signup</a>
         </li>
       );
     }
   },

   render() {
     return(
       <ul>
         <li>
           <a href="/#">
             <img src="/images/favicon.png" alt="RocketNanny" height="32"/>
           </a>
         </li>
         { this.renderLoginLink() }
         { this.renderSignupLink() }
         { this.renderDashboardLink() }
         <li>
           <a onClick={ this.openMenu }>
             <i className="fa fa-bars fa-2x" aria-hidden="true"/>
           </a>
         </li>
       </ul>
     );
   }
 });

 module.exports = NavBar;
