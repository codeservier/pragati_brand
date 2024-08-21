import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TermCondition from '../TermCondition'; 
import AboutPage from "../AboutPage";
import ContactPage from "../ContactPage";
import SearchPage from "../SearchPage";
import MyLearning from "../MyLearning";
import PageNotFound from "../PageNotFound";
import RegistrationPage from "../RegistrationPage";
import { HomePage } from "../HomePage";
import Layout from "../../components/Layout/Layout";
import Login from "../Login";
import CourseDetailPage from "../CourseDetailPage";
import LecturePage from "../LecturePage";
import Myprofile from "../../components/profile/Myprofile";
import Subscription from "../../components/profile/Subscription";
import PaymentMethod from "../../components/profile/PaymentMethod";
import PublicProfile from "../../components/profile/PublicProfile";
import Wishlisttab from "../../components/wishlisttab/Wishlisttab";
import PaymentPage from "../../components/PaymentPage";
import AdminPanel from "../../Admin/Admin";
import CartPage from "../CartPage";
import Checkout from "./Checkout";
import NewContact from "../NewContact";
import AboutPage from '../AboutPage';
import ContactPage from '../ContactPage';
import SearchPage from '../SearchPage';
import MyLearning from '../MyLearning';
import PageNotFound from '../PageNotFound';
import RegistrationPage from '../RegistrationPage';
import { HomePage } from '../HomePage';
import Login from '../Login';
import CourseDetailPage from '../CourseDetailPage';
import LecturePage from '../LecturePage';
import Myprofile from '../../components/profile/Myprofile';
import Subscription from '../../components/profile/Subscription';
import PaymentMethod from '../../components/profile/PaymentMethod';
import PublicProfile from '../../components/profile/PublicProfile';
import Wishlisttab from '../../components/wishlisttab/Wishlisttab';
import CartPage from '../CartPage';
import Checkout from './Checkout';
import NewContact from '../NewContact';
import AdminDashboard from '../../Admin/dashboard/AdminDashboard';
import Dashboard from '../../Admin/pages/Dashboard';

import AdLayout from '../../Admin/components/shared/AdLayout';
import Layout from '../../components/Layout/Layout';
import Product from '../../Admin/pages/Branches';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main routes with MainLayout */}
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/wishlist" element={<Wishlisttab />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/new-contact" element={<NewContact />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/mylearning" element={<MyLearning />} />
          <Route path="/coursedetail" element={<CourseDetailPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/profile/subscription" element={<Subscription />} />
          <Route path="/profile/paymentMethods" element={<PaymentMethod />} />
          <Route path="/profile/publicProfile" element={<PublicProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Myprofile />} />
          <Route path="/lecture" element={<LecturePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/terms-and-conditions" element={<TermCondition />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        {/* Admin routes with AdminLayout */}
        <Route element={<AdLayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/branches" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
