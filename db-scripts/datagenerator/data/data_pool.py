import random

person_names = [
    "Youssef", "Mohammed", "Fatima", "Zainab", "Omar", "Ahmed", "Hassan", "Ismail", "Karim", "Nadia",
    "Hana", "Amina", "Laila", "Hajar", "Yasmine", "Sara", "Ayoub", "Bilal", "Chaima", "Sofia", "Khalid",
    "Naima", "Nour", "Nadia", "Loubna", "Adil", "Karima", "Kamal", "Kenza", "Malika", "Meryem", "Nawal",
    "Rachid", "Said", "Samira", "Sanaa", "Tariq", "Yassir", "Youssef", "Zakaria", "Zineb", "Asma", "Imane",
    "Zakia", "Hicham", "Hajar", "Zakaria", "Zoubir", "Amina", "Alia", "Houda", "Lina", "Ibrahim", "Amal",
    "Kawtar", "Nizar", "Reda", "Sanaa", "Samir", "Selma", "Younes", "Yasmin", "Wassim", "Walid", "Zayd",
    "Safia", "Rania", "Rabia", "Nadia", "Noureddine", "Othman", "Omar", "Nouha", "Nadira", "Lamia", "Khalid",
    "Kawtar", "Jamal", "Jalal", "Jihan", "Imran", "Hajar", "Ghita", "Faycal", "Fadoua", "Fahd", "Fatiha",
    "Hafsa", "Hicham", "Hamza", "Hind", "Ikram", "Ismail", "Issam", "Ibtissam", "Jamila", "Jawad", "Khalid",
    "Kawtar", "Karim", "Leila", "Latifa", "Laila", "Mehdi", "Meryem", "Mohamed", "Naima", "Nadia", "Nasser",
    "Nada", "Othman", "Omar", "Rachida", "Rida", "Radia", "Salma", "Sara", "Samir", "Sanaa", "Tariq", "Tahar",
    "Yasmine", "Yassine", "Zainab", "Zakaria", "Zineb", "Hassan",
]

surnames = [
    'Ait', 'El', 'Ben', 'Bou', 'Ou', 'La', 'Ammar', 'Belkacem', 'Cherif', 'Daoud', 'Fassi', 'Ghani', 'Hajji',
    'Ibrahim', 'Jamal', 'Khaldoun', 'Lahlou', 'Mehdi', 'Naji', 'Omar', 'Pasha', 'Qasimi', 'Rahmani', 'Sadiq',
    'Tariq', 'Udai', 'Vasi', 'Wahid', 'Xerfi', 'Yacoub', 'Zahra', 'Abdallah', 'Bachir', 'Chaouki', 'Djelloul',
    'Elmir', 'Faraji', 'Gharbi', 'Hakim', 'Idrissi', 'Jalal', 'Kadiri', 'Larbi', 'Mansoor', 'Nabil', 'Othmani',
    'Pasha', 'Qadiri', 'Rashid', 'Safar', 'Tamir', 'Ullah', 'Vardi', 'Wahbi', 'Xavier', 'Yassin', 'Zaki', 'Abed',
    'Bader', 'Chafiq', 'Diyab', 'Elouardi', 'Fahmi', 'Ghazali', 'Haddad', 'Ismaili', 'Joudi', 'Khalili', 'Lutfi',
    'Mabrouk', 'Niazi', 'Ouali', 'Pakzad', 'Qureshi', 'Rami', 'Sahnoun', 'Taleb', 'Umayr', 'Vallée', 'Wazir',
    'Xalab', 'Yafi', 'Zarif', 'Abbar', 'Bahri', 'Chennaoui', 'Dhari', 'Ettahri', 'Fouad', 'Ghilani', 'Hattab',
    'Izem', 'Jafri', 'Kahia', 'Lazaar', 'Mahmoudi', 'Naji', 'Oumari', 'Pacha', 'Qasimi', 'Rahmouni', 'Saleh',
    'Tounsi', 'Ujiri', 'Vatan', 'Warsi', 'Xia', 'Yamani', 'Zarrouk', 'Abdoun', 'Bakr', 'Cherkaoui', 'Dhouib',
    'Elmassi', 'Fassi', 'Ghanem', 'Hajji', 'Issa', 'Jelassi', 'Kandil', 'Laghari', 'Madih', 'Nashwan', 'Ounis',
    'Pasha', 'Qadri', 'Rashidi', 'Saeed', 'Tahiri', 'Umar', 'Valli', 'Watanabe', 'Xu', 'Yasin', 'Zedan',
]



