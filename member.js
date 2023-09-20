function skillsMember() {
  var skills = ["HTML", "CSS", "JS", "PHP", "MySQL"];
  var member = {
    name: "John",
    age: 25,
    skills: skills,
    showSkills: function() {
      var skillsStr = "";
      for (var i = 0; i < this.skills.length; i++) {
        skillsStr += this.skills[i] + " ";
      }
      console.log("Skills: " + skillsStr);
    }
  };
  return member;
}