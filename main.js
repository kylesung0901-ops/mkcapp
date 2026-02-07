// --- DATA ---
const dialectData = {
    seoul: {
        name: "Seoul & Gyeonggi",
        description: "The standard Korean dialect (Pyojuneo). It is characterized by a clear, flat intonation and is used in formal broadcasting."
    },
    gangwon: {
        name: "Gangwon",
        description: "Known for unique endings like '-drea' (~드래요). It has a rustic and friendly feel, often simpler in intonation."
    },
    chungcheong: {
        name: "Chungcheong",
        description: "Famous for being slow and indirect. Sentences often end with '-yu' (~유). Speakers are known for their gentle and humorous sarcasm."
    },
    jeolla: {
        name: "Jeolla",
        description: "Features a rhythmic, flowing intonation. Famous endings include '-ing' (~잉) and '-rang께' (~랑께). Very expressive and emotional."
    },
    gyeongsang: {
        name: "Gyeongsang",
        description: "Strong, tonal accents similar to pitch accents. Sentences are short and concise, often sounding aggressive to outsiders but are affectionate. Ends with '-no' (~노) or '-na' (~나)."
    },
    jeju: {
        name: "Jeju",
        description: "The most distinct dialect, arguably a separate language. It retains many ancient Korean words and is often mutually unintelligible with mainland dialects. Famous for 'Hondjeo-opseoye' (Welcome)."
    }
};

