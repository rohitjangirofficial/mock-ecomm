export interface ProductType {
  title: string;
  slug: string;
  category: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  description: string;
  additionalInfo: string[];
  images: string[];
}

const products: ProductType[] = [
  {
    title: "Apple iPhone 15 (Black, 128 GB)",
    slug: "apple-iphone-15-black-128-gb",
    category: "Apple Mobiles",
    originalPrice: 69900,
    discountedPrice: 57999,
    discountPercent: 17,
    description:
      "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
    additionalInfo: [
      "Display: 2556 x 1179 Pixels",
      "Color: Black",
      "Storage: 128 GB",
    ],
    images: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/y/p/n/-original-imagtc5fxzdrdvyc.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/u/m/3/-original-imagtc5ffhbausfy.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/d/k/t/-original-imah4xe6cff8cejm.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/4/b/j/-original-imah4xe6hwmfyxdn.jpeg?q=70&crop=false",
    ],
  },
  {
    title: "SAMSUNG Galaxy S23 FE (Mint, 128 GB)  (8 GB RAM)",
    slug: "samsung-galaxy-s23-fe-mint-128-gb-8-gb-ram",
    category: "Samsung Mobiles",
    originalPrice: 79999,
    discountedPrice: 32999,
    discountPercent: 58,
    description:
      "Epic moments are now accessible to all. Galaxy S23 FE opens the door for more people to experience the extraordinary. With its long-lasting power and stunning night shots, the phone becomes your gateway to lasting epic memories.",
    additionalInfo: [
      "8 GB RAM | 128 GB ROM",
      "16.26 cm (6.4 inch) Full HD+ Display",
      "50MP + 12MP | 10MP Front Camera",
      "4500 mAh Battery",
    ],
    images: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/8/v/0/-original-imah5ywfebrs9bfg.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/w/z/n/-original-imah5ywfurj7gtqn.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/n/r/t/-original-imah5ywf9uzek5ze.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/h/o/l/-original-imah5ywffhunjtzh.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/s/b/f/-original-imah5ywf86cgtrgd.jpeg?q=70&crop=false",
    ],
  },
  {
    title:
      "LEADER Beast 26T with Front Suspension and Disc Brake and Complete Accessories 26 T Mountain Cycle  (Single Speed, Black, Only Front Suspension)",
    slug: "leader-beast-26t-with-front-suspension-and-disc-brake-and-complete-accessories-26-t-mountain-cycle-single-speed-black-only-front-suspension",
    category: "Cycle",
    originalPrice: 16999,
    discountedPrice: 4799,
    discountPercent: 71,
    description: `LEADER Beast 26T with Front Suspension & Dual Disc Brake Bicycle is brought to you by Leader. The brand is reckoned for its high built quality and great reliability. The bicycle comes with a rigid frame and high grip tires that will provide great traction and ultimate mobility for you to ride it with ease. It is surely a musthave, as it will let you experience the fun and thrill of riding a bicycle.`,
    additionalInfo: [
      "Age Group: 13+ Years",
      "Ideal For: Men, Men & Women, Women",
      "Gear: Single Speed| Gear Type: Non Geared",
      "Front Brake: Disc Brake | Rear Brake: Disc Brake",
    ],
    images: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/cycle/d/q/i/beast-26t-with-front-suspension-and-disc-brake-and-complete-original-imah5hrrardzxzm6.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/cycle/q/m/5/beast-26t-with-front-suspension-and-disc-brake-and-complete-original-imah5hrrjdaybayz.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/cycle/g/3/e/beast-26t-with-front-suspension-and-disc-brake-and-complete-original-imah5hrr5jp4avqz.jpeg?q=70&crop=false",
    ],
  },
  {
    title:
      "Noise Buds VS102 Elite with 50Hr Playtime, ENC, Quad Mic, Chrome finish Flybird Design Bluetooth  (Calm Beige, True Wireless)",
    slug: "noise-buds-vs102-elite-50hr-playtime-enc-quad-mic-chrome-finish-flybird-design-bluetooth",
    category: "Earbuds",
    originalPrice: 3499,
    discountedPrice: 1299,
    discountPercent: 62,
    description: `Presenting Buds VS102 Elite. It comes with a premium chrome finish and is feature-packed with 50 hours of playtime. It upholds every rhythm, keeps you connected to your music, and calls for a long time. With quad mics featuring ENC, experience the flow of smooth conversations and a clear voice even in a chaotic environment. Immerse yourself in a world where you hear every beat in all its glory with the mastery of an 11mm driver. Within just 10 minutes of charging, enjoy the revival for a good 120 minutes. Laden with rich features like BT v5.3, IPX5 water resistance, and type-C charging, get ready to take your music with you.`,
    additionalInfo: [
      "With Mic: Yes",
      "Wireless range: 10 m",
      "Battery life: 50 hrs Playtime",
      "ENC with Quad Mic",
      "Driver Size: 11mm",
      "Instacharge: 10-min = 120-min playtime",
      "Bluetooth version: v5.3",
      "IPX5 water resistance",
      "Type-C charging",
    ],
    images: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/c/w/9/-original-imah32ghkqg8trrm.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/d/s/y/-original-imah32ghqjquxxuy.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/f/x/x/-original-imah32ghhcgqgddp.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/headphone/a/z/o/-original-imah32ghtc2zzusn.jpeg?q=70&crop=false",
    ],
  },
  {
    title:
      'Fastrack Pro with 1.43" Display & AOD(466x466), Functional Crown, BT Calling Smartwatch (Blue Strap, Free Size)',
    slug: "fastrack-pro-1-43-display-aod-466x466-functional-crown-bt-calling-smartwatch-blue-strap-free-size",
    category: "Smartwatch",
    originalPrice: 5995,
    discountedPrice: 2199,
    discountPercent: 63,
    description: `Fastrack Optimus Pro with 1.43" AMOLED Display with AOD and 466 x 466 Bright Pixel Resolution Premium Smartwatch. It features a functional crown, SingleSync BT Calling, and an extensive 24x7 Health Suite with Auto Stress Monitor, Heart Rate Monitor, SpO2, and Sleep Monitor. With 100+ sports modes, a calculator, AI Voice Assistant, in-built games, and 100+ watchfaces, this smartwatch ensures up to 7 days of battery life under standard conditions, and up to 3 days with BT calling. The watch is IP68 rated for water resistance.`,
    additionalInfo: [
      "Display Size: 1.43 inch (36.32 mm)",
      "AMOLED Display with AOD and 466 x 466 Pixel Resolution",
      "Functional Crown with Premium Body Design",
      "SingleSync BT Calling with Favourite Contacts Storage",
      "100+ Sports Modes and 24x7 Health Suite",
      "Auto Stress Monitor, Heart Rate Monitor, SpO2, Sleep Monitor",
      "Calculator, AI Voice Assistant, In-Built Games",
      "100+ Watchfaces",
      "Up to 7 Days Battery Life (Standard Conditions)",
      "Up to 3 Days Battery Life with BT Calling",
      "Water Resistance: IP68",
    ],
    images: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/z/r/d/-original-imagywnzhh3dnqvk.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/h/m/c/-original-imah4rq3my73chgx.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/smartwatch/w/k/g/-original-imah4rq3x9mzcnqj.jpeg?q=70&crop=false",
    ],
  },
  {
    title:
      "NOYMI 3D Rechargeable 100% Waterproof IPX7 Electric Shaver Wet & Dry Rotary Shavers for Men Electric Shaving Razors Trimmer, BLACK Shaver For Men (Black)",
    slug: "noymi-3d-rechargeable-100-waterproof-ipx7-electric-shaver-wet-dry-rotary-shavers-for-men-electric-shaving-razors-trimmer-black-shaver-for-men-black",
    category: "Shaver",
    originalPrice: 2499,
    discountedPrice: 1424,
    discountPercent: 43,
    description: `The NOYMI 3D Rechargeable Electric Shaver offers a cordless, waterproof, and smooth shaving experience. With 3 rotary blades, the shaver provides an easy wet or dry shaving experience. Its trimmer head is waterproof for convenient use anywhere. The device includes adjustable nose and hair clippers, along with a rechargeable battery for extended use. It is designed for a more relaxing and precise grooming experience.`,
    additionalInfo: [
      "Cordless",
      "1 Speed Setting",
      "Rechargeable",
      "Waterproof (IPX7)",
      "3 Rotor Blades for Wet or Dry Shaving",
      "Nose Trimmer with Adjustable Size Hair Clippers",
    ],
    images: [
      "https://rukminim2.flixcart.com/image/832/832/l4yi7bk0/trimmer/q/l/1/0-5-3-mm-rechargeable-shaver-trimmer-for-men-electric-nose-original-imagfqg7c3ryt9pa.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shaver/f/b/y/et-175-shaver-3d-rechargeable-100-waterproof-ipx7-electric-original-imagpm5gkbectznu.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/shaver/j/w/0/et-175-shaver-3d-rechargeable-100-waterproof-ipx7-electric-original-imagpm5gz95vqvws.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/l4yi7bk0/trimmer/3/a/g/0-5-3-mm-rechargeable-shaver-trimmer-for-men-electric-nose-original-imagfqg7ffhpcq8v.jpeg?q=70&crop=false",
    ],
  },
  {
    title:
      "Lenovo Q-Series 60.45 cm (23.8 Inch) Full HD IPS Panel with Tilt Support, Height Adjustable, TUV Eyesafe Vision Health Board Certified, 2X3W Inbuilt Speakers, Slim Monitor (Q24i-20) (Response Time: 4 ms, 75 Hz Refresh Rate)",
    slug: "lenovo-q-series-60-45-cm-23-8-inch-full-hd-ips-panel-with-tilt-support-height-adjustable-tuv-eyesafe-vision-health-board-certified-2x3w-inbuilt-speakers-slim-monitor-monitor-q24i-20-response-time-4-ms-75-hz-refresh-rate",
    category: "Monitor",
    originalPrice: 19890,
    discountedPrice: 10799,
    discountPercent: 45,
    description: `The Lenovo Q24i-20 is a 23.8-inch Full HD IPS display monitor with 75 Hz refresh rate and 4 ms response time. The monitor features a slim, chrome-finished height-adjustable stand with tilt support for comfort. Equipped with TUV Eyesafe vision health certification, it reduces harmful blue light without color distortion. With a 120% sRGB color gamut, the display offers vibrant colors from wide viewing angles. The built-in dual 3W speakers provide an immersive audio experience, while the sleek design is complemented by a 7.1 mm profile. Ideal for work-from-home professionals and students, it also integrates Lenovo Artery Software for easy adjustment of display settings.`,
    additionalInfo: [
      "Panel Type: IPS Panel",
      "Screen Resolution: Full HD (1920x1080)",
      "Brightness: 300 nits",
      "Response Time: 4 ms",
      "Refresh Rate: 75 Hz",
      "120% sRGB Color Gamut",
      "TUV Eyesafe Certified",
      "Dual 3W Inbuilt Speakers",
      "Height Adjustable Stand with Tilt Support",
      "Integrated Phone Holder",
      "Lenovo Artery Software Compatibility",
    ],
    images: [
      "https://rukminim2.flixcart.com/image/832/832/l4x2rgw0/monitor/n/y/y/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxzsk8ef26.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/l4x2rgw0/monitor/n/h/d/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxczbw4jta.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/l4x2rgw0/monitor/e/p/e/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxfb8xufer.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/l4x2rgw0/monitor/y/n/v/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxwr3hsayf.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/l4x2rgw0/monitor/r/m/w/q24i-20-full-hd-23-8-66eegac3in-lenovo-original-imagfpgxgxm9qzru.jpeg?q=70&crop=false",
    ],
  },
  {
    title:
      "Egate i9 (8400 lm / 1 Speaker / Wireless / Remote Controller) Android Smart 720p Native with 1080p & 4K Support | Automatic & 4D Keystone with Netflix, Prime etc | WiFi 6 & BT, Screen Mirroring | 1GB RAM-8GB ROM Projector (White)",
    slug: "egate-i9-8400-lm-1-speaker-wireless-remote-controller-android-smart-720p-native-with-1080p-4k-support-automatic-4d-keystone-with-netflix-prime-etc-wifi-6-bt-screen-mirroring-1gb-ram-8gb-rom-projector-white",
    category: "Projector",
    originalPrice: 9990,
    discountedPrice: 5990,
    discountPercent: 40,
    description: `Step into the world of cinematic brilliance with the Egate i9 Pro projector – a compact powerhouse that redefines your audio-visual experience. With its powerful ANSI lumens, wireless connectivity, built-in HiFi stereo speaker, portability, vertical keystone correction, and bi-directional Bluetooth feature, it stands as a testament to innovation and user-centric design. Whether you're at home, in the office, or on the move, the Egate i9 Pro redefines the way you experience visual and auditory delight, making every moment a cinematic masterpiece.`,
    additionalInfo: [
      "Projector Type: LED Projector",
      "Chipset: LED",
      "Maximum Projection Distance: 10.5 ft",
      "Lamp Life: 30000 hr",
      "Resolution: 1920x1080 pixel",
      "Aspect Ratio: 16:9",
      "Maximum Brightness: 8400 lm",
      "HDMI Ports: 1",
      "Number of VGA In: 1",
      "WiFi 6 & Bluetooth",
      "Screen Mirroring Support",
      "1GB RAM, 8GB ROM",
      "Automatic & 4D Keystone with Netflix, Prime Support",
    ],
    images: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/projector/q/7/6/i9-pro-10-ei9027-led-projector-egate-original-imah5e3bggu5qcgp.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/projector/a/6/m/i9-10-5-ei9027-led-projector-egate-original-imah5p66ycjccffq.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/projector/8/3/n/i9-10-5-ei9027-led-projector-egate-original-imah5p66a6dzyxfn.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/projector/g/o/w/i9-10-5-ei9027-led-projector-egate-original-imah5p66wgqzjd3j.jpeg?q=70&crop=false",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/projector/q/v/t/i9-pro-10-ei9027-led-projector-egate-original-imah5e3bfpvrzdyc.jpeg?q=70&crop=false",
    ],
  },
];

export { products };
