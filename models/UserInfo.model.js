const { Schema, model, default: mongoose } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userInfoSchema = new Schema({
	id: { type: Schema.Types.ObjectId, ref: "User" },
	name: { type: String, required: true },
	mailingStreetAddress: { type: String, required: true },
	mailingCity: { type: String, required: true },
	mailingState: { type: String, required: true },
	mailingZipCode: { type: Number, required: true },
	cardHolder: { type: String, required: true },
	cardNumber: { type: Number, required: true },
	cvvNum: { type: Number, required: true },
	billingStreetAddress: { type: String, required: true },
	billingCity: { type: String, required: true },
	billingState: { type: String, required: true },
	billingZip: { type: String, required: true },
});

const UserInfo = model("UserInfo", userInfoSchema);

module.exports = UserInfo;
