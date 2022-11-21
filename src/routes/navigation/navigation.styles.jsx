import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as BGLogo } from '../../assets/bg-head1.svg';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  // justify-content: space-between;
  margin-bottom: 25px;
`;


export const LogoContainer = styled(Link)`
height: 100%;
    width: 70px;
    padding: 15px;
  //   display: inline;

`;


export const Logo = styled(BGLogo)`
  width: 130%;
  height: 130%;

`;

export const NavTitle = styled.div`
  display: flex;
  // align-items: flex;
  justify-content: space-between;
  width: 100%;
  font-family: 'Montserrat';
  padding-left: 5px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

`;
// .nav {
//     height: 70px;
//     width: 100%;
//     display: flex;
//     // justify-content: space-between;
//     margin-bottom: 25px;
    
    

//     .logo-container {
//       height: 100%;
//       width: 70px;
//       padding: 15px;
//     //   display: inline;

//       .logo {
//         width: 130%;
//         height: 130%;
//       }
      
//     }
//     .nav-title {
//         display: flex;
//         // align-items: flex;
//         justify-content: space-between;
//         width: 100%;
//         font-family: 'Montserrat';
//         padding-left: 5px;

//         .nav-links {
//             width: 50%;
//             height: 100%;
//             display: flex;
//             align-items: center;
//             justify-content: flex-end;
  
//             .nav-link {
//                 padding: 10px 15px;
//                 cursor: pointer;
//             }
//         }
//       }
    
//   }
  