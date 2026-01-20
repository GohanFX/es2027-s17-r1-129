function changeTab(tabName) {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    console.log(tab);
    if (tab.previousElementSibling.id === tabName) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
  console.log(tabName);
  renderCourses(tabName);
}

const technologyCourses = [
  {
    title: "The Advanced Web Developer Bootcamp",
    instructor: "Sarah Lee",
    price: "$19.99",
    rating: "4.9",
    learners: "2,500+",
    courseImage: "/assets/course-1.png",
    courseLearnersImages: [
      "/assets/learner-avatar-1.png",
      "/assets/learner-avatar-2.png",
      "/assets/learner-avatar-3.png",

    ],
  },
  {
    title: "The Complete 2026 PHP Full Stack Web Developer Bootcamp",
    instructor: "Sarah Lee",
    price: "$109.99",
    rating: "4.9",
    learners: "4,235+",
    courseImage: "/assets/course-2.png",
    courseLearnersImages: [
      "/assets/learner-avatar-4.png",
      "/assets/learner-avatar-5.png",
      "/assets/learner-avatar-6.png",

    ],
  },
  {
    title: "Internet and Web Development Fundamentals",
    instructor: "Sarah Lee",
    price: "$79.99",
    rating: "4.9",
    learners: "20,459+",
    courseImage: "/assets/course-3.png",
    courseLearnersImages: [
      "/assets/learner-avatar-7.png",
      "/assets/learner-avatar-8.png",
      "/assets/learner-avatar-4.png",

    ],
  },
  {
    title: "CSS, Bootstrap ,JavaScript, Web Development Course",
    instructor: "Sarah Lee",
    price: "$49.99",
    rating: "4.9",
    learners: "2,500+",
    courseImage: "/assets/course-4.png",
    courseLearnersImages: [
      "/assets/learner-avatar-3.png",
      "/assets/learner-avatar-2.png",
      "/assets/learner-avatar-1.png",
    ],
  },
];

const designCourses = [
    {
    title: "Complete Web & Mobile Designer in 2026: UI/UX, Figma, +more",
    instructor: "Alex Chen",
    price: "$89.99",
    rating: "4.8",
    learners: "3,200+",
    courseImage: "/assets/course-4.png",
    courseLearnersImages: [
      "/assets/learner-avatar-3.png",
      "/assets/learner-avatar-2.png",
      "/assets/learner-avatar-1.png",
    ],
  },
   {
    title: "UX Design Masterclass: User Experience Design Course",
    instructor: "Maria Rodriguez",
    price: "$74.99",
    rating: "4.9",
    learners: "5,100+",
    courseImage: "/assets/course-4.png",
    courseLearnersImages: [
      "/assets/learner-avatar-3.png",
      "/assets/learner-avatar-2.png",
      "/assets/learner-avatar-1.png",
    ],
  },
  {
    title: "Adobe XD UI/UX Design: From Zero to Advanced",
    instructor: "James Wilson",
    price: "$59.99",
    rating: "4.7",
    learners: "2,800+",
    courseImage: "/assets/course-4.png",
    courseLearnersImages: [
      "/assets/learner-avatar-3.png",
      "/assets/learner-avatar-2.png",
      "/assets/learner-avatar-1.png",
    ],
  },
  {
    title: "Figma UI/UX Design Essentials: Complete Design System",
    instructor: "Emma Thompson",
    price: "$64.99",
    rating: "4.8",
    learners: "4,500+",
    courseImage: "/assets/course-4.png",
    courseLearnersImages: [
      "/assets/learner-avatar-3.png",
      "/assets/learner-avatar-2.png",
      "/assets/learner-avatar-1.png",
    ],
  },
];

function renderCourses(tabName) {
  const courseContainer = document.getElementById("course-cards-container");
  courseContainer.innerHTML = "";
  let coursesToRender = [];

  switch (tabName) {
    case "tab1":
      coursesToRender = technologyCourses;
      break;
    case "tab2":
      coursesToRender = designCourses;
      break;
    default:
      coursesToRender = [];
  }

  coursesToRender.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.innerHTML = renderCourse(course);
    courseContainer.appendChild(courseCard);
  });
  if (coursesToRender.length === 0) {
    courseContainer.innerHTML = "<p>No courses available in this category.</p>";
  }
}

function renderCourse(course) {
  return `<div class="course-card">
                    <img src="${course.courseImage}" alt="Course">
                    <h3 class="text-bold text-sm">${course.title}</h3>
                    <p>${course.instructor}</p>
                    <p class="course-price">${course.price}</p>
                    <div class="course-info">
                        <div style="display: flex; align-items: center; justify-items: center; gap: 4px;">
                            <div class="rating-container">
                            <img src="/assets/star-filled.svg" alt="Star Icon">
                        </div>
                         <span class="text-sm text-gray font-md">${course.rating}</span>
                        </div>
                        <div class="card-learners flex center">
                            <span class="text-gray text-sm font-md">${course.learners}</span>
                            <div class="learners">
                                ${course.courseLearnersImages.map((img) => `<img src="${img}" alt="Learner Avatar">`).join("")}
                            </div>
                        </div>
                    </div>
                </div>`;
}

function init() {
  renderCourses("tab1");
}

window.onload = init;
