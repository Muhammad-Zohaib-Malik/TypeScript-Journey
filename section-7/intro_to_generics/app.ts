interface FormData<T> {
  isValid: boolean;
  data: T;
}

interface RegisterForm {
  username: string;
  email: string;
  password: string;
}

interface LoginForm {
  email: string;
  password: string;
}

interface PostForm {
  postContent: string;
}

const registerForm: FormData<RegisterForm> = {
  isValid: true,
  data: {
    username: "Zohaib",
    email: "zohaib@gmail.com",
    password: "abcd",
  },
};

const loginForm: FormData<LoginForm> = {
  isValid: false,
  data: {
    email: "zohaib@gmail.com",
    password: "abcd",
  },
};

const createPostForm: FormData<PostForm> = {
  isValid: true,
  data: {
    postContent: "abcd",
  },
};