const dialectDetails = {
    seoul: [
        { id: 1, kr: "안녕하세요", rom: "An-nyeong-ha-se-yo", en: "Hello. (Standard polite greeting used at any time of day.)" },
        { id: 2, kr: "반갑습니다", rom: "Ban-gap-seum-ni-da", en: "Nice to meet you. (Formal and polite expression.)" },
        { id: 3, kr: "잠시만요", rom: "Jam-si-man-yo", en: "Just a moment / Excuse me. (Used when asking someone to wait or when passing through a crowd.)" },
        { id: 4, kr: "얼마예요?", rom: "Eol-ma-ye-yo?", en: "How much is it? (Standard phrase for shopping.)" },
        { id: 5, kr: "진짜요?", rom: "Jin-jja-yo?", en: "Really? (A very common reaction showing surprise or interest.)" },
        { id: 6, kr: "밥 먹었어?", rom: "Bap meo-geo-sseo?", en: "Did you eat? (Standard casual greeting, often used to ask 'How are you?' rather than literally about food.)" },
        { id: 7, kr: "어디 가?", rom: "Eo-di ga?", en: "Where are you going? (Casual way to ask someone's destination.)" },
        { id: 8, kr: "친구", rom: "Chin-gu", en: "Friend. (Standard term for a friend.)" },
        { id: 9, kr: "깍쟁이", rom: "Kkak-jaeng-i", en: "Stingy person / Smart aleck. (Historically used to describe Seoulites who are calculating or shrewd.)" },
        { id: 10, kr: "사랑해", rom: "Sa-rang-hae", en: "I love you. (Casual standard form.)" }
    ],
    gangwon: [
        { id: 1, kr: "밥 먹드래요?", rom: "Bap meok-deu-rae-yo?", en: "Did you eat? (Features the unique '~drea-yo' ending, sounding soft and friendly.)" },
        { id: 2, kr: "마카", rom: "Ma-ka", en: "All / Everyone. (e.g., 'Maka moyeora' means 'Everyone gather around'.)" },
        { id: 3, kr: "강냉이", rom: "Gang-naeng-i", en: "Corn. (Gangwon province is famous for corn.)" },
        { id: 4, kr: "안녕하시까?", rom: "An-nyeong-ha-si-kka?", en: "Hello? (A unique regional variation of the standard greeting.)" },
        { id: 5, kr: "나드래요", rom: "Na-deu-rae-yo", en: "It is me. (Standard: 'Jeo-ye-yo'.)" },
        { id: 6, kr: "이까?", rom: "I-kka?", en: "Is there? / Do you have? (Shortened form of 'Isseumnikka?'.)" },
        { id: 7, kr: "감자바위", rom: "Gam-ja-ba-wi", en: "Potato Rock. (A nickname for people from Gangwon, implying they are simple and honest like potatoes.)" },
        { id: 8, kr: "기래요", rom: "Gi-rae-yo", en: "Is that so? / Yes. (Used to agree or ask for confirmation.)" },
        { id: 9, kr: "쇠", rom: "Ssoe", en: "Cow. (Pronounced with a stronger accent than the standard 'So'.)" },
        { id: 10, kr: "어머이", rom: "Eo-meo-i", en: "Mother. (Specific pronunciation used in the region.)" }
    ],
    chungcheong: [
        { id: 1, kr: "괜찮아유", rom: "Gwaen-chan-a-yu", en: "It's okay / I'm fine. (The slow '~yu' ending makes it sound gentle and polite.)" },
        { id: 2, kr: "왔슈?", rom: "Wat-syu?", en: "You came? (A welcoming greeting. Short for 'Wasseoyo?'.)" },
        { id: 3, kr: "그려", rom: "Geu-ryeo", en: "Yes / That's right. (Used to agree with someone.)" },
        { id: 4, kr: "뭐여?", rom: "Mwo-yeo?", en: "What is it? / What are you doing? (Can be a question or an exclamation depending on tone.)" },
        { id: 5, kr: "가슈", rom: "Ga-syu", en: "Go ahead / Goodbye. (Polite way of telling someone to go.)" },
        { id: 6, kr: "냅둬유", rom: "Nap-dwo-yu", en: "Leave it alone. (Let it be. Shows a laid-back attitude.)" },
        { id: 7, kr: "아니여유", rom: "A-ni-yeo-yu", en: "No, it isn't. (Soft and polite denial.)" },
        { id: 8, kr: "인저", rom: "In-jeo", en: "Now. (Standard: 'Ije'.)" },
        { id: 9, kr: "됐슈", rom: "Dwaet-syu", en: "Forget it / No thanks. (A polite but firm refusal.)" },
        { id: 10, kr: "어디 가유?", rom: "Eo-di ga-yu?", en: "Where are you going? (The signature slow intonation is key here.)" }
    ],
    jeolla: [
        { id: 1, kr: "아따", rom: "Ah-tta", en: "Oh my! / Wow! (An exclamation used when frustrated, surprised, or impressed.)" },
        { id: 2, kr: "거시기", rom: "Geo-si-gi", en: "Whatchamacallit. (A magic word used when you can't remember a name or to replace any noun/verb in context.)" },
        { id: 3, kr: "허벌나게", rom: "Heo-beol-na-ge", en: "Extremely / A lot. (Emphasizes a huge amount or degree.)" },
        { id: 4, kr: "시방", rom: "Si-bang", en: "Right now. (Standard: 'Jigeum'.)" },
        { id: 5, kr: "욕봤소", rom: "Yok-bwat-sso", en: "Good job / You suffered. (Used to acknowledge someone's hard work.)" },
        { id: 6, kr: "긍께", rom: "Geung-kke", en: "Exactly / That's what I mean. (Used to show strong agreement.)" },
        { id: 7, kr: "워매", rom: "Wo-mae", en: "Oh my gosh! (Exclamation of surprise.)" },
        { id: 8, kr: "뭣이 중헌디?", rom: "Mwo-si jung-heon-di?", en: "What is important? (A famous phrase from a movie, questioning priorities.)" },
        { id: 9, kr: "싸게싸게", rom: "Ssa-ge-ssa-ge", en: "Quickly / Hurry up. (Urging someone to move fast.)" },
        { id: 10, kr: "징허다", rom: "Jing-heo-da", en: "It's intense / Sick of it. (Can be used for something amazing or something terrible.)" }
    ],
    gyeongsang: [
        { id: 1, kr: "밥 뭇나?", rom: "Bap mut-na?", en: "Did you eat? (Very common greeting. Sounds rough but implies care.)" },
        { id: 2, kr: "만다꼬?", rom: "Man-da-kko?", en: "What for? / Why bother? (Asking the reason, often skeptically.)" },
        { id: 3, kr: "맞나?", rom: "Mat-na?", en: "Really? / Is that so? (The most common reaction phrase in this region.)" },
        { id: 4, kr: "가 가가가?", rom: "Ga ga-ga?", en: "Is that the person? (Famous tonal phrase. Requires specific pitch accents to be understood.)" },
        { id: 5, kr: "와 그라노?", rom: "Wa geu-ra-no?", en: "Why are you like that? (Asking why someone is acting strangely.)" },
        { id: 6, kr: "단디 해라", rom: "Dan-di hae-ra", en: "Do it properly / Be careful. (Advice to be thorough.)" },
        { id: 7, kr: "파이다", rom: "Pa-i-da", en: "It's bad / Not good. (Negative evaluation of something.)" },
        { id: 8, kr: "억수로", rom: "Eok-su-ro", en: "Extremely / Very. (Similar to 'Very much'.)" },
        { id: 9, kr: "고마해라", rom: "Go-ma-hae-ra", en: "Stop it. (Warning someone to stop talking or doing something.)" },
        { id: 10, kr: "정구지", rom: "Jeong-gu-ji", en: "Chives. (Standard: 'Buchu'. A very common vocabulary difference.)" }
    ],
    jeju: [
        { id: 1, kr: "혼저 옵서예", rom: "Hon-jeo op-seo-ye", en: "Welcome. (The most famous Jeju dialect phrase.)" },
        { id: 2, kr: "하영", rom: "Ha-yeong", en: "Many / A lot. (e.g., 'Ha-yeong sopsseo' means 'Take a lot'.)" },
        { id: 3, kr: "맨도롱 또똣", rom: "Maen-do-rong tto-ttot", en: "Cozy and warm. (Describes a pleasant temperature or feeling.)" },
        { id: 4, kr: "감수광?", rom: "Gam-su-gwang?", en: "Are you going? (Standard: 'Gasimnikka?'.)" },
        { id: 5, kr: "이수꽈?", rom: "I-su-kkwa?", en: "Is there? / Do you have? (Standard: 'Isseumnikka?'.)" },
        { id: 6, kr: "무사?", rom: "Mu-sa?", en: "Why? (Standard: 'Wae?'. Easily confused with the word for warrior, but means 'Why' here.)" },
        { id: 7, kr: "폭삭 속았수다", rom: "Pok-sak so-gat-su-da", en: "Thank you for your hard work. (Literally means 'You were deceived heavily', implying you suffered/worked hard.)" },
        { id: 8, kr: "놀멍 쉬멍", rom: "Nol-meong swi-meong", en: "Play and rest / Take it easy. (Jeju's relaxed lifestyle motto.)" },
        { id: 9, kr: "강생이", rom: "Gang-saeng-i", en: "Puppy. (Standard: 'Gang-a-ji'.)" },
        { id: 10, kr: "삼춘", rom: "Sam-chun", en: "Uncle/Auntie. (Used to call any neighbor or elder, regardless of gender or actual relation.)" }
    ]
};

