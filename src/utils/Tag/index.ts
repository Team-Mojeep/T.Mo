// 문자 배열을 넘겨주면 문자열로 돌려줌
export const ChangeTagString = (skill: string[]) => {
  const strSkill = skill.join("ლ(╹◡╹ლ)");
  return strSkill;
};
// 문자열을 넘겨주면 문자 배열로 돌려줌
export const ChangeStringTag = (strSkill: string) => {
  const skillData = strSkill.split("ლ(╹◡╹ლ)");
  return skillData;
};
