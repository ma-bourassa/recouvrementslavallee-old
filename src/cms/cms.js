import CMS from "netlify-cms-app";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import ProductsPagePreview from "./preview-templates/ProductsPagePreview";
import PromotionsPagePreview from "./preview-templates/PromotionsPagePreview";
import RealisationPreview from "./preview-templates/RealisationPreview";
import RealisationsPagePreview from "./preview-templates/RealisationsPagePreview";

CMS.init();
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("products", ProductsPagePreview);
CMS.registerPreviewTemplate("realisations", RealisationsPagePreview);
CMS.registerPreviewTemplate("promotions", PromotionsPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("realisation", RealisationPreview);
