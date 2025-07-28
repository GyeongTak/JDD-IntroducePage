const members = [
  {
    name: "변경탁 TL",
    prfImg: "../img/member_1.png",
    mbti: "ESFJ",
    field: "풀스택 개발자",
    stack: "C, Python, JAVA, JS, Mysql, Node.js",
    comment: "창의력과 실력을 바탕으로 우리 사회에 도움이 되는 프로그램을 개발하는 것이 목표인 개발자 변경탁입니다. 끊임없이 배우고 발전하도록 하겠습니다! ",
    github:"https://github.com/GyeongTak"
  },
  {
    name: "박조아",
    prfImg: "../img/member_2.png",
    mbti: "ISFP",
    field: "프론트엔드 개발자",
    stack: "JavaScript, TypeScript, React, Python, Java",
    comment: "화려하고 감각적인 인터랙션을 좋아하며, 모두가 편하게 사용할 수 있는 웹 접근성에도 관심이 많습니다! 프론트엔드 경험을 쌓아가며 백엔드까지 아우르는 풀스택 개발자로 성장하고 싶습니다. 작은 디테일 하나로도 따뜻함을 전할 수 있는 개발자가 되고 싶습니다☺️",
    github: "https://github.com/parkjoah"
  },
  {
    name: "손민재",
    prfImg: "../img/member_3.png",
    mbti: "ESTP",
    field: "프론트엔드 개발자",
    stack: "JavaScript, TypeScript, React, Next.js",
    comment: "UI/UX, 클린 코드에 관심 많은 프론트엔드 개발자 손민재입니다! 프론트에만 집중되지 않고 풀스택형 인재로 성장하고 싶습니다. 혼자 말고 같이 성장해요 :)",
    github: "https://github.com/MinJaeSon"
  },
  {
    name: "이경민",
    prfImg: "../img/member_4.png",
    mbti: "ISTJ",
    field: "백엔드 개발자",
    stack: " Java, python, Spring Boot, MySQL, HTML/CSS",
    comment: "백엔드 구조, 자동화, 그리고 사용성이 좋은 프론트까지 서비스 전반을 이해하는 풀스택을 향해 달리는 이경민입니다. 협업으로 배우고 나누면서 힘내봅시다! 🙂",
    github: "https://github.com/rudals831"
  },
  {
    name: "이수림",
    prfImg: "../img/member_5.png",
    mbti: "ISTJ",
    field: "풀스택 개발자",
    stack: "Java, Javascript, C, React, Node.js",
    comment: "변화하는 트렌드에 뒤처지지 않고 끊임없이 학습하며 성장하고 싶은 개발자 이수림입니다. 새로운 기술을 빠르게 습득하고 문제를 해결하는 능력을 키워나가겠습니다!",
    github: "https://github.com/surimleeee"
  },
  {
    name: "유지우",
    prfImg: "../img/member_6.png",
    mbti: "ISFP",
    field: "풀스택 개발자",
    stack: "kotlin, react, node.js",
    comment: "사용자 중심의 경험을 설계하고, 프론트엔드부터 백엔드까지 완성도 높은 서비스를 구현하는 개발자가 되겠습니다.끊임없는 학습과 도전을 통해 기술 변화에 능동적으로 대응하는 유연한 풀스택 개발자로 성장하겠습니다!",
    github: "https://github.com/practac"
  },
  {
    name: "유창민",
    prfImg: "../img/member_7.png",
    mbti: "ISFP",
    field: "백엔드 개발자",
    stack: "Java",
    comment: "LG CNS AM Inspire 부트캠프를 통해 본격적으로 코딩을 접하게 된 유창민입니다! 시작은 초라하지만 끝은 창대하리라 믿습니다. 함께 배우고 조금씩 성장해나가요! 화이팅!",
    github: "https://github.com/changchangdaero"
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const memberList = document.querySelector(".memberList");

  members.forEach((member) => {
    const card = document.createElement("div");
    card.classList.add("memberCard");
    card.dataset.name = member.name;
    card.dataset.mbti = member.mbti;
    card.dataset.field = member.field;
    card.dataset.stack = member.stack;
    card.dataset.comment = member.comment;
    card.dataset.github = member.github;

    card.innerHTML = `
      <img src="${member.prfImg}" alt="${member.name}" />
      <p>${member.name}</p>
    `;
    
    memberList.appendChild(card);
  });

  const detailSection = document.querySelector(".memberDetail");
  const detailImg = document.getElementById("detailImg");
  const detailName = document.getElementById("detailName");
  const detailMbti = document.getElementById("detailMbti");
  const detailField = document.getElementById("detailField");
  const detailStack = document.getElementById("detailStack");
  const detailComment = document.getElementById("detailComment");
  const detailGithub = document.getElementById("detailGithub");

  const memberCards = document.querySelectorAll(".memberCard");

  memberCards.forEach(card => {
    card.addEventListener("click", () => {
      detailImg.src = card.querySelector("img").src;
      detailName.textContent = card.dataset.name;
      detailMbti.textContent = card.dataset.mbti;
      detailField.textContent = card.dataset.field;
      detailStack.textContent = card.dataset.stack;
      detailComment.textContent = card.dataset.comment;
      detailGithub.href = card.dataset.github;

      detailSection.style.display = "flex"; 
    });
  });
});``

// 버튼 요소 가져오기
const scrollTopBtn = document.getElementById("scrollTopBtn");

// 스크롤 시 버튼 표시/숨기기
window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// 버튼 클릭 시 nav bar로 이동
scrollTopBtn.onclick = function () {
  window.scrollTo({
    top: 200,
    behavior: "smooth"
  });
};