const appData = {
    quizzes: [
        { "id": 1, "type": "multiple_choice", "question": "Which word means 'Hello'?", "options": ["감사합니다", "안녕하세요", "죄송합니다"], "answer": "안녕하세요", "translation": "Hello" },
        { "id": 2, "type": "multiple_choice", "question": "Which word means 'Thank you'?", "options": ["사랑해", "주세요", "감사합니다"], "answer": "감사합니다", "translation": "Thank you" },
        { "id": 3, "type": "multiple_choice", "question": "What is 'Apple' in Korean?", "options": ["사과", "포도", "바나나"], "answer": "사과", "translation": "Apple" },
        { "id": 4, "type": "fill_in_blank", "question": "이 음식은 정말 ____어요. (This food is delicious)", "options": null, "answer": "맛있", "translation": "This food is really delicious." },
        { "id": 5, "type": "multiple_choice", "question": "What is 'Water'?", "options": ["물", "불", "풀"], "answer": "물", "translation": "Water" },
        { "id": 6, "type": "multiple_choice", "question": "What implies 'Yes'?", "options": ["네", "아니요", "아마도"], "answer": "네", "translation": "Yes" },
        { "id": 7, "type": "multiple_choice", "question": "What implies 'No'?", "options": ["네", "아니요", "좋아요"], "answer": "아니요", "translation": "No" },
        { "id": 8, "type": "multiple_choice", "question": "What is 'School'?", "options": ["학교", "병원", "은행"], "answer": "학교", "translation": "School" },
        { "id": 9, "type": "fill_in_blank", "question": "저는 학생____. (I am a student)", "options": null, "answer": "이에요", "translation": "I am a student." },
        { "id": 10, "type": "multiple_choice", "question": "Select the word for 'Bag'.", "options": ["가방", "모자", "신발"], "answer": "가방", "translation": "Bag" },
        { "id": 11, "type": "multiple_choice", "question": "What is 'Friend'?", "options": ["친구", "가족", "선생님"], "answer": "친구", "translation": "Friend" },
        { "id": 12, "type": "multiple_choice", "question": "What is 'Book'?", "options": ["책", "공책", "연필"], "answer": "책", "translation": "Book" },
        { "id": 13, "type": "multiple_choice", "question": "What is 'Milk'?", "options": ["우유", "주스", "커피"], "answer": "우유", "translation": "Milk" },
        { "id": 14, "type": "fill_in_blank", "question": "한국어를 ____. (I study Korean)", "options": null, "answer": "공부해요", "translation": "I study Korean." },
        { "id": 15, "type": "multiple_choice", "question": "What is 'Cat'?", "options": ["강아지", "고양이", "토끼"], "answer": "고양이", "translation": "Cat" },
        { "id": 16, "type": "multiple_choice", "question": "What is 'Dog'?", "options": ["강아지", "사자", "호랑이"], "answer": "강아지", "translation": "Dog/Puppy" },
        { "id": 17, "type": "multiple_choice", "question": "What is 'Tomorrow'?", "options": ["어제", "오늘", "내일"], "answer": "내일", "translation": "Tomorrow" },
        { "id": 18, "type": "multiple_choice", "question": "What is 'Today'?", "options": ["어제", "오늘", "내일"], "answer": "오늘", "translation": "Today" },
        { "id": 19, "type": "fill_in_blank", "question": "집에 ____. (I go home)", "options": null, "answer": "가요", "translation": "I go home." },
        { "id": 20, "type": "multiple_choice", "question": "What is 'Bread'?", "options": ["밥", "면", "빵"], "answer": "빵", "translation": "Bread" },
        { "id": 21, "type": "multiple_choice", "question": "What is 'Money'?", "options": ["돈", "카드", "지갑"], "answer": "돈", "translation": "Money" },
        { "id": 22, "type": "multiple_choice", "question": "What implies 'Sorry'?", "options": ["괜찮아요", "미안해요", "축하해요"], "answer": "미안해요", "translation": "Sorry" },
        { "id": 23, "type": "fill_in_blank", "question": "이름이 ____? (What is your name?)", "options": null, "answer": "뭐예요", "translation": "What is your name?" },
        { "id": 24, "type": "multiple_choice", "question": "What is 'Mother'?", "options": ["엄마", "아빠", "오빠"], "answer": "엄마", "translation": "Mother" },
        { "id": 25, "type": "multiple_choice", "question": "What is 'Father'?", "options": ["엄마", "아빠", "누나"], "answer": "아빠", "translation": "Father" },
        { "id": 26, "type": "multiple_choice", "question": "What is 'Subway'?", "options": ["버스", "택시", "지하철"], "answer": "지하철", "translation": "Subway" },
        { "id": 27, "type": "multiple_choice", "question": "What is 'Street'?", "options": ["길", "집", "방"], "answer": "길", "translation": "Street/Road" },
        { "id": 28, "type": "fill_in_blank", "question": "화장실이 ____에 있어요? (Where is the restroom?)", "options": null, "answer": "어디", "translation": "Where is the restroom?" },
        { "id": 29, "type": "multiple_choice", "question": "What is 'Left'?", "options": ["왼쪽", "오른쪽", "위"], "answer": "왼쪽", "translation": "Left" },
        { "id": 30, "type": "multiple_choice", "question": "What is 'Right'?", "options": ["왼쪽", "오른쪽", "아래"], "answer": "오른쪽", "translation": "Right" },
        { "id": 31, "type": "multiple_choice", "question": "What is 'Rain'?", "options": ["비", "눈", "바람"], "answer": "비", "translation": "Rain" },
        { "id": 32, "type": "multiple_choice", "question": "What is 'Snow'?", "options": ["비", "눈", "구름"], "answer": "눈", "translation": "Snow" },
        { "id": 33, "type": "fill_in_blank", "question": "날씨가 ____. (The weather is hot)", "options": null, "answer": "더워요", "translation": "It is hot." },
        { "id": 34, "type": "multiple_choice", "question": "What is 'Phone'?", "options": ["컴퓨터", "전화", "텔레비전"], "answer": "전화", "translation": "Phone" },
        { "id": 35, "type": "multiple_choice", "question": "What is 'Time'?", "options": ["시간", "장소", "날짜"], "answer": "시간", "translation": "Time" },
        { "id": 36, "type": "multiple_choice", "question": "What is 'Movie'?", "options": ["영화", "드라마", "노래"], "answer": "영화", "translation": "Movie" },
        { "id": 37, "type": "fill_in_blank", "question": "음악을 ____. (I listen to music)", "options": null, "answer": "들어요", "translation": "I listen to music." },
        { "id": 38, "type": "multiple_choice", "question": "What is 'Eye'?", "options": ["눈", "코", "입"], "answer": "눈", "translation": "Eye" },
        { "id": 39, "type": "multiple_choice", "question": "What is 'Hand'?", "options": ["손", "발", "머리"], "answer": "손", "translation": "Hand" },
        { "id": 40, "type": "multiple_choice", "question": "What is 'Pharmacy'?", "options": ["약국", "식당", "카페"], "answer": "약국", "translation": "Pharmacy" },
        { "id": 41, "type": "fill_in_blank", "question": "약을 ____. (Please give me medicine)", "options": null, "answer": "주세요", "translation": "Please give me medicine." },
        { "id": 42, "type": "multiple_choice", "question": "What is 'Clothes'?", "options": ["옷", "바지", "치마"], "answer": "옷", "translation": "Clothes" },
        { "id": 43, "type": "multiple_choice", "question": "What is 'Hat'?", "options": ["모자", "안경", "시계"], "answer": "모자", "translation": "Hat" },
        { "id": 44, "type": "multiple_choice", "question": "What means 'Pretty'?", "options": ["예쁘다", "멋있다", "귀엽다"], "answer": "예쁘다", "translation": "Pretty" },
        { "id": 45, "type": "fill_in_blank", "question": "이거 너무 ____. (This is too expensive)", "options": null, "answer": "비싸요", "translation": "This is too expensive." },
        { "id": 46, "type": "multiple_choice", "question": "What is 'Morning'?", "options": ["아침", "점심", "저녁"], "answer": "아침", "translation": "Morning" },
        { "id": 47, "type": "multiple_choice", "question": "What is 'Night'?", "options": ["낮", "밤", "새벽"], "answer": "밤", "translation": "Night" },
        { "id": 48, "type": "fill_in_blank", "question": "안녕히 ____. (Good night / Sleep well)", "options": null, "answer": "주무세요", "translation": "Sleep well (Honorific)." },
        { "id": 49, "type": "multiple_choice", "question": "What is 'Birthday'?", "options": ["생일", "기념일", "휴일"], "answer": "생일", "translation": "Birthday" },
        { "id": 50, "type": "multiple_choice", "question": "What is 'Company' (Work)?", "options": ["회사", "학교", "가게"], "answer": "회사", "translation": "Company" },
        { "id": 51, "type": "fill_in_blank", "question": "회사에서 ____. (I work at the company)", "options": null, "answer": "일해요", "translation": "I work." },
        { "id": 52, "type": "multiple_choice", "question": "What is 'Coffee'?", "options": ["커피", "차", "물"], "answer": "커피", "translation": "Coffee" },
        { "id": 53, "type": "multiple_choice", "question": "What is 'Spring' (Season)?", "options": ["봄", "여름", "가을"], "answer": "봄", "translation": "Spring" },
        { "id": 54, "type": "multiple_choice", "question": "What is 'Winter'?", "options": ["가을", "겨울", "봄"], "answer": "겨울", "translation": "Winter" },
        { "id": 55, "type": "fill_in_blank", "question": "꽃이 ____. (Flowers bloom)", "options": null, "answer": "피어요", "translation": "Flowers bloom." },
        { "id": 56, "type": "multiple_choice", "question": "What is 'Sea'?", "options": ["바다", "산", "강"], "answer": "바다", "translation": "Sea" },
        { "id": 57, "type": "multiple_choice", "question": "What is 'Mountain'?", "options": ["바다", "산", "들"], "answer": "산", "translation": "Mountain" },
        { "id": 58, "type": "multiple_choice", "question": "What is 'Airplane'?", "options": ["비행기", "기차", "버스"], "answer": "비행기", "translation": "Airplane" },
        { "id": 59, "type": "multiple_choice", "question": "What is 'Passport'?", "options": ["여권", "표", "짐"], "answer": "여권", "translation": "Passport" },
        { "id": 60, "type": "fill_in_blank", "question": "여행을 ____. (I go on a trip)", "options": null, "answer": "가요", "translation": "I go on a trip." },
        { "id": 61, "type": "multiple_choice", "question": "What means 'Spicy'?", "options": ["맵다", "달다", "짜다"], "answer": "맵다", "translation": "Spicy" },
        { "id": 62, "type": "multiple_choice", "question": "What is 'Weekend'?", "options": ["주말", "평일", "휴일"], "answer": "주말", "translation": "Weekend" },
        { "id": 63, "type": "multiple_choice", "question": "What is 'Park'?", "options": ["공원", "마당", "숲"], "answer": "공원", "translation": "Park" }
    ]
};

