import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UnlockButton } from "@/components/ui/unlock-button";
import { Menu, X } from "lucide-react";

const UnlockLogo = () => (
  <svg
    className="w-[157px] h-[40px] flex-shrink-0"
    width="157"
    height="40"
    viewBox="0 0 157 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1698_2305)">
      <rect width="156.769" height="40" fill="#212023" />
      <path
        d="M14.8212 29.9752C14.8212 32.5696 13.541 33.7781 10.7897 33.7781C8.03837 33.7781 6.75824 32.5696 6.75824 29.9752V0.544922H0V30.1416C0 36.307 4.0342 39.9872 10.7924 39.9872C17.5507 39.9872 21.5876 36.3097 21.5876 30.1471V0.544922H14.8239V29.9752H14.8212Z"
        fill="#F5F7F0"
      />
      <path
        d="M43.1884 17.4797C43.1884 20.3275 43.2402 22.6489 43.3139 24.5065C42.7057 22.8616 41.9476 20.8622 41.0231 18.5027L33.938 0.545697H27.0547V39.4274H33.7553V22.2697C33.7553 19.5447 33.6871 17.2424 33.5916 15.3603C34.238 17.0733 35.0179 19.1 35.9233 21.3614L43.0112 39.422H49.8372V0.542969H43.1911V17.4797H43.1884Z"
        fill="#F5F7F0"
      />
      <path
        d="M62.34 0.550781H55.5898V39.4352H72.9555V33.3456H62.34V0.550781Z"
        fill="#F5F7F0"
      />
      <path
        d="M113.647 0C106.932 0 102.922 3.67904 102.922 9.84443V30.1556C102.922 36.321 106.932 40 113.647 40C120.362 40 124.43 36.321 124.43 30.1556V26.089H117.731V29.9891C117.731 32.5136 116.395 33.7418 113.653 33.7418C110.91 33.7418 109.626 32.5491 109.626 29.9891V10.0109C109.626 7.41539 110.905 6.20633 113.653 6.20633C116.401 6.20633 117.731 7.41539 117.731 10.0109V14.0229H124.43V9.84443C124.43 3.67904 120.4 0 113.647 0Z"
        fill="#F5F7F0"
      />
      <path
        d="M143.028 19.4116L151.59 0.544922H144.237L135.912 19.5152L144.509 39.4294H152.083L143.028 19.4116Z"
        fill="#F5F7F0"
      />
      <path
        d="M154.88 0.423828C153.847 0.423828 153.008 1.2636 153.008 2.29634C153.008 3.32907 153.847 4.16885 154.88 4.16885C155.912 4.16885 156.752 3.32907 156.752 2.29634C156.752 1.2636 155.912 0.423828 154.88 0.423828ZM154.88 3.7476C154.081 3.7476 153.429 3.09807 153.429 2.29634C153.429 1.49461 154.078 0.845075 154.88 0.845075C155.681 0.845075 156.331 1.49461 156.331 2.29634C156.331 3.09807 155.681 3.7476 154.88 3.7476Z"
        fill="#F5F7F0"
      />
      <path
        d="M155.17 2.76358C155.11 2.79619 155.039 2.8125 154.958 2.8125C154.887 2.8125 154.825 2.79891 154.765 2.77445C154.705 2.74999 154.656 2.71466 154.613 2.66846C154.569 2.62226 154.537 2.56791 154.515 2.5054C154.49 2.44289 154.48 2.37223 154.48 2.29613C154.48 2.22004 154.49 2.15209 154.515 2.08959C154.539 2.02708 154.572 1.97272 154.615 1.92652C154.659 1.88032 154.711 1.84499 154.77 1.81781C154.83 1.79064 154.895 1.77977 154.966 1.77977C155.031 1.77977 155.094 1.79335 155.156 1.81781C155.219 1.84227 155.267 1.88304 155.306 1.93468L155.583 1.65747C155.512 1.57594 155.417 1.51343 155.303 1.47266C155.189 1.4319 155.069 1.41016 154.95 1.41016C154.822 1.41016 154.7 1.4319 154.588 1.47266C154.477 1.51343 154.379 1.57322 154.298 1.64932C154.216 1.72541 154.151 1.82053 154.102 1.92924C154.056 2.03795 154.031 2.16296 154.031 2.29613C154.031 2.4293 154.053 2.54888 154.099 2.66031C154.145 2.76902 154.208 2.86414 154.289 2.94295C154.371 3.02176 154.466 3.08155 154.577 3.12504C154.689 3.16852 154.808 3.19026 154.939 3.19026C155.083 3.19026 155.208 3.1658 155.319 3.11417C155.428 3.06525 155.52 2.99731 155.596 2.91034L155.311 2.644C155.273 2.69564 155.227 2.7364 155.164 2.76902L155.17 2.76358Z"
        fill="#F5F7F0"
      />
      <path
        d="M135.701 0.544922H128.93V39.4294H135.701V0.544922Z"
        fill="#F5F7F0"
      />
      <path
        d="M95.445 19.9973V9.84443C95.445 3.67904 91.4136 0 84.6646 0C77.9156 0 73.9414 3.67904 73.9414 9.84443V20H77.2914V30.1556C77.2914 36.321 81.301 40 88.0146 40C94.7282 40 98.795 36.321 98.795 30.1556V19.9973H95.445ZM88.02 33.7418C85.3106 33.7418 83.9941 32.5164 83.9941 29.9945V20H80.6441V10.0109C80.6441 7.41539 81.9225 6.20633 84.6701 6.20633C87.4176 6.20633 88.7478 7.41539 88.7478 10.0109V19.9973H92.0951V20.6386H92.0978V29.9945C92.0978 32.5164 90.7622 33.7418 88.02 33.7418Z"
        fill="#F5F7F0"
      />
    </g>
    <defs>
      <clipPath id="clip0_1698_2305">
        <rect width="156.769" height="40" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const navigationItems = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
];

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="h-20 bg-unlock-dark backdrop-blur-sm relative z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <UnlockLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-unlock-light font-normal text-base leading-6 hover:text-unlock-light/80 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <UnlockButton size="default" className="ml-4">
            Join
          </UnlockButton>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-unlock-light p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-unlock-dark border-t border-unlock-light/10 md:hidden">
            <nav className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-unlock-light font-normal text-base leading-6 hover:text-unlock-light/80 transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <UnlockButton size="default" className="w-full">
                    Join
                  </UnlockButton>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