def f_tckn():
    """
    Generate a random 11-digit number.

    Returns:
        A string containing a random 11-digit number.
    """
    return str(random.randint(10 ** 10, 10 ** 11 - 1))


def f_random_n_digit(n):
    """
    Generate a random n-digit number.

    Args:
        n: The number of digits for the random number.

    Returns:
        A string containing a random n-digit number.
    """
    return str(random.randint(10 ** (n - 1), 10 ** n - 1))


def f_students_grade():
    """
    Generate a random float number between 1.5 and 4.0.

    Returns:
        A random float number between 1.5 and 4.0.
    """
    return round(random.uniform(1.5, 4.0), 2)


def activityRandomizer():
    return random.choices(['true', 'false'], weights=[0.7, 0.3], k=1)[0]


boulevard_street_names = [
    "Mohammed V", "Hassan II", "Medina", "Atlas", "Al Massira", "Oued Zem", "Al Farabi", "Al Amine", "Al Firdaous",
    "Al Moutanabbi", "Al Hambra", "Al Andalous", "Al Wifaq", "Al Manar", "Al Madina", "Al Bahja", "Al Houda", "Al Iman",
    "Al Janoub", "Al Gharb", "Al Mawada", "Al Hayat", "Al Rafiq", "Al Amal", "Al Kamal", "Al Mustaqbal", "Al Falah",
    "Al Karama", "Al Koutoubia", "Al Waha", "Al Nahda", "Al Inbiaat", "Al Massar", "Al Mahatta", "Al Mohit", "Al Farah",
    "Al Wajda", "Al Quds", "Al Asmaa", "Al Bayt", "Al Nour", "Al Ahbab", "Al Ansar", "Al Kifah", "Al Asr", "Al Irfane",
    "Al Akhlaq", "Al Fikr", "Al Hurriya", "Al Adala", "Al Nijma", "Al Fath", "Al Noor", "Al Rahma", "Al Sabah", "Al Saada",
    "Al Sahra", "Al Tawfeeq", "Al Tahrir", "Al Watan", "Al Yaoum", "Al Zohour", "Al Zubair", "Al Zawiyah", "Al Zaim",
    "Al Zumar", "Al Zikra", "Al Zhara", "Al Zahrat", "Al Zaytoon", "Al Zantour", "Al Zafar", "Al Zalzalah", "Al Zafer",
    "Al Zaid", "Al Zama", "Al Zamalek", "Al Zanati", "Al Zayd", "Al Zir", "Al Ziyad", "Al Zabad", "Al Zayr", "Al Zalqa",
    "Al Zahour", "Al Zawia", "Al Zimal", "Al Zimzim", "Al Zirqa", "Al Zirr", "Al Zarga", "Al Zayn", "Al Zaatari", "Al Zagora",
    "Al Zaimi", "Al Zawawi", "Al Zireg", "Al Zahir", "Al Zanati", "Al Zaydani", "Al Zabidi", "Al Zalik", "Al Zanati", "Al Zuhair",
    "Al Zaimi", "Al Zahir", "Al Zanati", "Al Zaytouni", "Al Zirak", "Al Zaiti", "Al Zabadi", "Al Zahi", "Al Zoghbi", "Al Zaitouna",
    "Al Zakhour", "Al Zangari", "Al Zehra", "Al Zalmai", "Al Zari", "Al Zawawi", "Al Zaman", "Al Zereb", "Al Zarghani", "Al Zarif",
]

