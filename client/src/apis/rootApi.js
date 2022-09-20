const BASE_URL = "";

const API = {
  COMMON: {
    JOIN: `${BASE_URL}/user/join`,
    LOGIN: `${BASE_URL}/user/login`,
    LOGOUT: `${BASE_URL}/user/logout`,
    WITHDRAWAL: `${BASE_URL}/user/edit#`,

    CAMPING_LIST_READ: `${BASE_URL}/main`,
    CAMPING_DETAIL_READ: `${BASE_URL}/client/detail/{post-id}`,
    CAPMING_SORT_REGION: `${BASE_URL}/main`,
    CAPMING_SORT_PRICE: `${BASE_URL}/main`,

    // 이건 아마 client 쪽인듯? 일단 여기
    CAMPING_POSIBLE_RESERVATION_READ: `${BASE_URL}/client/detail/{post-id}`,
  },

  CLIENT: {
    MYPAGE_READ: `${BASE_URL}/user/info`,
    MYPAGE_UPDATE: `${BASE_URL}/user/edit`,
    REVIEW_CREATE: `${BASE_URL}/client/rev`,
    REVIEW_READ: `${BASE_URL}/client/rev`,
    REVIEW_UPDATE: `${BASE_URL}/client/rev{rev-id}`,
    REVIEW_DELETE: `${BASE_URL}/client/rev{rev-id}`,
    RESERVATION_CREATE: `${BASE_URL}/client/detail/{post-id}`,
    RESERVATION_READ: `${BASE_URL}/client/info/rez`,
    RESERVATION_BEFORE_READ: `${BASE_URL}/client/info/before`,
    RESERVATION_DELETE: `${BASE_URL}/client/info/rez{rez-id}`,
  },

  ADMIN: {
    POST_CREATE: `${BASE_URL}/admin/post`,
    POST_UPDATE: `${BASE_URL}/admin/post/{post-id}`,
    POST_DELETE: `${BASE_URL}/admin/post/{post-id}`,
    RESERVATION_READ: `${BASE_URL}/admin/rez`,
    RESERVATION_CANCEL: `${BASE_URL}/admin/rez/{rez-id}`,
    REVIEW_READ: `${BASE_URL}/admin/rev`,
    REVIEW_EDIT: `${BASE_URL}/admin/rev/{comment-id}`,
    REVIEW_DELETE: `${BASE_URL}/admin/rev/{comment-id}`,
    REVIEW_REPLY: `${BASE_URL}/admin/rev/{rev-id}`,
  },
};

export default API;
