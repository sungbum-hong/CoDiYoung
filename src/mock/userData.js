// Mock 데이터 - UI 테스트용
export const mockUserData = [
  {
    id: 1,
    name: "김지호",
    phoneNumber: "010-1234-5678",
    email: "jiho@codiyoung.com",
    password: "$2b$10$K3zXvzR5m9L7nQ8xJ1mH.OxWpY4uF2tG8sA3dC6eV9bN0jR7kM5qE",
    userCategory: "CODING",
    createdAt: "2024-01-15T09:00:00.000Z"
  },
  {
    id: 2,
    name: "이서연",
    phoneNumber: "010-2345-6789",
    email: "seoyeon@codiyoung.com",
    password: "$2b$10$L4aYw6zS6n0M8oR9yK2nI.PzXqZ5vG3uH9tD7fW0cAbO1kS8lN6rF",
    userCategory: "DESIGN",
    createdAt: "2024-01-20T14:30:00.000Z"
  },
  {
    id: 3,
    name: "박민수",
    phoneNumber: "010-3456-7890",
    email: "minsu@codiyoung.com",
    password: "$2b$10$M5bZx7aT7o1N9pS0zL3oJ.QaYr6wH4vI0uE8gX1mH.OxWpY4uF2tG8sA3dC6eV9bN0jR7kM5qE",
    userCategory: "VIDEO_EDITING",
    createdAt: "2024-02-01T11:15:00.000Z"
  },
  {
    id: 4,
    name: "최유진",
    phoneNumber: "010-4567-8901",
    email: "yujin@codiyoung.com",
    password: "$2b$10$N6cAy8bU8p2O0qT1aM4pK.RbZs7xI5wJ1vF9hY2eCdQ3nU0pP8tH",
    userCategory: "CODING",
    createdAt: "2024-02-10T16:45:00.000Z"
  },
  {
    id: 5,
    name: "한동현",
    phoneNumber: "010-5678-9012",
    email: "donghyun@codiyoung.com",
    password: "$2b$10$O7dBz9cV9q3P1rU2bN5qL.ScAt8yJ6xK2wG0iZ3fDeR4oV1qQ9uI",
    userCategory: "DESIGN",
    createdAt: "2024-02-15T10:20:00.000Z"
  },
  {
    id: 6,
    name: "정수빈",
    phoneNumber: "010-6789-0123",
    email: "subin@codiyoung.com",
    password: "$2b$10$P8eCa0dW0r4Q2sV3cO6rM.TdBu9zK7yL3xH1jA4gEeS5pW2rR0vJ",
    userCategory: "VIDEO_EDITING",
    createdAt: "2024-03-01T13:10:00.000Z"
  },
  {
    id: 7,
    name: "김태영",
    phoneNumber: "010-7890-1234",
    email: "taeyoung@codiyoung.com",
    password: "$2b$10$Q9fDb1eX1s5R3tW4dP7sN.UeCv0aL8zM4yI2kB5hFfT6qX3sS1wK",
    userCategory: "CODING",
    createdAt: "2024-03-05T08:30:00.000Z"
  }
];

// 페이지네이션을 위한 함수
export const getMockUserPage = (lastUserId = null, limit = 10) => {
  let startIndex = 0;

  if (lastUserId) {
    const lastIndex = mockUserData.findIndex(user => user.id === lastUserId);
    startIndex = lastIndex + 1;
  }

  const endIndex = startIndex + limit;
  const pageData = mockUserData.slice(startIndex, endIndex);

  return {
    data: pageData,
    nextCursor: pageData.length > 0 ? pageData[pageData.length - 1].id : null,
    hasNext: endIndex < mockUserData.length
  };
};