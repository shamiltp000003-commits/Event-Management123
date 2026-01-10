import React, { useState } from "react";
import axios from "axios";
const PhotographyCreation = () => {
  // -------- BASIC DETAILS --------
  const [studioName, setStudioName] = useState("");
  const [photographerName, setPhotographerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  // -------- SERVICE TYPES --------
  const [serviceTypes, setServiceTypes] = useState([]);

  const toggleServiceType = (type) => {
    setServiceTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // -------- PORTFOLIO --------
  const [images, setImages] = useState([]);

  const handlePortfolioUpload = (e) => {
    const files = Array.from(e.target.files);

    if (files.length + images.length > 4) {
      alert("Maximum 4 portfolio images allowed");
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

  // -------- PACKAGES --------
  const [packages, setPackages] = useState([]);
  const [packageName, setPackageName] = useState("");
  const [packageDescription, setPackageDescription] = useState("");
  const [packagePricePerHour, setPackagePricePerHour] = useState("");

  const addPackage = () => {
    if (!packageName || !packageDescription || !packagePricePerHour) {
      alert("Fill all package fields");
      return;
    }

    setPackages((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: packageName,
        description: packageDescription,
        pricePerHour: Number(packagePricePerHour),
      },
    ]);

    setPackageName("");
    setPackageDescription("");
    setPackagePricePerHour("");
  };

  const removePackage = (id) => {
    setPackages((prev) => prev.filter((pkg) => pkg.id !== id));
  };

  const [loading, setLoading] = useState(false);

  // -------- SUBMIT --------

const handleSubmit = async (e) => {
  e.preventDefault();

  if (packages.length === 0) {
    alert("Please add at least one package");
    return;
  }

  setLoading(true);

  try {
    const token = localStorage.getItem("token"); // ✅ get token

    const formData = new FormData();
    formData.append("studioName", studioName);
    formData.append("photographerName", photographerName);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("location", location);
    formData.append("description", description);
    formData.append("serviceTypes", JSON.stringify(serviceTypes));
    formData.append("packages", JSON.stringify(packages));

    // ✅ CATEGORY AUTO-INJECTED
    formData.append("category", "photography");

    images.forEach((img) => {
      formData.append("images", img.file);
    });

    const response = await axios.post(
      "/addPhotography  ",
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ token passed
          "Content-Type": "multipart/form-data",
        },
      }
    );

    alert("Photography Service Created Successfully!");

    // RESET
    setStudioName("");
    setPhotographerName("");
    setPhone("");
    setEmail("");
    setLocation("");
    setDescription("");
    setServiceTypes([]);
    setPackages([]);
    setImages([]);

  } catch (error) {
    console.error(error.response?.data || error.message);
    alert("Something went wrong");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="p-6 w-full">
      <h2 className="text-3xl font-medium mb-6 text-gray-600">
        Create Photography Service
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* BASIC INFO */}
        <input className="border p-3 rounded-xl" placeholder="Studio / Company Name" value={studioName} onChange={(e) => setStudioName(e.target.value)} required />
        <input className="border p-3 rounded-xl" placeholder="Photographer Name" value={photographerName} onChange={(e) => setPhotographerName(e.target.value)} required />
        <input className="border p-3 rounded-xl" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        <input className="border p-3 rounded-xl" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input className="border p-3 rounded-xl md:col-span-2" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />

        <textarea rows={4} className="border p-3 rounded-xl md:col-span-2" placeholder="About your photography service" value={description} onChange={(e) => setDescription(e.target.value)} required />

        {/* SERVICE TYPES */}
        <div className="md:col-span-2">
          <label className="font-semibold text-gray-600 mb-2 block">
            Photography Services Offered
          </label>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "Wedding","Engagement","Candid","Traditional","Drone",
              "Video Coverage","Baby Shoot","Maternity","Birthday","Corporate","Pre-Wedding"
            ].map((type) => (
              <label key={type} className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" checked={serviceTypes.includes(type)} onChange={() => toggleServiceType(type)} />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* PACKAGES */}
        <div className="md:col-span-2 bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold mb-3 text-gray-600">
            Create Packages (Hourly Pricing)
          </h3>

          <div className="grid md:grid-cols-3 gap-4">
            <input className="border p-3 rounded-xl" placeholder="Package Name" value={packageName} onChange={(e) => setPackageName(e.target.value)} />
            <input className="border p-3 rounded-xl" placeholder="Description" value={packageDescription} onChange={(e) => setPackageDescription(e.target.value)} />
            <input type="number" className="border p-3 rounded-xl" placeholder="Price per Hour (₹)" value={packagePricePerHour} onChange={(e) => setPackagePricePerHour(e.target.value)} />
          </div>

          <button type="button" onClick={addPackage} className="mt-4 bg-cyan-700 text-white px-6 py-2 rounded-xl">
            + Add Package
          </button>

          {packages.map((pkg) => (
            <div key={pkg.id} className="flex justify-between bg-white p-3 rounded-xl mt-2">
              <span>{pkg.name} — ₹{pkg.pricePerHour}/hour</span>
              <button type="button" onClick={() => removePackage(pkg.id)} className="text-red-600">
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* PORTFOLIO */}
        <div className="md:col-span-2">
          <label className="font-semibold text-gray-600 mb-2 block">
            Upload Portfolio Images (Max 4)
          </label>

          <input type="file" multiple accept="image/*" onChange={handlePortfolioUpload} />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            {images.map((img, index) => (
              <div key={index} className="relative">
                <img src={img.preview} alt="preview" className="h-24 w-full object-cover rounded-lg border" />
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
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          className="md:col-span-2 mt-6 bg-cyan-700 text-white py-3 rounded-xl text-lg font-semibold"
        >
          {loading ? "Saving..." : "Create Photography Service"}
        </button>
      </form>
    </div>
  );
};

export default PhotographyCreation;
