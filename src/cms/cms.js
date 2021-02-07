import CMS from "netlify-cms-app";
import ContactPagePreview from "./preview-template/ContactPagePreview";
import IndexPagePreview from "./preview-template/IndexPagePreview";
import ProductsPagePreview from "./preview-template/ProductsPagePreview";
import PromotionsPagePreview from "./preview-template/PromotionsPagePreview";
import RealisationPreview from "./preview-template/RealisationPreview";
import RealisationsPagePreview from "./preview-template/RealisationsPagePreview";

CMS.init();
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("products", ProductsPagePreview);
CMS.registerPreviewTemplate("realisations", RealisationsPagePreview);
CMS.registerPreviewTemplate("promotions", PromotionsPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("realisation", RealisationPreview);
