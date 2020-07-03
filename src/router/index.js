import {
  Dashbord,
  Login,
  NotFound,
  ProudctsList,
  EditProducts,
  ProductsCategory,
  Agency,
  EditAegncy,
  AgencyCategory,
  AddProduct
} from "../views";

import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
export const mainRouter = [
  {
    pathname: "/login",
    compoents: Login,
  },
  {
    pathname: "/404",
    compoents: NotFound,
  },
];
export const userRouter = [
  {
    pathname: "/user/dashbord",
    meta: {
      title: "首页",
    },
    icon: UserOutlined,
    compoents: Dashbord,
  },
  {
    pathname: "/user/products",
    meta: { title: "产品信息" },
    icon: UploadOutlined,
    exact: true,
    redirect: "/user/products/info",
    children: [
      {
        pathname: "/user/products/info",
        compoents: ProudctsList,
        icon: UserOutlined,
        meta: { title: "产品信息" },
      },
      {
        pathname: "/user/addProduct",
        meta: { title: "添加产品" },
        hidden: true,
        compoents: AddProduct,
      },
      {
        pathname: "/user/editProduct/:id",
        meta: { title: "编辑产品" },
        hidden: true,
        compoents: EditProducts,
      },
      {
        pathname: "/user/productCategory",
        meta: { title: "产品类别" },
        icon: VideoCameraOutlined,
        compoents: ProductsCategory,
      },
    ],
  },
  {
    pathname: "/user/security",
    meta: {
      title: "渠道管理",
    },
    redirect: "/user/security/aegncy/info",
    icon: UserOutlined,
    children: [
      {
        pathname: "/user/security/aegncy",
        meta: {
          title: "代理商管理",
        },
        icon: UserOutlined,
        redirect: "/user/security/aegncy/info",
        children: [
          {
            pathname: "/user/security/aegncy/info",
            meta: {
              title: "查看代理商",
            },
            icon: UserOutlined,
            compoents: Agency,
          },
          {
            pathname: "/user/security/aegncy/edit/:id",
            meta: {
              title: "编辑代理商",
            },
            icon: UserOutlined,
            compoents: EditAegncy,
            hidden:true
          },
          {
            pathname: "/user/security/aegncy/category",
            meta: {
              title: "代理商类别",
            },
            icon: UserOutlined,
            compoents: AgencyCategory,
          }
        ],
      },
    ],
  },
];
