const generateBtn = document.getElementById("generate-btn");
const storyText = document.getElementById("story-text");

const names = ["Alex", "Sam", "Jordan", "Taylor", "Casey"];
const locations = ["the moon", "Mars", "a distant galaxy", "a virtual world", "the dark web"];
const actions = ["discovered a hidden truth", "fought an intergalactic war", "hacked into a secret database", "explored the unknown", "became the hero of the virtual realm"];

function generateStory() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomLocation = locations[Math.floor(Math.random() * locations.length)];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];

  const story = `${randomName} embarked on a journey to ${randomLocation} to ${randomAction}.`;
  storyText.textContent = story;
}

generateBtn.addEventListener("click", generateStory);

// Initialize with a random story on page load
generateStory();
