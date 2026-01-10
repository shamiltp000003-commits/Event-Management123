    import mongoose from "mongoose";

    /* ---------- Decoration Package Schema ---------- */
    const decorationPackageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: {
        type: String,
        enum: ["Affordable", "Premium", "Luxury"],
        default: "Affordable",
    },
    pricePerDay: { type: Number, required: true },
    image: { type: String }, // image path / URL
    });

    /* ---------- Main Decoration Service Schema ---------- */
    const DecorationServiceSchema = new mongoose.Schema(
    {
        providerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Provider",
        required: true,
        },

        companyName: { type: String, required: true, trim: true },
        address: { type: String, required: true },
        location: { type: String, required: true },
        phone: { type: String, required: true },
        description: { type: String },

        decorations: [decorationPackageSchema], // ✅ Multiple packages
    },
    { timestamps: true }
    );

    export default mongoose.model("DecorationService", DecorationServiceSchema);
