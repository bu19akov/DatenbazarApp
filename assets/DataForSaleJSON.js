export const DataForSaleJSON = [
  {
    image: require("../assets/healthIcons/health.png"),
    dataCategory: "Health Data",
    data: [
      {
        image: require("../assets/healthIcons/health_data.png"),
        dataName: "General health status",
        price: 1,
        questions: [
          {
            questionType: "direct",
            questionText: "What is your current weight (in kilograms)?",
            placeholder: "Enter your weight",
            isRequired: true,
          },
          {
            questionType: "direct",
            questionText: "What is your height (in centimeters)?",
            placeholder: "Enter your height",
            isRequired: true,
          },
          {
            questionType: "multipleChoice",
            questionText: "Do you smoke?",
            options: ["Yes", "No"],
            isRequired: true,
          },
          {
            questionType: "multipleChoice",
            questionText: "How often do you exercise?",
            options: [
              "Rarely or never",
              "1-2 times per week",
              "3-4 times per week",
              "5 or more times per week",
            ],
            isRequired: true,
          },
          {
            questionType: "direct",
            questionText:
              "Are you currently taking any medications? If yes, please provide details.",
            placeholder: "Enter medication details (if applicable)",
            isRequired: false,
          },
        ],
      },
      {
        dataName: "Medical history",
        image: require("../assets/healthIcons/book.png"),
        price: 3,
        questions: [
          {
            questionType: "direct",
            questionText:
              "Do you have any past or current medical conditions? If yes, please provide details.",
            placeholder: "Enter medical condition details (if applicable)",
            isRequired: false,
          },
        ],
      },
      {
        dataName: "Genetic test results",
        image: require("../assets/healthIcons/test.png"),
        price: 8,
        questions: [
          {
            questionType: "direct",
            questionText:
              "Have you undergone any genetic testing? If yes, please provide details.",
            placeholder: "Enter genetic testing details (if applicable)",
            isRequired: false,
          },
        ],
      },
      {
        dataName: "Prescription records",
        image: require("../assets/healthIcons/medicines.png"),
        price: 4,
        questions: [
          {
            questionType: "direct",
            questionText:
              "Are you currently on any prescription medications? If yes, please provide details.",
            placeholder:
              "Enter prescription medication details (if applicable)",
            isRequired: false,
          },
        ],
      },
      {
        dataName: "Fitness tracker data",
        image: require("../assets/healthIcons/fitness.png"),
        price: 2,
        questions: [
          {
            questionType: "direct",
            questionText:
              "Do you use any fitness tracking devices or apps? If yes, please provide details.",
            placeholder: "Enter fitness tracker details (if applicable)",
            isRequired: false,
          },
        ],
      },
      {
        dataName: "Blood pressure readings",
        image: require("../assets/healthIcons/blood_pressure.png"),
        price: 1,
        questions: [
          {
            questionType: "direct",
            questionText: "What is your average blood pressure reading?",
            placeholder: "Enter your average blood pressure",
            isRequired: false,
          },
        ],
      },
      {
        dataName: "Dietary habits",
        image: require("../assets/healthIcons/nutrition.png"),
        price: 2,
        questions: [
          {
            questionType: "direct",
            questionText: "What is your typical daily diet like?",
            placeholder: "Describe your daily diet",
            isRequired: false,
          },
        ],
      },
      {
        dataName: "Sleep patterns",
        image: require("../assets/healthIcons/sleep.png"),
        price: 3,
        questions: [
          {
            questionType: "direct",
            questionText: "How many hours do you usually sleep per night?",
            placeholder: "Enter your average nightly sleep duration",
            isRequired: false,
          },
        ],
      },
      {
        dataName: "Allergy information",
        image: require("../assets/healthIcons/allergies.png"),
        price: 2,
        questions: [
          {
            questionType: "direct",
            questionText:
              "Do you have any known allergies? If yes, please provide details.",
            placeholder: "Enter allergy details (if applicable)",
            isRequired: false,
          },
        ],
      },
      {
        dataName: "Immunization records",
        image: require("../assets/healthIcons/virus.png"),
        price: 4,
        questions: [
          {
            questionType: "direct",
            questionText:
              "What immunizations have you received? Please provide details.",
            placeholder: "Enter immunization details",
            isRequired: false,
          },
        ],
      },
      {
        dataName: "Lab test results",
        image: require("../assets/healthIcons/microscope.png"),
        price: 6,
        questions: [
          {
            questionType: "direct",
            questionText:
              "Have you undergone any recent lab tests? If yes, please provide details.",
            placeholder: "Enter lab test details (if applicable)",
            isRequired: false,
          },
        ],
      },
    ],
  },
  {
    image: require('../assets/entIcons/happy.png'),
    dataCategory: "Entertainment data",
    data: [
      {
        dataName: "Music preferences",
        image: require('../assets/entIcons/ear.png'),
        price: 2,
        questions: [
          {
            questionType: "multipleChoice",
            questionText: "What is your favorite music genre?",
            options: [
              "Pop",
              "Rock",
              "Hip Hop",
              "Country",
              "Electronic",
              "Classical",
              "Jazz",
              "R&B",
              "Metal",
              "Other"
            ],
            isRequired: true
          },
          {
            questionType: "multipleChoice",
            questionText: "Which music streaming platforms do you use?",
            options: [
              "Spotify",
              "Apple Music",
              "Amazon Music",
              "YouTube Music",
              "Deezer",
              "Tidal",
              "Pandora",
              "SoundCloud",
              "Other"
            ],
            isRequired: true
          },
          {
            questionType: "direct",
            questionText: "Do you attend live music events or concerts? If yes, which genres or artists do you prefer?",
            placeholder: "Enter your preferences (if applicable)",
            isRequired: false
          }
        ]
      },
      {
        dataName: "Movie preferences",
        image: require('../assets/entIcons/movies.png'),
        price: 3,
        questions: [
          {
            questionType: "multipleChoice",
            questionText: "Which movie genres do you enjoy?",
            options: [
              "Action",
              "Comedy",
              "Drama",
              "Romance",
              "Horror",
              "Science Fiction",
              "Adventure",
              "Thriller",
              "Animation",
              "Other"
            ],
            isRequired: true
          },
          {
            questionType: "direct",
            questionText: "Who are your favorite actors or directors?",
            placeholder: "Enter your preferences",
            isRequired: false
          }
        ]
      },
      {
        dataName: "TV show preferences",
        image: require('../assets/entIcons/desktop_app.png'),
        price: 2,
        questions: [
          {
            questionType: "multipleChoice",
            questionText: "Which TV show genres do you enjoy?",
            options: [
              "Drama",
              "Comedy",
              "Crime",
              "Thriller",
              "Sci-Fi",
              "Fantasy",
              "Reality TV",
              "Documentary",
              "Animation",
              "Other"
            ],
            isRequired: true
          },
          {
            questionType: "direct",
            questionText: "What are your favorite TV shows or series?",
            placeholder: "Enter your preferences",
            isRequired: false
          }
        ]
      }
    ]
  }
];
