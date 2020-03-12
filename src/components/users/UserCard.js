import React, { useState } from "react";
import PostEdit from "./PostEdit";

const PostCard = ({ post, deletePost, editPost }) => {
  const [editing, setEditing] = useState(false);
  const [userEdit, setUserEdit] = useState(user);
  const [editMode, setEditMode] = useState(false);

  const handleDeleteClick = () => {
    deletePost(user);
    window.location.reload();
  };

  const handleEditClick = () => {
    setEditing(true);
    setEditMode(!editMode);
  };

  const handleSubmit = e => {
    e.preventDefault();
    editPost(userEdit);
    setEditing(false);
    // window.location.reload()
  };

  const handleChange = e => {
    setUserEdit({ ...userEdit, [e.target.name]: e.target.value });
  };

  return (
    <div className="post-cta">
      {/* <button onClick={handleEditClick}>{!editMode? 'Edit' : 'Cancel'}</button> */}

      <div>
        <h4>{user.id}</h4>
        <h4>{user.name}</h4>

        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
      <div className="uer-edit">
        {editing && (
          <form onSubmit={handleSubmit}>
            <h4>Editing {post.title}</h4>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="text"
              value={user.text}
              onChange={handleChange}
            />

            <label htmlFor="contents">Contents</label>
            <textarea
              type="textbox"
              name="contents"
              className="content-text"
              value={postEdit.contents}
              onChange={handleChange}
            />

            <button type="submit">submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default PostCard;
