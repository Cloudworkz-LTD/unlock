import { UnlockButton } from "@/components/ui/unlock-button";

export default function Index() {
  return (
    <div className="min-h-screen bg-unlock-dark">
      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-24 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-28 max-w-7xl mx-auto">
          {/* Content */}
          <div className="flex flex-col items-start gap-8 lg:w-2/3">
            {/* Title Block */}
            <div className="flex flex-col items-start gap-2 w-full">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light font-aeonik text-unlock-green leading-[0.81] tracking-[-0.03em] w-full">
                Due Diligence
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight font-aeonik text-white leading-[0.81] tracking-[-0.03em] w-full">
                for Smarter
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight font-aeonik text-white leading-[0.81] tracking-[-0.03em] w-full">
                Investments
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-white font-light font-aeonik leading-[1.2] max-w-2xl">
              Unlock delivers data-backed due diligence reports, using AI and
              expert analysis to provide investors with clear, actionable
              insights.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <UnlockButton
                size="default"
                className="rounded-[10px] bg-unlock-green text-unlock-light font-medium uppercase tracking-wide"
              >
                Join
              </UnlockButton>
              <UnlockButton
                variant="outline"
                size="default"
                className="rounded-[10px] border-unlock-light text-unlock-light font-medium uppercase tracking-wide hover:bg-unlock-light hover:text-unlock-dark"
              >
                Learn More
              </UnlockButton>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative w-72 h-[450px] md:w-80 md:h-[500px] lg:w-72 lg:h-[454px]">
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2Fe2d3df77f0f141dfa42167108d54aaf2"
                  alt="Professional businessman in suit"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boat Background Section */}
      <section className="px-4 md:px-8 lg:px-10 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative h-[400px] md:h-[449px] rounded-[10px] overflow-hidden flex items-center justify-between px-4 md:px-10 lg:px-10"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2Ff643326cf0d34403934d58a749837989?format=webp&width=2460')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Text Content Block - Left Side */}
            <div className="flex flex-col items-start gap-12 lg:gap-[156px] max-w-2xl lg:max-w-[609px] z-10">
              <h2 className="text-unlock-light font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-[110%] w-full">
                Make informed investment decisions with clear, factual insights
              </h2>
              <p className="text-unlock-light font-serif text-sm md:text-base font-medium leading-[120%] max-w-xs lg:max-w-[295px]">
                Our due diligence reports aggregate financial, legal, and
                operational data from trusted sources, ensuring accuracy and
                transparency
              </p>
            </div>

            {/* Circular SVG Element - Right Side */}
            <div className="hidden lg:block relative">
              <svg
                className="w-72 h-72 xl:w-[372px] xl:h-[369px]"
                width="372"
                height="369"
                viewBox="0 0 372 369"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M336.908 253.675C311.186 314.415 250.984 357.043 180.801 357.043C87.2336 357.043 11.3802 281.264 11.3802 187.787C11.3802 94.311 87.2337 18.5317 180.801 18.5317C274.369 18.5317 350.223 94.3111 350.223 187.787"
                  stroke="#F5F7F0"
                  strokeMiterlimit="10"
                />
                <path
                  d="M305.411 73.1172C333.235 103.273 350.223 143.555 350.223 187.791"
                  stroke="#00BB77"
                  strokeWidth="6"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Risk Analysis Section */}
      <section className="py-16 lg:py-24 px-4 md:px-8 lg:px-24 bg-unlock-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-12 lg:gap-16">
            {/* Section Title */}
            <h2 className="text-unlock-light font-aeonik text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[110%] text-center">
              Comprehensive Risk Analysis
            </h2>

            {/* Three Feature Columns */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-5 w-full">
              {/* Feature 1 - Analytics */}
              <div className="flex flex-col items-center gap-8 p-5 max-w-[300px] lg:max-w-[280px]">
                <svg
                  className="w-15 h-15"
                  width="60"
                  height="61"
                  viewBox="0 0 60 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1698_2223)">
                    <path
                      d="M29.839 22.8827C27.9348 22.8827 26.3867 21.3338 26.3867 19.4296C26.3867 17.5254 27.9348 15.9766 29.839 15.9766C31.7431 15.9766 33.292 17.5254 33.292 19.4296C33.292 21.3338 31.7431 22.8827 29.839 22.8827ZM29.839 17.5741C28.8162 17.5741 27.9835 18.4069 27.9835 19.4304C27.9835 20.4539 28.8162 21.2867 29.839 21.2867C30.8617 21.2867 31.6952 20.4539 31.6952 19.4304C31.6952 18.4069 30.8625 17.5741 29.839 17.5741Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M29.8394 41.8904C29.3979 41.8904 29.041 41.5327 29.041 41.092V22.0855C29.041 21.6448 29.3979 21.2871 29.8394 21.2871C30.2809 21.2871 30.6378 21.6448 30.6378 22.0855V41.092C30.6378 41.5327 30.2809 41.8904 29.8394 41.8904Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M36.7987 29.9951C34.8946 29.9951 33.3457 28.4463 33.3457 26.5421C33.3457 24.6379 34.8946 23.0898 36.7987 23.0898C38.7029 23.0898 40.251 24.6387 40.251 26.5421C40.251 28.4455 38.7029 29.9951 36.7987 29.9951ZM36.7987 24.6866C35.7752 24.6866 34.9425 25.5186 34.9425 26.5421C34.9425 27.5656 35.7752 28.3984 36.7987 28.3984C37.8223 28.3984 38.6542 27.5656 38.6542 26.5421C38.6542 25.5186 37.8215 24.6866 36.7987 24.6866Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M30.1629 31.9862C29.9154 31.9862 29.6719 31.872 29.5154 31.6564C29.2567 31.2995 29.3357 30.8005 29.6934 30.5419L34.083 27.3595C34.4383 27.1 34.9389 27.1798 35.1976 27.5375C35.4562 27.8944 35.3772 28.3934 35.0195 28.6521L30.63 31.8345C30.4887 31.9367 30.3242 31.9862 30.1621 31.9862H30.1629Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M22.0167 29.328C20.1126 29.328 18.5645 27.7791 18.5645 25.8749C18.5645 23.9708 20.1126 22.4219 22.0167 22.4219C23.9209 22.4219 25.4698 23.9708 25.4698 25.8749C25.4698 27.7791 23.9209 29.328 22.0167 29.328ZM22.0167 24.0195C20.994 24.0195 20.1612 24.8522 20.1612 25.8757C20.1612 26.8993 20.994 27.732 22.0167 27.732C23.0395 27.732 23.873 26.8993 23.873 25.8757C23.873 24.8522 23.0403 24.0195 22.0167 24.0195Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M29.5422 38.0893C29.4 38.0893 29.2572 38.0518 29.127 37.9728L21.6086 33.382C21.373 33.2383 21.2285 32.9828 21.2261 32.7074L21.1934 28.7481C21.1894 28.3074 21.5439 27.9466 21.9854 27.9434H21.9918C22.4301 27.9434 22.7862 28.2962 22.7902 28.7354L22.8189 32.2507L29.9589 36.6099C30.335 36.8398 30.4539 37.3309 30.224 37.7077C30.0739 37.9544 29.8104 38.0901 29.5414 38.0901L29.5422 38.0893Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M32.9078 60.4997C32.4663 60.4997 32.1094 60.142 32.1094 59.7013V56.5835C32.1094 56.1428 32.4663 55.7852 32.9078 55.7852C33.3493 55.7852 33.7062 56.1428 33.7062 56.5835V59.7013C33.7062 60.142 33.3493 60.4997 32.9078 60.4997Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M27.2144 60.4997C26.7729 60.4997 26.416 60.142 26.416 59.7013V56.5835C26.416 56.1428 26.7729 55.7852 27.2144 55.7852C27.6559 55.7852 28.0128 56.1428 28.0128 56.5835V59.7013C28.0128 60.142 27.6559 60.4997 27.2144 60.4997Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M36.0209 57.315H24.1033C22.9137 57.315 21.9453 56.3466 21.9453 55.1562V49.6265C21.9453 49.1858 22.3022 48.8281 22.7437 48.8281C23.1852 48.8281 23.5421 49.1858 23.5421 49.6265V55.1562C23.5421 55.466 23.7936 55.7182 24.1033 55.7182H36.0209C36.3307 55.7182 36.5822 55.4668 36.5822 55.1562V49.6265C36.5822 49.1858 36.9391 48.8281 37.3806 48.8281C37.8221 48.8281 38.179 49.1858 38.179 49.6265V55.1562C38.179 56.3466 37.2105 57.315 36.0209 57.315Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M40.6316 55.2394H37.4468C37.0053 55.2394 36.6484 54.8817 36.6484 54.441C36.6484 54.0003 37.0053 53.6426 37.4468 53.6426H40.6316C41.0731 53.6426 41.43 54.0003 41.43 54.441C41.43 54.8817 41.0731 55.2394 40.6316 55.2394Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M40.6316 51.712H37.4468C37.0053 51.712 36.6484 51.3543 36.6484 50.9136C36.6484 50.4729 37.0053 50.1152 37.4468 50.1152H40.6316C41.0731 50.1152 41.43 50.4729 41.43 50.9136C41.43 51.3543 41.0731 51.712 40.6316 51.712Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M22.6687 55.2394H19.4839C19.0424 55.2394 18.6855 54.8817 18.6855 54.441C18.6855 54.0003 19.0424 53.6426 19.4839 53.6426H22.6687C23.1102 53.6426 23.4671 54.0003 23.4671 54.441C23.4671 54.8817 23.1102 55.2394 22.6687 55.2394Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M22.6687 51.712H19.4839C19.0424 51.712 18.6855 51.3543 18.6855 50.9136C18.6855 50.4729 19.0424 50.1152 19.4839 50.1152H22.6687C23.1102 50.1152 23.4671 50.4729 23.4671 50.9136C23.4671 51.3543 23.1102 51.712 22.6687 51.712Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M33.7388 53.539H26.3824C25.9409 53.539 25.584 53.1813 25.584 52.7406V50.1753C25.584 49.7346 25.9409 49.377 26.3824 49.377C26.8239 49.377 27.1808 49.7346 27.1808 50.1753V51.9422H32.9404V50.1753C32.9404 49.7346 33.2973 49.377 33.7388 49.377C34.1803 49.377 34.5372 49.7346 34.5372 50.1753V52.7406C34.5372 53.1813 34.1803 53.539 33.7388 53.539Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M37.0281 44.6166C37.0033 44.6166 36.9778 44.6158 36.9514 44.6134C36.5123 44.5718 36.1905 44.1814 36.2329 43.7431L36.3279 42.7427C36.6959 39.9675 37.9949 37.4119 40.0867 35.3217C42.8228 32.5896 44.3293 28.9633 44.3293 25.1118C44.3293 21.0169 42.5713 17.0936 39.5047 14.3495C36.3622 11.5376 32.296 10.2498 28.0485 10.7192C21.4498 11.4521 16.0711 16.7287 15.2583 23.2651C14.6859 27.8735 16.2731 32.3485 19.6128 35.542C21.7461 37.5819 23.0259 40.3962 23.2191 43.4653L23.2414 43.7559C23.2758 44.1958 22.9468 44.5798 22.5069 44.6134C22.0566 44.6501 21.6838 44.318 21.6494 43.8788L21.6263 43.5762C21.4586 40.8976 20.3512 38.4578 18.5094 36.6957C14.8008 33.1492 13.0388 28.1824 13.6743 23.0671C14.5773 15.8058 20.5476 9.94478 27.8721 9.13121C32.5004 8.61386 37.1335 10.0829 40.5689 13.1575C43.9733 16.2042 45.9253 20.561 45.9253 25.1102C45.9253 29.388 44.2519 33.4151 41.2148 36.4498C39.3721 38.2893 38.2312 40.5272 37.9127 42.9216L37.8208 43.8924C37.7817 44.306 37.4344 44.615 37.0272 44.615L37.0281 44.6166Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M29.7164 5.74703C29.2748 5.74703 28.918 5.38935 28.918 4.94864V1.29839C28.918 0.85768 29.2748 0.5 29.7164 0.5C30.1579 0.5 30.5148 0.85768 30.5148 1.29839V4.94864C30.5148 5.38935 30.1579 5.74703 29.7164 5.74703Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M54.2335 29.628H51.0894C50.6479 29.628 50.291 29.2704 50.291 28.8296C50.291 28.3889 50.6479 28.0312 51.0894 28.0312H54.2335C54.675 28.0312 55.0319 28.3889 55.0319 28.8296C55.0319 29.2704 54.675 29.628 54.2335 29.628Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M47.8156 13.9689C47.6024 13.9689 47.3909 13.8842 47.2336 13.7166C46.9318 13.3948 46.9485 12.8894 47.2695 12.5876L49.8116 10.2036C50.1341 9.90345 50.6387 9.91862 50.9405 10.2396C51.2423 10.5613 51.2255 11.0667 50.9046 11.3685L48.3625 13.7525C48.2084 13.897 48.012 13.9689 47.8156 13.9689Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M11.3469 14.1063C11.1441 14.1063 10.9421 14.0296 10.7864 13.8763L8.64995 11.7718C8.33538 11.462 8.33298 10.9566 8.64196 10.6428C8.95094 10.3283 9.45633 10.3243 9.7709 10.6341L11.9074 12.7386C12.2219 13.0484 12.2243 13.5538 11.9154 13.8675C11.7597 14.0264 11.5537 14.1055 11.3469 14.1055V14.1063Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M8.44327 29.6593H5.29839C4.85688 29.6593 4.5 29.3016 4.5 28.8609C4.5 28.4202 4.85688 28.0625 5.29839 28.0625H8.44327C8.88478 28.0625 9.24166 28.4202 9.24166 28.8609C9.24166 29.3016 8.88478 29.6593 8.44327 29.6593Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M36.8862 47.6046H22.5152C22.0737 47.6046 21.7168 47.2469 21.7168 46.8062C21.7168 46.3655 22.0737 46.0078 22.5152 46.0078H36.8862C37.3278 46.0078 37.6846 46.3655 37.6846 46.8062C37.6846 47.2469 37.3278 47.6046 36.8862 47.6046Z"
                      fill="#00BB77"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1698_2223">
                      <rect
                        width="60"
                        height="60"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-unlock-light font-aeonik text-xl md:text-2xl font-light leading-[110%] text-center">
                  Make smarter, more informed investment decisions
                </p>
              </div>

              {/* Feature 2 - Portfolio */}
              <div className="flex flex-col items-center gap-8 p-5 max-w-[300px] lg:max-w-[280px]">
                <svg
                  className="w-15 h-15"
                  width="60"
                  height="61"
                  viewBox="0 0 60 61"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1698_2226)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.2277 0.5C25.2202 0.5 22.7067 2.99192 22.7067 6.08536V8.19061C22.7067 8.83508 22.1912 9.35067 21.5467 9.35067H20.7089C19.1622 9.35067 17.9593 10.4463 17.7015 11.9071H5.26317C2.38455 11.9071 0 14.2916 0 17.1702V51.4558C0 54.3345 2.38455 56.7835 5.26317 56.7835H54.7368C57.6154 56.7835 60 54.3345 60 51.4558V17.1702C59.9356 14.2916 57.5509 11.9071 54.6723 11.9071H42.2341C41.9764 10.4248 40.7089 9.35067 39.2911 9.35067H38.3244C37.6799 9.35067 37.1644 8.83508 37.1644 8.19061V6.08536C37.1644 3.0134 34.6724 0.5 31.6434 0.5H28.1848H28.2277ZM54.5649 13.8405C56.4339 13.8405 57.9592 15.3872 57.9592 17.1702V51.4558H58.0235C58.0235 53.3248 56.4983 54.85 54.6938 54.85H5.2203C3.41579 54.85 1.89045 53.3248 1.89045 51.4558V17.1702C1.89045 15.3657 3.35134 13.8405 5.2203 13.8405H17.6585V16.9769H5.92912C5.41354 16.9769 4.96252 17.3635 4.96252 17.9436V50.7684C4.96252 51.3484 5.41354 51.7351 5.92912 51.7351H37.9162C38.4962 51.7351 38.8829 51.3484 38.8829 50.7684C38.8829 50.1884 38.4962 49.8017 37.9162 49.8017H6.89584V18.9103H17.6585C17.9163 20.3281 19.2052 21.4667 20.6015 21.4667H39.1837C40.7304 21.4667 41.9334 20.3066 42.1911 18.9103H52.8894V49.8017H42.5134C41.9334 49.8017 41.4823 50.1884 41.4823 50.7684C41.4823 51.3484 41.9334 51.7351 42.5134 51.7351H53.856C54.436 51.7351 54.8227 51.3484 54.8227 50.7684V17.9436C54.8227 17.3635 54.436 16.9769 53.856 16.9769H42.1911V13.8405H54.5649ZM31.6863 2.43339C33.6627 2.43339 35.2739 4.04455 35.2739 6.08536V8.19061C35.2739 9.90919 36.6272 11.2626 38.2814 11.2626H39.1837C39.8282 11.2626 40.3437 11.7137 40.3437 12.3582V18.3088C40.3437 18.9532 39.8282 19.4043 39.1837 19.4043H20.7304C20.0859 19.4043 19.5704 18.9532 19.5704 18.3088V12.3582C19.5704 11.7137 20.0859 11.2626 20.7304 11.2626H21.5682C23.2868 11.2626 24.6402 9.84474 24.6402 8.19061V6.08536C24.6402 4.04455 26.2513 2.43339 28.2277 2.43339H31.6863Z"
                      fill="#00BB77"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M30.0113 10.7051C28.0994 10.7051 26.5527 12.2518 26.5527 14.1637C26.5527 16.0756 28.0994 17.6223 30.0113 17.6223C31.9233 17.6223 33.4056 16.0756 33.4056 14.1637C33.4056 12.2518 31.9447 10.7051 30.0113 10.7051ZM30.0113 12.5526C30.8492 12.5526 31.6225 13.2615 31.6225 14.1637C31.6225 15.066 30.8492 15.7749 30.0113 15.7749C29.1091 15.7749 28.4217 15.066 28.4217 14.1637C28.4217 13.2615 29.1306 12.5526 30.0113 12.5526Z"
                      fill="#00BB77"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M43.8664 25.8926C43.8664 25.8926 43.7375 25.8926 43.7375 26.0215L41.1811 27.3104C40.73 27.5038 40.5366 28.0838 40.7944 28.5993C40.9663 28.9216 41.3099 29.0934 41.6321 29.0934C41.7825 29.0934 41.9329 29.0505 42.0618 28.9646L42.7063 28.6423C41.4818 32.8099 39.3766 35.8174 36.3046 37.7508C33.2971 39.6842 29.9673 40.1353 27.5613 40.1353C26.3798 40.1353 25.4132 40.0279 24.8332 39.942C24.4465 37.7078 22.513 36.0322 20.2144 36.0322C17.5936 36.0322 15.4668 38.2019 15.4668 40.7798C15.4668 43.3577 17.6365 45.4629 20.2144 45.4629C22.4486 45.4629 24.3175 43.9806 24.7686 41.8754C25.4776 42.0043 26.4443 42.0687 27.6473 42.0687C30.2682 42.0687 33.9845 41.5531 37.3357 39.4479C40.7299 37.2782 43.0285 33.9914 44.5108 29.5661L44.6397 29.8238C44.8331 30.1461 45.1552 30.3394 45.5419 30.3394C45.7353 30.3394 45.8641 30.3394 45.9286 30.275C46.0575 29.9527 46.1864 29.3083 45.9286 28.9216L44.6397 26.3652C44.6397 26.3652 44.6396 26.2363 44.5752 26.2363C44.5108 26.1719 44.5108 26.1074 44.3819 26.1074L44.3174 26.043C44.3174 26.043 44.253 26.0429 44.253 25.914H43.8664V25.8926ZM19.8921 37.8797C21.4389 37.8797 22.7063 39.1686 22.7063 40.6938C22.7063 42.2191 21.4174 43.4436 19.8921 43.4436C18.3669 43.4436 17.078 42.1546 17.078 40.6938C17.078 39.0827 18.3669 37.8797 19.8921 37.8797Z"
                      fill="#00BB77"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.2235 24.5156C11.9872 24.5156 11.7509 24.623 11.5576 24.7949C11.1709 25.1816 11.1709 25.7616 11.5576 26.1483L12.7821 27.3728L11.5576 28.5972C11.1709 28.9839 11.1709 29.5639 11.5576 29.9506C11.7509 30.144 11.9444 30.2084 12.2022 30.2084C12.4599 30.2084 12.6533 30.144 12.8466 29.9506L14.0711 28.7262L15.2311 29.9506C15.4244 30.144 15.6822 30.2084 15.8755 30.2084C16.1333 30.2084 16.3911 30.144 16.52 29.9506C16.9711 29.5639 16.9711 28.9839 16.52 28.5972L15.4889 27.3728L16.7134 26.1483C17.1001 25.7616 17.1001 25.1816 16.7134 24.7949C16.52 24.6016 16.2837 24.5156 16.0474 24.5156C15.8111 24.5156 15.5748 24.623 15.3815 24.7949L14.157 26.0194L12.9325 24.7949C12.7391 24.6016 12.5028 24.5156 12.2665 24.5156H12.2235Z"
                      fill="#00BB77"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M45.1141 39.6406C44.8563 39.6406 44.5986 39.748 44.3838 39.9199C43.9971 40.371 43.9971 40.8866 44.3838 41.3377L45.6083 42.4978L44.3838 43.7223C43.9971 44.109 43.9971 44.689 44.3838 45.0757C44.5771 45.269 44.8349 45.3334 45.0282 45.3334C45.286 45.3334 45.5437 45.269 45.6726 45.0757L46.8971 43.9156L48.1216 45.0757C48.2505 45.269 48.5083 45.3334 48.7661 45.3334C49.0239 45.3334 49.2172 45.269 49.4105 45.0757C49.7972 44.689 49.7972 44.109 49.4105 43.7223L48.3794 42.4978L49.6039 41.3377C49.9906 40.8866 49.9906 40.371 49.6039 39.9199C49.3676 39.7266 49.1313 39.6406 48.895 39.6406C48.6587 39.6406 48.4225 39.748 48.1862 39.9199L47.026 41.1444L45.8015 39.9199C45.6082 39.7266 45.3719 39.6406 45.1141 39.6406Z"
                      fill="#00BB77"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.6591 27.0742C28.4013 27.0742 28.165 27.1816 27.9717 27.375C27.585 27.7616 27.585 28.3417 27.9717 28.7284L29.1962 29.9528L27.9717 31.1773C27.585 31.564 27.585 32.144 27.9717 32.5307C28.165 32.724 28.3583 32.7885 28.6161 32.7885C28.8739 32.7885 29.1318 32.724 29.2607 32.5307L30.485 31.3062L31.7095 32.5307C31.8384 32.724 32.0963 32.7885 32.3541 32.7885C32.5475 32.7885 32.8052 32.724 32.9986 32.5307C33.3852 32.144 33.3852 31.564 32.9986 31.1773L31.9673 29.9528L33.1274 28.7284C33.5786 28.3417 33.5786 27.7616 33.1274 27.375C32.9341 27.1816 32.6978 27.0742 32.4615 27.0742C32.2252 27.0742 31.9889 27.1816 31.7956 27.375L30.571 28.5994L29.4109 27.375C29.1961 27.1816 28.9384 27.0742 28.6806 27.0742H28.6591Z"
                      fill="#00BB77"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1698_2226">
                      <rect
                        width="60"
                        height="60"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-unlock-light font-aeonik text-xl md:text-2xl font-light leading-[110%] text-center">
                  Invest with confidence and gain a competitive edge
                </p>
              </div>

              {/* Feature 3 - Vision */}
              <div className="flex flex-col items-center gap-8 p-5 max-w-[300px] lg:max-w-[280px]">
                <svg
                  className="w-15 h-15"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1698_2229)">
                    <path
                      d="M58.838 16.2142C52.354 7.06653 41.9275 1.51067 30.8099 1.22149V0.932342C30.8099 0.416195 30.3975 0 29.8859 0C29.3743 0 28.9618 0.416161 28.9618 0.932342V1.22149C17.8552 1.51065 7.42327 7.06667 0.922749 16.2142C0.692417 16.5385 0.692417 16.9763 0.922749 17.3006C6.98096 25.8208 16.4538 31.2286 26.704 32.1605V38.3218H26.5567C26.0452 38.3218 25.6327 38.738 25.6327 39.2542V55.7087C25.6327 58.0733 27.5423 60 29.8858 60C32.2212 60 34.1255 58.0732 34.1255 55.7087L34.1282 39.2569C34.1282 38.7408 33.7157 38.3246 33.2041 38.3246H33.0568V32.1633C43.3201 31.2309 52.7929 25.8235 58.8381 17.3033C59.0685 16.9764 59.0684 16.5385 58.838 16.2142ZM30.8099 3.10527C37.5538 3.56467 42.956 9.02074 43.4112 15.8199H41.7239C41.2767 9.95308 36.6245 5.25885 30.81 4.8078L30.8099 3.10527ZM29.8885 7.84253C30.4001 7.84253 30.8126 7.42637 30.8126 6.91019V6.68319C35.604 7.12908 39.431 10.9881 39.8733 15.8254H39.6483C39.1367 15.8254 38.7243 16.2415 38.7243 16.7577C38.7243 17.2738 39.1367 17.69 39.6483 17.69H39.8733C39.4314 22.5327 35.6068 26.4026 30.8126 26.8454L30.8099 26.613C30.8099 26.0968 30.3975 25.6806 29.8859 25.6806C29.3743 25.6806 28.9618 26.0968 28.9618 26.613V26.84C24.1624 26.3941 20.3269 22.5351 19.8881 17.6846H20.1131C20.6246 17.6846 21.0371 17.2685 21.0371 16.7523C21.0371 16.2361 20.6247 15.82 20.1131 15.82H19.8881C20.33 10.9854 24.1627 7.124 28.9618 6.67779V6.90478C28.9645 7.42634 29.377 7.84253 29.8885 7.84253ZM29.8885 33.5098C30.4001 33.5098 30.8126 33.0936 30.8126 32.5774V32.2883C30.9465 32.2883 31.0777 32.2802 31.2036 32.2748V38.3253H28.5521V32.2748C28.686 32.2829 28.8253 32.2829 28.9592 32.2883V32.5774C28.9646 33.0936 29.377 33.5098 29.8885 33.5098ZM28.9645 4.81589C23.1446 5.26718 18.4846 9.96117 18.0368 15.828H16.3576C16.8129 9.0235 22.2203 3.57272 28.9589 3.11337L28.9562 4.81582L28.9645 4.81589ZM2.81915 16.7578C7.26777 10.7585 13.524 6.46446 20.5278 4.4188C17.0862 7.08604 14.7829 11.1828 14.5097 15.8252H14.2098C13.6982 15.8252 13.2857 16.2414 13.2857 16.7576C13.2857 17.2737 13.6982 17.6899 14.2098 17.6899H14.5097C14.7829 22.3271 17.0835 26.4295 20.5278 29.0964C13.5295 27.0507 7.26756 22.7516 2.81915 16.7578ZM16.3577 17.6901H18.037C18.4843 23.5624 23.1444 28.2643 28.9647 28.7161V30.4023H28.887C28.8656 30.4023 28.8522 30.4023 28.8307 30.3942C28.4879 30.3672 28.1317 30.324 27.7675 30.2753C21.5887 29.289 16.789 24.0863 16.3577 17.6901ZM32.2803 55.7123C32.2803 57.0526 31.2089 58.1417 29.8885 58.1417C28.5601 58.1417 27.4808 57.0553 27.4808 55.7123V40.1875H32.2749L32.2722 55.7123H32.2803ZM32.0071 30.2699H31.9937C31.6241 30.3266 31.2732 30.3699 30.9304 30.3969C30.917 30.3969 30.8956 30.3969 30.8822 30.405H30.8126V28.7187C36.6271 28.2674 41.2795 23.5653 41.7265 17.6928H43.4138C42.9853 24.0865 38.186 29.2889 32.0071 30.2699ZM39.2488 29.0997C42.6903 26.4325 44.9936 22.3358 45.2668 17.6933H45.5668C46.0783 17.6933 46.4908 17.2772 46.4908 16.761C46.4908 16.2448 46.0783 15.8286 45.5668 15.8286H45.2668C44.9936 11.1833 42.693 7.08909 39.2488 4.42219C46.2443 6.47055 52.5007 10.7619 56.9416 16.7612C52.4983 22.7604 46.2443 27.0513 39.2488 29.0997Z"
                      fill="#00BB77"
                    />
                    <path
                      d="M25.0977 16.5138C25.0977 18.9155 27.0517 20.8695 29.4534 20.8695C31.8472 20.8695 33.7933 18.9155 33.7933 16.5138C33.7933 14.12 31.8472 12.1739 29.4534 12.1739C27.0517 12.166 25.0977 14.12 25.0977 16.5138ZM29.4534 13.9909C30.8438 13.9909 31.9789 15.1259 31.9789 16.5164C31.9789 17.9121 30.8438 19.055 29.4534 19.055C28.0576 19.055 26.9147 17.9121 26.9147 16.5164C26.9147 15.1181 28.0498 13.9909 29.4534 13.9909Z"
                      fill="#00BB77"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1698_2229">
                      <rect width="60" height="60" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-unlock-light font-aeonik text-xl md:text-2xl font-light leading-[130%] text-center">
                  Unlock the power of comprehensive investment insights
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <UnlockButton
              variant="outline"
              size="default"
              className="rounded border border-unlock-light text-unlock-light font-medium uppercase tracking-wide hover:bg-unlock-light hover:text-unlock-dark"
            >
              Join Our Waiting List
            </UnlockButton>
          </div>
        </div>
      </section>

      {/* Underwater Background Section */}
      <section>
        <div className="max-w-7xl mx-auto">
          <div
            className="relative h-[500px] md:h-[600px] lg:h-[700px] rounded-lg overflow-hidden flex flex-col justify-between items-start"
            style={{
              backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2Fdaf7b67ad79a4dd4805e13de6138450b?format=webp&width=2460')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              padding: "96px 70px 96px 96px",
            }}
          >
            {/* Text Content Layout */}
            <div className="relative flex-1 self-stretch w-full">
              {/* Top Left - Main Title */}
              <h2 className="text-unlock-light font-aeonik text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[110%] max-w-3xl">
                AI-Enhanced Due Diligence
              </h2>

              {/* Bottom Left - Description */}
              <div className="absolute bottom-0 left-0">
                <p className="text-unlock-light font-aeonik text-sm md:text-base font-light leading-[130%] max-w-md lg:max-w-[389px]">
                  Unlock streamlines the due diligence process with AI-powered
                  risk detection and anomaly analysis, delivering more
                  innovative, faster insights while incorporating expert
                  validation where needed.
                </p>
              </div>

              {/* Bottom Right - Value Proposition */}
              <div className="absolute bottom-0 right-0">
                <p
                  className="text-unlock-light font-serif text-lg md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-[110%] max-w-sm text-left"
                  style={{ marginLeft: "-5px" }}
                >
                  Get detailed reports faster, without the complexity or high
                  costs of traditional due diligence services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Investment Decisions Section */}
      <section className="py-16 lg:py-24 px-4 md:px-8 lg:px-24 bg-unlock-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-12">
            {/* Section Title */}
            <h2 className="text-unlock-dark font-aeonik text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[110%] tracking-tight text-center w-full">
              Data-Driven Investment Decisions
            </h2>

            {/* Content Layout */}
            <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-16 w-full">
              {/* Left Column - Description & CTA */}
              <div className="flex flex-col justify-between items-start w-full lg:w-[356px] h-auto lg:h-[265px] gap-8 lg:gap-0">
                <p className="text-unlock-dark font-aeonik text-sm md:text-base font-light leading-[130%] w-full">
                  Our reports are data-driven, objective, and built for
                  investors who want clarity—not sales pitches. Unlock does not
                  provide investment advice or endorsements, ensuring you
                  receive unbiased insights.
                </p>
                <UnlockButton
                  variant="outline"
                  size="default"
                  className="rounded border border-unlock-dark text-unlock-dark font-medium uppercase tracking-wide hover:bg-unlock-dark hover:text-unlock-light"
                >
                  Join Our Waiting List
                </UnlockButton>
              </div>

              {/* Right Column - Report Types */}
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-5 flex-1">
                {/* Report Type 1 - Snapshot Reports */}
                <div className="flex flex-col items-start gap-9 w-full md:w-[400px]">
                  {/* Number with Dot */}
                  <div className="flex items-end">
                    <span className="text-unlock-green font-aeonik text-8xl md:text-9xl lg:text-[150px] font-extralight leading-[90%] tracking-[-0.02em]">
                      1
                    </span>
                    <span className="text-unlock-green font-bold text-6xl md:text-7xl lg:text-8xl leading-[90%] tracking-[-0.02em] mb-2">
                      .
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h3 className="text-unlock-green font-aeonik text-xl md:text-2xl lg:text-3xl font-light leading-[110%] tracking-tight w-full">
                      Snapshot Reports
                    </h3>
                    <p className="text-unlock-dark font-aeonik text-sm md:text-base font-light leading-[130%] max-w-[293px]">
                      Get a quick at-a-glance view of a business with our
                      snapshot reports
                    </p>
                  </div>
                </div>

                {/* Report Type 2 - Deep Dive Reports */}
                <div className="flex flex-col items-start gap-9 w-full md:w-[400px]">
                  {/* Number with Dot */}
                  <div className="flex items-end">
                    <span className="text-unlock-green font-aeonik text-8xl md:text-9xl lg:text-[150px] font-extralight leading-[90%] tracking-[-0.02em]">
                      2
                    </span>
                    <span className="text-unlock-green font-bold text-6xl md:text-7xl lg:text-8xl leading-[90%] tracking-[-0.02em] mb-2">
                      .
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-start gap-6 w-full">
                    <h3 className="text-unlock-green font-aeonik text-xl md:text-2xl lg:text-3xl font-light leading-[110%] tracking-tight w-full">
                      Deep Dive Reports
                    </h3>
                    <p className="text-unlock-dark font-aeonik text-sm md:text-base font-light leading-[130%] max-w-[287px]">
                      Gain detailed analysis on a business with our deep dive
                      reports
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full h-px bg-black"></div>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 px-4 md:px-8 lg:px-24 bg-unlock-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-7">
            {/* Section Title */}
            <div className="flex justify-center items-center gap-2.5 w-full">
              <h2 className="flex-1 text-unlock-dark font-aeonik text-xl md:text-2xl lg:text-3xl font-light leading-[110%]">
                Testimonials
              </h2>
            </div>

            {/* Testimonials Horizontal Scroll */}
            <div
              className="flex gap-6 w-full overflow-x-auto pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {/* Testimonial 1 - Elena Morozova */}
              <div className="flex flex-col justify-between items-start w-[323px] h-[275px] p-6 md:p-10 rounded-[10px] border border-unlock-gray-medium bg-unlock-gray-light flex-shrink-0">
                <p className="text-unlock-dark font-aeonik text-sm md:text-base font-light leading-[130%] w-full">
                  Unlock transformed the way we assess risk. Their data
                  dashboards are sharp, intuitive, and investor-ready. I finally
                  feel like we're making decisions with clarity, not guesswork
                </p>
                <div className="flex flex-col items-start w-full">
                  <p className="text-unlock-dark font-serif text-base font-medium leading-[120%] w-full">
                    Elena Morozova
                  </p>
                  <p className="text-unlock-dark font-aeonik text-xs font-light leading-[150%] w-full">
                    Managing Partner at Novus Capital
                  </p>
                </div>
              </div>

              {/* Testimonial 2 - John Doe */}
              <div className="flex flex-col justify-between items-start w-[323px] h-[275px] p-6 md:p-10 rounded-[10px] border border-unlock-gray-medium bg-unlock-gray-light flex-shrink-0">
                <p className="text-unlock-dark font-aeonik text-sm md:text-base font-light leading-[130%] w-full">
                  Unlock's due diligence services have been invaluable in
                  helping me make informed investment decisions. Their
                  meticulous research and analysis have given me the confidence
                  to invest with clarity and certainty.
                </p>
                <div className="flex flex-col items-start w-full">
                  <p className="text-unlock-dark font-serif text-base font-medium leading-[120%] w-full">
                    John Doe
                  </p>
                  <p className="text-unlock-dark font-aeonik text-xs font-light leading-[150%] w-full">
                    Investor, ABC Company
                  </p>
                </div>
              </div>

              {/* Testimonial 3 - James Carter */}
              <div className="flex flex-col justify-between items-start w-[323px] h-[275px] p-6 md:p-10 rounded-[10px] border border-unlock-gray-medium bg-unlock-gray-light flex-shrink-0">
                <p className="text-unlock-dark font-aeonik text-sm md:text-base font-light leading-[130%] w-full">
                  Their team doesn't just deliver insights — they uncover
                  opportunities. Thanks to Unlock, we spotted a trend early that
                  became one of our strongest portfolio wins last year.
                </p>
                <div className="flex flex-col items-start w-full">
                  <p className="text-unlock-dark font-serif text-base font-medium leading-[120%] w-full">
                    James Carter
                  </p>
                  <p className="text-unlock-dark font-aeonik text-xs font-light leading-[150%] w-full">
                    Angel Investor, Fintech Sector
                  </p>
                </div>
              </div>

              {/* Testimonial 4 - Tariq El-Amin */}
              <div className="flex flex-col justify-between items-start w-[323px] h-[275px] p-6 md:p-10 rounded-[10px] border border-unlock-gray-medium bg-unlock-gray-light flex-shrink-0">
                <p className="text-unlock-dark font-aeonik text-sm md:text-base font-light leading-[130%] w-full">
                  Before Unlock, our analytics felt like a black box. Now, every
                  metric has a narrative, and every report drives action. It's
                  like having an in-house intelligence unit.
                </p>
                <div className="flex flex-col items-start w-full">
                  <p className="text-unlock-dark font-serif text-base font-medium leading-[120%] w-full">
                    Tariq El-Amin
                  </p>
                  <p className="text-unlock-dark font-aeonik text-xs font-light leading-[150%] w-full">
                    Venture Partner at Apex Growth
                  </p>
                </div>
              </div>

              {/* Testimonial 5 - Laura Gutiérrez */}
              <div className="flex flex-col justify-between items-start w-[323px] h-[275px] p-6 md:p-10 rounded-[10px] border border-unlock-gray-medium bg-unlock-gray-light flex-shrink-0">
                <p className="text-unlock-dark font-aeonik text-sm md:text-base font-light leading-[130%] w-full">
                  Unlock brings precision to a chaotic market. Their
                  investor-focused dashboards helped us streamline our pitch
                  decks and wow LPs with confidence.
                </p>
                <div className="flex flex-col items-start w-full">
                  <p className="text-unlock-dark font-serif text-base font-medium leading-[120%] w-full">
                    Laura Gutiérrez
                  </p>
                  <p className="text-unlock-dark font-aeonik text-xs font-light leading-[150%] w-full">
                    Co-Founder at Capital Bloom
                  </p>
                </div>
              </div>

              {/* Testimonial 6 - David Kwan (Dark Card) */}
              <div className="flex flex-col justify-between items-start w-[323px] h-[275px] p-6 md:p-10 rounded-[10px] border border-unlock-gray-medium bg-unlock-dark flex-shrink-0">
                <p className="text-unlock-light font-aeonik text-sm md:text-base font-light leading-[140%] w-full">
                  We used to rely on generic market reports. Unlock built us a
                  custom analytics engine tailored to our vertical. It's now our
                  competitive edge.
                </p>
                <div className="flex flex-col items-start w-full">
                  <p className="text-unlock-light font-aeonik text-base font-normal leading-[150%] w-full">
                    David Kwan
                  </p>
                  <p className="text-unlock-light font-aeonik text-xs font-extralight leading-[150%] w-full">
                    Principal at Skyline Ventures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 lg:py-32 px-4 md:px-8 lg:px-24 bg-unlock-dark relative">
        <div className="max-w-7xl mx-auto">
          {/* Decorative SVG Lines */}
          <div className="absolute inset-0 flex items-end justify-center overflow-hidden">
            <svg
              className="w-full max-w-6xl h-auto opacity-50"
              width="1241"
              height="394"
              viewBox="0 0 1241 394"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1047.3 387.582H1.61719V0.898438H1239.39V387.582"
                stroke="#F5F7F0"
                strokeWidth="0.83"
                strokeMiterlimit="10"
              />
              <path
                d="M586.068 387.582H1049.18"
                stroke="#00BB77"
                strokeWidth="6"
                strokeMiterlimit="10"
              />
            </svg>
          </div>

          {/* Content */}
          <div className="relative flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-16">
            {/* Left Side - Lock Icon & Main Text */}
            <div className="flex items-center gap-8 lg:gap-12 flex-1">
              {/* Lock Icon */}
              <svg
                className="w-16 h-20 lg:w-20 lg:h-32 flex-shrink-0"
                width="81"
                height="130"
                viewBox="0 0 81 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.0821 64.9911V31.9944C70.0821 11.9569 56.9434 0 34.9478 0C12.9522 0 0 11.9569 0 31.9944V65H10.9179V98.0056C10.9179 118.043 23.9855 130 45.8656 130C67.7458 130 81 118.043 81 98.0056V64.9911H70.0821ZM45.8834 109.661C37.0532 109.661 32.7624 105.678 32.7624 97.4823V65H21.8446V32.5355C21.8446 24.1 26.011 20.1706 34.9656 20.1706C43.9202 20.1706 48.2553 24.1 48.2553 32.5355V64.9911H59.1643V67.0756H59.1732V97.4823C59.1732 105.678 54.8202 109.661 45.8834 109.661Z"
                  fill="#00BB77"
                />
              </svg>

              {/* Main Heading */}
              <h2 className="text-unlock-green font-aeonik text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light leading-[110%] tracking-tight max-w-2xl">
                Start to making more informed investment decisions
              </h2>
            </div>

            {/* Right Side - Description & CTA */}
            <div className="flex flex-col items-start gap-4 w-full lg:w-auto lg:max-w-[226px] flex-shrink-0">
              <p className="text-unlock-light font-aeonik text-sm md:text-base font-light leading-[130%] w-full">
                Join our waiting list to begin making more informed investment
                decisions.
              </p>

              <div className="flex items-center gap-4">
                <UnlockButton
                  size="default"
                  className="rounded bg-white text-unlock-dark font-medium uppercase tracking-wide hover:bg-white/90"
                >
                  Join Our Waiting List
                </UnlockButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
