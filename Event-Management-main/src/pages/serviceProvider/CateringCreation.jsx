import React, { useState } from "react";
import axios from "axios";
const CateringCreation = () => {
  // Provider info
  const [companyName, setCompanyName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [location, setLocation] = useState("");

  // Packages
  const [packages, setPackages] = useState([]);
  const [packageName, setPackageName] = useState("");
  const [foodType, setFoodType] = useState("veg");
  const [pricePerPerson, setPricePerPerson] = useState("");
  const [description, setDescription] = useState("");

  // Images
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // ---------- ADD PACKAGE ----------
  const addPackage = () => {
    if (!packageName || !pricePerPerson) {
      alert("Fill package name and price");
      return;
    }

    setPackages((prev) => [
      ...prev,
      {
        id: Date.now(),
        packageName,
        foodType,
        pricePerPerson,
        description,
      },
    ]);

    setPackageName("");
    setFoodType("veg");
    setPricePerPerson("");
    setDescription("");
  };

  const removePackage = (id) => {
    setPackages(packages.filter((p) => p.id !== id));
  };

  // ---------- IMAGE UPLOAD ----------
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + images.length > 4) {
      alert("Max 4 images");
      return;
    }

    setImages((prev) => [
      ...prev,
      ...files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      })),
    ]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // ---------- SUBMIT ----------
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("companyName", companyName);
      formData.append("ownerName", ownerName);
      formData.append("contactNumber", contactNumber);
      formData.append("location", location);
      formData.append("packages", JSON.stringify(packages));
      formData.append("category", "catering");

      images.forEach((img) => {
        formData.append("images", img.file);
      });

      const response = await axios.post(
        "/addCatering",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ token passed
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Catering Service Created");

      // optional reset
      setCompanyName("");
      setOwnerName("");
      setContactNumber("");
      setLocation("");
      setPackages([]);
      setImages([]);
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl w-full mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-600">
        Create Catering Service
      </h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-8 rounded-2xl"
      >
        {/* Provider Details */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="border p-3 rounded-xl"
          />
          <input
            placeholder="Owner Name"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            className="border p-3 rounded-xl"
          />
          <input
            placeholder="Contact Number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            className="border p-3 rounded-xl"
          />
          <input
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border p-3 rounded-xl"
          />
        </div>

        {/* ADD PACKAGE */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="font-bold text-lg mb-4 text-gray-600">Add Package</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              placeholder="Package Name"
              value={packageName}
              onChange={(e) => setPackageName(e.target.value)}
              className="border p-3 rounded-xl"
            />

            <select
              value={foodType}
              onChange={(e) => setFoodType(e.target.value)}
              className="border p-3 rounded-xl"
            >
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
              <option value="both">Veg & Non-Veg</option>
            </select>

            <input
              type="number"
              placeholder="Price per Person (₹)"
              value={pricePerPerson}
              onChange={(e) => setPricePerPerson(e.target.value)}
              className="border p-3 rounded-xl"
            />

            <textarea
              placeholder="Package Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border p-3 rounded-xl"
            />
          </div>

          <button
            type="button"
            onClick={addPackage}
            className="mt-4 bg-cyan-600 text-white px-6 py-2 rounded-xl"
          >
            + Add Package
          </button>
        </div>

        {/* PACKAGE LIST */}
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="flex justify-between bg-gray-100 p-3 rounded-xl"
          >
            <span>
              {pkg.packageName} | {pkg.foodType} | ₹{pkg.pricePerPerson}/person
            </span>
            <button
              type="button"
              onClick={() => removePackage(pkg.id)}
              className="text-red-600"
            >
              Remove
            </button>
          </div>
        ))}

        {/* IMAGES */}
        <div>
          <label className="font-semibold mb-2 block text-gray-600">
            Upload Images (Max 4)
          </label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
          />

          {images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
              {images.map((img, index) => (
                <div key={index} className="relative">
                  <img
                    src={img.preview}
                    alt="preview"
                    className="h-24 w-full object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 py-1 rounded-full"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-3 rounded-xl text-lg font-semibold"
        >
          {loading ? "Saving..." : "Create Catering Service"}
        </button>
      </form>
    </div>
  );
};

export default CateringCreation;
