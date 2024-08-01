// eslint-disable-next-line no-unused-vars
const triangleArea = (a, b, c) => {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "边长必须为数字";
  }
  if (a <= 0 || b <= 0 || c <= 0) {
    return "边长必须大于0";
  }
  let s = (a + b + c) / 2;
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  if (isNaN(area)) {
    return "三角形不存在";
  }
  return area;
}

const imgUrlList = [
  "./assets/tsinghua-start.jpg",
  "./assets/tsinghua-spring.jpg",
  "./assets/tsinghua-spring2.jpg",
  "./assets/tsinghua-summer.jpg",
  "./assets/tsinghua-fall.jpg",
  "./assets/tsinghua-winter.jpg",
];
const randomNum = Math.floor(Math.random() * imgUrlList.length);
const bodyDOMList = document.getElementsByTagName("body");
for (const bodyDOM of bodyDOMList) {
  bodyDOM.style.backgroundImage = `url(${imgUrlList[randomNum]})`;
}

const clockDOM = document.getElementById("clock");
setInterval(() => {
  const date = new Date().toLocaleDateString("zh-CN");
  const time = new Date().toLocaleTimeString("zh-CN");
  clockDOM.innerText = `今天是 ${date}，现在是北京时间 ${time}`;
}, 1000);