const bodyPartsData = {
    head: {
        label: "Head (머리 / 두개골)",
        symptoms: [
            "I have a splitting headache. (머리가 깨질 듯이 아파요.)",
            "I feel dizzy and lightheaded. (어지럽고 현기증이 나요.)",
            "I have a throbbing pain in my temples. (관자놀이가 지끈거려요.)"
        ]
    },
    eyes: {
        label: "Eyes (눈)",
        symptoms: [
            "My vision is blurry. (시야가 흐릿하게 보여요.)",
            "My eyes are dry and itchy. (눈이 건조하고 가려워요.)",
            "I see spots floating in front of my eyes. (눈앞에 점 같은 게 둥둥 떠다녀요.)"
        ]
    },
    throat_neck: {
        label: "Neck & Throat (목 / 인후)",
        symptoms: [
            "I have a sore throat. (목이 따갑고 아파요.)",
            "It hurts when I swallow. (침을 삼킬 때 목이 아파요.)",
            "My neck feels stiff. (목이 뻣뻣해요.)"
        ]
    },
    chest_lungs: {
        label: "Chest & Lungs (가슴 / 폐)",
        symptoms: [
            "I feel a tightness in my chest. (가슴이 조이는 느낌이 들어요.)",
            "I am short of breath. (숨이 차요.)",
            "I have a persistent dry cough. (마른기침이 계속 나와요.)"
        ]
    },
    heart: {
        label: "Heart (심장)",
        symptoms: [
            "My heart is beating too fast. (심장이 너무 빨리 뛰어요.)",
            "I feel heart palpitations. (가슴 두근거림이 느껴져요.)",
            "I have sharp chest pain on the left side. (왼쪽 가슴에 날카로운 통증이 있어요.)"
        ]
    },
    shoulder: {
        label: "Shoulders (어깨 / 삼각근)",
        symptoms: [
            "My shoulder is dislocated. (어깨가 빠진 것 같아요.)",
            "I cannot raise my arm due to pain. (통증 때문에 팔을 들어 올릴 수가 없어요.)",
            "My shoulders feel heavy and tense. (어깨가 무겁고 뭉친 느낌이에요.)"
        ]
    },
    stomach: {
        label: "Stomach (위장 / 복부)",
        symptoms: [
            "I have severe indigestion. (소화가 너무 안 돼요.)",
            "My stomach feels bloated. (배에 가스가 차서 더부룩해요.)",
            "I feel nauseous and want to vomit. (속이 메스껍고 토할 것 같아요.)"
        ]
    },
    liver: {
        label: "Liver (간)",
        symptoms: [
            "I have pain in my upper right abdomen. (오른쪽 윗배에 통증이 있어요.)",
            "My skin looks yellowish. (피부색이 노랗게 변했어요.)",
            "I feel constantly fatigued. (계속 피로감을 느껴요.)"
        ]
    },
    arm_elbow: {
        label: "Arms & Elbows (팔 / 팔꿈치)",
        symptoms: [
            "My arm feels numb. (팔에 감각이 없고 저려요.)",
            "I have pain in my elbow joint. (팔꿈치 관절이 아파요.)",
            "My muscles are aching. (근육통이 있어요.)"
        ]
    },
    intestine: {
        label: "Intestines (장 / 소장·대장)",
        symptoms: [
            "I have diarrhea. (설사를 해요.)",
            "I am constipated. (변비가 있어요.)",
            "I have cramps in my lower belly. (아랫배가 쥐어짜는 듯이 아파요.)"
        ]
    },
    hand_wrist: {
        label: "Hands & Wrists (손 / 손목)",
        symptoms: [
            "My wrist hurts when I move it. (손목을 움직일 때마다 아파요.)",
            "My hands are trembling. (손이 떨려요.)",
            "My fingers are tingling. (손가락이 저릿저릿해요.)"
        ]
    },
    leg_thigh: {
        label: "Legs & Thighs (다리 / 대퇴부)",
        symptoms: [
            "I have a cramp in my leg. (다리에 쥐가 났어요.)",
            "My legs feel swollen. (다리가 부은 느낌이에요.)",
            "I pulled a muscle in my thigh. (허벅지 근육이 늘어난 것 같아요.)"
        ]
    },
    knee: {
        label: "Knees (무릎)",
        symptoms: [
            "My knee makes a clicking sound. (무릎에서 딱딱 소리가 나요.)",
            "It hurts when I walk or climb stairs. (걷거나 계단을 오를 때 아파요.)",
            "My knee is swollen and hot. (무릎이 붓고 열감이 있어요.)"
        ]
    },
    back_head_neck: {
        label: "Back of Head & Neck (후두부 / 목덜미)",
        symptoms: [
            "My neck is stiff and I can't turn my head. (목이 뻣뻣해서 고개를 돌릴 수가 없어요.)",
            "I have a pain radiating from the base of my skull. (머리 뒷부분에서 통증이 뻗어 나와요.)",
            "It feels like I have a pinched nerve in my neck. (목에 신경이 눌린 것 같은 느낌이 들어요.)"
        ]
    },
    upper_back_scapula: {
        label: "Upper Back & Shoulder Blade (등 상부 / 날개뼈)",
        symptoms: [
            "I feel a sharp pain between my shoulder blades. (날개뼈 사이에 날카로운 통증이 느껴져요.)",
            "My upper back muscles are full of knots. (등 위쪽 근육이 꽉 뭉쳐 있어요.)",
            "I feel pain in my shoulder when I lift my arm backward. (팔을 뒤로 올릴 때 어깨가 아파요.)"
        ]
    },
    spine: {
        label: "Spine (척추)",
        symptoms: [
            "My spine feels crooked and hurts. (척추가 휘어진 것 같고 아파요.)",
            "I feel a tingling sensation down my spine. (척추를 따라 찌릿한 느낌이 들어요.)",
            "It hurts right in the center of my back. (등 한가운데가 딱 아파요.)"
        ]
    },
    lower_back: {
        label: "Lower Back (허리 / 요추)",
        symptoms: [
            "I hurt my back lifting something heavy. (무거운 물건을 들다가 허리를 다쳤어요.)",
            "I have chronic lower back pain. (허리 통증이 만성적으로 있어요.)",
            "I cannot bend over due to back pain. (허리가 아파서 몸을 숙일 수가 없어요.)"
        ]
    },
    elbow_back: {
        label: "Elbow (팔꿈치)",
        symptoms: [
            "My elbow hurts when I extend my arm. (팔을 펴면 팔꿈치가 아파요.)",
            "The tip of my elbow is swollen and tender. (팔꿈치 끝부분이 붓고 누르면 아파요.)",
            "I feel pain on the outside of my elbow. (팔꿈치 바깥쪽에 통증이 있어요.)"
        ]
    },
    buttocks: {
        label: "Buttocks & Hips (엉덩이 / 둔근)",
        symptoms: [
            "A shooting pain runs down from my hip to my leg. (엉덩이에서 다리까지 찌릿한 통증이 내려와요.)",
            "It hurts to sit down for a long time. (오래 앉아 있으면 엉덩이가 아파요.)",
            "I feel pain deep inside my hip. (엉덩이 안쪽 깊은 곳이 아파요.)"
        ]
    },
    hamstring: {
        label: "Back of Thigh (허벅지 뒷면 / 햄스트링)",
        symptoms: [
            "I pulled a hamstring while running. (달리기를 하다가 햄스트링 근육이 늘어났어요.)",
            "I feel a sharp pain in the back of my thigh. (허벅지 뒤쪽에 날카로운 통증이 있어요.)",
            "My thigh muscles feel extremely tight. (허벅지 근육이 너무 당겨요.)"
        ]
    },
    knee_back: {
        label: "Back of Knee (오금 / 무릎 뒤)",
        symptoms: [
            "The back of my knee feels swollen. (무릎 뒤쪽이 부은 느낌이에요.)",
            "I have a cyst-like lump behind my knee. (무릎 뒤에 물혹 같은 게 만져져요.)",
            "It hurts behind my knee when I bend my leg. (다리를 구부릴 때 무릎 뒤가 아파요.)"
        ]
    },
    calf: {
        label: "Calf (종아리 / 비복근)",
        symptoms: [
            "I have frequent cramps in my calves at night. (밤마다 종아리에 쥐가 자주 나요.)",
            "My calves feel heavy and swollen. (종아리가 무겁고 부었어요.)",
            "I feel a tearing sensation in my calf muscle. (종아리 근육이 찢어지는 듯한 느낌이 들어요.)"
        ]
    },
    achilles: {
        label: "Achilles Tendon (아킬레스건)",
        symptoms: [
            "The back of my heel hurts when I walk. (걸을 때 발뒤꿈치 뒤쪽이 아파요.)",
            "My Achilles tendon feels stiff in the morning. (아침에 아킬레스건이 뻣뻣해요.)",
            "I felt a pop in the back of my ankle. (발목 뒤에서 '뚝' 하는 느낌이 났어요.)"
        ]
    },
    heel: {
        label: "Heel (발뒤꿈치)",
        symptoms: [
            "I feel a stabbing pain in my heel when I stand up. (일어설 때 발뒤꿈치를 찌르는 듯한 통증이 있어요.)",
            "My heels hurt after standing for a long time. (오래 서 있으면 발뒤꿈치가 아파요.)",
            "The skin on my heels is cracked and painful. (발뒤꿈치 피부가 갈라지고 아파요.)"
        ]
    }
};

