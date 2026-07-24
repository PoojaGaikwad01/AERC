/* AERC Premium Interactive Catalog Logic */

const PRODUCTS_DATA = [
    {
        id: "split-window-ac",
        name: "Inverter Split & Heavy-Duty Window ACs",
        category: "air-conditioning",
        subcategory: "Residential AC",
        image: "assets/images/hero_split_ac.png",
        brands: ["Daikin", "Voltas", "Blue Star", "Cruise", "Samsung", "Mitsubishi Electric", "Panasonic", "LG", "Godrej"],
        shortDesc: "Energy-efficient inverter splits and heavy-duty window units engineered for high-ambient Indian summers.",
        overview: "Our range of residential air conditioners delivers ultra-quiet cooling performance, active air-purification filters, and advanced inverter technology that reduces power consumption by up to 50%. Ideal for homes, small offices, and retail boutiques.",
        specs: {
            "Tonnage Range": "1.0 Ton, 1.5 Ton, 2.0 Ton, 2.5 Ton",
            "Energy Rating": "3-Star, 5-Star BEE Inverter Ratings",
            "Compressor Type": "High-efficiency Rotary Inverter",
            "Refrigerant Gas": "Eco-friendly R-32 / R-410a",
            "Condenser Coil": "100% Copper with Anti-Corrosive Blue Fin Technology"
        },
        features: ["Inverter swing compressor", "Coanda airflow for uniform cooling", "PM 2.5 particulate filtration", "Stabilizer-free operation"],
        applications: ["Bedrooms", "Living Rooms", "Small Office Cabins", "Retail Outlets"],
        downloads: [
            { name: "Daikin Split AC Catalogue 2026.pdf", size: "4.5 MB" },
            { name: "Voltas Inverter AC Specsheet.pdf", size: "2.1 MB" }
        ],
        faqs: [
            { q: "What is the warranty period for the inverter compressor?", a: "Most of our leading brands (Daikin, Voltas, Blue Star) provide a 5 to 10-year warranty on the inverter compressor and 1 year on the comprehensive machine." },
            { q: "What are the benefits of Blue Fin/Gold Fin coating?", a: "It protects the copper condenser coils from chemical corrosion, rust, and salt accumulation, greatly increasing AC lifespan in humid areas." }
        ]
    },
    {
        id: "cassette-ductable-ac",
        name: "Ceiling Cassette & High-Static Ductable Split Units",
        category: "air-conditioning",
        subcategory: "Commercial AC",
        image: "assets/images/cassette_ac_hd.png",
        brands: ["Daikin", "Voltas", "Blue Star", "Carrier", "Cruise", "Mitsubishi Electric", "Samsung"],
        shortDesc: "Ceiling-recessed 4-way cassettes and ductable split systems for uniform cooling in large commercial layouts.",
        overview: "AERC provides commercial cassettes and ductable splits for open offices, banquet halls, and large retail outlets. Cassette units mount flush in false ceilings, supplying 360-degree draft-free air distribution, while ductables allow extensive duct routing for hidden aesthetics.",
        specs: {
            "Capacity Range": "1.5 Ton to 8.5 Ton units",
            "Airflow Design": "4-Way Auto Swing Sweep (Cassette), High Static Pressure (Ductable)",
            "Power Phase": "Three Phase (415V) / Single Phase (230V)",
            "Condensate Pump": "Built-in lift pump up to 850mm (Cassette)"
        },
        features: ["Low noise blower fans", "Fresh air intake provision", "Washable long-life filter grids", "BMS compatibility"],
        applications: ["Showrooms", "Corporate Offices", "Conference Halls", "Restaurants & Cafes"],
        downloads: [
            { name: "AERC Commercial AC Guide.pdf", size: "6.2 MB" },
            { name: "Carrier Cassette Technical Manual.pdf", size: "3.8 MB" }
        ],
        faqs: [
            { q: "Do cassette units require a false ceiling?", a: "Yes, cassette units are recessed within the false ceiling grid. A minimum clear height of 300mm above the ceiling grid is typically required." },
            { q: "What is the maximum piping limit for commercial ductables?", a: "Piping length limits vary by brand but generally support up to 50 meters of horizontal run and 30 meters of vertical lift." }
        ]
    },
    {
        id: "vrf-vrv-systems",
        name: "Variable Refrigerant Flow (VRF/VRV) Central Cooling",
        category: "air-conditioning",
        subcategory: "VRF Systems",
        image: "assets/images/vrf_vrv.png",
        brands: ["Daikin VRV", "Samsung DVM", "Mitsubishi Electric City Multi", "Carrier", "LG Multi V"],
        shortDesc: "High-efficiency multi-zone cooling systems connecting dozens of indoor units to a single outdoor module.",
        overview: "Our Variable Refrigerant Flow (VRF/VRV) systems offer state-of-the-art climate zoning. A single outdoor inverter module connects to multiple indoor units (cassettes, splits, wall-mounts, concealed ducts), dynamically adjusting cooling output according to room occupation.",
        specs: {
            "Outdoor Module Capacity": "8 HP to 88 HP (Modular combination)",
            "Max Connected Indoor Units": "Up to 64 units per outdoor system",
            "Total Piping Length": "Up to 1000 meters overall run",
            "Inverter Technology": "All DC Scroll Inverter Compressors"
        },
        features: ["Individual room temperature management", "Vapor injection scroll circuits", "Night quiet operation cycle", "Auto-clean heat exchangers"],
        applications: ["Premium Villas", "Multi-Storey Corporate Headquarters", "Hospitals", "Boutique Hotels"],
        downloads: [
            { name: "Daikin VRV-X Series Catalog.pdf", size: "12.8 MB" },
            { name: "AERC VRF Selection Workbook.pdf", size: "8.4 MB" }
        ],
        faqs: [
            { q: "Can we mix indoor unit types in a single VRF loop?", a: "Yes, you can connect cassette, split, wall-mounted, and ductable indoor units to the same VRF outdoor system, sized according to room requirements." },
            { q: "What is the energy saving potential of VRF?", a: "Because it adjusts compressor speeds based on heat load, VRF can save up to 40% in energy compared to traditional packaged units." }
        ]
    },
    {
        id: "heat-pump-systems",
        name: "Commercial & Swimming Pool Heat Pumps",
        category: "air-conditioning",
        subcategory: "HVAC Solutions",
        image: "assets/images/heat_pump_pool.png",
        brands: ["Copeland", "Danfoss", "Cruise"],
        shortDesc: "High-efficiency thermal heat pumps utilizing ambient heat for commercial hot water and swimming pool heating.",
        overview: "AERC sources and distributes eco-friendly heat pump systems. By leveraging ambient thermodynamic heat, these pumps deliver warm water for commercial showers, hotels, swimming pools, and manufacturing processes at a fraction of electric boiler costs.",
        specs: {
            "Heating Capacity": "10 kW to 120 kW modules",
            "COP (Coefficient of Performance)": "Up to 4.5 (High-efficiency ratio)",
            "Water Temp Limit": "Up to 65°C hot water output",
            "Compressor Tech": "Copeland heating scroll optimization"
        },
        features: ["Intellectual digital touch panels", "Titanium double-tube heat exchangers", "Defrost cycles for winter", "Low carbon emission operation"],
        applications: ["Hotels", "Swimming Pools", "Industrial Laundries", "Residential Hot Water Complexes"],
        downloads: [
            { name: "Copeland Heat Pump Guide.pdf", size: "5.1 MB" },
            { name: "Pool Heating Sizing Workbook.pdf", size: "2.4 MB" }
        ],
        faqs: [
            { q: "How much cheaper is a heat pump compared to a geyser?", a: "A heat pump utilizes ambient air thermal energy, meaning it consumes 70% less electricity than traditional electrical heating elements." },
            { q: "Can it operate in cold winter ambient conditions?", a: "Yes, our high-performance heating scrolls work efficiently even in ambient temperatures as low as -7°C, with built-in hot gas defrost cycles." }
        ]
    },
    {
        id: "modular-cold-rooms",
        name: "Modular Cold Storage & Walk-In Rooms",
        category: "cold-chain",
        subcategory: "Cold Rooms",
        image: "assets/images/cold_room.png",
        brands: ["Blue Star", "Blue Cold", "Guntner", "Approcool"],
        shortDesc: "Custom-engineered modular PUF cold rooms and chiller/freezer walk-ins with cam-locked joints.",
        overview: "We configure, source, and deliver modular cold storage rooms. Built with premium cam-locked polyurethane foam (PUF) panels and featuring SS304 or PPGI claddings, they guarantee zero thermal bridging. Ideal for fresh agriculture, dairy, and chemical storage.",
        specs: {
            "Panel Thickness Options": "60mm, 80mm, 100mm, 120mm, 150mm panels",
            "PUF Density": "40 kg/m³ (+/- 2 kg/m³) injection",
            "Thermal Conductivity": "0.022 W/m-K (Highly insulating)",
            "Temperature Range": "Chillers (+2°C to +8°C) & Freezers (-18°C to -25°C)"
        },
        features: ["Aesthetic flush-mount design", "Pressure relief safety release valves", "Heavy-duty aluminum checker floor plates", "Digital temperature telemetry alerts"],
        applications: ["Dairy Plants", "Pharmaceutical Hubs", "Fruit & Vegetable Cold Chains", "Hotel Kitchens"],
        downloads: [
            { name: "AERC Cold Chain Catalogue.pdf", size: "14.2 MB" },
            { name: "Blue Cold Evaporator Coils Guide.pdf", size: "4.8 MB" }
        ],
        faqs: [
            { q: "What PUF panel thickness do I need for a freezer?", a: "For chillers (+2°C to +8°C), 80mm PUF panels are standard. For deep freezers (-18°C to -25°C), we recommend 120mm or 150mm panels to prevent condensation and energy losses." },
            { q: "Are floor insulation options available?", a: "Yes, we offer both PUF slabs with aluminum checker plates for walk-in loads, and bituminous layered concrete flooring for heavy trolley loads." }
        ]
    },
    {
        id: "blast-freezers-chillers",
        name: "Industrial Blast Freezers & Shock Chillers",
        category: "cold-chain",
        subcategory: "Refrigeration",
        image: "assets/images/slider_cold_chain.png",
        brands: ["Blue Star", "Guntner", "Blue Cold", "Bitzer"],
        shortDesc: "High-airflow shock freezers to drop core food temperatures rapidly to -18°C, arresting bacterial growth.",
        overview: "AERC specializes in shock-freezing solutions. Our industrial blast freezers circulate high-velocity air at -35°C to freeze food items rapidly. This quick freezing prevents large ice crystal formations, preserving food cell structures, textures, and vitamins.",
        specs: {
            "Operating Temp": "-30°C to -40°C air temperature",
            "Freezing Cycle Time": "90 to 240 minutes pull-down",
            "Compressor Frame": "Bitzer Semi-Hermetic / Copeland scroll configurations",
            "Coil Finishing": "Anti-corrosive gold fin evaporator coating"
        },
        features: ["Heavy-duty high-throw fan motors", "Stainless steel interior cladding", "Heated core temperature probes", "Auto-defrost cycles"],
        applications: ["Seafood Export Centers", "Bakery Dough Storage", "Meat Processing Plants", "Ready-to-Eat Food Hubs"],
        downloads: [
            { name: "Blast Freezer Sizing Sheet.pdf", size: "3.5 MB" },
            { name: "Guntner Blast Air Evaporators.pdf", size: "7.1 MB" }
        ],
        faqs: [
            { q: "What is the difference between a cold room and a blast freezer?", a: "A cold room is designed to *maintain* pre-chilled temperatures. A blast freezer uses massive airflow and high cooling capacity to *actively freeze* fresh hot products quickly." },
            { q: "Does blast freezing improve food shelf life?", a: "Yes, by stopping bacterial activity within minutes and preventing drip loss, food retains freshness and flavor over long storage cycles." }
        ]
    },
    {
        id: "deep-freezers-chest",
        name: "Chest Deep Freezers & Eutectic Cabinets",
        category: "refrigeration",
        subcategory: "Refrigeration Eq",
        image: "assets/images/product_refrigerator_glass.png",
        brands: ["Western Refrigeration", "Blue Star", "Voltas", "Godrej"],
        shortDesc: "Premium hard-top and glass-top commercial deep freezers, including eutectic models for power cuts.",
        overview: "Our range of commercial chest freezers combines deep freeze insulation with high-ambient operations. Eutectic deep freezers feature specialized thermal liquid pads that store cold, keeping ice creams and frozen goods frozen for up to 15 hours during power outages.",
        specs: {
            "Capacity Range": "100 Liters to 600 Liters volume",
            "Energy Efficiency": "High-density polyurethane insulation (80mm thick)",
            "Outer Cladding": "Prepainted heavy-gauge rust-resistant steel sheet",
            "Holdover Duration": "Up to 15 hours (Eutectic pads without power)"
        },
        features: ["Dual-compartment chiller/freezer tabs", "Heavy-duty castor wheels", "Lockable handle latches", "Eco-friendly cyclopentane blowing agent"],
        applications: ["Ice Cream Parlors", "Retail Grocery Stores", "Frozen Food Distribution", "Cloud Kitchens"],
        downloads: [
            { name: "Western Deep Freezers Catalog.pdf", size: "8.2 MB" },
            { name: "Blue Star Chest Freezer Specs.pdf", size: "1.9 MB" }
        ],
        faqs: [
            { q: "What is a eutectic freezer?", a: "A eutectic freezer contains cooling pads containing eutectic salt solutions. When powered, the solution freezes. During power cuts, these pads absorb ambient heat, keeping food frozen without electricity." },
            { q: "Can I use it as a refrigerator?", a: "Yes, some of our models feature dual-mode control dials, allowing you to toggle the cabinet between chiller (+2°C to +8°C) and freezer (-18°C) settings." }
        ]
    },
    {
        id: "visi-coolers-upright",
        name: "Visi-Coolers & Upright Glass Display Chillers",
        category: "refrigeration",
        subcategory: "Refrigeration Eq",
        image: "assets/images/product_refrigerator_double.png",
        brands: ["Western Refrigeration", "Blue Star", "Voltas", "Godrej"],
        shortDesc: "Double and single glass-door upright visi-coolers for beverage storage and retail displays.",
        overview: "Western Visi-Coolers distributed by AERC maximize product visibility while maintaining strict cold range parameters. Engineered with double-pane glass and internal LED lighting, they are ideal for self-service beverage displays, dairy counters, and supermarkets.",
        specs: {
            "Capacity Range": "200 Liters to 1000 Liters glass display",
            "Glass Material": "Double-layered vacuum insulation glass with hot gas airflow",
            "Temperature Range": "0°C to +10°C beverage holding",
            "Shelving Grid": "Adjustable heavy-duty PVC coated wire grids"
        },
        features: ["Auto-closing glass door hinges", "Uniform air circulation fan modules", "Illuminated advertising canopy tops", "Key lock provisions"],
        applications: ["Supermarkets", "Beverage Outlets", "Sweet Shops", "Cafeterias"],
        downloads: [
            { name: "Western Visi Coolers Range.pdf", size: "5.5 MB" },
            { name: "AERC Beverage Displays Leaflet.pdf", size: "2.3 MB" }
        ],
        faqs: [
            { q: "Do the glass doors fog up in high humidity?", a: "Our premium Western visi-coolers feature heated glass panels or forced warm-air sweeps that prevent condensation on the outer glass surface during monsoon seasons." },
            { q: "Are the wire shelves adjustable?", a: "Yes, all wire shelves can be easily adjusted vertically at 12mm intervals to accommodate bottles and cans of different heights." }
        ]
    },
    {
        id: "water-coolers-usha",
        name: "Industrial Stainless Steel Water Coolers",
        category: "refrigeration",
        subcategory: "Refrigeration Eq",
        image: "assets/images/product_water_cooler.png",
        brands: ["Usha", "Blue Star", "Voltas"],
        shortDesc: "SS304 food-grade water coolers and dispensers for schools, offices, and factories.",
        overview: "We supply industrial-grade stainless steel storage water coolers. Outfitted with food-grade SS304 storage tanks and high-performance reciprocating compressors, they deliver clean, ice-cold drinking water to large groups under extreme summer conditions.",
        specs: {
            "Storage Capacity": "40 Liters to 300 Liters storage volume",
            "Cooling Capacity": "20 LPH to 150 LPH (Liters Per Hour cooling rate)",
            "Chassis Body": "Polished corrosion-proof Stainless Steel SS304",
            "Eco Gas": "R-134a ozone-safe refrigerant gas"
        },
        features: ["In-built water level indicators", "Safety float valve preventers", "Heavy-duty chromium faucets", "PUF insulation holdover"],
        applications: ["Factories", "School & College Campuses", "Railway Stations", "Office Canteens"],
        downloads: [
            { name: "Usha Water Cooler Catalogue.pdf", size: "3.2 MB" },
            { name: "Blue Star Water Cooler Manual.pdf", size: "2.8 MB" }
        ],
        faqs: [
            { q: "Is a water purifier filter included?", a: "We provide water coolers with connection inlets for external water purifiers (RO/UV). An inline purification kit can be pre-integrated upon request." },
            { q: "How long does it take to cool a full tank of water?", a: "Our high-capacity condensing units can cool the entire tank within 60 to 90 minutes of start-up." }
        ]
    },
    {
        id: "copeland-compressors",
        name: "Copeland Hermetic & Scroll Compressors",
        category: "refrigeration",
        subcategory: "Compressors",
        image: "assets/images/compressor_scroll.png",
        brands: ["Copeland (Emerson)", "Danfoss", "Tecumseh", "Bitzer", "Carrier Midea"],
        shortDesc: "Authorized supply of scroll, semi-hermetic, and hermetic compressors for cooling applications.",
        overview: "AERC is the premier authorized SSD distributor of Copeland refrigeration compressors. From Fractional HP hermetic models to high-capacity refrigeration scrolls (ZB, ZF, ZS series), we support cold rooms, heat pumps, and central AC systems.",
        specs: {
            "Type Range": "Scroll, Semi-Hermetic Reciprocating, Hermetic FHP",
            "Power Rating": "0.5 HP to 25 HP models in stock",
            "Refrigerant Support": "R-22, R-134a, R-404a, R-407c, R-410a, R-32, R-290",
            "Oil Charge": "POE (Polyolester) / Alkylbenzene / Mineral Oils"
        },
        features: ["Compliance scroll design for low wear", "High-efficiency motor coils", "Built-in internal pressure relief protection", "Compact spatial footprint"],
        applications: ["Cold Storage Units", "Commercial Chillers", "Refrigeration Racks", "Air Conditioning Systems"],
        downloads: [
            { name: "Copeland Refrigeration Scroll Manual.pdf", size: "9.5 MB" },
            { name: "Copeland Compressor Product Line.pdf", size: "14.1 MB" }
        ],
        faqs: [
            { q: "What does compliance scroll design mean?", a: "It allows scroll coils to separate slightly under liquid slugs, preventing physical damage and ensuring continuous operation even under non-ideal refrigerant cycles." },
            { q: "Do you supply original Copeland POE oil?", a: "Yes, we stock authentic Copeland Ultra 32-3X and Emkarate oils to ensure long compressor lifespan." }
        ]
    },
    {
        id: "condensing-units-cdu",
        name: "Air-Cooled & Water-Cooled Condensing Units",
        category: "refrigeration",
        subcategory: "Compressors",
        image: "assets/images/hero_slide_5.png",
        brands: ["Copeland", "Danfoss", "Tecumseh", "Bitzer", "Blue Cold", "Approcool"],
        shortDesc: "Complete outdoor CDU kits featuring high-airflow fans, compressors, and receiver tanks.",
        overview: "AERC offers complete pre-assembled condensing unit (CDU) kits. Engineered with Copeland or Danfoss compressors, these kits include copper condenser loops, weather-proof enclosures, air fan assemblies, filters, and safety switches. Perfect for walk-in cold rooms.",
        specs: {
            "Compressor Power": "1.0 HP to 15.0 HP systems",
            "Cooling Capacity Range": "2,000 kcal/hr to 35,000 kcal/hr",
            "Finned Coil Material": "Inner grooved copper loops with wave aluminum fins",
            "Voltage Requirement": "415V Three Phase / 230V Single Phase"
        },
        features: ["Liquid line filter drier pre-installed", "High/Low pressure gauge controls", "Liquid receiver tank with safety valve", "Crankcase heater integration"],
        applications: ["Cold Storage Warehouses", "Milk Chilling Silos", "Supermarket Chiller Units", "Industrial Processes"],
        downloads: [
            { name: "Copeland CDU Catalogue 2026.pdf", size: "8.6 MB" },
            { name: "AERC CDU Installation Instructions.pdf", size: "3.2 MB" }
        ],
        faqs: [
            { q: "Are these units suitable for outdoor rooftop installations?", a: "Yes, all CDU kits are housed in heavy-duty galvanized powder-coated weather-proof cabinets designed to withstand extreme sunlight and rainfall." },
            { q: "Do the units come pre-charged with refrigerant?", a: "No, they contain a dry nitrogen holding charge to protect internal components. The installer must evacuate the loop and charge the required refrigerant gas during site installation." }
        ]
    },
    {
        id: "floron-refrigerant-gases",
        name: "Floron Refrigerant Gases (SRF Limited)",
        category: "hvac-components",
        subcategory: "Refrigerant Gases",
        image: "assets/images/hvac_components.png",
        brands: ["SRF Limited (Floron)"],
        shortDesc: "Authorized wholesale supply of Floron refrigerant cylinders: R-22, R-134a, R-404a, R-407c, R-410a, and R-32.",
        overview: "As the authorized SSD distributor for SRF Limited, we provide Floron refrigerant cylinders. Every batch is factory-tested for 99.9% purity, low moisture thresholds, and high thermal cooling coefficients, ensuring maximum compressor reliability.",
        specs: {
            "Chemical Purity": "99.9% Minimum guaranteed",
            "Moisture Content": "Less than 10 PPM (Parts Per Million)",
            "Cylinder Sizes": "10 kg, 12 kg, 45 kg, 60 kg, Tonners in stock",
            "Global Warming Potential": "Eco-R32 and R-454B low GWP variants available"
        },
        features: ["Zero moisture corrosion safeguard", "Non-flammable safety properties (for standard lines)", "Distinct seal of authenticity", "Eco-friendly recovery cylinder supply"],
        applications: ["Re-charging AC Units", "Industrial Refrigeration Loops", "Automotive Climate Systems", "Refrigerant Wholesaling"],
        downloads: [
            { name: "Floron Refrigerant Gases Directory.pdf", size: "4.5 MB" },
            { name: "SRF Floron Safety Data Sheet.pdf", size: "2.9 MB" }
        ],
        faqs: [
            { q: "Why is moisture in gas dangerous?", a: "Moisture reacts with compressor oils to form acids, which corrode motor windings and cause compressor burnouts. Floron gases maintain under 10 PPM moisture." },
            { q: "Do you supply R-32 cylinders?", a: "Yes, we stock R-32 cylinders in multiple capacities. Note that R-32 is mildly flammable (A2L safety class) and requires certified handling procedures." }
        ]
    },
    {
        id: "digital-controllers-dixell",
        name: "Dixell Digital Controllers & Process Sensors",
        category: "hvac-components",
        subcategory: "Controllers",
        image: "assets/images/hero_slide_6.png",
        brands: ["Dixell (Emerson)", "Multispan", "Honeywell", "PVR Controls"],
        shortDesc: "Digital electronic process controllers, temperature indicators, and telemetry data loggers.",
        overview: "AERC distributes Dixell (Emerson) electronic controllers and Multispan process indicators. These digital instruments track temperature cycles, manage compressor defrost intervals, and sound telemetry alarms during cooling failures.",
        specs: {
            "Controller Input": "NTC / PTC Temperature sensor probes",
            "Relay Output Capacity": "8A, 16A, 20A Compressor startup contacts",
            "Telemetry Link": "Modbus RS485 communication protocols",
            "Enclosure Class": "IP65 dust-and-water resistant front panel bezel"
        },
        features: ["Pre-programmed refrigeration defrost cycles", "Dual display temperature visualizers", "Critical temperature alert sirens", "BMS automation integration"],
        applications: ["Cold Storage Panels", "Chiller Control Panels", "Mortuary Cabinets", "Incubation Chambers"],
        downloads: [
            { name: "Dixell XR Series User Manual.pdf", size: "3.5 MB" },
            { name: "Multispan Indicators Catalogue.pdf", size: "2.1 MB" }
        ],
        faqs: [
            { q: "Can these controllers trigger remote alert messages?", a: "Yes, when connected to a gateway module (e.g. Dixell XWeb), controllers send automated email or SMS notifications to facility managers during thermal deviations." },
            { q: "Is the sensor probe included?", a: "Yes, standard Dixell controller kits in stock include two NTC/PTC thermistor probes." }
        ]
    },
    {
        id: "copper-tubes-rajco",
        name: "Rajco Premium VRF-Grade Copper Tubes",
        category: "hvac-components",
        subcategory: "HVAC Spares",
        image: "assets/images/slider_engineering.png",
        brands: ["Rajco Metal Industries"],
        shortDesc: "VRF-grade seamless copper tubes, pancake coils, and high-pressure copper fittings.",
        overview: "We distribute Rajco Metal Industries premium copper pipes and fittings. Manufactured using seamless drawing processes and certified for high-pressure R-410a/R-32 refrigerant operations, these pipes feature uniform wall thickness and excellent bendability.",
        specs: {
            "Standard Specs": "ASTM B280, EN 12735-1 VRF standard compliance",
            "Dimensions (Diameter)": "1/4 inch to 2-1/8 inch outer diameter range",
            "Wall Thickness": "19 SWG (0.91mm) to 22 SWG (0.71mm) options",
            "Format Availability": "15-meter Pancake Coils / 3-meter Straight Tubes"
        },
        features: ["Bright annealed inner surfaces", "Sealed end caps prevent moisture ingress", "Excellent ductility prevents cracking", "Uniform wall thickness for weld reliability"],
        applications: ["VRF/VRV Piping Layouts", "Split AC Interconnections", "Heat Exchanger Construction", "Medical Gas Pipeline Systems"],
        downloads: [
            { name: "Rajco Copper Tubes Catalogue.pdf", size: "3.4 MB" },
            { name: "Copper Piping Selection Chart.pdf", size: "1.2 MB" }
        ],
        faqs: [
            { q: "Why is 19 SWG copper recommended for VRF systems?", a: "VRF systems running on R-410a operate at high pressures (up to 400+ PSI). Thick 19 SWG copper walls withstand these cycles without fatigue cracks." },
            { q: "Are these copper pipes deoxidized?", a: "Yes, Rajco pipes are made of Phosphorus-Deoxidized (DHP) copper, which ensures excellent brazing properties." }
        ]
    },
    {
        id: "bluecold-evaporators",
        name: "BlueCold Evaporator Coils & Unit Coolers",
        category: "refrigeration",
        subcategory: "Refrigeration Eq",
        image: "assets/images/hero_slide_3.png",
        brands: ["BlueCold", "Guntner", "Approcool", "Bitzer"],
        shortDesc: "High-efficiency cold storage evaporators and unit coolers with gold fin coils.",
        overview: "BlueCold Evaporators sourced by AERC are designed for modular cold rooms and blast freezers. Engineered with high-airflow fans, inner-grooved copper loops, and anti-corrosive hydrophilic blue/gold fin coatings, they maintain strict humidity control.",
        specs: {
            "Cooling capacity range": "1.5 kW to 75 kW systems",
            "Fin spacing limits": "4.5mm, 6.0mm, 8.0mm, 10.0mm (for freezer frost)",
            "Defrost Mechanism": "Built-in stainless steel electrical heating rods",
            "Housing Cabinet": "Corrosion-resistant powder-coated Aluminum-Magnesium alloy"
        },
        features: ["Low noise high-throw fan assemblies", "Dual discharge design available", "Sliding drain tray brackets", "Intelligent thermostat sensor wells"],
        applications: ["Cold Rooms", "Blast Chilling Enclosures", "Food Processing Corridors", "Agriculture Sorter Lines"],
        downloads: [
            { name: "Blue Cold Evaporator Coils Guide.pdf", size: "4.8 MB" },
            { name: "BLC Series Technical Specsheet.pdf", size: "5.2 MB" }
        ],
        faqs: [
            { q: "How do I select fin spacing?", a: "For chillers (+2°C), 4.5mm fin spacing is standard. For low-temperature freezers (-25°C), we recommend 6.0mm or 8.0mm spacing to prevent ice blockages." },
            { q: "Are the electrical defrost heaters included?", a: "Yes, all BlueCold low-temperature evaporators come pre-wired with high-grade stainless steel heating rods." }
        ]
    },
    {
        id: "flow-controls-valves",
        name: "Danfoss Flow Controls & Thermostatic Expansion Valves",
        category: "hvac-components",
        subcategory: "HVAC Spares",
        image: "assets/images/hvac_components.png",
        brands: ["Danfoss", "Honeywell", "Copeland Flow Controls", "PVR Controls"],
        shortDesc: "Thermostatic expansion valves (TXV), solenoid valves, and safety pressure switches.",
        overview: "AERC distributions include Danfoss thermostatic expansion valves (T2/TE2 series), solenoid coils, and pressure switches. These precision flow controls regulate refrigerant volumes entering evaporator coils, safeguarding compressors.",
        specs: {
            "Control Types": "Thermostatic Expansion Valves (TXV), Solenoids, Filter Driers, Pressure Controls",
            "Pressure Limits": "Danfoss KP1 (Low Pressure) / KP5 (High Pressure) switches",
            "Connection Types": "Solder (ODF) / Flare connections",
            "Refrigerant Compatibility": "Multi-refrigerant interchangeable orifices"
        },
        features: ["Interchangeable laser-welded valve orifices", "Built-in copper mesh inlet strainers", "Heavy-duty magnetic solenoid coils", "Bellows elements with long life cycle"],
        applications: ["Refrigeration Condensing Units", "Commercial Chillers", "Heat Pump Assemblies", "VRF Liquid Loops"],
        downloads: [
            { name: "Danfoss Refrigeration Components Guide.pdf", size: "11.2 MB" },
            { name: "T2 TE2 Valve Installation Sheet.pdf", size: "2.5 MB" }
        ],
        faqs: [
            { q: "Why is a liquid line filter drier required?", a: "It catches debris, metal filings, and absorbs moisture from the refrigerant stream, preventing ice blocking at the expansion valve orifice." },
            { q: "Can I adjust the superheat setting on Danfoss valves?", a: "Yes, Danfoss T2 and TE2 valves feature an adjustment screw on the base to calibrate superheat." }
        ]
    }
];

