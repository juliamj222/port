import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../../../App.css";
import CommentedPost from "../../../assets/Commented/CommentedPost.jpg";
import CommentedFeed from "../../../assets/Commented/CommentedFeed.jpg";
import CommentedPatch from "../../../assets/Commented/CommentedPatch.jpg";

function CommentedBlog() {
  return (
    <>
      <div id="commentedWrapper">
        <h1 className="title">Commented Blog Walkthrough</h1>
        <div className="projectWrap">
          <div className="projectExplained">
            {" "}
            <br />
            <h1>Commented Blog</h1>
            Backend of a blog application, utilizing Model View Controller
            architecture.
            <br />
            <br />
            <h2>Technology Stack</h2>
            Node
            <br />
            Express
            <br />
            Dotenv
            <br />
            <br />
            <h2>Stories</h2>
            · Display All Comments:
            <br />
            Given the need to display all comments.
            <br />
            When accessing the endpoint that displays all comments from the
            database (using blog.json).
            <br />
            Then all comments are displayed.
            <br />{" "}
            <img
              src={CommentedFeed}
              className="screenShot"
              alt="Comments feed"
            />{" "}
            <br />
            · Display Single Comment:
            <br />
            Given the need to display a single comment.
            <br />
            When accessing the endpoint that displays one comment selected by
            its post_id.
            <br />
            Then the specified comment is displayed.
            <br />
            <br />
            · Create New Entry:
            <br />
            Given the need to create a new entry.
            <br />
            When accessing the endpoint to create a new entry, appended to the
            .json file's outermost array.
            <br />
            Then a new entry is successfully created.
            <br />{" "}
            <img
              src={CommentedPost}
              className="screenShot"
              alt="New comment"
            />{" "}
            <br />
            · Update Existing Entry:
            <br />
            Given the need to update an existing entry.
            <br />
            When accessing the endpoint to update an entry with a specified
            post_id.
            <br />
            Then the selected entry is successfully updated.
            <br />{" "}
            <img
              src={CommentedPatch}
              className="screenShot"
              alt="Updating a comment"
            />{" "}
            <br />
            · Delete Entry:
            <br />
            Given the need to delete an entry.
            <br />
            When accessing the endpoint to delete an entry using a specified
            parameter.
            <br />
            Then the selected entry is successfully deleted.
            <br />
            <br />
          </div>
          <br />
          <a
            href="https://github.com/juliamj222/commented-blog"
            target="_blank"
            rel="noopener noreferrer"
            className="externalLink"
          >
            Click here to see this GitHub repo.
          </a>
        </div>
      </div>
    </>
  );
}

export default CommentedBlog;