// --- CORE LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    renderQuizzes();
});

function renderQuizzes() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    container.innerHTML = ''; // Clear existing
    appData.quizzes.forEach((quiz, i) => {
        const card = document.createElement('article');
        card.className = 'quiz-card';
        card.innerHTML = `
            <div class="quiz-question">Q${i + 1}. ${quiz.question}</div>
            ${quiz.korean_sentence ? `<div class="korean-text" style="font-size:1.5rem; background:#f1f5f9; padding:1.2rem; border-radius:16px; margin-bottom:1.2rem; text-align:center;">${quiz.korean_sentence}</div>` : ''}
            <div class="options-grid">
                ${quiz.type === 'multiple_choice' ?
                quiz.options.map(o => `<button class="option-btn" onclick="checkAnswer(this, '${o}', '${quiz.answer}', 'f-${quiz.id}', '${quiz.translation}')" style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:12px; margin-bottom:0.5rem; cursor:pointer; text-align:left; font-weight:600; background:white;">${o}</button>`).join('') :
                `<input type="text" class="input-box" id="i-${quiz.id}" style="width:100%; padding:1rem; border:1px solid #e2e8f0; border-radius:12px; margin-bottom:0.8rem;"><button class="check-btn" onclick="checkInput('i-${quiz.id}', '${quiz.answer}', 'f-${quiz.id}', '${quiz.translation}')" style="width:100%; padding:1rem; background:#3b82f6; color:white; border:none; border-radius:12px; font-weight:700; cursor:pointer;">Check</button>`
            }
            </div>
            <div id="f-${quiz.id}" class="feedback-msg" style="display:none; margin-top:1rem; padding:1rem; border-radius:12px; font-weight:600;"></div>
        `;
        container.appendChild(card);
    });
}

function checkAnswer(btn, sel, cor, fid, trans) {
    const f = document.getElementById(fid);
    f.style.display = 'block';
    if (sel === cor) {
        f.style.background = '#ecfdf5'; f.style.color = '#065f46'; f.innerHTML = `✨ Correct! "${trans}"`;
    } else {
        f.style.background = '#fef2f2'; f.style.color = '#991b1b'; f.innerHTML = "❌ Not quite. Try again!";
    }
}

function checkInput(iid, cor, fid, trans) {
    const i = document.getElementById(iid);
    const f = document.getElementById(fid);
    f.style.display = 'block';
    if (i.value.trim() === cor) {
        f.style.background = '#ecfdf5'; f.style.color = '#065f46'; f.innerHTML = `✨ Perfect! "${trans}"`;
    } else {
        f.style.background = '#fef2f2'; f.style.color = '#991b1b'; f.innerHTML = `❌ Try again! Correct answer: ${cor}`;
    }
}

window.showDialect = function (key) {
    const data = dialectData[key];
    const details = dialectDetails[key];
    if (!data || !details) return;

    const infoBox = document.getElementById('dialect-info');
    const placeholder = infoBox.querySelector('.info-placeholder');
    const content = infoBox.querySelector('.info-content');
    const title = document.getElementById('region-title');
    const desc = document.getElementById('region-desc');

    placeholder.style.display = 'none';
    content.style.display = 'block';

    // Header
    title.textContent = data.name;

    // Description + List
    let htmlContent = `<p style="margin-bottom: 2rem; color: #475569;">${data.description}</p>`;
    htmlContent += `<ol class="dialect-list">`;

    details.forEach(item => {
        htmlContent += `
            <li class="dialect-item" style="animation: cardSlideIn 0.5s ease forwards; animation-delay: ${item.id * 0.05}s; opacity: 0;">
                <div class="dialect-korean">${item.kr}</div>
                <div class="dialect-rom">${item.rom}</div>
                <div class="dialect-en">${item.en}</div>
            </li>
        `;
    });
    htmlContent += `</ol>`;

    desc.innerHTML = htmlContent;

    // Subtle highlight for active state
    document.querySelectorAll('.hotspot').forEach(h => h.classList.remove('active'));
    const target = document.querySelector(`.hotspot-${key}`);
    if (target) target.classList.add('active');

    if (window.innerWidth < 1200 && event && event.type === 'click') {
        infoBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

window.showSymptoms = function (partId) {
    const data = bodyPartsData[partId];
    if (!data) return;

    const infoBox = document.getElementById('symptom-info');
    const placeholder = infoBox.querySelector('.info-placeholder');
    const content = infoBox.querySelector('.info-content');
    const title = document.getElementById('anatomy-title');
    const symptomList = document.getElementById('symptom-list');

    placeholder.style.display = 'none';
    content.style.display = 'block';

    title.textContent = data.label;

    let html = '';
    data.symptoms.forEach((s, idx) => {
        html += `<li style="margin-bottom: 1rem; padding: 1rem; background: white; border-radius: 12px; box-shadow: var(--shadow-sm); animation: cardSlideIn 0.3s ease both; animation-delay: ${idx * 0.1}s;">${s}</li>`;
    });
    symptomList.innerHTML = html;

    // Highlight active body hotspot
    document.querySelectorAll('.body-hotspot').forEach(h => h.classList.remove('active'));
    const target = document.querySelector(`.hotspot-${partId}`);
    if (target) target.classList.add('active');

    if (window.innerWidth < 1200 && event && (event.type === 'click')) {
        infoBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

window.switchTab = function (tab) {
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(`${tab}-section`).classList.add('active');
    document.querySelector(`.nav-btn[data-tab="${tab}"]`).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
};