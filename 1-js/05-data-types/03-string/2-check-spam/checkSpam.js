function checkSpam(str) {
  return (
    str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")
  );
}

console.log(
  checkSpam("buy ViAgRA now") == true,
  checkSpam("free xxxxx") == true,
  checkSpam("innocent rabbit") == false
);