// Active Category and Pagination State
let currentCategory = 'all';
let searchKeyword = '';
let selectedBrand = 'all';
let currentPage = 1;
const itemsPerPage = 6;

document.addEventListener('DOMContentLoaded', function() {
    // 1. Initialize Sticky Subnavigation & Tab Clicks
    const productTabs = document.querySelectorAll('.product-tab-btn');
    const searchInput = document.getElementById('catalogSearch');
    const brandFilter = document.getElementById('catalogBrandFilter');
    const clearFiltersBtn = document.getElementById('clearFilters');
    
    // Parse initial URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const initialCat = urlParams.get('cat');
    if (initialCat) {
        currentCategory = initialCat;
    }
    
    // Set initial active class in tabs
    setActiveTabUI(currentCategory);
    updateBannerContent(currentCategory);
    renderProducts();

    // Attach click events to category tab buttons
    productTabs.forEach(btn => {
        btn.addEventListener('click', function() {
            currentCategory = this.getAttribute('data-target');
            currentPage = 1; // Reset to page 1
            setActiveTabUI(currentCategory);
            updateBannerContent(currentCategory);
            renderProducts();
            
            // Update URL search parameters
            const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?cat=' + currentCategory;
            window.history.pushState({path:newurl}, '', newurl);
        });
    });

    // Attach search input keyup
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchKeyword = this.value.trim().toLowerCase();
            currentPage = 1;
            renderProducts();
        });
    }

    // Attach brand filter change
    if (brandFilter) {
        // Populate brand options dynamically on page load
        populateBrandFilterOptions();
        brandFilter.addEventListener('change', function() {
            selectedBrand = this.value;
            currentPage = 1;
            renderProducts();
        });
    }

    // Clear all filters
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', function() {
            if (searchInput) searchInput.value = '';
            if (brandFilter) brandFilter.value = 'all';
            searchKeyword = '';
            selectedBrand = 'all';
            currentPage = 1;
            renderProducts();
        });
    }

    // Initialize Enquiry Form pre-fill triggers on modal
    const enquiryModal = document.getElementById('enquiryModal');
    if (enquiryModal) {
        enquiryModal.addEventListener('show.bs.modal', function(event) {
            const button = event.relatedTarget;
            const productName = button.getAttribute('data-product-name');
            const targetInput = enquiryModal.querySelector('#modalSubjectInput');
            const messageTextarea = enquiryModal.querySelector('#modalMessageTextarea');
            
            if (targetInput && productName) {
                targetInput.value = `Enquiry: Sourcing details for ${productName}`;
            }
            if (messageTextarea && productName) {
                messageTextarea.value = `Hello AERC Sales Team,\n\nI am interested in sourcing ${productName} for our project requirements. Please share availability, specifications, and wholesale pricing details.\n\nThank you.`;
            }
        });
    }
});

