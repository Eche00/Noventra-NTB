import { createProperty } from "../../utils/createpoperty";
import { bathrooms, beds, sizes } from "../../utils/svg";
import { LocationOn } from "@mui/icons-material";

export default function PropertyManagement() {
    const { step, form, loading, handleChange, handleSubmit, next, prev } = createProperty()
    return (
        <div className="min-h-screen bg-gray-100 flex justify-center p-6">
            <div className="bg-linear-to-b from-[#E0DEF7] to-[#E0DEF700] shadow-xl rounded-2xl p-8 h-fit w-full max-w-xl transition">

                {/* STEP INDICATOR */}
                <div className="flex justify-between mb-8">
                    {[1, 2, 3, 4].map((s) => (
                        <div
                            key={s}
                            className={`w-10 h-10 flex items-center justify-center rounded-full font-bold 
                                ${step === s ? "bg-[#7065F0] text-white" : "bg-white text-gray-700"}`}
                        >
                            {s}
                        </div>
                    ))}
                </div>

                {/* STEP 1 */}
                {step === 1 && (
                    <div className="space-y-5 animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">
                            Basic Information
                        </h2>

                        <div>
                            <label className="block text-sm mb-1 font-medium">Title</label>
                            <input
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                placeholder="Modern 2 Bedroom Apartment"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1 font-medium">Location</label>
                            <input
                                name="location"
                                value={form.location}
                                onChange={handleChange}
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                placeholder="234 str, florida USA"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1 font-medium">Type</label>
                            <select
                                name="type"
                                value={form.type}
                                onChange={handleChange}
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                            >
                                <option value="rent">Rent</option>
                                <option value="buy">Buy</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm mb-1 font-medium">Price</label>
                            <input
                                type="number"
                                name="price"
                                value={form.price}
                                onChange={handleChange}
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                placeholder="1500000"
                            />
                        </div>

                        <button
                            onClick={next}
                            className="w-full bg-[#7065F0] text-white py-3 rounded-lg font-semibold cursor-pointer"
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                    <div className="space-y-5 animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">
                            Property Details
                        </h2>

                        <div>
                            <label className="block text-sm mb-1 font-medium">Beds</label>
                            <input
                                type="number"
                                name="beds"
                                value={form.beds}
                                onChange={handleChange}
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                placeholder="3"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1 font-medium">Bathrooms</label>
                            <input
                                type="number"
                                name="bathrooms"
                                value={form.bathrooms}
                                onChange={handleChange}
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                placeholder="2"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1 font-medium">Size (sqft)</label>
                            <input
                                type="number"
                                name="size"
                                value={form.size}
                                onChange={handleChange}
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                placeholder="1200"
                            />
                        </div>

                        <div className="flex justify-between gap-3">
                            <button
                                onClick={prev}
                                className="w-full bg-gray-300 py-3 rounded-lg font-semibold cursor-pointer"
                            >
                                Back
                            </button>

                            <button
                                onClick={next}
                                className="w-full bg-[#7065F0] text-white py-3 rounded-lg font-semibold cursor-pointer"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                    <div className="space-y-5 animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">
                            Add Media & Description
                        </h2>

                        <div>
                            <label className="block text-sm mb-1 font-medium">Image URL</label>
                            <input
                                name="img"
                                value={form.img}
                                onChange={handleChange}
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                placeholder="https://example.com/house.jpg"
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1 font-medium">Description</label>
                            <textarea
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                className="w-full border border-gray-400 rounded-lg px-3 py-2"
                                rows={3}
                                placeholder="Explain more about the property..."
                            />
                        </div>

                        <div className="flex justify-between gap-3">
                            <button
                                onClick={prev}
                                className="w-full bg-gray-300 py-3 rounded-lg font-semibold cursor-pointer"
                            >
                                Back
                            </button>

                            <button
                                onClick={next}
                                className="w-full bg-[#7065F0] text-white py-3 rounded-lg font-semibold cursor-pointer"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 4 — PREVIEW + SUBMIT */}
                {step === 4 && (
                    <div className="space-y-5 animate-fadeIn">
                        <h2 className="text-2xl font-bold text-gray-800 text-center">
                            Preview & Submit
                        </h2>




                        <div className={`mx-auto flex flex-col  max-w-[300px] overflow-hidden rounded-lg border-[1.5px] border-[#F0EFFB] bg-[#FFFFFF]`}>
                            <img src={form.img} alt="" className='w-full h-[200px] ' />
                            <section className='w-[90%] mx-auto flex flex-col py-5'>
                                <h3 className='text-[#7065F0] text-[24px] font-extrabold'>${Number(form.price).toLocaleString()}  <span className=' text-gray-400 text-[16px] font-normal'> /{form.type}</span></h3>
                                <h2 className='text-[#000929] text-[24px] font-bold'>{form.title.slice(0, 13)}...</h2>
                                <h4 className='text-gray-400 text-[16px] font-normal flex'><span className="text-[#7065F0]"><LocationOn /></span> {form.location.slice(0, 20)}</h4>
                                <h4 className='text-gray-400 text-[16px] font-normal mb-4'>{form.description.slice(0, 30)}...</h4>

                                <div className='w-full border-t-[1.5px] border-[#F0EFFB] pt-4 flex flex-wrap gap-2 items-center justify-between'>
                                    <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{beds} {form.beds} Beds</span>
                                    <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{bathrooms}{form.bathrooms} Bathrooms</span>
                                    <span className='flex items-center gap-2 text-gray-600 text-[14px] font-normal'>{sizes} {form.size} sqft</span>
                                </div>
                            </section>
                        </div>

                        <div className="flex justify-between gap-3">
                            <button
                                onClick={prev}
                                className="w-full bg-gray-300 py-3 rounded-lg font-semibold cursor-pointer"
                            >
                                Back
                            </button>

                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="w-full bg-[#7065F0] text-white py-3 rounded-lg font-semibold cursor-pointer"
                            >
                                {loading ? "Submitting..." : "Submit Property"}
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
