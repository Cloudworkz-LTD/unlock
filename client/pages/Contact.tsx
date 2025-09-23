import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    agreeToTerms: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      agreeToTerms: e.target.checked
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-unlock-dark">
      <section className="px-4 md:px-8 lg:px-24 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-2 mb-10">
            <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight font-aeonik text-white leading-[0.81] tracking-[-0.03em] text-center">
              Get in Touch
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-2xl mb-10">
            <p className="text-lg md:text-xl text-white font-light font-aeonik leading-[1.2]">
              We'd love to hear from you. Contact Unlock today for more information.
            </p>
          </div>

          {/* Main Content - Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between lg:items-start">
            {/* Left Column - Contact Information */}
            <div className="flex flex-col gap-8 lg:w-[557px] p-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-unlock-green font-aeonik text-3xl md:text-4xl font-light leading-[1.4]">
                  Contact information
                </h2>
                <p className="text-unlock-light font-aeonik text-base font-light leading-[1.5] text-center lg:text-left">
                  For any inquiries, please feel free to reach out to us.
                </p>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col gap-6">
                {/* Email */}
                <div className="flex items-center gap-2">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/b6b12ad7f72f8725c68147bdc127ac6b8c7922ae?width=56"
                    alt="Email icon"
                    className="w-14 h-14 rounded-2xl"
                  />
                  <span className="text-unlock-light font-aeonik text-base font-normal leading-[1.5]">
                    hello@unlock.com
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/748dcc647d9ba86422193043c02ebc742e107e5b?width=56"
                    alt="Phone icon"
                    className="w-14 h-14 rounded-2xl"
                  />
                  <span className="text-unlock-light font-aeonik text-base font-normal leading-[1.5]">
                    +1 (555) 123-4567
                  </span>
                </div>

                {/* Address & Get Directions */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/4fc42ed93ac8b964c56e29fd8a8a49d4f3ea6e68?width=56"
                      alt="Location icon"
                      className="w-14 h-14 rounded-2xl"
                    />
                    <span className="text-unlock-light font-aeonik text-base font-normal leading-[1.5]">
                      123 Main St, New York, NY 10001
                    </span>
                  </div>
                  <Button
                    className="bg-unlock-green text-white font-aeonik text-sm font-medium uppercase leading-[1.5] tracking-wide rounded px-8 py-2.5 hover:bg-unlock-green/90"
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="lg:w-[560px] p-8 border border-unlock-gray-dark rounded-none">
              <div className="flex flex-col gap-6">
                {/* Form Header */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-unlock-light font-aeonik text-3xl md:text-4xl font-normal leading-[1.4]">
                    Get in Touch
                  </h2>
                  <p className="text-[#DAE3ED] font-aeonik text-sm font-light leading-[1.5] text-center lg:text-left">
                    Have a question or need assistance? Contact us today!
                  </p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name Field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-white font-aeonik text-sm font-normal leading-[1.5] px-8">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Full name"
                      className="bg-[#2A2A2A] text-unlock-gray-medium font-aeonik text-sm font-light leading-[1.5] rounded px-8 py-2.5 border-none placeholder:text-unlock-gray-medium focus:outline-none focus:ring-2 focus:ring-unlock-green"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-white font-aeonik text-sm font-normal leading-[1.5] px-8">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Email Address"
                      className="bg-[#2A2A2A] text-unlock-gray-medium font-aeonik text-sm font-light leading-[1.5] rounded px-8 py-2.5 border-none placeholder:text-unlock-gray-medium focus:outline-none focus:ring-2 focus:ring-unlock-green"
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div className="flex flex-col gap-1">
                    <label className="text-white font-aeonik text-sm font-normal leading-[1.5] px-8">
                      Your message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Enter your message"
                      rows={6}
                      className="bg-[#2A2A2A] text-unlock-gray-medium font-aeonik text-sm font-light leading-[1.5] rounded px-8 py-2.5 border-none placeholder:text-unlock-gray-medium focus:outline-none focus:ring-2 focus:ring-unlock-green resize-none"
                      required
                    />
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 rounded border border-unlock-gray-medium bg-[#DAE3ED] focus:ring-2 focus:ring-unlock-green"
                      required
                    />
                    <label htmlFor="agreeToTerms" className="text-white font-aeonik text-sm font-light leading-[1.5]">
                      I agree to the Terms
                    </label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="outline"
                    className="border border-[#DAE3ED] text-[#DAE3ED] font-aeonik text-sm font-medium uppercase leading-[1.5] tracking-wide rounded px-8 py-2.5 hover:bg-[#DAE3ED] hover:text-unlock-dark bg-transparent"
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
