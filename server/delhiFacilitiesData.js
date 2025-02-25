'use strict'

const delhiFacilitiesData = {
    "Rajeev Gandhi Super Speciality Hospital": {
      "type": "Delhi Govt",
      "address": "Taharpur Rd, Taharpur, Taharpur Village, Dilshad Garden, New Delhi, Delhi 110093",
      "contact_numbers": [
        "01122890773",
        "01122890789",
        "01122890611",
        "8595524745"
      ],
      "location": "https://www.google.co.in/maps/place/Rajiv+Gandhi+Super+Speciality+Hospital/@28.6892332,77.3142794,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfba4b99f38f3:0x9f0b2f69d75382a8!8m2!3d28.6892332!4d77.3164681?hl=en&authuser=0"
    },
    "Sardar Patel Covid Army  hospital": {
      "type": "Central Govt",
      "address": "Delhi",
      "contact_numbers": [
        "7303885606"
      ],
      "location": ""
    },
    "Dr Baba Saheb Ambedkar Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "01127049963"
      ],
      "location": ""
    },
    "MANIPAL HOSPITAL, DWARKA": {
      "type": "Pvt",
      "address": "Sector 6 adjoining MTNL building, Main Rd, Dwarka, New Delhi, Delhi 110075",
      "contact_numbers": [
        "7978031920",
        "8448288367"
      ],
      "location": "https://www.google.co.in/maps/place/Manipal+Hospital,+Dwarka,+Delhi/@28.5952007,77.0673823,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1b3ae0cf4f6f:0xec55552f03c1526d!8m2!3d28.5952007!4d77.069571?hl=en&authuser=0"
    },
    "Mool Chand Khairati Ram Hospital, Lajpat Nagar": {
      "type": "Pvt",
      "address": "Lala Lajpat Rai Marg, Near Moolchand Metro Station, Block M, Lajpat Nagar III, Lajpat Nagar, New Delhi, Delhi 110024",
      "contact_numbers": [
        "9818813891",
        "01142000000"
      ],
      "location": "https://www.google.co.in/maps/place/Moolchand+Medcity/@28.5664245,77.232954,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce24def72b52f:0x30d4690410c7d109!8m2!3d28.5664245!4d77.2351427?hl=en&authuser=0"
    },
    "Sir Ganga Ram Hospital": {
      "type": "Pvt",
      "address": "Sarhadi Gandhi Marg, Old Rajinder Nagar, Rajinder Nagar, New Delhi, Delhi 110060",
      "contact_numbers": [
        "01142253001",
        "01142253002",
        "01142253003",
        "9311407393",
        "9311407391"
      ],
      "location": "https://www.google.co.in/maps/place/Sir+Ganga+Ram+Hospital/@28.6385337,77.1875548,17z/data=!3m1!4b1!4m5!3m4!1s0x390d02a17c4ab835:0xecd838535c0fa0f6!8m2!3d28.6385337!4d77.1897435?hl=en&authuser=0"
    },
    "Bansal Hospital & Research Centre, New Friends Colony": {
      "type": "Pvt",
      "address": "Friends Colony, New Friends Colony, New Delhi, Delhi 110025",
      "contact_numbers": [
        "9650846789",
        "01146583333",
        "9650795533"
      ],
      "location": "https://www.google.com/maps/dir//Bansal+Hospital,+Friends+Colony,+New+Friends+Colony,+New+Delhi,+Delhi+110025/@28.5638237,77.2693463,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfd22ec2ea155:0xf4855bc92c9bff93!2m2!1d77.271535!2d28.563819!3e0"
    },
    "A.S. Kidney Hospital, Palam": {
      "type": "Pvt",
      "address": "1/46, Vijay Enclave, Main Opp. Jindal Public School, Main Dabri Palam Road, Palam Colony, New Delhi,110045",
      "contact_numbers": [
        "9871775909"
      ],
      "location": "https://www.google.com/maps/dir//Kidney+Hospital+%26+Stone+Centre,+1%2F46,+Vijay+Enclave,+Main+Opp.+Jindal+Public+School,+Main+Dabri+Palam+Road,+Palam+Colony,+New+Delhi,+Delhi+110045/@28.6067987,77.0790093,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d04ac0eecec6d:0xc9354f7a51605f3a!2m2!1d77.081198!2d28.606794!3e0"
    },
    "LHMC": {
      "type": "Central Govt",
      "address": "Near, Panchkuian Marg,Shivaji Stadium,New Delhi,110055",
      "contact_numbers": [
        "01123498269"
      ],
      "location": "https://www.google.com/maps/place/Lady+Hardinge+Hospital+(Kalawati+Hospital)/@28.6344213,77.2113456,17z/data=!4m8!1m2!2m1!1sGovt+Lady+Hardinge+Medical+College+!3m4!1s0x390cfd47e4555595:0xa62942dd4a960771!8m2!3d28.6355218!4d77.2141752"
    },
    "AIIMS, Trauma Delhi": {
      "type": "Central Govt",
      "address": "Delhi",
      "contact_numbers": [
        "01126731109"
      ],
      "location": "https://www.google.com/maps/dir//aiims+trauma+centre+delhi/@28.6010848,77.2005464,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390ce27bdb6b1bd5:0xc9efd955bf4c6eb1!2m2!1d77.2006879!2d28.5681895"
    },
    "AIIMS Main Delhi": {
      "type": "Central Govt",
      "address": "Sri Aurobindo Marg,Ansari Nagar East,Delhi 110029",
      "contact_numbers": [
        "01126588500"
      ],
      "location": "https://www.google.com/maps/dir//All+India+Institute+Of+Medical+Sciences,+New+Delhi,+Sri+Aurobindo+Marg,+Ansari+Nagar,+Ansari+Nagar+East,+New+Delhi,+Delhi+110029/@28.567182,77.2078564,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390ce26f903969d7:0x8367180c6de2ecc2!2m2!1d77.2100451!2d28.5671773!3e0"
    },
    "AIIMS Jhajjar": {
      "type": "Central Govt",
      "address": "Tehsil Badli, Jhajjar District, Badsa, Haryana 124105",
      "contact_numbers": [
        "9582222521"
      ],
      "location": "https://www.google.com/maps/place/All+India+Institute+of+Medical+Sciences,+Jhajjar+Campus/@28.4987734,76.8720675,15z/data=!4m5!3m4!1s0x0:0x2f6a61b5a8365b4b!8m2!3d28.4987734!4d76.8720675"
    },
    "Ram Manohar Lohia Hospital": {
      "type": "Central Govt",
      "address": "Baba Kharak Singh Rd, near Gurudwara Bangla Sahib,New Delhi,110001",
      "contact_numbers": [
        "01123365525"
      ],
      "location": "https://www.google.com/maps/place/Dr.+Ram+Manohar+Lohia+Hospital/@28.6257258,77.2016269,18z/data=!4m12!1m6!3m5!1s0x390cfd54897b42ab:0xaba569ad339668ef!2sDr.+Ram+Manohar+Lohia+Hospital!8m2!3d28.6257235!4d77.2027212!3m4!1s0x390cfd54897b42ab:0xaba569ad339668ef!8m2!3d28.6257235!4d77.2027212"
    },
    "Safdarjung Hospital": {
      "type": "Central Govt",
      "address": "Ansari Nagar East, New Delhi,110029",
      "contact_numbers": [
        "01126730000"
      ],
      "location": "https://www.google.com/maps/dir/Safdarjung+Hospital/Safdarjung+Hospital,+Ansari+Nagar+East,+near+to+AIIMS+Metro+Station,+New+Delhi,+Delhi+110029/@28.5680452,77.2036268,17z/data=!4m14!4m13!1m5!1m1!1s0x390ce27b1527eb57:0xf71af9b11f97c064!2m2!1d77.2058155!2d28.5680405!1m5!1m1!1s0x390ce27b1527eb57:0xf71af9b11f97c064!2m2!1d77.2058155!2d28.5680405!3e0"
    },
    "Lok Nayak Hospital": {
      "type": "Delhi Govt",
      "address": "Jawahar Lal Nehru Marg,Delhi.110002",
      "contact_numbers": [
        "08046820570"
      ],
      "location": "https://www.google.co.in/maps/place/Lok+Nayak+Hospital/@28.6731154,77.1870365,13z/data=!4m8!1m2!2m1!1sLok+Nayak+Hospital!3m4!1s0x390cfd27b3316b6d:0xa9d62fda6be69577!8m2!3d28.6382666!4d77.2385937?hl=en&authuser=0"
    },
    "Janakpuri S.S. Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9599144457"
      ],
      "location": ""
    },
    "Sardar Vallabh Bhai Patel Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9810233218"
      ],
      "location": ""
    },
    "Apex City Hospital, West Vinod Nagar": {
      "type": "Pvt",
      "address": "D-440, Hanuman Road, D-Block, West Vinod Nagar, IP Extension, New Delhi, Delhi 110091",
      "contact_numbers": [
        "8826395149",
        "8826395145",
        "9810811678"
      ],
      "location": "https://www.google.com/maps/dir//Apex+Citi+Hospital,+D-440,+Hanuman+Road,+D-Block,+West+Vinod+Nagar,+IP+Extension,+New+Delhi,+Delhi+110091/@28.6266163,77.2998208,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390ce4ba7250c627:0x2814000cf17983bc!2m2!1d77.3020095!2d28.6266116!3e0"
    },
    "Kukreja Hospital, Mayur Vihar": {
      "type": "Pvt",
      "address": "D 36, Block C, Acharya Niketan, Mayur Vihar, New Delhi, Delhi 110091",
      "contact_numbers": [
        "9711499163",
        "9560275021"
      ],
      "location": "https://www.google.co.in/maps/place/Kukreja+Hospital/@28.6092876,77.2926775,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce550188c7bdd:0xb6517f6c2cc013e3!8m2!3d28.6092876!4d77.2948662?hl=en&authuser=1"
    },
    "Malik Radix Hospital": {
      "type": "Pvt",
      "address": "C/216 Metro Station, C/218, Vikas Marg,Nirman Vihar, New Delhi, Delhi 110092",
      "contact_numbers": [
        "01122011192",
        "01122011196",
        "8800786277"
      ],
      "location": "https://www.google.com/maps/dir//Radix+Healthcare,+C%2F216+Metro+Station,+C%2F218,+Vikas+Marg,+near+Nirman+Vihar,+Nirman+Vihar,+New+Delhi,+Delhi+110092/@28.6356368,77.2858345,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfb561b16af7b:0x1301f7e5f5b7652b!2m2!1d77.2880232!2d28.6356321!3e0"
    },
    "Maharaja Agrasen Hospital, Dwarka": {
      "type": "Pvt",
      "address": "Sector-1, Dwaraka, New Delhi-110075",
      "contact_numbers": [
        "8826824672",
        "8447720118",
        "9990495495"
      ],
      "location": "https://www.google.com/maps/dir//+Maharaja+Agrasen+Hospital,Sector-1,+Dwaraka,+New+Delhi-110075/@28.6291413,77.0312206,12z"
    },
    "Action Cancer Hospital, Paschim Vihar": {
      "type": "Pvt",
      "address": "A 4 Block, Paschim Vihar, New Delhi, Delhi 110063",
      "contact_numbers": [
        "9810654439"
      ],
      "location": "https://www.google.co.in/maps/place/Action+Cancer+Hospital/@28.6688579,77.0890328,14z/data=!4m8!1m2!2m1!1sAction+Cancer!3m4!1s0x0:0x77d7a125e597773e!8m2!3d28.6731559!4d77.1131712?hl=en&authuser=0"
    },
    "Ishan Hospital, Rohini": {
      "type": "Pvt",
      "address": "Plot No.1, Pocket-8B, Dr MC Davar Marg, Sector 19, Rohini, Delhi, 110089",
      "contact_numbers": [
        "9212517399",
        "9811417399",
        "1127892799"
      ],
      "location": "https://www.google.com/maps/dir//Ishan+Hospital,+Plot+No.1,+Pocket-8B,+Dr+MC+Davar+Marg,+Sector+19,+Rohini,+Delhi,+110089/@28.7335347,77.1374815,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d010daa42bdaf:0xeb71176b5dd9b237!2m2!1d77.1396702!2d28.73353!3e0"
    },
    "Medeor Hospital, Dwarka": {
      "type": "Pvt",
      "address": "Near Ashirwad Chowk Sector 12, Phase 1, HAF-B, New Delhi, Delhi 110075",
      "contact_numbers": [
        "9810902575"
      ],
      "location": "https://www.google.co.in/maps/place/Medeor+Hospital/@28.5963815,77.0434386,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1adab5ebf583:0x3a696d01c90f74c7!8m2!3d28.5963815!4d77.0456273?hl=en&authuser=0"
    },
    "Bansal Global Hospital, Jahangirpuri": {
      "type": "Pvt",
      "address": "C-10, near Jahangirpuri Metro Station, Ramgarh, Ramgarh Village, Jahangirpuri, Delhi, 110033",
      "contact_numbers": [
        "9811062832",
        "9560932519",
        "9811162832"
      ],
      "location": "https://www.google.co.in/maps/place/Bansal+Global+Hospital+%7C+Best+Hospital+in+Delhi+NCR/@28.727312,77.1602263,17z/data=!3m1!4b1!4m5!3m4!1s0x390d01972990c36f:0xb06aff60fe26683f!8m2!3d28.727312!4d77.162415?hl=en&authuser=0"
    },
    "Cygnus Hospital": {
      "type": "Pvt",
      "address": "C-5/29, Opposite, IIT Delhi Main Rd, Safdarjung Development Area, Hauz Khas, New Delhi, Delhi 110016",
      "contact_numbers": [
        "9146543900"
      ],
      "location": "https://www.google.co.in/maps/place/Cygnus+Orthocare/@28.546184,77.1950523,17z/data=!4m12!1m6!3m5!1s0x390ce2099d05543f:0xca43323f2ae5dfd1!2sCygnus+Orthocare+Hospital,+Orthopedic+Hospital+In+Delhi!8m2!3d28.546184!4d77.197241!3m4!1s0x390ce2099d05543f:0xca43323f2ae5dfd1!8m2!3d28.546184!4d77.197241?hl=en&authuser=1"
    },
    "Bhagwan Mahavir Hospital, Madhuban Chowk": {
      "type": "Pvt",
      "address": "Delhi",
      "contact_numbers": [
        "9582585676",
        "01127550441",
        "01127550442"
      ],
      "location": ""
    },
    "Bhagwati Hospital, Rohini": {
      "type": "Pvt",
      "address": "CS/OCF, 6, Jain Mandir Marg, near Printer Apartment, Sector 13, Rohini, New Delhi, Delhi 110085",
      "contact_numbers": [
        "01143126000",
        "01143126100",
        "01127554179",
        "01127554182",
        "01127554135",
        "9953711474"
      ],
      "location": "https://www.google.co.in/maps/place/Bhagwati+Hospital/@28.7191147,77.127401,17z/data=!3m1!4b1!4m8!1m2!2m1!1sBhagwati+Hospital!3m4!1s0x0:0x450b284041fdee9b!8m2!3d28.7191197!4d77.1296024?hl=en&authuser=0"
    },
    "Sanjay Gandhi Memorial Hospital": {
      "type": "Delhi Govt",
      "address": "Block U, Mangolpuri S Block, Delhi, 110083",
      "contact_numbers": [
        "01127913220"
      ],
      "location": "https://www.google.com/maps/dir//Sanjay+Gandhi+hospital+adminstrative+block,+Block+U,+Mangolpuri+S+Block,+Delhi,+110083/@28.6173631,77.2420945,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d05ac46bc2341:0x4125f261748a8a6c!2m2!1d77.0801899!2d28.6911628!3e0"
    },
    "Lal Bahadur Shastri Hospital": {
      "type": "Delhi Govt",
      "address": "384, Indra Camp, near Lal Bahadur Shashtri hospital emergency gate, Khichripur, Kalyan Puri, Delhi, 110091",
      "contact_numbers": [
        "9582500323"
      ],
      "location": "https://www.google.com/maps/dir//Lal+Bahadur+Shastri+Hospital,+384,+Indra+Camp,+near+Lal+Bahadur+Shashtri+hospital+emergency+gate,+Khichripur,+Kalyan+Puri,+Delhi,+110091/@28.6169603,77.3099458,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390ce5937b2c99f9:0xfc405c47d6745d4d!2m2!1d77.3120119!2d28.6181582!3e0"
    },
    "Nehru Homoeopatbhic medical College and Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "8851223131"
      ],
      "location": ""
    },
    "Guru Gobind Singh Govt. Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9718393946"
      ],
      "location": ""
    },
    "Central Jail Hospital, Tihar": {
      "type": "Central Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9999764194"
      ],
      "location": ""
    },
    "Jag Pravesh Chandra Hospital": {
      "type": "Delhi Govt",
      "address": "Panduk Shila Marg, near Northern Engineering College, Shastri Park, Shahdara, New Delhi,110053",
      "contact_numbers": [
        "7290076813"
      ],
      "location": "https://www.google.com/maps/dir//Jag+Pravesh+Chandra+Hospital,+Panduk+Shila+Marg,+near+Northern+Engineering+College,+Shastri+Park,+Shahdara,+New+Delhi,+Delhi+110053/@28.6762508,77.2607269,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfc5e2d1ad07b:0xf62689cdd9ab9a64!2m2!1d77.2629156!2d28.6762461!3e0"
    },
    "Rao Tula Ram Memorial Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "7835064189"
      ],
      "location": ""
    },
    "Pt. Madan Mohan Malviya Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9911573358"
      ],
      "location": ""
    },
    "Maharishi Valmiki Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9811154939"
      ],
      "location": ""
    },
    "Acharyashree Bhikshu Govt. Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "01125423514",
        "9667136071"
      ],
      "location": "https://www.google.com/maps/dir//Acharyashree+Bhikshu+Govt.+Hospital/@28.6460444,77.1250141,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d03a9d462cbdf:0x41ed592d5c184d65!2m2!1d77.1402561!2d28.6620879"
    },
    "Burari Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "01127611215",
        "01127611201"
      ],
      "location": ""
    },
    "Dr Hedgewar Arogya Sansthan": {
      "type": "Delhi Govt",
      "address": "F.18 Dr. Hedgewar Arogya Sansthan, East Arjun Nagar, Karkardooma, Shahdara, Delhi, 110032",
      "contact_numbers": [
        "8383909488"
      ],
      "location": "https://www.google.com/maps/dir//Dr.+Hedgewar+Arogya+Sansthan,+F.18+Dr.+Hedgewar+Arogya+Sansthan,+East+Arjun+Nagar,+Karkardooma,+Shahdara,+Delhi,+110032/@28.6561732,77.2947467,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfb6723314a35:0xcd174f44ee3a52d9!2m2!1d77.2947467!2d28.6561732!3e0"
    },
    "Maulana Mazad Institute of Dental Sciences": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9654700983"
      ],
      "location": ""
    },
    "Dr. N.C. Joshi Mem. Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "7827953505"
      ],
      "location": ""
    },
    "Bhagwan Mahavir Hospital": {
      "type": "Delhi Govt",
      "address": "H-4,5, Pitampura, Delhi, 110034",
      "contact_numbers": [
        "9910847556"
      ],
      "location": "https://www.google.com/maps/dir//Bhagwan+Mahavir+Hospital,+H-4,5,+Pitampura,+Delhi,+110034/@28.6440659,77.230917,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d03ec212cbfd3:0x48c5f9dde458f8f5!2m2!1d77.1179596!2d28.688153!3e0"
    },
    "SDDMASC": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9599291608"
      ],
      "location": ""
    },
    "B. R Sur Homoeopathic Medical College and Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9560603281"
      ],
      "location": ""
    },
    "K K Surgical & Maternity Centre": {
      "type": "Pvt",
      "address": "B-37, Loni Rd, Landmark: Near Axis Bank, Jyoti Nagar East, Jyoti Nagar, Shahdara, Delhi, 110093",
      "contact_numbers": [
        "9999577020",
        "9810115673"
      ],
      "location": "https://www.google.co.in/maps/place/K+K+Surgical+and+Maternity+Centre/@28.6929854,77.2898214,17z/data=!4m12!1m6!3m5!1s0x390cfb88b5a57d43:0x3c4adabf577973de!2sK+K+Surgical+and+Maternity+Centre!8m2!3d28.6929854!4d77.2920101!3m4!1s0x390cfb88b5a57d43:0x3c4adabf577973de!8m2!3d28.6929854!4d77.2920101?hl=en&authuser=0"
    },
    "Northern Railway": {
      "type": "Central Govt",
      "address": "Delhi",
      "contact_numbers": [
        "01123747984"
      ],
      "location": ""
    },
    "Batra Hospital": {
      "type": "Pvt",
      "address": "1, Mehrauli - Badarpur Rd, Tughlakabad Institutional Area, Vayusenabad, New Delhi, Delhi 110062",
      "contact_numbers": [
        "01129958747",
        "01129903001",
        "01129902001",
        "01129051280"
      ],
      "location": "https://www.google.co.in/maps/place/Batra+Hospital+%26+Medical+Research+Centre/@28.5130972,77.243601,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce17498536571:0x3f5d6c5cdcac9bfd!8m2!3d28.5138628!4d77.2455181?hl=en&authuser=0"
    },
    "MAX SS HOSPITAL, PATPARGANJ": {
      "type": "Pvt",
      "address": "108A, I.P.Extension, Patparganj, Delhi, 110092",
      "contact_numbers": [
        "8800333777"
      ],
      "location": "https://www.google.co.in/maps/place/Max+Super+Speciality+Hospital,+Patparganj/@28.6329274,77.3068187,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfb3558b5ac9d:0x8d590e3c6772a3c5!8m2!3d28.6329274!4d77.3090074?hl=en&authuser=0"
    },
    "Satyawati Harishchand Hsopital": {
      "type": "Delhi Govt",
      "address": "Narela, Delhi-110040",
      "contact_numbers": [
        "01127787008",
        "01127781044",
        "01127781045",
        "01127781046",
        "01127781047"
      ],
      "location": "https://www.google.co.in/maps/place/Satyawadi+Raja+Harish+Chandra+Hospital/@28.8411336,77.1004572,17z/data=!3m1!4b1!4m5!3m4!1s0x390daa2aaf85c671:0xf308066ae782a6ad!8m2!3d28.8411336!4d77.1026459?hl=en&authuser=0"
    },
    "Deep Chand Bandhu": {
      "type": "Delhi Govt",
      "address": "Kokiwala Bagh,Ashok Vihar,Phase-IV,New Delhi",
      "contact_numbers": [
        "01127305952",
        "8929121749",
        "7290025141"
      ],
      "location": "https://www.google.co.in/maps/place/Deep+Chand+Bandhu+Government+Hospital/@28.6817859,77.177625,19z/data=!3m1!4b1!4m5!3m4!1s0x390d026eb9813309:0x904ba664a17f282a!8m2!3d28.6817859!4d77.1781722?hl=en&authuser=0"
    },
    "GTB Hospital": {
      "type": "Delhi Govt",
      "address": "Shahdara,Delhi.110095",
      "contact_numbers": [
        "8595948014",
        "8595948019",
        "8595948020",
        "8595948026",
        "8595948027"
      ],
      "location": "https://www.google.co.in/maps/place/Guru+Teg+Bahadur+Hospital/@28.6840049,77.307225,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfba21a6a5ca5:0xcf9a12647e164d08!8m2!3d28.6840049!4d77.3094137?hl=en&authuser=0"
    },
    "Maha Durga Charitable Trust Hospital": {
      "type": "Pvt",
      "address": "Rishabh Park, Phase 3, Model Town, Delhi, 110009",
      "contact_numbers": [
        "9811755635",
        "8076344435",
        "9212266606",
        "9212266616"
      ],
      "location": "https://www.google.co.in/maps/place/Mahadurga+Charitable+Trust/@28.7142592,77.1844131,17z/data=!3m1!4b1!4m5!3m4!1s0x390d01f8f0030d41:0x9212a6e765e73b1d!8m2!3d28.7142592!4d77.1866018?hl=en&authuser=0"
    },
    "A&U Tibbia College": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9354925043"
      ],
      "location": ""
    },
    "INDRAPRASTHA APOLLO HOSPITAL, SARITA VIHAR": {
      "type": "Pvt",
      "address": "Indraprastha Apollo Hospitals, Sarita Vihar, New Delhi, Delhi 110076",
      "contact_numbers": [
        "01126925801",
        "8929700875"
      ],
      "location": "https://www.google.co.in/maps/place/Dr+Arun+Prasad+-+Minimal+Access+,+Bariatric+and+Robotic+Surgeon/@28.5405965,77.2812367,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce6ad13eaaa99:0x3bc07ad476bc6d77!8m2!3d28.5405965!4d77.2834254?hl=en&authuser=0"
    },
    "Sir Ganga Ram City Hospital": {
      "type": "Pvt",
      "address": "B-2, Pusa Rd, North Extension Area, Rajinder Nagar, New Delhi, Delhi 110005",
      "contact_numbers": [
        "01142255555"
      ],
      "location": "https://www.google.com/maps/dir//Sir+Ganga+Ram+City+Hospital,+B-2,+Pusa+Rd,+North+Extension+Area,+Rajinder+Nagar,+New+Delhi,+Delhi+110005/@28.6412732,77.1881421,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d03b3cd6396b1:0xf31ed2814540b413!2m2!1d77.1909181!2d28.6440034!3e0"
    },
    "Fortis Hospital, Shalimar Bagh": {
      "type": "Pvt",
      "address": "AA-299, Shaheed Udham Singh Marg, AA Block, Poorbi Shalimar Bag, Shalimar Bagh, Delhi, 110088",
      "contact_numbers": [
        "9821051424",
        "7303431467"
      ],
      "location": "https://www.google.co.in/maps/place/Fortis+Hospital,+Shalimar+Bagh/@28.7095568,77.1677243,17z/data=!3m1!4b1!4m5!3m4!1s0x390d02206e9e71cf:0xb096542618cd68b4!8m2!3d28.7095568!4d77.169913?hl=en&authuser=0"
    },
    "Saroj Super Speciality Hospital": {
      "type": "Pvt",
      "address": "Bhagawan Mahavir Marg, Near Madhuban Chowk, Block A, Sector 14, Rohini, New Delhi, Delhi 110085",
      "contact_numbers": [
        "01127903333",
        "01147903333"
      ],
      "location": "https://www.google.co.in/maps/place/Saroj+Super+Speciality+Hospital/@28.70613,77.1269043,17z/data=!3m1!4b1!4m5!3m4!1s0x390d03df7b9d0c0b:0xd48bf519a4c75ed5!8m2!3d28.70613!4d77.129093?hl=en&authuser=0"
    },
    "Dharamshila Narayana Hosp., Vasundhra Enclave": {
      "type": "Pvt",
      "address": "Metro Station, Dharamshila marg, Vasundhara Enclave Near Ashok Nagar, Dallupura, New Delhi, Delhi 110096",
      "contact_numbers": [
        "8067506880",
        "7370073700",
        "7290074708"
      ],
      "location": "https://www.google.co.in/maps/place/Dharamshila+Narayana+Superspeciality+Hospital/@28.6025216,77.3119395,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce4eeffffffff:0x75d3303be5f4d44d!8m2!3d28.6025216!4d77.3141282?hl=en&authuser=0"
    },
    "Sanjeevan Medical Res. , Daryaganj": {
      "type": "Pvt",
      "address": "24, Ansari Rd, Daryaganj, New Delhi, Delhi 110002",
      "contact_numbers": [
        "9810203358",
        "01145770000"
      ],
      "location": "https://www.google.com/maps/dir//Sanjeevan+Hospital,+24,+Ansari+Rd,+Daryaganj,+New+Delhi,+Delhi+110002/@28.9565706,76.8833549,9z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfcd97cfadb5b:0xeec8c89cdfac676d!2m2!1d77.2429296!2d28.6412212!3e0"
    },
    "Sant Parmanand Hospital, Civil Lines": {
      "type": "Pvt",
      "address": "18, Sham Nath Marg, Civil Lines, New Delhi, Delhi 110054",
      "contact_numbers": [
        "01123994401",
        "01123994402",
        "01123926465"
      ],
      "location": "https://www.google.co.in/maps/place/Sant+Parmanand+Hospital/@28.677724,77.222005,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfda4659a8cfb:0x65f7588989a0e57f!8m2!3d28.677724!4d77.2241937?hl=en&authuser=0"
    },
    "Santom Hospital, Prashant Vihar": {
      "type": "Pvt",
      "address": "D-5-6, Outer Ring Rd, Prashant Vihar, Sector 14, Rohini, New Delhi, Delhi 110085",
      "contact_numbers": [
        "01127562255",
        "01127561024"
      ],
      "location": "https://www.google.co.in/maps/place/Santom+Hospital/@28.713987,77.1362141,17z/data=!3m1!4b1!4m5!3m4!1s0x390d0175aaed9b7d:0xf4ad5d1decfd39d!8m2!3d28.713987!4d77.1384028?hl=en&authuser=0"
    },
    "Saroj Medical Institute, Rohini": {
      "type": "Pvt",
      "address": "78B, Sector 19, Rohini, Delhi, 110042",
      "contact_numbers": [
        "9811282538"
      ],
      "location": "https://www.google.co.in/maps/place/Saroj+Medical+Institute/@28.7339609,77.1368591,17z/data=!3m1!4b1!4m5!3m4!1s0x390d014e5382c2e9:0x8a5b91b0a2f40ab5!8m2!3d28.7339609!4d77.1390478?hl=en&authuser=1"
    },
    "Revive Hospital,tilak nagar": {
      "type": "Pvt",
      "address": "5A/2, Tilak Nagar, Opp. Metro Pillar No.491, Tilak Nagar, near Police Station, New Delhi, Delhi 110018",
      "contact_numbers": [
        "9891534100",
        "9718932941"
      ],
      "location": "https://www.google.co.in/maps/place/Revive+Hospital/@28.6393489,77.0993334,17z/data=!4m12!1m6!3m5!1s0x390d049e3db72e13:0xc8a221d275604a39!2sRevive+Hospital!8m2!3d28.6393489!4d77.1015221!3m4!1s0x390d049e3db72e13:0xc8a221d275604a39!8m2!3d28.6393489!4d77.1015221?hl=en&authuser=0"
    },
    "Samar Hospital, Dwarka": {
      "type": "Pvt",
      "address": "Opp. St. Thomas School, Goyla Vihar, Sector 19, Dwarka, New Delhi 110071",
      "contact_numbers": [
        "9818096199",
        "9213210218"
      ],
      "location": "https://www.google.com/maps/dir//Samar+Hospital,+50+Bedded+Multispeciality+Centre,+Opp.+St.+Thomas+School,+Goyla+Vihar,+Sector+19,+Dwarka,+New+Delhi,+Delhi+110071/@28.5820135,77.0129409,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d1aa1eead1f11:0x3d65bb4852b4fe80!2m2!1d77.0151296!2d28.5820088!3e0"
    },
    "RLKC Metro Hospital, Naraina": {
      "type": "Pvt",
      "address": "Pandav Nagar, Naraina Road, Near Shadipur Metro Station, New Delhi, Delhi 110008",
      "contact_numbers": [
        "01161316666",
        "9910488472"
      ],
      "location": "https://www.google.co.in/maps/place/RLKC+Hospital+%26+Metro+Heart+Institute/@28.6511745,77.152566,17z/data=!3m1!4b1!4m5!3m4!1s0x390d02e3196a9c2b:0xee100ef336a2a000!8m2!3d28.6511745!4d77.1547547?hl=en&authuser=0"
    },
    "Satyabhama Hospital, Nangloi": {
      "type": "Pvt",
      "address": "RZ-10, Naresh Park, Najafgarh Road, Nangloi, Near Water Tank, New Delhi, Delhi 110041",
      "contact_numbers": [
        "9311116607",
        "8506008075",
        "01124943107",
        "01125942303"
      ],
      "location": "https://www.google.co.in/maps/place/Satyabhama+Hospital+Private+Limited/@28.6769985,77.0612034,17z/data=!3m1!4b1!4m5!3m4!1s0x390d04363ac7defb:0xabc9e61a22f9154e!8m2!3d28.6769985!4d77.0633921?hl=en&authuser=1"
    },
    "Sehgal Neo Hospital, Paschim Vihar": {
      "type": "Pvt",
      "address": "B-362, 363, 364, Outer Ring Rd, Near to ICICI Bank, Block B, Meera Bagh, Paschim Vihar, New Delhi, Delhi 110063",
      "contact_numbers": [
        "8527597171",
        "01145565656"
      ],
      "location": "https://www.google.co.in/maps/place/Sehgal+Neo+Hospital/@28.6580564,77.0892399,17z/data=!3m1!4b1!4m5!3m4!1s0x390d0462a45f9dcb:0xb0255f881c728ba2!8m2!3d28.6580564!4d77.0914286?hl=en&authuser=0"
    },
    "BLK Hospital, Pusa Road": {
      "type": "Pvt",
      "address": "BLK Super Specialty Hospital, Radha Soami Satsang, Rajendra Place, New Delhi, Delhi 110005",
      "contact_numbers": [
        "8448386700",
        "9311365796",
        "01130653299",
        "8130697446",
        "01130653040"
      ],
      "location": "https://www.google.co.in/maps/place/Dr.+Ishwar+Bohra+-+B+L+Kapur+Hospital/@28.6433262,77.1774484,17z/data=!4m8!1m2!2m1!1sBL+Kapoor!3m4!1s0x390ce456aaaaaa9b:0x22aacaf2a83a0035!8m2!3d28.6433034!4d77.1797051?hl=en&authuser=0"
    },
    "Delhi Heart & Lung Institute, Pachkuian Road": {
      "type": "Pvt",
      "address": "3, Panchkuian Marg, Type 4, Block B, Aram Bagh, Rolex, New Delhi, Delhi 110055",
      "contact_numbers": [
        "01142999999",
        "01142999901"
      ],
      "location": "https://www.google.co.in/maps/place/Delhi+Heart+%26+Lung+Institute/@28.6416479,77.2030544,17z/data=!4m12!1m6!3m5!1s0x390cfd5cda95cbd5:0xe47138854cec7a5f!2sDelhi+Heart+%26+Lung+Institute!8m2!3d28.6416479!4d77.2052431!3m4!1s0x390cfd5cda95cbd5:0xe47138854cec7a5f!8m2!3d28.6416479!4d77.2052431?hl=en&authuser=0"
    },
    "Jeewan Mala Hospital, Rohtak Road": {
      "type": "Pvt",
      "address": "67/1 New Rohtak Road, Guru Gobind Singh Marg, Karol Bagh, New Delhi, Delhi 110005",
      "contact_numbers": [
        "01147774151",
        "01147774132",
        "9212167895"
      ],
      "location": "https://www.google.co.in/maps/place/Jeewan+Mala+Hospital/@28.6579666,77.1920975,17z/data=!3m1!4b1!4m5!3m4!1s0x390d0282839881cf:0x2c1be8860b8e3bb5!8m2!3d28.6579666!4d77.1942862?hl=en&authuser=0"
    },
    "Kapil Multispecialty Hospital, Nathupura": {
      "type": "Pvt",
      "address": "A-1 shastri park mor, Nathupura, Burari, New Delhi, Delhi 110084",
      "contact_numbers": [
        "9990781810",
        "8448375462"
      ],
      "location": "https://www.google.com/maps/dir//Kapil+Multispeciality+Hospital-Best+Hospital+In+Burari+-+Best+ICU+%26+Maternity+Centre+In+Burari+Delhi,+A-1+shastri+park+mor,+Nathupura,+Burari,+New+Delhi,+Delhi+110084/@28.7676385,77.1795237,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d0030156df6cb:0x152063bf2c7eb021!2m2!1d77.1817124!2d28.7676338!3e0"
    },
    "NKS Hospital, Gulabi Bagh": {
      "type": "Pvt",
      "address": "219, 220, Sanjay Nagar, Gulabi Bagh, Delhi, 110007",
      "contact_numbers": [
        "8130894500",
        "01123666666"
      ],
      "location": "https://www.google.co.in/maps/place/NKS+Super+Specialty+Hospital/@28.6752667,77.1885456,17z/data=!3m1!4b1!4m5!3m4!1s0x390d02790a476351:0x2af17b61d3d76c4c!8m2!3d28.6752667!4d77.1907343?hl=en&authuser=0"
    },
    "St. Stephens Hospital, Tis Hazari": {
      "type": "Pvt",
      "address": "St. Stephen's Hospital Marg, Tis Hazari, New Delhi,110054",
      "contact_numbers": [
        "01123966021"
      ],
      "location": "https://www.google.com/maps/place/St.+Stephen's+Hospital/@28.6668018,77.2124258,17z/data=!4m12!1m6!3m5!1s0x390cfd7458eee0db:0xbc22d8e585c02caa!2sSt.+Stephen's+Hospital!8m2!3d28.6667971!4d77.2146145!3m4!1s0x390cfd7458eee0db:0xbc22d8e585c02caa!8m2!3d28.6667971!4d77.2146145"
    },
    "Jeevan Anmol Hospital, Mayur Vihar Phase-I": {
      "type": "Pvt",
      "address": "JEEVAN ANMOL HOSPITAL, Mayur Vihar, Delhi, 110091",
      "contact_numbers": [
        "01122795237",
        "01122750380",
        "8527677688"
      ],
      "location": "https://www.google.co.in/maps/place/JEEVAN+ANMOL+HOSPITAL+MAYUR+VIHAR+PHASE-1/@28.6060799,77.2932494,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce5f1ae39af5d:0xb5d318f6e37e2acd!8m2!3d28.6060799!4d77.2954381?hl=en&authuser=0"
    },
    "Khandelwal Hospital And Urology Center": {
      "type": "Pvt",
      "address": "B-16, Main Road, East Krishna Nagar, East Krishna Nagar, New Delhi, Delhi 110051",
      "contact_numbers": [
        "9212745664",
        "01142408561",
        "01142408591"
      ],
      "location": "https://www.google.com/maps/dir//Khandelwal+Hospital+And+Urology+Center,+B-16,+Main+Road,+East+Krishna+Nagar,+East+Krishna+Nagar,+New+Delhi,+Delhi+110051/@28.6604074,77.2856158,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfb618bffffff:0xd8d666e13174efdd!2m2!1d77.2878045!2d28.6604027!3e0"
    },
    "Metro Hospital, Preet Vihar": {
      "type": "Pvt",
      "address": "Community Center, 21, Acharya Nagraj Marg, C Block, Preet Vihar, New Delhi, Delhi 110092",
      "contact_numbers": [
        "01149286666"
      ],
      "location": "https://www.google.co.in/maps/place/Metro+Hospital+%26+Cancer+Institute/@28.6385409,77.2926434,17z/data=!4m12!1m6!3m5!1s0x390cfb507ceaaaab:0xea6d1883d03891ab!2sMetro+Hospital+%26+Cancer+Institute!8m2!3d28.6385409!4d77.2948321!3m4!1s0x390cfb507ceaaaab:0xea6d1883d03891ab!8m2!3d28.6385409!4d77.2948321?hl=en&authuser=1"
    },
    "Fortis SS Hospital, Vasant Kunj": {
      "type": "Pvt",
      "address": "Fortis Flt. Lt. Rajan Dhall Hospital, Aruna Asaf Ali Marg, Pocket 1, Sector B, Vasant Kunj, New Delhi, Delhi 110070",
      "contact_numbers": [
        "01142776222"
      ],
      "location": "https://www.google.co.in/maps/place/Fortis+Flt.+Lt.+Rajan+Dhall+Hospital,+Vasant+Kunj/@28.5192105,77.1581008,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1d080c000001:0xdc68ebc7ff708935!8m2!3d28.5192105!4d77.1602895?hl=en&authuser=0"
    },
    "Indian spinal injury centre,Vasant Kunj": {
      "type": "Pvt",
      "address": "Vasant Kunj Marg, Opp Vasant Valley School, IAA Colony, Sector C, Vasant Kunj, New Delhi, Delhi 110070",
      "contact_numbers": [
        "01142255384"
      ],
      "location": "https://www.google.co.in/maps/place/Indian+Spinal+Injuries+Centre/@28.5331214,77.1399956,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1e79d7df15ef:0x23875d98d5870d76!8m2!3d28.5331214!4d77.1421843?hl=en&authuser=0"
    },
    "Tirath Ram Shah Charitable Hospital, Civil Lines": {
      "type": "Pvt",
      "address": "2A Isher Das Sawhney Marg Near Tis Hazari Metro Station R.B.L, New Delhi, Delhi 110054",
      "contact_numbers": [
        "8375975629",
        "01123948484"
      ],
      "location": "https://www.google.co.in/maps/place/Tirath+Ram+Shah+Hospital/@28.670817,77.2141112,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfd9f92772c15:0x41e3e7d605df85d3!8m2!3d28.670817!4d77.2162999?hl=en&authuser=0"
    },
    "Bara Hindurao Hospital": {
      "type": "Central Govt",
      "address": "Delhi",
      "contact_numbers": [
        "01123905839",
        "01123905703"
      ],
      "location": ""
    },
    "Primus Super Specialty Hospital, Chanakyapuri": {
      "type": "Pvt",
      "address": "2, Chandragupta Marg, Chanakyapuri, New Delhi, Delhi 110021",
      "contact_numbers": [
        "9910071222"
      ],
      "location": "https://www.google.co.in/maps/place/Primus+Super+Speciality+Hospital/@28.5929023,77.1790854,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1d68ebafe4b1:0x15e3c02de46eb6b6!8m2!3d28.5929023!4d77.1812741?hl=en&authuser=0"
    },
    "Dr. Chaudhary Moral Hospital, Yamuna Vihar": {
      "type": "Pvt",
      "address": "C - 1, Block C, Yamuna Vihar, Shalimar Garden, Delhi, 110053",
      "contact_numbers": [
        "9810110566",
        "9810110366"
      ],
      "location": "https://www.google.com/maps/dir//Dr+Chaudhry's+Moral+Hospital+Pvt.+Ltd.,+C+-+1,+Block+C,+Yamuna+Vihar,+Shalimar+Garden,+Delhi,+110053/@28.702343,77.2702439,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfc1231c43109:0x1702c79b053c2198!2m2!1d77.2724326!2d28.7023383!3e0"
    },
    "Panchsheel Hospital, Yamuna Vihar": {
      "type": "Pvt",
      "address": "police station, C-3/63A, 64A, Yamuna Vihar, Opp, Gokalpuri, Delhi, 110053",
      "contact_numbers": [
        "9717611842",
        "9999434453",
        "01143541234",
        "01122914817",
        "01143540604"
      ],
      "location": "https://www.google.co.in/maps/place/Panchsheel+Hospital+Pvt.+Ltd./@28.7016942,77.2774656,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfc3db4e1a737:0xb1d3585962c0233b!8m2!3d28.7016942!4d77.2796543?hl=en&authuser=1"
    },
    "Brahm Shakti Hospital, Budh Vihar": {
      "type": "Pvt",
      "address": "No.U, 1/78, Kanjhawala Rd, Pocket C, Budh Vihar Phase I, Budh Vihar, New Delhi, Delhi 110086",
      "contact_numbers": [
        "7840089703",
        "8882029306"
      ],
      "location": "https://www.google.co.in/maps/place/Brahm+Shakti+Hospital/@28.7016781,77.0758333,15z/data=!4m8!1m2!2m1!1sBrahm+Shakti+Hospital!3m4!1s0x390d06a2c1532bb7:0xd417458301820e22!8m2!3d28.7123705!4d77.0812466?hl=en&authuser=0"
    },
    "Dharamvir Solanki Hospital, Rohini": {
      "type": "Pvt",
      "address": "100 Feet Rd, opp. Sector 22, Lakhi Ram Park, Sector 22, Rohini, Delhi, 110086",
      "contact_numbers": [
        "9311483147",
        "9811188128"
      ],
      "location": "https://www.google.co.in/maps/place/Dharamveer+Solanki+Multispeciality+Hospital/@28.7149575,77.0558508,17z/data=!3m1!4b1!4m5!3m4!1s0x390d07b67d8a7965:0xb0a25b6fcc5650bf!8m2!3d28.7149575!4d77.0580395?hl=en&authuser=1"
    },
    "Jaipur Golden Hospital, Rohini": {
      "type": "Pvt",
      "address": "2, Naharpur Village Rd, Institutional Area, Sector 3, Rohini, Delhi, 110085",
      "contact_numbers": [
        "8929730572",
        "01127907000"
      ],
      "location": "https://www.google.co.in/maps/place/Jaipur+Golden+Hospital/@28.6976327,77.107374,17z/data=!3m1!4b1!4m5!3m4!1s0x390d03fb225cad53:0x3240cf47ab38df74!8m2!3d28.6976327!4d77.1095627?hl=en&authuser=0"
    },
    "Lalita Hospital, Begumpur": {
      "type": "Pvt",
      "address": "Parnami Market Rd, Rajiv Nagar Extension, Sector 38, Begum Pur, Delhi, 110081",
      "contact_numbers": [
        "8595075850",
        "8076868086",
        "7678669919"
      ],
      "location": "https://www.google.co.in/maps/place/Lalita+Hospital/@28.730684,77.0613213,17z/data=!3m1!4b1!4m5!3m4!1s0x390d06f13e701cdb:0x3262191db76ad458!8m2!3d28.730684!4d77.06351?hl=en&authuser=1"
    },
    "Navjeevan Hospital, Pitampura": {
      "type": "Pvt",
      "address": "655, Onkar Nagar B, Onkar Nagar, Tri Nagar, New Delhi, Delhi 110035",
      "contact_numbers": [
        "8802693809",
        "9999106295",
        "01146600700"
      ],
      "location": "https://www.google.co.in/maps/place/Navjeevan+Hospital/@28.7086088,77.0365017,12z/data=!4m8!1m2!2m1!1sNavjeevan+Hospital!3m4!1s0x0:0xf5248554ea6688b8!8m2!3d28.6751327!4d77.1591711?hl=en&authuser=0"
    },
    "Rajiv Gandhi Cancer Institute & RC, Rohini*": {
      "type": "Pvt",
      "address": "Sir Chotu Ram Marg, Rohini Institutional Area, Sector 5, Rohini, New Delhi, Delhi 110085",
      "contact_numbers": [
        "9717888473",
        "0114722666"
      ],
      "location": "https://www.google.co.in/maps/place/Rajiv+Gandhi+Cancer+Institute+%26+Research+Centre/@28.7166817,77.1092285,17z/data=!3m1!4b1!4m5!3m4!1s0x390d01f9f5ef8ff1:0x57345a618ab5b2e7!8m2!3d28.7166817!4d77.1114172?hl=en&authuser=0"
    },
    "East Delhi Medical Centre Mansarover Park": {
      "type": "Pvt",
      "address": "1/550, GT Road, East Ram Nagar, Mansarovar Park, Shahdara, New Delhi, Delhi 110032",
      "contact_numbers": [
        "01122583204",
        "01122596736",
        "8800526644"
      ],
      "location": "https://www.google.co.in/maps/place/East+Delhi+Medical+Centre/@28.6761117,77.2944185,17z/data=!4m12!1m6!3m5!1s0x390cfb78782b08f9:0x81708ec8789b1fd1!2sEast+Delhi+Medical+Centre!8m2!3d28.6761117!4d77.2966072!3m4!1s0x390cfb78782b08f9:0x81708ec8789b1fd1!8m2!3d28.6761117!4d77.2966072?hl=en&authuser=1"
    },
    "Garg Hospital, Karkardooma": {
      "type": "Pvt",
      "address": "No. 8& 9, AGCR Enclave, Opposite Karkardooma Court, New Delhi, Delhi 110092",
      "contact_numbers": [
        "01143274444",
        "01145152556"
      ],
      "location": "https://www.google.com/maps/dir//Garg+Hospital,+No.+8%26+9,+AGCR+Enclave,+Opposite+Karkardooma+Court,+New+Delhi,+Delhi+110092/@28.6531735,77.2927372,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfb5d828eeed5:0x910a26fd6f8efb5!2m2!1d77.2949259!2d28.6531688!3e0"
    },
    "Goyal Hospital & Urology Centre, Krishna Nagar": {
      "type": "Pvt",
      "address": "E-4/8, Krishna Nagar, near Lajpat Rai, Chandni Chowk, New Delhi, Delhi 110051",
      "contact_numbers": [
        "9015142888",
        "7011221183",
        "01122091851"
      ],
      "location": "https://www.google.co.in/maps/place/Goyal+Hospital+%26+Urology+Centre/@28.6611623,77.2802346,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfc9c6aaaaaab:0xa13da879fdc77fcb!8m2!3d28.6611623!4d77.2824233?hl=en&authuser=0"
    },
    "Gupta Multispecialty Hospital, Vivek Vihar": {
      "type": "Pvt",
      "address": "B-20,, Vivek Vihar Phase I, Vivek Vihar, New Delhi, Delhi 110095",
      "contact_numbers": [
        "01145652410",
        "7011223809"
      ],
      "location": "https://www.google.com/maps/dir//Gupta+Multispeciality+Hospital,+B-20,,+Vivek+Vihar+Phase+I,+Vivek+Vihar,+New+Delhi,+Delhi+110095/@28.6681668,77.3182412,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfb0fe6bf68c9:0xc8e08eafb474e347!2m2!1d77.3204299!2d28.6681621!3e0"
    },
    "Jain Hospital, Vikas Marg Extn.": {
      "type": "Pvt",
      "address": "177-178, Jagriti Enclave, Vikas Marg Ext, New Delhi, Delhi 110092",
      "contact_numbers": [
        "9015111222",
        "8010907907"
      ],
      "location": "https://www.google.co.in/maps/place/Jain+Hospital/@28.6533076,77.3065634,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfbe7202aef51:0xdd8d5f2a39b07c13!8m2!3d28.6533076!4d77.3087521?hl=en&authuser=1"
    },
    "Kosmos Super Specialty Hospital, Vikas Marg Extn.": {
      "type": "Pvt",
      "address": "Sikka, C-60, Vikas Marg, DDA Flats, Anand Vihar, New Delhi, Delhi 110092",
      "contact_numbers": [
        "8447696223",
        "01122160003"
      ],
      "location": "https://www.google.com/maps/dir//Kosmos+Superspeciality+Hospital-+Best+Orthopedic+surgeon+%7C+Orthopedic+doctor+in+East+Delhi,+Sikka,+C-60,+Vikas+Marg,+DDA+Flats,+Anand+Vihar,+New+Delhi,+Delhi+110092/@28.6439148,77.292202,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfb3fe15bb6d7:0x90d1f5fce79d187b!2m2!1d77.310574!2d28.654865!3e0"
    },
    "Pushpanjali Medical Centre, Pushpanjali Enclave, Vikas Marg Ext.": {
      "type": "Pvt",
      "address": "A-14/15, Vikas Marg Ext, Pushpanjali, Karkardooma, Anand Vihar, New Delhi, Delhi 110092",
      "contact_numbers": [
        "8851743778"
      ],
      "location": "https://www.google.com/maps/dir//Pushpanjali+Medical+Centre,+A-14%2F15,+Vikas+Marg+Ext,+Pushpanjali,+Karkardooma,+Anand+Vihar,+New+Delhi,+Delhi+110092/@28.6539854,77.3068857,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfb41d78f3c03:0x5ad422611f5187c8!2m2!1d77.3090744!2d28.6539807!3e0"
    },
    "Shanti Mukand Hospital, Vikas Marg Extn.": {
      "type": "Pvt",
      "address": "2, Institutional Area, Bhartendu Harish Chandra Marg, Vikas Marg Extension, Karkardooma, New Delhi, Delhi 110092",
      "contact_numbers": [
        "01147276600",
        "01147276632",
        "01147276627"
      ],
      "location": "https://www.google.co.in/maps/place/Shanti+Mukand+Hospital/@28.6457155,77.299482,17z/data=!4m12!1m6!3m5!1s0x390cfb444d4e5dbf:0x36c3ef799baae80e!2sShanti+Mukand+Hospital!8m2!3d28.6457155!4d77.3016707!3m4!1s0x390cfb444d4e5dbf:0x36c3ef799baae80e!8m2!3d28.6457155!4d77.3016707?hl=en&authuser=1"
    },
    "Shri Ram Singh Hospital, Krishna Nagar": {
      "type": "Pvt",
      "address": "B-25 26 26a, Swarn Cinema Road, East Krishna Nagar, Delhi, 110051",
      "contact_numbers": [
        "9811100764"
      ],
      "location": "https://www.google.co.in/maps/place/Shri+Ram+Singh+Hospital/@28.660569,77.2854492,17z/data=!3m1!4b1!4m5!3m4!1s0x390cfc9d633bb003:0x5bbaebf15d70159b!8m2!3d28.660569!4d77.2876379?hl=en&authuser=1"
    },
    "SMS Hospital, Gagan Vihar": {
      "type": "Pvt",
      "address": "15, Gagan Vihar Main Rd, Gagan Vihar, Krishna Nagar, Delhi, 110051",
      "contact_numbers": [
        "01122505116",
        "8076956969"
      ],
      "location": "https://www.google.com/maps/dir//SMS+HOSPITAL,+15,+Gagan+Vihar+Main+Rd,+Gagan+Vihar,+Krishna+Nagar,+Delhi,+110051/@28.6456149,77.2948937,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390cfb5b26ef2773:0xb28253112c2e1434!2m2!1d77.2970824!2d28.6456102!3e0"
    },
    "Surya Hospital, Krishna Nagar": {
      "type": "Pvt",
      "address": "383/11-C, East Azad Nagar,Block E, Krishna Nagar, New Delhi 110051",
      "contact_numbers": [
        "9810198845",
        "7217607103"
      ],
      "location": "https://www.google.com/maps/dir//Surya+Hospital,+383%2F11-C,+East+Azad+Nagar,+East+Krishna+Nagar,+Block+E,+Krishna+Nagar,+New+Delhi,+Delhi+110051/@28.6629501,77.2836866,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d003815555555:0x7d366db1a07b7dfa!2m2!1d77.2858753!2d28.6629454!3e0"
    },
    "Divya Prastha Hospital, RZ-37, Opposite Bagh Wala School, Main Road, Palam Colony, New Delhi 45": {
      "type": "Pvt",
      "address": "RZ-37, Opposite Bagh Wala School, Main Road, Palam Colony, New Delhi 45",
      "contact_numbers": [
        "8751002222"
      ],
      "location": "https://www.google.co.in/maps/place/Divya+Prastha+Hospital/@28.5862209,77.0853916,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1b689a186171:0x7b6b2bafb4c2d26a!8m2!3d28.5862209!4d77.0875803?hl=en&authuser=0"
    },
    "Madhukar Rainbow Children Hosp., Malviya Nagar": {
      "type": "Pvt",
      "address": "Geetanjali FC-29 5 Near Malviya Nagar Metro Station, New Delhi, Delhi 110017",
      "contact_numbers": [
        "9100065913",
        "8448284610"
      ],
      "location": "https://www.google.co.in/maps/place/Madhukar+Rainbow+Children's+Hospital+%26+BirthRight+By+Rainbow+Hospitals/@28.529288,77.2024513,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce1f814a7b2a9:0x984014aad0886b67!8m2!3d28.529288!4d77.20464?hl=en&authuser=0"
    },
    "Max East/West Block": {
      "type": "Pvt",
      "address": "1, 2, Press Enclave Marg, Saket Institutional Area, Saket, New Delhi, Delhi 110017",
      "contact_numbers": [
        "1126515050"
      ],
      "location": "https://www.google.co.in/maps/place/Max+Super+Speciality+Hospital,+Saket+(Max+Saket)/@28.527638,77.2099062,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce1f427d4c5fb:0x582d47bbf4970bc1!8m2!3d28.527638!4d77.2120949?hl=en&authuser=0"
    },
    "Medeor Hospital, Qutab Instl. Area": {
      "type": "Pvt",
      "address": "B-33, 34, Qutab Institutional Area., New Delhi, Delhi 110016",
      "contact_numbers": [
        "01141222222",
        "8130390341"
      ],
      "location": "https://www.google.com/maps/dir//Medeor+Hospital,+B-33,+34,+Qutab+Institutional+Area.,+New+Delhi,+Delhi+110016/@28.5374571,77.1789159,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390ce3d2f8a0fa11:0x66f434fb26d3ccba!2m2!1d77.181022!2d28.537424!3e0"
    },
    "Metro Hospital, Lajpat Nagar": {
      "type": "Pvt",
      "address": "14, Ring Road Near Amar Kaloni Market, Lajpat Nagar IV, New Delhi, Delhi 110024",
      "contact_numbers": [
        "01142424343"
      ],
      "location": "https://www.google.co.in/maps/place/Metro+Hospital+%26+Heart+Institute,+Lajpat+Nagar,+Delhi/@28.5647402,77.2415924,17z/data=!4m12!1m6!3m5!1s0x390ce3b1a0dd19b3:0xc1176dc05852d734!2sMetro+Hospital+%26+Heart+Institute,+Lajpat+Nagar,+Delhi!8m2!3d28.5647402!4d77.2437811!3m4!1s0x390ce3b1a0dd19b3:0xc1176dc05852d734!8m2!3d28.5647402!4d77.2437811?hl=en&authuser=1"
    },
    "Pushpawati Singhania Hospital, Saket": {
      "type": "Pvt",
      "address": "Delhi",
      "contact_numbers": [
        "9717159780"
      ],
      "location": ""
    },
    "Shree Agarsain International Hospital, Rohini- 22": {
      "type": "Pvt",
      "address": "Aman Vihar, Police Station, PSP, CH Bhim Singh Nambardar Marg, Sector 22, Rohini, New Delhi, Delhi 110086",
      "contact_numbers": [
        "9625941440",
        "01166636600",
        "01145911911"
      ],
      "location": "https://www.google.co.in/maps/place/Shree+Aggarsain+International+Hospital/@28.7185105,77.0627929,17z/data=!3m1!4b1!4m5!3m4!1s0x390d068c32e04e59:0xcb7cc7055c28789b!8m2!3d28.7185105!4d77.0649816?hl=en&authuser=0"
    },
    "Max SS Hospital, Shalimar Bagh": {
      "type": "Pvt",
      "address": "FC 50, C and D Block, Shalimar Place Site, Shalimar Bagh, New Delhi, Delhi 110088",
      "contact_numbers": [
        "7042500536",
        "9818533117",
        "01166422112"
      ],
      "location": "https://www.google.co.in/maps/place/Max+Super+Speciality+Hospital,+Shalimar+Bagh/@28.727694,77.1504207,17z/data=!3m1!4b1!4m5!3m4!1s0x390d019eea1416d7:0xc4c7bcd628010c86!8m2!3d28.727694!4d77.1526094?hl=en&authuser=0"
    },
    "Fortis Escorts Heart Institute, Okhla": {
      "type": "Pvt",
      "address": "Okhla road, Sukhdev Vihar Metro Station, New Delhi, Delhi 110025",
      "contact_numbers": [
        "01147135000"
      ],
      "location": "https://www.google.co.in/maps/place/Fortis+Escorts+Heart+Institute/@28.5606583,77.2717149,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce392b869bbaf:0x865db71ba6f271b2!8m2!3d28.5606583!4d77.2739036?hl=en&authuser=0"
    },
    "HAHC Hospital, Hamdard Nagar": {
      "type": "Pvt",
      "address": "Guru Ravidas Marg, Block D, Hamdard Nagar, New Delhi, Delhi 110062",
      "contact_numbers": [
        "8588890999",
        "7291970608",
        "9136033349",
        "9910532446"
      ],
      "location": "https://www.google.co.in/maps/place/Hakeem+Abdul+Hameed+Centenary+Hospital/@28.5148645,77.249928,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce17280375a03:0x710f880eed680c53!8m2!3d28.5148645!4d77.2521167?hl=en&authuser=0"
    },
    "IBS Hospital, Lajpat Nagar": {
      "type": "Pvt",
      "address": "Block L, Lajpat Nagar III, Lajpat Nagar 4, New Delhi, Delhi 110024",
      "contact_numbers": [
        "01143210000"
      ],
      "location": "https://www.google.co.in/maps/place/IBS+Hospital+Lajpat+Nagar/@28.5653915,77.2420285,17z/data=!4m8!1m2!2m1!1sIBS+Hospital,+Lajpat+Nagar!3m4!1s0x390ce3b3b1d91eb1:0xeaec19e13bf5e1e0!8m2!3d28.5652101!4d77.2441214?hl=en&authuser=0"
    },
    "Irene Hospital, Kalkaji": {
      "type": "Pvt",
      "address": "Block DD, DD-23, Kalkaji, New Delhi, Delhi 110019",
      "contact_numbers": [
        "9540948480",
        "01149922222"
      ],
      "location": "https://www.google.co.in/maps/place/Irene+Hospital/@28.5447294,77.2560515,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce3c4b08b2107:0xef0aef546aa1564c!8m2!3d28.5447294!4d77.2582402?hl=en&authuser=0"
    },
    "National Heart Institute, East of Kailash": {
      "type": "Pvt",
      "address": "Raja Dhirsain Marg, D Block, East of Kailash, New Delhi, Delhi 110048",
      "contact_numbers": [
        "01146600700",
        "18005726600"
      ],
      "location": "https://www.google.co.in/maps/place/National+Heart+Institute,+Raja+Dhirsain+Marg,+D+Block,+East+of+Kailash,+New+Delhi,+Delhi+110048/@28.5574541,77.2434904,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce3b5f9b459b7:0x8e5f7044f33fa8c9!8m2!3d28.5574541!4d77.2456791?hl=en&authuser=0"
    },
    "Universal Centre of Health services, Kalkaji": {
      "type": "Pvt",
      "address": "Bypass Rd, Block D, Molar band Extension, Badarpur, New Delhi,0044",
      "contact_numbers": [
        "8800800500",
        "8800128128",
        "7065040315",
        "7065040308"
      ],
      "location": "https://www.google.com/maps/dir/28.6182658,77.0449321/Universal+Hospital,+Bypass+Rd,+Molar+band+Extension,+Badarpur,+New+Delhi,+Haryana+110044/@28.5537759,77.0376068,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390ce71c31b41f51:0x1be246f5146083e0!2m2!1d77.3085155!2d28.4881363"
    },
    "Akash Healthcare, Dwarka": {
      "type": "Pvt",
      "address": "Hospital Plot, Rd Number 201, Dwarka Sector-3, New Delhi, Delhi 110075",
      "contact_numbers": [
        "8800015991",
        "01128088888"
      ],
      "location": "https://www.google.co.in/maps/place/Aakash+Healthcare:+Super+Speciality+Hospital+-Dwarka/@28.6052594,77.0511982,17z/data=!3m1!4b1!4m5!3m4!1s0x390d053340000001:0x4611150c2d27d1fc!8m2!3d28.6052594!4d77.0533869?hl=en&authuser=0"
    },
    "Bensups Hospital, Dwarka": {
      "type": "Pvt",
      "address": "Dwarka Sub-City, Sector 12 Dwarka, BENSUPS Avenue, New Delhi, Delhi 110075",
      "contact_numbers": [
        "9560816745",
        "01145550000"
      ],
      "location": "https://www.google.com/maps/dir//BENSUPS+Hospital,+Dwarka+Sub-City,+Sector+12+Dwarka,+BENSUPS+Avenue,+New+Delhi,+Delhi+110075/@28.5928915,77.042263,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d1ac52ed8df85:0xad2eb423d8d822af!2m2!1d77.0444517!2d28.5928868!3e0"
    },
    "Bhagat Chandra Hospital, Mahavir Enclave, Dwarka": {
      "type": "Pvt",
      "address": "RZ-F-1/1 Mahavir Enclave Palam Dabri Marg Under Dwarka, Airport Flyover, Mahavir Enclave Part 2, Palam, New Delhi, Delhi 110045",
      "contact_numbers": [
        "9354697563",
        "8395994074",
        "7827473433",
        "01145254550"
      ],
      "location": "https://www.google.co.in/maps/place/Bhagat+Chandra+Hospital/@28.593451,77.0790342,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1b47348360e7:0x18192b58047215a!8m2!3d28.593451!4d77.0812229?hl=en&authuser=0"
    },
    "Maharaja Agarsain Multispecialty Hospital, Narela": {
      "type": "Pvt",
      "address": "Bawana Road, Swatantra Nagar, Narela, New Delhi, Delhi 110040",
      "contact_numbers": [
        "9891654929",
        "9667097114",
        "9811117913"
      ],
      "location": "https://www.google.co.in/maps/place/Maharaja+Agrasen+Hospital/@28.8368912,77.0769418,17z/data=!4m12!1m6!3m5!1s0x390da9a029320f51:0xe07786c382b1328c!2sMaharaja+Agrasen+Hospital!8m2!3d28.8368912!4d77.0791305!3m4!1s0x390da9a029320f51:0xe07786c382b1328c!8m2!3d28.8368912!4d77.0791305?hl=en&authuser=1"
    },
    "Mata Chanan Devi Hospital, Janakpuri": {
      "type": "Pvt",
      "address": "c1, Lal Sai Mandir Marg, Block C1, Janakpuri, New Delhi, Delhi 110058",
      "contact_numbers": [
        "8920601050",
        "1145682018",
        "1145582019"
      ],
      "location": "https://www.google.co.in/maps/place/Mata+Chanan+Devi+Hospital/@28.6187501,77.0761255,17z/data=!3m1!4b1!4m5!3m4!1s0x390d04c834eed97f:0x374d57d1850a06ee!8m2!3d28.6187501!4d77.0783142?hl=en&authuser=0"
    },
    "Venkateshwar Hospital, Dwarka": {
      "type": "Pvt",
      "address": "Sector 18, Sector 18A Dwarka, Dwarka, New Delhi, Delhi 110075",
      "contact_numbers": [
        "7290072997"
      ],
      "location": "https://www.google.co.in/maps/place/Venkateshwar+Hospital/@28.5888913,77.0353426,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1ac3e8a4b27b:0x218f945a11993663!8m2!3d28.5888913!4d77.0375313?hl=en&authuser=0"
    },
    "Vikas Hospital, Najafgarh": {
      "type": "Pvt",
      "address": "Delhi",
      "contact_numbers": [
        "8744077882",
        "9810674306"
      ],
      "location": ""
    },
    "Ansari Hospital, Sagarpur": {
      "type": "Pvt",
      "address": "RZ-20 F/B, Kailash Puri Road,Main SagarPur,New Delhi-110046",
      "contact_numbers": [
        "8373904800"
      ],
      "location": "https://www.google.com/maps/dir//Ansari+Hospital,+20F%2FB+1272+Gali+No-6+Main+Sagar+Pur+Land+Mark+:+Ansari+Hospital+:,+New+Delhi,+Delhi+110046/@28.602785,77.1023421,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d1ca842e10bfb:0x2ae69bdfeeb78648!2m2!1d77.1045308!2d28.6027803!3e0"
    },
    "Ardent Ganpati": {
      "type": "Pvt",
      "address": "NH 10, Swaran Park, Mundka, Delhi, 110041",
      "contact_numbers": [
        "9990902287"
      ],
      "location": "https://www.google.com/maps/dir//Ardent+Ganpati+Hospital,+NH+10,+Swaran+Park,+Mundka,+Delhi,+110041/@28.6820015,77.0326199,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d05c43ef43e91:0xc6c2e12eb79cc090!2m2!1d77.0387366!2d28.6820277!3e0"
    },
    "B.M. Gupta Hospital, Uttam Nagar": {
      "type": "Pvt",
      "address": "H-9, 15, Arya Samaj Rd, SDM Market, Block O, Uttam Nagar, New Delhi, Delhi 110059",
      "contact_numbers": [
        "01147157777",
        "8287229094",
        "9968911910",
        "8130397046"
      ],
      "location": "https://www.google.com/maps/dir//H-9,+B.M.+Gupta+Hospital+Pvt.+Ltd.,+15,+Arya+Samaj+Rd,+SDM+Market,+Block+O,+Uttam+Nagar,+New+Delhi,+Delhi+110059/@28.6195437,77.0591811,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d04d75a755905:0x9568c5b47ec02a4c!2m2!1d77.0613698!2d28.619539!3e0"
    },
    "Bhatia Global Hospital, Paschim Vihar": {
      "type": "Pvt",
      "address": "307-308 Opposite Central School, Ambica Vihar, Paschim Vihar, New Delhi, Delhi 110087",
      "contact_numbers": [
        "8368341698",
        "01149775977",
        "01145518230",
        "01145518231"
      ],
      "location": "https://www.google.com/maps/dir//Bhatia+Global+Hospital,+307-308+Opposite+Central+School,+Ambica+Vihar,+Paschim+Vihar,+New+Delhi,+Delhi+110087/@28.6655068,77.0803172,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d0468dab77b03:0xec5adfdaad433094!2m2!1d77.0825059!2d28.6655021!3e0"
    },
    "CD Global Hospital, Najafgarh Road": {
      "type": "Pvt",
      "address": "Metro piller no. 492, Main Rohtak road, Swarn park, Mundka, Delhi-41",
      "contact_numbers": [
        "9310171264",
        "9354629558",
        "9811410663"
      ],
      "location": "https://www.google.com/maps/place/C+D+Global+Hospital/@28.6508198,76.9905269,13z/data=!4m19!1m13!4m12!1m4!2m2!1d77.0449321!2d28.6182658!4e1!1m6!1m2!1s0x390d0525e7f3a0fd:0xcf549ece13ec38bb!2sC+D+Global+Hospital,+Rohtak+Rd,+Swaran+Park,+Mundka,+Delhi+110041!2m2!1d77.0392475!2d28.6825256!3m4!1s0x390d0525e7f3a0fd:0xcf549ece13ec38bb!8m2!3d28.6825256!4d77.0392475"
    },
    "Chayan Hospital, Najafgarh": {
      "type": "Pvt",
      "address": "A-6, Bijwasan Rd, Deenpur, Najafgarh, New Delhi 110043",
      "contact_numbers": [
        "9958895004"
      ],
      "location": "https://www.google.com/maps/dir//CHAYAN+HOSPITAL,+A-6,+Bijwasan+Rd,+Deenpur,+Najafgarh,+New+Delhi,+Delhi+110043/@28.5947184,76.989261,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d1be1affd867d:0xcffc0748ce394208!2m2!1d76.9914497!2d28.5947184!3e0"
    },
    "Cygnus MLS, Rama Vihar": {
      "type": "Pvt",
      "address": "Plot No. 4, Main Kanjhawala Road, Rama Vihar, Delhi 110081",
      "contact_numbers": [
        "9999655155",
        "9999655255"
      ],
      "location": "https://www.google.co.in/maps/place/Cygnus+Mls+Super+Speciality+Hospital/@28.703101,77.1190703,17z/data=!3m1!4b1!4m5!3m4!1s0x390d03e1a03e7743:0x1df95da94538d55!8m2!3d28.703101!4d77.121259?hl=en&authuser=0"
    },
    "Cygnus Sonia Hospital, Nangloi": {
      "type": "Pvt",
      "address": "1, Rohtak Rd, Gulshan Park, Nangloi, Delhi, 110041",
      "contact_numbers": [
        "8750060177",
        "8750060162"
      ],
      "location": "https://www.google.com/maps/dir//Ujala+Cygnus:+Sonia+Hospital,+Nangloi,+1,+Rohtak+Rd,+Gulshan+Park,+Nangloi,+Delhi,+110041/@28.6825377,77.0501703,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d05cc739997fb:0x4c8900461b99bc59!2m2!1d77.052359!2d28.682533!3e0"
    },
    "Gandhi Nursing Home, Uttam Nagar": {
      "type": "Pvt",
      "address": "C-50-51, Najafgarh Rd, Block E, Om Vihar, Uttam Nagar, Delhi, 110059",
      "contact_numbers": [
        "01125335099",
        "01125333179",
        "9582134315"
      ],
      "location": "https://www.google.com/maps/dir//Gandhi+Hospital,+C-50-51,+Najafgarh+Rd,+Block+E,+Om+Vihar,+Uttam+Nagar,+Delhi,+110059/@28.6199571,77.0513946,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d05261e9c675f:0xe48342e4ee46af2c!2m2!1d77.0535833!2d28.6199524!3e0"
    },
    "Goyal Hospital, Paschim Vihar": {
      "type": "Pvt",
      "address": "B 33, Block B, LIC Colony, Paschim Vihar, Delhi, 110087",
      "contact_numbers": [
        "01141901414",
        "8700001648",
        "8709637942"
      ],
      "location": "https://www.google.com/maps/dir//Goyal+hospital,+B+33,+Block+B,+LIC+Colony,+Paschim+Vihar,+Delhi,+110087/@28.6615771,77.0831315,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d056d452d3ec7:0xc9d6127bd77adbce!2m2!1d77.0853202!2d28.6615724!3e0"
    },
    "Jeewan Hospital, Gate No. 1, Jeewan Nagar": {
      "type": "Pvt",
      "address": "150, Bharath Nagar Road Jeewan Nagar, Gate Number 1, Maharani Bagh, New Delhi, Delhi 110014",
      "contact_numbers": [
        "011-26349821",
        "011-26341903"
      ],
      "location": "https://www.google.co.in/maps/place/Jeewan+Hospital/@28.5782918,77.2571816,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce3a290000001:0x74eb511de60759c3!8m2!3d28.5782918!4d77.2593703?hl=en&authuser=1"
    },
    "Jeewan Moti Khera Hospital, Nangloi": {
      "type": "Pvt",
      "address": "Krishna Mandir, New Khera Hospital,Nangloi - Najafgarh Rd, Nangloi, New Delhi,110041",
      "contact_numbers": [
        "01125945771"
      ],
      "location": "https://www.google.com/maps/dir//J+M+Khera+Hospital,+Krishna+Mandir,+New+Khera+Hospital,+first+floor+near,+Nangloi+-+Najafgarh+Rd,+Nangloi,+New+Delhi,+Delhi+110041/@28.6802448,77.0646421,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d0437615e5415:0x4910ae326d2230a1!2m2!1d77.0668308!2d28.6802401!3e0"
    },
    "Jeewan Nursing Home, Pusa Road": {
      "type": "Pvt",
      "address": "2-B, Pusa Road, Next to Karol Bagh Metro Station, Opp. Pillar No.-107, 108, Sadhu Vasvani Marg, Rajender Nagar, New Delhi, Delhi 110005",
      "contact_numbers": [
        "01142430246",
        "01142474849"
      ],
      "location": "https://www.google.co.in/maps/place/Jeewan+Hospital/@28.6436856,77.1860844,17z/data=!3m1!4b1!4m5!3m4!1s0x390d0298a84f3bc9:0x34d4095ca9d8ca4!8m2!3d28.6436856!4d77.1882731?hl=en&authuser=1"
    },
    "Kalra Hospital, Dwarka": {
      "type": "Pvt",
      "address": "Rama Park Road, opp. to metro pillar no. 761, Block B, Bhagwati Garden, Nawada, Delhi, 110059",
      "contact_numbers": [
        "01125355545",
        "01-25355546",
        "9315677206"
      ],
      "location": "https://www.google.co.in/maps/place/Kalra+Hospital+Rama+Park+Dwarka,+Delhi/@28.6376132,77.0703517,14z/data=!4m8!1m2!2m1!1sKalra+Hospital,+Dwarka!3m4!1s0x390d0539a8caaf43:0xa8b590ca1b7d0236!8m2!3d28.6200269!4d77.0371715?hl=en&authuser=0"
    },
    "Ayushman Hospital, Dwarka": {
      "type": "Pvt",
      "address": "Pocket 1, Sector 10 Dwarka, Elephenta Line, Delhi, 110075",
      "contact_numbers": [
        "01147031100",
        "01149495555",
        "01149495566",
        "01149495500",
        "9810564233"
      ],
      "location": "https://www.google.co.in/maps/place/Ayushman+Hospital+and+Health+Service/@28.6434781,77.1172739,12z/data=!4m8!1m2!2m1!1sAyushman+Hospital!3m4!1s0x0:0x409c417a5ab75616!8m2!3d28.5881582!4d77.0595217?hl=en&authuser=0"
    },
    "VIMHANS": {
      "type": "Pvt",
      "address": "Institutional Area, 1, Nehru Nagar, Lajpat Nagar, New Delhi, Delhi 110065",
      "contact_numbers": [
        "01166176617",
        "9910516340",
        "9873422574"
      ],
      "location": "https://www.google.co.in/maps/place/Vimhans+Nayati+Super+Speciality+Hospital/@28.5695188,77.2487158,17z/data=!4m8!1m2!2m1!1sVIMHANS!3m4!1s0x390ce3aafc3c427b:0xe8f2330845f74fc!8m2!3d28.5692702!4d77.2510562?hl=en&authuser=0"
    },
    "Kalra Hospital, Kirti Nagar": {
      "type": "Pvt",
      "address": "Tulsi Dass Kalra Marg, Kirti Nagar, New Delhi, Delhi 110015",
      "contact_numbers": [
        "01125100000",
        "01145005600",
        "01145005700"
      ],
      "location": "https://www.google.co.in/maps/place/Kalra+Hospital/@28.6552017,77.1363623,17z/data=!3m1!4b1!4m5!3m4!1s0x390d0305d0ebb29b:0x2ec2ca5c738fd184!8m2!3d28.6552017!4d77.138551?hl=en&authuser=0"
    },
    "Maharaja Agrasen Hospital, Punjabi Bagh": {
      "type": "Pvt",
      "address": "Near Metro Station Jain Muni Guru Ramkrishan Marg Block C, Shivaji Park, West Punjabi Bagh, Delhi, 110026",
      "contact_numbers": [
        "9910489495",
        "01140777666",
        "8130402916"
      ],
      "location": "https://www.google.co.in/maps/place/Maharaja+Agrasen+Hospital/@28.673941,77.1318113,17z/data=!3m1!4b1!4m5!3m4!1s0x390d02394159d409:0x96dac81bc4be56b1!8m2!3d28.673941!4d77.134?hl=en&authuser=0"
    },
    "Mansaram Hospital, Nangloi": {
      "type": "Pvt",
      "address": "Main Najafgarh Rd, Ram Nagar Colony, Ram Nagar, Nangloi, New Delhi, Delhi 110041",
      "contact_numbers": [
        "8285853737"
      ],
      "location": "https://www.google.co.in/maps/place/Mansaram+Hospital/@28.672278,77.0566713,17z/data=!4m12!1m6!3m5!1s0x390d044b7521b52b:0x5b1b07c5caf36d63!2sMansaram+Hospital!8m2!3d28.672278!4d77.05886!3m4!1s0x390d044b7521b52b:0x5b1b07c5caf36d63!8m2!3d28.672278!4d77.05886?hl=en&authuser=1"
    },
    "Mata Roop Rani Maggo Hospital, Uttam Nagar": {
      "type": "Pvt",
      "address": "C-9, Metro Pillar No. 709, Om Vihar, Uttam Nagar, Delhi, 110059",
      "contact_numbers": [
        "01161290000",
        "9555059059"
      ],
      "location": "https://www.google.co.in/maps/place/Mata+Roop+Rani+Maggo+Hospital:+Dr+Aman+Maggo+General+Physician+in+Uttam+Nagar,+West+Delhi/@28.6209247,77.0468067,17z/data=!4m8!1m2!2m1!1sMata+Roop+Rani+Maggo+Hospital,+Uttam+Nagar!3m4!1s0x390d052507bf8e89:0x39ee0af2601fd893!8m2!3d28.6207766!4d77.047714?hl=en&authuser=0"
    },
    "Medstar Hospital, Paschim Vihar": {
      "type": "Pvt",
      "address": "Outer Ring Rd, Block A, Meera Bagh, Paschim Vihar, New Delhi, Delhi 110087",
      "contact_numbers": [
        "01149242424",
        "9810006697"
      ],
      "location": "https://www.google.co.in/maps/place/Medstar+Hospital+-+Knee+Replacement+In+Paschim+Vihar+-+Hip+Replacement+In+Paschim+Vihar+Delhi/@28.6589043,77.0886455,17z/data=!4m12!1m6!3m5!1s0x390d04629caf6559:0xc8a6670ef3d378c6!2sMedstar+Hospital+-+Knee+Replacement+In+Paschim+Vihar+-+Hip+Replacement+In+Paschim+Vihar+Delhi!8m2!3d28.6589043!4d77.0908342!3m4!1s0x390d04629caf6559:0xc8a6670ef3d378c6!8m2!3d28.6589043!4d77.0908342?hl=en&authuser=1"
    },
    "MGS Hospital, Punjabi Bagh": {
      "type": "Pvt",
      "address": "Rohtak Road, Punjabi Bagh West, Punjabi Bagh West, New Delhi, Delhi, 110026",
      "contact_numbers": [
        "01145111444"
      ],
      "location": "https://www.google.co.in/maps/place/MGS+Hospital/@28.6737106,77.1324408,17z/data=!3m1!4b1!4m5!3m4!1s0x390d03badba831b1:0x2031ba08d40f07d1!8m2!3d28.6737106!4d77.1346295?hl=en&authuser=0"
    },
    "Park Hospital, Meera Bagh": {
      "type": "Pvt",
      "address": "Bus Depot, Meera Enclave Outer Ring Road Near Kashopur, New Chaukhandi, Vishnu Garden, New Delhi, Delhi 110018",
      "contact_numbers": [
        "01145323232",
        "9315098446",
        "9899241482"
      ],
      "location": "https://www.google.co.in/maps/place/Park+Hospital/@28.651782,77.0909773,17z/data=!3m1!4b1!4m5!3m4!1s0x390d0486068a92a3:0xb5d36c0ba16eb195!8m2!3d28.65172!4d77.093141?hl=en&authuser=0"
    },
    "PGH Hospital, Vikas Nagar": {
      "type": "Pvt",
      "address": "Plot No. 89A,Vikasnagar Ext, Phase-2 Block-B, Sukkhar, Shani Bazar Rd, Uttam Nagar, New Delhi, Delhi 110059",
      "contact_numbers": [
        "9599198053",
        "9599198054"
      ],
      "location": "https://www.google.com/maps/dir//PGH+Hospitals+Pvt+Ltd,+Plot+No.+89A,Vikasnagar+Ext,+Phase-2+Block-B,+Sukkhar,+Shani+Bazar+Rd,+Uttam+Nagar,+New+Delhi,+Delhi+110059/@28.6361486,77.0468208,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d051963282bb7:0x6bd636a750d861c7!2m2!1d77.0490095!2d28.6361439!3e0"
    },
    "Rathi Hospital, Najafgarh": {
      "type": "Pvt",
      "address": "3, Nangloi - Najafgarh Rd, Pratap Vihar, Ranhola, Delhi, 110041",
      "contact_numbers": [
        "9871173355",
        "9711991234",
        "9582595428"
      ],
      "location": "https://www.google.com/maps/dir/28.6182658,77.0449321/Rathi+Hospital+Nangloi/@28.6317789,76.9823778,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d059fe7addb15:0x111163624428a5d3!2m2!1d77.031645!2d28.6516192"
    },
    "Sri Balaji Action Medical Inst., Paschim Vihar": {
      "type": "Pvt",
      "address": "A 4 Block, A 6 Block, Paschim Vihar, New Delhi, Delhi 110063",
      "contact_numbers": [
        "9999174129",
        "01142888888"
      ],
      "location": "https://www.google.co.in/maps/place/Sri+Balaji+Action+Medical+Institute/@28.6737837,77.1080786,17z/data=!3m1!4b1!4m5!3m4!1s0x390d038ef06fd67f:0x6e2bd35180f8722a!8m2!3d28.6737837!4d77.1102673?hl=en&authuser=0"
    },
    "Tarak Hospital, Uttam Nagar": {
      "type": "Pvt",
      "address": "C-7,Jai Bharat Enclave , Dwarka More, New Delhi, Najafgarh Rd, Block C, Dwarka, Delhi, 110059",
      "contact_numbers": [
        "8285882288",
        "9643681681"
      ],
      "location": "https://www.google.co.in/maps/place/Tarak+Hospital+India+Private+Limited/@28.6192561,77.027825,17z/data=!3m1!4b1!4m5!3m4!1s0x390d053877e675cd:0x795bd4e73aa4ba3b!8m2!3d28.6192561!4d77.0300137?hl=en&authuser=0"
    },
    "Shakuntala Nursing Home, West Sagarpur": {
      "type": "Pvt",
      "address": "RZ-I-81A, RZ Block Road, Sagar Pur, New Delhi, Delhi 110046",
      "contact_numbers": [
        "9211783762",
        "9211783761"
      ],
      "location": "https://www.google.co.in/maps/place/Shakuntla+Hospital/@28.6082497,77.0931981,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1ca8e13be359:0x445d18dc0bd19a6c!8m2!3d28.6082497!4d77.0953868?hl=en&authuser=0"
    },
    "Konark Hospital, Nangloi": {
      "type": "Pvt",
      "address": "9A/1, Naresh Park Main Najafgarh Road, Nangloi, Delhi 110041",
      "contact_numbers": [
        "9625695449"
      ],
      "location": "https://www.google.co.in/maps/place/Konarc+Hospital/@28.677424,77.0617013,17z/data=!4m12!1m6!3m5!1s0x390d043620c2417b:0xebb47a58c078bbd6!2sKonarc+Hospital!8m2!3d28.677424!4d77.06389!3m4!1s0x390d043620c2417b:0xebb47a58c078bbd6!8m2!3d28.677424!4d77.06389?hl=en&authuser=1"
    },
    "Kukreja Hospital and Heart Centre, Rajouri Garden": {
      "type": "Pvt",
      "address": "C-1, Block A, Vishal Enclave, Rajouri Garden, New Delhi, Delhi 110027",
      "contact_numbers": [
        "7982046610",
        "01145675000"
      ],
      "location": "https://www.google.co.in/maps/place/Kukreja+Hospital+and+Heart+Centre/@28.6467718,77.1148717,17z/data=!3m1!4b1!4m5!3m4!1s0x390d03e89036938b:0x74e54268e55919e2!8m2!3d28.6467718!4d77.1170604?hl=en&authuser=0"
    },
    "AAAGH ": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9560593055"
      ],
      "location": ""
    },
    "Guru Nanak Eye Center": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9811305645"
      ],
      "location": ""
    },
    "ESI hospital": {
      "type": "Delhi Govt",
      "address": "Ring Rd, Block W, Basai Dara pur, Bali Nagar, New Delhi, Delhi 110015",
      "contact_numbers": [
        "9810148780"
      ],
      "location": "https://www.google.com/maps/dir//Employees'+State+Insurance+Model+Hospital,+Ring+Rd,+Block+W,+Basai+Dara+pur,+Bali+Nagar,+New+Delhi,+Delhi+110015/@28.6577023,77.1279321,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390d030bae25dc53:0x134c7db62b755318!2m2!1d77.1301208!2d28.6576976!3e0"
    },
    "Babu Jagjivan Ram Memorial Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9911772413"
      ],
      "location": ""
    },
    "Max Smart Gujarmal Modi hospital ,Saket": {
      "type": "Pvt",
      "address": "Press Enclave Marg, Saket District Centre, Saket, New Delhi, Delhi 110017",
      "contact_numbers": [
        "01171212121"
      ],
      "location": "https://www.google.co.in/maps/place/Max+Smart+Super+Speciality+Hospital,+Saket+(Max+Smart)/@28.5280968,77.2112827,17z/data=!4m12!1m6!3m5!1s0x390ce1fd7d690eb3:0xdf75eabd1fd2f06d!2sMax+Smart+Super+Speciality+Hospital,+Saket+(Max+Smart)!8m2!3d28.5280968!4d77.2134714!3m4!1s0x390ce1fd7d690eb3:0xdf75eabd1fd2f06d!8m2!3d28.5280968!4d77.2134714?hl=en&authuser=0"
    },
    "Choudhary Braham Prakash Ayurvedic CharakSansthan": {
      "type": " ",
      "address": "Delhi",
      "contact_numbers": [],
      "location": ""
    },
    "Base Hospital Delhi Cantt": {
      "type": "Central Govt",
      "address": "Delhi",
      "contact_numbers": [
        "01125683581"
      ],
      "location": ""
    },
    "Chacha nehru bal Chikitsalaya": {
      "type": "Pvt",
      "address": "Delhi",
      "contact_numbers": [],
      "location": ""
    },
    "Holy Family Hospital, Okhla": {
      "type": "Pvt",
      "address": "Okhla Rd, Okhla, New Delhi, Delhi 110025",
      "contact_numbers": [
        "9716832400"
      ],
      "location": "https://www.google.co.in/maps/place/Holy+Family+Hospital/@28.5618161,77.2729226,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce3929e6d3319:0xcd2355b56b80d9cf!8m2!3d28.5618161!4d77.2751113?hl=en&authuser=0"
    },
    "Attar Sain Jain Eye Hospital": {
      "type": "Delhi Govt",
      "address": "Delhi",
      "contact_numbers": [
        "9711159530"
      ],
      "location": ""
    },
    "Sitaram Bhartia Institute of Science & Res., Qutab Institutional Area": {
      "type": "Pvt",
      "address": "B-16, NRPC Colony, Block B, Qutab Institutional Area, New Delhi, Delhi 110016",
      "contact_numbers": [
        "01142111111",
        "9717894727",
        "9650033827"
      ],
      "location": "https://www.google.com/maps/dir//Sitaram+Bhartia+Institute+of+Science+and+Research,+B-16,+NRPC+Colony,+Block+B,+Qutab+Institutional+Area,+New+Delhi,+Delhi+110016/@28.5389403,77.1824545,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x390ce207d1cc01db:0xe87a0c5886bae0d4!2m2!1d77.1846432!2d28.5389356!3e0"
    },
    "Ambedkar Nagar hospital": {
      "type": "Delhi Govt",
      "address": "New Delhi",
      "contact_numbers": [
        "01126052016",
        "9310586617"
      ],
      "location": "https://www.google.com/maps/place/Ambedkar+Nagar+Hospital/@28.5221431,77.2384606,15z/data=!4m5!3m4!1s0x0:0xf76539ba9becb12!8m2!3d28.5221431!4d77.2384606"
    },
    "Deen Dayal Upadhyay hospital": {
      "type": "Delhi Govt",
      "address": "Shaheed Mangal Pandey Marg, Nanak Pura, Hari Nagar, New Delhi, Delhi 110064",
      "contact_numbers": [
        "01125401075"
      ],
      "location": "https://www.google.com/maps/place/Deen+Dayal+Upadhyay+Hospital/@28.6280643,77.1122969,15z/data=!4m2!3m1!1s0x0:0xc8559980f0b50535?sa=X&ved=2ahUKEwjDuLOzmoXwAhUQ7HMBHa-uBe8Q_BIwF3oECCsQBQ"
    },
    "GB pant hospital": {
      "type": "Delhi Govt",
      "address": null,
      "contact_numbers": [],
      "location": null
    },
    "ILBS": {
      "type": "Delhi Govt",
      "address": null,
      "contact_numbers": [],
      "location": null
    },
    "IHBAS": {
      "type": "Delhi Govt",
      "address": null,
      "contact_numbers": [],
      "location": null
    },
    "Delhi state cancer institute": {
      "type": "Delhi Govt",
      "address": null,
      "contact_numbers": [],
      "location": null
    },
    "Poor house hospital": {
      "type": "Delhi Govt",
      "address": null,
      "contact_numbers": [],
      "location": null
    },
    "World Brain Center Hospital": {
      "type": "Pvt",
      "address": "Plot No-24, KH No.-15/4/1/4/2, Syndicate Enclave, Pankha Road, Janakpuri, New Delhi-110045",
      "contact_numbers": [
        "01125391266",
        "01125393347",
        "9968788865"
      ],
      "location": "https://www.google.com/maps/dir//world+brain+center+location/@28.6751269,77.0415608,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390d1b52ea977d0f:0x59666b5739e3cebe!2m2!1d77.0885616!2d28.6122059"
    },
    "Sushila Hospial": {
      "type": "Pvt",
      "address": "Plot No 109, Gali No. 9, Gautam Colony, Safiabad Road, Narela, Delhi-110040",
      "contact_numbers": [
        "9999390291",
        "9811494085"
      ],
      "location": "https://www.google.com/maps/place/Sushila+Hospital/@28.8596426,77.0837514,15z/data=!4m5!3m4!1s0x0:0xdcb9712fc9e7bb51!8m2!3d28.8596426!4d77.0837514"
    },
    "Savitri Hospital": {
      "type": "Pvt",
      "address": "142/91, Extended Lal Dora, Kanjhawala, Delhi-110081",
      "contact_numbers": [
        "9810777351",
        "9818709813",
        "9958375050",
        "9810777357"
      ],
      "location": "https://www.google.com/maps/place/Savitri+Hospital/@28.735325,77.0127185,15z/data=!4m2!3m1!1s0x0:0x563e92dde771f145?sa=X&ved=2ahUKEwiO2pPD3__vAhU54jgGHfBnB4oQ_BIwDHoECBUQBQ"
    },
    "ESIC hospital Okhla": {
      "type": "Central Govt",
      "address": "Shree Maa Anandmayee Marg, Okhla Industrial Area, Phase-1, New Delhi - 110020",
      "contact_numbers": [
        "01126814161"
      ],
      "location": "https://www.google.com/maps/place/ESI+Dispensary/@28.552341,77.2658992,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce3e94318ba8d:0x3ae9c1378d0389!8m2!3d28.5521925!4d77.2680976"
    },
    "ESIC Hospital Jhilmil": {
      "type": "Central Govt",
      "address": "ESIC Hospital, Jhilmil, Shahdara, Delhi-110095",
      "contact_numbers": [
        "011-22152197"
      ],
      "location": "https://www.google.com/maps/place/ESIC+Hospital+Dispensary,+V+K+Nagar/@28.6719151,77.3055483,15z/data=!4m2!3m1!1s0x0:0x6f778fe24c7028db?sa=X&ved=2ahUKEwj3iPqrhIPwAhWezzgGHV21BWkQ_BIwEXoECBoQBQ"
    },
    "Shrine Hospital": {
      "type": "Pvt",
      "address": "Shahbad Extension, Bawana Road, Rohini",
      "contact_numbers": [
        "011-27290925"
      ],
      "location": "https://www.google.com/maps/place/Shrine+Hospital+LLP/@28.7445684,77.1195126,15z/data=!4m2!3m1!1s0x0:0x5d18fddc2266e593?sa=X&ved=2ahUKEwjrn96Ah4PwAhW2xTgGHXWUDJkQ_BIwF3oECCAQBQ"
    },
    "Swami Dayanand": {
      "type": "Central Govt",
      "address": "C-Block, Dilshad Garden Delhi- 110095",
      "contact_numbers": [
        "011-22110065",
        "011-22581031",
        "011-22581036"
      ],
      "location": "https://www.google.com/maps/place/Swami+Dayanand+Hospital(General+Hospital)/@28.6784236,77.3031364,15z/data=!4m5!3m4!1s0x0:0x91bc1348e5c15e3d!8m2!3d28.6784236!4d77.3031364"
    },
    "Tulsi Multispeciality Hospital & Critical Care Unit": {
      "type": "Pvt",
      "address": "B-1, Jyoti Nagar(West), Durgapuri Chowk, Loni Road, Shahdara, Delhi-110094",
      "contact_numbers": [
        "8410445275",
        "8368769040",
        "9650203070"
      ],
      "location": "https://www.google.com/maps/place/Tulsi+Multispeciality+Hospital/@28.6881602,77.2917109,15z/data=!4m5!3m4!1s0x0:0xa2f11defb7cff8b2!8m2!3d28.6881602!4d77.2917109"
    },
    "Sai Charitable Dispensary": {
      "type": "Pvt",
      "address": "A-86, Jagatpuri, 100 Foota Road, Durgapuri Chowk, Delhi-110093",
      "contact_numbers": [
        "8287366488",
        "8375915505"
      ],
      "location": "https://www.google.com/maps/place/SAI+CHARITABLE+DISPENSARY+%26+NURSING+HOME/@28.6893853,77.3002784,15z/data=!4m5!3m4!1s0x0:0xf5a117ee7923350a!8m2!3d28.6893853!4d77.3002784"
    },
    "SINGHAL HOSPITAL": {
      "type": "Pvt",
      "address": "C-10, STREET NO-9, SADH NAGAR, PALAM COLONY, DELHI -110045",
      "contact_numbers": [
        "7834979991",
        "7834979994"
      ],
      "location": "https://www.google.com/maps/place/Singhal+Hospital/@28.5882612,77.0888348,15z/data=!4m5!3m4!1s0x0:0x9add2c663892eba1!8m2!3d28.5882612!4d77.0888348"
    },
    "RAM LAL KUNDAN LAL ORTHOPAEDIC HOSPITAL": {
      "type": "Pvt",
      "address": "PLOT NO-8, PANDAV NAGAR, DELHI - 110092",
      "contact_numbers": [
        "01143189000"
      ],
      "location": "https://www.google.com/maps/place/R+K+Ortho+Hospital/@28.6179593,77.2845794,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce4ba5aaaaaab:0x7f88efc4fe68c237!8m2!3d28.6179593!4d77.2867681"
    },
    "SATYA MULTISPECIALITY HOSPITAL": {
      "type": "Pvt",
      "address": "F-1/9, PIPALWALA ROAD, MOHAN GARDEN, UTTAM NAGAR, DELHI - 110059",
      "contact_numbers": [
        "8585938406"
      ],
      "location": "https://www.google.com/maps/place/Satya+Multi+Speciality+Hospital/@28.6267911,77.0393601,15z/data=!4m5!3m4!1s0x0:0x8768eca6441d42a6!8m2!3d28.6267911!4d77.0393601"
    },
    "BH SALVAS HOSPITAL": {
      "type": "Pvt",
      "address": "6 & B6, VILL. HAIBATPURA, CHANDAN PARK, NAJAFGARH, DELHI - 110072",
      "contact_numbers": [
        "9990780442"
      ],
      "location": "https://www.google.com/maps/place/BH+SALVAS+HOSPITAL/@28.6264712,76.9684701,15z/data=!4m5!3m4!1s0x0:0x5d24728ef53b34e5!8m2!3d28.6264712!4d76.9684701"
    },
    "AASTHA HOSPITAL": {
      "type": "Pvt",
      "address": "NEW MAHAVIR NAGAR, DELHI - 110018",
      "contact_numbers": [
        "9250913363"
      ],
      "location": "https://www.google.com/maps/place/Aastha+Hospital+%26+Godsend+IVF+Centre/@28.6358837,77.0813903,15z/data=!4m5!3m4!1s0x0:0xfb1e9af2b10dbc39!8m2!3d28.6358837!4d77.0813903"
    },
    "SURYA KIRAN HOSPITAL": {
      "type": "Pvt",
      "address": "31, ROSHAN MANDI, NAJAFGARH, DELHI - 110043",
      "contact_numbers": [
        "011-25322335"
      ],
      "location": "https://www.google.com/maps/place/Surya+Kiran+Hospital/@28.6138323,76.9922525,15z/data=!4m2!3m1!1s0x0:0xa973f481a227f8eb?sa=X&ved=2ahUKEwjKqqzA3IrwAhVDJHIKHQkADCoQ_BIwCnoECBkQBQ"
    },
    "GURU NANAK EYE CENTRE ( ANNEXED TO LOK NAYAK HOSPITAL)": {
      "type": "Delhi Govt",
      "address": "Maharaja Ranjit Singh Marg, New Delhi 110002",
      "contact_numbers": [
        "01123234622",
        "01123235145"
      ],
      "location": "https://www.google.com/maps/place/Guru+Nanak+Eye+Centre/@28.6379202,77.2323593,15z/data=!4m5!3m4!1s0x0:0x9f4da20d2d9f545a!8m2!3d28.6381051!4d77.2321578"
    },
    "Cronus Multi speciality Hospital": {
      "type": "Pvt",
      "address": "100 Feet Rd, Phase 1, Phase 2, Chattarpur Enclave, Chhatarpur, New Delhi, Delhi 110074",
      "contact_numbers": [
        "011-71366388",
        "011-71366389"
      ],
      "location": "https://www.google.com/maps/place/Cronus+Multi+Speciality+Hospital/@28.5016141,77.1858963,15z/data=!4m5!3m4!1s0x0:0x9c73fd1bab2e81e1!8m2!3d28.5016141!4d77.1858963"
    },
    "C M PATEL HOSPITAL": {
      "type": "Pvt",
      "address": "E-7, Main 100 Feet Rd, West Jyoti Nagar, Jyoti Nagar West, Block A, Jyoti Nagar, Shahdara, Extension, Delhi 110094",
      "contact_numbers": [
        "9311836031"
      ],
      "location": "https://www.google.com/maps/place/CM+Patel+Hospital+-+Best+hospital+in+Shahdara/@28.689412,77.28912,15z/data=!4m5!3m4!1s0x0:0x4666dd613c865468!8m2!3d28.689412!4d77.28912"
    },
    "Nestiva Hospital": {
      "type": "Pvt",
      "address": "384, J S Complex Bank Street Main Market, Munirka, New Delhi",
      "contact_numbers": [
        "011-42422000"
      ],
      "location": "https://www.google.com/search?q=384%2C+J+S+Complex+Bank+Street+Main+Market%2C+Munirka%2C+New+Delhi&oq=384%2C+J+S+Complex+Bank+Street+Main+Market%2C+Munirka%2C+New+Delhi&aqs=chrome..69i57.874j0j9&sourceid=chrome&ie=UTF-8"
    },
    "Alshifa Hospital": {
      "type": "Pvt",
      "address": "D-305, Abul Fazal Enclave Part 1, Abul Fazal Enclave, Jamia Nagar, Okhla, New Delhi, Delhi 110025",
      "contact_numbers": [
        "9599687441"
      ],
      "location": "https://www.google.com/maps/place/Alshifa+Multispeciality+Hospital/@28.5571183,77.2929675,15z/data=!4m5!3m4!1s0x0:0x1e363f307c6022e0!8m2!3d28.5571183!4d77.2929675"
    },
    "Hardik Hospital": {
      "type": "Pvt",
      "address": "29-C, Bhagwan Parshuram Marg, Rajan Enclave, Vikas Nagar, Uttam Nagar, Hastsal, Delhi, 110059",
      "contact_numbers": [
        "9266728292",
        "9250728292"
      ],
      "location": "https://www.google.com/maps/place/Hardik+Hospital/@28.6366687,77.0532425,15z/data=!4m2!3m1!1s0x0:0xc6e0c359b110b534?sa=X&ved=2ahUKEwjvhrzN3JHwAhXhzDgGHfMABEwQ_BIwCnoECDIQBQ"
    },
    "Sunrise Hospital": {
      "type": "Pvt",
      "address": "F-1, Gate, No 2, Garden Ln, Kalindi Colony, New Delhi, Delhi 110065",
      "contact_numbers": [
        "011-27894781",
        "7982264816"
      ],
      "location": "https://www.google.com/maps/place/Sunrise+Hospital/@28.577077,77.265937,15z/data=!4m5!3m4!1s0x0:0x3a89d01ce7f403b6!8m2!3d28.577077!4d77.265937"
    },
    "Nidaan Hospital": {
      "type": "Pvt",
      "address": "507, Devli, Bandh Road, NEW DELHI-110034",
      "contact_numbers": [
        "7303980711"
      ],
      "location": "https://www.google.com/maps/place/Nidaan+Hospital/@28.499627,77.230137,15z/data=!4m5!3m4!1s0x0:0xe32d5a098b497ed5!8m2!3d28.4992122!4d77.2282491?hl=en"
    },
    "Bimla Devi Hospital": {
      "type": "Pvt",
      "address": "Plot No. 5, Pocket B, Mayur Vihar Phase II, Patparganj, New Delhi, Delhi 110091",
      "contact_numbers": [
        "011-41887777"
      ],
      "location": "https://www.google.com/maps/place/Bimla+Devi+Hospital+(Managed+by+Ira+Lifecare+Pvt.+Ltd.)/@28.6202782,77.3031306,15z/data=!4m5!3m4!1s0x0:0x314a32a51ba448cc!8m2!3d28.6202782!4d77.3031306"
    },
    "Delhi multi speciality hospital": {
      "type": "Pvt",
      "address": "I-21, Vijay Vihar Phase II, Vijay Vihar, Sector 4, Rohini, Delhi, 110085",
      "contact_numbers": [
        "8447444321"
      ],
      "location": "https://www.google.com/maps/place/DELHI+MULTI+SPECIALITY+HOSPITAL/@28.7118178,77.0947941,15z/data=!4m5!3m4!1s0x0:0xacd81a55e6d7dbce!8m2!3d28.7118178!4d77.0947941"
    },
    "Shree Hospital": {
      "type": "Pvt",
      "address": "Plot no. 54, Sec-12/A, Opp. Bal Bharti School, Dwarka, New Delhi, Delhi 110075",
      "contact_numbers": [
        "9953882204"
      ],
      "location": "https://www.google.com/maps/place/Shree+Hospital/@28.5981355,77.0411422,15z/data=!4m5!3m4!1s0x0:0x5ad45c79854d7428!8m2!3d28.5981355!4d77.0411422"
    }
}

module.exports = {
    delhiFacilitiesData
}