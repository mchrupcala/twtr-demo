export const fetchTodos = async () => {
  try {
    return fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
      return res.json();
    });
  } catch (err) {
    console.log("something went wrong: ", err);
    return { status: 500, error: "Soemhting went wrong." };
  }
};
