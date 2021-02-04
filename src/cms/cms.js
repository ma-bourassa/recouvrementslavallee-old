import CMS from "netlify-cms-app";
import IndexPagePreview from "./preview-template/IndexPagePreview";
import RealisationPreview from "./preview-template/RealisationPreview";

CMS.init();
CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("realisations", RealisationPreview);
