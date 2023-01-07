import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
      <form>
        <label>Blog Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body: </label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        <label>Blog Author: </label>
        <select
        value = {author}
        onChange={(e) => setAuthor(e.target.value)}
        >
        <option value="">Select Author:</option>
          <option value="khalid">Khalid</option>
          <option value="ahmed">Ahmed</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
