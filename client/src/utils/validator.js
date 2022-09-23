export const isIdValid = (id) => {
  // 소문자 + 숫자 + 언더바/하이픈 허용 4~20자리
  return /^[a-z0-9_-]{4,20}$/.test(id);
};

export const isPwValid = (pw) => {
  // 문자, 숫자 1개이상 포함, 8자리 이상
  return /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/.test(pw);
};

export const ismatch = (a, b) => {
  return a === b;
};

export const isPhoneValid = (phone) => {
  // 전화번호 숫자만 11자리
  return /^[0-9]{11,11}$/.test(phone);
};

export const isEmailValid = (email) => {
  return /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(
    email
  );
};