// UI Set Active Tab Helper
function setActiveTabUI(category) {
    const productTabs = document.querySelectorAll('.product-tab-btn');
    productTabs.forEach(btn => {
        if (btn.getAttribute('data-target') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Dynamically Update Page Banner
function updateBannerContent(category) {
    const bannerH1 = document.querySelector('.page-banner h1');
    const bannerP = document.querySelector('.page-banner p');
    
    if (!bannerH1 || !bannerP) return;
    
    switch(category) {
        case 'air-conditioning':
            bannerH1.textContent = "Air Conditioning Systems";
            bannerP.textContent = "Authorized Wholesale Supply of VRV/VRF, Cassette, Ductable and Split ACs";
            break;
        case 'refrigeration':
            bannerH1.textContent = "Industrial Refrigeration";
            bannerP.textContent = "Authorized Copeland SSD Partner - Compressors, CDUs & Evaporator Coils";
            break;
        case 'hvac-components':
            bannerH1.textContent = "HVAC-R Components & Spares";
            bannerP.textContent = "Genuine SRF Gases, Rajco Copper Piping, Dixell Controllers & Danfoss Valves";
            break;
        case 'cold-chain':
            bannerH1.textContent = "Cold Chain Solutions";
            bannerP.textContent = "Modular Puff Cold Rooms, Industrial Blast Freezers & Pharmaceutical Storage";
            break;
        case 'all':
        default:
            bannerH1.textContent = "HVAC-R Products";
            bannerP.textContent = "Authorized Supply of Genuine Global Brand Equipment & Components";
            break;
    }
}

// Populate Brand Options
function populateBrandFilterOptions() {
    const brandFilter = document.getElementById('catalogBrandFilter');
    if (!brandFilter) return;
    
    // Collect unique brands from array
    const brandsSet = new Set();
    PRODUCTS_DATA.forEach(p => {
        p.brands.forEach(b => brandsSet.add(b));
    });
    
    // Sort brands alphabetically
    const sortedBrands = Array.from(brandsSet).sort();
    
    // Clear dynamic options (keeping 'All Brands')
    brandFilter.innerHTML = '<option value="all">All Brand Manufacturers</option>';
    
    sortedBrands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
    });
}

// Main Render Logic
function renderProducts() {
    const grid = document.getElementById('products-grid');
    const paginationContainer = document.getElementById('catalog-pagination');
    if (!grid) return;
    
    // Filter array
    let filteredList = PRODUCTS_DATA.filter(product => {
        // Category match
        if (currentCategory !== 'all' && product.category !== currentCategory) {
            return false;
        }
        
        // Brand match
        if (selectedBrand !== 'all') {
            const hasBrand = product.brands.some(b => b.toLowerCase().includes(selectedBrand.toLowerCase()));
            if (!hasBrand) return false;
        }
        
        // Search matches Name, Description, Subcategory or Brands
        if (searchKeyword !== '') {
            const matchName = product.name.toLowerCase().includes(searchKeyword);
            const matchDesc = product.shortDesc.toLowerCase().includes(searchKeyword);
            const matchSub = product.subcategory.toLowerCase().includes(searchKeyword);
            const matchBrand = product.brands.some(b => b.toLowerCase().includes(searchKeyword));
            if (!matchName && !matchDesc && !matchSub && !matchBrand) {
                return false;
            }
        }
        
        return true;
    });
    
    // Pagination calculation
    const totalItems = filteredList.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
    
    // Clamp current page
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const paginatedList = filteredList.slice(startIndex, endIndex);
    
    // Render Grid Cards
    if (paginatedList.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="fs-1 text-muted mb-3"><i class="fa-solid fa-folder-open"></i></div>
                <h4 class="text-accent font-weight-bold">No Products Found</h4>
                <p class="text-muted">No items match your active search and filter combinations.</p>
                <button class="btn btn-primary-custom btn-sm mt-2" id="resetCatalogFilters">Reset All Filters</button>
            </div>
        `;
        
        // Attach click listener to internal reset button
        const resetBtn = document.getElementById('resetCatalogFilters');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                document.getElementById('clearFilters').click();
            });
        }
    } else {
        grid.innerHTML = paginatedList.map(product => {
            return `
                <div class="col-lg-4 col-md-6 mb-4 animate-on-scroll animated">
                    <div class="product-card d-flex flex-column h-100 justify-content-between">
                        <div>
                            <div class="product-img-wrapper">
                                <img src="${product.image}" class="product-img" alt="${product.name}">
                            </div>
                            <div class="product-body">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="product-cat">${product.category.toUpperCase().replace('-', ' ')}</span>
                                    <span class="badge bg-light text-primary border" style="font-size: 0.75rem; font-weight: 600;">${product.subcategory}</span>
                                </div>
                                <h3 class="product-title font-weight-bold" style="font-size: 1.15rem; color: var(--color-text-heading);">${product.name}</h3>
                                <p class="product-desc text-muted mb-3">${product.shortDesc}</p>
                                
                                <div class="mb-3 small">
                                    <strong class="text-heading">Key Brands:</strong> 
                                    <span class="text-muted">${product.brands.join(', ')}</span>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 pt-0 border-top bg-light-custom text-center mt-auto">
                            <div class="d-flex gap-2 mt-3">
                                <button class="btn btn-sm btn-primary-custom flex-grow-1" onclick="openDetailsModal('${product.id}')">View Details</button>
                                <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#enquiryModal" data-product-name="${product.name}"><i class="fa-solid fa-paper-plane"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Render Pagination Controls
    renderPaginationUI(totalPages);
}

// Render Pagination Indicators
function renderPaginationUI(totalPages) {
    const container = document.getElementById('catalog-pagination');
    if (!container) return;
    
    if (totalPages <= 1) {
        container.innerHTML = '';
        return;
    }
    
    let html = `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changeCatalogPage(${currentPage - 1}); return false;" aria-label="Previous">
                <i class="fa-solid fa-chevron-left"></i>
            </a>
        </li>
    `;
    
    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="#" onclick="changeCatalogPage(${i}); return false;">${i}</a>
            </li>
        `;
    }
    
    html += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="changeCatalogPage(${currentPage + 1}); return false;" aria-label="Next">
                <i class="fa-solid fa-chevron-right"></i>
            </a>
        </li>
    `;
    
    container.innerHTML = html;
}

// Change Page Trigger
window.changeCatalogPage = function(pageNumber) {
    currentPage = pageNumber;
    renderProducts();
    // Smooth scroll back to top of filter bar
    const filterSection = document.querySelector('.product-tabs');
    if (filterSection) {
        filterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

// Open Product Detail Modal
window.openDetailsModal = function(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;
    
    const detailsContainer = document.getElementById('productDetailsModalBody');
    if (!detailsContainer) return;
    
    // Construct Specs Table rows
    let specsHtml = '';
    for (const [key, value] of Object.entries(product.specs)) {
        specsHtml += `<tr><th>${key}</th><td>${value}</td></tr>`;
    }
    
    // Construct Features List
    const featuresHtml = product.features.map(f => `<li><i class="fa-solid fa-circle-check text-primary me-2"></i> ${f}</li>`).join('');
    
    // Construct Applications List
    const appsHtml = product.applications.map(a => `<li><i class="fa-solid fa-industry text-secondary me-2"></i> ${a}</li>`).join('');
    
    // Construct Downloads list
    const downloadsHtml = product.downloads.map(d => `
        <a href="download-center.html" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <span><i class="fa-solid fa-file-pdf text-danger me-2"></i> ${d.name}</span>
            <span class="badge bg-light text-muted">${d.size}</span>
        </a>
    `).join('');
    
    // Construct FAQs
    const faqsHtml = product.faqs.map((faq, index) => `
        <div class="accordion-item border-0 mb-3 shadow-sm rounded">
            <h5 class="accordion-header" id="faqHeading-${index}">
                <button class="accordion-button collapsed font-weight-bold" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse-${index}" aria-expanded="false">
                    ${faq.q}
                </button>
            </h5>
            <div id="faqCollapse-${index}" class="accordion-collapse collapse" aria-labelledby="faqHeading-${index}">
                <div class="accordion-body text-muted small bg-light-custom">
                    ${faq.a}
                </div>
            </div>
        </div>
    `).join('');

    // Fetch related products
    const relatedList = PRODUCTS_DATA.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);
    let relatedHtml = '';
    if (relatedList.length > 0) {
        relatedHtml = `
            <h4 class="text-accent font-weight-bold mt-5 border-bottom pb-2 mb-4">Related Cooling Solutions</h4>
            <div class="row">
                ${relatedList.map(rp => `
                    <div class="col-md-4 mb-3">
                        <div class="card h-100 border shadow-sm">
                            <div class="p-3 text-center bg-white" style="height:130px; display:flex; align-items:center; justify-content:center;">
                                <img src="${rp.image}" class="img-fluid" style="max-height:100px; object-fit:contain;" alt="${rp.name}">
                            </div>
                            <div class="card-body p-3">
                                <h6 class="font-weight-bold text-truncate" style="font-size:0.9rem;">${rp.name}</h6>
                                <p class="text-muted small mb-0 text-truncate-2">${rp.shortDesc}</p>
                                <button class="btn btn-sm btn-link p-0 mt-2 text-primary font-weight-bold" onclick="switchDetailView('${rp.id}')">View Product <i class="fa-solid fa-arrow-right fs-7"></i></button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    // Render Modal Contents
    detailsContainer.innerHTML = `
        <div class="row gy-4">
            <!-- Left Side: Product Image & Gallery -->
            <div class="col-lg-5">
                <div class="border rounded p-4 text-center bg-white shadow-sm" style="position: sticky; top: 10px;">
                    <img src="${product.image}" class="img-fluid" style="max-height:300px; object-fit:contain;" alt="${product.name}">
                    <hr class="my-4">
                    <div class="row g-2 justify-content-center">
                        <div class="col-3"><div class="border p-1 rounded bg-light" style="cursor:pointer;"><img src="${product.image}" class="img-fluid" alt="Preview"></div></div>
                        <div class="col-3"><div class="border p-1 rounded bg-light" style="cursor:pointer; opacity: 0.5;"><img src="${product.image}" class="img-fluid" alt="Preview"></div></div>
                        <div class="col-3"><div class="border p-1 rounded bg-light" style="cursor:pointer; opacity: 0.5;"><img src="${product.image}" class="img-fluid" alt="Preview"></div></div>
                    </div>
                </div>
            </div>
            
            <!-- Right Side: Details, Specs, Downloads -->
            <div class="col-lg-7">
                <span class="badge bg-primary text-white mb-2">${product.subcategory}</span>
                <h2 class="text-accent font-weight-bold mb-3" style="font-size: 1.8rem;">${product.name}</h2>
                
                <h5 class="text-muted small"><strong>Authorized Distribution Brands:</strong> ${product.brands.join(', ')}</h5>
                <hr class="my-3">
                
                <p class="text-muted">${product.overview}</p>
                
                <h4 class="text-accent font-weight-bold mt-4 mb-3 border-bottom pb-2">Technical Specifications</h4>
                <div class="table-responsive">
                    <table class="table table-striped table-bordered specs-table">
                        ${specsHtml}
                    </table>
                </div>

                <div class="row mt-4">
                    <div class="col-md-6">
                        <h5 class="text-heading font-weight-bold mb-2">Key System Features</h5>
                        <ul class="list-unstyled text-muted small ps-0">
                            ${featuresHtml}
                        </ul>
                    </div>
                    <div class="col-md-6">
                        <h5 class="text-heading font-weight-bold mb-2">Target Applications</h5>
                        <ul class="list-unstyled text-muted small ps-0">
                            ${appsHtml}
                        </ul>
                    </div>
                </div>
                
                <h4 class="text-accent font-weight-bold mt-4 mb-3 border-bottom pb-2">Technical Downloads</h4>
                <div class="list-group list-group-flush border rounded mb-4">
                    ${downloadsHtml}
                </div>
                
                <h4 class="text-accent font-weight-bold mt-4 mb-3 border-bottom pb-2">Frequently Asked Questions</h4>
                <div class="accordion" id="modalFaqAccordion">
                    ${faqsHtml}
                </div>
                
                ${relatedHtml}

                <div class="bg-light-blue p-4 rounded mt-5 border border-primary border-opacity-25 d-flex flex-wrap justify-content-between align-items-center gap-3">
                    <div>
                        <h5 class="text-accent font-weight-bold mb-1">Need a Custom Quote or Site Sizing Support?</h5>
                        <p class="text-muted small mb-0">Our application engineers will compute and size the exact models for your requirements.</p>
                    </div>
                    <button class="btn btn-primary-custom" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#enquiryModal" data-product-name="${product.name}"><i class="fa-solid fa-paper-plane me-2"></i>Send Enquiry Now</button>
                </div>
            </div>
        </div>
    `;
    
    // Open BS Modal
    const bsModal = new bootstrap.Modal(document.getElementById('detailsModal'));
    bsModal.show();
};

// Switch detail view inside modal
window.switchDetailView = function(productId) {
    // Hide details modal first
    const modalEl = document.getElementById('detailsModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) {
        modal.hide();
        // Wait for animation to finish and re-open with new product
        setTimeout(() => {
            openDetailsModal(productId);
        }, 350);
    }
};
