const User = require('../models/Document');
const mongoose = require('mongoose');


// Create and submit a document
exports.createDocument = async (req, res) => {
  try {
    const { title, content, status } = req.body;
    const newDocument = new User({ title, content , status});
    await newDocument.save();
    res.status(201).json({ message: 'Document submitted successfully', document: newDocument });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit document' });
  }
};

// Get all documents
exports.getDocuments = async (req, res) => {
  try {
    const documents = await User.find();
    console.log(".....", User)
    if(documents.length === 0){
        return res.status(404).json({message: "There is no document"});
    }

    res.status(200).json(documents);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
};

// Approve or reject a document
exports.approveRejectDocument = async (req, res) => {
  const { status, _id } = req.body;
  console.log(status,"____")
  try {
    const document = await User.find({status, _id});
    res.status(200).json(document);

    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

  } catch (err) {
    res.status(500).json({ error: 'Failed to approve/reject document' });
  }
};
