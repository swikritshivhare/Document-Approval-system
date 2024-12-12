const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
// import { create} from "../controllers/documentController.js";

// router.post('/create', create);
router.post('/documents', documentController.createDocument); // Create and submit document
router.get('/documents', documentController.getDocuments);    // Get all documents
router.post('/documents/approveReject', documentController.approveRejectDocument); // Approve/Reject document

module.exports = router;