mahalleler = [
    "Al Farah", "Al Andalus", "Al Houda", "Al Iman", "Al Janoub", "Al Gharb", "Al Mawada", "Al Hayat", "Al Rafiq", "Al Amal",
    "Al Kamal", "Al Mustaqbal", "Al Falah", "Al Karama", "Al Koutoubia", "Al Waha", "Al Nahda", "Al Inbiaat", "Al Massar",
    "Al Mahatta", "Al Mohit", "Al Wajda", "Al Quds", "Al Asmaa", "Al Bayt", "Al Nour", "Al Ahbab", "Al Ansar", "Al Kifah",
    "Al Asr", "Al Irfane", "Al Akhlaq", "Al Fikr", "Al Hurriya", "Al Adala", "Al Nijma", "Al Fath", "Al Noor", "Al Rahma",
    "Al Sabah", "Al Saada", "Al Sahra", "Al Tawfeeq", "Al Tahrir", "Al Watan", "Al Yaoum", "Al Zohour", "Al Zubair",
    "Al Zawiyah", "Al Zaim", "Al Zumar", "Al Zikra", "Al Zhara", "Al Zahrat", "Al Zaytoon", "Al Zantour", "Al Zafar",
    "Al Zalzalah", "Al Zafer", "Al Zaid", "Al Zama", "Al Zamalek", "Al Zanati", "Al Zayd", "Al Zir", "Al Ziyad", "Al Zabad",
    "Al Zayr", "Al Zalqa", "Al Zahour", "Al Zawia", "Al Zimal", "Al Zimzim", "Al Zirqa", "Al Zirr", "Al Zarga", "Al Zayn",
    "Al Zaatari", "Al Zagora", "Al Zaimi", "Al Zawawi", "Al Zireg", "Al Zahir", "Al Zanati", "Al Zaydani", "Al Zabidi",
    "Al Zalik", "Al Zanati", "Al Zuhair", "Al Zaimi", "Al Zahir", "Al Zanati", "Al Zaytouni", "Al Zirak", "Al Zaiti",
    "Al Zabadi", "Al Zahi", "Al Zoghbi", "Al Zaitouna", "Al Zakhour", "Al Zangari", "Al Zehra", "Al Zalmai", "Al Zari",
    "Al Zawawi", "Al Zaman", "Al Zereb", "Al Zarghani", "Al Zarif",
]
sehir = [
    "Casablanca", "Rabat", "Marrakech", "Fes", "Tangier", "Agadir", "Meknes", "Oujda", "Kenitra", "Tetouan",
    "Laayoune", "Nador", "Settat", "Khouribga", "Beni Mellal", "Mohammedia", "El Jadida", "Taza", "Larache",
    "Ksar El Kebir", "Guelmim", "Errachidia", "Tiznit", "El Kelaa des Sraghna", "Ouarzazate", "Tiflet",
    "Khenifra", "Skhirat", "Berrechid", "Taourirt", "Oulad Teima", "Sidi Slimane", "Youssoufia", "Tan-Tan",
    "Souk El Arbaa", "Ouazzane", "Sefrou", "Taroudant", "Fquih Ben Salah", "Oued Zem", "Beni Ansar", "Midelt",
    "Azrou", "Fnideq", "Skoura", "Sidi Kacem", "Gourougou", "Chefchaouen", "Zagora", "Khemisset", "Taounate",
    "Berkane", "Sidi Bennour", "Tinghir", "Sidi Yahya El Gharb", "Martil", "Ouad Zem", "Asilah", "Bouznika",
    "Ouarzazate", "Ait Melloul", "Ahfir", "Lixus", "Tizguine", "Tifnit", "Gourrama", "Bouarfa", "Beni Tadjit",
    "Bhalil", "Bab Taza", "Aousserd", "El Aioun Sidi Mellouk", "Boumalne Dades", "Boujdour", "Mediek", "Imzouren",
    "Brikcha", "Tendrara", "Oued Laou", "Guercif", "Arbaoua", "Oued Ifrane", "Ifrane", "Sidi Rahal", "Dar Bni Karrich",
    "Oulad Frej", "Tiflet", "Oued Laou", "Sidi Allal Tazi", "Dcheira El Jihadia", "Had Bouhssoussen", "Sidi Bouzid",
    "Oued Amlil", "Sidi Slimane", "Dakhla", "Oulad Tayma", "Bir Jdid", "Oued Amlil", "Tanger-Med", "Sidi Bouzid",
    "Oued Zem", "Oued Laou", "Boujad", "Sidi Bennour", "Oued Laou", "Tahala", "Sidi Allal Tazi", "Souk El Arbaa",
    "Sidi Allal El Bahraoui", "Oulad Tayma", "Sidi Slimane", "Bir Jdid", "Boujad", "Tahala", "Brikcha", "Sidi Bouzid",
    "Dakhla", "Oued Amlil", "Bouarfa", "Sidi Rahal", "Oulad Frej", "Oued Ifrane", "Tendrara", "Guercif", "Arbaoua",
    "Sidi Kacem", "Boumalne Dades", "Oued Ifrane", "Sidi Kacem", "Boumalne Dades", "Taroudant", "Oulad Teima",
    "Sidi Slimane", "Youssoufia", "Tan-Tan", "Souk El Arbaa", "Ouazzane", "Sefrou", "Azrou", "Fnideq", "Skoura",
    "Gourougou", "Chefchaouen", "Zagora", "Khemisset", "Taounate", "Berkane", "Tinghir", "Taza", "Larache", "Ksar El Kebir",
    "Fquih Ben Salah", "Beni Mellal", "Midelt", "Ait Melloul", "Ahfir", "Lixus", "Tizguine", "Tifnit", "Gourrama",
    "Boujdour", "Mediek", "Imzouren", "Brikcha", "Ouarzazate", "Aousserd", "El Aioun Sidi Mellouk", "Beni Tadjit",
    "Bab Taza", "Ouarzazate", "El Jadida", "Mohammedia", "Beni Ansar", "Errachidia", "Oujda", "Settat", "Khouribga",
    "Guelmim", "Laayoune", "Nador", "Ksar El Kebir", "Tetouan", "Fes", "Agadir", "Meknes", "Tangier", "Kenitra",
    "Rabat", "Marrakech", "Casablanca",
]

