import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UnlockButton } from "@/components/ui/unlock-button";
import { Menu, X, Facebook, Linkedin } from "lucide-react";

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
          <UnlockButton variant="secondary" size="default" className="ml-4">
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

        {/* Mobile Navigation - Full Screen Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 z-50 md:hidden flex flex-col"
            style={{
              backgroundColor: '#212023',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh'
            }}
          >
            {/* Header with Logo and Close Button */}
            <div className="h-20 flex items-center justify-between px-4">
              <Link to="/" className="flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
                <svg
                  className="w-[94px] h-6 flex-shrink-0"
                  width="95"
                  height="25"
                  viewBox="0 0 95 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_mobile_menu)">
                    <rect width="94.3196" height="24.0659" fill="#212023" />
                    <path
                      d="M8.91712 18.0348C8.91712 19.5957 8.14693 20.3228 6.49159 20.3228C4.83626 20.3228 4.06607 19.5957 4.06607 18.0348V0.328125H0V18.1349C0 21.8443 2.42716 24.0584 6.49324 24.0584C10.5593 24.0584 12.9881 21.8459 12.9881 18.1382V0.328125H8.91876V18.0348H8.91712Z"
                      fill="#F5F7F0"
                    />
                    <path
                      d="M25.9822 10.5181C25.9822 12.2315 26.0134 13.6281 26.0577 14.7457C25.6918 13.7561 25.2357 12.5531 24.6794 11.1335L20.4167 0.329766H16.2754V23.7228H20.3068V13.4C20.3068 11.7604 20.2658 10.3753 20.2083 9.2429C20.5972 10.2736 21.0664 11.4929 21.6112 12.8535L25.8756 23.7196H29.9824V0.328125H25.9838V10.5181H25.9822Z"
                      fill="#F5F7F0"
                    />
                    <path
                      d="M37.5065 0.332031H33.4453V23.7268H43.8933V20.0629H37.5065V0.332031Z"
                      fill="#F5F7F0"
                    />
                    <path
                      d="M68.3767 0C64.3367 0 61.9238 2.21348 61.9238 5.92287V18.143C61.9238 21.8524 64.3367 24.0659 68.3767 24.0659C72.4167 24.0659 74.864 21.8524 74.864 18.143V15.6964H70.8338V18.0428C70.8338 19.5617 70.0301 20.3007 68.38 20.3007C66.7299 20.3007 65.9573 19.5831 65.9573 18.0428V6.02304C65.9573 4.46145 66.7266 3.73402 68.38 3.73402C70.0334 3.73402 70.8338 4.46145 70.8338 6.02304V8.43685H74.864V5.92287C74.864 2.21348 72.4397 0 68.3767 0Z"
                      fill="#F5F7F0"
                    />
                    <path
                      d="M86.0529 11.6792L91.2041 0.328125H86.7802L81.7715 11.7415L86.944 23.7228H91.5006L86.0529 11.6792Z"
                      fill="#F5F7F0"
                    />
                    <path
                      d="M93.1829 0.253906C92.5618 0.253906 92.0566 0.759155 92.0566 1.3805C92.0566 2.00184 92.5618 2.50709 93.1829 2.50709C93.8041 2.50709 94.3092 2.00184 94.3092 1.3805C94.3092 0.759155 93.8041 0.253906 93.1829 0.253906ZM93.1829 2.25364C92.7023 2.25364 92.31 1.86285 92.31 1.3805C92.31 0.898139 92.7007 0.507348 93.1829 0.507348C93.6651 0.507348 94.0558 0.898139 94.0558 1.3805C94.0558 1.86285 93.6651 2.25364 93.1829 2.25364Z"
                      fill="#F5F7F0"
                    />
                    <path
                      d="M93.3568 1.66194C93.3208 1.68156 93.2783 1.69137 93.2293 1.69137C93.1868 1.69137 93.1492 1.6832 93.1132 1.66848C93.0773 1.65377 93.0478 1.63251 93.0217 1.60471C92.9955 1.57691 92.9759 1.54421 92.9628 1.50661C92.9481 1.469 92.9416 1.42648 92.9416 1.3807C92.9416 1.33492 92.9481 1.29404 92.9628 1.25643C92.9776 1.21883 92.9972 1.18612 93.0233 1.15833C93.0495 1.13053 93.0805 1.10927 93.1165 1.09292C93.1525 1.07657 93.1917 1.07003 93.2342 1.07003C93.2734 1.07003 93.311 1.07821 93.3486 1.09292C93.3862 1.10764 93.4156 1.13217 93.4385 1.16323L93.6053 0.996451C93.5628 0.947398 93.5056 0.90979 93.4369 0.885264C93.3682 0.860737 93.2963 0.847656 93.2244 0.847656C93.1476 0.847656 93.074 0.860737 93.007 0.885264C92.94 0.90979 92.8811 0.945763 92.8321 0.991546C92.783 1.03733 92.7438 1.09456 92.7144 1.15996C92.6866 1.22537 92.6719 1.30058 92.6719 1.3807C92.6719 1.46082 92.685 1.53277 92.7127 1.59981C92.7405 1.66521 92.7781 1.72244 92.8272 1.76986C92.8762 1.81728 92.9334 1.85325 93.0004 1.87941C93.0675 1.90557 93.1394 1.91865 93.2179 1.91865C93.3045 1.91865 93.3797 1.90394 93.4467 1.87287C93.5121 1.84344 93.5677 1.80256 93.6134 1.75024L93.4418 1.59C93.4189 1.62106 93.3911 1.64559 93.3535 1.66521L93.3568 1.66194Z"
                      fill="#F5F7F0"
                    />
                    <path
                      d="M81.6441 0.328125H77.5703V23.7228H81.6441V0.328125Z"
                      fill="#F5F7F0"
                    />
                    <path
                      d="M57.4239 12.0313V5.92287C57.4239 2.21348 54.9984 0 50.9379 0C46.8774 0 44.4863 2.21348 44.4863 5.92287V12.0329H46.5018V18.143C46.5018 21.8524 48.9142 24.0659 52.9534 24.0659C56.9926 24.0659 59.4394 21.8524 59.4394 18.143V12.0313H57.4239ZM52.9567 20.3007C51.3266 20.3007 50.5345 19.5634 50.5345 18.0461V12.0329H48.519V6.02304C48.519 4.46145 49.2881 3.73402 50.9412 3.73402C52.5943 3.73402 53.3946 4.46145 53.3946 6.02304V12.0313H55.4084V12.4172H55.4101V18.0461C55.4101 19.5634 54.6065 20.3007 52.9567 20.3007Z"
                      fill="#F5F7F0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_mobile_menu">
                      <rect width="94.3196" height="24.0659" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <button
                className="text-unlock-light p-2"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Main Menu Content - Centered */}
            <div className="flex-1 flex flex-col items-center justify-center px-4">
              <div className="flex flex-col items-center gap-16 w-full max-w-[219px]">
                {/* Navigation Items */}
                <nav className="flex flex-col items-center gap-8">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-unlock-light font-aeonik text-xl font-normal leading-[150%] hover:text-unlock-light/80 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Social Media Icons */}
                <div className="flex items-center gap-[15px]">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-unlock-green stroke-[1.5]" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-unlock-green stroke-[1.5]" />
                  </a>
                </div>

                {/* Join Button */}
                <div className="w-[180px]">
                  <UnlockButton
                    variant="primary"
                    size="default"
                    className="w-full h-[41px] bg-unlock-green text-unlock-light font-aeonik text-sm font-medium uppercase tracking-wide"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Join
                  </UnlockButton>
                </div>
              </div>
            </div>

            {/* Bottom Padding */}
            <div className="h-[103px]" />
          </div>
        )}
      </div>
    </header>
  );
};
