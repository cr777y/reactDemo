import AsyncCompnent from "../components/asyncImport/AsyncComponent.js";

const Dashbord = AsyncCompnent(() => import("./dashbord"));
const Login = AsyncCompnent(() => import("./login"));
const NotFound = AsyncCompnent(() => import("./notFound"));
const ProudctsList = AsyncCompnent(() => import("./products"));
const EditProducts = AsyncCompnent(() => import("./products/edit"));
const AddProduct = AsyncCompnent(() => import("./products/add"));
const ProductsCategory = AsyncCompnent(() => import("./products/category"));
const Agency=AsyncCompnent(()=>import('./productsAnti/agencys'))
const EditAegncy=AsyncCompnent(()=>import('./productsAnti/agencys/edit'))
const AgencyCategory=AsyncCompnent(()=>import('./productsAnti/agencys/category'))




export { Dashbord, Login, NotFound, ProudctsList, EditProducts ,ProductsCategory,Agency,EditAegncy,AgencyCategory,AddProduct};