subprovince = ['Adar', 'Asilah', 'Azrou', 'Berkane', 'Casablanca', 'Chefchaouen', 'Dakhla', 'El Jadida',
               'Errachidia', 'Essaouira', 'Fes', 'Guelmim', 'Kenitra', 'Khemisset', 'Khenifra', 'Khouribga',
               'Laayoune', 'Larache', 'Marrakech', 'Meknes', 'Nador', 'Ouarzazate', 'Oujda', 'Rabat', 'Safi',
               'Sale', 'Settat', 'Sidi Ifni', 'Tangier', 'Tan-Tan', 'Taroudant', 'Taza', 'Tetouan', 'Tiznit']

village_names = ['Agdz', 'Boumalne-Dades', 'Chefchaouen', 'Dakhla', 'El Kelaa des Sraghna', 'Fes', 'Goulimine',
                 'Hassan II', 'Ifrane', 'Jorf', 'Khemisset', 'Laayoune', 'Marrakech', 'Nkob', 'Ouarzazate', 'Oued Zem',
                 'Sefrou', 'Taghazout', 'Tafraout', 'Taliouine', 'Tamazight', 'Taroudant', 'Taznakht', 'Tetouan',
                 'Tinerhir', 'Zagora']

id_registry_reasons = ['Walad', 'Ghayeb', 'Taghayyir']


company_data = [
    ("North Commerce", "A commerce company.", "Commerce"),
    ("Mediterranean Construction", "A company operating in the construction sector.", "Construction"),
    ("East Bank", "A financial institution offering banking services.", "Banking"),
    ("West Energy", "A company operating in the energy sector.", "Energy"),
    ("South Food", "A company in the food sector.", "Food"),
    ("Central Automotive", "A company operating in the automotive sector.", "Automotive"),
    ("Anatolian Technology", "A company operating in the technology domain.", "Technology"),
    ("Aegean Tourism", "A company in the tourism sector.", "Tourism"),
    ("Marmara Media", "A company operating in the fields of media and communication.", "Media and Communication"),
    ("Cukurova Agriculture", "A company operating in the agricultural sector.", "Agriculture"),
    ("Black Sea Airlines", "An airline company.", "Airline"),
    ("Anatolian Furniture", "A company in the furniture sector.", "Furniture"),
    ("Thrace Chemistry", "A company operating in the chemistry sector.", "Chemistry"),
    ("Electronics", "A company selling electronic products.", "Electronics"),
    ("Aegean Health", "A company in the health sector.", "Health"),
    ("Black Sea Communication", "A company operating in the communications sector.", "Communication"),
    ("Central Construction", "A company operating in the construction sector.", "Construction"),
    ("Mediterranean Ship", "A maritime transport company.", "Maritime Transport"),
    ("Central Motors", "A company operating in the automotive sector.", "Automotive"),
]





internship_status = [
    "PENDING",
    "APPROVED",
    "REJECTED"
]

facultyNames = [
    "Ingenierie",
    "Sciences",
    "Art",
    "Gestion",
    "Sciences sociales",
    "Sciences de la sante",
    "Education",
    "Droit",
    "Architecture",
    "Medecine"
]

