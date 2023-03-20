const Form = require('../models/form');
const HttpError = require('../models/httpError')


const createForm = async (req, res) => {
    const form = new Form({
        ...req.body,
        owner: req.user._id
    })

    try {
        console.log(req.user._id)
        await form.save();
        res.status(201).send(form);
    } catch (e) {
        res.status(400).send(e);
        console.log(e);
    };
};

const deleteForm = async (req, res) => {
    try{
        const form = await Form.findOneAndDelete({ _id: req.params.id})
        
        if (!form) {
            res.status(404).send("failed");
        }
        res.send(form);

    } catch (e) {
        res.status(500).send(e);
        console.log(e);
    };
};

// const getFormByUserId = async (req, res) => {
//     try{
//         const forms = await Form.find({ owner: req.params.id })
//     } catch (e) {
//         res.status(500).send(e);
//         console.log(e);
//     }
// }

const getForm = async (req, res) => {
    const radioData = await req.params.radioData;
    // const userId = Form.find({ owner: req.user._id })
    try{
        await req.user.populate({
            path: 'forms',
            match: {
                radioData : radioData
            }
        });
        res.send(req.user.forms);
    } catch (e) {
        res.status(500).send(e)
        console.log(e)
    }
}

exports.createForm = createForm;
exports.deleteForm = deleteForm;
exports.getForm = getForm;