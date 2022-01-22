import axios from "axios";
import { ChangeEvent, FC, useState } from "react";
import classes from "./CreatePosts.module.css";

interface Form {
  title: string;
  image: string;
  text: string;
}

const postNewsHandler = async (post: Form) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}api/posts`,
    post,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  console.log(response);
};

const CreatePosts: FC = () => {
  const [error, setError] = useState<boolean>(false);
  const [form, setForm] = useState<Form>({
    title: "",
    image: "",
    text: "",
  });

  const titleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, title: event.target.value });
  };

  const imageUrlChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, image: event.target.value });
  };

  const textareaChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, text: event.target.value });
  };

  const submitHandler = () => {
    for (const [_, value] of Object.entries(form)) {
      if (value === "") return setError(true);
    }
    postNewsHandler(form);
  };

  return (
    <section className={classes.section}>
      <h1 className={classes.title}>Create Posts</h1>
      {error && <p className={classes.errorMsg}>Fields cannot be empty!</p>}
      <input
        type="text"
        onChange={titleChangeHandler}
        className={classes.input}
        placeholder="Title..."
      />
      <input
        type="text"
        onChange={imageUrlChangeHandler}
        className={classes.input}
        placeholder="Image url..."
      />
      <input
        type="textarea"
        name="description"
        onChange={textareaChangeHandler}
        className={classes.textarea}
        placeholder="Text..."
      />
      <button className={classes.btn} onClick={submitHandler}>
        Create Posts
      </button>
    </section>
  );
};

export default CreatePosts;
