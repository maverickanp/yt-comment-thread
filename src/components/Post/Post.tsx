import { useState, ChangeEvent, FormEvent, InvalidEvent } from "react";
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import {
  publishedDateFormatted,
  publishedDateRelativeToNow,
} from "../../utils/dateTimeUtils";

import { getRandomUUID } from "../../utils/uniquenessUtils";
import styles from "./Post.module.css";

import { IComment, IPostProps } from "../../interfaces/index";


const commentsLoaded: IComment[] = [
  {
    id: getRandomUUID(),
    author: {
      avatar_url: "https://github.com/maverickanp.png",
      name: "Artur Pedrosa",
      role: "CTO@Maverick",
    },
    published_at: new Date("2023-08-15 06:05:00"),
    content: "Com certeza, e ainda digo mais...nao digo mais nada!",
    like: 10,
  },
  {
    id: getRandomUUID(),
    author: {
      avatar_url: "https://github.com/livibellyrds.png",
      name: "Danielle Rodrigues",
      role: "CEO@Maverick",
    },
    published_at: new Date("2023-08-12 09:35:00"),
    content: "Tentei dizer e ja estava dizido",
    like: 15,
  },
  {
    id: getRandomUUID(),
    author: {
      avatar_url: "https://github.com/jaarsi.png",
      name: "Jaarsilva",
      role: "CFO@Maverick",
    },
    published_at: new Date("2023-08-11 09:35:00"),
    content: "Sem dizer o que nao queria ter dizido por nao dizer mais nada",
    like: 35,
  },
];

export function Post(post: IPostProps) {
  const [comments, setComments] = useState(commentsLoaded);
  const [newCommentText, setNewCommentText] = useState("");


  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    const newComment: IComment = {
      id: getRandomUUID(),
      author: {
        name: "Artur Pedrosa",
        role: "Dono@Maverick",
        avatar_url: "https://github.com/maverickanp.png",
      },
      published_at: new Date(),
      content: newCommentText,
      like: 0,
    };

    setComments([...comments, newComment]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");

    setNewCommentText(event.target.value);
  }

  function deleteComment(commentId: string) {
    console.log(commentId);
    const commentsWithoutDeletedComment = comments.filter((comment) => {
      return comment.id !== commentId;
    });

    setComments(commentsWithoutDeletedComment);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Preenche ae");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar hasBorder src={post.author.avatar_url} />
            <div className={styles.authorInfo}>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div>
          <time
            title={publishedDateFormatted(post.published_at)}
            dateTime={post.published_at.toISOString()}
          >
            {publishedDateRelativeToNow(post.published_at)}
          </time>
        </header>
        <div className={styles.content}>
          {post.content.map((line) => {
            if (line.type === "paragraph") {
              return (
                <p key={line.id}>
                  {line.id}-{line.content}
                </p>
              );
            } else if (line.type === "link") {
              return (
                <p key={line.id}>
                  <a href="#">
                    {line.id}-{line.content}
                  </a>
                </p>
              );
            }
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Deixe um comentário</strong>
          <textarea
            name="comment"
            value={newCommentText}
            placeholder="Deixe um comentário"
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          />
          <footer>
            <button
              type="submit"
              onClick={handleCreateNewComment}
              disabled={isNewCommentEmpty}
            >
              Comentar
            </button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map((comment) => {
            return (
              <Comment
                key={comment.id}
                {...comment}
                onDeleteComment={deleteComment}
              />              
            );
          })}
        </div>
        <div className={styles.commentQuantity}>
          existem {comments.length} comments
        </div>
      </article>
    </>
  );
}

export default Post;
