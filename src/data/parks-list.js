const parks = [
    {
        fullName: "Birmingham Civil Rights National Monument",
        altName: "",
        parkCode: "bicr",
        latitude: 33.5154266357,
        longitude: -86.814666748,
        states: ["al"]
    },
    {
        fullName: "Freedom Riders National Monument",
        altName: "",
        parkCode: "frri",
        latitude: 33.635269165,
        longitude: -85.9064331055,
        states: ["al"]
    },
    {
        fullName: "Horseshoe Bend National Military Park",
        altName: "",
        parkCode: "hobe",
        latitude: 32.97668879,
        longitude: -85.73413589,
        states: ["al"]
    },
    {
        fullName: "Little River Canyon National Preserve",
        altName: "",
        parkCode: "liri",
        latitude: 34.41461863,
        longitude: -85.61734327,
        states: ["al"]
    },
    {
        fullName: "Natchez Trace National Scenic Trail",
        altName: "",
        parkCode: "natt",
        latitude: 34.330290333,
        longitude: -88.7100104094,
        states: ["al, ms, tn"]
    },
    {
        fullName: "Natchez Trace Parkway",
        altName: "",
        parkCode: "natr",
        latitude: 33.78002293,
        longitude: -89.03092439,
        states: ["al, ms, tn"]
    },
    {
        fullName: "Russell Cave National Monument",
        altName: "",
        parkCode: "ruca",
        latitude: 34.97402063,
        longitude: -85.81560314,
        states: ["al"]
    },
    {
        fullName: "Selma To Montgomery National Historic Trail",
        altName: "",
        parkCode: "semo",
        latitude: 32.27082092,
        longitude: -86.72823702,
        states: ["al"]
    },
    {
        fullName: "Trail Of Tears National Historic Trail",
        altName: "",
        parkCode: "trte",
        latitude: 36.0530021046,
        longitude: -89.6761041963,
        states: ["al, ar, ga, il, ky, mo, nc, ok, tn"]
    },
    {
        fullName: "Tuskegee Airmen National Historic Site",
        altName: "",
        parkCode: "tuai",
        latitude: 32.45538671,
        longitude: -85.67983321,
        states: ["al"]
    },
    {
        fullName: "Tuskegee Institute National Historic Site",
        altName: "",
        parkCode: "tuin",
        latitude: 32.42962115,
        longitude: -85.70488498,
        states: ["al"]
    },
    {
        fullName: "Alagnak Wild River",
        altName: "",
        parkCode: "alag",
        latitude: 59.05180188,
        longitude: -156.112002,
        states: ["ak"]
    },
    {
        fullName: "Alaska Public Lands",
        altName: "",
        parkCode: "anch",
        latitude: 61.2188,
        longitude: -149.894536,
        states: ["ak"]
    },
    {
        fullName: "Aleutian Islands World War II National Historic Area",
        altName: "Aleutian Islands World War Two National Historic Area",
        parkCode: "aleu",
        latitude: 53.9143,
        longitude: -166.5197,
        states: ["ak"]
    },
    {
        fullName: "Aniakchak National Monument and Preserve",
        altName: "",
        parkCode: "ania",
        latitude: 56.85317675,
        longitude: -157.5544362,
        states: ["ak"]
    },
    {
        fullName: "Bering Land Bridge National Preserve",
        altName: "",
        parkCode: "bela",
        latitude: 65.96087902,
        longitude: -164.4086432,
        states: ["ak"]
    },
    {
        fullName: "Cape Krusenstern National Monument",
        altName: "",
        parkCode: "cakr",
        latitude: 67.41499986,
        longitude: -163.5037786,
        states: ["ak"]
    },
    {
        fullName: "Denali National Park and Preserve",
        altName: "",
        parkCode: "dena",
        latitude: 63.29777484,
        longitude: -151.0526568,
        states: ["ak"]
    },
    {
        fullName: "Gates Of The Arctic National Park and Preserve",
        altName: "",
        parkCode: "gaar",
        latitude: 67.75961636,
        longitude: -153.2917758,
        states: ["ak"]
    },
    {
        fullName: "Glacier Bay National Park and Preserve",
        altName: "",
        parkCode: "glba",
        latitude: 58.80086718,
        longitude: -136.8407579,
        states: ["ak"]
    },
    {
        fullName: "Iñupiat Heritage Center",
        altName: "Inupiat Heritage Center",
        parkCode: "inup",
        latitude: 71.29832445,
        longitude: -156.7535863,
        states: ["ak"]
    },
    {
        fullName: "Katmai National Park and Preserve",
        altName: "",
        parkCode: "katm",
        latitude: 58.62235668,
        longitude: -155.0126574,
        states: ["ak"]
    },
    {
        fullName: "Kenai Fjords National Park",
        altName: "",
        parkCode: "kefj",
        latitude: 59.81804414,
        longitude: -150.106502,
        states: ["ak"]
    },
    {
        fullName: "Klondike Gold Rush National Historical Park",
        altName: "",
        parkCode: "klgo",
        latitude: 59.61042373,
        longitude: -135.2618535,
        states: ["ak"]
    },
    {
        fullName: "Kobuk Valley National Park",
        altName: "",
        parkCode: "kova",
        latitude: 67.35631336,
        longitude: -159.2002293,
        states: ["ak"]
    },
    {
        fullName: "Lake Clark National Park and Preserve",
        altName: "",
        parkCode: "lacl",
        latitude: 60.57405857,
        longitude: -153.55535,
        states: ["ak"]
    },
    {
        fullName: "Noatak National Preserve",
        altName: "",
        parkCode: "noat",
        latitude: 68.01027053,
        longitude: -159.831694,
        states: ["ak"]
    },
    {
        fullName: "Sitka National Historical Park",
        altName: "",
        parkCode: "sitk",
        latitude: 57.04718173,
        longitude: -135.3156876,
        states: ["ak"]
    },
    {
        fullName: "Wrangell - Saint Elias National Park and Preserve",
        altName: "Wrangell Saint Elias National Park and Preserve",
        parkCode: "wrst",
        latitude: 61.4182147,
        longitude: -142.6028439,
        states: ["ak"]
    },
    {
        fullName: "Yukon - Charley Rivers National Preserve",
        altName: "Yukon Charley Rivers National Preserve",
        parkCode: "yuch",
        latitude: 65.0935608,
        longitude: -142.7960021,
        states: ["ak"]
    },
    {
        fullName: "Butterfield Overland National Historic Trail",
        altName: "",
        parkCode: "buov",
        latitude: 32.2768237589,
        longitude: -106.796583304,
        states: ["mo, ar, ok, tx, nm, az, ca"]
    },
    {
        fullName: "Canyon de Chelly National Monument",
        altName: "",
        parkCode: "cach",
        latitude: 36.14319567,
        longitude: -109.3388303,
        states: ["az"]
    },
    {
        fullName: "Casa Grande Ruins National Monument",
        altName: "",
        parkCode: "cagr",
        latitude: 32.99702582,
        longitude: -111.5325383,
        states: ["az"]
    },
    {
        fullName: "Chiricahua National Monument",
        altName: "",
        parkCode: "chir",
        latitude: 32.01214618,
        longitude: -109.341607,
        states: ["az"]
    },
    {
        fullName: "Coronado National Memorial",
        altName: "",
        parkCode: "coro",
        latitude: 31.34900397,
        longitude: -110.2561574,
        states: ["az"]
    },
    {
        fullName: "Fort Bowie National Historic Site",
        altName: "",
        parkCode: "fobo",
        latitude: 32.14925942,
        longitude: -109.451132,
        states: ["az"]
    },
    {
        fullName: "Glen Canyon National Recreation Area",
        altName: "",
        parkCode: "glca",
        latitude: 36.9357464677,
        longitude: -111.485594268,
        states: ["AZ, UT"]
    },
    {
        fullName: "Grand Canyon National Park",
        altName: "",
        parkCode: "grca",
        latitude: 36.0001165336,
        longitude: -112.121516363,
        states: ["az"]
    },
    {
        fullName: "Grand Canyon-Parashant National Monument",
        altName: "Grand Canyon Parashant National Monument",
        parkCode: "para",
        latitude: 36.41535465,
        longitude: -113.6682797,
        states: ["az"]
    },
    {
        fullName: "Hubbell Trading Post National Historic Site",
        altName: "",
        parkCode: "hutr",
        latitude: 35.70727324,
        longitude: -109.5599515,
        states: ["az"]
    },
    {
        fullName: "Juan Bautista de Anza National Historic Trail",
        altName: "",
        parkCode: "juba",
        latitude: 33.8743390994,
        longitude: -117.224179857,
        states: ["az, ca"]
    },
    {
        fullName: "Lake Mead National Recreation Area",
        altName: "",
        parkCode: "lake",
        latitude: 35.96622528,
        longitude: -114.3469067,
        states: ["az, nv"]
    },
    {
        fullName: "Montezuma Castle National Monument",
        altName: "",
        parkCode: "moca",
        latitude: 34.62237771,
        longitude: -111.8147857,
        states: ["az"]
    },
    {
        fullName: "Navajo National Monument",
        altName: "",
        parkCode: "nava",
        latitude: 36.71755643,
        longitude: -110.5504015,
        states: ["az"]
    },
    {
        fullName: "Old Spanish National Historic Trail",
        altName: "",
        parkCode: "olsp",
        latitude: 37.0791782514,
        longitude: -112.114693431,
        states: ["az, ca, co, nv, nm, ut"]
    },
    {
        fullName: "Organ Pipe Cactus National Monument",
        altName: "",
        parkCode: "orpi",
        latitude: 32.03585543,
        longitude: -112.8573314,
        states: ["az"]
    },
    {
        fullName: "Petrified Forest National Park",
        altName: "",
        parkCode: "pefo",
        latitude: 34.98387664,
        longitude: -109.7877678,
        states: ["az"]
    },
    {
        fullName: "Pipe Spring National Monument",
        altName: "",
        parkCode: "pisp",
        latitude: 36.86282666,
        longitude: -112.7398567,
        states: ["az"]
    },
    {
        fullName: "Saguaro National Park",
        altName: "",
        parkCode: "sagu",
        latitude: 32.20909636,
        longitude: -110.7574974,
        states: ["az"]
    },
    {
        fullName: "Sunset Crater Volcano National Monument",
        altName: "",
        parkCode: "sucr",
        latitude: 35.37114323,
        longitude: -111.510376,
        states: ["az"]
    },
    {
        fullName: "Tonto National Monument",
        altName: "",
        parkCode: "tont",
        latitude: 33.64842945,
        longitude: -111.1135627,
        states: ["az"]
    },
    {
        fullName: "Tumacácori National Historical Park",
        altName: "Tumacacori National Historical Park",
        parkCode: "tuma",
        latitude: 31.567824,
        longitude: -111.051223,
        states: ["az"]
    },
    {
        fullName: "Tuzigoot National Monument",
        altName: "",
        parkCode: "tuzi",
        latitude: 34.77296377,
        longitude: -112.0279069,
        states: ["az"]
    },
    {
        fullName: "Walnut Canyon National Monument",
        altName: "",
        parkCode: "waca",
        latitude: 35.16822994,
        longitude: -111.5024239,
        states: ["az"]
    },
    {
        fullName: "Wupatki National Monument",
        altName: "",
        parkCode: "wupa",
        latitude: 35.55741077,
        longitude: -111.3957216,
        states: ["az"]
    },
    {
        fullName: "Arkansas Post National Memorial",
        altName: "",
        parkCode: "arpo",
        latitude: 34.00389998,
        longitude: -91.30837178,
        states: ["ar"]
    },
    {
        fullName: "Buffalo National River",
        altName: "",
        parkCode: "buff",
        latitude: 36.04116481,
        longitude: -92.90761584,
        states: ["ar"]
    },
    {
        fullName: "Fort Smith National Historic Site",
        altName: "",
        parkCode: "fosm",
        latitude: 35.38834746,
        longitude: -94.43129079,
        states: ["ar, ok"]
    },
    {
        fullName: "Hot Springs National Park",
        altName: "",
        parkCode: "hosp",
        latitude: 34.52414366,
        longitude: -93.06332936,
        states: ["ar"]
    },
    {
        fullName: "Little Rock Central High School National Historic Site",
        altName: "",
        parkCode: "chsc",
        latitude: 34.7369465,
        longitude: -92.29987899,
        states: ["ar"]
    },
    {
        fullName: "Pea Ridge National Military Park",
        altName: "",
        parkCode: "peri",
        latitude: 36.45438033,
        longitude: -94.03468357,
        states: ["ar"]
    },
    {
        fullName: "President William Jefferson Clinton Birthplace Home National Historic Site",
        altName: "",
        parkCode: "wicl",
        latitude: 33.66758356,
        longitude: -93.59641868,
        states: ["ar"]
    },
    {
        fullName: "Alcatraz Island",
        altName: "",
        parkCode: "alca",
        latitude: 37.82676234,
        longitude: -122.4230206,
        states: ["ca"]
    },
    {
        fullName: "Cabrillo National Monument",
        altName: "",
        parkCode: "cabr",
        latitude: 32.6722503,
        longitude: -117.2415985,
        states: ["ca"]
    },
    {
        fullName: "California National Historic Trail",
        altName: "",
        parkCode: "cali",
        latitude: 42.3999643979,
        longitude: -108.702415369,
        states: ["ca, co, id, ks, mo, ne, nv, or, ut, wy"]
    },
    {
        fullName: "Castle Mountains National Monument",
        altName: "",
        parkCode: "camo",
        latitude: 35.29156348,
        longitude: -115.0935606,
        states: ["ca"]
    },
    {
        fullName: "Channel Islands National Park",
        altName: "",
        parkCode: "chis",
        latitude: 33.98680093,
        longitude: -119.9112735,
        states: ["ca"]
    },
    {
        fullName: "César E. Chávez National Monument",
        altName: "Cesar Chavez National Monument",
        parkCode: "cech",
        latitude: 35.22729389,
        longitude: -118.5615781,
        states: ["ca"]
    },
    {
        fullName: "Death Valley National Park",
        altName: "",
        parkCode: "deva",
        latitude: 36.48753731,
        longitude: -117.134395,
        states: ["ca, nv"]
    },
    {
        fullName: "Devils Postpile National Monument",
        altName: "Devil's Postpile National Monument",
        parkCode: "depo",
        latitude: 37.6152564,
        longitude: -119.0873903,
        states: ["ca"]
    },
    {
        fullName: "Eugene O'Neill National Historic Site",
        altName: "",
        parkCode: "euon",
        latitude: 37.82604456,
        longitude: -122.0271566,
        states: ["ca"]
    },
    {
        fullName: "Fort Point National Historic Site",
        altName: "",
        parkCode: "fopo",
        latitude: 37.80837439,
        longitude: -122.473747,
        states: ["ca"]
    },
    {
        fullName: "Golden Gate National Recreation Area",
        altName: "",
        parkCode: "goga",
        latitude: 37.85982543,
        longitude: -122.6007386,
        states: ["ca"]
    },
    {
        fullName: "John Muir National Historic Site",
        altName: "",
        parkCode: "jomu",
        latitude: 37.9828422,
        longitude: -122.1326097,
        states: ["ca"]
    },
    {
        fullName: "Joshua Tree National Park",
        altName: "",
        parkCode: "jotr",
        latitude: 33.91418525,
        longitude: -115.8398125,
        states: ["ca"]
    },
    {
        fullName: "Lassen Volcanic National Park",
        altName: "",
        parkCode: "lavo",
        latitude: 40.49354575,
        longitude: -121.4075993,
        states: ["ca"]
    },
    {
        fullName: "Lava Beds National Monument",
        altName: "",
        parkCode: "labe",
        latitude: 41.75915823,
        longitude: -121.5172189,
        states: ["ca"]
    },
    {
        fullName: "Manzanar National Historic Site",
        altName: "",
        parkCode: "manz",
        latitude: 36.72559195,
        longitude: -118.1547177,
        states: ["ca"]
    },
    {
        fullName: "Mojave National Preserve",
        altName: "",
        parkCode: "moja",
        latitude: 35.12485941,
        longitude: -115.5168258,
        states: ["ca"]
    },
    {
        fullName: "Muir Woods National Monument",
        altName: "",
        parkCode: "muwo",
        latitude: 37.89658027,
        longitude: -122.5808047,
        states: ["ca"]
    },
    {
        fullName: "Pinnacles National Park",
        altName: "",
        parkCode: "pinn",
        latitude: 36.49029208,
        longitude: -121.1813607,
        states: ["ca"]
    },
    {
        fullName: "Point Reyes National Seashore",
        altName: "",
        parkCode: "pore",
        latitude: 38.05511241,
        longitude: -122.8797804,
        states: ["ca"]
    },
    {
        fullName: "Pony Express National Historic Trail",
        altName: "",
        parkCode: "poex",
        latitude: 42.2365761128,
        longitude: -109.266148417,
        states: ["ca, co, ks, mo, ne, nv, ut, wy"]
    },
    {
        fullName: "Port Chicago Naval Magazine National Memorial",
        altName: "",
        parkCode: "poch",
        latitude: 38.05685472,
        longitude: -122.0301603,
        states: ["ca"]
    },
    {
        fullName: "Presidio of San Francisco",
        altName: "",
        parkCode: "prsf",
        latitude: 37.797,
        longitude: -122.4671,
        states: ["ca"]
    },
    {
        fullName: "Redwood National and State Parks",
        altName: "",
        parkCode: "redw",
        latitude: 41.37237268,
        longitude: -124.0318129,
        states: ["ca"]
    },
    {
        fullName: "Rosie the Riveter World War II Home Front National Historical Park",
        altName: "Rosie the Riveter World War Two Home Front National Historical Park",
        parkCode: "rori",
        latitude: 37.90999027,
        longitude: -122.360156,
        states: ["ca"]
    },
    {
        fullName: "San Francisco Maritime National Historical Park",
        altName: "",
        parkCode: "safr",
        latitude: 37.81005871,
        longitude: -122.4244415,
        states: ["ca"]
    },
    {
        fullName: "Santa Monica Mountains National Recreation Area",
        altName: "",
        parkCode: "samo",
        latitude: 34.09777606,
        longitude: -118.7708619,
        states: ["ca"]
    },
    {
        fullName: "Sequoia and Kings Canyon National Parks",
        altName: "",
        parkCode: "seki",
        latitude: 36.71277299,
        longitude: -118.587429,
        states: ["ca"]
    },
    {
        fullName: "Tule Lake National Monument",
        altName: "",
        parkCode: "tule",
        latitude: 41.88727902,
        longitude: -121.3744818,
        states: ["ca"]
    },
    {
        fullName: "Whiskeytown National Recreation Area",
        altName: "",
        parkCode: "whis",
        latitude: 40.61359941,
        longitude: -122.6022657,
        states: ["ca"]
    },
    {
        fullName: "Yosemite National Park",
        altName: "",
        parkCode: "yose",
        latitude: 37.84883288,
        longitude: -119.5571873,
        states: ["ca"]
    },
    {
        fullName: "Amache National Historic Site",
        altName: "",
        parkCode: "amch",
        latitude: 38.04962,
        longitude: -102.32903,
        states: ["co"]
    },
    {
        fullName: "Bent's Old Fort National Historic Site",
        altName: "Bents Old Fort National Historic Site",
        parkCode: "beol",
        latitude: 38.03977546,
        longitude: -103.4266499,
        states: ["co"]
    },
    {
        fullName: "Black Canyon Of The Gunnison National Park",
        altName: "",
        parkCode: "blca",
        latitude: 38.57779869,
        longitude: -107.7242756,
        states: ["co"]
    },
    {
        fullName: "Colorado National Monument",
        altName: "",
        parkCode: "colm",
        latitude: 39.05045016,
        longitude: -108.6920709,
        states: ["co"]
    },
    {
        fullName: "Curecanti National Recreation Area",
        altName: "",
        parkCode: "cure",
        latitude: 38.46584558,
        longitude: -107.3303371,
        states: ["co"]
    },
    {
        fullName: "Dinosaur National Monument",
        altName: "",
        parkCode: "dino",
        latitude: 40.50739742,
        longitude: -108.9333714,
        states: ["co, ut"]
    },
    {
        fullName: "Florissant Fossil Beds National Monument",
        altName: "",
        parkCode: "flfo",
        latitude: 38.91260586,
        longitude: -105.2803396,
        states: ["co"]
    },
    {
        fullName: "Great Sand Dunes National Park and Preserve",
        altName: "",
        parkCode: "grsa",
        latitude: 37.79256812,
        longitude: -105.5919572,
        states: ["co"]
    },
    {
        fullName: "Hovenweep National Monument",
        altName: "",
        parkCode: "hove",
        latitude: 37.39134092,
        longitude: -109.0047977,
        states: ["co, ut"]
    },
    {
        fullName: "Mesa Verde National Park",
        altName: "",
        parkCode: "meve",
        latitude: 37.23908345,
        longitude: -108.4624032,
        states: ["co"]
    },
    {
        fullName: "Rocky Mountain National Park",
        altName: "",
        parkCode: "romo",
        latitude: 40.3556924,
        longitude: -105.6972879,
        states: ["co"]
    },
    {
        fullName: "Sand Creek Massacre National Historic Site",
        altName: "",
        parkCode: "sand",
        latitude: 38.56414189,
        longitude: -102.5169542,
        states: ["co"]
    },
    {
        fullName: "Santa Fe National Historic Trail",
        altName: "",
        parkCode: "safe",
        latitude: 37.7276522226,
        longitude: -99.921969227,
        states: ["co, ks, mo, nm, ok"]
    },
    {
        fullName: "Yucca House National Monument",
        altName: "",
        parkCode: "yuho",
        latitude: 37.24778944,
        longitude: -108.6861274,
        states: ["co"]
    },
    {
        fullName: "Appalachian National Scenic Trail",
        altName: "",
        parkCode: "appa",
        latitude: 40.41029575,
        longitude: -76.4337548,
        states: ["ct, ga, ma, md, me, nc, nh, nj, ny, pa, tn, va, vt, wv"]
    },
    {
        fullName: "Coltsville National Historical Park",
        altName: "",
        parkCode: "colt",
        latitude: 42.4677505493,
        longitude: -73.203666687,
        states: ["ct"]
    },
    {
        fullName: "New England National Scenic Trail",
        altName: "",
        parkCode: "neen",
        latitude: 42.2915819137,
        longitude: -72.5242767334,
        states: ["ma, ct"]
    },
    {
        fullName: "Washington-Rochambeau Revolutionary Route National Historic Trail",
        altName: "Washington Rochambeau Revolutionary Route National Historic Trail",
        parkCode: "waro",
        latitude: 40.0958204557,
        longitude: -74.8563515109,
        states: ["ma, ri, ct, ny, nj, pa, de, md, va, dc"]
    },
    {
        fullName: "Weir Farm National Historical Park",
        altName: "",
        parkCode: "wefa",
        latitude: 41.25886268,
        longitude: -73.45452542,
        states: ["ct"]
    },
    {
        fullName: "Captain John Smith Chesapeake National Historic Trail",
        altName: "",
        parkCode: "cajo",
        latitude: 38.971601,
        longitude: -76.483355,
        states: ["va, md, de, dc, pa, ny"]
    },
    {
        fullName: "Chesapeake Bay",
        altName: "",
        parkCode: "cbpo",
        latitude: 38.971601,
        longitude: -76.483355,
        states: ["dc, de, md, ny, pa, va, wv"]
    },
    {
        fullName: "Big Cypress National Preserve",
        altName: "",
        parkCode: "bicy",
        latitude: 25.97079602,
        longitude: -81.08120629,
        states: ["fl"]
    },
    {
        fullName: "Biscayne National Park",
        altName: "",
        parkCode: "bisc",
        latitude: 25.490587,
        longitude: -80.21023851,
        states: ["fl"]
    },
    {
        fullName: "Canaveral National Seashore",
        altName: "",
        parkCode: "cana",
        latitude: 28.78637529,
        longitude: -80.75419576,
        states: ["fl"]
    },
    {
        fullName: "Castillo de San Marcos National Monument",
        altName: "",
        parkCode: "casa",
        latitude: 29.89785701,
        longitude: -81.31217173,
        states: ["fl"]
    },
    {
        fullName: "De Soto National Memorial",
        altName: "",
        parkCode: "deso",
        latitude: 27.52272613,
        longitude: -82.64335416,
        states: ["fl"]
    },
    {
        fullName: "Dry Tortugas National Park",
        altName: "",
        parkCode: "drto",
        latitude: 24.628741,
        longitude: -82.87319,
        states: ["fl"]
    },
    {
        fullName: "Everglades National Park",
        altName: "",
        parkCode: "ever",
        latitude: 25.37294225,
        longitude: -80.88200301,
        states: ["fl"]
    },
    {
        fullName: "Fort Matanzas National Monument",
        altName: "",
        parkCode: "foma",
        latitude: 29.7121489,
        longitude: -81.23567535,
        states: ["fl"]
    },
    {
        fullName: "Timucuan Ecological and Historic Preserve",
        altName: "",
        parkCode: "timu",
        latitude: 30.47251894,
        longitude: -81.49950104,
        states: ["fl"]
    },
    {
        fullName: "Andersonville National Historic Site",
        altName: "",
        parkCode: "ande",
        latitude: 32.19831758,
        longitude: -84.12988898,
        states: ["ga"]
    },
    {
        fullName: "Chattahoochee River National Recreation Area",
        altName: "",
        parkCode: "chat",
        latitude: 33.99698333,
        longitude: -84.28953177,
        states: ["ga"]
    },
    {
        fullName: "Chickamauga and Chattanooga National Military Park",
        altName: "",
        parkCode: "chch",
        latitude: 34.94317623,
        longitude: -85.28749537,
        states: ["ga, tn"]
    },
    {
        fullName: "Cumberland Island National Seashore",
        altName: "",
        parkCode: "cuis",
        latitude: 30.85857484,
        longitude: -81.45253575,
        states: ["ga"]
    },
    {
        fullName: "Fort Frederica National Monument",
        altName: "",
        parkCode: "fofr",
        latitude: 31.2214699,
        longitude: -81.39452014,
        states: ["ga"]
    },
    {
        fullName: "Fort Pulaski National Monument",
        altName: "",
        parkCode: "fopu",
        latitude: 32.0308274,
        longitude: -80.93361681,
        states: ["ga"]
    },
    {
        fullName: "Jimmy Carter National Historical Park",
        altName: "",
        parkCode: "jica",
        latitude: 32.03611,
        longitude: -84.3924,
        states: ["ga"]
    },
    {
        fullName: "Kennesaw Mountain National Battlefield Park",
        altName: "",
        parkCode: "kemo",
        latitude: 33.95370717,
        longitude: -84.59214186,
        states: ["ga"]
    },
    {
        fullName: "Martin Luther King, Jr. National Historical Park",
        altName: "Martin Luther King Jr. National Historical Park",
        parkCode: "malu",
        latitude: 33.75618241,
        longitude: -84.37256768,
        states: ["ga"]
    },
    {
        fullName: "Ocmulgee Mounds National Historical Park",
        altName: "",
        parkCode: "ocmu",
        latitude: 32.83816576,
        longitude: -83.60224853,
        states: ["ga"]
    },
    {
        fullName: "Ala Kahakai National Historic Trail",
        altName: "",
        parkCode: "alka",
        latitude: 19.144668109,
        longitude: -155.890734294,
        states: ["hi"]
    },
    {
        fullName: "Haleakalā National Park",
        altName: "Haleakala National Park",
        parkCode: "hale",
        latitude: 20.70693015,
        longitude: -156.1591775,
        states: ["hi"]
    },
    {
        fullName: "Hawai'i Volcanoes National Park",
        altName: "Hawaii Volcanoes National Park",
        parkCode: "havo",
        latitude: 19.3355036,
        longitude: -155.4700257,
        states: ["hi"]
    },
    {
        fullName: "Honouliuli National Historic Site",
        altName: "",
        parkCode: "hono",
        latitude: 21.38817536,
        longitude: -158.0574991,
        states: ["hi"]
    },
    {
        fullName: "Kalaupapa National Historical Park",
        altName: "",
        parkCode: "kala",
        latitude: 21.1731108,
        longitude: -156.9511609,
        states: ["hi"]
    },
    {
        fullName: "Kaloko-Honokōhau National Historical Park",
        altName: "Kaloko Honokohau National Historical Park",
        parkCode: "kaho",
        latitude: 19.68083237,
        longitude: -156.0306932,
        states: ["hi"]
    },
    {
        fullName: "Pearl Harbor National Memorial",
        altName: "",
        parkCode: "valr",
        latitude: 21.3670699388,
        longitude: -157.938578898,
        states: ["hi"]
    },
    {
        fullName: "Pu'uhonua o Hōnaunau National Historical Park",
        altName: "Pu uhonua o Honaunau National Historical Park",
        parkCode: "puho",
        latitude: 19.41268627,
        longitude: -155.9008789,
        states: ["hi"]
    },
    {
        fullName: "Pu'ukoholā Heiau National Historic Site",
        altName: "Pu ukohola Heiau National Historic Site",
        parkCode: "puhe",
        latitude: 20.02772186,
        longitude: -155.8211629,
        states: ["hi"]
    },
    {
        fullName: "City Of Rocks National Reserve",
        altName: "",
        parkCode: "ciro",
        latitude: 42.0699024,
        longitude: -113.7124097,
        states: ["id"]
    },
    {
        fullName: "Craters Of The Moon National Monument and Preserve",
        altName: "",
        parkCode: "crmo",
        latitude: 43.20345611,
        longitude: -113.4791609,
        states: ["id"]
    },
    {
        fullName: "Hagerman Fossil Beds National Monument",
        altName: "",
        parkCode: "hafo",
        latitude: 42.79074114,
        longitude: -114.9443074,
        states: ["id"]
    },
    {
        fullName: "Ice Age Floods National Geologic Trail",
        altName: "",
        parkCode: "iafl",
        latitude: 46.5669309008,
        longitude: -118.992564971,
        states: ["wa, or, id, mt"]
    },
    {
        fullName: "Lewis and Clark National Historic Trail",
        altName: "",
        parkCode: "lecl",
        latitude: 41.2646141052,
        longitude: -95.9245147705,
        states: ["ia, id, il, in, ks, ky, mo, mt, ne, nd, oh, or, pa, sd, wa, wv"]
    },
    {
        fullName: "Nez Perce National Historical Park",
        altName: "",
        parkCode: "nepe",
        latitude: 46.07019093,
        longitude: -115.8761258,
        states: ["id, mt, or, wa"]
    },
    {
        fullName: "Oregon National Historic Trail",
        altName: "",
        parkCode: "oreg",
        latitude: 41.9876977831,
        longitude: -109.634200841,
        states: ["id, ks, mo, ne, or, wa, wy"]
    },
    {
        fullName: "Yellowstone National Park",
        altName: "",
        parkCode: "yell",
        latitude: 44.59824417,
        longitude: -110.5471695,
        states: ["id, mt, wy"]
    },
    {
        fullName: "Emmett Till and Mamie Till-Mobley National Monument",
        altName: "Emmett Till and Mamie Till Mobley National Monument",
        parkCode: "till",
        latitude: 33.9711,
        longitude: -90.3698,
        states: ["il, ms"]
    },
    {
        fullName: "Lincoln Home National Historic Site",
        altName: "",
        parkCode: "liho",
        latitude: 39.79715642,
        longitude: -89.64513397,
        states: ["il"]
    },
    {
        fullName: "Mormon Pioneer National Historic Trail",
        altName: "",
        parkCode: "mopi",
        latitude: 41.2650321741,
        longitude: -101.84083756,
        states: ["il, ia, ne, ut, wy"]
    },
    {
        fullName: "New Philadelphia National Historic Site",
        altName: "",
        parkCode: "neph",
        latitude: 39.69803,
        longitude: -90.96131,
        states: ["il"]
    },
    {
        fullName: "Pullman National Historical Park",
        altName: "",
        parkCode: "pull",
        latitude: 41.69429163,
        longitude: -87.60873824,
        states: ["il"]
    },
    {
        fullName: "George Rogers Clark National Historical Park",
        altName: "",
        parkCode: "gero",
        latitude: 38.67912659,
        longitude: -87.53545212,
        states: ["in"]
    },
    {
        fullName: "Indiana Dunes National Park",
        altName: "",
        parkCode: "indu",
        latitude: 41.63765525,
        longitude: -87.09647445,
        states: ["in"]
    },
    {
        fullName: "Lincoln Boyhood National Memorial",
        altName: "",
        parkCode: "libo",
        latitude: 38.11817004,
        longitude: -86.99656861,
        states: ["in"]
    },
    {
        fullName: "Effigy Mounds National Monument",
        altName: "",
        parkCode: "efmo",
        latitude: 43.08095081,
        longitude: -91.19687517,
        states: ["ia"]
    },
    {
        fullName: "Herbert Hoover National Historic Site",
        altName: "",
        parkCode: "heho",
        latitude: 41.66793558,
        longitude: -91.35232139,
        states: ["ia"]
    },
    {
        fullName: "Brown v. Board of Education National Historical Park",
        altName: "Brown v Board of Education National Historical Park",
        parkCode: "brvb",
        latitude: 39.03787665,
        longitude: -95.67614437,
        states: ["ks"]
    },
    {
        fullName: "Fort Larned National Historic Site",
        altName: "",
        parkCode: "fols",
        latitude: 38.18047491,
        longitude: -99.21836664,
        states: ["ks"]
    },
    {
        fullName: "Fort Scott National Historic Site",
        altName: "",
        parkCode: "fosc",
        latitude: 37.84358849,
        longitude: -94.70429174,
        states: ["ks"]
    },
    {
        fullName: "Nicodemus National Historic Site",
        altName: "",
        parkCode: "nico",
        latitude: 39.39167606,
        longitude: -99.61680329,
        states: ["ks"]
    },
    {
        fullName: "Tallgrass Prairie National Preserve",
        altName: "",
        parkCode: "tapr",
        latitude: 38.44023613,
        longitude: -96.5670822,
        states: ["ks"]
    },
    {
        fullName: "Abraham Lincoln Birthplace National Historical Park",
        altName: "",
        parkCode: "abli",
        latitude: 37.5858662,
        longitude: -85.67330523,
        states: ["ky"]
    },
    {
        fullName: "Camp Nelson National Monument",
        altName: "",
        parkCode: "cane",
        latitude: 37.7970179913,
        longitude: -84.598168306,
        states: ["ky"]
    },
    {
        fullName: "Cumberland Gap National Historical Park",
        altName: "",
        parkCode: "cuga",
        latitude: 36.62503076,
        longitude: -83.6114083,
        states: ["ky, tn, va"]
    },
    {
        fullName: "Mammoth Cave National Park",
        altName: "",
        parkCode: "maca",
        latitude: 37.19760458,
        longitude: -86.13090198,
        states: ["ky"]
    },
    {
        fullName: "Mill Springs Battlefield National Monument",
        altName: "",
        parkCode: "misp",
        latitude: 37.0688158602,
        longitude: -84.7375361304,
        states: ["ky"]
    },
    {
        fullName: "Cane River Creole National Historical Park",
        altName: "",
        parkCode: "cari",
        latitude: 31.65408447,
        longitude: -93.00131977,
        states: ["la"]
    },
    {
        fullName: "Jean Lafitte National Historical Park and Preserve",
        altName: "",
        parkCode: "jela",
        latitude: 29.81739855,
        longitude: -90.1402241,
        states: ["la"]
    },
    {
        fullName: "New Orleans Jazz National Historical Park",
        altName: "",
        parkCode: "jazz",
        latitude: 29.96303129,
        longitude: -90.06749669,
        states: ["la"]
    },
    {
        fullName: "Poverty Point National Monument",
        altName: "",
        parkCode: "popo",
        latitude: 32.6424361,
        longitude: -91.40829834,
        states: ["la"]
    },
    {
        fullName: "Vicksburg National Military Park",
        altName: "",
        parkCode: "vick",
        latitude: 32.3621286,
        longitude: -90.85030186,
        states: ["ms, la"]
    },
    {
        fullName: "Acadia National Park",
        altName: "",
        parkCode: "acad",
        latitude: 44.409286,
        longitude: -68.247501,
        states: ["me"]
    },
    {
        fullName: "Katahdin Woods and Waters National Monument",
        altName: "",
        parkCode: "kaww",
        latitude: 45.9567565918,
        longitude: -68.7122879028,
        states: ["me"]
    },
    {
        fullName: "Maine Acadian Culture",
        altName: "",
        parkCode: "maac",
        latitude: 47.25102114,
        longitude: -68.59447532,
        states: ["me"]
    },
    {
        fullName: "Roosevelt Campobello International Park",
        altName: "",
        parkCode: "roca",
        latitude: 44.8736,
        longitude: -66.9621,
        states: ["me"]
    },
    {
        fullName: "Saint Croix Island International Historic Site",
        altName: "",
        parkCode: "sacr",
        latitude: 45.12858838,
        longitude: -67.13363651,
        states: ["me"]
    },
    {
        fullName: "Antietam National Battlefield",
        altName: "",
        parkCode: "anti",
        latitude: 39.46763452,
        longitude: -77.73828017,
        states: ["md"]
    },
    {
        fullName: "Assateague Island National Seashore",
        altName: "",
        parkCode: "asis",
        latitude: 38.05593172,
        longitude: -75.24524611,
        states: ["md, va"]
    },
    {
        fullName: "Baltimore-Washington Parkway",
        altName: "Baltimore Washington Parkway",
        parkCode: "bawa",
        latitude: 39.02604289,
        longitude: -76.85410921,
        states: ["md"]
    },
    {
        fullName: "Catoctin Mountain Park",
        altName: "",
        parkCode: "cato",
        latitude: 39.65068457,
        longitude: -77.46417665,
        states: ["md"]
    },
    {
        fullName: "Chesapeake and Ohio Canal National Historical Park",
        altName: "",
        parkCode: "choh",
        latitude: 39.000283692,
        longitude: -77.2481399539,
        states: ["dc, md, wv"]
    },
    {
        fullName: "Civil War Defenses of Washington",
        altName: "",
        parkCode: "cwdw",
        latitude: 38.9644,
        longitude: -77.0292,
        states: ["dc, md, va"]
    },
    {
        fullName: "Clara Barton National Historic Site",
        altName: "",
        parkCode: "clba",
        latitude: 38.96762882,
        longitude: -77.14009689,
        states: ["md"]
    },
    {
        fullName: "Fort Foote Park",
        altName: "",
        parkCode: "fofo",
        latitude: 38.76901785,
        longitude: -77.02812387,
        states: ["md"]
    },
    {
        fullName: "Fort McHenry National Monument and Historic Shrine",
        altName: "",
        parkCode: "fomc",
        latitude: 39.26395314,
        longitude: -76.58044165,
        states: ["md"]
    },
    {
        fullName: "Fort Washington Park",
        altName: "",
        parkCode: "fowa",
        latitude: 38.7117,
        longitude: -77.0302,
        states: ["md"]
    },
    {
        fullName: "George Washington Memorial Parkway",
        altName: "",
        parkCode: "gwmp",
        latitude: 38.9628,
        longitude: -77.1495,
        states: ["dc, md, va"]
    },
    {
        fullName: "Glen Echo Park",
        altName: "",
        parkCode: "glec",
        latitude: 38.96912315,
        longitude: -77.14012206,
        states: ["md"]
    },
    {
        fullName: "Greenbelt Park",
        altName: "",
        parkCode: "gree",
        latitude: 38.98328267,
        longitude: -76.89722133,
        states: ["md"]
    },
    {
        fullName: "Hampton National Historic Site",
        altName: "",
        parkCode: "hamp",
        latitude: 39.4175296,
        longitude: -76.58781182,
        states: ["md"]
    },
    {
        fullName: "Harmony Hall",
        altName: "",
        parkCode: "haha",
        latitude: 38.74646351,
        longitude: -77.00377069,
        states: ["md"]
    },
    {
        fullName: "Harpers Ferry National Historical Park",
        altName: "Harper's Ferry National Historical Park",
        parkCode: "hafe",
        latitude: 39.31865949,
        longitude: -77.74088546,
        states: ["wv, va, md"]
    },
    {
        fullName: "Harriet Tubman Underground Railroad National Historical Park",
        altName: "",
        parkCode: "hatu",
        latitude: 38.4548643511,
        longitude: -76.1373451376,
        states: ["md"]
    },
    {
        fullName: "Monocacy National Battlefield",
        altName: "",
        parkCode: "mono",
        latitude: 39.36084236,
        longitude: -77.39637677,
        states: ["md"]
    },
    {
        fullName: "Oxon Cove Park and Oxon Hill Farm",
        altName: "",
        parkCode: "oxhi",
        latitude: 38.80578214,
        longitude: -77.01131457,
        states: ["md"]
    },
    {
        fullName: "Piscataway Park",
        altName: "",
        parkCode: "pisc",
        latitude: 38.6929,
        longitude: -77.067,
        states: ["md"]
    },
    {
        fullName: "Potomac Heritage National Scenic Trail",
        altName: "",
        parkCode: "pohe",
        latitude: 39.15060133,
        longitude: -77.52301085,
        states: ["dc, md, pa, va"]
    },
    {
        fullName: "Thomas Stone National Historic Site",
        altName: "",
        parkCode: "thst",
        latitude: 38.52934443,
        longitude: -77.037813,
        states: ["md"]
    },
    {
        fullName: "Adams National Historical Park",
        altName: "",
        parkCode: "adam",
        latitude: 42.2553961,
        longitude: -71.01160356,
        states: ["ma"]
    },
    {
        fullName: "Boston African American National Historic Site",
        altName: "",
        parkCode: "boaf",
        latitude: 42.35908295,
        longitude: -71.06764181,
        states: ["ma"]
    },
    {
        fullName: "Boston Harbor Islands National Recreation Area",
        altName: "",
        parkCode: "boha",
        latitude: 42.30905526,
        longitude: -70.93941138,
        states: ["ma"]
    },
    {
        fullName: "Boston National Historical Park",
        altName: "",
        parkCode: "bost",
        latitude: 42.36957407,
        longitude: -71.05536763,
        states: ["ma"]
    },
    {
        fullName: "Cape Cod National Seashore",
        altName: "",
        parkCode: "caco",
        latitude: 41.92381465,
        longitude: -70.04319832,
        states: ["ma"]
    },
    {
        fullName: "Frederick Law Olmsted National Historic Site",
        altName: "",
        parkCode: "frla",
        latitude: 42.32424266,
        longitude: -71.13202567,
        states: ["ma"]
    },
    {
        fullName: "John Fitzgerald Kennedy National Historic Site",
        altName: "",
        parkCode: "jofi",
        latitude: 42.34693694,
        longitude: -71.12323846,
        states: ["ma"]
    },
    {
        fullName: "Longfellow House Washington's Headquarters National Historic Site",
        altName: "Longfellow House Washingtons Headquarters National Historic Site",
        parkCode: "long",
        latitude: 42.37698854,
        longitude: -71.12636956,
        states: ["ma"]
    },
    {
        fullName: "Lowell National Historical Park",
        altName: "",
        parkCode: "lowe",
        latitude: 42.6455371,
        longitude: -71.31588673,
        states: ["ma"]
    },
    {
        fullName: "Minute Man National Historical Park",
        altName: "",
        parkCode: "mima",
        latitude: 42.4562778,
        longitude: -71.30738884,
        states: ["ma"]
    },
    {
        fullName: "New Bedford Whaling National Historical Park",
        altName: "",
        parkCode: "nebe",
        latitude: 41.63540552,
        longitude: -70.92322321,
        states: ["ma"]
    },
    {
        fullName: "Salem Maritime National Historic Site",
        altName: "",
        parkCode: "sama",
        latitude: 42.52024529,
        longitude: -70.88640867,
        states: ["ma"]
    },
    {
        fullName: "Saugus Iron Works National Historic Site",
        altName: "",
        parkCode: "sair",
        latitude: 42.46830664,
        longitude: -71.0076953,
        states: ["ma"]
    },
    {
        fullName: "Springfield Armory National Historic Site",
        altName: "",
        parkCode: "spar",
        latitude: 42.1086368,
        longitude: -72.57967415,
        states: ["ma"]
    },
    {
        fullName: "Isle Royale National Park",
        altName: "",
        parkCode: "isro",
        latitude: 48.01145819,
        longitude: -88.82780657,
        states: ["mi"]
    },
    {
        fullName: "Keweenaw National Historical Park",
        altName: "",
        parkCode: "kewe",
        latitude: 47.1792308,
        longitude: -88.52275344,
        states: ["mi"]
    },
    {
        fullName: "North Country National Scenic Trail",
        altName: "",
        parkCode: "noco",
        latitude: 46.334400743,
        longitude: -90.8165630499,
        states: ["mi, mn, nd, ny, oh, pa, vt, wi"]
    },
    {
        fullName: "Pictured Rocks National Lakeshore",
        altName: "",
        parkCode: "piro",
        latitude: 46.56435642,
        longitude: -86.31628733,
        states: ["mi"]
    },
    {
        fullName: "River Raisin National Battlefield Park",
        altName: "",
        parkCode: "rira",
        latitude: 41.91291085,
        longitude: -83.37620464,
        states: ["mi"]
    },
    {
        fullName: "Sleeping Bear Dunes National Lakeshore",
        altName: "",
        parkCode: "slbe",
        latitude: 44.92844962,
        longitude: -86.02706591,
        states: ["mi"]
    },
    {
        fullName: "Grand Portage National Monument",
        altName: "",
        parkCode: "grpo",
        latitude: 47.99294217,
        longitude: -89.75573031,
        states: ["mn"]
    },
    {
        fullName: "Mississippi National River and Recreation Area",
        altName: "",
        parkCode: "miss",
        latitude: 44.942487,
        longitude: -93.098712,
        states: ["mn"]
    },
    {
        fullName: "Pipestone National Monument",
        altName: "",
        parkCode: "pipe",
        latitude: 44.01351958,
        longitude: -96.32475523,
        states: ["mn"]
    },
    {
        fullName: "Saint Croix National Scenic Riverway",
        altName: "",
        parkCode: "sacn",
        latitude: 45.70019235,
        longitude: -92.36126685,
        states: ["wi, mn"]
    },
    {
        fullName: "Voyageurs National Park",
        altName: "",
        parkCode: "voya",
        latitude: 48.48370609,
        longitude: -92.8382913,
        states: ["mn"]
    },
    {
        fullName: "Brices Cross Roads National Battlefield Site",
        altName: "",
        parkCode: "brcr",
        latitude: 34.50611958,
        longitude: -88.72889343,
        states: ["ms"]
    },
    {
        fullName: "Gulf Islands National Seashore",
        altName: "",
        parkCode: "guis",
        latitude: 30.3211,
        longitude: -87.2304,
        states: ["fl, ms"]
    },
    {
        fullName: "Medgar and Myrlie Evers Home National Monument",
        altName: "",
        parkCode: "memy",
        latitude: 32.34096274,
        longitude: -90.21264553,
        states: ["ms"]
    },
    {
        fullName: "Natchez National Historical Park",
        altName: "",
        parkCode: "natc",
        latitude: 31.54697621,
        longitude: -91.39040665,
        states: ["ms"]
    },
    {
        fullName: "Shiloh National Military Park",
        altName: "",
        parkCode: "shil",
        latitude: 35.13850907,
        longitude: -88.3421072,
        states: ["tn, ms"]
    },
    {
        fullName: "Tupelo National Battlefield",
        altName: "",
        parkCode: "tupe",
        latitude: 34.25557705,
        longitude: -88.73708623,
        states: ["ms"]
    },
    {
        fullName: "Gateway Arch National Park",
        altName: "",
        parkCode: "jeff",
        latitude: 38.6258069,
        longitude: -90.1892508,
        states: ["mo"]
    },
    {
        fullName: "George Washington Carver National Monument",
        altName: "",
        parkCode: "gwca",
        latitude: 36.9871322,
        longitude: -94.35522737,
        states: ["mo"]
    },
    {
        fullName: "Harry S. Truman National Historic Site",
        altName: "Harry Truman National Historic Site",
        parkCode: "hstr",
        latitude: 38.92711967,
        longitude: -94.5162488,
        states: ["mo"]
    },
    {
        fullName: "Ozark National Scenic Riverways",
        altName: "",
        parkCode: "ozar",
        latitude: 37.13968894,
        longitude: -91.25709817,
        states: ["mo"]
    },
    {
        fullName: "Ste. Geneviève National Historical Park",
        altName: "Saint Genevieve National Historical Park",
        parkCode: "stge",
        latitude: 37.9792171421,
        longitude: -90.0432157516,
        states: ["mo"]
    },
    {
        fullName: "Ulysses S. Grant National Historic Site",
        altName: "Ulysses Grant National Historic Site",
        parkCode: "ulsg",
        latitude: 38.55182374,
        longitude: -90.35169255,
        states: ["mo"]
    },
    {
        fullName: "Wilson's Creek National Battlefield",
        altName: "Wilsons Creek National Battlefield",
        parkCode: "wicr",
        latitude: 37.1000127,
        longitude: -93.40986704,
        states: ["mo"]
    },
    {
        fullName: "Big Hole National Battlefield",
        altName: "",
        parkCode: "biho",
        latitude: 45.64647324,
        longitude: -113.6458443,
        states: ["mt"]
    },
    {
        fullName: "Glacier National Park",
        altName: "",
        parkCode: "glac",
        latitude: 48.68414678,
        longitude: -113.8009306,
        states: ["mt"]
    },
    {
        fullName: "Grant-Kohrs Ranch National Historic Site",
        altName: "Grant Kohrs Ranch National Historic Site",
        parkCode: "grko",
        latitude: 46.41358923,
        longitude: -112.7467024,
        states: ["mt"]
    },
    {
        fullName: "Little Bighorn Battlefield National Monument",
        altName: "",
        parkCode: "libi",
        latitude: 45.55633048,
        longitude: -107.4183614,
        states: ["mt"]
    },
    {
        fullName: "Agate Fossil Beds National Monument",
        altName: "",
        parkCode: "agfo",
        latitude: 42.42170419,
        longitude: -103.753886,
        states: ["ne"]
    },
    {
        fullName: "Homestead National Historical Park",
        altName: "",
        parkCode: "home",
        latitude: 40.28802381,
        longitude: -96.83387781,
        states: ["ne"]
    },
    {
        fullName: "Niobrara National Scenic River",
        altName: "",
        parkCode: "niob",
        latitude: 42.79413083,
        longitude: -99.91870646,
        states: ["ne"]
    },
    {
        fullName: "Scotts Bluff National Monument",
        altName: "",
        parkCode: "scbl",
        latitude: 41.83464193,
        longitude: -103.7071351,
        states: ["ne"]
    },
    {
        fullName: "Great Basin National Park",
        altName: "",
        parkCode: "grba",
        latitude: 38.94617378,
        longitude: -114.2579782,
        states: ["nv"]
    },
    {
        fullName: "Tule Springs Fossil Beds National Monument",
        altName: "",
        parkCode: "tusk",
        latitude: 36.3893217,
        longitude: -115.3202223,
        states: ["nv"]
    },
    {
        fullName: "Saint-Gaudens National Historical Park",
        altName: "Saint Gaudens National Historical Park",
        parkCode: "saga",
        latitude: 43.4997238,
        longitude: -72.37333969,
        states: ["nh"]
    },
    {
        fullName: "Great Egg Harbor River",
        altName: "",
        parkCode: "greg",
        latitude: 39.3042,
        longitude: -74.6497,
        states: ["nj"]
    },
    {
        fullName: "Morristown National Historical Park",
        altName: "",
        parkCode: "morr",
        latitude: 40.7650755,
        longitude: -74.53455122,
        states: ["nj"]
    },
    {
        fullName: "New Jersey Pinelands National Reserve",
        altName: "",
        parkCode: "pine",
        latitude: 39.9384,
        longitude: -74.625,
        states: ["nj"]
    },
    {
        fullName: "Paterson Great Falls National Historical Park",
        altName: "",
        parkCode: "pagr",
        latitude: 40.91584645,
        longitude: -74.18021494,
        states: ["nj"]
    },
    {
        fullName: "Thomas Edison National Historical Park",
        altName: "",
        parkCode: "edis",
        latitude: 40.78549896,
        longitude: -74.23821139,
        states: ["nj"]
    },
    {
        fullName: "Aztec Ruins National Monument",
        altName: "",
        parkCode: "azru",
        latitude: 36.83682216,
        longitude: -107.9999245,
        states: ["nm"]
    },
    {
        fullName: "Bandelier National Monument",
        altName: "",
        parkCode: "band",
        latitude: 35.77898596,
        longitude: -106.3317124,
        states: ["nm"]
    },
    {
        fullName: "Capulin Volcano National Monument",
        altName: "",
        parkCode: "cavo",
        latitude: 36.78171096,
        longitude: -103.9710427,
        states: ["nm"]
    },
    {
        fullName: "Carlsbad Caverns National Park",
        altName: "",
        parkCode: "cave",
        latitude: 32.14089463,
        longitude: -104.5529688,
        states: ["nm"]
    },
    {
        fullName: "Chaco Culture National Historical Park",
        altName: "",
        parkCode: "chcu",
        latitude: 36.03963414,
        longitude: -107.9560076,
        states: ["nm"]
    },
    {
        fullName: "El Malpais National Monument",
        altName: "",
        parkCode: "elma",
        latitude: 34.88422799,
        longitude: -107.9950948,
        states: ["nm"]
    },
    {
        fullName: "El Morro National Monument",
        altName: "",
        parkCode: "elmo",
        latitude: 35.03895916,
        longitude: -108.3463984,
        states: ["nm"]
    },
    {
        fullName: "Fort Union National Monument",
        altName: "",
        parkCode: "foun",
        latitude: 35.90700629,
        longitude: -105.0145185,
        states: ["nm"]
    },
    {
        fullName: "Gila Cliff Dwellings National Monument",
        altName: "",
        parkCode: "gicl",
        latitude: 33.22715258,
        longitude: -108.2706711,
        states: ["nm"]
    },
    {
        fullName: "Manhattan Project National Historical Park",
        altName: "",
        parkCode: "mapr",
        latitude: 35.88096,
        longitude: -106.30214,
        states: ["nm, wa, tn"]
    },
    {
        fullName: "Pecos National Historical Park",
        altName: "",
        parkCode: "peco",
        latitude: 35.54192238,
        longitude: -105.6814684,
        states: ["nm"]
    },
    {
        fullName: "Petroglyph National Monument",
        altName: "",
        parkCode: "petr",
        latitude: 35.13915998,
        longitude: -106.7491456,
        states: ["nm"]
    },
    {
        fullName: "Salinas Pueblo Missions National Monument",
        altName: "",
        parkCode: "sapu",
        latitude: 34.35423203,
        longitude: -106.2050309,
        states: ["nm"]
    },
    {
        fullName: "Valles Caldera National Preserve",
        altName: "",
        parkCode: "vall",
        latitude: 35.91682872,
        longitude: -106.5195724,
        states: ["nm"]
    },
    {
        fullName: "White Sands National Park",
        altName: "",
        parkCode: "whsa",
        latitude: 32.77907858,
        longitude: -106.3333461,
        states: ["nm"]
    },
    {
        fullName: "African Burial Ground National Monument",
        altName: "",
        parkCode: "afbg",
        latitude: 40.71452681,
        longitude: -74.00447358,
        states: ["ny"]
    },
    {
        fullName: "Castle Clinton National Monument",
        altName: "",
        parkCode: "cacl",
        latitude: 40.70347795,
        longitude: -74.01680558,
        states: ["ny"]
    },
    {
        fullName: "Eleanor Roosevelt National Historic Site",
        altName: "",
        parkCode: "elro",
        latitude: 41.76208482,
        longitude: -73.89894026,
        states: ["ny"]
    },
    {
        fullName: "Ellis Island Part of Statue of Liberty National Monument",
        altName: "",
        parkCode: "elis",
        latitude: 40.69946,
        longitude: -74.0401,
        states: ["nj, ny"]
    },
    {
        fullName: "Federal Hall National Memorial",
        altName: "",
        parkCode: "feha",
        latitude: 40.70731192,
        longitude: -74.01025636,
        states: ["ny"]
    },
    {
        fullName: "Fire Island National Seashore",
        altName: "",
        parkCode: "fiis",
        latitude: 40.69668638,
        longitude: -73.00013462,
        states: ["ny"]
    },
    {
        fullName: "Fort Stanwix National Monument",
        altName: "",
        parkCode: "fost",
        latitude: 43.21053441,
        longitude: -75.45557626,
        states: ["ny"]
    },
    {
        fullName: "Gateway National Recreation Area",
        altName: "",
        parkCode: "gate",
        latitude: 40.56536246,
        longitude: -73.9171087,
        states: ["ny, nj"]
    },
    {
        fullName: "General Grant National Memorial",
        altName: "",
        parkCode: "gegr",
        latitude: 40.81332817,
        longitude: -73.96331542,
        states: ["ny"]
    },
    {
        fullName: "Governors Island National Monument",
        altName: "Governor's Island National Monument",
        parkCode: "gois",
        latitude: 40.69164233,
        longitude: -74.01670765,
        states: ["ny"]
    },
    {
        fullName: "Hamilton Grange National Memorial",
        altName: "",
        parkCode: "hagr",
        latitude: 40.81871605,
        longitude: -73.94878487,
        states: ["ny"]
    },
    {
        fullName: "Harriet Tubman National Historical Park",
        altName: "",
        parkCode: "hart",
        latitude: 42.9128920287,
        longitude: -76.5646715462,
        states: ["ny"]
    },
    {
        fullName: "Home Of Franklin D. Roosevelt National Historic Site",
        altName: "Home Of Franklin Roosevelt National Historic Site",
        parkCode: "hofr",
        latitude: 41.76639758,
        longitude: -73.92516857,
        states: ["ny"]
    },
    {
        fullName: "Lower East Side Tenement Museum National Historic Site",
        altName: "",
        parkCode: "loea",
        latitude: 40.7187683,
        longitude: -73.99001245,
        states: ["ny"]
    },
    {
        fullName: "Martin Van Buren National Historic Site",
        altName: "",
        parkCode: "mava",
        latitude: 42.36819596,
        longitude: -73.70834257,
        states: ["ny"]
    },
    {
        fullName: "National Parks of New York Harbor",
        altName: "",
        parkCode: "npnh",
        latitude: 40.6632,
        longitude: -74.0451,
        states: ["ny"]
    },
    {
        fullName: "Sagamore Hill National Historic Site",
        altName: "",
        parkCode: "sahi",
        latitude: 40.88579128,
        longitude: -73.49686438,
        states: ["ny"]
    },
    {
        fullName: "Saint Paul's Church National Historic Site",
        altName: "Saint Pauls Church National Historic Site",
        parkCode: "sapa",
        latitude: 40.89283511,
        longitude: -73.82577276,
        states: ["ny"]
    },
    {
        fullName: "Saratoga National Historical Park",
        altName: "",
        parkCode: "sara",
        latitude: 42.99522612,
        longitude: -73.63386108,
        states: ["ny"]
    },
    {
        fullName: "Statue Of Liberty National Monument",
        altName: "",
        parkCode: "stli",
        latitude: 40.6898,
        longitude: -74.0451,
        states: ["ny"]
    },
    {
        fullName: "Stonewall National Monument",
        altName: "",
        parkCode: "ston",
        latitude: 40.7337799072,
        longitude: -74.0006866455,
        states: ["ny"]
    },
    {
        fullName: "Theodore Roosevelt Birthplace National Historic Site",
        altName: "",
        parkCode: "thrb",
        latitude: 40.7386469,
        longitude: -73.98903703,
        states: ["ny"]
    },
    {
        fullName: "Theodore Roosevelt Inaugural National Historic Site",
        altName: "",
        parkCode: "thri",
        latitude: 42.90146781,
        longitude: -78.87248411,
        states: ["ny"]
    },
    {
        fullName: "Thomas Cole National Historic Site",
        altName: "",
        parkCode: "thco",
        latitude: 42.22570607,
        longitude: -73.86154864,
        states: ["ny"]
    },
    {
        fullName: "Upper Delaware Scenic and Recreational River",
        altName: "",
        parkCode: "upde",
        latitude: 41.66172578,
        longitude: -75.03861562,
        states: ["ny, pa"]
    },
    {
        fullName: "Vanderbilt Mansion National Historic Site",
        altName: "",
        parkCode: "vama",
        latitude: 41.79697937,
        longitude: -73.94205557,
        states: ["ny"]
    },
    {
        fullName: "Women's Rights National Historical Park",
        altName: "Womens Rights National Historical Park",
        parkCode: "wori",
        latitude: 42.90817073,
        longitude: -76.81655558,
        states: ["ny"]
    },
    {
        fullName: "Cape Hatteras National Seashore",
        altName: "",
        parkCode: "caha",
        latitude: 35.41370839,
        longitude: -75.65061112,
        states: ["nc"]
    },
    {
        fullName: "Cape Lookout National Seashore",
        altName: "",
        parkCode: "calo",
        latitude: 34.8267961,
        longitude: -76.34319082,
        states: ["nc"]
    },
    {
        fullName: "Carl Sandburg Home National Historic Site",
        altName: "",
        parkCode: "carl",
        latitude: 35.26815509,
        longitude: -82.45106258,
        states: ["nc"]
    },
    {
        fullName: "Fort Raleigh National Historic Site",
        altName: "",
        parkCode: "fora",
        latitude: 35.93278602,
        longitude: -75.71496865,
        states: ["nc"]
    },
    {
        fullName: "Guilford Courthouse National Military Park",
        altName: "",
        parkCode: "guco",
        latitude: 36.13225478,
        longitude: -79.8424561,
        states: ["nc"]
    },
    {
        fullName: "Moores Creek National Battlefield",
        altName: "Moore's Creek National Battlefield",
        parkCode: "mocr",
        latitude: 34.45820776,
        longitude: -78.11031134,
        states: ["nc"]
    },
    {
        fullName: "Overmountain Victory National Historic Trail",
        altName: "",
        parkCode: "ovvi",
        latitude: 35.14044,
        longitude: -81.377,
        states: ["nc, sc, tn, va"]
    },
    {
        fullName: "Wright Brothers National Memorial",
        altName: "",
        parkCode: "wrbr",
        latitude: 36.01637713,
        longitude: -75.66997163,
        states: ["nc"]
    },
    {
        fullName: "Fort Union Trading Post National Historic Site",
        altName: "",
        parkCode: "fous",
        latitude: 48.00075828,
        longitude: -104.0375238,
        states: ["mt, nd"]
    },
    {
        fullName: "Knife River Indian Villages National Historic Site",
        altName: "",
        parkCode: "knri",
        latitude: 47.3540219,
        longitude: -101.3860533,
        states: ["nd"]
    },
    {
        fullName: "Theodore Roosevelt National Park",
        altName: "",
        parkCode: "thro",
        latitude: 47.17777274,
        longitude: -103.4300083,
        states: ["nd"]
    },
    {
        fullName: "Charles Young Buffalo Soldiers National Monument",
        altName: "",
        parkCode: "chyo",
        latitude: 39.70817829,
        longitude: -83.89328575,
        states: ["oh"]
    },
    {
        fullName: "Cuyahoga Valley National Park",
        altName: "",
        parkCode: "cuva",
        latitude: 41.26093905,
        longitude: -81.57116722,
        states: ["oh"]
    },
    {
        fullName: "Dayton Aviation Heritage National Historical Park",
        altName: "",
        parkCode: "daav",
        latitude: 39.78944467,
        longitude: -84.10442045,
        states: ["oh"]
    },
    {
        fullName: "First Ladies National Historic Site",
        altName: "",
        parkCode: "fila",
        latitude: 40.79689857,
        longitude: -81.37579869,
        states: ["oh"]
    },
    {
        fullName: "Hopewell Culture National Historical Park",
        altName: "",
        parkCode: "hocu",
        latitude: 39.31594374,
        longitude: -83.08049456,
        states: ["oh"]
    },
    {
        fullName: "James A. Garfield National Historic Site",
        altName: "James Garfield National Historic Site",
        parkCode: "jaga",
        latitude: 41.66486549,
        longitude: -81.35086557,
        states: ["oh"]
    },
    {
        fullName: "Perry's Victory and International Peace Memorial",
        altName: "Perrys Victory and International Peace Memorial",
        parkCode: "pevi",
        latitude: 41.65449782,
        longitude: -82.8115794,
        states: ["oh"]
    },
    {
        fullName: "William Howard Taft National Historic Site",
        altName: "",
        parkCode: "wiho",
        latitude: 39.11970352,
        longitude: -84.50758951,
        states: ["oh"]
    },
    {
        fullName: "Chickasaw National Recreation Area",
        altName: "",
        parkCode: "chic",
        latitude: 34.46050507,
        longitude: -97.00715669,
        states: ["ok"]
    },
    {
        fullName: "Oklahoma City National Memorial",
        altName: "",
        parkCode: "okci",
        latitude: 35.473,
        longitude: -97.5171,
        states: ["ok"]
    },
    {
        fullName: "Washita Battlefield National Historic Site",
        altName: "",
        parkCode: "waba",
        latitude: 35.62083963,
        longitude: -99.70445143,
        states: ["ok"]
    },
    {
        fullName: "Crater Lake National Park",
        altName: "",
        parkCode: "crla",
        latitude: 42.94065854,
        longitude: -122.1338414,
        states: ["or"]
    },
    {
        fullName: "John Day Fossil Beds National Monument",
        altName: "",
        parkCode: "joda",
        latitude: 44.62566508,
        longitude: -119.8811491,
        states: ["or"]
    },
    {
        fullName: "Lewis and Clark National Historical Park",
        altName: "",
        parkCode: "lewi",
        latitude: 46.21178735,
        longitude: -123.9638583,
        states: ["or, wa"]
    },
    {
        fullName: "Oregon Caves National Monument and Preserve",
        altName: "",
        parkCode: "orca",
        latitude: 42.10319143,
        longitude: -123.4018586,
        states: ["or"]
    },
    {
        fullName: "Allegheny Portage Railroad National Historic Site",
        altName: "",
        parkCode: "alpo",
        latitude: 40.42977467,
        longitude: -78.57431622,
        states: ["pa"]
    },
    {
        fullName: "Delaware Water Gap National Recreation Area",
        altName: "",
        parkCode: "dewa",
        latitude: 41.12793491,
        longitude: -74.94751173,
        states: ["nj, pa"]
    },
    {
        fullName: "Edgar Allan Poe National Historic Site",
        altName: "",
        parkCode: "edal",
        latitude: 39.96195482,
        longitude: -75.1500062,
        states: ["pa"]
    },
    {
        fullName: "Eisenhower National Historic Site",
        altName: "",
        parkCode: "eise",
        latitude: 39.79577592,
        longitude: -77.26508101,
        states: ["pa"]
    },
    {
        fullName: "First State National Historical Park",
        altName: "",
        parkCode: "frst",
        latitude: 39.83076929,
        longitude: -75.56353942,
        states: ["de, pa"]
    },
    {
        fullName: "Flight 93 National Memorial",
        altName: "",
        parkCode: "flni",
        latitude: 40.06061476,
        longitude: -78.89456905,
        states: ["pa"]
    },
    {
        fullName: "Fort Necessity National Battlefield",
        altName: "",
        parkCode: "fone",
        latitude: 39.81306048,
        longitude: -79.59033344,
        states: ["pa"]
    },
    {
        fullName: "Friendship Hill National Historic Site",
        altName: "",
        parkCode: "frhi",
        latitude: 39.77543423,
        longitude: -79.92504169,
        states: ["pa"]
    },
    {
        fullName: "Gettysburg National Military Park",
        altName: "",
        parkCode: "gett",
        latitude: 39.81557366,
        longitude: -77.23246758,
        states: ["pa"]
    },
    {
        fullName: "Gloria Dei Church National Historic Site",
        altName: "",
        parkCode: "glde",
        latitude: 39.93435005,
        longitude: -75.14398924,
        states: ["pa"]
    },
    {
        fullName: "Hopewell Furnace National Historic Site",
        altName: "",
        parkCode: "hofu",
        latitude: 40.20610637,
        longitude: -75.76766355,
        states: ["pa"]
    },
    {
        fullName: "Independence National Historical Park",
        altName: "",
        parkCode: "inde",
        latitude: 39.94746112,
        longitude: -75.14794157,
        states: ["pa"]
    },
    {
        fullName: "Johnstown Flood National Memorial",
        altName: "",
        parkCode: "jofl",
        latitude: 40.34584534,
        longitude: -78.77448601,
        states: ["pa"]
    },
    {
        fullName: "Lower Delaware National Wild and Scenic River",
        altName: "",
        parkCode: "lode",
        latitude: 40.4000389,
        longitude: -74.983737,
        states: ["pa, nj"]
    },
    {
        fullName: "Steamtown National Historic Site",
        altName: "",
        parkCode: "stea",
        latitude: 41.40757521,
        longitude: -75.67037255,
        states: ["pa"]
    },
    {
        fullName: "Thaddeus Kosciuszko National Memorial",
        altName: "",
        parkCode: "thko",
        latitude: 39.94345312,
        longitude: -75.14732045,
        states: ["pa"]
    },
    {
        fullName: "Valley Forge National Historical Park",
        altName: "",
        parkCode: "vafo",
        latitude: 40.10054985,
        longitude: -75.44581889,
        states: ["pa"]
    },
    {
        fullName: "Blackstone River Valley National Historical Park",
        altName: "",
        parkCode: "blrv",
        latitude: 41.8775792792,
        longitude: -71.382433945,
        states: ["ri, ma"]
    },
    {
        fullName: "Roger Williams National Memorial",
        altName: "",
        parkCode: "rowi",
        latitude: 41.8298955,
        longitude: -71.41056665,
        states: ["ri"]
    },
    {
        fullName: "Touro Synagogue National Historic Site",
        altName: "",
        parkCode: "tosy",
        latitude: 41.4893,
        longitude: -71.3121,
        states: ["ri"]
    },
    {
        fullName: "Charles Pinckney National Historic Site",
        altName: "",
        parkCode: "chpi",
        latitude: 32.84577392,
        longitude: -79.82487582,
        states: ["sc"]
    },
    {
        fullName: "Congaree National Park",
        altName: "",
        parkCode: "cong",
        latitude: 33.79187523,
        longitude: -80.74867805,
        states: ["sc"]
    },
    {
        fullName: "Cowpens National Battlefield",
        altName: "",
        parkCode: "cowp",
        latitude: 35.13160654,
        longitude: -81.80935433,
        states: ["sc"]
    },
    {
        fullName: "Fort Sumter and Fort Moultrie National Historical Park",
        altName: "",
        parkCode: "fosu",
        latitude: 32.75654469,
        longitude: -79.87068744,
        states: ["sc"]
    },
    {
        fullName: "Kings Mountain National Military Park",
        altName: "",
        parkCode: "kimo",
        latitude: 35.13900723,
        longitude: -81.38978712,
        states: ["sc"]
    },
    {
        fullName: "Ninety Six National Historic Site",
        altName: "",
        parkCode: "nisi",
        latitude: 34.14273587,
        longitude: -82.01636079,
        states: ["sc"]
    },
    {
        fullName: "Reconstruction Era National Historical Park",
        altName: "",
        parkCode: "reer",
        latitude: 32.3868598938,
        longitude: -80.6511077881,
        states: ["sc"]
    },
    {
        fullName: "Badlands National Park",
        altName: "",
        parkCode: "badl",
        latitude: 43.68584846,
        longitude: -102.482942,
        states: ["sd"]
    },
    {
        fullName: "Jewel Cave National Monument",
        altName: "",
        parkCode: "jeca",
        latitude: 43.73102945,
        longitude: -103.829994,
        states: ["sd"]
    },
    {
        fullName: "Minuteman Missile National Historic Site",
        altName: "",
        parkCode: "mimi",
        latitude: 43.89558013,
        longitude: -102.0272131,
        states: ["sd"]
    },
    {
        fullName: "Missouri National Recreational River",
        altName: "",
        parkCode: "mnrr",
        latitude: 42.7882189,
        longitude: -97.59077822,
        states: ["sd, ne"]
    },
    {
        fullName: "Mount Rushmore National Memorial",
        altName: "",
        parkCode: "moru",
        latitude: 43.88037021,
        longitude: -103.4525186,
        states: ["sd"]
    },
    {
        fullName: "Wind Cave National Park",
        altName: "",
        parkCode: "wica",
        latitude: 43.58012365,
        longitude: -103.4394709,
        states: ["sd"]
    },
    {
        fullName: "Andrew Johnson National Historic Site",
        altName: "",
        parkCode: "anjo",
        latitude: 36.15624509,
        longitude: -82.83709021,
        states: ["tn"]
    },
    {
        fullName: "Big South Fork National River and Recreation Area",
        altName: "",
        parkCode: "biso",
        latitude: 36.5348388,
        longitude: -84.66506688,
        states: ["ky, tn"]
    },
    {
        fullName: "Fort Donelson National Battlefield",
        altName: "",
        parkCode: "fodo",
        latitude: 36.49019078,
        longitude: -87.92445695,
        states: ["ky, tn"]
    },
    {
        fullName: "Great Smoky Mountains National Park",
        altName: "",
        parkCode: "grsm",
        latitude: 35.60116374,
        longitude: -83.50818326,
        states: ["nc, tn"]
    },
    {
        fullName: "Obed Wild and Scenic River",
        altName: "",
        parkCode: "obed",
        latitude: 36.1056026037,
        longitude: -84.5979170501,
        states: ["tn"]
    },
    {
        fullName: "Stones River National Battlefield",
        altName: "",
        parkCode: "stri",
        latitude: 35.87608652,
        longitude: -86.43078399,
        states: ["tn"]
    },
    {
        fullName: "Alibates Flint Quarries National Monument",
        altName: "",
        parkCode: "alfl",
        latitude: 35.5819662,
        longitude: -101.6717008,
        states: ["tx"]
    },
    {
        fullName: "Amistad National Recreation Area",
        altName: "",
        parkCode: "amis",
        latitude: 29.53539777,
        longitude: -101.075821,
        states: ["tx"]
    },
    {
        fullName: "Big Bend National Park",
        altName: "",
        parkCode: "bibe",
        latitude: 29.29817767,
        longitude: -103.2297897,
        states: ["tx"]
    },
    {
        fullName: "Big Thicket National Preserve",
        altName: "",
        parkCode: "bith",
        latitude: 30.457983431,
        longitude: -94.386742115,
        states: ["tx"]
    },
    {
        fullName: "Blackwell School National Historic Site",
        altName: "",
        parkCode: "blsc",
        latitude: null,
        longitude: null,
        states: ["tx"]
    },
    {
        fullName: "Chamizal National Memorial",
        altName: "",
        parkCode: "cham",
        latitude: 31.76729634,
        longitude: -106.4544011,
        states: ["tx"]
    },
    {
        fullName: "El Camino Real de Tierra Adentro National Historic Trail",
        altName: "",
        parkCode: "elca",
        latitude: 33.7990672546,
        longitude: -106.866386195,
        states: ["nm, tx"]
    },
    {
        fullName: "El Camino Real de los Tejas National Historic Trail",
        altName: "",
        parkCode: "elte",
        latitude: 30.0922964581,
        longitude: -97.3397666725,
        states: ["tx, la"]
    },
    {
        fullName: "Fort Davis National Historic Site",
        altName: "",
        parkCode: "foda",
        latitude: 30.59930381,
        longitude: -103.8961904,
        states: ["tx"]
    },
    {
        fullName: "Guadalupe Mountains National Park",
        altName: "",
        parkCode: "gumo",
        latitude: 31.92304462,
        longitude: -104.885527,
        states: ["tx"]
    },
    {
        fullName: "Lake Meredith National Recreation Area",
        altName: "",
        parkCode: "lamr",
        latitude: 35.61926203,
        longitude: -101.6820066,
        states: ["tx"]
    },
    {
        fullName: "Lyndon B. Johnson National Historical Park",
        altName: "Lyndon Johnson National Historical Park",
        parkCode: "lyjo",
        latitude: 30.2519655,
        longitude: -98.60692433,
        states: ["tx"]
    },
    {
        fullName: "Padre Island National Seashore",
        altName: "",
        parkCode: "pais",
        latitude: 27.05381186,
        longitude: -97.35901135,
        states: ["tx"]
    },
    {
        fullName: "Palo Alto Battlefield National Historical Park",
        altName: "",
        parkCode: "paal",
        latitude: 26.02387351,
        longitude: -97.46296072,
        states: ["tx"]
    },
    {
        fullName: "Rio Grande Wild and Scenic River",
        altName: "",
        parkCode: "rigr",
        latitude: 29.52743158,
        longitude: -102.5979169,
        states: ["tx"]
    },
    {
        fullName: "San Antonio Missions National Historical Park",
        altName: "",
        parkCode: "saan",
        latitude: 29.31262089,
        longitude: -98.4289522,
        states: ["tx"]
    },
    {
        fullName: "Waco Mammoth National Monument",
        altName: "",
        parkCode: "waco",
        latitude: 31.60465887,
        longitude: -97.17606143,
        states: ["tx"]
    },
    {
        fullName: "Arches National Park",
        altName: "",
        parkCode: "arch",
        latitude: 38.72261844,
        longitude: -109.5863666,
        states: ["ut"]
    },
    {
        fullName: "Bryce Canyon National Park",
        altName: "",
        parkCode: "brca",
        latitude: 37.58399144,
        longitude: -112.1826689,
        states: ["ut"]
    },
    {
        fullName: "Canyonlands National Park",
        altName: "",
        parkCode: "cany",
        latitude: 38.24555783,
        longitude: -109.8801624,
        states: ["ut"]
    },
    {
        fullName: "Capitol Reef National Park",
        altName: "",
        parkCode: "care",
        latitude: 38.2821653131,
        longitude: -111.247048378,
        states: ["ut"]
    },
    {
        fullName: "Cedar Breaks National Monument",
        altName: "",
        parkCode: "cebr",
        latitude: 37.63545562,
        longitude: -112.845268,
        states: ["ut"]
    },
    {
        fullName: "Golden Spike National Historical Park",
        altName: "",
        parkCode: "gosp",
        latitude: 41.61947508,
        longitude: -112.5242653,
        states: ["ut"]
    },
    {
        fullName: "Natural Bridges National Monument",
        altName: "",
        parkCode: "nabr",
        latitude: 37.6045329,
        longitude: -110.0022436,
        states: ["ut"]
    },
    {
        fullName: "Rainbow Bridge National Monument",
        altName: "",
        parkCode: "rabr",
        latitude: 36.9943264317,
        longitude: -111.491484759,
        states: ["ut"]
    },
    {
        fullName: "Timpanogos Cave National Monument",
        altName: "",
        parkCode: "tica",
        latitude: 40.44039719,
        longitude: -111.7093944,
        states: ["ut"]
    },
    {
        fullName: "Zion National Park",
        altName: "",
        parkCode: "zion",
        latitude: 37.29839254,
        longitude: -113.0265138,
        states: ["ut"]
    },
    {
        fullName: "Marsh - Billings - Rockefeller National Historical Park",
        altName: "Marsh Billings Rockefeller National Historical Park",
        parkCode: "mabi",
        latitude: 43.63348732,
        longitude: -72.53424638,
        states: ["vt"]
    },
    {
        fullName: "Appomattox Court House National Historical Park",
        altName: "",
        parkCode: "apco",
        latitude: 37.38022164,
        longitude: -78.79856982,
        states: ["va"]
    },
    {
        fullName: "Arlington House, The Robert E. Lee Memorial",
        altName: "Arlington House Robert E Lee Memorial",
        parkCode: "arho",
        latitude: 38.8822021484,
        longitude: -77.0734786987,
        states: ["va"]
    },
    {
        fullName: "Blue Ridge Parkway",
        altName: "",
        parkCode: "blri",
        latitude: 35.5657195274,
        longitude: -82.486484587,
        states: ["nc, va"]
    },
    {
        fullName: "Booker T. Washington National Monument",
        altName: "Booker T Washington National Monument",
        parkCode: "bowa",
        latitude: 37.11520539,
        longitude: -79.73185833,
        states: ["va"]
    },
    {
        fullName: "Cape Henry Memorial Part of Colonial National Historical Park",
        altName: "",
        parkCode: "came",
        latitude: 36.9278094,
        longitude: -76.0088219,
        states: ["va"]
    },
    {
        fullName: "Cedar Creek and Belle Grove National Historical Park",
        altName: "",
        parkCode: "cebe",
        latitude: 39.0093576,
        longitude: -78.30618934,
        states: ["va"]
    },
    {
        fullName: "Colonial National Historical Park",
        altName: "",
        parkCode: "colo",
        latitude: 37.22824435,
        longitude: -76.61998123,
        states: ["va"]
    },
    {
        fullName: "Fort Monroe National Monument",
        altName: "",
        parkCode: "fomr",
        latitude: 37.01733343,
        longitude: -76.30103195,
        states: ["va"]
    },
    {
        fullName: "Fredericksburg and Spotsylvania National Military Park",
        altName: "",
        parkCode: "frsp",
        latitude: 38.29378,
        longitude: -77.46734,
        states: ["va"]
    },
    {
        fullName: "George Washington Birthplace National Monument",
        altName: "",
        parkCode: "gewa",
        latitude: 38.19362603,
        longitude: -76.92079458,
        states: ["va"]
    },
    {
        fullName: "Great Falls Park",
        altName: "",
        parkCode: "grfa",
        latitude: 38.98776107,
        longitude: -77.25128326,
        states: ["va"]
    },
    {
        fullName: "Green Springs",
        altName: "",
        parkCode: "grsp",
        latitude: 38.037099,
        longitude: -78.189823,
        states: ["va"]
    },
    {
        fullName: "Historic Jamestowne Part of Colonial National Historical Park",
        altName: "",
        parkCode: "jame",
        latitude: 37.2065,
        longitude: -76.7538,
        states: ["va"]
    },
    {
        fullName: "Maggie L. Walker National Historic Site",
        altName: "Maggie Walker National Historic Site",
        parkCode: "mawa",
        latitude: 37.54781499,
        longitude: -77.43746979,
        states: ["va"]
    },
    {
        fullName: "Manassas National Battlefield Park",
        altName: "",
        parkCode: "mana",
        latitude: 38.81710063,
        longitude: -77.5353468,
        states: ["va"]
    },
    {
        fullName: "Petersburg National Battlefield",
        altName: "",
        parkCode: "pete",
        latitude: 37.19109957,
        longitude: -77.47594865,
        states: ["va"]
    },
    {
        fullName: "Prince William Forest Park",
        altName: "",
        parkCode: "prwi",
        latitude: 38.58589108,
        longitude: -77.38910997,
        states: ["va"]
    },
    {
        fullName: "Richmond National Battlefield Park",
        altName: "",
        parkCode: "rich",
        latitude: 37.48774472,
        longitude: -77.29107785,
        states: ["va"]
    },
    {
        fullName: "Shenandoah National Park",
        altName: "",
        parkCode: "shen",
        latitude: 38.49236644,
        longitude: -78.46907715,
        states: ["va"]
    },
    {
        fullName: "Star-Spangled Banner National Historic Trail",
        altName: "Star Spangled Banner National Historic Trail",
        parkCode: "stsp",
        latitude: 39.2872505188,
        longitude: -76.6034317017,
        states: ["md, va, dc"]
    },
    {
        fullName: "Wolf Trap National Park for the Performing Arts",
        altName: "",
        parkCode: "wotr",
        latitude: 38.93854526,
        longitude: -77.265089,
        states: ["va"]
    },
    {
        fullName: "Yorktown Battlefield Part of Colonial National Historical Park",
        altName: "",
        parkCode: "york",
        latitude: 37.2195,
        longitude: -76.4983,
        states: ["va"]
    },
    {
        fullName: "Ebey's Landing National Historical Reserve",
        altName: "Ebeys Landing National Historical Reserve",
        parkCode: "ebla",
        latitude: 48.21403036,
        longitude: -122.6877213,
        states: ["wa"]
    },
    {
        fullName: "Fort Vancouver National Historic Site",
        altName: "",
        parkCode: "fova",
        latitude: 45.62234841,
        longitude: -122.6617043,
        states: ["or, wa"]
    },
    {
        fullName: "Klondike Gold Rush - Seattle Unit National Historical Park",
        altName: "Klondike Gold Rush Seattle Unit National Historical Park",
        parkCode: "klse",
        latitude: 47.5993663,
        longitude: -122.3319664,
        states: ["wa"]
    },
    {
        fullName: "Lake Roosevelt National Recreation Area",
        altName: "",
        parkCode: "laro",
        latitude: 48.17148735,
        longitude: -118.3513713,
        states: ["wa"]
    },
    {
        fullName: "Minidoka National Historic Site",
        altName: "",
        parkCode: "miin",
        latitude: 42.678,
        longitude: -114.2465,
        states: ["id, wa"]
    },
    {
        fullName: "Mount Rainier National Park",
        altName: "",
        parkCode: "mora",
        latitude: 46.86075416,
        longitude: -121.7043885,
        states: ["wa"]
    },
    {
        fullName: "North Cascades National Park",
        altName: "",
        parkCode: "noca",
        latitude: 48.71171756,
        longitude: -121.2069423,
        states: ["wa"]
    },
    {
        fullName: "Olympic National Park",
        altName: "",
        parkCode: "olym",
        latitude: 47.80392754,
        longitude: -123.6663848,
        states: ["wa"]
    },
    {
        fullName: "San Juan Island National Historical Park",
        altName: "",
        parkCode: "sajh",
        latitude: 48.51241933,
        longitude: -123.0610277,
        states: ["wa"]
    },
    {
        fullName: "Whitman Mission National Historic Site",
        altName: "",
        parkCode: "whmi",
        latitude: 46.04119286,
        longitude: -118.4629388,
        states: ["wa"]
    },
    {
        fullName: "Wing Luke Museum Affiliated Area",
        altName: "",
        parkCode: "wing",
        latitude: 47.59820859,
        longitude: -122.3228912,
        states: ["wa"]
    },
    {
        fullName: "Bluestone National Scenic River",
        altName: "",
        parkCode: "blue",
        latitude: 37.56577087,
        longitude: -80.98366657,
        states: ["wv"]
    },
    {
        fullName: "Gauley River National Recreation Area",
        altName: "",
        parkCode: "gari",
        latitude: 38.20614947,
        longitude: -81.00420836,
        states: ["wv"]
    },
    {
        fullName: "New River Gorge National Park and Preserve",
        altName: "",
        parkCode: "neri",
        latitude: 37.86878554,
        longitude: -80.99956002,
        states: ["wv"]
    },
    {
        fullName: "Apostle Islands National Lakeshore",
        altName: "",
        parkCode: "apis",
        latitude: 46.96240467,
        longitude: -90.66045665,
        states: ["wi"]
    },
    {
        fullName: "Ice Age National Scenic Trail",
        altName: "",
        parkCode: "iatr",
        latitude: 43.9895697794,
        longitude: -89.5612021706,
        states: ["wi"]
    },
    {
        fullName: "Bighorn Canyon National Recreation Area",
        altName: "",
        parkCode: "bica",
        latitude: 45.13154227,
        longitude: -108.1443943,
        states: ["mt, wy"]
    },
    {
        fullName: "Devils Tower National Monument",
        altName: "",
        parkCode: "deto",
        latitude: 44.59064655,
        longitude: -104.7156341,
        states: ["wy"]
    },
    {
        fullName: "Fort Laramie National Historic Site",
        altName: "",
        parkCode: "fola",
        latitude: 42.20301694,
        longitude: -104.5459112,
        states: ["wy"]
    },
    {
        fullName: "Fossil Butte National Monument",
        altName: "",
        parkCode: "fobu",
        latitude: 41.85635223,
        longitude: -110.7624754,
        states: ["wy"]
    },
    {
        fullName: "Grand Teton National Park",
        altName: "",
        parkCode: "grte",
        latitude: 43.81853565,
        longitude: -110.7054666,
        states: ["wy"]
    },
    {
        fullName: "African American Civil War Memorial",
        altName: "",
        parkCode: "afam",
        latitude: 38.9166,
        longitude: -77.026,
        states: ["dc"]
    },
    {
        fullName: "Anacostia Park",
        altName: "",
        parkCode: "anac",
        latitude: 38.8782,
        longitude: -76.9703,
        states: ["dc"]
    },
    {
        fullName: "Belmont-Paul Women's Equality National Monument",
        altName: "Belmont Paul Womens Equality National Monument",
        parkCode: "bepa",
        latitude: 38.89231541,
        longitude: -77.00381882,
        states: ["dc"]
    },
    {
        fullName: "Capitol Hill Parks",
        altName: "",
        parkCode: "cahi",
        latitude: 38.889993,
        longitude: -76.990332,
        states: ["dc"]
    },
    {
        fullName: "Carter G. Woodson Home National Historic Site",
        altName: "Carter Woodson Home National Historic Site",
        parkCode: "cawo",
        latitude: 38.91089286,
        longitude: -77.02431104,
        states: ["dc"]
    },
    {
        fullName: "Constitution Gardens",
        altName: "",
        parkCode: "coga",
        latitude: 38.8909354,
        longitude: -77.04409306,
        states: ["dc"]
    },
    {
        fullName: "Dwight D. Eisenhower Memorial",
        altName: "Dwight Eisenhower Memorial",
        parkCode: "ddem",
        latitude: 38.8869476647,
        longitude: -77.018737554,
        states: ["dc"]
    },
    {
        fullName: "Ford's Theatre",
        altName: "Fords Theatre",
        parkCode: "foth",
        latitude: 38.89668819,
        longitude: -77.02577944,
        states: ["dc"]
    },
    {
        fullName: "Fort Dupont Park",
        altName: "",
        parkCode: "fodu",
        latitude: 38.87731289,
        longitude: -76.94955824,
        states: ["dc"]
    },
    {
        fullName: "Franklin Delano Roosevelt Memorial",
        altName: "Franklin Roosevelt Memorial",
        parkCode: "frde",
        latitude: 38.88341274,
        longitude: -77.04311542,
        states: ["dc"]
    },
    {
        fullName: "Frederick Douglass National Historic Site",
        altName: "",
        parkCode: "frdo",
        latitude: 38.86298458,
        longitude: -76.98508147,
        states: ["dc"]
    },
    {
        fullName: "Kenilworth Park and Aquatic Gardens",
        altName: "",
        parkCode: "keaq",
        latitude: 38.9128,
        longitude: -76.9434,
        states: ["dc"]
    },
    {
        fullName: "Korean War Veterans Memorial",
        altName: "",
        parkCode: "kowa",
        latitude: 38.88784226,
        longitude: -77.04773857,
        states: ["dc"]
    },
    {
        fullName: "LBJ Memorial Grove on the Potomac",
        altName: "",
        parkCode: "lyba",
        latitude: 38.87858036,
        longitude: -77.05145832,
        states: ["dc"]
    },
    {
        fullName: "Lincoln Memorial",
        altName: "",
        parkCode: "linc",
        latitude: 38.88927229,
        longitude: -77.05017778,
        states: ["dc"]
    },
    {
        fullName: "Martin Luther King, Jr. Memorial",
        altName: "Martin Luther King Jr Memorial",
        parkCode: "mlkm",
        latitude: 38.8862276865,
        longitude: -77.0442195534,
        states: ["dc"]
    },
    {
        fullName: "Mary McLeod Bethune Council House National Historic Site",
        altName: "",
        parkCode: "mamc",
        latitude: 38.90819107,
        longitude: -77.03096742,
        states: ["dc"]
    },
    {
        fullName: "National Capital Parks-East",
        altName: "",
        parkCode: "nace",
        latitude: 38.8659,
        longitude: -76.994,
        states: ["dc"]
    },
    {
        fullName: "National Mall and Memorial Parks",
        altName: "",
        parkCode: "nama",
        latitude: 38.8899,
        longitude: -77.026,
        states: ["dc"]
    },
    {
        fullName: "Pennsylvania Avenue",
        altName: "",
        parkCode: "paav",
        latitude: 38.89426856,
        longitude: -77.02506554,
        states: ["dc"]
    },
    {
        fullName: "Rock Creek Park",
        altName: "",
        parkCode: "rocr",
        latitude: 38.95125063,
        longitude: -77.05002838,
        states: ["dc"]
    },
    {
        fullName: "The White House and President's Park",
        altName: "The White House and Presidents Park",
        parkCode: "whho",
        latitude: 38.89541886,
        longitude: -77.03654147,
        states: ["dc"]
    },
    {
        fullName: "Theodore Roosevelt Island",
        altName: "",
        parkCode: "this",
        latitude: 38.89584162,
        longitude: -77.06241918,
        states: ["dc"]
    },
    {
        fullName: "Thomas Jefferson Memorial",
        altName: "",
        parkCode: "thje",
        latitude: 38.88101431,
        longitude: -77.03632572,
        states: ["dc"]
    },
    {
        fullName: "Vietnam Veterans Memorial",
        altName: "",
        parkCode: "vive",
        latitude: 38.89096297,
        longitude: -77.04765735,
        states: ["dc"]
    },
    {
        fullName: "Washington Monument",
        altName: "",
        parkCode: "wamo",
        latitude: 38.88948,
        longitude: -77.035207,
        states: ["dc"]
    },
    {
        fullName: "World War I Memorial",
        altName: "World War One Memorial",
        parkCode: "wwim",
        latitude: 38.8959,
        longitude: -77.0329,
        states: ["dc"]
    },
    {
        fullName: "World War II Memorial",
        altName: "World War Two Memorial",
        parkCode: "wwii",
        latitude: 38.88923917,
        longitude: -77.0403759,
        states: ["dc"]
    },
    {
        fullName: "National Park of American Samoa",
        altName: "",
        parkCode: "npsa",
        latitude: -14.22865935,
        longitude: -169.8503777,
        states: ["as"]
    },
    {
        fullName: "War In The Pacific National Historical Park",
        altName: "",
        parkCode: "wapa",
        latitude: 13.43795691,
        longitude: 144.6922461,
        states: ["gu"]
    },
    {
        fullName: "American Memorial Park",
        altName: "",
        parkCode: "amme",
        latitude: 15.21680033,
        longitude: 145.7231096,
        states: ["mp"]
    },
    {
        fullName: "San Juan National Historic Site",
        altName: "",
        parkCode: "saju",
        latitude: 18.46873857,
        longitude: -66.11848623,
        states: ["pr"]
    },
    {
        fullName: "Buck Island Reef National Monument",
        altName: "",
        parkCode: "buis",
        latitude: 17.81026717,
        longitude: -64.6222179,
        states: ["vi"]
    },
    {
        fullName: "Christiansted National Historic Site",
        altName: "",
        parkCode: "chri",
        latitude: 17.7468,
        longitude: -64.7022,
        states: ["vi"]
    },
    {
        fullName: "Salt River Bay National Historical Park and Ecological Preserve",
        altName: "",
        parkCode: "sari",
        latitude: 17.77908602,
        longitude: -64.75519348,
        states: ["vi"]
    },
    {
        fullName: "Virgin Islands Coral Reef National Monument",
        altName: "",
        parkCode: "vicr",
        latitude: 18.28996918,
        longitude: -64.70683395,
        states: ["vi"]
    },
    {
        fullName: "Virgin Islands National Park",
        altName: "",
        parkCode: "viis",
        latitude: 18.34279656,
        longitude: -64.74194451,
        states: ["vi"]
    }
];

export { parks };