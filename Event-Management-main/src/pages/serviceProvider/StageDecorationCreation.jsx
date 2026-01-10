import React, { useState } from "react";
import axios from "axios";
const StageDecorationCreation = () => {
  // Main details
  const [companyName, setCompanyName] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  // Packages
  const [decorations, setDecorations] = useState([]);

  // Package builder fields
  const [decTitle, setDecTitle] = useState("");
  const [decDescription, setDecDescription] = useState("");
  const [decCategory, setDecCategory] = useState("Affordable");
  const [decPricePerDay, setDecPricePerDay] = useState("");
  const [decImage, setDecImage] = useState(null);
  const [decImagePreview, setDecImagePreview] = useState(null);

  const [loading, setLoading] = useState(false);

  // ---------- HANDLE IMAGE ----------
  const handleDecorationImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setDecImage(file);
    setDecImagePreview(URL.createObjectURL(file));
  };

  const removeBuilderImage = () => {
    setDecImage(null);
    setDecImagePreview(null);
  };

  // ---------- ADD PACKAGE ----------
  const addDecoration = () => {
    if (!decTitle || !decDescription || !decPricePerDay || !decImage) {
      alert("Fill all package fields before adding!");
      return;
    }

    setDecorations((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: decTitle,
        description: decDescription,
        category: decCategory,
        pricePerDay: Number(decPricePerDay),
        image: decImage,
        preview: decImagePreview,
      },
    ]);

    // Reset builder
    setDecTitle("");
    setDecDescription("");
    setDecCategory("Affordable");
    setDecPricePerDay("");
    setDecImage(null);
    setDecImagePreview(null);
  };

  const removeDecoration = (index) => {
    setDecorations(decorations.filter((_, i) => i !== index));
  };

  // ---------- SUBMIT ----------

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token"); // ✅ get token

      const formData = new FormData();

      formData.append("companyName", companyName);
      formData.append("address", address);
      formData.append("location", location);
      formData.append("phone", phone);
      formData.append("description", description);

      // category auto-injected
      formData.append("category", "stage-decoration");

      const packagesData = decorations.map((item) => {
        formData.append("images", item.image);

        return {
          title: item.title,
          description: item.description,
          category: item.category,
          pricePerDay: item.pricePerDay,
        };
      });

      formData.append("packages", JSON.stringify(packagesData));

      const response = await axios.post(
        "/addstage-decoration",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ token passed
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Stage Decoration Service Created!");

      // RESET
      setCompanyName("");
      setAddress("");
      setLocation("");
      setPhone("");
      setDescription("");
      setDecorations([]);
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 w-full">
      <h2 className="text-3xl font-bold mb-6 text-gray-600">
        Create Stage Decoration Service
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl grid md:grid-cols-2 gap-6"
      >
        {/* BASIC INFO */}
        <input
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="border p-3 rounded-xl"
          required
        />
        <input
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border p-3 rounded-xl"
          required
        />
        <input
          placeholder="Location (City / Area)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-3 rounded-xl"
          required
        />
        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-3 rounded-xl"
          required
        />

        <textarea
          rows={4}
          placeholder="About the Decoration Service"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-3 rounded-xl md:col-span-2"
          required
        />

        {/* PACKAGE BUILDER */}
        <div className="md:col-span-2 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-gray-600">
            Add Decoration Packages
          </h3>

          <div className="grid md:grid-cols-5 gap-4">
            <input
              placeholder="Package Title"
              value={decTitle}
              onChange={(e) => setDecTitle(e.target.value)}
              className="border p-3 rounded-xl"
            />
            <input
              placeholder="Description"
              value={decDescription}
              onChange={(e) => setDecDescription(e.target.value)}
              className="border p-3 rounded-xl"
            />

            <select
              value={decCategory}
              onChange={(e) => setDecCategory(e.target.value)}
              className="border p-3 rounded-xl"
            >
              <option>Affordable</option>
              <option>Premium</option>
              <option>Luxury</option>
            </select>

            <input
              type="number"
              placeholder="Price per Day (₹)"
              value={decPricePerDay}
              onChange={(e) => setDecPricePerDay(e.target.value)}
              className="border p-3 rounded-xl"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleDecorationImage}
              className="border p-3 rounded-xl bg-gray-50"
            />
          </div>

          {/* BUILDER IMAGE PREVIEW */}
          {decImagePreview && (
            <div className="relative w-fit mt-3">
              <img
                src={decImagePreview}
                alt="preview"
                className="h-20 w-20 object-cover rounded-lg border"
              />
              <button
                type="button"
                onClick={removeBuilderImage}
                className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-1 rounded-full"
              >
                ✕
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={addDecoration}
            className="mt-4 bg-cyan-700 text-white px-6 py-2 rounded-xl"
          >
            + Add Package
          </button>
        </div>

        {/* PACKAGE LIST */}
        <div className="md:col-span-2">
          {decorations.map((item, index) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-xl mb-2"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.preview}
                  alt="preview"
                  className="h-12 w-12 object-cover rounded-lg border"
                />
                <span>
                  {item.title} | {item.category} | ₹{item.pricePerDay}/day
                </span>
              </div>
              <button
                type="button"
                onClick={() => removeDecoration(index)}
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="md:col-span-2 mt-6 bg-cyan-800 text-white py-3 rounded-xl text-lg font-semibold"
        >
          {loading ? "Saving..." : "Create Stage Decoration Service"}
        </button>
      </form>
    </div>
  );
};

export default StageDecorationCreation;
