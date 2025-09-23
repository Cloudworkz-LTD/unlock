import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UnlockButton } from "@/components/ui/unlock-button";

const UnlockLogo = () => (
  <svg
    className="w-[157px] h-[40px] flex-shrink-0"
    width="157"
    height="40"
    viewBox="0 0 157 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1698_2175)">
      <path
        d="M14.843 29.9752C14.843 32.5696 13.561 33.7781 10.8056 33.7781C8.05022 33.7781 6.7682 32.5696 6.7682 29.9752V0.544922H0V30.1416C0 36.307 4.04014 39.9872 10.8083 39.9872C17.5765 39.9872 21.6194 36.3097 21.6194 30.1471V0.544922H14.8457V29.9752H14.843Z"
        fill="#F5F7F0"
      />
      <path
        d="M43.2513 17.4797C43.2513 20.3275 43.3031 22.6489 43.3769 24.5065C42.7678 22.8616 42.0086 20.8622 41.0827 18.5027L33.9872 0.545697H27.0938V39.4274H33.8042V22.2697C33.8042 19.5447 33.7359 17.2424 33.6403 15.3603C34.2876 17.0733 35.0687 19.1 35.9755 21.3614L43.0737 39.422H49.9098V0.542969H43.254V17.4797H43.2513Z"
        fill="#F5F7F0"
      />
      <path
        d="M62.432 0.550781H55.6719V39.4352H73.0631V33.3456H62.432V0.550781Z"
        fill="#F5F7F0"
      />
      <path
        d="M113.815 0C107.091 0 103.074 3.67904 103.074 9.84443V30.1556C103.074 36.321 107.091 40 113.815 40C120.54 40 124.614 36.321 124.614 30.1556V26.089H117.905V29.9891C117.905 32.5136 116.568 33.7418 113.821 33.7418C111.074 33.7418 109.788 32.5491 109.788 29.9891V10.0109C109.788 7.41539 111.069 6.20633 113.821 6.20633C116.573 6.20633 117.905 7.41539 117.905 10.0109V14.0229H124.614V9.84443C124.614 3.67904 120.578 0 113.815 0Z"
        fill="#F5F7F0"
      />
      <path
        d="M143.24 19.4116L151.814 0.544922H144.451L136.113 19.5152L144.723 39.4294H152.308L143.24 19.4116Z"
        fill="#F5F7F0"
      />
      <path
        d="M155.109 0.423828C154.075 0.423828 153.234 1.2636 153.234 2.29634C153.234 3.32907 154.075 4.16885 155.109 4.16885C156.143 4.16885 156.984 3.32907 156.984 2.29634C156.984 1.2636 156.143 0.423828 155.109 0.423828ZM155.109 3.7476C154.309 3.7476 153.656 3.09807 153.656 2.29634C153.656 1.49461 154.306 0.845075 155.109 0.845075C155.912 0.845075 156.562 1.49461 156.562 2.29634C156.562 3.09807 155.912 3.7476 155.109 3.7476Z"
        fill="#F5F7F0"
      />
      <path
        d="M155.4 2.76358C155.34 2.79619 155.269 2.8125 155.188 2.8125C155.117 2.8125 155.054 2.79891 154.994 2.77445C154.935 2.74999 154.886 2.71466 154.842 2.66846C154.799 2.62226 154.766 2.56791 154.744 2.5054C154.72 2.44289 154.709 2.37223 154.709 2.29613C154.709 2.22004 154.72 2.15209 154.744 2.08959C154.769 2.02708 154.801 1.97272 154.845 1.92652C154.888 1.88032 154.94 1.84499 155 1.81781C155.06 1.79064 155.125 1.77977 155.196 1.77977C155.261 1.77977 155.324 1.79335 155.386 1.81781C155.449 1.84227 155.498 1.88304 155.536 1.93468L155.813 1.65747C155.743 1.57594 155.647 1.51343 155.533 1.47266C155.419 1.4319 155.299 1.41016 155.179 1.41016C155.052 1.41016 154.929 1.4319 154.818 1.47266C154.706 1.51343 154.608 1.57322 154.526 1.64932C154.445 1.72541 154.379 1.82053 154.331 1.92924C154.284 2.03795 154.26 2.16296 154.26 2.29613C154.26 2.4293 154.282 2.54888 154.328 2.66031C154.374 2.76902 154.437 2.86414 154.518 2.94295C154.6 3.02176 154.695 3.08155 154.807 3.12504C154.918 3.16852 155.038 3.19026 155.169 3.19026C155.313 3.19026 155.438 3.1658 155.55 3.11417C155.658 3.06525 155.751 2.99731 155.827 2.91034L155.541 2.644C155.503 2.69564 155.457 2.7364 155.394 2.76902L155.4 2.76358Z"
        fill="#F5F7F0"
      />
      <path
        d="M135.9 0.544922H129.119V39.4294H135.9V0.544922Z"
        fill="#F5F7F0"
      />
      <path
        d="M95.5861 19.9973V9.84443C95.5861 3.67904 91.5487 0 84.7898 0C78.0308 0 74.0508 3.67904 74.0508 9.84443V20H77.4057V30.1556C77.4057 36.321 81.4212 40 88.1447 40C94.8682 40 98.941 36.321 98.941 30.1556V19.9973H95.5861ZM88.1502 33.7418C85.4367 33.7418 84.1183 32.5164 84.1183 29.9945V20H80.7633V10.0109C80.7633 7.41539 82.0436 6.20633 84.7952 6.20633C87.5469 6.20633 88.879 7.41539 88.879 10.0109V19.9973H92.2312V20.6386H92.2339V29.9945C92.2339 32.5164 90.8963 33.7418 88.1502 33.7418Z"
        fill="#F5F7F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_1698_2175">
        <rect width="157" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const FacebookIcon = () => (
  <svg
    className="w-6 h-6"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
      stroke="hsl(var(--primary))"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    className="w-6 h-6"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
      stroke="hsl(var(--primary))"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 9H2V21H6V9Z"
      stroke="hsl(var(--primary))"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
      stroke="hsl(var(--primary))"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#212023] text-white">
      <div className="container mx-auto px-4 py-12 lg:px-[105px] lg:py-20">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-[263px] mb-12">
          {/* Left Section - Logo, Social, and Newsletter */}
          <div className="flex flex-col lg:w-[510px] gap-12 lg:gap-[77px]">
            {/* Logo and Social */}
            <div className="flex flex-col gap-4">
              <UnlockLogo />
              <div className="flex items-center gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:bg-white/10 rounded transition-colors"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="flex flex-col sm:flex-row items-start gap-2.5 w-full">
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col w-full sm:w-[360px] gap-1"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="flex-1 bg-[#2A2A2A] text-white placeholder:text-[#737373] px-8 py-2.5 rounded font-aeonik text-sm border-none outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
                <p className="text-[#737373] text-[10px] leading-[120%] font-aeonik max-w-[313px]">
                  By subscribing, you agree to our Privacy Policy and consent to
                  receive updates from our company.
                </p>
              </form>
              <UnlockButton
                variant="default"
                onClick={handleSubscribe}
                className="mt-1 sm:mt-0 px-8 py-2.5 text-sm font-medium uppercase"
              >
                Subscribe
              </UnlockButton>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex justify-end flex-1">
            <div className="flex flex-col gap-4 w-[169px]">
              <nav className="flex flex-col">
                <Link
                  to="/blog"
                  className="py-1.5 text-[#F5F7F0] text-sm text-right font-aeonik font-light hover:text-white transition-colors"
                >
                  Blog Posts
                </Link>
                <Link
                  to="/faq"
                  className="py-1.5 text-[#F5F7F0] text-sm text-right font-aeonik font-light hover:text-white transition-colors"
                >
                  FAQs
                </Link>
                <a
                  href="#"
                  className="py-1.5 text-[#F5F7F0] text-sm text-right font-aeonik font-light hover:text-white transition-colors"
                >
                  Customer Support
                </a>
                <a
                  href="#"
                  className="py-1.5 text-[#F5F7F0] text-sm text-right font-aeonik font-light hover:text-white transition-colors"
                >
                  Join Now
                </a>
                <Link
                  to="/faq"
                  className="py-1.5 text-[#F5F7F0] text-sm text-right font-aeonik font-light hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Section - Copyright and Legal Links */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 pt-8 border-t border-white/10">
          <p className="text-[#F5F7F0] text-[10px] leading-[150%] font-aeonik">
            © 2025 Unlock Investing. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="text-[#F5F7F0] text-[10px] leading-[150%] font-aeonik hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#F5F7F0] text-[10px] leading-[150%] font-aeonik hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#F5F7F0] text-[10px] leading-[150%] font-aeonik hover:text-white transition-colors"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
